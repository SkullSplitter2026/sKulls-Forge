/* sKulls Forge – Website: Sprache, Farbschema, Screenshots, Feature-Tour, Großansicht */
(function () {
  "use strict";
  var SITE = window.FORGE_SITE || {};
  var root = document.documentElement;
  var KEY_LANG = "forge-site-lang", KEY_SCHEME = "forge-site-scheme2";

  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function save(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* privat/gesperrt */ } }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  var scheme = SITE.defaultScheme || "skulls";
  var lang = "de";

  function schemeInfo(id) {
    return (SITE.schemes || []).filter(function (s) { return s.id === id; })[0] || { id: id, shots: "graphite" };
  }

  /* Lesbare Schrift auf der Akzentfarbe */
  function updateOnAccent() {
    var c = getComputedStyle(root).getPropertyValue("--accent").trim();
    var m = /^#?([0-9a-f]{6})$/i.exec(c);
    if (!m) return;
    var n = parseInt(m[1], 16), r = (n >> 16) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
    root.style.setProperty("--on-accent", 0.299 * r + 0.587 * g + 0.114 * b > 0.6 ? "#101010" : "#ffffff");
  }

  /* Screenshots passend zu Sprache und Farbschema */
  function shotUrl(view) {
    return "assets/shots/" + lang + "/" + schemeInfo(scheme).shots + "/" + view + ".webp";
  }
  function updateShots() {
    $all("img[data-shot]").forEach(function (img) {
      var url = img.getAttribute("data-scheme-shot")
        ? "assets/shots/" + lang + "/" + img.getAttribute("data-scheme-shot") + "/" + img.getAttribute("data-shot") + ".webp"
        : shotUrl(img.getAttribute("data-shot"));
      if (img.getAttribute("src") !== url) img.setAttribute("src", url);
    });
  }

  function setScheme(id, remember) {
    scheme = schemeInfo(id).id;
    root.setAttribute("data-scheme", scheme);
    updateOnAccent();
    updateShots();
    $all("[data-scheme-choice]").forEach(function (el) {
      var on = el.getAttribute("data-scheme-choice") === scheme;
      el.setAttribute(el.getAttribute("role") === "menuitemradio" ? "aria-checked" : "aria-pressed", on ? "true" : "false");
    });
    var label = $("#scheme-label");
    if (label) label.textContent = schemeInfo(scheme)[lang] || scheme;
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", getComputedStyle(root).getPropertyValue("--bg").trim());
    if (remember) save(KEY_SCHEME, scheme);
    scenes.refresh();
  }

  function setLang(code, remember) {
    lang = code === "en" ? "en" : "de";
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    $all(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    var title = root.getAttribute("data-title-" + lang);
    if (title) document.title = title;
    var desc = root.getAttribute("data-desc-" + lang), meta = $('meta[name="description"]');
    if (desc && meta) meta.setAttribute("content", desc);
    $all("[data-alt-de]").forEach(function (el) { el.setAttribute("alt", el.getAttribute("data-alt-" + lang)); });
    fillSchemeNames();
    if (typeof renderNumbers === "function") renderNumbers();
    updateShots();
    var label = $("#scheme-label");
    if (label) label.textContent = schemeInfo(scheme)[lang] || scheme;
    if (remember) save(KEY_LANG, lang);
    scenes.refresh();
  }

  /* Farbschema-Menü und -Karten */
  function fillSchemeNames() {
    $all("[data-scheme-name]").forEach(function (el) {
      el.textContent = schemeInfo(el.getAttribute("data-scheme-name"))[lang] || el.getAttribute("data-scheme-name");
    });
  }
  function buildSchemeMenu() {
    var menu = $("#scheme-menu");
    if (!menu) return;
    (SITE.schemes || []).forEach(function (s) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("role", "menuitemradio");
      b.setAttribute("data-scheme-choice", s.id);
      b.innerHTML = '<i class="swatch" style="--s-bg:' + s.bg + ';--s-accent:' + s.accent + '"></i><span data-scheme-name="' + s.id + '"></span>';
      b.addEventListener("click", function () { setScheme(s.id, true); closeMenu(); });
      menu.appendChild(b);
    });
    var toggle = $("#scheme-toggle");
    function closeMenu() { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = !menu.classList.contains("open");
      menu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) { if (!menu.contains(e.target)) closeMenu(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  }

  /* Feature-Tour: Reiter wechseln den Screenshot */
  function initTour() {
    var tabs = $all(".tour-tab"), img = $("#tour-shot");
    if (!tabs.length || !img) return;
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.setAttribute("aria-selected", t === tab ? "true" : "false"); });
        img.style.opacity = "0";
        setTimeout(function () {
          img.setAttribute("data-shot", tab.getAttribute("data-view"));
          img.setAttribute("data-alt-de", tab.getAttribute("data-alt-de"));
          img.setAttribute("data-alt-en", tab.getAttribute("data-alt-en"));
          img.setAttribute("alt", tab.getAttribute("data-alt-" + lang));
          updateShots();
          img.onload = function () { img.style.opacity = "1"; };
          setTimeout(function () { img.style.opacity = "1"; }, 400);
        }, 150);
      });
    });
  }

  /* Wizard-Rundgang: Reiter wechseln das Kodi-Bild */
  function initWizardTour() {
    var tabs = $all(".wiz-tab"), img = $("#wiz-shot");
    if (!tabs.length || !img) return;
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.setAttribute("aria-selected", t === tab ? "true" : "false"); });
        img.style.opacity = "0";
        setTimeout(function () {
          img.setAttribute("data-alt-de", tab.getAttribute("data-alt-de"));
          img.setAttribute("data-alt-en", tab.getAttribute("data-alt-en"));
          img.setAttribute("alt", tab.getAttribute("data-alt-" + lang));
          img.onload = function () { img.style.opacity = "1"; };
          img.src = tab.getAttribute("data-src");
          setTimeout(function () { img.style.opacity = "1"; }, 400);
        }, 150);
      });
    });
  }

  /* Großansicht */
  function initLightbox() {
    var box = $("#lightbox"), big = $("#lightbox img");
    if (!box) return;
    document.addEventListener("click", function (e) {
      var img = e.target.closest && e.target.closest(".window > img");
      if (img) { big.src = img.currentSrc || img.src; big.alt = img.alt; box.classList.add("open"); }
    });
    box.addEventListener("click", function () { box.classList.remove("open"); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") box.classList.remove("open"); });
  }

  /* Links und Downloads aus config.js */
  function applyConfig() {
    if (SITE.github) $all("a[data-github]").forEach(function (a) { a.href = SITE.github; });
    var dl = SITE.downloads || {};
    $all("[data-download]").forEach(function (card) {
      var d = dl[card.getAttribute("data-download")];
      if (!d) return;
      var btn = $(".btn", card), hash = $(".hash", card), file = $(".file", card);
      if (file && d.file) file.textContent = d.file;
      if (d.url) {
        btn.href = d.url; btn.removeAttribute("aria-disabled"); btn.classList.add("btn-primary"); btn.classList.remove("btn-ghost");
        $all(".soon", card).forEach(function (s) { s.remove(); });
        $all("[data-when='soon']", btn).forEach(function (s) { s.remove(); });
      } else {
        btn.addEventListener("click", function (e) { e.preventDefault(); });
        $all("[data-when='ready']", btn).forEach(function (s) { s.remove(); });
      }
      if (hash) hash.textContent = d.sha256 ? "SHA-256: " + d.sha256 : "";
    });
  }

  /* Zähler: Besuche (Abacus, keine Cookies) und Downloads (stats.json vom Forge) */
  function formatNumber(n) {
    try { return Number(n).toLocaleString(lang === "de" ? "de-DE" : "en-US"); } catch (e) { return String(n); }
  }
  function renderNumbers() {
    $all("[data-n]").forEach(function (el) {
      el.textContent = formatNumber(el.getAttribute("data-n")) + (el.getAttribute("data-suffix") || "");
    });
  }
  function initCounters() {
    var c = SITE.counter || {}, box = $("[data-counter='visits']");
    if (box && c.service === "abacus" && c.base && c.namespace && c.key && window.fetch) {
      var local = /^(localhost|127\.0\.0\.1|\[::1\]|)$/.test(location.hostname) || location.protocol === "file:";
      var url = c.base.replace(/\/$/, "") + "/" + (local ? "get" : "hit") + "/" +
                encodeURIComponent(c.namespace) + "/" + encodeURIComponent(c.key);
      fetch(url, { mode: "cors", credentials: "omit", referrerPolicy: "no-referrer" })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) {
          if (!d || typeof d.value !== "number") return;
          $(".value", box).setAttribute("data-n", d.value);
          renderNumbers();
          box.hidden = false;
        })
        .catch(function () { /* Zähldienst nicht erreichbar: Anzeige bleibt verborgen */ });
    }
    var dl = $("[data-counter='downloads']");
    if (!dl || !SITE.stats || !window.fetch) return;
    fetch(SITE.stats, { cache: "no-cache" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (s) {
        var total = s && typeof s.total === "number" ? s.total : 0;
        if (total) $(".value", dl).setAttribute("data-n", total);
        $(".value", dl).hidden = !total;
        $(".label-some", dl).hidden = !total;
        $(".label-none", dl).hidden = !!total;
        var files = (s && s.files) || {};
        $all("[data-dl-count]").forEach(function (el) {
          var n = files[el.getAttribute("data-dl-count")];
          if (typeof n === "number" && n > 0) {
            el.setAttribute("data-n", n);
            el.setAttribute("data-suffix", " Downloads");
            el.hidden = false;
          }
        });
        renderNumbers();
      })
      .catch(function () { dl.hidden = true; });
  }

  /* Einblenden beim Scrollen */
  function initReveal() {
    var items = $all(".reveal");
    if (!("IntersectionObserver" in window)) { items.forEach(function (el) { el.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Szenen: Kamerafahrt wie bei der Vorlage ----------
     Hero:     die Kamera zoomt auf das App-Symbol, es kippt nach hinten weg, der Screenshot fliegt heran.
     Schleife: am Ende zoomt die Kamera in die eigene Startseite und landet nahtlos wieder oben.
     Alle Animationen folgen einem weich nachlaufenden Scrollwert. ?motion=off schaltet sie ab. */
  var motionOff = /[?&]motion=off\b/.test(location.search);
  var NAV_H = 64;
  var smooth = { y: window.scrollY };
  var scenes = { on: false, refresh: function () {} };

  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function span(p, a, b) { return clamp01((p - a) / (b - a)); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function easeInOut(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function initScenes() {
    var hero = $('[data-scene="hero"]'), loop = $('[data-scene="loop"]'), dots = $("canvas.bg-dots");
    if (!hero) return;
    var stage = $(".stage", hero), cam = $(".cam", hero), text = $(".hero-text", hero), col = $(".hero-col", hero);
    var icon = $(".app-icon", hero), fly = $(".fly", hero), hint = $(".scroll-hint", hero);
    var lStage = loop && $(".stage", loop), lCam = loop && $(".loop-cam", loop), lWin = loop && $(".loop-window", loop);
    var lScreen = loop && $(".loop-screen", loop), mini = loop && $(".mini", loop), lIntro = loop && $(".loop-intro", loop);
    var g = {}, running = false, dctx = dots && dots.getContext && dots.getContext("2d");
    if (loop) loop.setAttribute("inert", "");

    function wanted() { return !motionOff && window.innerWidth >= 900 && window.innerHeight >= 560; }

    /* Startseite im Kleinen für die Schleife: Navigation + Hero wie beim Öffnen der Seite */
    function buildMini() {
      if (!mini) return;
      mini.innerHTML = "";
      var nav = $(".nav").cloneNode(true), camCopy = cam.cloneNode(true), wrapStage = document.createElement("div");
      [nav, camCopy].forEach(function (n) {
        n.removeAttribute("style");
        $all("[id]", n).forEach(function (el) { el.removeAttribute("id"); });
        $all("[style]", n).forEach(function (el) { if (el.tagName !== "SPAN") el.removeAttribute("style"); });
      });
      wrapStage.className = "mini-stage";
      wrapStage.style.height = (window.innerHeight - NAV_H) + "px";
      wrapStage.appendChild(camCopy);
      mini.appendChild(nav); mini.appendChild(wrapStage);
    }

    function layout() {
      if (!window.innerWidth || !window.innerHeight) { setTimeout(layout, 200); return; }   // Tab noch unsichtbar
      scenes.on = wanted();
      root.classList.toggle("scene-on", scenes.on);
      [cam, text, icon, fly, hint, lCam, lIntro].forEach(function (el) {
        if (el) { el.style.transform = ""; el.style.opacity = ""; }
      });
      fly.style.width = fly.style.height = "";
      if (dots) { dots.width = window.innerWidth; dots.height = window.innerHeight; }
      if (!scenes.on) { request(); return; }
      var vw = document.documentElement.clientWidth, vh = window.innerHeight, sh = vh - NAV_H, bar = 34;   // Breite ohne Scrollbalken
      // Ziel: Screenshot groß und mittig
      var w = Math.min(1180, vw - 64), h = w * 877 / 1400 + bar;
      if (h > sh - 40) { h = sh - 40; w = (h - bar) * 1400 / 877; }
      g.fin = { x: (vw - w) / 2, y: (sh - h) / 2, w: w, h: h };
      fly.style.width = w + "px"; fly.style.height = h + "px";
      // Start: klein im oberen Teil der Symbolspalte (in Kamera-Koordinaten gemessen)
      var sr = stage.getBoundingClientRect(), cr = col.getBoundingClientRect(), ir = icon.getBoundingClientRect();
      g.o = { x: ir.left - sr.left + ir.width / 2, y: ir.top - sr.top + ir.height / 2 };
      var w0 = cr.width * 0.66, h0 = w0 * h / w;
      g.start = { x: g.o.x - w0 / 2, y: ir.top - sr.top - h0 * 0.15, w: w0 };
      cam.style.transformOrigin = g.o.x + "px " + g.o.y + "px";
      g.heroTop = hero.offsetTop - NAV_H;
      g.heroRange = hero.offsetHeight - stage.offsetHeight;
      if (loop) {
        var lw = Math.min(860, vw - 200), k = lw / vw;
        lWin.style.width = lw + "px";
        lScreen.style.height = (vh * k) + "px";
        mini.style.width = vw + "px"; mini.style.height = vh + "px";
        mini.style.transform = "scale(" + k + ")";
        buildMini();
        var lr = lStage.getBoundingClientRect(), mr = lScreen.getBoundingClientRect();
        g.loop = { k: k, mx: mr.left - lr.left, my: mr.top - lr.top };
        g.loopTop = loop.offsetTop;
        g.loopRange = loop.offsetHeight - lStage.offsetHeight;
      }
      request();
    }

    function drawDots(y) {
      if (!dctx) return;
      var w = dots.width, h = dots.height, step = 28, cs = getComputedStyle(root);
      var off = -(y * 0.35) % step, big = step * 5, offBig = -(y * 0.35) % big;
      dctx.clearRect(0, 0, w, h);
      dctx.fillStyle = cs.getPropertyValue("--line").trim() || "#333";
      dctx.globalAlpha = 0.75;
      for (var yy = off; yy < h; yy += step) for (var xx = 14; xx < w; xx += step) dctx.fillRect(xx, yy, 1.2, 1.2);
      dctx.fillStyle = cs.getPropertyValue("--muted").trim() || "#888";
      dctx.globalAlpha = 0.35;
      for (var by = offBig; by < h; by += big) for (var bx = 14 + step * 2; bx < w; bx += big) {
        dctx.fillRect(bx - 5, by, 11, 1); dctx.fillRect(bx, by - 5, 1, 11);
      }
      dctx.globalAlpha = 1;
    }

    function render() {
      var y = smooth.y;
      drawDots(y);
      if (!scenes.on) return;
      // Hero
      var p = clamp01((y - g.heroTop) / g.heroRange);
      var z = easeInOut(span(p, 0, 0.7)), Z = 1 + 0.9 * z;
      cam.style.transform = "scale(" + Z.toFixed(4) + ")";
      text.style.opacity = (1 - span(p, 0.02, 0.26)).toFixed(3);
      text.style.transform = "translateX(" + (-70 * z).toFixed(1) + "px)";
      var a = easeInOut(span(p, 0.06, 0.4));
      icon.style.transform = "perspective(900px) translateY(" + (a * 70).toFixed(2) + "%) rotateX(" + (a * 74).toFixed(2) +
        "deg) scale(" + (1 - a * 0.12).toFixed(4) + ")";
      icon.style.opacity = (1 - span(p, 0.28, 0.44)).toFixed(3);
      var f = easeInOut(span(p, 0.16, 0.92));
      var sx = g.o.x + (g.start.x - g.o.x) * Z, sy = g.o.y + (g.start.y - g.o.y) * Z, sw = g.start.w * Z;
      var rw = lerp(sw, g.fin.w, f), rx = lerp(sx, g.fin.x, f), ry = lerp(sy, g.fin.y, f);
      fly.style.opacity = span(p, 0.14, 0.26).toFixed(3);
      fly.style.pointerEvents = f > 0.95 ? "" : "none";   // erst klickbar (Großansicht), wenn er ganz da ist
      fly.style.transform = "translate(" + rx.toFixed(1) + "px," + ry.toFixed(1) + "px) scale(" + (rw / g.fin.w).toFixed(5) + ")";
      if (hint) hint.style.opacity = (1 - span(p, 0, 0.06)).toFixed(3);
      // Schleife
      if (loop && g.loop) {
        var q = clamp01((y - g.loopTop) / g.loopRange), e = easeInOut(span(q, 0.08, 1));
        var S = Math.exp(Math.log(1 / g.loop.k) * e), u = (S - 1) / (1 / g.loop.k - 1);
        var tx = g.loop.mx * (1 - u) - g.loop.mx * S, ty = g.loop.my * (1 - u) - g.loop.my * S;
        lCam.style.transform = "translate(" + tx.toFixed(2) + "px," + ty.toFixed(2) + "px) scale(" + S.toFixed(5) + ")";
        lIntro.style.opacity = (1 - span(q, 0.02, 0.2)).toFixed(3);
        // Ganz unten angekommen: nahtlos zurück an den Anfang
        var atEnd = window.scrollY >= g.loopTop + g.loopRange - 2;
        if (atEnd && q > 0.995) {
          smooth.y = 0;
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          render();
        }
      }
    }

    function tick() {
      var target = window.scrollY, d = target - smooth.y;
      smooth.y = Math.abs(d) < 0.4 ? target : smooth.y + d * 0.1;
      render();
      if (smooth.y !== target) requestAnimationFrame(tick); else running = false;
    }
    function request() { if (!running) { running = true; requestAnimationFrame(tick); } }

    window.addEventListener("scroll", request, { passive: true });
    var rt;
    window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(layout, 120); });
    scenes.refresh = function () { if (scenes.on) buildMini(); request(); };
    // Für Kontrollbilder: ?at=1200 springt direkt an diese Scrollposition
    var at = /[?&]at=(\d+)/.exec(location.search);
    function jumpAt() { if (at) { window.scrollTo({ top: +at[1], left: 0, behavior: "instant" }); smooth.y = window.scrollY; render(); } }
    layout();
    // Bilder/Schriften können die Höhen noch ändern
    window.addEventListener("load", function () { layout(); jumpAt(); });
  }

  /* Linien im Raster zeichnen sich ein, sobald es ins Bild kommt */
  function initDraw() {
    $all(".grid-panel").forEach(function (panel) {
      $all(".cells", panel).forEach(function (cells) {
        $all(".cell", cells).forEach(function (c, i) { c.style.setProperty("--i", i); });
      });
      if (motionOff || !("IntersectionObserver" in window)) { panel.classList.add("drawn"); return; }
      var io = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { panel.classList.add("drawn"); io.disconnect(); }
      }, { threshold: 0.2 });
      io.observe(panel);
    });
  }

  /* Pixel-Glut unten im Raster: flackert und steigt langsam auf */
  function initFire() {
    var list = $all("canvas.dither").map(function (c) {
      var r = 0, seeds = [];
      for (var i = 0; i < 64 * 30; i++) { r = (r * 9301 + 49297 + i) % 233280; seeds.push(r / 233280); }
      return { c: c, ctx: c.getContext("2d"), dim: c.classList.contains("dim"), seeds: seeds, visible: false };
    });
    if (!list.length) return;
    var W = 64, H = 30, t = 0, running = false, glow = "255,90,31";
    function draw(item) {
      var ctx = item.ctx, c = item.c;
      if (c.width !== W) { c.width = W; c.height = H; }
      ctx.clearRect(0, 0, W, H);
      for (var y = 0; y < H; y++) {
        var base = Math.pow(y / H, 1.7);
        for (var x = 0; x < W; x++) {
          var s = item.seeds[y * W + x];
          var flick = 0.5 + 0.5 * Math.sin(t * (1.2 + s * 2.4) + s * 40 - y * 0.35);
          var v = base * (0.35 + 0.65 * flick);
          if (v < 0.08 + s * 0.35) continue;
          ctx.fillStyle = item.dim
            ? "rgba(" + glow + "," + Math.min(0.3, v * 0.36).toFixed(3) + ")"
            : "rgba(0,0,0," + Math.min(0.5, v * 0.55).toFixed(3) + ")";
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
    function tick() {
      var any = false;
      t += 0.045;
      if (Math.round(t / 0.045) % 20 === 0) glow = getComputedStyle(root).getPropertyValue("--glow").trim() || glow;
      list.forEach(function (it) { if (it.visible) { any = true; draw(it); } });
      if (any && !document.hidden && !motionOff) requestAnimationFrame(tick); else running = false;
    }
    function start() { if (!running) { running = true; requestAnimationFrame(tick); } }
    glow = getComputedStyle(root).getPropertyValue("--glow").trim() || glow;
    list.forEach(function (it) { it.visible = true; draw(it); it.visible = false; });
    if (motionOff || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { list.forEach(function (it) { if (it.c === e.target) it.visible = e.isIntersecting; }); });
      start();
    });
    list.forEach(function (it) { io.observe(it.c); });
    document.addEventListener("visibilitychange", start);
  }

  /* Start */
  var savedLang = load(KEY_LANG);
  var browser = (navigator.language || "de").toLowerCase();
  lang = savedLang || (browser.indexOf("de") === 0 ? "de" : "en");
  scheme = load(KEY_SCHEME) || scheme;
  // Links mit ?lang=en&scheme=nord öffnen die Seite direkt so
  try {
    var params = new URLSearchParams(location.search);
    if (params.get("lang")) lang = params.get("lang") === "en" ? "en" : "de";
    if (params.get("scheme") && schemeInfo(params.get("scheme")).bg) scheme = params.get("scheme");
  } catch (e) { /* alter Browser */ }

  document.addEventListener("DOMContentLoaded", function () {
    buildSchemeMenu();
    $all("[data-scheme-choice]:not([role])").forEach(function (el) {
      el.addEventListener("click", function () { setScheme(el.getAttribute("data-scheme-choice"), true); });
    });
    $all(".lang-switch button").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang"), true); });
    });
    applyConfig();
    setLang(lang, false);
    setScheme(scheme, false);
    initTour();
    initWizardTour();
    initCounters();
    initLightbox();
    initReveal();
    initScenes();
    initDraw();
    initFire();
    var year = $("#year");
    if (year) year.textContent = String(new Date().getFullYear());
  });
  // Farbschema so früh wie möglich setzen (kein Aufblitzen)
  root.setAttribute("data-scheme", schemeInfo(scheme).id);
  root.setAttribute("data-lang", lang);
})();
