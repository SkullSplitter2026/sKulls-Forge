/* sKulls Forge – Website: Schaufenster, Statusseite, Funktionen je Version, Video-Clips, Rückmeldungen.
   Läuft neben main.js (Sprache/Farbschema). Inhalte von außen (builds.json, Status) werden nur als Text eingesetzt. */
(function () {
  "use strict";
  var SITE = window.FORGE_SITE || {};
  var root = document.documentElement;

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function lang() { return root.getAttribute("data-lang") === "en" ? "en" : "de"; }

  /* Element bauen: el("div", {class: "x"}, kind1, kind2 …) – Kinder sind Elemente oder Text */
  function el(tag, attrs) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (attrs[k] === null || attrs[k] === undefined || attrs[k] === false) return;
      if (k === "text") node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k] === true ? "" : attrs[k]);
    });
    for (var i = 2; i < arguments.length; i++) {
      var child = arguments[i];
      if (child === null || child === undefined || child === false) continue;
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    }
    return node;
  }
  /* zweisprachiger Text: <span lang=de>…</span><span lang=en>…</span> (main.js blendet um) */
  function bi(de, en, tag) {
    var frag = document.createDocumentFragment();
    frag.appendChild(el(tag || "span", { lang: "de", text: de }));
    frag.appendChild(el(tag || "span", { lang: "en", text: en === undefined ? de : en }));
    return frag;
  }
  /* Kodi-Formatierung ([COLOR …], [B] …) aus Namen entfernen */
  function plain(text) { return String(text || "").replace(/\[\/?(?:COLOR|B|I|LIGHT|UPPERCASE|LOWERCASE|CAPITALIZE|CR)[^\]]*\]/gi, "").trim(); }
  function mb(bytes) {
    var n = Number(bytes) || 0;
    if (n >= 1073741824) return (n / 1073741824).toFixed(1).replace(".", lang() === "de" ? "," : ".") + " GB";
    return Math.max(1, Math.round(n / 1048576)) + " MB";
  }
  function safeUrl(url) { return /^https:\/\//i.test(String(url || "")) ? url : ""; }

  /* ---------------------------------------------------------------- Build-Schaufenster (267) */
  var PLATFORMS = { android: "Android", windows: "Windows", linux: "Linux", osx: "macOS", macos: "macOS", ios: "iOS" };

  function buildCard(b, install) {
    var fan = safeUrl(b.fanart), icon = safeUrl(b.icon);
    var chips = el("div", { class: "chips" });
    if (b.kodi) chips.appendChild(el("span", { class: "chip", text: "Kodi " + b.kodi }));
    (b.platforms || []).forEach(function (p) { chips.appendChild(el("span", { class: "chip", text: PLATFORMS[p] || p })); });
    if (b.size) chips.appendChild(el("span", { class: "chip", text: mb(b.size) }));
    if (b.addons) chips.appendChild(el("span", { class: "chip" }, bi(b.addons + " Addons", b.addons + " add-ons")));
    if (b.category) chips.appendChild(el("span", { class: "chip chip-accent", text: b.category }));
    if (typeof b.downloads === "number" && b.downloads > 0)
      chips.appendChild(el("span", { class: "chip" }, bi(b.downloads + " Downloads", b.downloads + " downloads")));
    var card = el("article", { class: "bcard" },
      el("div", { class: "bcard-art" },
        fan ? el("img", { src: fan, alt: "", loading: "lazy" }) : null,
        icon ? el("img", { class: "bcard-icon", src: icon, alt: "", loading: "lazy" }) : null),
      el("div", { class: "bcard-body" },
        el("h3", {}, plain(b.name), el("span", { class: "ver", text: " " + (b.version || "") })),
        chips,
        b.description ? el("p", { text: plain(b.description) }) : null,
        b.changelog ? el("details", {}, el("summary", {}, bi("Was ist neu", "What's new")),
                                         el("p", { class: "pre", text: plain(b.changelog) })) : null,
        el("p", { class: "muted small" },
          b.built ? bi("Gebaut: " + b.built.slice(0, 10), "Built: " + b.built.slice(0, 10)) : null),
        install ? el("a", { class: "btn btn-ghost", href: install, target: "_blank", rel: "noopener" },
                     bi("So installierst du den Wizard", "How to install the wizard")) : null));
    $all("img", card).forEach(function (img) { img.addEventListener("error", function () { img.remove(); }); });
    return card;
  }

  function initShowcase() {
    var box = $("#showcase");
    if (!box) return;
    var sources = SITE.showcase || [];
    if (!sources.length || !window.fetch) {
      box.appendChild(el("p", { class: "muted" }, bi("Noch keine Wizards eingetragen.", "No wizards listed yet.")));
      return;
    }
    sources.forEach(function (src) {
      var group = el("section", { class: "chapter showcase-group" },
        el("p", { class: "muted" }, bi("Lade Build-Liste …", "Loading build list …")));
      box.appendChild(group);
      fetch(src.url, { cache: "no-cache" })
        .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
        .then(function (data) {
          group.textContent = "";
          var builds = (data.builds || []).filter(function (b) { return b && b.name; });
          var wizard = data.wizard || {};
          group.appendChild(el("h2", { text: plain(data.name) || "Wizard" }));
          group.appendChild(el("p", { class: "muted" },
            bi(builds.length + " Build(s)" + (wizard.version ? " · Wizard " + wizard.version : "") +
               (data.updated ? " · Stand " + data.updated : ""),
               builds.length + " build(s)" + (wizard.version ? " · wizard " + wizard.version : "") +
               (data.updated ? " · updated " + data.updated : ""))));
          var grid = el("div", { class: "bgrid" });
          builds.forEach(function (b) { grid.appendChild(buildCard(b, safeUrl(src.install))); });
          group.appendChild(grid);
          if (!builds.length) group.appendChild(el("p", { class: "muted" }, bi("Keine Builds veröffentlicht.", "No builds published.")));
        })
        .catch(function () {
          group.textContent = "";
          group.appendChild(el("p", { class: "muted" },
            bi("Die Build-Liste ist gerade nicht erreichbar – schau auf der Statusseite nach.",
               "The build list is not reachable right now – check the status page.")));
        });
    });
  }

  /* ---------------------------------------------------------------- Statusseite (271) */
  var STATES = { ok: ["erreichbar", "reachable"], warn: ["eingeschränkt", "degraded"], bad: ["nicht erreichbar", "unreachable"],
                 wait: ["prüfe …", "checking …"] };

  function checkOne(entry) {
    var started = performance.now();
    var url = entry.url + (entry.type === "release" || entry.type === "githubstatus" ? "" :
                           (entry.url.indexOf("?") < 0 ? "?" : "&") + "t=" + Date.now());
    return fetch(url, { cache: "no-store", credentials: "omit", referrerPolicy: "no-referrer" })
      .then(function (r) {
        var ms = Math.round(performance.now() - started);
        if (!r.ok) return { state: "bad", ms: ms, de: "HTTP " + r.status, en: "HTTP " + r.status };
        if (entry.type === "text") return { state: "ok", ms: ms, de: "HTTP 200", en: "HTTP 200" };
        return r.json().then(function (d) {
          if (entry.type === "release") {
            var n = (d.assets || []).length;
            return n ? { state: "ok", ms: ms, de: (d.tag_name || "") + " · " + n + " Datei(en)", en: (d.tag_name || "") + " · " + n + " file(s)" }
                     : { state: "warn", ms: ms, de: "Release ohne Dateien", en: "release without files" };
          }
          if (entry.type === "githubstatus") {
            var ind = (d.status || {}).indicator, desc = (d.status || {}).description || "";
            return { state: ind === "none" ? "ok" : ind === "minor" ? "warn" : "bad", ms: ms, de: desc, en: desc };
          }
          if (Array.isArray(d.builds)) return { state: "ok", ms: ms, de: d.builds.length + " Build(s)", en: d.builds.length + " build(s)" };
          if (d.version_name) return { state: "ok", ms: ms, de: "Version " + d.version_name, en: "version " + d.version_name };
          return { state: "ok", ms: ms, de: "OK", en: "OK" };
        });
      })
      .catch(function () {
        return { state: "bad", ms: Math.round(performance.now() - started), de: "keine Antwort", en: "no answer" };
      });
  }

  function initStatus() {
    var list = $("#status-list");
    if (!list) return;
    var entries = SITE.status || [], summary = $("#status-summary"), stamp = $("#status-time"), running = false;
    var rows = entries.map(function (entry) {
      var dot = el("i", { class: "st-dot wait", "aria-hidden": "true" });
      var state = el("span", { class: "st-state" }, bi(STATES.wait[0], STATES.wait[1]));
      var detail = el("span", { class: "st-detail" });
      var row = el("li", { class: "st-row" }, dot,
        el("div", { class: "st-name" }, bi(entry.de, entry.en), el("small", { text: entry.url.replace(/^https:\/\//, "") })),
        el("div", { class: "st-info" }, state, detail));
      list.appendChild(row);
      return { entry: entry, dot: dot, state: state, detail: detail };
    });
    function run() {
      if (running) return;
      running = true;
      rows.forEach(function (r) { r.dot.className = "st-dot wait"; });
      Promise.all(rows.map(function (r) {
        return checkOne(r.entry).then(function (res) {
          r.dot.className = "st-dot " + res.state;
          r.state.textContent = "";
          r.state.appendChild(bi(STATES[res.state][0], STATES[res.state][1]));
          r.detail.textContent = "";
          r.detail.appendChild(bi(res.de + " · " + res.ms + " ms", res.en + " · " + res.ms + " ms"));
          return res.state;
        });
      })).then(function (states) {
        running = false;
        var bad = states.filter(function (s) { return s === "bad"; }).length;
        var warn = states.filter(function (s) { return s === "warn"; }).length;
        if (summary) {
          summary.className = "st-summary " + (bad ? "bad" : warn ? "warn" : "ok");
          summary.textContent = "";
          summary.appendChild(bad ? bi(bad + " von " + states.length + " Diensten nicht erreichbar", bad + " of " + states.length + " services unreachable")
            : warn ? bi("Alles erreichbar, " + warn + " eingeschränkt", "All reachable, " + warn + " degraded")
            : bi("Alle Dienste erreichbar", "All services reachable"));
        }
        if (stamp) {
          var t = new Date().toLocaleTimeString(lang() === "de" ? "de-DE" : "en-GB");
          stamp.textContent = "";
          stamp.appendChild(bi("Zuletzt geprüft: " + t, "Last checked: " + t));
        }
      });
    }
    var btn = $("#status-refresh");
    if (btn) btn.addEventListener("click", run);
    run();
    setInterval(function () { if (!document.hidden) run(); }, 60000);
  }

  /* ---------------------------------------------------------------- Funktionen je Version (273) */
  function initFeatures() {
    var table = $("#features-table");
    if (!table || !window.fetch) return;
    var tbody = $("tbody", table), search = $("#features-search"), vsel = $("#features-version"), asel = $("#features-area");
    var count = $("#features-count"), data = null;
    function option(value, de, en) {
      var o = el("option", { value: value }); o.textContent = lang() === "en" ? en : de; o.setAttribute("data-de", de); o.setAttribute("data-en", en); return o;
    }
    function relabel() { $all("option[data-de]").forEach(function (o) { o.textContent = o.getAttribute("data-" + lang()); }); }
    function render() {
      if (!data) return;
      var q = (search.value || "").trim().toLowerCase(), v = vsel.value, a = asel.value;
      tbody.textContent = "";
      var shown = 0;
      data.items.forEach(function (it) {
        if (v && it.v !== v) return;
        if (a && it.area !== a) return;
        if (q && (it.name + " " + it.area + " " + it.area_en + " " + it.v).toLowerCase().indexOf(q) < 0) return;
        shown++;
        tbody.appendChild(el("tr", {},
          el("td", { class: "num" }, el("span", { class: "chip chip-accent", text: it.v })),
          el("td", {}, bi(it.area, it.area_en)),
          el("td", { text: it.name }),
          el("td", { class: "num muted", text: it.n ? "#" + it.n : "" })));
      });
      count.textContent = "";
      count.appendChild(bi(shown + " von " + data.items.length + " Funktionen", shown + " of " + data.items.length + " features"));
    }
    fetch("assets/features.json", { cache: "no-cache" })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        data = d;
        vsel.appendChild(option("", "Alle Versionen", "All versions"));
        d.versions.filter(function (x) { return x.count; }).forEach(function (x) {
          vsel.appendChild(option(x.v, x.v + (x.date ? " (" + x.date + ")" : "") + " · " + x.count, x.v + (x.date ? " (" + x.date + ")" : "") + " · " + x.count));
        });
        asel.appendChild(option("", "Alle Bereiche", "All areas"));
        var seen = {};
        d.items.forEach(function (it) { if (!seen[it.area]) { seen[it.area] = it.area_en; } });
        Object.keys(seen).sort().forEach(function (k) { asel.appendChild(option(k, k, seen[k])); });
        render();
      })
      .catch(function () { count.textContent = "–"; });
    [search, vsel, asel].forEach(function (c) { c.addEventListener("input", render); });
    $all(".lang-switch button").forEach(function (b) { b.addEventListener("click", function () { relabel(); render(); }); });
  }

  /* ---------------------------------------------------------------- Video-Clips (269) */
  function initClips() {
    $all("[data-clip]").forEach(function (fig) {
      var btn = $("button", fig), imgs = $all("img[data-anim]", fig), playing = false;
      function toggle() {
        playing = !playing;
        imgs.forEach(function (img) {
          img.loading = "eager";
          img.src = playing ? img.getAttribute("data-anim") : img.getAttribute("data-poster");
        });
        fig.classList.toggle("playing", playing);
        btn.setAttribute("aria-pressed", playing ? "true" : "false");
      }
      imgs.forEach(function (img) { img.setAttribute("data-poster", img.getAttribute("src")); });
      if (btn) btn.addEventListener("click", toggle);
    });
  }

  /* ---------------------------------------------------------------- Rückmeldungen (268) */
  function initFeedback() {
    if (!SITE.issues) return;
    $all("a[data-issue]").forEach(function (a) {
      a.href = SITE.issues.replace(/\/$/, "") + "/new?template=" + encodeURIComponent(a.getAttribute("data-issue"));
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initFeedback();
    initShowcase();
    initStatus();
    initFeatures();
    initClips();
  });
})();
