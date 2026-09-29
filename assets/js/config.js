/* Einstellungen der Website – hier zentral ändern */
window.FORGE_SITE = {
  // GitHub-Link oben, im Mitmach-Bereich und in der Fußzeile (später z.B. das Repo des Tools)
  github: "https://github.com/SkullSplitter2026",

  // Downloads: solange url leer ist, steht dort „Bald verfügbar“
  downloads: {
    installer: { url: "", file: "sKulls-Forge-Setup-2.x.exe", sha256: "" },
    portable:  { url: "", file: "sKulls-Forge-Portable-2.x.zip", sha256: "" },
    source:    { url: "", file: "Quellcode (GitHub)", sha256: "" }
  },

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
