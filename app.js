// ─── APP STATE MANAGEMENT ────────────────────────────────────────────────────
const AppState = {
    currentModule: [],
    currentIndex: 0,
    currentActiveID: "",
    unlockedModules: JSON.parse(localStorage.getItem('pathUnlocked')) || ['testicular.1'],
    
    // Interactive question scratchpads
    userSelections: [],
    selectedChip: null,
    userOrder: [],
    userPairs: [],
    activeSelection: { left: null, right: null },
    
    // Scoring & Tracking
    totalQuestionsCount: 0,
    correctFirstTryCount: 0,
    hasAttemptedCurrentQuestion: false,
    missedConcepts: [],
    isReviewNodeGlobal: false
};

// ─── UTILITIES ────────────────────────────────────────────────────────────────

function shuffleArray(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

function formatText(rawText) {
    if (!rawText || typeof rawText !== 'string') return rawText || "";
    return rawText
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/_{3,}/g, '[[LINE]]')
        .replace(/_(.*?)_/g, '<i>$1</i>')
        .replace(/\[\[LINE\]\]/g, '____________')
        .replace(/\n/g, '<br>');
}

// ─── AUDIO SYSTEM ─────────────────────────────────────────────────────────────

const FeedbackAudio = {
    correct: new Audio('assets/audio/correct.mp3'),
    incorrect: new Audio('assets/audio/incorrect.mp3'),
    complete: new Audio('assets/audio/lesson_complete.mp3'),
    
    play(type) {
        const sound = this[type];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(() => {});
        }
    }
};

// ─── MAP UI CONTROLLER ────────────────────────────────────────────────────────

function applyWindingPath() {
    document.querySelectorAll('.node-wrapper').forEach((node, index) => {
        node.style.transform = `translateX(${Math.sin(index * 0.8) * 70}px)`;
    });
}

function updateMapUI() {
    AppState.unlockedModules.forEach(id => {
        const node = document.getElementById(`node-${id}`);
        if (node) {
            node.classList.remove('locked');
            node.classList.add('unlocked');
        }
    });

    applyWindingPath();
}
updateMapUI();

function showPreview(id) {
    if (!AppState.unlockedModules.includes(id)) return;
    const module = moduleContent[id];
    if (!module) return;

    document.getElementById('modal-title').innerText = module.title;
    document.getElementById('modal-objectives').innerHTML =
        module.objectives.map(obj => `<li>${obj}</li>`).join('');
    document.getElementById('start-lesson-btn').onclick = () => {
        document.getElementById('lesson-modal').classList.add('hidden');
        startModule(id);
    };
    document.getElementById('lesson-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('lesson-modal').classList.add('hidden');
}

function exitLesson() {
    document.getElementById('map-view').classList.remove('hidden');
    document.getElementById('lesson-view').classList.add('hidden');
}

// ─── LESSON FLOW ENGINE ───────────────────────────────────────────────────────

function startModule(id) {
    AppState.currentActiveID = id;
    const module = moduleContent[id];
    if (!module) return;

    AppState.isReviewNodeGlobal = !!(module.isReviewNode || id.includes('review'));
    AppState.currentModule = JSON.parse(JSON.stringify(module.data));
    AppState.currentIndex = 0;

    AppState.correctFirstTryCount = 0;
    AppState.totalQuestionsCount = AppState.currentModule.filter(
        item => item.type !== 'concept'
    ).length;
    AppState.hasAttemptedCurrentQuestion = false;
    AppState.missedConcepts = [];

    document.getElementById('map-view').classList.add('hidden');
    document.getElementById('lesson-view').classList.remove('hidden');
    renderScreen();
}

function advanceStep() {
    AppState.currentIndex++;
    if (AppState.currentIndex < AppState.currentModule.length) {
        renderScreen();
    } else {
        finishModule();
    }
}

const nextBtn = document.getElementById('next-btn');
if (nextBtn) {
    nextBtn.onclick = () => {
        const feedbackBar = document.getElementById('feedback-bar');
        feedbackBar.classList.remove('show');
        
        // Small timeout to let the bar slide down smoothly before advancing
        setTimeout(() => {
            AppState.currentIndex++;
            if (AppState.currentIndex < AppState.currentModule.length) {
                document.getElementById('stage').scrollTop = 0;
                renderScreen();
            } else {
                finishModule();
            }
        }, 150);
    };
}

function finishModule() {
    document.getElementById('feedback-bar').classList.remove('show');
    document.getElementById('progress-bar').style.width = "100%";

    const data = moduleContent[AppState.currentActiveID];
    const isReview = data && (data.isReviewNode || AppState.currentActiveID.includes('review'));

    if (isReview) {
        renderReviewSummary(data);
    } else {
        renderStandardCompletion(data);
    }
}

function renderReviewSummary(data) {
    const total = AppState.totalQuestionsCount;
    const correct = AppState.correctFirstTryCount;
    const scorePercent = total > 0 ? Math.round((correct / total) * 100) : 100;
    
    let starsHtml = '', tierTitle = '', tierText = '', titleColor = 'var(--text)';
    
    if (scorePercent >= 90) {
        starsHtml = `<i class="fas fa-star" style="font-size:2rem;color:#ffce00"></i><i class="fas fa-star" style="font-size:2.5rem;color:#ffce00;margin:0 10px;"></i><i class="fas fa-star" style="font-size:2rem;color:#ffce00"></i>`;
        tierTitle = "Board Certified!";
        tierText = "Incredible performance! You have mastered the core pathophysiological principles.";
        titleColor = "var(--success-green)";
    } else if (scorePercent >= 70) {
        starsHtml = `<i class="fas fa-star" style="font-size:2rem;color:#ffce00"></i><i class="fas fa-star" style="font-size:2.5rem;color:#ffce00;margin:0 10px;"></i><i class="far fa-star" style="font-size:2rem;color:#ccc"></i>`;
        tierTitle = "Great Clinical Reasoning!";
        tierText = "Solid understanding, though a few nuances require sharpening.";
        titleColor = "var(--orange)";
    } else {
        starsHtml = `<i class="fas fa-star" style="font-size:2rem;color:#ffce00"></i><i class="far fa-star" style="font-size:2.5rem;color:#ccc;margin:0 10px;"></i><i class="far fa-star" style="font-size:2rem;color:#ccc"></i>`;
        tierTitle = "Good Effort!";
        tierText = "Review your missed diagnostic concepts to build a stronger foundation.";
        titleColor = "var(--error-red)";
    }

    const canProgress = (scorePercent >= 80);
    let diagnosticHtml = AppState.missedConcepts.length > 0 ? `
        <div style="text-align:left; margin-top:25px; border-top:1px solid #ddd; padding-top:15px; max-width:400px; margin:auto;">
            <h3 style="font-size:1.1rem; margin-bottom:10px; color:var(--text);">🩺 Unit Topics to Review:</h3>
            <ul style="padding-left:20px; color:#555; font-size:0.95rem; line-height:1.6;">
                ${AppState.missedConcepts.map(t => `<li>${t}</li>`).join('')}
            </ul>
        </div>` : '';

    if (canProgress) {
        FeedbackAudio.play('complete');
        let nextID = data.next || getNextModuleID(AppState.currentActiveID);
        if (moduleContent[nextID] && !AppState.unlockedModules.includes(nextID)) {
            AppState.unlockedModules.push(nextID);
            localStorage.setItem('pathUnlocked', JSON.stringify(AppState.unlockedModules));
        }
        updateMapUI();
    }

    document.getElementById('stage').innerHTML = `
        <div style="margin-top:30px; padding: 0 15px;">
            <div style="margin-bottom:15px;">${starsHtml}</div>
            <h1 style="color:${titleColor}; margin-bottom:5px;">${tierTitle}</h1>
            <p style="font-size:1rem; color:#555; margin-bottom:15px; max-width:400px; margin:auto;">${tierText}</p>
            <div style="background:#eef9ec; padding:10px; border-radius:12px; display:inline-block; margin-bottom:20px;">
                <span style="font-size:1.3rem; font-weight:bold; color:var(--success-green);">${correct} / ${total} Correct</span>
                <span style="font-size:1rem; color:#666;">(${scorePercent}%)</span>
            </div>
            ${diagnosticHtml}
            <div style="margin-top:25px; display:flex; gap:10px; justify-content:center;">
                <button class="primary-btn" style="margin:0; flex:1;" onclick="startModule(AppState.currentActiveID)">Practice Again</button>
                <button class="option-btn" style="margin:0; flex:1;" onclick="exitLesson()">Back to Map</button>
            </div>
        </div>`;
}

function renderStandardCompletion(data) {
    FeedbackAudio.play('complete');
    let nextID = data.next || getNextModuleID(AppState.currentActiveID);
    if (moduleContent[nextID] && !AppState.unlockedModules.includes(nextID)) {
        AppState.unlockedModules.push(nextID);
        localStorage.setItem('pathUnlocked', JSON.stringify(AppState.unlockedModules));
        updateMapUI();
    }

    document.getElementById('stage').innerHTML = `
        <div class="completion-screen">
            <div style="font-size:4rem; margin-bottom:20px;">🎉</div>
            <h1 style="color:var(--success-green); margin-bottom:5px;">Lesson Completed!</h1>
            <p>Great job working through this study module.</p>
            <div style="margin-top:25px; display:flex; gap:10px; justify-content:center;">
                <button class="primary-btn" style="margin:0; flex:1;" onclick="startModule(AppState.currentActiveID)">Practice Again</button>
                <button class="option-btn" style="margin:0; flex:1;" onclick="exitLesson()">Back to Map</button>
            </div>
        </div>`;
}

function getNextModuleID(activeID) {
    const parts = activeID.split('.');
    parts[parts.length - 1] = parseInt(parts[parts.length - 1]) + 1;
    return parts.join('.');
}

// ─── RENDER ENGINE ────────────────────────────────────────────────────────────

function renderScreen() {
    const stage = document.getElementById('stage');
    stage.scrollTop = 0;
    const data = AppState.currentModule[AppState.currentIndex];
    if (!data) return;

    AppState.hasAttemptedCurrentQuestion = false;
    stage.innerHTML = '';
    document.getElementById('feedback-bar').classList.remove('show');
    document.getElementById('progress-bar').style.width =
        (AppState.currentIndex / AppState.currentModule.length * 100) + "%";

    const reviewHeader = data.isReview ? `<div class="review-text">⚠️ Reviewing Mistake</div>` : '';

    if (data.type === "concept") {
        renderConceptScreen(stage, data);
    } else if (data.type === "fill") {
        renderFillScreen(stage, data, reviewHeader);
    } else if (data.type === "sort") {
        renderSortScreen(stage, data, reviewHeader);
    } else if (data.type === "order") {
        renderOrderScreen(stage, data, reviewHeader);
    } else if (data.type === "match") {
        renderMatchScreen(stage, data, reviewHeader);
    } else {
        renderMCQScreen(stage, data, reviewHeader);
    }
}

// Specific Screen Renderers
// function renderConceptScreen(stage, data) {
//     let imagesHtml = '';
//     if (data.images && Array.isArray(data.images)) {
//         imagesHtml = `
//             <div class="concept-images-gallery" style="margin: 20px 0; display: flex; flex-direction: column; gap: 20px;">
//                 ${data.images.map(img => `
//                     <div class="single-image-wrapper" style="text-align: center;">
//                         <img src="${img.url}" alt="${img.title || 'Concept illustration'}" onclick="openLightbox('${img.url}', '${img.title || ''}')" style="max-width: 100%; max-height: 250px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); cursor: pointer;">
//                         ${img.title ? `<div class="image-title" style="font-size: 0.85rem; color: #666; font-style: italic; margin-top: 8px;">${formatText(img.title)}</div>` : ''}
//                         ${img.reference ? `<div class="image-reference" style="font-size: 0.75rem; color: #999; margin-top: 4px;">${img.reference}</div>` : ''}
//                     </div>
//                 `).join('')}
//             </div>`;
//     } else if (data.image) {
//         imagesHtml = `<div style="text-align: center; margin: 20px 0;"><img src="${data.image}" style="max-width: 100%; max-height: 250px; border-radius: 8px;"></div>`;
//     }

//     stage.innerHTML = `
//         <h2 style="color:var(--blue)">${formatText(data.title)}</h2>
//         <div style="font-size:1.1rem;text-align:left;line-height:1.6;margin-bottom:20px;">${formatText(data.text)}</div>
//         ${data.subtext ? `<div class="concept-card" style="border-left:5px solid var(--blue);padding:15px;background:#f0f8ff;border-radius:15px;text-align:left;margin-bottom:20px;">${formatText(data.subtext)}</div>` : ''}
//         ${imagesHtml}
//         <button class="primary-btn" onclick="advanceStep()">${data.buttonText || 'Continue'}</button>`;
// }

function renderConceptScreen(stage, data) {
    let imagesHtml = '';
    
    if (data.images && Array.isArray(data.images)) {
        imagesHtml = `
            <div class="concept-images-gallery" style="margin: 20px 0; display: flex; flex-direction: column; gap: 20px;">
                ${data.images.map(img => {
                    const caption = img.title || '';
                    const srcText = img.source || img.reference || '';
                    return `
                    <div class="single-image-wrapper" style="text-align: center;">
                        <img src="${img.url}" alt="${caption}" onclick="openLightbox('${img.url}', '${caption.replace(/'/g, "\\'")}', '${srcText.replace(/'/g, "\\'")}')" style="max-width: 100%; max-height: 250px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); cursor: pointer;">
                        ${caption ? `<div class="image-title" style="font-size: 0.85rem; color: #475569; font-weight: 600; margin-top: 8px;">${formatText(caption)}</div>` : ''}
                        ${srcText ? `<div class="image-source" style="font-size: 0.75rem; color: #94a3b8; font-style: italic; margin-top: 2px;">${formatText(srcText)}</div>` : ''}
                    </div>
                `}).join('')}
            </div>`;
    } else if (data.image) {
        const caption = data.imageTitle || '';
        const srcText = data.source || data.reference || '';
        imagesHtml = `
            <div class="single-image-wrapper" style="text-align: center; margin: 20px 0;">
                <img src="${data.image}" alt="Concept image" onclick="openLightbox('${data.image}', '${caption.replace(/'/g, "\\'")}', '${srcText.replace(/'/g, "\\'")}')" style="max-width: 100%; max-height: 250px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); cursor: pointer;">
                ${caption ? `<div class="image-title" style="font-size: 0.85rem; color: #475569; font-weight: 600; margin-top: 8px;">${formatText(caption)}</div>` : ''}
                ${srcText ? `<div class="image-source" style="font-size: 0.75rem; color: #94a3b8; font-style: italic; margin-top: 2px;">${formatText(srcText)}</div>` : ''}
            </div>`;
    }

    stage.innerHTML = `
        <h2 style="color:var(--blue)">${formatText(data.title)}</h2>
        <div style="font-size:1.1rem;text-align:left;line-height:1.6;margin-bottom:20px;">${formatText(data.text)}</div>
        ${data.subtext ? `<div class="concept-card" style="border-left:5px solid var(--blue);padding:15px;background:#f0f8ff;border-radius:15px;text-align:left;margin-bottom:20px;">${formatText(data.subtext)}</div>` : ''}
        ${imagesHtml}
        <button class="primary-btn" onclick="advanceStep()">${data.buttonText || 'Continue'}</button>`;
}

function renderFillScreen(stage, data, reviewHeader) {
    const ansLen = Array.isArray(data.answer) ? data.answer.length : 1;
    AppState.userSelections = new Array(ansLen).fill(null);
    let blankCount = 0;
    const qText = formatText(data.question).replace(/_{3,}/g, () =>
        `<span id="blank-${blankCount++}" class="fill-blank clickable-blank" onclick="clearBlank(${blankCount - 1})">&nbsp;</span>`
    );
    const shuffledFillOptions = shuffleArray(data.options.map((opt, idx) => ({ text: opt, originalIndex: idx })));

    stage.innerHTML = `
        ${reviewHeader}
        <div class="fill-instruction">Tap to fill, tap blank to clear</div>
        <h3 style="text-align:left;">${qText}</h3>
        <div id="options" class="word-bank">
            ${shuffledFillOptions.map(opt =>
                `<button class="option-btn fill-option" id="option-${opt.originalIndex}" onclick="checkFill(${opt.originalIndex}, this, '${opt.text.replace(/'/g, "\\'")}')">${formatText(opt.text)}</button>`
            ).join('')}
        </div>
        <button id="verify-fill-btn" class="primary-btn" style="display:none;margin-top:20px;" onclick="verifyFill()">CHECK ANSWER</button>`;
}

function renderSortScreen(stage, data, reviewHeader) {
    AppState.selectedChip = null;
    stage.innerHTML = `
        ${reviewHeader}
        <h3>${formatText(data.question)}</h3>
        <div class="fill-instruction">Tap a card, then tap a box to move it</div>
        <div id="sort-pool" class="sort-pool" onclick="placeInPool(this)">
            ${shuffleArray([...data.items]).map((item, i) =>
                `<div class="draggable-chip" id="chip-${i}" onclick="selectChip(this, event)" data-correct="${item.bucket}">${item.text}</div>`
            ).join('')}
        </div>
        <div class="bucket-container">
            ${data.buckets.map((b, i) =>
                `<div class="sort-bucket" onclick="placeInBucket(this)" data-id="${i}"><span class="unit-tag" style="position:static;font-size:0.6rem;margin-bottom:5px;display:block;">${b}</span></div>`
            ).join('')}
        </div>
        <button id="verify-sort-btn" class="primary-btn" style="display:none;margin-top:20px;" onclick="verifySort()">CHECK ANSWER</button>`;
}

function renderOrderScreen(stage, data, reviewHeader) {
    AppState.userOrder = [];
    stage.innerHTML = `
        ${reviewHeader}
        <h3>${formatText(data.question)}</h3>
        <div class="order-slots">
            ${data.items.map((_, i) => `<div class="order-slot" id="slot-${i}">?</div>`).join('')}
        </div>
        <div class="sort-pool">
            ${shuffleArray([...data.items]).map((item, i) =>
                `<button class="draggable-chip" id="chip-${i}" onclick="handleOrderTap('${item.replace(/'/g, "\\'")}', ${i})">${item}</button>`
            ).join('')}
        </div>`;
}

function renderMatchScreen(stage, data, reviewHeader) {
    AppState.userPairs = [];
    AppState.activeSelection = { left: null, right: null };
    const leftCol = shuffleArray(data.pairs.map((p, i) => ({ text: p.left, id: i })));
    const rightCol = shuffleArray(data.pairs.map((p, i) => ({ text: p.right, id: i })));
    
    stage.innerHTML = `
        ${reviewHeader}
        <h3>${formatText(data.question)}</h3>
        <div class="fill-instruction">Tap an item on the left, then find its match on the right</div>
        <div class="match-container">
            <div class="match-column">
                ${leftCol.map(item => `<button class="option-btn match-btn" id="left-${item.id}" onclick="handleMatchTap('left', ${item.id})">${item.text}</button>`).join('')}
            </div>
            <div class="match-column">
                ${rightCol.map(item => `<button class="option-btn match-btn" id="right-${item.id}" onclick="handleMatchTap('right', ${item.id})">${item.text}</button>`).join('')}
            </div>
        </div>
        <button id="verify-match-btn" class="primary-btn" style="display:none;margin-top:20px;" onclick="verifyMatch()">CHECK ANSWER</button>`;
}

function renderMCQScreen(stage, data, reviewHeader) {
    const header = data.type === "clinical" ? `<div style="color:var(--blue);font-weight:bold;margin-bottom:10px;">🩺 CLINICAL CASE</div>` : '';
    const shuffledOptions = shuffleArray(data.options.map((opt, idx) => ({ text: opt, originalIndex: idx })));

    stage.innerHTML = `
        ${reviewHeader}${header}
        <h3>${formatText(data.question)}</h3>
        <div id="options">
            ${shuffledOptions.map(opt => `<button class="option-btn" onclick="checkMCQ(${opt.originalIndex}, this)">${formatText(opt.text)}</button>`).join('')}
        </div>`;
}

// ─── QUESTION HANDLERS ────────────────────────────────────────────────────────

function checkMCQ(idx, btn) {
    document.querySelectorAll('.option-btn').forEach(b => b.style.pointerEvents = 'none');
    const data = AppState.currentModule[AppState.currentIndex];
    if (idx === data.answer) {
        if (!AppState.hasAttemptedCurrentQuestion && !data.isReview) AppState.correctFirstTryCount++;
        showFeedback(true, "✨ Correct!", data.explanation);
        btn.style.borderColor = "var(--success-green)";
    } else {
        addToMistakes(data);
        showFeedback(false, "❌ Not Quite", data.explanation);
        btn.style.borderColor = "var(--error-red)";
    }
    AppState.hasAttemptedCurrentQuestion = true;
}

function checkFill(idx, btn, val) {
    const emptyIdx = AppState.userSelections.indexOf(null);
    if (emptyIdx !== -1) {
        document.getElementById(`blank-${emptyIdx}`).innerText = val;
        btn.classList.add('used-option');
        AppState.userSelections[emptyIdx] = idx;
        const isComplete = !AppState.userSelections.includes(null);
        document.getElementById('verify-fill-btn').style.display = isComplete ? "block" : "none";
    }
}

function clearBlank(id) {
    const optIdx = AppState.userSelections[id];
    if (optIdx === null) return;
    document.getElementById(`blank-${id}`).innerHTML = "&nbsp;";
    document.getElementById(`option-${optIdx}`).classList.remove('used-option');
    AppState.userSelections[id] = null;
    document.getElementById('verify-fill-btn').style.display = "none";
}

function verifyFill() {
    const data = AppState.currentModule[AppState.currentIndex];
    const correct = Array.isArray(data.answer)
        ? JSON.stringify(AppState.userSelections) === JSON.stringify(data.answer)
        : AppState.userSelections[0] === data.answer;
        
    if (correct) {
        if (!AppState.hasAttemptedCurrentQuestion && !data.isReview) AppState.correctFirstTryCount++;
        showFeedback(true, "✨ Correct!", data.explanation);
    } else { 
        addToMistakes(data); 
        showFeedback(false, "❌ Not Quite", data.explanation); 
    }
    AppState.hasAttemptedCurrentQuestion = true;
}

function selectChip(el, event) {
    if (event) event.stopPropagation();
    if (AppState.selectedChip === el) {
        el.style.borderColor = "var(--gray-light)";
        el.style.transform = "scale(1)";
        AppState.selectedChip = null;
        return;
    }
    document.querySelectorAll('.draggable-chip').forEach(c => {
        c.style.borderColor = "var(--gray-light)";
        c.style.transform = "scale(1)";
    });
    el.style.borderColor = "var(--blue)";
    el.style.transform = "scale(1.05)";
    AppState.selectedChip = el;
}

function placeInBucket(bucketEl) {
    if (!AppState.selectedChip) return;
    bucketEl.appendChild(AppState.selectedChip);
    AppState.selectedChip.style.borderColor = "var(--gray-light)";
    AppState.selectedChip.style.transform = "scale(1)";
    AppState.selectedChip = null;
    checkSortCompletion();
}

function placeInPool(poolEl) {
    if (!AppState.selectedChip) return;
    if (AppState.selectedChip.parentElement === poolEl) return;
    poolEl.appendChild(AppState.selectedChip);
    AppState.selectedChip.style.borderColor = "var(--gray-light)";
    AppState.selectedChip.style.transform = "scale(1)";
    AppState.selectedChip = null;
    checkSortCompletion();
}

function checkSortCompletion() {
    const pool = document.getElementById('sort-pool');
    const btn = document.getElementById('verify-sort-btn');
    if (btn) btn.style.display = (pool.children.length === 0) ? "block" : "none";
}

function verifySort() {
    const data = AppState.currentModule[AppState.currentIndex];
    const buckets = document.querySelectorAll('.sort-bucket');
    let correct = true, placed = 0;
    buckets.forEach(b => {
        const bId = b.getAttribute('data-id');
        b.querySelectorAll('.draggable-chip').forEach(c => {
            placed++;
            if (c.getAttribute('data-correct') !== bId) correct = false;
        });
    });
    if (placed < data.items.length) return alert("Sort all items!");
    if (correct) {
        if (!AppState.hasAttemptedCurrentQuestion && !data.isReview) AppState.correctFirstTryCount++;
        showFeedback(true, "✨ Correct!", data.explanation);
    } else { 
        addToMistakes(data); 
        showFeedback(false, "❌ Not Quite", data.explanation); 
    }
    AppState.hasAttemptedCurrentQuestion = true;
}

function handleOrderTap(val, idx) {
    const data = AppState.currentModule[AppState.currentIndex];
    const slotIdx = AppState.userOrder.length;
    if (val === data.items[slotIdx]) {
        AppState.userOrder.push(val);
        document.getElementById(`slot-${slotIdx}`).innerText = `${slotIdx + 1}. ${val}`;
        document.getElementById(`chip-${idx}`).style.visibility = "hidden";
        if (AppState.userOrder.length === data.items.length) {
            if (!AppState.hasAttemptedCurrentQuestion && !data.isReview) AppState.correctFirstTryCount++;
            showFeedback(true, "Perfect!", data.explanation);
        }
    } else {
        document.querySelectorAll('.draggable-chip').forEach(b => b.style.pointerEvents = 'none');
        addToMistakes(data);
        showFeedback(false, "Wrong Order", `Next: ${data.items[slotIdx]}`);
        AppState.hasAttemptedCurrentQuestion = true;
    }
}

function handleMatchTap(side, id) {
    const btn = document.getElementById(`${side}-${id}`);
    if (btn.classList.contains('matched')) {
        const idx = AppState.userPairs.findIndex(p => p[side[0]] === id);
        const pair = AppState.userPairs[idx];
        document.getElementById(`left-${pair.l}`).classList.remove('matched');
        document.getElementById(`right-${pair.r}`).classList.remove('matched');
        AppState.userPairs.splice(idx, 1);
    } else {
        document.querySelectorAll(`.match-column:nth-child(${side === 'left' ? 1 : 2}) .match-btn`)
            .forEach(b => b.classList.remove('selected-match'));
        btn.classList.add('selected-match');
        AppState.activeSelection[side] = id;
        if (AppState.activeSelection.left !== null && AppState.activeSelection.right !== null) {
            AppState.userPairs.push({ l: AppState.activeSelection.left, r: AppState.activeSelection.right });
            document.getElementById(`left-${AppState.activeSelection.left}`).classList.add('matched');
            document.getElementById(`right-${AppState.activeSelection.right}`).classList.add('matched');
            AppState.activeSelection = { left: null, right: null };
            document.querySelectorAll('.match-btn').forEach(b => b.classList.remove('selected-match'));
        }
    }
    document.getElementById('verify-match-btn').style.display =
        AppState.userPairs.length === AppState.currentModule[AppState.currentIndex].pairs.length ? "block" : "none";
}

function verifyMatch() {
    const data = AppState.currentModule[AppState.currentIndex];
    if (AppState.userPairs.every(p => p.l === p.r)) {
        if (!AppState.hasAttemptedCurrentQuestion && !data.isReview) AppState.correctFirstTryCount++;
        showFeedback(true, "✨ Correct!", data.explanation);
    } else { 
        addToMistakes(data); 
        showFeedback(false, "❌ Not Quite", data.explanation); 
    }
    AppState.hasAttemptedCurrentQuestion = true;
}

// ─── FEEDBACK & MISTAKE REQUEUE ───────────────────────────────────────────────

function showFeedback(corr, title, msg) {
    FeedbackAudio.play(corr ? 'correct' : 'incorrect');
    const bar = document.getElementById('feedback-bar');
    
    // Explicitly toggle correct/incorrect classes for background and border colors
    bar.className = "feedback-bar show " + (corr ? "correct" : "incorrect");
    
    document.getElementById('feedback-title').innerHTML = title;
    document.getElementById('feedback-msg').innerHTML = formatText(msg);
}

function addToMistakes(d) {
    if (AppState.isReviewNodeGlobal) {
        if (d.topic && !AppState.missedConcepts.includes(d.topic)) {
            AppState.missedConcepts.push(d.topic);
        }
        return; 
    }
    if (d.alreadyAddedToMistakes) return;

    if (d.topic && !AppState.missedConcepts.includes(d.topic)) {
        AppState.missedConcepts.push(d.topic);
    }

    const review = JSON.parse(JSON.stringify(d));
    review.isReview = true;
    d.alreadyAddedToMistakes = true;
    review.alreadyAddedToMistakes = false;
    AppState.currentModule.push(review);
}

// ─── LIGHTBOX LOGIC ───────────────────────────────────────────────────────────

let scale = 1, lastScale = 1, startDist = 0, posX = 0, posY = 0, lastPosX = 0, lastPosY = 0, isDragging = false;

// function openLightbox(url, caption) {
//     const lightbox = document.getElementById('image-lightbox');
//     const img = document.getElementById('lightbox-img');
//     const cap = document.getElementById('lightbox-caption');

//     img.src = url;
//     cap.innerHTML = formatText(caption);
//     scale = 1; posX = 0; posY = 0;
//     updateImageTransform();

//     lightbox.classList.remove('hidden');
//     setTimeout(() => lightbox.classList.add('show'), 10);
    
//     img.addEventListener('touchstart', handleTouchStart, { passive: false });
//     img.addEventListener('touchmove', handleTouchMove, { passive: false });
//     img.addEventListener('touchend', handleTouchEnd);
// }

function openLightbox(url, caption = '', source = '') {
    const lightbox = document.getElementById('image-lightbox');
    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-caption');

    img.src = url;
    
    let combinedCaption = '';
    if (caption) combinedCaption += `<div>${formatText(caption)}</div>`;
    if (source) combinedCaption += `<div style="font-size: 0.8rem; color: #cbd5e1; font-style: italic; margin-top: 4px;">${formatText(source)}</div>`;
    
    cap.innerHTML = combinedCaption;
    scale = 1; posX = 0; posY = 0;
    updateImageTransform();

    lightbox.classList.remove('hidden');
    setTimeout(() => lightbox.classList.add('show'), 10);
    
    img.addEventListener('touchstart', handleTouchStart, { passive: false });
    img.addEventListener('touchmove', handleTouchMove, { passive: false });
    img.addEventListener('touchend', handleTouchEnd);
}

function updateImageTransform() {
    const img = document.getElementById('lightbox-img');
    img.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
}

function handleTouchStart(e) {
    if (e.touches.length === 2) {
        startDist = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
    } else if (e.touches.length === 1) {
        isDragging = true;
        lastPosX = e.touches[0].pageX - posX;
        lastPosY = e.touches[0].pageY - posY;
    }
}

function handleTouchMove(e) {
    e.preventDefault();
    if (e.touches.length === 2) {
        const dist = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
        scale = Math.min(Math.max(1, lastScale * (dist / startDist)), 4);
    } else if (e.touches.length === 1 && isDragging) {
        posX = e.touches[0].pageX - lastPosX;
        posY = e.touches[0].pageY - lastPosY;
    }
    updateImageTransform();
}

function handleTouchEnd() {
    lastScale = scale;
    isDragging = false;
}

function closeLightbox() {
    const lightbox = document.getElementById('image-lightbox');
    lightbox.classList.remove('show');
    setTimeout(() => lightbox.classList.add('hidden'), 300);
}

function toggleZoom(event) {
    event.stopPropagation();
    scale = scale > 1 ? 1 : 2.5;
    posX = 0; posY = 0;
    lastScale = scale;
    updateImageTransform();
}