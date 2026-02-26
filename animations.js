/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║          PRASANN'S SPACE — ANIMATIONS ENGINE v3.0           ║
 * ║    Extended animations for all elements + splash screen      ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * HOW TO USE:
 *   Add <script src="animations.js"></script> BEFORE closing </body>
 *   This file is self-contained and handles everything automatically.
 */

(function () {
  "use strict";

  /* ═══════════════════════════════════════════════
     0. INJECT CSS KEYFRAMES & STYLES
  ═══════════════════════════════════════════════ */
  const ANIM_CSS = `
    /* ── Splash Screen ── */
    @keyframes splashBgPulse {
      0%, 100% { transform: scale(1); filter: brightness(1); }
      50%       { transform: scale(1.04); filter: brightness(1.12); }
    }
    @keyframes splashLogoReveal {
      0%   { opacity:0; transform: translateY(40px) scale(0.88); filter: blur(12px); }
      60%  { opacity:1; transform: translateY(-6px) scale(1.03); filter: blur(0); }
      100% { opacity:1; transform: translateY(0) scale(1); filter: blur(0); }
    }
    @keyframes splashSubReveal {
      0%   { opacity:0; transform: translateY(20px) scale(0.95); letter-spacing:0.5em; }
      100% { opacity:1; transform: translateY(0)   scale(1);    letter-spacing:0.25em; }
    }
    @keyframes splashBarGrow {
      0%   { width:0;     opacity:0.5; }
      70%  { width:220px; opacity:1;   }
      85%  { width:200px; }
      100% { width:210px; opacity:1;   }
    }
    @keyframes splashParticleRise {
      0%   { transform: translateY(0)   scale(0);   opacity:0; }
      10%  { opacity:1; }
      90%  { opacity:0.4; }
      100% { transform: translateY(-120px) scale(2); opacity:0; }
    }
    @keyframes splashGlowPulse {
      0%, 100% { box-shadow: 0 0 0px rgba(240,168,192,0); }
      50%       { box-shadow: 0 0 80px rgba(240,168,192,0.35), 0 0 160px rgba(136,212,245,0.15); }
    }
    @keyframes splashRingExpand {
      0%   { transform: translate(-50%,-50%) scale(0.5); opacity:0.8; }
      100% { transform: translate(-50%,-50%) scale(3);   opacity:0;   }
    }
    @keyframes splashExit {
      0%   { opacity:1; transform: scale(1);    filter: blur(0); }
      100% { opacity:0; transform: scale(1.08); filter: blur(10px); }
    }

    /* ── Page Load Stagger ── */
    @keyframes pageRevealDown {
      0%   { opacity:0; transform: translateY(-28px) skewY(-1deg); }
      100% { opacity:1; transform: translateY(0)     skewY(0); }
    }
    @keyframes pageRevealUp {
      0%   { opacity:0; transform: translateY(28px) skewY(1deg); }
      100% { opacity:1; transform: translateY(0)    skewY(0); }
    }
    @keyframes pageRevealLeft {
      0%   { opacity:0; transform: translateX(32px) scale(0.97); }
      100% { opacity:1; transform: translateX(0)    scale(1); }
    }
    @keyframes pageRevealRight {
      0%   { opacity:0; transform: translateX(-32px) scale(0.97); }
      100% { opacity:1; transform: translateX(0)     scale(1); }
    }
    @keyframes pageRevealScale {
      0%   { opacity:0; transform: scale(0.9) rotate(-0.5deg); }
      60%  { transform: scale(1.02) rotate(0deg); }
      100% { opacity:1; transform: scale(1)    rotate(0); }
    }
    @keyframes pageRevealFade {
      0%   { opacity:0; filter: blur(6px); }
      100% { opacity:1; filter: blur(0); }
    }

    /* ── Text Animations ── */
    @keyframes glowPulse {
      0%,100% { text-shadow: 0 0 10px var(--accent), 0 0 20px var(--accent); }
      50%      { text-shadow: 0 0 20px var(--accent), 0 0 40px var(--accent2), 0 0 60px var(--accent4); }
    }
    @keyframes floatText {
      0%,100% { transform: translateY(0); }
      50%      { transform: translateY(-7px); }
    }
    @keyframes waveChar {
      0%,100% { transform: translateY(0) rotate(0deg); }
      50%      { transform: translateY(-6px) rotate(2deg); }
    }
    @keyframes neonFlicker {
      0%,19%,21%,23%,25%,54%,56%,100% {
        text-shadow: 0 0 5px var(--accent),0 0 10px var(--accent),0 0 20px var(--accent),0 0 40px var(--accent);
      }
      20%,24%,55% { text-shadow: none; }
    }

    /* ── Card Interactions ── */
    @keyframes cardAppear {
      0%   { opacity:0; transform: translateY(16px) scale(0.96); }
      100% { opacity:1; transform: translateY(0)    scale(1); }
    }

    /* ── Button Animations ── */
    @keyframes btnRipple {
      0%   { transform:scale(0);   opacity:0.6; }
      100% { transform:scale(2.5); opacity:0; }
    }
    @keyframes btnShine {
      0%   { left:-100%; opacity:0; }
      20%  { opacity:0.5; }
      100% { left:150%;  opacity:0; }
    }

    /* ── Clock ── */
    @keyframes clockTick {
      0%   { transform:scale(1); }
      15%  { transform:scale(1.04); }
      30%  { transform:scale(1); }
    }
    @keyframes clockDigitFlip {
      0%   { transform:rotateX(0deg);    opacity:1; }
      40%  { transform:rotateX(-90deg);  opacity:0; }
      60%  { transform:rotateX(90deg);   opacity:0; }
      100% { transform:rotateX(0deg);    opacity:1; }
    }

    /* ── Habit ── */
    @keyframes habitCheck {
      0%   { transform:scale(0) rotate(-30deg); opacity:0; }
      60%  { transform:scale(1.3) rotate(5deg); }
      100% { transform:scale(1) rotate(0); opacity:1; }
    }
    @keyframes habitItemIn {
      0%   { opacity:0; transform: translateX(-16px); }
      100% { opacity:1; transform: translateX(0); }
    }
    @keyframes streakBounce {
      0%,100% { transform:scale(1);    }
      40%      { transform:scale(1.35); }
      70%      { transform:scale(0.9);  }
    }

    /* ── Weather ── */
    @keyframes weatherIconSpin {
      0%   { transform:rotate(0deg) scale(1); }
      25%  { transform:rotate(-15deg) scale(1.1); }
      75%  { transform:rotate(15deg) scale(1.1); }
      100% { transform:rotate(0deg) scale(1); }
    }
    @keyframes tempCount {
      0%   { opacity:0; transform:translateY(12px); }
      100% { opacity:1; transform:translateY(0); }
    }

    /* ── Quick Links ── */
    @keyframes qlItemIn {
      0%   { opacity:0; transform:translateY(20px) scale(0.85); }
      70%  { transform:translateY(-4px) scale(1.04); }
      100% { opacity:1; transform:translateY(0) scale(1); }
    }

    /* ── Pomodoro ── */
    @keyframes pomoRingFill {
      0%   { stroke-dashoffset:201; opacity:0; }
      100% { stroke-dashoffset:0;   opacity:1; }
    }
    @keyframes pomoSessionPop {
      0%,100% { transform:scale(1);    }
      40%      { transform:scale(1.25); }
      70%      { transform:scale(0.95); }
    }

    /* ── Search ── */
    @keyframes searchFocus {
      0%   { box-shadow:0 4px 16px rgba(0,0,0,0.2); }
      100% { box-shadow:0 8px 40px rgba(240,168,192,0.2), 0 0 0 2px rgba(240,168,192,0.15); }
    }

    /* ── Countdown ── */
    @keyframes cdownUrgent {
      0%,100% { color:var(--accent2); }
      50%      { color:#ff6b6b; text-shadow:0 0 12px #ff6b6b; }
    }

    /* ── Stat Dots ── */
    @keyframes statDotPing {
      0%   { transform:scale(1);    opacity:1; }
      60%  { transform:scale(2.2);  opacity:0; }
      100% { transform:scale(1);    opacity:0; }
    }

    /* ── Notes ── */
    @keyframes notesSaveFlash {
      0%,100% { color:var(--muted); }
      50%      { color:var(--accent3); text-shadow:0 0 8px var(--accent3); }
    }
    @keyframes notesTabIn {
      0%   { opacity:0; transform:scaleX(0.7); }
      100% { opacity:1; transform:scaleX(1); }
    }

    /* ── Aurora Enhanced ── */
    @keyframes auroraEnhanced {
      0%,100% { transform:translate(0,0)   scale(1)    rotate(0deg); }
      25%      { transform:translate(50px,-30px) scale(1.1) rotate(5deg); }
      50%      { transform:translate(-20px,40px) scale(0.95) rotate(-3deg); }
      75%      { transform:translate(30px,20px)  scale(1.08) rotate(2deg); }
    }

    /* ── Particle Enhanced ── */
    @keyframes ptRiseEnhanced {
      0%   { transform:translateY(110vh) translateX(0)   scale(0);   opacity:0; }
      10%  { opacity:1; }
      50%  { transform:translateY(50vh)  translateX(20px) scale(1); opacity:0.7; }
      90%  { opacity:0.2; }
      100% { transform:translateY(-10vh) translateX(-15px) scale(0.5); opacity:0; }
    }

    /* ── Focus Mode ── */
    @keyframes focusClockIn {
      0%   { opacity:0; transform:scale(0.7); filter:blur(20px); }
      100% { opacity:1; transform:scale(1);   filter:blur(0); }
    }
    @keyframes focusQuoteIn {
      0%   { opacity:0; transform:translateY(30px); }
      100% { opacity:0.7; transform:translateY(0); }
    }

    /* ── Scanline ── */
    @keyframes scanline {
      0%   { top:-4px; }
      100% { top:100%; }
    }

    /* ── Border Trace ── */
    @keyframes borderTrace {
      0%   { background-position:0% 50%; }
      50%  { background-position:100% 50%; }
      100% { background-position:0% 50%; }
    }

    /* ── Utility Classes ── */
    .btn-ripple-container { position:relative; overflow:hidden; }
    .btn-ripple-wave {
      position:absolute; border-radius:50%;
      background:rgba(255,255,255,0.25);
      pointer-events:none;
      transform:scale(0);
      animation:btnRipple 0.55s ease-out forwards;
    }
    .btn-shine-container { position:relative; overflow:hidden; }
    .btn-shine-layer {
      position:absolute; top:0; left:-100%;
      width:60%; height:100%;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent);
      pointer-events:none;
      animation:btnShine 0.7s ease forwards;
    }

    .stat-dot-ping {
      position:relative;
    }
    .stat-dot-ping::after {
      content:'';
      position:absolute;
      inset:-3px;
      border-radius:50%;
      background:inherit;
      animation:statDotPing 2s ease-out infinite;
    }

    /* Card border trace on hover */
    .glass-trace {
      position:relative;
    }
    .glass-trace::before {
      content:'';
      position:absolute;
      inset:-1px;
      border-radius:calc(var(--radius) + 1px);
      background:linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3),var(--accent4),var(--accent));
      background-size:400% 400%;
      opacity:0;
      z-index:-1;
      transition:opacity 0.35s;
      animation:borderTrace 4s ease infinite;
    }
    .glass-trace:hover::before { opacity:0.5; }

    /* Scanline in focus mode */
    #focusMode::after {
      content:'';
      position:absolute;
      left:0; top:-4px;
      width:100%; height:4px;
      background:linear-gradient(transparent,rgba(240,168,192,0.07),transparent);
      animation:scanline 6s linear infinite;
      pointer-events:none;
    }

    /* Countdown urgency (<24h) */
    .countdown-urgent .cdown-num {
      animation: cdownUrgent 1s ease-in-out infinite !important;
    }
  `;

  const styleEl = document.createElement("style");
  styleEl.id = "prasann-animations-css";
  styleEl.textContent = ANIM_CSS;
  document.head.appendChild(styleEl);


  /* ═══════════════════════════════════════════════
     1. SPLASH SCREEN — ENHANCED ANIMATION
  ═══════════════════════════════════════════════ */
  function enhanceSplash() {
    const splash = document.getElementById("splash");
    if (!splash) return;

    splash.style.animation = "splashBgPulse 6s ease-in-out infinite";

    const logo = document.getElementById("splashMain");
    const sub  = document.getElementById("splashSub");
    const bar  = document.getElementById("splashBar");

    if (logo) {
      logo.style.cssText += "animation:splashLogoReveal 1s 0.1s cubic-bezier(0.34,1.56,0.64,1) forwards;opacity:0;";
    }
    if (bar) {
      bar.style.cssText += "animation:splashBarGrow 1.4s 0.4s ease forwards;width:0;";
    }
    if (sub) {
      sub.style.cssText += "animation:splashSubReveal 1s 0.6s cubic-bezier(0.25,0.46,0.45,0.94) forwards;opacity:0;";
    }

    /* Expanding rings */
    [0, 250].forEach((delay, i) => {
      const ring = document.createElement("div");
      const colors = ["rgba(240,168,192,0.3)", "rgba(136,212,245,0.25)"];
      ring.style.cssText = `
        position:absolute; width:${250 + i*80}px; height:${250 + i*80}px;
        border-radius:50%; border:1.5px solid ${colors[i]};
        top:50%; left:50%;
        animation:splashRingExpand 2s ${0.4 + delay/1000}s ease-out forwards;
        pointer-events:none;
      `;
      splash.appendChild(ring);
    });

    /* Micro-particles inside splash */
    for (let i = 0; i < 22; i++) {
      const dot = document.createElement("div");
      const size   = Math.random() * 5 + 2;
      const colors = ["#f0a8c0","#88d4f5","#a8e6c8","#d4a8f0"];
      const color  = colors[Math.floor(Math.random() * colors.length)];
      dot.style.cssText = `
        position:absolute; width:${size}px; height:${size}px;
        border-radius:50%; background:${color};
        left:${10 + Math.random() * 80}%;
        bottom:${5 + Math.random() * 30}%;
        opacity:0;
        animation:splashParticleRise ${1.5 + Math.random() * 2}s ${0.2 + Math.random() * 1.5}s ease-out forwards;
        pointer-events:none;
        filter:blur(${Math.random() > 0.6 ? 1 : 0}px);
      `;
      splash.appendChild(dot);
    }

    /* Watch for hiding class to override exit animation */
    const observer = new MutationObserver(() => {
      if (splash.classList.contains("hiding")) {
        splash.style.animation = "splashExit 0.85s ease forwards";
      }
    });
    observer.observe(splash, { attributes:true, attributeFilter:["class"] });
  }


  /* ═══════════════════════════════════════════════
     2. PAGE LOAD STAGGER — ALL ELEMENTS
  ═══════════════════════════════════════════════ */
  const STAGGER_CONFIG = [
    /* [selector, animation, baseDelay(ms), duration(ms), easing, doStagger] */
    [".topbar",               "pageRevealDown",  200,  700,  "cubic-bezier(0.34,1.56,0.64,1)", false],
    [".greeting",             "pageRevealDown",  300,  800,  "cubic-bezier(0.34,1.56,0.64,1)", false],
    [".date-line",            "pageRevealFade",  400,  500,  "ease",                            false],
    [".quote-bar",            "pageRevealFade",  900,  600,  "ease",                            false],
    [".stat-bar",             "pageRevealRight", 500,  600,  "cubic-bezier(0.34,1.56,0.64,1)", false],
    [".topbar-right .btn",    "pageRevealDown",  500,  500,  "cubic-bezier(0.34,1.56,0.64,1)", true ],
    [".bookmark-row",         "pageRevealLeft",  600,  600,  "cubic-bezier(0.34,1.56,0.64,1)", false],
    [".bchip",                "pageRevealUp",    650,  500,  "cubic-bezier(0.34,1.56,0.64,1)", true ],
    [".top-sites-card",       "pageRevealScale", 700,  700,  "cubic-bezier(0.34,1.56,0.64,1)", false],
    [".ts-item",              "pageRevealUp",    800,  450,  "cubic-bezier(0.34,1.56,0.64,1)", true ],
    [".habit-card",           "pageRevealUp",    900,  700,  "cubic-bezier(0.34,1.56,0.64,1)", false],
    [".habit-item",           "habitItemIn",     1000, 450,  "cubic-bezier(0.34,1.56,0.64,1)", true ],
    [".clock-card",           "pageRevealLeft",  400,  700,  "cubic-bezier(0.34,1.56,0.64,1)", false],
    [".wx-card",              "pageRevealLeft",  600,  600,  "cubic-bezier(0.34,1.56,0.64,1)", false],
    [".cdown-card",           "pageRevealLeft",  700,  600,  "cubic-bezier(0.34,1.56,0.64,1)", false],
    [".pomo-card",            "pageRevealLeft",  800,  600,  "cubic-bezier(0.34,1.56,0.64,1)", false],
    [".notes-card",           "pageRevealLeft",  900,  600,  "cubic-bezier(0.34,1.56,0.64,1)", false],
    [".bottom-section",       "pageRevealUp",    1000, 700,  "cubic-bezier(0.34,1.56,0.64,1)", false],
    [".ql-item",              "qlItemIn",        1100, 450,  "cubic-bezier(0.34,1.56,0.64,1)", true ],
    [".search-row",           "pageRevealUp",    1200, 600,  "cubic-bezier(0.34,1.56,0.64,1)", false],
    [".ai-pill",              "pageRevealUp",    1300, 500,  "cubic-bezier(0.34,1.56,0.64,1)", true ],
    [".cdown-unit",           "pageRevealScale", 1100, 500,  "cubic-bezier(0.34,1.56,0.64,1)", true ],
  ];

  function runPageStagger() {
    const BASE_DELAY = 2100; /* after splash starts fading */

    STAGGER_CONFIG.forEach(([sel, anim, delay, dur, ease, stagger]) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        const d = stagger ? delay + i * 60 : delay;
        el.style.opacity = "0";
        el.style.animation = `${anim} ${dur}ms ${d + BASE_DELAY}ms ${ease} both`;
      });
    });
  }


  /* ═══════════════════════════════════════════════
     3. CLOCK — DIGIT FLIP + SECOND PULSE
  ═══════════════════════════════════════════════ */
  function enhanceClock() {
    const clockEl    = document.getElementById("clock");
    const secEl      = document.getElementById("clockSec");
    const focusClock = document.getElementById("focusClock");
    let lastSec = -1, lastMin = -1;

    setInterval(() => {
      const now = new Date();
      const s   = now.getSeconds();
      const m   = now.getMinutes();

      if (s !== lastSec && secEl) {
        secEl.style.animation = "none";
        void secEl.offsetWidth;
        secEl.style.animation = "clockTick 0.3s ease both";
        lastSec = s;
      }

      if (m !== lastMin && clockEl) {
        clockEl.style.animation = "none";
        void clockEl.offsetWidth;
        clockEl.style.animation = "clockDigitFlip 0.45s cubic-bezier(0.25,0.46,0.45,0.94) both";
        lastMin = m;
      }
    }, 500);
  }


  /* ═══════════════════════════════════════════════
     4. BUTTONS — RIPPLE + SHINE
  ═══════════════════════════════════════════════ */
  function enhanceButtons() {
    function addRipple(e) {
      const btn  = e.currentTarget;
      btn.classList.add("btn-ripple-container");
      const rect   = btn.getBoundingClientRect();
      const size   = Math.max(rect.width, rect.height) * 2;
      const x      = e.clientX - rect.left - size / 2;
      const y      = e.clientY - rect.top  - size / 2;
      const ripple = document.createElement("div");
      ripple.className = "btn-ripple-wave";
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    }

    function addShine(e) {
      const btn   = e.currentTarget;
      btn.classList.add("btn-shine-container");
      const shine = document.createElement("div");
      shine.className = "btn-shine-layer";
      btn.appendChild(shine);
      shine.addEventListener("animationend", () => shine.remove());
    }

    function attachToBtn(btn) {
      if (btn._animEnhanced) return;
      btn._animEnhanced = true;
      btn.addEventListener("click",      addRipple);
      btn.addEventListener("mouseenter", addShine);
    }

    document.querySelectorAll(".btn, .pomo-btn, .bchip, .ai-pill, .theme-btn, .ta-btn").forEach(attachToBtn);

    const mo = new MutationObserver(muts => {
      muts.forEach(m => m.addedNodes.forEach(n => {
        if (n.nodeType === 1) {
          n.querySelectorAll(".btn, .pomo-btn, .bchip, .ai-pill").forEach(attachToBtn);
          if (n.matches?.(".btn, .pomo-btn, .bchip, .ai-pill")) attachToBtn(n);
        }
      }));
    });
    mo.observe(document.body, { childList:true, subtree:true });
  }


  

  /* ═══════════════════════════════════════════════
     6. MAGNETIC HOVER — LINKS + ICONS
  ═══════════════════════════════════════════════ */
  function enhanceMagnetic() {
    function apply(items) {
      items.forEach(el => {
        if (el._magEnhanced) return;
        el._magEnhanced = true;
        el.addEventListener("mousemove", e => {
          const r  = el.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width/2))  * 0.28;
          const dy = (e.clientY - (r.top  + r.height/2)) * 0.28;
          el.style.transform  = `translate(${dx}px,${dy}px) scale(1.1)`;
          el.style.transition = "transform 0.08s ease";
        });
        el.addEventListener("mouseleave", () => {
          el.style.transform  = "";
          el.style.transition = "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)";
        });
      });
    }

    apply(document.querySelectorAll(".ql-item, .ts-item, .ai-pill"));

    /* Watch for newly rendered items */
    const mo = new MutationObserver(() => {
      apply(document.querySelectorAll(".ql-item:not([data-mag]), .ts-item:not([data-mag])"));
      document.querySelectorAll(".ql-item, .ts-item").forEach(el => el.dataset.mag = "1");
    });
    [document.getElementById("quickLinks"), document.getElementById("topSites"), document.body]
      .filter(Boolean)
      .forEach(target => mo.observe(target, { childList:true, subtree:true }));
  }


  /* ═══════════════════════════════════════════════
     7. HABITS — CONFETTI + CHECK SPRING
  ═══════════════════════════════════════════════ */
  function enhanceHabits() {
    function spawnConfetti(x, y) {
      const colors = ["#f0a8c0","#88d4f5","#a8e6c8","#d4a8f0","#f5d488","#f0a888"];
      for (let i = 0; i < 24; i++) {
        const dot   = document.createElement("div");
        const size  = Math.random() * 8 + 4;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = Math.random() * 360;
        const dist  = 55 + Math.random() * 85;
        dot.style.cssText = `
          position:fixed; width:${size}px; height:${size * 0.55}px;
          background:${color}; border-radius:2px;
          left:${x}px; top:${y}px;
          pointer-events:none; z-index:9999;
          transform:rotate(${angle}deg);
          transition:all ${0.4 + Math.random() * 0.6}s cubic-bezier(0.25,0.46,0.45,0.94);
          opacity:1;
        `;
        document.body.appendChild(dot);
        requestAnimationFrame(() => {
          const rad = (angle * Math.PI) / 180;
          dot.style.transform  = `translate(${Math.cos(rad)*dist}px,${Math.sin(rad)*dist}px) rotate(${angle+200}deg) scale(0)`;
          dot.style.opacity    = "0";
        });
        setTimeout(() => dot.remove(), 1100);
      }
    }

    const habitList = document.getElementById("habitList");
    if (habitList) {
      habitList.addEventListener("click", e => {
        const chk = e.target.closest(".habit-chk");
        if (!chk) return;
        const rect      = chk.getBoundingClientRect();
        const willCheck = !chk.classList.contains("done");

        setTimeout(() => {
          if (willCheck) {
            spawnConfetti(rect.left + rect.width/2, rect.top + rect.height/2);
          }
          const streak = chk.closest(".habit-item")?.querySelector(".habit-streak");
          if (streak && willCheck) {
            streak.style.animation = "none";
            void streak.offsetWidth;
            streak.style.animation = "streakBounce 0.5s cubic-bezier(0.34,1.56,0.64,1) both";
          }
        }, 50);
      });

      /* Animate items when list re-renders */
      const mo = new MutationObserver(() => {
        habitList.querySelectorAll(".habit-item:not([data-anim])").forEach((item, i) => {
          item.dataset.anim = "1";
          item.style.opacity   = "0";
          item.style.animation = `habitItemIn 0.4s ${i * 55}ms cubic-bezier(0.34,1.56,0.64,1) forwards`;
        });
      });
      mo.observe(habitList, { childList:true });
    }
  }


  /* ═══════════════════════════════════════════════
     8. WEATHER — ICON FLOAT + TEMP APPEAR
  ═══════════════════════════════════════════════ */
  function enhanceWeather() {
    const wxIcon = document.getElementById("wxIcon");
    const wxTemp = document.getElementById("wxTemp");

    if (wxIcon) wxIcon.style.animation = "weatherIconSpin 3.5s ease-in-out infinite";

    if (wxTemp) {
      const obs = new MutationObserver(() => {
        wxTemp.style.animation = "none";
        void wxTemp.offsetWidth;
        wxTemp.style.animation = "tempCount 0.5s cubic-bezier(0.34,1.56,0.64,1) both";
      });
      obs.observe(wxTemp, { childList:true, characterData:true, subtree:true });
    }
  }


  /* ═══════════════════════════════════════════════
     9. POMODORO — SESSION POP + ARC GLOW
  ═══════════════════════════════════════════════ */
  function enhancePomodoro() {
    const pomoSess = document.getElementById("pomoSessions");
    const pomoArc  = document.getElementById("pomoArc");

    if (pomoSess) {
      const obs = new MutationObserver(() => {
        pomoSess.style.animation = "none";
        void pomoSess.offsetWidth;
        pomoSess.style.animation = "pomoSessionPop 0.5s cubic-bezier(0.34,1.56,0.64,1) both";
      });
      obs.observe(pomoSess, { childList:true, characterData:true, subtree:true });
    }

    /* Wrap togglePomo to add arc glow */
    const origToggle = window.togglePomo;
    if (typeof origToggle === "function") {
      window.togglePomo = function () {
        origToggle.apply(this, arguments);
        if (pomoArc) {
          const running = document.getElementById("pomoStartBtn")?.textContent?.includes("Pause");
          pomoArc.style.filter = running ? "drop-shadow(0 0 6px var(--accent))" : "";
        }
      };
    }
  }


  /* ═══════════════════════════════════════════════
     10. SEARCH — CYCLING PLACEHOLDER + FOCUS GLOW
  ═══════════════════════════════════════════════ */
  function enhanceSearch() {
    const input     = document.getElementById("searchInput");
    const searchBar = document.querySelector(".search-bar");
    if (!input || !searchBar) return;

    const placeholders = [
      "Search the web…",
      "Type a URL…",
      "Ask something…",
      "Find anything…",
      "Where to next?",
      "I'm feeling curious…"
    ];
    let idx = 0;
    const phTimer = setInterval(() => {
      idx = (idx + 1) % placeholders.length;
      input.placeholder = placeholders[idx];
    }, 3500);

    input.addEventListener("focus", () => {
      clearInterval(phTimer);
      searchBar.style.animation = "searchFocus 0.3s ease forwards";
    });
    input.addEventListener("blur", () => {
      searchBar.style.animation = "";
    });
  }


  /* ═══════════════════════════════════════════════
     11. COUNTDOWN — URGENCY PULSE
  ═══════════════════════════════════════════════ */
  function enhanceCountdown() {
    const card = document.getElementById("cdownCard");
    if (!card) return;

    setInterval(() => {
      if (!window.cfg?.countdown) return;
      const hrs = (window.cfg.countdown.ts - Date.now()) / 3600000;
      card.classList.toggle("countdown-urgent", hrs < 24 && hrs > 0);
    }, 5000);
  }


  /* ═══════════════════════════════════════════════
     12. STAT DOTS — PING RINGS
  ═══════════════════════════════════════════════ */
  function enhanceStatDots() {
    document.querySelectorAll(".stat-dot").forEach(dot => dot.classList.add("stat-dot-ping"));
  }


  /* ═══════════════════════════════════════════════
     13. AURORA — ENHANCED MOVEMENT
  ═══════════════════════════════════════════════ */
  function enhanceAurora() {
    const durations = [22, 18, 25];
    const delays    = [0, -7, -12];
    document.querySelectorAll(".aurora-blob").forEach((blob, i) => {
      blob.style.animation = `auroraEnhanced ${durations[i] || 20}s ${delays[i] || 0}s ease-in-out infinite`;
    });
  }


  /* ═══════════════════════════════════════════════
     14. PARTICLES — ENHANCED DRIFT
  ═══════════════════════════════════════════════ */
  function enhanceParticles() {
    const originalInit = window.initParticles;
    if (typeof originalInit === "function") {
      window.initParticles = function (count) {
        originalInit(count);
        setTimeout(() => {
          document.querySelectorAll(".pt").forEach(p => {
            const dur = parseFloat(p.style.animationDuration) || 14;
            const del = parseFloat(p.style.animationDelay)    || 0;
            p.style.animation = `ptRiseEnhanced ${dur}s ${del}s linear infinite`;
          });
        }, 60);
      };
      /* Also enhance currently existing particles */
      setTimeout(() => {
        document.querySelectorAll(".pt").forEach(p => {
          const dur = parseFloat(p.style.animationDuration) || 14;
          const del = parseFloat(p.style.animationDelay)    || 0;
          p.style.animation = `ptRiseEnhanced ${dur}s ${del}s linear infinite`;
        });
      }, 300);
    }
  }


  /* ═══════════════════════════════════════════════
     15. FOCUS MODE — CINEMATIC ENTRY
  ═══════════════════════════════════════════════ */
  function enhanceFocusMode() {
    const origToggle = window.toggleFocus;
    if (typeof origToggle !== "function") return;

    window.toggleFocus = function () {
      origToggle.apply(this, arguments);
      const focusMode  = document.getElementById("focusMode");
      const focusClock = document.getElementById("focusClock");
      const focusQuote = document.getElementById("focusQuote");
      const focusDate  = document.getElementById("focusDate");

      if (focusMode?.classList.contains("open")) {
        if (focusClock) {
          focusClock.style.animation = "focusClockIn 0.8s cubic-bezier(0.34,1.56,0.64,1) both, glowPulse 3s 0.8s ease-in-out infinite";
        }
        if (focusQuote) {
          focusQuote.style.animation = "focusQuoteIn 1s 0.4s ease forwards";
        }
        if (focusDate) {
          focusDate.style.animation = "pageRevealFade 0.8s 0.6s ease forwards";
          focusDate.style.opacity   = "0";
        }
      }
    };
  }


  /* ═══════════════════════════════════════════════
     16. NOTES — TAB + SAVE FLASH
  ═══════════════════════════════════════════════ */
  function enhanceNotes() {
    const notesArea  = document.getElementById("notes");
    const notesSave  = document.getElementById("notesSave");
    const notesTabs  = document.getElementById("notesTabs");

    if (notesArea) {
      const origSwitch = window.switchNote;
      if (typeof origSwitch === "function") {
        window.switchNote = function (i) {
          origSwitch(i);
          notesArea.style.animation = "none";
          void notesArea.offsetWidth;
          notesArea.style.animation = "pageRevealFade 0.3s ease both";
        };
      }
    }

    if (notesSave) {
      const obs = new MutationObserver(() => {
        if (notesSave.textContent.includes("saved")) {
          notesSave.style.animation = "none";
          void notesSave.offsetWidth;
          notesSave.style.animation = "notesSaveFlash 0.6s ease both";
        }
      });
      obs.observe(notesSave, { childList:true, characterData:true, subtree:true });
    }

    if (notesTabs) {
      const obs2 = new MutationObserver(() => {
        notesTabs.querySelectorAll(".note-tab").forEach((t, i) => {
          t.style.animation = `notesTabIn 0.25s ${i * 40}ms cubic-bezier(0.34,1.56,0.64,1) both`;
        });
      });
      obs2.observe(notesTabs, { childList:true });
    }
  }


  /* ═══════════════════════════════════════════════
     17. QUOTES — SMOOTH MORPH TRANSITION
  ═══════════════════════════════════════════════ */
  function enhanceQuotes() {
    const quoteEl = document.getElementById("quoteStrip");
    if (!quoteEl) return;

    const origShow = window.showQuote;
    if (typeof origShow !== "function") return;

    window.showQuote = function () {
      quoteEl.style.transition = "opacity 0.35s ease, transform 0.35s ease";
      quoteEl.style.opacity    = "0";
      quoteEl.style.transform  = "translateY(-6px)";

      setTimeout(() => {
        origShow();
        quoteEl.style.opacity   = "1";
        quoteEl.style.transform = "translateY(0)";
      }, 360);
    };
  }


  /* ═══════════════════════════════════════════════
     18. MODALS — SPRING SCALE IN
  ═══════════════════════════════════════════════ */
  function enhanceModals() {
    const origOpen = window.openModal;
    if (typeof origOpen !== "function") return;

    window.openModal = function (t) {
      origOpen(t);
      const modal = document.querySelector(`#${t}Modal .modal`);
      if (modal) {
        modal.style.animation = "none";
        void modal.offsetWidth;
        modal.style.animation = "pageRevealScale 0.4s cubic-bezier(0.34,1.56,0.64,1) both";
      }
    };
  }


  /* ═══════════════════════════════════════════════
     19. CURSOR — TRAILING RING
  ═══════════════════════════════════════════════ */
  function enhanceCursor() {
    /* Skip on touch-primary devices */
    if (window.matchMedia("(hover:none)").matches) return;

    const dot = document.createElement("div");
    dot.style.cssText = `
      position:fixed; width:7px; height:7px; border-radius:50%;
      background:var(--accent); pointer-events:none; z-index:99999;
      mix-blend-mode:difference; opacity:0;
      transition:transform 0.1s ease, opacity 0.2s ease;
      will-change:left,top;
    `;

    const ring = document.createElement("div");
    ring.style.cssText = `
      position:fixed; width:30px; height:30px; border-radius:50%;
      border:1.5px solid rgba(240,168,192,0.5);
      pointer-events:none; z-index:99998;
      opacity:0; margin-left:-12px; margin-top:-12px;
      transition:width 0.2s ease, height 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
      will-change:left,top;
    `;

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mx = 0, my = 0, rx = 0, ry = 0, active = false;

    document.addEventListener("mousemove", e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left    = (mx - 3.5) + "px";
      dot.style.top     = (my - 3.5) + "px";
      if (!active) {
        active = true;
        dot.style.opacity  = "1";
        ring.style.opacity = "0.65";
      }
    });

    (function animRing() {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      requestAnimationFrame(animRing);
    })();

    const hoverEls = "a, button, .btn, .ql-item, .ts-item, .glass, input, textarea, select, .bchip, .ai-pill, .pomo-btn, .habit-chk";
    document.addEventListener("mouseover", e => {
      if (e.target.closest(hoverEls)) {
        ring.style.width        = "48px";
        ring.style.height       = "48px";
        ring.style.marginLeft   = "-21px";
        ring.style.marginTop    = "-21px";
        ring.style.borderColor  = "rgba(240,168,192,0.9)";
        dot.style.transform     = "scale(2.5)";
      }
    });
    document.addEventListener("mouseout", e => {
      if (e.target.closest(hoverEls)) {
        ring.style.width       = "30px";
        ring.style.height      = "30px";
        ring.style.marginLeft  = "-12px";
        ring.style.marginTop   = "-12px";
        ring.style.borderColor = "rgba(240,168,192,0.5)";
        dot.style.transform    = "scale(1)";
      }
    });

    document.addEventListener("mouseleave", () => {
      dot.style.opacity  = "0";
      ring.style.opacity = "0";
      active = false;
    });
    document.addEventListener("mouseenter", () => {
      dot.style.opacity  = "1";
      ring.style.opacity = "0.65";
      active = true;
    });
  }


  /* ═══════════════════════════════════════════════
     20. PAGE VISIBILITY — RESUME ON RETURN
  ═══════════════════════════════════════════════ */
  function handleVisibility() {
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        document.querySelectorAll(".aurora-blob, .pt").forEach(el => {
          el.style.animationPlayState = "running";
        });
      }
    });
  }


  /* ═══════════════════════════════════════════════
     INIT — ORCHESTRATE ALL ENHANCEMENTS
  ═══════════════════════════════════════════════ */
  function init() {
    enhanceSplash();
    runPageStagger();

    enhanceAurora();
    enhanceParticles();
    enhanceStatDots();

    enhanceClock();
    enhanceButtons();
   
    enhanceHabits();
    enhanceWeather();
    enhanceSearch();
    enhancePomodoro();
    enhanceCountdown();
    enhanceNotes();
    enhanceQuotes();

    enhanceFocusMode();
    enhanceModals();

    handleVisibility();

    /* Re-run button attachment after dynamic renders complete */
    setTimeout(enhanceButtons, 2800);
    setTimeout(() => {
      enhance3DTilt();
      enhanceMagnetic();
    }, 2500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();