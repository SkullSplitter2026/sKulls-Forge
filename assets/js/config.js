/* Einstellungen der Website – hier zentral ändern */
window.FORGE_SITE = {
  // Adresse der Website (GitHub Pages)
  site: "https://skullsplitter2026.github.io/sKulls-Forge/",

  // GitHub-Link oben, im Mitmach-Bereich und in der Fußzeile (später z.B. das Repo des Tools)
  github: "https://skullsplitter2026.github.io/sKulls-Forge/",

  // Download: solange url leer ist, steht dort „Bald verfügbar“. label: Kennzeichen statt „bald“ (z.B. „Beta“). Ein Setup für alles - es installiert oder
  // entpackt auf Wunsch eine portable Version (keine eigene Portable-ZIP mehr)
  downloads: {
    installer: { url: "https://github.com/SkullSplitter2026/sKulls-Forge/releases/download/v3.11.0-beta1/sKulls-Forge-Setup-3.11.0-beta1.exe",
                 file: "sKulls-Forge-Setup-3.11.0-beta1.exe", sha256: "69f9a9452e7d3e6303b3265dfadcef174095d82ac9e1393d8795084ef4ffa272", label: "Beta" }
    // Quellcode: momentan nicht öffentlich (eigene Karte ohne Download in index.html)
  },

  // Besucherzähler: Abacus (ohne Konto, ohne Cookies) - service: "" schaltet ihn ab.
  // Der Zählerstand gehört zu namespace/key; beim Testen auf localhost wird nur gelesen, nicht gezählt.
  counter: { service: "abacus", base: "https://abacus.jasoncameron.dev", namespace: "skullsplitter2026-skulls-forge",
             key: "visits" },

  // Download-Zähler: Datei auf dieser Website, schreibt der Forge ("sKulls Forge.exe" site-stats ...)
  stats: "assets/stats.json",

  // Rückmeldungen (Fehler melden / Wünsche): GitHub-Issues dieser Website, Vorlagen in .github/ISSUE_TEMPLATE/
  issues: "https://github.com/SkullSplitter2026/sKulls-Forge/issues",

  // Build-Schaufenster (builds.html): builds.json von Wizards, die mit dem Forge gebaut wurden.
  // install = Seite mit der Installationsanleitung (z.B. die Startseite des Repositorys)
  showcase: [
    { url: "https://skullsplitter2026.github.io/sKulls.Kodi.Build/Build/builds.json",
      install: "https://skullsplitter2026.github.io/sKulls.Kodi.Build/repo/" }
  ],

  // Statusseite (status.html): Adressen, die der Browser der Besucher live prüft.
  // type: json (Datei laden), text (nur erreichbar?), release (neuestes GitHub-Release), githubstatus
  status: [
    { de: "Website", en: "Website", url: "index.html", type: "text" },
    { de: "Kodi-Repository (addons.xml)", en: "Kodi repository (addons.xml)",
      url: "https://skullsplitter2026.github.io/sKulls.Kodi.Build/repo/zips/addons.xml", type: "text" },
    { de: "Wizard: Build-Liste", en: "Wizard: build list",
      url: "https://skullsplitter2026.github.io/sKulls.Kodi.Build/Build/builds.json", type: "json" },
    { de: "Fork: Update-Hinweis (update.json)", en: "Fork: update notice (update.json)",
      url: "https://skullsplitter2026.github.io/sKulls.Kodi.Build/apk/update.json", type: "json" },
    { de: "Downloads (GitHub-Releases)", en: "Downloads (GitHub releases)",
      url: "https://api.github.com/repos/SkullSplitter2026/sKulls.Kodi.Build/releases/latest", type: "release" },
    { de: "GitHub (Dienst)", en: "GitHub (service)",
      url: "https://www.githubstatus.com/api/v2/status.json", type: "githubstatus" }
  ],

  // Standard beim ersten Besuch
  defaultScheme: "skulls",
  // Farbschemata: Name (DE/EN), Screenshots aus assets/shots/<sprache>/<shots>/
  schemes: [
    { id: "forge",    de: "Forge (Glut)",  en: "Forge (ember)", shots: "graphite", bg: "#1b1b1b", accent: "#ff5a1f" },
    { id: "graphite", de: "Graphit",       en: "Graphite",      shots: "graphite", bg: "#1c1c1e", accent: "#ff9f0a" },
    { id: "dark",     de: "Dunkel",        en: "Dark",          shots: "dark",     bg: "#202020", accent: "#4ca3ff" },
    { id: "light",    de: "Hell",          en: "Light",         shots: "light",    bg: "#f3f3f3", accent: "#0067c0" },
    { id: "skulls",   de: "sKulls Neon",   en: "sKulls Neon",   shots: "skulls",   bg: "#111318", accent: "#3d8bff" },
    { id: "midnight", de: "Mitternacht",   en: "Midnight",      shots: "midnight", bg: "#0f172a", accent: "#38bdf8" },
    { id: "nord",     de: "Nord",          en: "Nord",          shots: "nord",     bg: "#2e3440", accent: "#88c0d0" },
    { id: "sand",     de: "Sand",          en: "Sand",          shots: "sand",     bg: "#f4efe6", accent: "#a8561c" },
    { id: "mint",     de: "Mint",          en: "Mint",          shots: "mint",     bg: "#eef5f2", accent: "#0f8a6a" }
  ]
};
