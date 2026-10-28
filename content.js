const moduleContent = {
    "testicular.1": {
        title: "Lesson 1: The Normal Testis Anatomy & Function",
        objectives: [
            "Understand the gross structures, cellular makeup, and basic functions of the normal testis to build a solid foundation for recognizing testicular pathology and clinical syndromes."
        ],
        data: [
            /* Screen 1 */
            {
                type: "concept",
                title: "The Protective Capsules",
                text: "The testis isn't just hanging out unprotected. It is wrapped in two primary layers:" +
                      "<br><br><b>The outer tunica vaginalis:</b>" +
                      "<ul>" +
                      "<li> A double-layered fluid filled pouch allowing the testis to move freely without friction.</li>" + 
                      "<li> It can fill with excess fluid due to trauma, infection, or even a hidden tumor.</li>" +
                      "</ul>" +
                      "<b>The inner tunica albuginea:</b>" +
                      "<ul>" +
                      "<li> A thick, tough fibrous capsule that completely covers the testes.</li>" +
                      "</ul>" +
                      "<br><b>Why this matters for tumors:</b>" +
                      "<ul>" +
                      "<li>Because its so tough, tumors rarely break through it early on.</li>" +
                      "<li>Instead, the tumor expands inside this rigid barrier, presenting clinically as a firm, solid, painless mass.</li>" +
                      "</ul>",
                subtext: "",
                image: "assets/images/lesson1/covering_of_the_testis.png",
                // source: "Source: Adapted from standard histological and pathological references",
                buttonText: "Continue"
            },
            /* Screen 2 */
            {
                type: "mcq",
                question: "Because the tunica albuginea is so tough, a growing testicular tumor usually breaks through the scrotal skin quickly presenting as a painful blister.",
                options: ["True", "False"],
                answer: 1,
                explanation: "The tunica albuginea acts as a strong, rigid wall. Tumors usually expand internally against this tight space, presenting clinically as a painless, firm, and solid mass.",
                topic: "The Protective Capsules"
            },
            /* Screen 3 */
            {
                type: "concept",
                title: "Descent & Lymphatic Drainage",
                text: "Testes don’t form in the scrotum! <br> During fetal development, they form in the abdomen and descend into the scrotum before birth, dragging their blood supply and lymphatic vessels down with them." +
                      "<br><br><b>Key clinical points:</b>" +
                      "<ul>" +
                      "<li><b>Para-aortic Nodes:</b> Testicular lymph drains all the way back up to the retroperitoneal (para-aortic) nodes in the abdomen.</li>" +
                      "<li><b>Inguinal Nodes:</b> Scrotal skin didn't descend, so it drains locally to the inguinal (groin) nodes.</li>" +
                      "<li><b>Cryptorchidism:</b> If a testis gets stuck and fails to descend, the risk of developing testicular cancer increases (3 to 5 times higher!).</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 4 */
            {
                type: "fill",
                question: "Escaping testicular tumor cells will travel via the lymphatic system back up to the ______ lymph nodes.",
                options: ["Inguinal", "Para-aortic", "Cervical", "Axillary"],
                answer: 1,
                explanation: "Testicular lymph drains all the way back up to the retroperitoneal (para-aortic) lymph nodes. The inguinal nodes only drain the scrotal skin!",
                topic: "Lymphatic Drainage"
            },
            /* Screen 5 */
            {
                type: "concept",
                title: "The Microscopic Factory",
                text: "The bulk of the testis is made of coiled tubes called <b>seminiferous tubules</b>. <br> These tubes are lined with Germ Cells, whose normal job is to divide and mature into sperm." +
                      "<br><br><b>The power of Germ Cells:</b>" + 
                      "<ul>" +
                      "<li>They are totipotent! This means they have the genetic blueprint to become almost any tissue in the body.</li>" +
                      "<li>When they turn into cancer, they can try to build embryonic structures like random body parts (Teratoma) or a yolk sac that secretes a marker called AFP.</li>" +
                      "</ul>",
                image: "assets/images/lesson1/seminiferous_tubules_and_totipotent_germ_cells.png",
                buttonText: "Continue"
            },
            /* Screen 6 */
            {
                type: "mcq",
                question: "Which cell type found in testicular tumors is totipotent?",
                options: ["Leydig Cells", "Sertoli Cells", "Germ Cells", "Stromal Cells"],
                answer: 2,
                explanation: "Germ cells are totipotent (having the blueprint to become any tissue) and are the origin of a massive 95% of all testicular tumors!",
                topic: "The Origin of Tumors"
            },
            /* Screen 7 */
            {
                type: "concept",
                title: "The Sperm Assembly Line",
                text: "Inside the seminiferous tubules, Germ Cells don't just magically become sperm overnight. <br> They follow a strict timeline of maturation called spermatogenesis." +
                      "<br><br><b>The timeline of development:</b>" +
                      "<ul>" +
                      "<li><b>Primordial Germ Cell:</b> The earliest fetal cell stage.</li>" +
                      "<li><b>Spermatogonium:</b> Sits at the base of the tubule.</li>" +
                      "<li><b>Spermatocyte:</b> The actively dividing cell.</li>" +
                      "<li><b>Mature Sperm:</b> The finished product ready for transport.</li>" +
                      "</ul>" +
                      "<br><b>Why it matters for pathology:</b> <br>" + 
                      "<ul>" +
                      "<li> Where a cell gets \"stuck\" on this assembly line determines the exact type of testicular tumor that forms later!</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 8 */
            {
                type: "concept",
                title: "The Support Staff & Neighbors",
                text: "Germ cells don't work alone. <br> There are two other vital cells you need to know:" +
                      "<br><br><b>Sertoli Cells (The Nurses):</b>" +
                      "<ul>" +
                      "<li> Live <b>INSIDE</b> the seminiferous tubules alongside germ cells.</li>" + 
                      "<li> They provide nutrients and create the blood-testis barrier.</li>" +
                      "</ul>" +
                      "<b>Leydig Cells (The Neighbors):</b>" +
                      "<ul>" +
                      "<li> Live <b>OUTSIDE</b> the tubules in the interstitium.</li>" +
                      "<li>Because they are next to the blood vessels, they are perfectly positioned to dump male hormones (like testosterone) directly into the bloodstream!</li>" +
                      "</ul>",
                images: [
                    { 
                        url: "assets/images/lesson1/sertoli_cell.png", 
                        title: "Sertoli Cell Structure & Function",
                        // source: "Source: Histology & Pathology Reference"
                    },
                    { 
                        url: "assets/images/lesson1/leydig_cell.png", 
                        title: "Leydig Cell Structure & Function",
                        // source: "Source: Histology & Pathology Reference"
                    }
                ],
                buttonText: "Continue"
            },
            /* Screen 9 */
            {
                type: "sort",
                question: "The cells of the testis have very specific anatomical homes based on their jobs.<br>Sort the cell type to its correct anatomical home within the microscopic testis!",
                items: [
                    { text: "Sertoli Cells", bucket: 0 },
                    { text: "Leydig Cells", bucket: 1 }
                ],
                buckets: ["Inside the seminiferous tubules", "Outside the tubules in the interstitium"],
                explanation: "Sertoli cells act as internal nurses to help germ cells mature. Leydig cells are the external hormone producers sitting by the blood vessels.",
                topic: "Where do they live?"
            },
            /* Screen 10 */
            {
                type: "match",
                question: "Match the anatomical structure to its correct normal function or feature!",
                pairs: [
                    { left: "Tunica Albuginea", right: "The tough, rigid outer capsule that prevents early tumor rupture." },
                    { left: "Para-aortic Nodes", right: "The abdominal lymphatic destination for testicular drainage." },
                    { left: "Germ Cells", right: "Totipotent cells that undergo spermatogenesis." },
                    { left: "Leydig Cells", right: "Interstitial cells that sit near blood vessels to secrete testosterone." }
                ],
                explanation: "The testis is encased in the tunica albuginea and drains to the para-aortic nodes. Inside, germ cells mature into sperm on an assembly line, supported internally by Sertoli cells and externally by hormone-producing Leydig cells.",
                topic: "Anatomy & Function Recap"
            }
        ]
    },

    "testicular.2": {
        title: "Lesson 2: Introduction to Testicular Cancer",
        objectives: [
            "Understand the demographics, the rules for clinical diagnosis, the major tumor classifications, and the genetic timeline of how these cancers develop."
        ],
        data: [
            /* Screen 1 */
            {
                type: "concept",
                title: "Demographics & Major Risks",
                text: "Before looking under the microscope, we must know who gets this disease." +
                      "<br><br><b>Who Gets It?</b>" +
                      "<ul>" +
                      "<li>Most commonly young white men aged 15–34.</li>" +
                      "</ul>" +
                      "<b>Risk Factor: Testicular Dysgenesis Syndrome</b>" +
                      "<ul>" +
                      "<li>\"Dysgenesis\" means abnormal fetal development.</li>" +
                      "<li>Syndromes affecting early reproductive growth increase the risk of cancer later in life.</li>" +
                      "</ul>" +
                      "<b>The Biggest Risk Factor: Cryptorchidism</b>" +
                      "<ul>" +
                      "<li>An undescended testis increases cancer risk by 3 to 5 times!</li>" +
                      "<li>Even if surgically corrected during childhood (orchiopexy), the genetic damage is already done. The high cancer risk permanently remains!</li>" +
                      "</ul>",
                subtext: "",
                image: "assets/images/lesson2/cryptorchidism_risk.png",
                // source: "Source: Adapted from clinical pathology and embryology references",
                buttonText: "Continue"
            },
            /* Screen 2 */
            {
                type: "mcq",
                question: "Surgically correcting an undescended testis (cryptorchidism) during childhood completely eliminates the patient's increased risk of developing testicular cancer later in life.",
                options: ["True", "False"],
                answer: 1,
                explanation: "Surgery brings the testis down so it can be easily felt and monitored, but the underlying developmental abnormality remains. The risk of cancer stays 3 to 5 times higher than normal even after surgery!",
                topic: "Cryptorchidism & Risk"
            },
            /* Screen 3 */
            {
                type: "concept",
                title: "The Golden Rule: DO NOT BIOPSY!",
                text: "If a young man presents with a painless, firm testicular mass, you must follow the Golden Rule: <b>NEVER stick a needle into it!</b>" +
                      "<br><br><b>Why is a biopsy a fatal mistake?</b>" +
                      "<ul>" +
                      "<li>The testis is wrapped in the tough tunica albuginea and drains deep into the abdomen (para-aortic nodes).</li>" +
                      "<li>A needle puncture breaks that tough barrier and drags cancer cells into the scrotal skin.</li>" +
                      "<li>This seeds the scrotum with tumor cells and changes the lymphatic drainage from the abdomen to the groin (inguinal nodes), drastically worsening the prognosis.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 4 */
            {
                type: "mcq",
                question: "A 28-year-old male presents with a suspicious, firm, painless testicular mass. What is the absolute contraindication to get a tissue diagnosis?",
                options: ["Radical Orchiectomy (surgical removal of the testis)", "Trans-scrotal needle biopsy", "Inguinal lymph node biopsy", "Observation and reassessment in 6 months"],
                answer: 1,
                explanation: "NEVER biopsy a suspected testicular mass! Puncturing the scrotum seeds the cancer locally. You must remove the entire testis with its protective capsules intact to safely examine the tumor.",
                topic: "The Golden Rule"
            },
            /* Screen 5 */
            {
                type: "concept",
                title: "The Cell of Origin: The 95/5 Split",
                text: "Pathologists classify the tumor strictly by the cell it mutated from. There are two main branches on the family tree:" +
                      "<br><br><b>Germ Cell Tumors (95% of cases):</b>" +
                      "<ul>" +
                      "<li>Originate from the sperm-producing Germ Cells.</li>" +
                      "<li>They are almost always <b>MALIGNANT</b> (cancerous).</li>" +
                      "</ul>" +
                      "<b>Sex Cord-Stromal Tumors (5% of cases):</b>" +
                      "<ul>" +
                      "<li>Originate from the supportive tissue (Leydig and Sertoli cells).</li>" +
                      "<li>They are usually <b>BENIGN</b>.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 6 */
            {
                type: "concept",
                title: "The Germ Cell Branch: The Big Split",
                text: "Germ Cell Tumors are further divided into two groups with very different clinical behaviors:" +
                      "<br><br><b>Seminomas (\"Slow and Steady\")</b>" +
                      "<ul>" +
                      "<li>Cells stay looking like <b>primitive</b>, early germ cells.</li>" +
                      "<li>They stay <b>localized</b>, spread predictably, and are highly <b>radiosensitive</b> (radiation melts them away easily).</li>" +
                      "</ul>" +
                      "<b>Non-Seminomas (\"Fast and Furious\")</b>" +
                      "<ul>" +
                      "<li>Cells differentiate and aggressively try to build distinct tissues (like a yolk sac or placenta).</li>" +
                      "<li>They <b>metastasize</b> early and are <b>radioresistant</b> (require chemotherapy).</li>" +
                      "</ul>",
                subtext: "<b>Note:</b> If a mass is a \"Mixed Tumor\" containing both types, it is treated as a Non-Seminoma based on the most aggressive component!",
                image: "assets/images/lesson2/testicular_tumor_classification.png",
                source: "Source: https://medicoapps.org/testicular-tumours-2/",
                buttonText: "Continue"
            },
            /* Screen 7 */
            {
                type: "sort",
                question: "The difference between the two main types of Germ Cell Tumors dictates the patient's entire treatment plan.<br>Sort each tumor description to its correct classification branch!",
                items: [
                    { text: "Slow-growing", bucket: 0 },
                    { text: "Stays primitive", bucket: 0 },
                    { text: "Highly radiosensitive", bucket: 0 },
                    { text: "Fast-growing, aggressive", bucket: 1 },
                    { text: "Tries to build tissues", bucket: 1 },
                    { text: "Requires chemotherapy", bucket: 1 }
                ],
                buckets: ["Seminoma", "Non-Seminoma"],
                explanation: "Seminomas are the primitive, slower cells that respond to radiation. Non-Seminomas are the aggressive ones that require strong chemotherapy!",
                topic: "Seminoma vs. Non-Seminoma"
            },
            /* Screen 8 */
            {
                type: "concept",
                title: "Pathogenesis & The Genetic Signature",
                text: "How do these tumors start?" + 
                      "<ul>" +
                      "<li>Fetal cells fail to mature and get stuck as <b>dormant precursors called GCNIS (Germ Cell Neoplasia In Situ)</b>.</li>" +
                      "</ul>" +
                      "Which Tumors Come from GCNIS?" +
                      "<ul>" +
                      "<li>Classic Seminomas.</li>" +
                      "<li>ALL adult Non-Seminomas (Embryonal, Choriocarcinoma, and adult Teratoma & Yolk Sac tumors).</li>" +
                      "</ul>" +
                      "<b>The Waking Giant & i(12p):</b>" +
                      "<ul>" +
                      "<li>These dormant GCNIS cells acquire a classic genetic mutation: i(12p) (an extra short arm of chromosome 12).</li>" +
                      "<li>They sleep quietly for years until the hormonal surge of puberty wakes them up, triggering them to multiply into an invasive adult cancer!</li>" +
                      "</ul>",
                image: "assets/images/lesson2/pathogenesis_germ_cell_tumors.png",
                source: "Source: https://ilovepathology.com/seminoma-pathogenesis-clinical-morphology-treatment/",
                buttonText: "Continue"
            },
            /* Screen 9 */
            {
                type: "mcq",
                question: "The classic genetic mutation shared by almost all invasive post-pubertal Germ Cell Tumors is an extra copy of the short arm of chromosome 12, known as i(12p).",
                options: ["True", "False"],
                answer: 0,
                explanation: "An extra copy of the short arm of chromosome 12, written as i(12p), is the classic signature mutation seen in post-pubertal Germ Cell Tumors.",
                topic: "Genetic Signature i(12p)"
            },
            /* Screen 10 */
            {
                type: "match",
                question: "Let's lock in the major principles of testicular cancer before we dive into the specific tumor types! <br> Match each clinical or pathological clue to its correct concept!",
                pairs: [
                    { left: "The Golden Rule", right: "Do Not biopsy if testicular cancer is suspected." },
                    { left: "Cryptorchidism", right: "An undescended testis that dramatically increases cancer risk." },
                    { left: "Germ Cell Tumors", right: "Make up 95% of testicular masses and are highly malignant." },
                    { left: "i(12p)", right: "The classic genetic mutation found in post-pubertal adult tumors." }
                ],
                explanation: "The golden rule is not to biopsy in case of suspicion of testicular cancer, cryptorchidism is an undescended testis that increases cancer risk, germ cell tumors make up 95% of testicular masses, and i(12p) is the classic genetic mutation in post-pubertal adult tumors.",
                topic: "Introduction & Principles Recap"
            }
        ]
    },

    "testicular.3": {
        title: "Lesson 3: Classic Seminoma",
        objectives: [
            "Understand the cell of origin, identify a classic Seminoma grossly and microscopically, understand its specific tumor markers (and which ones it NEVER secretes), and explain its excellent clinical prognosis."
        ],
        data: [
            /* Screen 1 */
            {
                type: "concept",
                title: "The Cell of Origin",
                text: "Seminomas are the most common type of testicular tumor. <br> They <b>originate</b> from early <b>primordial germ cells</b> that fail to mature normally." +
                      "<br><br><b>The Origin & Mutation:</b>" +
                      "<ul>" +
                      "<li>These primitive cells remain stuck as the dormant precursor GCNIS.</li>" +
                      "<li>They carry the classic i(12p) genetic mutation before waking up to form a Seminoma.</li>" +
                      "</ul>" +
                      "<b>The Universal Fetal Cell:</b>" +
                      "<ul>" +
                      "<li>Because primordial germ cells migrate along the body's midline during fetal development, this exact same tumor can grow elsewhere!</li>" +
                      "<li>In the <b>Ovary</b> (females): It is called a <b>Dysgerminoma</b>.</li>" +
                      "<li>In the <b>Central Nervous System</b>: It is called a <b>Germinoma</b>.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 2 */
            {
                type: "mcq",
                question: "A tumor originating from primordial germ cells in the central nervous system (CNS) is called a Germinoma, which is biologically and microscopically identical to a testicular Seminoma.",
                options: ["True", "False"],
                answer: 0,
                explanation: "Because they all come from the exact same migrating primordial germ cells, a Germinoma in the brain, a Dysgerminoma in the ovary, and a Seminoma in the testis are the exact same tumor!",
                topic: "The Cell of Origin"
            },
            /* Screen 3 */
            {
                type: "concept",
                title: "The Gross Appearance – Bulky & Pale",
                text: "Welcome to the pathology lab! <br>To the naked eye, a classic Seminoma appears as a bulky, fleshy, pale-gray to white mass that completely replaces the normal testicular tissue." +
                      "<br><br><b>Clean and solid!</b>" +
                      "<ul>" +
                      "<li>Pure Seminomas typically do <b>NOT</b> have hemorrhage (bleeding) or necrosis (rotting, dead tissue).</li>" +
                      "<li>They are remarkably uniform, well-demarcated, and solid throughout.</li>" +
                      "</ul>",
                image: "assets/images/lesson3/seminoma_gross.png",
                buttonText: "Continue"
            },
            /* Screen 4 */
            {
                type: "mcq",
                question: "When examining a pure Seminoma with the naked eye, a pathologist expects to see a chaotic mass filled with extensive bleeding (hemorrhage) and dead tissue (necrosis).",
                options: ["True", "False"],
                answer: 1,
                explanation: "Pure Seminomas are typically uniform, bulky, fleshy, and pale-gray to white. Extensive hemorrhage and necrosis are generally absent in a pure Seminoma.",
                topic: "Gross Appearance"
            },
            /* Screen 5 */
            {
                type: "concept",
                title: "Microscopic: The Cellular Architecture",
                text: "Under the microscope, Seminoma cells have a very distinct look. <br>The cells are arranged in uniform sheets." +
                      "<br><br><b>The Cellular Appearance:</b>" +
                      "<ul>" +
                      "<li><b>Clear Cytoplasm:</b> Each cell has distinct cell borders with abundant clear cytoplasm filled with massive amounts of stored glycogen.</li>" +
                      "<li><b>Prominent Nucleolus:</b> In the center of the clear cytoplasm sits a large, dark, round nucleus containing a prominent, easily visible nucleolus.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 6 */
            {
                type: "concept",
                title: "Microscopic – The Lymphocytic Septa",
                text: "<ul>" +
                      "<li>The sheets of tumor cells don't just sit in one massive pile.</li>" +
                      "<li> They are neatly divided into smaller lobules by delicate, branching bands of fibrous tissue called septa.</li>" +
                      "<li>These fibrous bands are heavily infiltrated by <b>lymphocytes</b> (specifically T-cells).</li>" +
                      "</ul>" +
                      "<br><b>What does this mean?</b>" +
                      "<ul>" +
                      "<li>The presence of lymphocytes means the patient's immune system recognizes the tumor as foreign and is actively trying to mount an immune response to fight it off!</li>" +
                      "</ul>",
                image: "assets/images/lesson3/seminoma_microscopic.png",
                buttonText: "Continue"
            },
            /* Screen 7 */
            {
                type: "match",
                question: "Match each cellular component to its correct description under the microscope!",
                pairs: [
                    { left: "Clear Cytoplasm", right: "The glycogen-rich space surrounding the nucleus of the tumor cell." },
                    { left: "Fibrous Septa", right: "The branching tissue bands that divide the tumor into smaller lobules." },
                    { left: "Lymphocytes", right: "The immune cells infiltrating the septa to fight the tumor." }
                ],
                explanation: "Seminomas feature large cells with clear glycogen-rich cytoplasm. These cells are arranged in lobules divided by fibrous septa, which are packed with immune-fighting lymphocytes.",
                topic: "Microscopic Architecture"
            },
            /* Screen 8 */
            {
                type: "concept",
                title: "The Tumor Markers: Stuck in the Past",
                text: "Welcome to the blood lab!" + 
                      "<ul>" +
                      "<li>Because Seminomas originate from early primordial germ cells, they act like fetal stem cells that refuse to grow up.</li>" + 
                      "<li>Therefore, they test positive for three classic primitive markers:" +
                          "<ol>" +
                              "<li><b>OCT3/4:</b> A transcription factor switch that keeps embryonic stem cells primitive and \"totipotent.\"</li>" +
                              "<li><b>c-KIT (CD117):</b> A receptor that migrating fetal germ cells use to survive.</li>" +
                              "<li><b>PLAP:</b> A fetal/placental enzyme reactivated by the tumor.</li>" +
                          "</ol>" +
                      "</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 9 */
            {
                type: "concept",
                title: "The AFP Trap & The hCG Exception",
                text: "We know Seminomas test positive for primitive markers. <br>But what about the other major markers, Alpha Fetoprotein (AFP) and hCG (human chorionic gonadotropin)?<br><br>Here are two clinical rules:" +
                      "<br><br><b>The AFP Trap:</b>" +
                      "<ul>" +
                      "<li>A pure Seminoma <b>NEVER</b> secretes Alpha-fetoprotein (AFP).</li>" +
                      "<li>If AFP is elevated, the mass has a hidden Yolk Sac tumor component inside it!</li>" +
                      "</ul>" +
                      "<b>The hCG Exception:</b>" +
                      "<ul>" +
                      "<li>About 15% of pure Seminomas contain special giant cells (syncytiotrophoblasts).</li>" +
                      "<li>Because of these, a pure Seminoma <b>CAN</b> secrete mild levels of hCG.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 10 */
            {
                type: "mcq",
                question: "A 28-year-old male has a testicular mass that is biopsied as a \"pure Seminoma.\" However, his blood work shows significantly elevated levels of Alpha-fetoprotein (AFP). What is the clinical reality?",
                options: [
                    "This is a normal and expected finding for a pure Seminoma.",
                    "The patient also has a Sertoli cell tumor.",
                    "The biopsy missed a Yolk Sac component; this is a Mixed Tumor.",
                    "The patient has an infection, not cancer."
                ],
                answer: 2,
                explanation: "Pure Seminomas NEVER secrete AFP! If AFP is elevated, the tumor contains a Yolk Sac component and must now be classified and treated as a Mixed Germ Cell Tumor. Mild hCG, however, is acceptable!",
                topic: "Tumor Markers & AFP"
            },
            /* Screen 11 */
            {
                type: "concept",
                title: "Clinical Spread & Treatment: The Good News",
                text: "<b>The Good News</b>" +
                      "<ul>" +
                      "<li>Seminomas are known as the \"slow and steady\" tumors.</li>" +
                      "<li>They stay localized in the testis for a long time.</li>" +
                      "<li>When they finally do spread, they predictably migrate up the lymphatic highway to the <b>para-aortic lymph nodes</b>.</li>" +
                      "<li>Spread to the blood (lungs/liver) happens very late.</li>" +
                      "</ul>" +
                      "<b>The Cure:</b>" +
                      "<ul>" +
                      "<li>Seminomas are exquisitely <b>radiosensitive</b>.</li>" +
                      "<li> Radiation therapy melts them away very easily!</li>" +
                      "<li>With a Radical Orchiectomy (removal of testes) followed by radiation, the prognosis is excellent (>95% cure rate).</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 12 */
            {
                type: "match",
                question: "Let's lock in the complete clinical fingerprint of a Classic Seminoma! Match each clinical or pathological clue to its correct characteristic.",
                pairs: [
                    { left: "Pale, solid, fleshy", right: "The gross appearance (lacks hemorrhage or necrosis)." },
                    { left: "Clear cytoplasm & Lymphocytes", right: "The microscopic appearance of the cells and septa." },
                    { left: "OCT3/4 & c-KIT", right: "The primitive, \"stem-cell-like\" markers positive in Seminomas." },
                    { left: "Alpha-fetoprotein (AFP)", right: "A marker that is NEVER secreted by a pure Seminoma." },
                    { left: "Radiosensitive", right: "The reason Seminomas respond well to radiation therapy." }
                ],
                explanation: "A seminoma's gross appearance is pale, solid, and fleshy, and its microscopic appearance features clear cytoplasm with lymphocytes. Furthermore, OCT3/4 and c-KIT are positive primitive markers, AFP is never secreted by a pure seminoma, and the tumor's radiosensitive nature allows it to respond well to radiation therapy.",
                topic: "Classic Seminoma Recap"
            }
        ]
    },

    "testicular.4": {
        title: "Lesson 4: Spermatocytic Tumor",
        objectives: [
            "Contrast the classic Seminoma with the rare, benign Spermatocytic Tumor, focusing on its unique demographics, distinct microscopic histology, and harmless clinical behavior."
        ],
        data: [
            /* Screen 1 */
            {
                type: "concept",
                title: "The Exception",
                text: "Recall that classic Seminomas strike young men (15-34 years old) and arise from the precursor lesion GCNIS.<br><br>" +
                      "The Spermatocytic Tumor is the exact opposite! It almost exclusively affects older men (average age > 65 years)." +
                      "<br><br><b>A different origin story:</b>" +
                      "<ul>" +
                      "<li>It originates from mature, late-stage spermatocytes (instead of early fetal primordial cells).</li>" +
                      "<li>It does <b>NOT</b> come from the GCNIS precursor.</li>" +
                      "<li>It also lacks the i(12p) genetic mutation seen in classic Germ Cell Tumors!</li>" +
                      "<li>Instead, it is associated with gain of chromosome 9q.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 2 */
            {
                type: "mcq",
                question: "A 68-year-old man presents with a testicular mass that is diagnosed as a Spermatocytic Tumor. The pathologist will likely find the i(12p) chromosomal mutation and a history of GCNIS in this patient's tissue.",
                options: ["True", "False"],
                answer: 1,
                explanation: "Spermatocytic Tumors are the famous exception. Because they arise in older men from late-stage, mature cells, they NEVER arise from GCNIS and they NEVER have the i(12p) mutation.",
                topic: "Demographics & Genetics"
            },
            /* Screen 3 */
            {
                type: "concept",
                title: "Histology: The Three Cell Sizes",
                text: "Under the microscope, Spermatocytic Tumors look completely different from classic Seminomas.<br><br>" +
                      "You will <b>NOT</b> see uniform cells with clear cytoplasm. Instead, the tumor is made of a chaotic mix of three distinct cell sizes:" +
                      "<ul>" +
                      "<li><b>Small cells:</b> Resembling secondary spermatocytes.</li>" +
                      "<li><b>Medium-sized cells:</b> The most common, resembling normal meiotic spermatocytes.</li>" +
                      "<li><b>Giant, multi-nucleated cells:</b> Due to the failure of the cells to divide the cytoplasm properly.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 4 */
            {
                type: "concept",
                title: "Histology: Look at What is Missing!",
                text: "Unlike the classic Seminomas we studied earlier, look at what is missing:" +
                      "<ul>" +
                      "<li><b>No Fibrous Septa:</b> There are no tissue bands dividing the tumor into lobules.</li>" +
                      "<li><b>No Immune Cells:</b> They completely lack fighting lymphocytes.</li>" +
                      "<li><b>No Syncytiotrophoblasts:</b> They don't have the giant cells that make hCG.</li>" +
                      "</ul>" +
                      "<br><b>The Loner Tumor:</b>" +
                      "<ul>" +
                      "<li>It never grows outside the testis (no extratesticular sites).</li>" +
                      "<li>It <b>NEVER</b> mixes with other tumor types.</li>" +
                      "<li>Instead, it simply grows as one massive, uninterrupted sheet of the three different cell sizes!</li>" +
                      "</ul>",
                image: "assets/images/lesson4/spermatocytic_tumor.png",
                buttonText: "Continue"
            },
            /* Screen 5 */
            {
                type: "match",
                question: "Match the microscopic feature to the correct testicular tumor!",
                pairs: [
                    { left: "Classic Seminoma", right: "Uniform cells with clear cytoplasm, separated by fibrous septa packed with lymphocytes." },
                    { left: "Spermatocytic Tumor", right: "A mix of small, medium, and giant cells growing in a sheet with NO fibrous septa and NO lymphocytes." }
                ],
                explanation: "Classic Seminomas are highly uniform and trigger an immune response (lymphocytes). Spermatocytic Tumors have three different cell sizes and no immune response at all.",
                topic: "Classic vs. Spermatocytic Histology"
            },
            /* Screen 6 */
            {
                type: "concept",
                title: "Clinical Behavior: The Harmless Giant",
                text: "<ul>" +
                      "<li>Despite looking chaotic under the microscope with those giant multi-nucleated cells, the Spermatocytic Tumor is actually a \"harmless giant.\"</li>" +
                      "<li>Because it originates from mature, late-stage cells in older men, it is extremely slow-growing and behaves in a benign manner.</li>" +
                      "</ul>" +
                      "<b>The Best Prognosis:</b>" +
                      "<ul>" +
                      "<li>It virtually <b>NEVER metastasizes</b> (spreads to other organs).</li>" +
                      "<li>It does not aggressively invade blood vessels or lymph nodes.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 7 */
            {
                type: "mcq",
                question: "A 72-year-old man is diagnosed with a Spermatocytic Tumor. Following surgical removal of the testis, he will NOT require radiation or chemotherapy because the surgery alone is completely curative.",
                options: ["True", "False"],
                answer: 0,
                explanation: "Spermatocytic Tumors virtually never metastasize. A Radical Orchiectomy (surgical removal of the testis) is 100% curative on its own!",
                topic: "Treatment & Prognosis"
            },
            /* Screen 8 */
            {
                type: "match",
                question: "Let's lock in the high-yield facts for this unique, older-generation tumor before we move on to the aggressive Non-Seminomas! <br>Match each trait to its rule for Spermatocytic Tumors.",
                pairs: [
                    { left: "Age Demographic", right: "Exclusively older men (>65 years old)." },
                    { left: "Pathogenesis", right: "No GCNIS precursor and No i(12p) mutation." },
                    { left: "Microscopic Appearance", right: "A chaotic mix of small, medium, and giant cells." },
                    { left: "Missing Features", right: "Lacks fibrous septa and lacks immune-fighting lymphocytes." },
                    { left: "Clinical Behavior", right: "Extremely slow-growing; never metastasizes; cured entirely by surgery." }
                ],
                explanation: "Spermatocytic tumors occur exclusively in older men (>65), lack a GCNIS precursor or i(12p) mutation, and microscopically feature a chaotic mix of small, medium, and giant cells without fibrous septa or lymphocytes. Clinically, they are extremely slow-growing, never metastasize, and are cured entirely by surgery.",
                topic: "Spermatocytic Tumor Recap"
            }
        ]
    },

    "testicular.5": {
        title: "Lesson 5: Embryonal Carcinoma",
        objectives: [
            "Understand the highly aggressive nature, chaotic gross and microscopic appearance, and unique tumor markers of Embryonal Carcinoma."
        ],
        data: [
            /* Screen 1 */
            {
                type: "concept",
                title: "Intro to NSGCTs: Fast and Furious",
                text: "We are now leaving the \"slow and steady\" Seminomas and entering the aggressive world of <b>Non-Seminomatous Germ Cell Tumors (NSGCTs)</b>.<br><br>" +
                      "<b>What makes them different? Differentiation!</b>" +
                      "<ul>" +
                      "<li>Seminomas stay in a \"stuck,\" primitive, uniform state.</li>" +
                      "<li>NSGCTs take a different path: they differentiate.</li>" +
                      "<li>These mutated cells actively try to build complex structures, like a yolk sac, a placenta, or an entire embryo.</li>" +
                      "<li>Because they are so highly active, NSGCTs grow aggressively, metastasize early via the blood, and are totally resistant to radiation.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 2 */
            {
                type: "concept",
                title: "The Cell of Origin",
                text: "Within the aggressive NSGCT family, our first stop is the Embryonal Carcinoma.<br><br>" +
                      "<b>What is its cell of origin?</b>" +
                      "<ul>" +
                      "<li>Like other adult germ cell tumors, it originates from the GCNIS precursor lesion.</li>" +
                      "<li>However, its cells act like malignant embryonic stem cells.</li>" +
                      "<li>They are totipotent cells desperately trying to build an early human embryo, but getting the blueprint completely wrong.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 3 */
            {
                type: "mcq",
                question: "Unlike Seminomas which remain as primitive, uniform cells, Non-Seminomatous Germ Cell Tumors (NSGCTs) actively differentiate in an attempt to build complex tissues like an embryo or placenta.",
                options: ["True", "False"],
                answer: 0,
                explanation: "This differentiation is the defining feature of NSGCTs. Because they are actively trying to build complex structures, they are far more chaotic, fast-growing, and aggressive than Seminomas.",
                topic: "NSGCTs vs. Seminomas"
            },
            /* Screen 4 */
            {
                type: "concept",
                title: "The Gross Appearance: Hemorrhage & Necrosis",
                text: "Embryonal Carcinomas act like malignant embryos—they grow incredibly fast. In fact, they grow so fast that they rapidly outgrow their own local blood supply.<br><br>" +
                      "<b>A Chaotic Mess:</b>" +
                      "<ul>" +
                      "<li>To the naked eye, these masses are completely chaotic.</li>" +
                      "<li>They are filled with extensive hemorrhage (bleeding) and necrosis.</li>" +
                      "<li>This is the exact opposite of the clean, solid, pale-gray Seminoma we learned about earlier!</li>" +
                      "</ul>",
                image: "assets/images/lesson5/embryonal_carcinoma_gross.png",
                buttonText: "Continue"
            },
            /* Screen 5 */
            {
                type: "mcq",
                question: "During a gross pathology exam, a testicular tumor is found to be pale, solid, and uniform with absolutely no bleeding or dead tissue. This is the classic presentation of an Embryonal Carcinoma.",
                options: ["True", "False"],
                answer: 1,
                explanation: "Embryonal Carcinomas are extremely aggressive and outgrow their blood supply, resulting in a chaotic mass filled with extensive hemorrhage and necrosis.",
                topic: "Gross Appearance"
            },
            /* Screen 6 */
            {
                type: "concept",
                title: "The Microscopic Look: Ugly & Pleomorphic",
                text: "Under the microscope, Embryonal Carcinoma cells are highly disorganized.<br><br>" +
                      "<b>Organized Chaos:</b>" +
                      "<ul>" +
                      "<li>They are \"pleomorphic\" (meaning they come in many different abnormal shapes and sizes) and have massive, irregular nuclei.</li>" +
                      "<li>The cells pile on top of each other in thick, overlapping sheets.</li>" +
                      "<li>Because they are trying to build an embryo, they sometimes attempt to form primitive, poorly made gland-like structures or tubes.</li>" +
                      "</ul>",
                image: "assets/images/lesson5/embryonal_carcinoma_microscopic.png",
                buttonText: "Continue"
            },
            /* Screen 7 */
            {
                type: "mcq",
                question: "Which of the following is a classic microscopic feature of an Embryonal Carcinoma?",
                options: [
                    "Uniform cells with perfectly clear, glycogen-rich cytoplasm.",
                    "Branching fibrous septa packed with immune-fighting lymphocytes.",
                    "Ugly, pleomorphic cells overlapping each other to form primitive glands.",
                    "A benign mixture of small, medium, and giant cells."
                ],
                answer: 2,
                explanation: "Embryonal cells are pleomorphic, overlapping, and chaotic as they try (and fail) to build early embryonic structures like glands.",
                topic: "Microscopic Features"
            },
            /* Screen 8 */
            {
                type: "concept",
                title: "Embryonal Markers",
                text: "To tell an Embryonal Carcinoma apart from a Seminoma, pathologists use special antibody stains on the tissue to look for specific tumor markers.<br><br>" +
                      "<b>The Marker Fingerprint:</b>" +
                      "<ul>" +
                      "<li>Because both tumors come from early germ cells, they BOTH share the primitive stem-cell marker <b>OCT3/4</b>.</li>" +
                      "<li>However, Embryonal cells have a unique fingerprint: they are <b>positive</b> for <b>cytokeratin</b> and famously <b>NEGATIVE</b> for <b>c-KIT (CD117)</b>.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 9 */
            {
                type: "match",
                question: "Match the tumor marker to the correct cancer it identifies!",
                pairs: [
                    { left: "c-KIT (CD117) Positive", right: "Seminoma" },
                    { left: "Cytokeratin Positive", right: "Embryonal Carcinoma" },
                    { left: "OCT3/4 Positive", right: "Shared by BOTH Seminoma and Embryonal" }
                ],
                explanation: "While both of these tumors express the primitive OCT3/4 switch, Cytokeratin and CD30 are positive for Embryonal Carcinoma, whereas c-KIT is positive in Seminoma.",
                topic: "Tumor Markers"
            },
            /* Screen 10 */
            {
                type: "concept",
                title: "Clinical Behavior: Pure vs. Mixed",
                text: "Pure Embryonal Carcinomas are not common.<br><br>" +
                      "<b>The \"Mixed\" Reality:</b>" +
                      "<ul>" +
                      "<li>They are almost always mixed with other tumor types (like Teratoma or Yolk Sac).</li>" +
                      "<li>Together, they form what is called a <b>Mixed Germ Cell Tumor</b>.</li>" +
                      "</ul>" +
                      "<b>Aggressive Spread:</b>" +
                      "<ul>" +
                      "<li>Because Embryonal cells are so incredibly aggressive, they frequently invade nearby blood vessels and metastasize very early.</li>" +
                      "<li>Even if they only make up a small part of a mixed mass, their aggressive nature heavily dictates the severity and treatment of the patient's entire disease!</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 11 */
            {
                type: "mcq",
                question: "Finding a pure Embryonal Carcinoma as the only cancer type in a patient's testis is the most common presentation for this specific tumor.",
                options: ["True", "False"],
                answer: 1,
                explanation: "Pure Embryonal Carcinomas are actually very rare! It is much more common to find Embryonal Carcinoma mixed together with other tumor types (like Yolk Sac or Teratoma) as part of a highly aggressive Mixed Germ Cell Tumor.",
                topic: "Clinical Presentation"
            },
            /* Screen 12 */
            {
                type: "match",
                question: "Let's lock in the key features of Embryonal Carcinoma! Match each pathology feature to its correct characteristic.",
                pairs: [
                    { left: "Cell of Origin", right: "Totipotent cells from GCNIS trying to act like an embryonic stem cell." },
                    { left: "Gross Appearance", right: "Hemorrhagic and necrotic (bloody and dead tissue)." },
                    { left: "Microscopic Appearance", right: "Ugly, pleomorphic, and overlapping cells forming primitive glands." },
                    { left: "Cytokeratin", right: "The classic positive tumor marker stains." },
                    { left: "Clinical Presentation", right: "Usually part of a Mixed Germ Cell Tumor; spreads early." }
                ],
                explanation: "The cell of origin involves totipotent GCNIS cells, the gross appearance is hemorrhagic and necrotic, and the microscopic appearance shows pleomorphic cells forming primitive glands. Furthermore, cytokeratin are classic positive markers, and clinically, the tumor spreads early and is usually part of a mixed germ cell tumor.",
                topic: "Embryonal Carcinoma Recap"
            }
        ]
    },

    "testicular.6": {
        title: "Lesson 6: Yolk Sac Tumor",
        objectives: [
            "Master the pathology of Yolk Sac Tumors, including their net-like architecture, the classic Schiller-Duval body, massive AFP secretion, and the crucial age-based demographics."
        ],
        data: [
            /* Screen 1 */
            {
                type: "concept",
                title: "Mimicking the Sac",
                text: "Welcome to the second tumor in the Non-Seminoma family: <b>The Yolk Sac Tumor</b>.<br>Instead of building a chaotic embryo like the last lesson, these tumor cells try to build a human yolk sac.<br><br>" +
                      "<b>Why a yolk sac?</b>" +
                      "<ul>" +
                      "<li>In a normal fetus, the early yolk sac is responsible for producing the first blood cells and specific fetal proteins.</li>" +
                      "<li>The tumor attempts to do the exact same thing!</li>" +
                      "<li>Because it is trying to copy this specific embryonic structure, it leaves behind very unique structural and chemical clues for pathologists.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 2 */
            {
                type: "concept",
                title: "Microscopic Pattern: The Lacy Network",
                text: "Under the microscope, Yolk Sac tumors look completely different from the solid, uniform sheets of a Seminoma or the pleomorphic, poorly formed glands of an Embryonal Carcinoma.<br><br>" +
                      "<b>The Reticular Network:</b>" +
                      "<ul>" +
                      "<li>As the cells try to copy the delicate structure of an embryonic yolk sac, they form a lacy, net-like (reticular) network.</li>" +
                      "<li>This creates an extensive, loosely connected web of tumor cells across the slide.</li>" +
                      "</ul>",
                image: "assets/images/lesson6/yolk_sac_microscopic.png",
                buttonText: "Continue"
            },
            /* Screen 3 */
            {
                type: "mcq",
                question: "Under the microscope, a Yolk Sac tumor most commonly grows in a solid, uniform sheet of cells separated by fibrous septa.",
                options: ["True", "False"],
                answer: 1,
                explanation: "Yolk Sac tumors typically form a lacy, net-like (reticular) network as the cells try to copy an embryonic yolk sac.",
                topic: "Microscopic Pattern"
            },
            /* Screen 4 */
            {
                type: "concept",
                title: "The Schiller-Duval Body",
                text: "The most famous microscopic feature of a Yolk Sac Tumor is a highly specific structure called the <b>Schiller-Duval body</b>.<br><br>" +
                      "<b>The Glomerulus Mimic:</b>" +
                      "<ul>" +
                      "<li>It consists of a central blood vessel surrounded by a ring of tumor cells, all sitting inside an empty space.</li>" +
                      "<li>Pathologists describe this structure as resembling a normal kidney glomerulus.</li>" +
                      "<li>If you see the phrase \"Schiller-Duval body\" or \"glomeruloid structure\" in a clinical report, it is 100% a Yolk Sac Tumor!</li>" +
                      "</ul>",
                image: "assets/images/lesson6/schiller_duval_body.png",
                buttonText: "Continue"
            },
            /* Screen 5 */
            {
                type: "mcq",
                question: "A pathologist examining a testicular biopsy notes a microscopic structure consisting of a central blood vessel surrounded by tumor cells inside an empty space, resembling a kidney glomerulus. What is this structure called?",
                options: [
                    "Reinke crystalloid",
                    "Lymphocytic septa",
                    "Schiller-Duval body",
                    "Primitive gland"
                ],
                answer: 2,
                explanation: "The Schiller-Duval body is the defining microscopic fingerprint for a Yolk Sac tumor. It is essentially the tumor's attempt to build primitive yolk sac blood vessels.",
                topic: "Schiller-Duval Body"
            },
            /* Screen 6 */
            {
                type: "concept",
                title: "The Tumor Marker: Massive AFP",
                text: "Because normal fetal yolk sacs are designed to secrete a specific protein called <b>Alpha-fetoprotein (AFP)</b>, Yolk Sac tumors do the exact same thing.<br><br>" +
                      "<b>The Chemical Fingerprint:</b>" +
                      "<ul>" +
                      "<li>These tumors secrete massive amounts of AFP directly into the patient's bloodstream.</li>" +
                      "<li>A simple blood test for elevated AFP is a primary way doctors track the presence and growth of this specific cancer.</li>" +
                      "<li><b>Hyaline globules</b> found in the tumor are the storage sites for Alpha-Fetoprotein (AFP).</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 7 */
            {
                type: "match",
                question: "Match the tumor type to its correct relationship with the AFP blood marker!",
                pairs: [
                    { left: "Elevated AFP", right: "Yolk Sac Tumor" },
                    { left: "Normal AFP", right: "Pure Seminoma" }
                ],
                explanation: "AFP is the signature blood marker for Yolk Sac tumors. If a biopsy claims a tumor is a \"pure Seminoma\" but the blood has high AFP, the biopsy missed the hidden Yolk Sac component!",
                topic: "Tumor Marker AFP"
            },
            /* Screen 8 */
            {
                type: "concept",
                title: "Yolk Sac Demographics: Kids vs. Adults",
                text: "The clinical presentation of a Yolk Sac tumor depends entirely on how old the patient is.<br><br>" +
                      "<b>The Pediatric Exception:</b>" +
                      "<ul>" +
                      "<li>Most common testicular tumor under 3 years old.</li>" +
                      "<li>Present as pure yolk sac tumors.</li>" + 
                      "<li>Excellent prognosis (highly curable).</li>" +
                      "<li>Because these tumors develop before the hormonal surge of puberty, pediatric Yolk Sac tumors <b>LACK</b> the GCNIS precursor.</li>" +
                      "</ul>" +
                      "<b>The Adult Reality:</b>" +
                      "<ul>" +
                      "<li>In post-pubertal adults, pure Yolk Sac tumors are incredibly rare.</li>" +
                      "<li>Instead, they almost always show up mixed with other aggressive cancers (like Embryonal Carcinoma) to form a Mixed Germ Cell Tumor.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 9 */
            {
                type: "mcq",
                question: "A 2-year-old toddler is diagnosed with a pure Yolk Sac tumor. This tumor most likely developed from dormant GCNIS cells.",
                options: ["True", "False"],
                answer: 1,
                explanation: "Pediatric tumors are the great exception to the rule! Because they occur before puberty, Yolk Sac tumors in toddlers do NOT arise from GCNIS.",
                topic: "Pediatric Demographics"
            },
            /* Screen 10 */
            {
                type: "match",
                question: "Match each clinical or pathological clue to its correct meaning.",
                pairs: [
                    { left: "Reticular Network", right: "The lacy, net-like microscopic growth pattern." },
                    { left: "Schiller-Duval Body", right: "The microscopic structure that mimics a kidney glomerulus." },
                    { left: "Alpha-fetoprotein (AFP)", right: "The classic tumor marker secreted into the blood." },
                    { left: "Under 3 years old", right: "The demographic where pure Yolk Sac tumors are most common." }
                ],
                explanation: "A reticular network is a lacy microscopic growth pattern, Schiller-Duval bodies mimic kidney glomeruli, AFP is the classic tumor marker secreted into the blood, and pure yolk sac tumors most commonly occur in boys under 3 years old.",
                topic: "Yolk Sac Tumor Recap"
            }
        ]
    },

    "testicular.7": {
        title: "Lesson 7: Choriocarcinoma",
        objectives: [
            "Master the most aggressive testicular tumor, its unique cellular makeup, its rapid spread through the blood, and the massive hormonal chaos it creates."
        ],
        data: [
            /* Screen 1 */
            {
                type: "concept",
                title: "Mimicking the Placenta",
                text: "A Choriocarcinoma is a highly malignant Non-Seminomatous Germ Cell Tumor (NSGCT) that is trying to build a human placenta.<br><br>" +
                      "<b>The Deadly Imposter:</b>" +
                      "<ul>" +
                      "<li>Real placentas are designed to aggressively tap deeply into maternal blood vessels to get nutrients for the fetus.</li>" +
                      "<li>Because Choriocarcinomas mimic placentas, they are incredibly good at invading blood vessels extremely early in their development!</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 2 */
            {
                type: "concept",
                title: "Notice What's Missing: No Villi",
                text: "Under the microscope, a Choriocarcinoma consists of chaotic sheets of cytotrophoblasts and syncytiotrophoblasts. <br>However, there is a massive structural clue missing!<br><br>" +
                      "<b>No True Villi:</b>" +
                      "<ul>" +
                      "<li>In a normal, healthy placenta, these two cell types perfectly arrange themselves into \"chorionic villi\" (finger-like projections that exchange nutrients).</li>" +
                      "<li>In a Choriocarcinoma, the cells are too mutated and disorganized.</li>" +
                      "<li>There are <b>NO true, fully formed chorionic villi</b>.</li>" +
                      "<li>If it had normal villi, it wouldn't be cancer!</li>" +
                      "</ul>",
                images: [
                    {
                        url: "assets/images/lesson7/chorionic_villus.png",
                        title: "Normal Chorionic Villus (Reference)"
                    },
                    {
                        url: "assets/images/lesson7/choriocarcinoma_microscopic.png",
                        title: "<b>Choriocarcinoma Microscopic Features</b><br>" +
                               "• Composed of proliferating cytotrophoblasts and syncytiotrophoblasts<br>" +
                               "• Absence of chorionic villi<br>" +
                               "• Presence of abnormal mitosis, vascular invasion, hemorrhage, and necrosis",
                        source: "Source: https://ilovepathology.com/gestational-trophoblastic-diseases-part-2-invasive-mole-choriocarcinoma-placental-site-trophoblastic-tumor/"
                    }
                ],
                buttonText: "Continue"
            },
            /* Screen 3 */
            {
                type: "mcq",
                question: "A pathologist diagnosing a highly aggressive Choriocarcinoma expects to see fully formed, normal chorionic villi under the microscope.",
                options: ["True", "False"],
                answer: 1,
                explanation: "Choriocarcinomas are highly disorganized. While they contain sheets of cytotrophoblasts and syncytiotrophoblasts, they completely LACK true, fully formed chorionic villi.",
                topic: "Cellular Makeup"
            },
            /* Screen 4 */
            {
                type: "concept",
                title: "The \"Burned Out\" Primary & Hematogenous Spread",
                text: "Because this tumor is a master at invading blood vessels, it relies on hematogenous (blood-borne) spread.<br><br>" +
                      "<b>The Burned Out Scar:</b>" +
                      "<ul>" +
                      "<li>The tumor spreads so incredibly fast that the primary mass in the testis often outgrows its own local blood supply and dies off!</li>" +
                      "<li>This leaves only a tiny, harmless-looking fibrous scar in the scrotum, while massive, deadly metastatic tumors continue to grow aggressively in the lungs or brain.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 5 */
            {
                type: "mcq",
                question: "A 25-year-old man presents with massive lung tumors and is coughing up blood. His testicular ultrasound shows no active tumor, only a tiny fibrous scar. What is the most likely explanation?",
                options: [
                    "He has a primary lung cancer that is unrelated to his testis.",
                    "A classic Seminoma successfully healed itself.",
                    "He has a \"burned out\" Choriocarcinoma that metastasized to the lungs before the primary testicular mass died.",
                    "The patient has an active Spermatocytic Tumor."
                ],
                answer: 2,
                explanation: "The classic presentation of a \"burned out\" Choriocarcinoma is it spreads aggressively to the lungs via the blood, then dies locally, leaving only a scar behind in the testis.",
                topic: "Burned Out Primary"
            },
            /* Screen 6 */
            {
                type: "concept",
                title: "Massive hCG Production",
                text: "Remember the giant Syncytiotrophoblast cells?" +
                      "<ul>" +
                      "<li>In a normal pregnancy, their job is to secrete Human Chorionic Gonadotropin (hCG) to keep the pregnancy alive.</li>" +
                      "<li>The tumor cells do the exact same thing, secreting <b>MASSIVE amounts of hCG</b> into the male patient's bloodstream.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 7 */
            {
                type: "match",
                question: "Match each pathology or clinical clue to its Choriocarcinoma feature.",
                pairs: [
                    { left: "Cyto & Syncytiotrophoblasts", right: "The two specific cell types that make up the tumor." },
                    { left: "Chorionic Villi", right: "The normal placental structure notably ABSENT in this cancer." },
                    { left: "Hematogenous Spread", right: "The reason it spreads extremely early via the blood to the lungs and brain." },
                    { left: "Burned Out Primary", right: "When the testicular mass dies and leaves only a scar, but lung metastases thrive." }
                ],
                explanation: "Choriocarcinoma is composed of cytotrophoblasts and syncytiotrophoblasts but notably lacks chorionic villi. It utilizes early hematogenous spread to reach the lungs and brain, and can present as a 'burned out primary' where the testicular mass scars over while metastases thrive.",
                topic: "Choriocarcinoma Recap"
            }
        ]
    },

    "testicular.8": {
        title: "Lesson 8: Teratoma",
        objectives: [
            "Understand how Teratomas differ radically based on the patient's age, recognize the danger of somatic-type malignancies, and review how Mixed Tumors dictate clinical treatment and blood markers."
        ],
        data: [
            /* Screen 1 */
            {
                type: "concept",
                title: "Teratoma Anatomy (The 3 Germ Layers)",
                text: "Welcome to the most bizarre tumor in pathology!<br><br>" +
                      "<b>Teratoma</b>" +
                      "<ul>" +
                      "<li>It is a Non-Seminomatous tumor that originates from completely totipotent germ cells.</li>" +
                      "<li>Because these cells are completely totipotent, they have the genetic blueprint to differentiate into mature tissues from all three embryonic germ layers.</li>" +
                      "<li>They can build a chaotic mix of body parts right inside the testis, forming large, messy cysts to the naked eye.</li>" +
                      "</ul>",
                image: "assets/images/lesson8/three_germ_layers.png",
                buttonText: "Continue"
            },
            /* Screen 2 */
            {
                type: "mcq",
                question: "It is biologically impossible for a pathologist to find fully formed teeth, hair, and thyroid tissue inside a male's testicular tumor.",
                options: ["True", "False"],
                answer: 1,
                explanation: "Because Teratoma cells are totipotent, they can build mature tissues from all three germ layers, creating a chaotic mix of hair, teeth, bone, and glands right inside the testis.",
                topic: "Teratoma Anatomy"
            },
            /* Screen 3 */
            {
                type: "concept",
                title: "The Age Rule: Pre-pubertal vs. Post-pubertal",
                text: "The clinical behavior of this tumor is entirely dependent on whether it occurs before or after puberty.<br><br>" +
                      "<b>In Children (Pre-pubertal):</b>" +
                      "<ul>" +
                      "<li>Teratomas in infants and toddlers are completely <b>BENIGN</b>.</li>" +
                      "<li>Because they happen before puberty, they do not arise from the GCNIS precursor and lack the i(12p) mutation.</li>" +
                      "</ul>" +
                      "<b>In Adults (Post-pubertal):</b>" +
                      "<ul>" +
                      "<li>Adult Teratomas arise from GCNIS and contain the i(12p) mutation.</li>" +
                      "<li>Therefore, adult Teratomas are <b>ALWAYS considered MALIGNANT</b> and capable of metastasis!</li>" +
                      "</ul>",
                image: "assets/images/lesson8/pre_vs_postpubertal_teratoma.png",
                buttonText: "Continue"
            },
            /* Screen 4 */
            {
                type: "mcq",
                question: "A 25-year-old adult male has a testicular mass removed. The pathologist confirms it is a fully \"mature\" Teratoma, meaning the tissue inside looks like perfectly normal, healthy skin and cartilage. <br>How should this tumor be classified?",
                options: [
                    "Completely benign because the tissue is mature.",
                    "Malignant, because all post-pubertal Teratomas are malignant.",
                    "A benign Yolk Sac tumor.",
                    "A slow-growing Seminoma."
                ],
                answer: 1,
                explanation: "In post-pubertal adult males, ALL Teratomas are considered malignant and capable of metastasis, regardless of how \"mature\" or harmless the tissue looks under the microscope!",
                topic: "Post-pubertal Teratoma Behavior"
            },
            /* Screen 5 */
            {
                type: "concept",
                title: "The \"Somatic-Type\" Malignancy",
                text: "Here is the scary part about adult Teratomas: they are famously <b>highly resistant to chemotherapy and radiation</b>.<br><br>" +
                      "<b>A Cancer Inside a Cancer:</b>" +
                      "<ul>" +
                      "<li>Even worse, sometimes the mature tissue inside the teratoma undergoes a secondary mutation and becomes a regular \"adult\" cancer!</li>" +
                      "<li>For example, the teratoma might grow a patch of skin, and then those skin cells mutate into Squamous Cell Carcinoma.</li>" +
                      "<li>This is called a <b>\"Teratoma with somatic-type malignancy.\"</b></li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 6 */
            {
                type: "concept",
                title: "Mixed Tumors: The Rule of the Worst",
                text: "We’ve learned all the individual tumors, but here is the reality check: over 60% of all testicular tumors are actually a MIX of different types!<br><br>" +
                      "<b>The Clinical Reality:</b>" +
                      "<ul>" +
                      "<li>A single mass could be 40% Yolk Sac, 30% Embryonal, 20% Teratoma, and 10% Seminoma.</li>" +
                      "<li>How do doctors treat this? They follow the <b>\"Rule of the Worst.\"</b></li>" +
                      "<li>Treatment is dictated by the most aggressive component inside the mass (usually Embryonal Carcinoma or Choriocarcinoma).</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 7 */
            {
                type: "concept",
                title: "Mixed Markers",
                text: "Because mixed tumors contain multiple types of cancer cells, the patient's blood will show a mix of markers based on exactly what is actively growing inside.<br><br>" +
                      "<b>The Sneaky Marker:</b>" +
                      "<ul>" +
                      "<li>Let's say a patient's tumor is 90% pure Seminoma and 10% Yolk Sac.</li>" +
                      "<li>Even though the mass is overwhelmingly Seminoma (which NEVER makes AFP), that tiny 10% Yolk Sac component will actively secrete AFP into the blood!</li>" +
                      "<li>This elevated AFP proves to the doctor that it is a Mixed Germ Cell Tumor, not a pure Seminoma.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 8 */
            {
                type: "mcq",
                question: "A patient's testicular mass is mostly Seminoma, but their blood test shows massive levels of Alpha-fetoprotein (AFP). Because the tumor is predominantly a Seminoma, the doctor can safely ignore the AFP levels.",
                options: ["True", "False"],
                answer: 1,
                explanation: "Elevated AFP means there is a hidden Yolk Sac component. Because of the \"Rule of the Worst,\" the tumor must now be treated as a highly aggressive Mixed Non-Seminoma!",
                topic: "Mixed Tumor Blood Markers"
            },
            /* Screen 9 */
            {
                type: "match",
                question: "Match each concept to its defining clinical rule!",
                pairs: [
                    { left: "Pre-pubertal Teratoma", right: "Occurs in children, lacks i(12p), and is completely benign." },
                    { left: "Post-pubertal Teratoma", right: "Arises from GCNIS and is ALWAYS malignant, even if the tissue looks mature." },
                    { left: "Somatic-type Malignancy", right: "When mature teratoma tissue mutates into a secondary adult cancer; requires surgery." },
                    { left: "Mixed Tumors", right: "Make up 60% of cases; treatment is dictated by the most aggressive component." }
                ],
                explanation: "Pre-pubertal teratomas are benign pediatric tumors lacking i(12p), whereas post-pubertal teratomas arise from GCNIS and are always malignant. Somatic-type malignancies occur when mature teratoma tissue mutates into a secondary cancer requiring surgery, and mixed tumors account for 60% of cases, with treatment driven by the most aggressive component.",
                topic: "Teratoma & Mixed Tumors Recap"
            }
        ]
    },

    "testicular.9": {
        title: "Lesson 9: Sex Cord Stromal Tumors",
        objectives: [
            "Understand the origins, distinct gross appearances, microscopic features, and clinical symptoms of the rare but fascinating Leydig and Sertoli Cell Tumors."
        ],
        data: [
            /* Screen 1 */
            {
                type: "concept",
                title: "Sex Cord Tumors",
                text: "We have officially finished the aggressive Germ Cell Tumors, which make up 95% of testicular cancers.<br><br>" +
                      "Now, let's look at the remaining 5%: <b>The Sex Cord-Stromal Tumors</b>:" +
                      "<ul>" +
                      "<li>The Leydig Cell Tumors</li>" +
                      "<li>The Sertoli Cell Tumors</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 2 */
            {
                type: "concept",
                title: "Leydig Cell Tumors & Hormonal Chaos",
                text: "Leydig cells normally live outside the seminiferous tubules and act as the testis's primary hormone factories. <br>When they form a tumor, they overproduce hormones!<br><br>" +
                      "<b>The Hormonal Imbalance:</b>" +
                      "<ul>" +
                      "<li>The tumor mass-produces Androgens (testosterone) and sometimes Estrogens.</li>" +
                      "<li>Because of this hormone production, the clinical symptoms depend entirely on the patient's age.</li>" +
                      "<li><b>In young boys:</b> Massive testosterone causes precocious (early) puberty.</li>" +
                      "<li><b>In adult men:</b> Excess estrogens take over, leading to gynecomastia (breast tissue growth) and a loss of libido.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 3 */
            {
                type: "mcq",
                question: "A 5-year-old boy presents with a testicular mass, a sudden deepening of his voice, and new facial hair. This presentation is classic for a Leydig Cell Tumor due to massive androgen production.",
                options: ["True", "False"],
                answer: 0,
                explanation: "Leydig Cell Tumors cause massive hormonal chaos. Because children are highly sensitive to androgens, the tumor's testosterone triggers early (precocious) puberty.",
                topic: "Leydig Cell Hormonal Effects"
            },
            /* Screen 4 */
            {
                type: "concept",
                title: "Gross Appearance: The Golden Mass",
                text: "To the naked eye, Leydig Cell Tumors form distinct, circumscribed nodules inside the testis. <br>But they have a very famous and unique color!<br><br>" +
                      "Why are they Golden Brown?" +
                      "<ul>" +
                      "<li>Leydig cells manufacture steroid hormones (like testosterone).</li>" +
                      "<li>The biological building block for all steroid hormones is cholesterol (a fat/lipid).</li>" +
                      "<li>Because the tumor cells are packed with fat droplets, the mass looks distinctly yellow or golden-brown to the naked eye!</li>" +
                      "</ul>",
                images: [
                    { 
                        url: "assets/images/lesson9/leydig_tumor_gross.png", 
                        title: "Leydig Cell Tumor - Gross Appearance: The 1.4 cm tumor is in the periphery and has a well circumscribed, uniform, tan cut surface.",
                        source: "Source: Contributed by Debra L. Zynger, M.D.\nhttps://www.pathologyoutlines.com/topic/testisleydig.html"
                    },
                ],
                buttonText: "Continue"
            },
            /* Screen 5 */
            {
                type: "concept",
                title: "Microscopic Feature: Reinke Crystalloids",
                text: "Under the microscope, Leydig cell tumors feature large, round cells with abundant pink (eosinophilic) cytoplasm.<br><br>" +
                      "<b>The Ultimate Clue:</b>" +
                      "<ul>" +
                      "<li><b>Reinke crystalloids!</b></li>" +
                      "<li>Found inside the cytoplasm of the tumor cells.</li>" +
                      "<li>These are rod-shaped, intensely pink crystals.</li>" +
                      "<li>If you see the phrase \"Reinke crystalloid\" in a clinical case, it is 100% a Leydig Cell Tumor!</li>" +
                      "</ul>",
                images: [
                    { 
                        url: "assets/images/lesson9/reinke_crystalloids.png", 
                        title: "Reinke crystalloids"
                    },
                ],
                buttonText: "Continue"
            },
            /* Screen 6 */
            {
                type: "mcq",
                question: "A pathology report describes a testicular tumor containing large cells packed with lipids. Inside the cytoplasm, the pathologist notes rod-shaped, eosinophilic (pink) crystals. What is the diagnosis?",
                options: [
                    "Yolk Sac Tumor (Schiller-Duval bodies)",
                    "Classic Seminoma (Clear glycogen)",
                    "Leydig Cell Tumor (Reinke crystalloids)",
                    "Embryonal Carcinoma (Primitive glands)"
                ],
                answer: 2,
                explanation: "Rod-shaped pink crystals in the cytoplasm are Reinke crystalloids, which are the absolute defining microscopic feature of a Leydig Cell Tumor.",
                topic: "Reinke Crystalloids Identification"
            },
            /* Screen 7 */
            {
                type: "concept",
                title: "Sertoli Cell Tumors",
                text: "Now let's look at the other half of the stromal family! Sertoli cells are the \"nurse cells\" that normally live INSIDE the seminiferous tubules to support and feed developing sperm.<br><br>" +
                      "<b>Building Fake Tubules:</b>" +
                      "<ul>" +
                      "<li>When Sertoli cells form a tumor, they try to do what they know best: build tubes!</li>" +
                      "<li>Under the microscope, Sertoli cell tumors form tall, columnar cells arranged in distinct cords or trabeculae.</li>" +
                      "<li>These structures are trying to mimic the shape of normal, hollow seminiferous tubules.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 8 */
            {
                type: "concept",
                title: "Gross Appearance & Clinical Behavior: Pale & Silent",
                text: "Let's contrast the Sertoli tumor with the Leydig tumor. Sertoli cells are not the primary hormone factories of the testis, so they aren't stuffed with cholesterol and fat droplets!<br><br>" +
                      "<b>The Pale and Quiet Tumor:</b>" +
                      "<ul>" +
                      "<li><b>Gross Appearance:</b> Because they lack high lipid content, they appear as small, pale-gray to white nodules (NOT golden brown).</li>" +
                      "<li><b>Clinical Behavior:</b> They are \"hormonally silent.\" They don't usually cause precocious puberty or gynecomastia; they simply present as a painless testicular mass.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 9 */
            {
                type: "concept",
                title: "The Benign Rule For Both Tumors",
                text: "After learning about the terrifying, fast-spreading Germ Cell Tumors in the previous lessons, you might think a tumor that causes a 5-year-old to grow a beard must be highly malignant.<br><br>" +
                      "<b>Good news for the patient!</b>" +
                      "<ul>" +
                      "<li>Surprisingly, despite the dramatic hormonal symptoms of Leydig tumors and the tubule-building of Sertoli tumors, about 90% of ALL Sex Cord-Stromal tumors are completely benign!</li>" +
                      "<li>Simply cutting out the mass (orchiectomy) is almost always fully curative.</li>" +
                      "<li>They rarely metastasize to other organs.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 10 */
            {
                type: "mcq",
                question: "Because Leydig cell tumors cause severe and dramatic physical changes (like early puberty or gynecomastia), they are considered highly aggressive cancers that require intense chemotherapy.",
                options: ["True", "False"],
                answer: 1,
                explanation: "Despite the crazy physical changes they cause, ~90% of Leydig (and Sertoli) cell tumors are entirely benign and are cured completely by surgical removal alone.",
                topic: "Stromal Tumor Prognosis"
            },
            /* Screen 11 */
            {
                type: "match",
                question: "Let's lock in the high-yield facts for Sex Cord-Stromal Tumors! Match each clue to its correct meaning.",
                pairs: [
                    { left: "Golden Brown", right: "The gross color of a Leydig mass due to high lipid/cholesterol content." },
                    { left: "Reinke Crystalloids", right: "The rod-shaped, pink microscopic crystals found in Leydig cells." },
                    { left: "Precocious Puberty", right: "Caused by massive androgen production from a Leydig tumor in a child." },
                    { left: "Cords and Trabeculae", right: "The microscopic structures Sertoli cells build to copy tubules." },
                    { left: "90% Benign", right: "The clinical prognosis shared by both Leydig and Sertoli cell tumors." }
                ],
                explanation: "Golden brown is the lipid-rich gross appearance of Leydig tumors, Reinke crystalloids are their classic microscopic rod-shaped crystals, and their androgen production can cause precocious puberty. Furthermore, Sertoli cells form cords and trabeculae to mimic tubules, and both tumor types share a 90% benign clinical prognosis.",
                topic: "Sex Cord Stromal Tumors Recap"
            }
        ]
    },

    "testicular.10": {
        title: "Lesson 10: Clinical Presentation, Diagnosis, & Summary",
        objectives: [
            "Recognize how testicular cancer presents in the clinic, master the diagnostic workup, and review the major tumor categories to complete your mastery of testicular pathology!"
        ],
        data: [
            /* Screen 1 */
            {
                type: "concept",
                title: "The Classic Presentation: A Silent Discovery",
                text: "Welcome to the clinic! <br>Now that we know the cellular biology, how does a patient actually present to the doctor?<br><br>" +
                      "<b>The Silent Lump:</b>" +
                      "<ul>" +
                      "<li>The classic presentation of testicular cancer is a young man (aged 15–34) who discovers a painless, firm, unilateral testicular mass.</li>" +
                      "<li>Sometimes, rather than a distinct lump, patients simply report a feeling of \"heaviness\" or a dull ache in the lower abdomen or scrotum.</li>" +
                      "</ul>" +
                      "<b>The Trauma Coincidence:</b>" +
                      "<ul>" +
                      "<li>A patient often discovers the mass right after a minor sports or groin injury.</li>" +
                      "<li>The trauma did <b>NOT</b> cause the cancer! It simply brought the patient's attention to their anatomy, prompting them to feel the painless mass that was already there.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 2 */
            {
                type: "mcq",
                question: "The most common presentation of testicular cancer is a rapidly growing, excruciatingly painful mass accompanied by a severe fever.",
                options: ["True", "False"],
                answer: 1,
                explanation: "Testicular cancer is notoriously silent. The classic presentation is a painless, firm, solid mass. If a patient has severe pain and fever, it is much more likely to be an infection (like epididymitis) rather than cancer.",
                topic: "Clinical Presentation"
            },
            /* Screen 3 */
            {
                type: "concept",
                title: "Signs of Metastasis: When It Spreads",
                text: "Because the primary testicular mass is usually painless, some patients don't notice it until the cancer has already metastasized (spread). <br>In these cases, they present with symptoms from the distant tumors.<br><br>" +
                      "<b>Where does it go?</b>" +
                      "<ul>" +
                      "<li><b>Para-aortic lymph nodes:</b> Enlarged abdominal nodes press on nearby nerves and organs, often causing severe lower back pain.</li>" +
                      "<li><b>Lungs:</b> Hematogenous spread (especially from Choriocarcinoma or aggressive Non-Seminomas) causes shortness of breath, chest pain, and hemoptysis (coughing up blood).</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 4 */
            {
                type: "concept",
                title: "The Initial Workup: Ultrasound & Bloods",
                text: "If a doctor suspects testicular cancer, the absolute first step is a <b>Scrotal Ultrasound</b>. <br>This imaging safely confirms if the mass is fluid-filled (usually a benign cyst) or solid (highly suspicious for cancer).<br><br>" +
                      "Next, they will draw blood to check for <b>Serum Tumor Markers:</b>" +
                      "<ul>" +
                      "<li><b>AFP:</b> Points to a Yolk Sac component.</li>" +
                      "<li><b>hCG:</b> Points to a Choriocarcinoma (or mild levels in a Seminoma).</li>" +
                      "<li><b>LDH (Lactate Dehydrogenase):</b> A general marker of cell damage. It acts as a great gauge for total \"tumor burden\" (how large and fast-growing the cancer is overall).</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 5 */
            {
                type: "match",
                question: "Match each tumor marker to the cancer or feature that famously secretes or relates to it!",
                pairs: [
                    { left: "Massive AFP", right: "Yolk Sac Tumor" },
                    { left: "Massive hCG", right: "Choriocarcinoma" },
                    { left: "Mild hCG", right: "Pure Seminoma (15% of cases)" },
                    { left: "LDH", right: "A general marker for overall tumor burden and cell death" }
                ],
                explanation: "Yolk Sac tumors secrete AFP, Choriocarcinomas secrete massive hCG, a small percentage of Seminomas can secrete mild hCG, and LDH tells you the overall size of the disease. Seminomas NEVER make AFP!",
                topic: "Tumor Markers Summary"
            },
            /* Screen 6 */
            {
                type: "concept",
                title: "The Golden Rule: DO NOT BIOPSY!",
                text: "Let's recap the most critical clinical rule in this entire course: <b>NEVER do a trans-scrotal needle biopsy on a suspected testicular mass!</b><br><br>" +
                      "<b>Why?</b>" +
                      "<ul>" +
                      "<li>Puncturing the tough tunica albuginea with a needle alters the natural lymphatic drainage and seeds the scrotal skin with cancer cells.</li>" +
                      "</ul>" +
                      "<b>The Only Safe Way:</b>" +
                      "<ul>" +
                      "<li>The only proper way to diagnose and initially treat the mass is a <b>Radical Orchiectomy</b> (surgical removal of the entire testis and its capsules).</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 7 */
            {
                type: "concept",
                title: "Grand Summary: Germ Cell Tumors (95%)",
                text: "95% of testicular tumors are Germ Cell Tumors. They split into two main camps:<br><br>" +
                      "<b>Seminomas (\"Slow and steady\"):</b>" +
                      "<ul>" +
                      "<li>Localized, primitive markers (OCT3/4, c-KIT).</li>" +
                      "<li>Clear glycogen-rich cells with lymphocytic septa.</li>" +
                      "<li>Exquisitely radiosensitive.</li>" +
                      "</ul>" +
                      "<b>Non-Seminomas (\"Fast and furious\"):</b>" +
                      "<ul>" +
                      "<li>Aggressive, early metastasis, radioresistant (requires chemotherapy).</li>" +
                      "<li>Includes Embryonal (Cytokeratin+, ugly/pleomorphic), Yolk Sac (AFP, Schiller-Duval), Choriocarcinoma (hCG, no villi), and Teratoma (3 germ layers).</li>" +
                      "<li>Often present as Mixed Tumors, treated based on the most aggressive piece.</li>" +
                      "</ul>" +
                      "<br><b>IHC Marker Cheat Sheet:</b>" +
                      "<div class=\"table-responsive\">" +
                      "<table class=\"ihc-table\">" +
                          "<thead>" +
                              "<tr>" +
                                  "<th>Marker</th>" +
                                  "<th>Seminoma</th>" +
                                  "<th>Embryonal</th>" +
                                  "<th>Yolk Sac</th>" +
                                  "<th>Chorio</th>" +
                              "</tr>" +
                          "</thead>" +
                          "<tbody>" +
                              "<tr>" +
                                  "<td><b>OCT3/4</b></td>" +
                                  "<td><span class=\"pos\">(+)</span></td>" +
                                  "<td><span class=\"pos\">(+)</span></td>" +
                                  "<td><span class=\"neg\">(-)</span></td>" +
                                  "<td><span class=\"neg\">(-)</span></td>" +
                              "</tr>" +
                              "<tr>" +
                                  "<td><b>KIT (CD117)</b></td>" +
                                  "<td><span class=\"pos\">(+)</span></td>" +
                                  "<td><span class=\"neg\">(-)</span></td>" +
                                  "<td><span class=\"neg\">(-)</span></td>" +
                                  "<td><span class=\"neg\">(-)</span></td>" +
                              "</tr>" +
                              "<tr>" +
                                  "<td><b>Podoplanin</b></td>" +
                                  "<td><span class=\"pos\">(+)</span></td>" +
                                  "<td><span class=\"neg\">(-)</span></td>" +
                                  "<td><span class=\"neg\">(-)</span></td>" +
                                  "<td><span class=\"neg\">(-)</span></td>" +
                              "</tr>" +
                              "<tr>" +
                                  "<td><b>Cytokeratin</b></td>" +
                                  "<td><span class=\"neg\">(-)</span></td>" +
                                  "<td><span class=\"pos\">(+)</span></td>" +
                                  "<td><span class=\"pos\">(+)</span></td>" +
                                  "<td><span class=\"pos\">(+)</span></td>" +
                              "</tr>" +
                          "</tbody>" +
                      "</table>" +
                      "</div>" +
                      "<ul>" +
                      "<li><b>Classic Seminoma:</b> Stays primitive (OCT3/4+), expresses survival/surface markers (KIT+, Podoplanin+), but does NOT build epithelial tissues (Cytokeratin-).</li>" +
                      "<li><b>Embryonal Carcinoma:</b> Primitive (OCT3/4+) but actively differentiating (Cytokeratin+).</li>" +
                      "<li><b>Yolk Sac & Choriocarcinoma:</b> Fully differentiated to build specific fake organs/tissues (Cytokeratin+).</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 8 */
            {
                type: "concept",
                title: "Grand Summary: Stromal Tumors (5%)",
                text: "The remaining 5% of testicular tumors are Sex Cord-Stromal Tumors. <br>Unlike Germ Cell Tumors, <b>90% of these are completely benign!</b><br><br>" +
                      "<b>Leydig Cell Tumors (The Hormone Factories):</b>" +
                      "<ul>" +
                      "<li>Grossly golden brown.</li>" +
                      "<li>Packed with Reinke crystalloids.</li>" +
                      "<li>Cause early puberty or gynecomastia.</li>" +
                      "</ul>" +
                      "<b>Sertoli Cell Tumors (The Rogue Nurses):</b>" +
                      "<ul>" +
                      "<li>Grossly pale gray and firm.</li>" +
                      "<li>Build fake tubules (cords/trabeculae).</li>" +
                      "<li>Hormonally silent.</li>" +
                      "</ul>",
                buttonText: "Continue"
            },
            /* Screen 9 */
            {
                type: "match",
                question: "Match each clinical concept or tumor type to its grand summary!",
                pairs: [
                    { left: "Radical Orchiectomy", right: "The only safe way to diagnose and remove the tumor." },
                    { left: "Classic Seminoma", right: "Slow growing, highly radiosensitive, and NEVER makes AFP." },
                    { left: "Non-Seminomas", right: "Aggressive, radioresistant tumors that often present as a mix." },
                    { left: "Leydig Cell Tumor", right: "Golden brown, packed with Reinke crystalloids, and hormonally active." },
                    { left: "Sertoli Cell Tumor", right: "Pale, hormonally silent, and builds fake tubules." }
                ],
                explanation: "A radical orchiectomy is the only safe diagnostic and treatment method. Classic seminomas are slow-growing, radiosensitive, and AFP-negative, whereas non-seminomas are aggressive, radioresistant, and often mixed. Furthermore, Leydig cell tumors are golden brown, hormonally active, and contain Reinke crystalloids, while Sertoli cell tumors are pale, hormonally silent, and build fake tubules.",
                topic: "Course Grand Finale Recap"
            }
        ]
    }
};