// =========================================
// NAMELESS PORTFOLIO
// MAIN JAVASCRIPT
// =========================================


// =========================================
// CUSTOM CURSOR
// =========================================

const customCursor =
    document.querySelector(".custom-cursor");

const interactiveElements =
    document.querySelectorAll("a, button");


if (customCursor) {

    document.addEventListener("mousemove", (event) => {

        customCursor.style.transform =
            `translate3d(
                ${event.clientX}px,
                ${event.clientY}px,
                0
            )`;

    });


    interactiveElements.forEach((element) => {

        element.addEventListener(
            "mouseenter",
            () => {

                customCursor.classList.add(
                    "hovering"
                );

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                customCursor.classList.remove(
                    "hovering"
                );

            }
        );

    });

}


// =========================================
// CINEMATIC ENTRY SCREEN
// =========================================

const entryScreen =
    document.getElementById("entryScreen");

const entryButton =
    document.getElementById("entryButton");

const entryContent =
    document.querySelector(".entry-content");

const entryGlow =
    document.querySelector(".entry-glow");

const entryOrb =
    document.querySelector(".entry-orb");



// =========================================
// NAMELESS CYBER ENTRY PARALLAX
// =========================================

if (entryScreen) {

    entryScreen.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (
                    event.clientX /
                    window.innerWidth -
                    0.5
                ) * 2;


            const y =
                (
                    event.clientY /
                    window.innerHeight -
                    0.5
                ) * 2;


            // ---------------------------------
            // CENTRAL INTERFACE
            // Keep the -50% centering!
            // ---------------------------------

            if (entryContent) {

                entryContent.style.transform =
                    `translate(
                        calc(-50% + ${x * 4}px),
                        calc(-50% + ${y * 4}px)
                    )`;

            }


            // ---------------------------------
            // BACKGROUND GLOW
            // ---------------------------------

            if (entryGlow) {

                entryGlow.style.transform =
                    `translate(
                        calc(-50% + ${x * 25}px),
                        calc(-50% + ${y * 25}px)
                    )`;

            }


            // ---------------------------------
            // GRID
            // ---------------------------------

            const grid =
                document.querySelector(
                    ".entry-grid"
                );


            if (grid) {

                grid.style.transform =
                    `perspective(700px)
                     rotateX(60deg)
                     translate(
                        ${x * 12}px,
                        ${100 + y * 12}px
                     )`;

            }

        }
    );


    // Reset when mouse leaves

    entryScreen.addEventListener(
        "mouseleave",
        () => {

            if (entryContent) {

                entryContent.style.transform =
                    "translate(-50%, -50%)";

            }


            if (entryGlow) {

                entryGlow.style.transform =
                    "translate(-50%, -50%)";

            }

        }
    );

}


// =========================================
// ENTRY BUTTON
// =========================================

// =========================================
// NAMELESS CYBER ACCESS SEQUENCE
// =========================================

if (entryButton && entryScreen) {

    let accessRunning = false;

    entryButton.addEventListener(
        "click",
        () => {

            if (accessRunning) return;

            accessRunning = true;

            const progress =
                document.getElementById(
                    "accessProgress"
                );

            const percent =
                document.getElementById(
                    "accessPercent"
                );

            const state =
                document.getElementById(
                    "accessState"
                );

            const buttonText =
                document.getElementById(
                    "entryButtonText"
                );

            const hint =
                document.getElementById(
                    "entryHint"
                );

            const granted =
                document.getElementById(
                    "accessGranted"
                );


            buttonText.textContent =
                "AUTHENTICATING...";

            hint.textContent =
                "PLEASE WAIT";


            let value = 0;


            const interval =
                setInterval(() => {

                    value += 1;


                    if (progress) {

                        progress.style.width =
                            value + "%";

                    }


                    if (percent) {

                        percent.textContent =
                            String(value)
                                .padStart(2, "0");

                    }


                    // SYSTEM STATES

                    if (
                        value >= 25 &&
                        value < 50
                    ) {

                        buttonText.textContent =
                            "VERIFYING IDENTITY...";

                        if (state) {

                            state.textContent =
                                "VERIFYING";

                        }

                    }


                    if (
                        value >= 50 &&
                        value < 75
                    ) {

                        buttonText.textContent =
                            "SECURITY CHECK...";

                        if (state) {

                            state.textContent =
                                "VALIDATING";

                        }

                    }


                    if (
                        value >= 75 &&
                        value < 100
                    ) {

                        buttonText.textContent =
                            "GRANTING ACCESS...";

                        if (state) {

                            state.textContent =
                                "GRANTING";

                        }

                    }


                    if (value >= 100) {

                        clearInterval(interval);


                        buttonText.textContent =
                            "ACCESS GRANTED";

                        if (state) {

                            state.textContent =
                                "GRANTED";

                        }


                        hint.textContent =
                            "ENTERING NAMELESS";


                        // Show access granted screen

                       // =========================================
// CINEMATIC ACCESS GRANTED
// =========================================

setTimeout(() => {

    if (granted) {

        granted.classList.add(
            "active"
        );

    }

}, 300);


// =========================================
// HOLD THE GRANTED SCREEN
// =========================================

setTimeout(() => {

    if (granted) {

        granted.classList.add(
            "leaving"
        );

    }

}, 3300);


// =========================================
// TRANSITION INTO NAMELESS
// =========================================

setTimeout(() => {

    entryScreen.classList.add(
        "exit"
    );

}, 3600);


// =========================================
// REMOVE ENTRY SCREEN
// =========================================

setTimeout(() => {

    entryScreen.style.display =
        "none";

    document.body.style.overflow =
        "";

}, 5500);


                        setTimeout(() => {

                            entryScreen.style.display =
                                "none";

                            document.body.style.overflow =
                                "";

                        }, 3000);

                    }

                }, 35);

        }
    );

}


// =========================================
// ENTER MY WORLD
// =========================================

const enterButton =
    document.querySelector(".enter-button");

const aboutSection =
    document.querySelector("#about");

const portal =
    document.querySelector("#portalTransition");


if (enterButton && aboutSection) {

    enterButton.addEventListener(
        "click",
        (event) => {

            event.preventDefault();


            if (portal) {

                portal.classList.add(
                    "active"
                );

            }


            document.body.classList.add(
                "entering"
            );


            setTimeout(
                () => {

                    aboutSection.scrollIntoView({
                        behavior: "smooth"
                    });

                },
                1000
            );


            setTimeout(
                () => {

                    if (portal) {

                        portal.classList.remove(
                            "active"
                        );

                    }


                    document.body.classList.remove(
                        "entering"
                    );

                },
                2200
            );

        }
    );

}


// =========================================
// ABOUT REVEAL
// =========================================

if (aboutSection) {

    const aboutObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.25
            }
        );


    aboutObserver.observe(
        aboutSection
    );

}


// =========================================
// CINEMATIC SCROLL ENGINE
// =========================================

const heroSection =
    document.querySelector(".hero");

const aboutSectionScroll =
    document.querySelector("#about");


let lastScrollY =
    window.scrollY;

let scrollVelocity =
    0;

let scrollTimeout;


// =========================================
// SCROLL EVENT
// =========================================

window.addEventListener(
    "scroll",
    () => {

        const currentScroll =
            window.scrollY;


        scrollVelocity =
            currentScroll -
            lastScrollY;


        lastScrollY =
            currentScroll;


        // -------------------------------------
        // HERO TRANSFORMATION
        // -------------------------------------

        if (heroSection) {

            const heroHeight =
                heroSection.offsetHeight;


            const progress =
                Math.min(
                    currentScroll /
                    heroHeight,
                    1
                );


            const scale =
                1 -
                progress * 0.12;


            const blur =
                progress * 8;


            const opacity =
                1 -
                progress * 0.35;


            heroSection.style.transform =
                `scale(${scale})`;


            heroSection.style.filter =
                `blur(${blur}px)`;


            heroSection.style.opacity =
                opacity;


            // Hero content

            const heroContent =
                heroSection.querySelector(
                    ".hero-content"
                );


            if (heroContent) {

                heroContent.style.transform =
                    `translateY(
                        ${progress * -100}px
                    )
                    scale(
                        ${1 - progress * 0.08}
                    )`;


                heroContent.style.opacity =
                    1 -
                    progress * 1.2;

            }


            // Hero orb

            const heroOrb =
                heroSection.querySelector(
                    ".orb"
                );


            if (heroOrb) {

                heroOrb.style.transform =
                    `translateY(
                        ${progress * -180}px
                    )
                    scale(
                        ${1 + progress * 0.5}
                    )`;

            }

        }


        // -------------------------------------
        // ABOUT PARALLAX
        // -------------------------------------

        if (aboutSectionScroll) {

            const rect =
                aboutSectionScroll
                    .getBoundingClientRect();


            const viewportHeight =
                window.innerHeight;


            const progress =
                (
                    viewportHeight -
                    rect.top
                ) /
                (
                    viewportHeight +
                    rect.height
                );


            const clamped =
                Math.max(
                    0,
                    Math.min(
                        1,
                        progress
                    )
                );


            const aboutTitle =
                aboutSectionScroll.querySelector(
                    ".about-title"
                );


            const aboutText =
                aboutSectionScroll.querySelector(
                    ".about-text"
                );


            if (aboutTitle) {

                aboutTitle.style.transform =
                    `translateY(
                        ${(0.5 - clamped) * 100}px
                    )`;

            }


            if (aboutText) {

                aboutText.style.transform =
                    `translateY(
                        ${(0.5 - clamped) * -70}px
                    )`;

            }

        }


        // -------------------------------------
        // FAST SCROLL EFFECT
        // -------------------------------------

        if (
            Math.abs(scrollVelocity) > 12
        ) {

            document.body.classList.add(
                "scroll-fast"
            );


            clearTimeout(
                scrollTimeout
            );


            scrollTimeout =
                setTimeout(
                    () => {

                        document.body.classList.remove(
                            "scroll-fast"
                        );

                    },
                    180
                );

        }

    }
);


// =========================================
// ELARA — INDEPENDENT CINEMATIC OVERLAY
// =========================================
// This version does NOT depend on the old
// .elara-modal CSS.
// It creates its own overlay directly
// inside <body>.
// =========================================

// =========================================
// ELARA — CINEMATIC BOOT EXPERIENCE
// =========================================

(function initElaraBoot() {

    const style = document.createElement("style");

    style.textContent = `

        /* =================================
           ELARA BOOT SCREEN
        ================================= */

        #elaraBoot {

            position: fixed !important;
            inset: 0 !important;

            width: 100vw !important;
            height: 100vh !important;

            z-index: 2147483647 !important;

            display: flex;
            align-items: center;
            justify-content: center;

            background: #020106;

            color: white;

            opacity: 0;
            visibility: hidden;
            pointer-events: none;

            overflow: hidden;

            font-family:
                Arial,
                Helvetica,
                sans-serif;

            transition:
                opacity .6s ease;

        }


        #elaraBoot.active {

            opacity: 1;
            visibility: visible;
            pointer-events: auto;

        }


        /* =================================
           BACKGROUND
        ================================= */

        .elara-boot-bg {

            position: absolute;
            inset: 0;

            background:

                radial-gradient(
                    circle at center,
                    rgba(100,60,180,.18),
                    transparent 30%
                ),

                radial-gradient(
                    circle at center,
                    #090513,
                    #020106 70%
                );

        }


        .elara-grid {

            position: absolute;
            inset: -20%;

            opacity: .13;

            background-image:

                linear-gradient(
                    rgba(150,100,255,.15) 1px,
                    transparent 1px
                ),

                linear-gradient(
                    90deg,
                    rgba(150,100,255,.15) 1px,
                    transparent 1px
                );

            background-size: 70px 70px;

            transform:
                perspective(600px)
                rotateX(60deg)
                translateY(20%);

        }


        /* =================================
           SCANLINES
        ================================= */

        .elara-scanlines {

            position: absolute;
            inset: 0;

            opacity: .06;

            background:

                repeating-linear-gradient(
                    to bottom,
                    transparent 0px,
                    transparent 3px,
                    rgba(255,255,255,.15) 4px
                );

            pointer-events: none;

        }


        /* =================================
           PARTICLES
        ================================= */

        .elara-particle {

            position: absolute;

            width: 3px;
            height: 3px;

            border-radius: 50%;

            background: #cbb5ff;

            box-shadow:
                0 0 12px #8c5cff;

            animation:
                elaraParticle
                var(--time)
                ease-in-out
                infinite
                alternate;

        }


        @keyframes elaraParticle {

            from {

                transform:
                    translate(
                        0,
                        0
                    );

                opacity: .15;

            }

            to {

                transform:
                    translate(
                        var(--x),
                        var(--y)
                    );

                opacity: 1;

            }

        }


        /* =================================
           MAIN BOOT CONTENT
        ================================= */

        .elara-boot-content {

            position: relative;

            z-index: 10;

            width: min(700px, 90vw);

            text-align: center;

        }


        /* =================================
           CORE
        ================================= */

        .elara-core-system {

            position: relative;

            width: 260px;
            height: 260px;

            margin: 0 auto 45px;

        }


        .elara-core-ring {

            position: absolute;

            left: 50%;
            top: 50%;

            transform:
                translate(-50%, -50%);

            border-radius: 50%;

            border:
                1px solid
                rgba(170,120,255,.45);

        }


        .elara-ring-1 {

            width: 250px;
            height: 250px;

            border-style: dashed;

            animation:
                elaraRotate
                18s
                linear
                infinite;

        }


        .elara-ring-2 {

            width: 180px;
            height: 180px;

            animation:
                elaraRotateReverse
                12s
                linear
                infinite;

        }


        .elara-ring-3 {

            width: 110px;
            height: 110px;

            border-style: dotted;

            animation:
                elaraRotate
                8s
                linear
                infinite;

        }


        @keyframes elaraRotate {

            to {

                transform:
                    translate(-50%, -50%)
                    rotate(360deg);

            }

        }


        @keyframes elaraRotateReverse {

            to {

                transform:
                    translate(-50%, -50%)
                    rotate(-360deg);

            }

        }


        /* =================================
           CORE GLOW
        ================================= */

        .elara-core {

            position: absolute;

            left: 50%;
            top: 50%;

            width: 55px;
            height: 55px;

            transform:
                translate(-50%, -50%);

            border-radius: 50%;

            background:

                radial-gradient(
                    circle,
                    #ffffff 0%,
                    #d8c5ff 15%,
                    #9b65ff 35%,
                    rgba(100,40,255,.35) 60%,
                    transparent 75%
                );

            box-shadow:

                0 0 25px #ffffff,
                0 0 70px #9b65ff,
                0 0 140px rgba(100,40,255,.65);

            animation:
                elaraCorePulse
                2s
                ease-in-out
                infinite;

        }


        @keyframes elaraCorePulse {

            50% {

                transform:
                    translate(-50%, -50%)
                    scale(1.35);

            }

        }


        /* =================================
           BOOT LABEL
        ================================= */

        .elara-boot-label {

            font-size: 10px;

            letter-spacing: 5px;

            color:
                rgba(190,160,255,.75);

            margin-bottom: 18px;

        }


        /* =================================
           ELARA TITLE
        ================================= */

        .elara-boot-title {

            font-size:
                clamp(
                    65px,
                    12vw,
                    130px
                );

            line-height: .8;

            letter-spacing:
                -.07em;

            margin: 0;

            opacity: 0;

            transform:
                translateY(20px);

            transition:
                opacity .8s ease,
                transform .8s ease;

        }


        .elara-boot-title.show {

            opacity: 1;

            transform:
                translateY(0);

        }


        .elara-boot-title span {

            color: transparent;

            -webkit-text-stroke:
                1.5px
                rgba(210,190,255,.9);

        }


        /* =================================
           SYSTEM TEXT
        ================================= */

        .elara-system-status {

            margin-top: 25px;

            min-height: 20px;

            font-size: 10px;

            letter-spacing: 3px;

            color:
                rgba(255,255,255,.55);

        }


        /* =================================
           PROGRESS
        ================================= */

        .elara-progress {

            width: 320px;

            max-width: 80vw;

            height: 1px;

            margin: 28px auto 12px;

            background:
                rgba(255,255,255,.12);

            overflow: hidden;

        }


        .elara-progress-bar {

            width: 0%;

            height: 100%;

            background:
                #b996ff;

            box-shadow:
                0 0 12px #9d6cff;

            transition:
                width .15s linear;

        }


        .elara-percent {

            font-size: 9px;

            letter-spacing: 3px;

            color:
                rgba(255,255,255,.4);

        }


        /* =================================
           ONLINE MESSAGE
        ================================= */

        .elara-online {

            margin-top: 35px;

            font-size: 11px;

            letter-spacing: 5px;

            color:
                #b996ff;

            opacity: 0;

            transform:
                translateY(10px);

            transition:
                opacity .6s ease,
                transform .6s ease;

        }


        .elara-online.show {

            opacity: 1;

            transform:
                translateY(0);

        }


        /* =================================
           INFO PANEL
        ================================= */

        .elara-info-panel {

            position: absolute;

            z-index: 20;

            inset: 0;

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 30px;

            background:
                rgba(2,1,6,.98);

            opacity: 0;

            visibility: hidden;

            transition:
                opacity .8s ease;

        }


        .elara-info-panel.show {

            opacity: 1;

            visibility: visible;

        }


        .elara-info-box {

            width:
                min(900px, 90vw);

            padding: 45px;

            border:
                1px solid
                rgba(180,140,255,.4);

            background:
                rgba(8,4,18,.98);

            box-shadow:
                0 0 100px
                rgba(100,50,255,.2);

        }


        .elara-info-top {

            display: flex;

            justify-content:
                space-between;

            margin-bottom: 45px;

            color:
                rgba(255,255,255,.4);

            font-size: 9px;

            letter-spacing: 3px;

        }


        .elara-info-box h2 {

            margin: 0;

            font-size:
                clamp(60px, 10vw, 120px);

            letter-spacing:
                -.07em;

        }


        .elara-info-box h2 span {

            color: transparent;

            -webkit-text-stroke:
                1px white;

        }


        .elara-info-description {

            max-width: 650px;

            margin: 30px 0;

            color:
                rgba(255,255,255,.6);

            line-height: 1.8;

            font-size: 13px;

        }


        .elara-info-grid {

            display: grid;

            grid-template-columns:
                repeat(2, 1fr);

            border:
                1px solid
                rgba(255,255,255,.1);

        }


        .elara-info-card {

            padding: 25px;

            min-height: 110px;

            border:
                1px solid
                rgba(255,255,255,.07);

        }


        .elara-info-card small {

            color:
                #a982ff;

            letter-spacing: 2px;

        }


        .elara-info-card h3 {

            margin:
                15px 0 8px;

            font-size: 11px;

            letter-spacing: 2px;

        }


        .elara-info-card p {

            margin: 0;

            color:
                rgba(255,255,255,.45);

            font-size: 11px;

            line-height: 1.6;

        }


        .elara-close {

            position: absolute;

            top: 25px;
            right: 30px;

            border: 0;

            background: transparent;

            color:
                rgba(255,255,255,.5);

            cursor: pointer;

            letter-spacing: 3px;

            font-size: 9px;

        }


        .elara-close:hover {

            color: white;

        }


        @media(max-width:700px) {

            .elara-core-system {

                transform: scale(.75);

                margin-bottom: 5px;

            }

            .elara-info-box {

                padding: 25px;

            }

            .elara-info-grid {

                grid-template-columns: 1fr;

            }

        }

    `;

    document.head.appendChild(style);


    // =====================================
    // CREATE BOOT SCREEN
    // =====================================

    function createElara() {

        let elara =
            document.getElementById(
                "elaraBoot"
            );

        if (elara) return elara;


        elara =
            document.createElement("div");

        elara.id =
            "elaraBoot";


        // PARTICLES

        let particles = "";

        for (let i = 0; i < 30; i++) {

            const left =
                Math.random() * 100;

            const top =
                Math.random() * 100;

            const x =
                (Math.random() - .5) * 150;

            const y =
                (Math.random() - .5) * 150;

            const time =
                3 + Math.random() * 5;


            particles += `

                <i
                    class="elara-particle"
                    style="
                        left:${left}%;
                        top:${top}%;
                        --x:${x}px;
                        --y:${y}px;
                        --time:${time}s;
                    "
                ></i>

            `;

        }


        elara.innerHTML = `

            <div class="elara-boot-bg"></div>

            <div class="elara-grid"></div>

            <div class="elara-scanlines"></div>

            ${particles}


            <div class="elara-boot-content">


                <div class="elara-core-system">

                    <div
                        class="
                            elara-core-ring
                            elara-ring-1
                        "
                    ></div>

                    <div
                        class="
                            elara-core-ring
                            elara-ring-2
                        "
                    ></div>

                    <div
                        class="
                            elara-core-ring
                            elara-ring-3
                        "
                    ></div>

                    <div class="elara-core"></div>

                </div>


                <div class="elara-boot-label">

                    PERSONAL AI SYSTEM

                </div>


                <h1 class="elara-boot-title">

                    ELA<span>RA</span>

                </h1>


                <div
                    class="elara-system-status"
                    id="elaraStatus"
                >

                    INITIALISING...

                </div>


                <div class="elara-progress">

                    <div
                        class="elara-progress-bar"
                        id="elaraProgress"
                    ></div>

                </div>


                <div
                    class="elara-percent"
                    id="elaraPercent"
                >

                    00%

                </div>


                <div
                    class="elara-online"
                    id="elaraOnline"
                >

                    SYSTEM ONLINE

                </div>

            </div>


            <!-- INFO SCREEN -->

            <div
                class="elara-info-panel"
                id="elaraInfo"
            >

                <button
                    class="elara-close"
                    id="elaraClose"
                >

                    CLOSE ×

                </button>


                <div class="elara-info-box">

                    <div class="elara-info-top">

                        <span>
                            PRIVATE PROJECT
                        </span>

                        <span>
                            ELARA / 01
                        </span>

                    </div>


                    <div class="elara-boot-label">

                        PERSONAL AI SYSTEM

                    </div>


                    <h2>

                        ELA<span>RA</span>

                    </h2>


                    <p
                        class="
                            elara-info-description
                        "
                    >

                        ELARA is a private
                        personal AI system
                        exploring intelligent
                        interaction, controlled
                        memory, security and
                        authorised automation.

                    </p>


                    <div class="elara-info-grid">


                        <div class="elara-info-card">

                            <small>01</small>

                            <h3>
                                INTELLIGENCE
                            </h3>

                            <p>
                                Designed to
                                understand user
                                requests and assist
                                with different tasks.
                            </p>

                        </div>


                        <div class="elara-info-card">

                            <small>02</small>

                            <h3>
                                MEMORY
                            </h3>

                            <p>
                                A controlled memory
                                system for storing
                                user-defined
                                information.
                            </p>

                        </div>


                        <div class="elara-info-card">

                            <small>03</small>

                            <h3>
                                SECURITY
                            </h3>

                            <p>
                                Permission and
                                privacy controls
                                are central to
                                the system.
                            </p>

                        </div>


                        <div class="elara-info-card">

                            <small>04</small>

                            <h3>
                                AUTOMATION
                            </h3>

                            <p>
                                Actions are designed
                                to happen only when
                                explicitly authorised.
                            </p>

                        </div>


                    </div>

                </div>

            </div>

        `;


        document.body.appendChild(elara);


        return elara;

    }


    // =====================================
    // START ELARA
    // =====================================

    function openElara() {

        const elara =
            createElara();


        const status =
            elara.querySelector(
                "#elaraStatus"
            );

        const progress =
            elara.querySelector(
                "#elaraProgress"
            );

        const percent =
            elara.querySelector(
                "#elaraPercent"
            );

        const title =
            elara.querySelector(
                ".elara-boot-title"
            );

        const online =
            elara.querySelector(
                "#elaraOnline"
            );


        const info =
            elara.querySelector(
                "#elaraInfo"
            );


        elara.classList.add("active");

        document.body.style.overflow =
            "hidden";


        // Reset

        title.classList.remove("show");

        online.classList.remove("show");

        info.classList.remove("show");

        progress.style.width =
            "0%";


        // =================================
        // BOOT SEQUENCE
        // =================================

        const stages = [

            {
                at: 0,
                text: "CONNECTING TO CORE..."
            },

            {
                at: 18,
                text: "INITIALISING NEURAL CORE..."
            },

            {
                at: 36,
                text: "LOADING MEMORY SYSTEM..."
            },

            {
                at: 55,
                text: "VERIFYING SECURITY..."
            },

            {
                at: 72,
                text: "AUTHENTICATING SYSTEM..."
            },

            {
                at: 88,
                text: "STARTING ELARA..."
            },

            {
                at: 100,
                text: "SYSTEM READY"
            }

        ];


        let value = 0;


        const interval =
            setInterval(
                () => {

                    value += 1;


                    progress.style.width =
                        value + "%";


                    percent.textContent =
                        String(value)
                            .padStart(2, "0")
                        + "%";


                    let current =
                        stages[0];


                    stages.forEach(
                        stage => {

                            if (
                                value >=
                                stage.at
                            ) {

                                current =
                                    stage;

                            }

                        }
                    );


                    status.textContent =
                        current.text;


                    // TITLE

                    if (
                        value >= 30
                    ) {

                        title.classList.add(
                            "show"
                        );

                    }


                    // ONLINE

                    if (
                        value >= 100
                    ) {

                        clearInterval(
                            interval
                        );


                        online.classList.add(
                            "show"
                        );


                        setTimeout(
                            () => {

                                info.classList.add(
                                    "show"
                                );

                            },
                            1200
                        );

                    }

                },
                30
            );

    }


    // =====================================
    // CLOSE ELARA
    // =====================================

    function closeElara() {

        const elara =
            document.getElementById(
                "elaraBoot"
            );


        if (!elara) return;


        elara.classList.remove(
            "active"
        );


        document.body.style.overflow =
            "";

    }


    // =====================================
    // VIEW ELARA BUTTON
    // =====================================

    document.addEventListener(
        "click",
        (event) => {

            const button =
                event.target.closest(
                    "#elaraViewButton"
                );


            if (!button) return;


            event.preventDefault();

            event.stopPropagation();


            openElara();

        },
        true
    );


    // =====================================
    // CLOSE BUTTON
    // =====================================

    document.addEventListener(
        "click",
        (event) => {

            if (
                event.target.closest(
                    "#elaraClose"
                )
            ) {

                closeElara();

            }

        }
    );


    // =====================================
    // ESCAPE
    // =====================================

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                closeElara();

            }

        }
    );


})();