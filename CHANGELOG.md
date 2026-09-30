# 📜 Versionsverlauf – sKulls Forge

Alle wichtigen Änderungen. Neuere Versionen stehen oben. · *English summary below each version.*

## In Arbeit – nächste Version

Erweiterung um **Addons**, **Repository** und **Wizard**. Erster Schritt: die neue Oberfläche.

### ⚒️ Neuer Name
- **sKulls Forge** (vorher sKulls ForkForge) mit Slogan „Aus einem Guss: Forks, Addons und Repositories für Kodi“
- Umgebungsvariablen heißen jetzt `SKFORGE_…` (`FORKFORGE_…` und ältere Namen gelten weiter), Logdatei
  `Logs/forge.log`, Zeitplan-Ordner „sKulls Forge“ (alte Aufgaben werden übernommen), Sprachvorlage `forge.pot`

### 🧭 Oberfläche
- **Seitenleiste** mit den Bereichen Übersicht, Forks (die bisherigen Tabs 1–8), Addons, Repository, Wizard,
  Einstellungen, Werkzeuge und Detail-Log – einklappbar auf Symbole, klappt bei schmalem Fenster automatisch ein
- Neue Seite **Einstellungen** (`Strg+,`): Farbschema, Startbildschirm, Sprache, Sprach-Server, Werkzeuge,
  Kodi-Update-Prüfung beim Start (abschaltbar), Ordner
- Neue Seite **Werkzeuge**: Sicherung, Diagnose, Kodi-Download, Build-Verlauf, Vergleich, Zeitplan, Profil teilen
- Fork-Tabs lassen sich **scrollen**, wenn das Fenster zu niedrig ist; größeres Startfenster
- Wizard zeigt vorerst, was geplant ist
- **Tooltips in allen Tabellen**: abgeschnittene Einträge zeigen beim Überfahren den vollständigen Text; in der
  Übersicht listet „Hinweise“ bei Addons alle Fehler und Warnungen
- **Übersicht** zeigt zusätzlich alle **Repositories** und **Addons** (Version, letzter Build bzw. letzte ZIP,
  Hinweise) – Doppelklick öffnet, „Öffnen und bauen“ / „ZIP bauen“ baut gleich

### 📁 Projekt-Ordner und Upload-Ziele
- Eigene Daten liegen jetzt im **Projekt-Ordner** (Standard `Dokumente\sKulls Forge`, änderbar): gemeinsam
  Kodi-APKs, Images (Icons, Banner, Wallpaper, Splash, Fanart), Addons, Repository (`Repository/<Name>/Build` =
  fertiges Repository), Config (Einstellungen), Presets, Temp, Logs (Protokolle), Wizard (`Wizard/Build`, `Wizard/Source`), Backups und History - außerhalb davon und
  des Programmordners speichert das Tool nichts (auch nicht in %APPDATA%); **je Projekt ein Ordner** `Projects/<Projekt>/` mit Fork-Profil, Keystore
  und Builds
- **Neues Projekt…** (`Strg+N`): Fork-Einstellungen und Keystore wahlweise aus einem anderen Projekt übernehmen
- **Bereinigen / Werkseinstellung** in den Einstellungen: Zwischenspeicher und Protokolle löschen, Einstellungen,
  Sprachdateien, Presets, Projekt-Ordner und alte Daten in den Papierkorb - mit Bestätigung und Gesamtsicherung vorher
- Beim ersten Start: vorhandene Daten aus dem Programmordner **kopieren** (Pfade werden angepasst) oder vorerst
  dort lassen; Gesamtsicherung sichert und stellt den Projekt-Ordner wieder her (auch ältere Sicherungen)
- **Upload-Ziele** in den Einstellungen (FTP, FTPS, SFTP, GitHub) mit Verbindungstest – Fork-Upload (Tab 8) und
  Repository wählen nur noch Ziel und Unterordner; ältere Profile werden automatisch übernommen
- Dateiauswahl öffnet im passenden Unterordner (Bilder, Addons, Keystores, Kodi-APKs)

### 🧩 Addons
- Eigene Addons aus **Vorlagen**: Video-Plugin, Programm-Script, Dienst, Kontextmenü, Bibliothek – mit
  Beispielcode (Python 2 und 3), Einstellungen, Sprachdateien Englisch/Deutsch, Changelog und Symbol
- Vorhandene Addons (ZIP oder Ordner) **übernehmen** und bearbeiten: Angaben der `addon.xml`, Kodi-Version
  (`xbmc.python`), Abhängigkeiten – Erweiterungen, Sprachen und Kommentare bleiben erhalten
- **Prüfung**: Pflichtangaben, fehlende Dateien und Bilder, Python-Version je Kodi 18–22, Python-Syntax,
  Python-2-Reste, Abhängigkeiten (auch online im offiziellen Kodi-Repository), Sprachordner, Bildgrößen
- **Version erhöhen** mit Eintrag in `changelog.txt` und `<news>`, saubere **ZIP** nach `Addons/ZIPs`
  (Hinweis bei geändertem Inhalt ohne neue Version)
- Zum Fork oder Repository hinzufügen; **auf dem Gerät testen**: ZIP in den Download-Ordner, direkt in eine
  Kodi-App installieren, Kodi neu starten, Kodi-Log live
- Befehle `addon-list`, `addon-check` und `addon-build`

### 🗂️ Repository
- Eigenes Kodi-Repository bauen: `addons.xml` mit MD5, saubere Addon-ZIPs mit `.md5`/`.sha256`, Bilder,
  Repository-Addon und `index.html`; Zweige für Kodi 18 und Kodi 19+; ältere Versionen behalten
- Prüfung von ID, Version, Python-Version je Zweig und Bildern; Hinweis bei geändertem Inhalt ohne neue Version
- Hochladen per FTP/FTPS/SFTP (nur Änderungen) oder als ein Commit in ein GitHub-Repository (GitHub Pages)
- Vorhandenes Repository-Addon übernehmen, „Zum Fork hinzufügen“, Addons aus dem Fork übernehmen,
  Befehle `repo-build` und `repo-list`
- Repository-Projekte (`repos/`) sind Teil der Gesamtsicherung

*English: new name sKulls Forge ("Cast in one piece: forks, add-ons and repositories for Kodi"), environment
variables `SKFORGE_…`; new sidebar (Overview, Forks, Add-ons, Repository, Wizard, Settings, Tools, Detail log), new Settings and
Tools pages, scrollable fork tabs; project folder in Documents with data migration; central upload targets (FTP/SFTP/GitHub); own Kodi repository (build, check, upload via FTP/SFTP/GitHub, add to fork); own add-ons (templates, edit, check,
version and changelog, clean ZIP, add to fork/repository, test on the device); the overview also lists repositories and
add-ons; tooltips with the full text in all tables. Wizard is under construction.*

## 2.0.0 – 2026-09-29

Großes Update: neuer Name, neue Oberfläche, viele neue Funktionen.

### ✨ Oberfläche
- Neuer Name **sKulls ForkForge** (vorher sKulls Kodi Fork Builder) mit Slogan „Schmiede für Forks: bauen, formen, signieren“
- **Startbildschirm** mit Logo, Version und Fortschritt (abschaltbar), Logo als Fenstersymbol und im Kopfbereich
- **Symbole** an Tabs, Menüs und Knöpfen, Akzent-Knopf für FORK BUILD
- **8 Farbschemata**: Hell und Dunkel wie bisher, dazu sKulls Neon, Mitternacht, Graphit, Nord, Sand, Mint
- **Übersicht aller Forks** als Startseite (Version, Kodi-Basis, letzter Build, Zeitplan, neue Kodi-Version, Downloads)
- **Rückgängig / Wiederholen**, **Tastenkürzel** für alle wichtigen Aktionen, Alt-Menüs

### 🌐 Sprachen
- Sprachauswahl als **Aufklappmenü**, beim ersten Start die Windows-Sprache
- Alle Übersetzungen als **gettext-Dateien** (`lang/*.po`), eigene Sprachen per Vorlage
- **Sprach-Server**: weitere Sprachen herunterladen und aktualisieren (HTTPS, SHA-256)

### 🧰 Werkzeuge
- Verschlüsselte **Gesamtsicherung** (AES-256) und Wiederherstellung – z.B. für den Umzug auf einen neuen PC
- Bereinigtes **Diagnosepaket** für den Support
- Neue Befehle: `overview`, `backup`, `restore`, `diagnose`, `lang-template`, `lang-index`, `lang-list`, `lang-download`

### 📺 Fork
- **Kindersicherung** (Kodi-Master-Lock), **„Was ist neu“** nach Updates (Deutsch/Englisch)
- **Download-Seite** mit Hell/Dunkel- und Deutsch/Englisch-Umschalter, abgesicherte update.json (SHA-256, nur HTTPS)
- Kompatibilitätsprüfung, Kodi-Einstellungen-Explorer, Build-Verlauf, automatische Builds, Assistent, Profil-Vorlagen,
  Installation auf allen Geräten

### ⚙️ Technik
- Umgebungsvariablen heißen jetzt `FORKFORGE_…` (die alten `KODI_FORK_BUILDER_…` gelten weiter)
- Logdatei `logs/forkforge.log`, Zeitplan-Ordner „sKulls ForkForge“ (alte Aufgaben werden übernommen)
- Mindestgröße des Fensters 1200 × 720

*English: new name sKulls ForkForge, splash screen, icons, 8 color schemes, overview of all forks, undo/redo,
keyboard shortcuts, language drop-down with .po language files and a language server, encrypted full backup,
diagnostic package, parental lock, "What's new", download page and more.*

## 1.0.0

Erste Version als **sKulls Kodi Fork Builder**: Fork aus offiziellen Kodi-APKs mit neuem Package-Namen, Branding,
eingebetteten Addons, Kodi-Einstellungen, Signatur, Update-Builds, ADB-Installation und Gerätetest, Deutsch/Englisch,
Hell/Dunkel, Profile und Kommandozeile.

*English: first release as sKulls Kodi Fork Builder.*
