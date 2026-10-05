# 📜 Versionsverlauf – sKulls Forge

Alle wichtigen Änderungen. Neuere Versionen stehen oben. · *English summary below each version.*

## 3.7.0 – 2026-10-05

Mehr Upload-Ziele, Ziehen und Ablegen, Geräte mit Namen, ein sicherer Wizard mit Wiederherstellungspunkt – und
Forks mit eigenem Branding, eigenen Tönen und fertiger Bibliothek.

### 📱 Fork
- **Branding aus einem Logo**: Icon, TV-Banner, Splash und Vendor-Logo in einem Schritt, dazu das passende
  Estuary-Farbschema aus der Logofarbe
- **Eigene Oberflächen-Töne**: Ordner mit WAV-Dateien → eigenes `resource.uisounds`-Addon, im Fork gleich aktiv
- **Quellen mit Inhaltstyp und Scraper**: Medienquellen gleich als Filme/Serien mit TMDb-Scraper (passend zur
  Kodi-Version), auf Wunsch wird die Bibliothek beim ersten Start einmal eingelesen
- **Berechtigungen prüfen**: alle Android-Berechtigungen der APK mit Bewertung, unnötige beim Build entfernen –
  nötige und die einer eingeschalteten Fork-Funktion bleiben immer
- **IPTV-Quellen prüfen**: M3U und EPG beim Build auf Erreichbarkeit, Senderzahl und gültige Sendungsdaten
- **Addon-Pakete**: Addon-Zusammenstellungen samt vorbelegter Einstellungen speichern und in andere Profile einfügen
- **Alle Repos nach Genre**: alle Repositories (Projekt-Ordner, Addon-Liste, offizielles Kodi-Repo) einlesen, Addons
  nach Genre sortiert (Filme & Serien, Live-TV, Sport, Anime, Kinder, Musik …), auswählen und einfügen
- **Schlüsselbund**: der Signatur-Schlüssel jeder App wird automatisch gemerkt, neben jeder APK liegt eine
  `.signatur.txt`; fehlt der Keystore beim nächsten Build, nimmt der Forge die passende Sicherung

### 🧙 Wizard
- **Wiederherstellungspunkt** vor jeder Build-Installation und jedem Fresh Start (an, die letzten zwei bleiben) und
  **„Letzte Installation rückgängig machen“**
- **Plattform-Prüfung**: Builds, die nicht zum Gerät passen (aus den `<platform>`-Angaben der Addons erkannt oder von
  Hand), sind deutlich markiert, die Installation warnt
- **Downloads fortsetzen**: ein abgebrochener Build-Download geht beim nächsten Mal an der Stelle weiter
- **Persönliche Daten**: Wiedergabeverlauf, „Zuletzt gesehen“ und Fortsetzen-Punkte kommen nicht in die Builds
  (Standard) – wahlweise auch die ganze Bibliothek weglassen
- Deutsche Reiter in der Wartung: Bereinigen · Addon-Werkzeuge · Protokolle · System-Optimierung · Sonstiges
- **Zugänge & API-Schlüssel** (Save Data): TMDb, fanart.tv, OMDb, TVDB, Debrid-Schlüssel und Logins einmal eingeben –
  der Wizard findet die passenden Einstellungen in allen Addons, zeigt sie vorher an und trägt sie ein;
  Kontoverknüpfungen (Real-Debrid, Trakt …) gehen von einem angemeldeten Addon auf gleichartige über
- **Frischere Dialoge**: Kopfband im Farbverlauf (rot bei Gefahr), Symbol im leuchtenden Kreis, Logo als
  Wasserzeichen, weicher Schatten, Knöpfe mit Tiefe, runder Fortschrittsbalken mit Prozent

### 🚚 Hochladen
- **WebDAV** (Nextcloud, ownCloud, Synology …) und **S3-Speicher** (Amazon, Cloudflare R2, Backblaze B2, Wasabi,
  MinIO) als Upload-Ziele – für Fork, Repository und Wizard, ohne Zusatzpakete

### 🖱️ Bedienung
- **Ziehen und Ablegen** aus dem Explorer: APKs, Addon-ZIPs und -Ordner, Repository-Addons und Wizard-Builds
- **Geräteverwaltung**: eigene Namen („Wohnzimmer-Box“), zuletzt benutzt zuerst, WLAN-Geräte automatisch verbinden
- **adb.exe** läuft nicht mehr die ganze Sitzung: nach 10 Minuten ohne Geräte-Aktion beendet, beim Schließen immer
- Seitenleiste: **„Builds“** als eigener Punkt neben „Wizard“
- Repository: Spalte Kodi-Repo verständlicher – „deine neuer (Kodi-Repo: 1.2.3)“ heißt: das Addon gibt es auch im
  offiziellen Kodi-Repository, deine Fassung ist aber neuer und bleibt deshalb im eigenen Repository

*English: new upload targets WebDAV/Nextcloud and S3; drag & drop from Explorer; device manager with names and
automatic Wi-Fi connection; adb.exe is stopped when idle; branding from a logo, custom UI sounds, sources with
content type and scraper, permission check, IPTV source check and add-on bundles for forks; the wizard creates a
restore point before installing (undo last installation), warns about builds for other platforms, resumes
downloads and leaves personal playback history out of builds; wizard: logins & API keys filled into all matching
add-ons, fresher dialogs; Forge: all repositories by genre, keyring for signing keys, "Builds" in the sidebar.*

## 3.6.0 – 2026-10-05

Neues Setup ohne Python-Skripte, große Addons im eigenen Repository, Reiter für Addons, Repository und Wizard –
und der Einrichtungsassistent für Forks.

### 📦 Setup
- **Fertig übersetztes Programm**: `sKulls Forge.exe` statt Python und Quellcode – im Setup steckt keine einzige
  .py-Datei mehr, die Kodi-Vorlagen (Fork-Center, Bildschirmschoner, Wizard) liegen verschlüsselt in einem Archiv
- Update über eine ältere Version: Python, Quellcode und alte Vorlagen-Ordner werden dabei entfernt
- **Arbeitsordner und Cache im Projekt-Ordner** (`Work/`, `Cache/`) statt im Programmordner – werden beim ersten
  Start automatisch verschoben

### 🗂️ Übersichtlicher
- **Addons, Repository und Wizard in Reitern**: Addons (Angaben · Abhängigkeiten · Bauen und testen · Dateien),
  Repository (Repository-Addon · Addons · Adresse und Zweige · Verteilen), Wizard (Addon · Builds · Verteilen ·
  Sicherheit) – das Protokoll bleibt darunter sichtbar
- **Wizards in der Übersicht**: eigene Tabelle mit Builds, Größe, letztem Upload und Hinweisen
- **Symbolstil** wählbar (umrandet, gefüllt, kräftig) für Seitenleiste und Kacheln

### 🧙 Wizard
- **Alles veröffentlichen**: Repository bauen und hochladen → Wizard bauen und hochladen → online prüfen
- **Große Builds über GitHub-Releases** (über 95 MB, bis 2 GB); Uploads mit **Restzeit, Abbrechen und Fortsetzen**
- **Upload-Prüfung**: builds.json und Prüfsummen an der öffentlichen Adresse vergleichen
- **Build-Vergleich** und **„Was ist neu“-Vorschlag** aus dem Unterschied zur letzten Version
- **Gesperrte Repositories** (pflegbare Sperrliste) und Hinweise auf unsichere Quellen
- **Größen-Analyse**: größte Ordner, Addons und Dateien eines Builds mit Tipps zum Platzsparen
- **Projekt duplizieren** und **Teile aus einem anderen Projekt übernehmen** (Farbschema, Kontakt, Save Data …)
- **Als Wizard-Build exportieren**: Fork-Profil → Build-ZIP für klassische Wizards oder den eigenen
- **Symbole im Wizard**: einfarbig im Farbschema, bunte Kacheln oder eigene Bilder (auch ganzer Ordner)
- Im Wizard: **Info-Taste** erklärt jede Kachel; **Log filtern** (Fehler, Begriff, Addon) und **speichern** auf
  USB/Netzwerk, Zugangsdaten auf Wunsch unkenntlich
- Formatierungs-Editor: **Kodis Farbnamen** (alle 139 aus der Farbtabelle) mit Suche

### 📱 Fork
- **Sprachpakete automatisch**: Startsprache und weitere Sprachen kommen beim Build aus dem Kodi-Repository
- **Einrichtungsassistent** beim ersten Start: Sprache, Region, Wetter-Ort, M3U-Adresse, Kindersicherungs-Code –
  Schritte im Forge wählbar, im Fork-Center jederzeit wieder aufrufbar
- **Ersatz-Server** für Updates: Spiegel-Adressen in der update.json, der Fork nimmt bei Ausfall den nächsten
- **Fremd-Repositories durchsuchen**: Addon-Browser für eingebettete repository.*-ZIPs

### 🗂️ Repository
- **Addons über 95 MB auf GitHub**: kommen automatisch in ein GitHub-Release je Addon, das Repository-Addon lädt sie
  von dort (eigener Eintrag addons-release.xml, Bilder weiter aus dem Zweig) – abschaltbar
- **Repository online prüfen**: jeder Zweig und jedes Addon-ZIP nach dem Hochladen

### 🔐 Sicherheit
- **GitHub-Tokens**: Ablaufdatum und zu weite Rechte prüfen (beim Start täglich, Extras, „Verbindung testen“)
- **GitHub Pages aus?** Die Online-Prüfung des Wizards meldet das sofort, statt minutenlang zu warten

### 🔧 Behoben
- Bauen brach ab, wenn ein Build ein eigenes Bild hatte (Ordner icons/ fehlte)
- Start konnte hängen: umbrechende Hinweistexte in nicht sichtbaren Reitern verkleinerten sich endlos
- Formatierungs-Editor: die Farbpalette blitzte nur kurz oben links auf und schloss sich gleich wieder
- Fork-Center: der Begrüßungstext des Einrichtungsassistenten war in Kodis Ja/Nein-Dialog abgeschnitten

*English: new setup with a fully compiled program – no Python scripts left; working folder and cache moved to
the project folder. Repository: add-ons over 95 MB go into GitHub releases automatically. Add-ons, repository and
wizard pages in tabs; wizards in the overview; icon styles. Wizard: publish
everything, big builds via GitHub releases, uploads with remaining time/cancel/resume, online verification, build
comparison and “what's new” suggestion, repository blocklist, size analysis, duplicate/take over projects, export as
wizard build, wizard icons, Info key help and log filter/export in the wizard, Kodi color names. Fork: automatic
language packs, setup assistant on first start, mirror servers for updates, browse third-party repositories.
Security: GitHub token expiry/scope check, repository online check, immediate notice when GitHub Pages is off.
Fixed: colour palette in the formatting editor closed immediately; setup assistant greeting was cut off.*

## 3.5.0 – 2026-10-04

Wizard-Update: alte Builds übernehmen, Binär-Addons passend zum Gerät, Komplett-Backups 1:1, RSS-Laufschrift –
und ein Editor für formatierte Texte.

### ✍️ Formatierungs-Editor
- **✎-Knopf** neben Name, Anbieter, Kurzbeschreibung und Beschreibung (Addons, Repository), bei den Wizard-Feldern
  (dazu *Was ist neu*, Begrüßung, Kontakt) und im Build-Dialog (Name, Beschreibung, *Was ist neu*)
- Bearbeiten wie in Kodi auf dunklem Kodi-Hintergrund: **Fett**, *Kursiv*, **Farbe**, Groß-/Kleinschreibung,
  Zeilenumbruch, Rückgängig/Wiederholen, Quelltext-Ansicht, Vorschau und Hinweise auf fehlerhafte Tags
- **Eigene Farbpalette** (12 Farben), eigene Farben merken, zuletzt benutzte Farben, Farbwähler; Namen bewusst nur
  mit Fett und Farbe
- Für Dateinamen, IDs, Listen und Logs wird die Formatierung entfernt; die `index.html` des Repositorys zeigt sie farbig

### 🧙 Wizard – Builds
- **Aus altem Wizard importieren…**: Build-ZIPs des alten Wizards (sKullsWizard/OpenWizard-Art) mit Name, Version,
  Skin und Kodi-Version, GUI-Paket (`<Name>_guisettings.zip`) und Liste der Binär-Addons übernehmen; der alte
  Wizard bleibt samt Daten draußen
- **Binär-Addons** (PVR, Inputstream …) gibt es je System und CPU in eigener Fassung: sie kommen nicht in den Build,
  der Wizard lädt sie **nach dem Neustart passend zum Gerät** – Windows, Android, macOS, Linux (Kodis Rückfrage wird
  bestätigt, bis zu 3 Versuche). Im Build-Dialog: GUI-Paket, *Nachinstallieren*, *Weglassen*, automatische Erkennung
- **GUI-Fix** auch aus der Datei neben einem lokalen Build
- **📰 RSS-Feed** (Knopf *RSS-Feed…*): Build-News als **Laufschrift auf Kodis Startseite** – je Zeile ein Eintrag mit
  Platzhaltern (`{build}`, `{version}`, `{date}`, `{changelog}` …), Live-Vorschau, Vorgabe „aktueller Stand“,
  „Was ist neu“ und Wizard-Version. `rss.xml` entsteht beim Bauen und wird mit hochgeladen; der Wizard trägt den Feed
  ein (auch nach Build-Installation, Fresh Start, Restore) und hat einen Schalter zum Abschalten

### 💾 Wizard – Backup & Schutz
- **Kompletter Build 1:1**: alle Einstellungen – auch Passwörter, API-Keys, MAC-Adressen und Tokens in Addon-Caches –
  dazu Save Data, Wizard-Einstellungen und welche Addons ausgeschaltet waren; beim Einspielen kommt alles zurück
- Backup von einem **anderen System** (z.B. PC → Android-Box): die Binär-Addons lädt der Wizard passend nach, ihre
  Einstellungen bleiben
- **Windows**: Dateien, die Kodi offen hält (geladene Addons, PVR-Datenbanken, Datenbanken von Diensten, Skin-Grafiken),
  werden trotzdem ersetzt – Binär-Addons und Dienste kurz ausschalten, nachfassen, notfalls nach dem Beenden von Kodi.
  Neue Datenbanken bekommen nie alte SQLite-Begleitdateien
- **Wizard und Repository bleiben immer**: nie gelöscht, nie durch eine ältere Fassung aus einem Build oder Backup
  ersetzt, nie ausgeschaltet – auch nicht in der Wartung

### 🔧 Behoben
- Kodi hing beim Nachinstallieren an seiner eigenen Rückfrage und ließ sich nicht beenden
- Fortschrittsbalken in Skins wie Arctic Zephyr verzerrt (eigener Balken, unabhängig vom Skin)
- Abschlussmeldung mit langer Addon-Liste wurde abgeschnitten
- Pfeil „→“ erschien in manchen Skin-Schriften als Kästchen

### 🌐 Website
- **Ein Download**: das Setup installiert oder entpackt auf Wunsch eine portable Version

*English: formatting editor (bold, italic, colour with its own palette, case, line breaks, source view, preview) for
add-on, repository and wizard texts. Wizard: import builds from the old wizard (GUI package, binary add-on list, old
wizard left out); binary add-ons (PVR, inputstream …) are installed after the restart to match the device; GUI fix from
a local file; RSS feed editor – build news as ticker on Kodi's home screen, uploaded with the wizard and set up
automatically. Complete backups 1:1 with all settings incl. passwords, API keys, MAC addresses, save data, wizard
settings and disabled add-ons; restoring on another system reinstalls binary add-ons; on Windows files Kodi keeps open
are replaced anyway. Wizard and repository are always kept. Fixed: Kodi hanging during reinstall, distorted progress
bar, cut-off final message, arrow glyph. Website: one download (setup with portable option).*

## 3.4.0 – 2026-10-04

Großes Fork-Update: ein eigenes Fork-Center im Fork, Familie & Kiosk, Verteilung und viele neue Werkzeuge.

### 📺 Im Fork – neuer Tab „9. Fork-Funktionen“
- **Fork-Center** (eigener Menüpunkt in den Favoriten): Wartung (Cache, Vorschaubilder, Addons neu laden, Log,
  Startzeit-Analyse), **Sicherung** auf USB-Stick oder Netzwerk und zurück, **Hilfe/FAQ** (DE/EN mit Bildern),
  **Support-Info** mit kurzem Support-Code, **Zurücksetzen** auf den Auslieferungszustand
- **Mitteilungen vom Server** beim Start (`messages.json`, jede nur einmal, DE/EN) – Vorlage im Tool speicherbar
- **Absturzberichte** nur mit Zustimmung an den eigenen Server oder einen Discord-Webhook (Log ohne Zugangsdaten)
- **Speicherpflege-Dienst**: Vorschaubilder ausdünnen, alte Logs löschen, Grenzen im Tool einstellbar
- **Geräteprofile**: Handy, Tablet, TV-Box oder Fire TV erkennen und Oberfläche, Bildwiederholrate und Puffer anpassen
- **Zugangsdaten beim ersten Start abfragen** statt fest ins APK (Passwörter, MAC-Adressen, Portal-Zugänge)
- **Kinderprofil** mit Anmeldebildschirm und ausgeblendeten Menüpunkten, **Bildschirmzeit** pro Tag (mit Code
  verlängerbar), **Kiosk-Modus** (Einstellungen, Addon-Verwaltung, Dateimanager und Beenden gesperrt)
- **Bildschirmschoner** mit Fork-Logo oder Diashow aus eigenen Bildern
- **Autostart** nach dem Einschalten (TV-Boxen; ab Android 10 nur mit „Über anderen Apps einblenden“)
- **App-Name je Sprache**, **Addon-Updates pro Addon sperren**, **externe Player** (`playercorefactory.xml`),
  **RSS-Laufschrift**, **Fernbedienungs-Vorlagen** (Fire TV, Shield, Mi Box, Air-Mouse),
  **advancedsettings.xml** als Formular mit Vorlagen

### 🚚 Updates & Verteilung
- **In-App-Update**: der Fork lädt die neue APK selbst und öffnet den Android-Installer
- **Pflicht-Update** ab einem Version-Code, **Rollback** aus dem Build-Verlauf (gleicher Stand mit höherem Code)
- Download-Seite mit **Fire-TV-Downloader-Anleitung**, **Versionshistorie** und **RSS-Feed** (`feed.xml`)
- **Portal-Seite** mit allen Forks, **Download-Statistik** je Version und CPU-Variante mit Verlauf
- **Benachrichtigung** nach dem Build per Telegram (auch mit APK), Discord oder E-Mail

### 🧰 Werkzeuge (Seite „Werkzeuge“, jetzt scrollbar)
- **APK-Größe** mit Spar-Tipps, **Kodi-Log-Analyse** mit Erklärung und Lösung, **Abhängigkeitsbaum**
  (fehlende rot), **Skin-Einstellungen** beliebiger Skins auslesen und vorbelegen (auch im Tab 6)
- **Kodi-Nightly-Vorschau**: eingebettete Addons gegen die nächste Kodi-Version prüfen
- **Windows-Portable-Fork**: aus demselben Profil ein portables Kodi für Windows (ZIP)
- Geräte: **ADB-Kopplung per QR-Code**, **Bildschirm spiegeln** (scrcpy, falls installiert), **Geräte-Info mit
  Empfehlungen**, **Sicherung vor dem Update** und Daten zurückspielen
- **Paralleles Bauen** mehrerer APKs und **Build-Cache** (Wiederholungs-Builds deutlich schneller)
- **Web-Oberfläche**: Builds im Browser oder vom Handy starten und verfolgen (mit Passwort, standardmäßig nur
  dieser PC)
- Neue Befehle: `apk-size`, `log-check`, `download-stats`, `portal`, `nightly-check`, `win-portable`, `web`

### 🌐 Website
- **Wizard-Rundgang** als Animation, alle Wizard-Bilder neu aus Kodi 21

*English: new “Fork features” tab – Fork Center in the fork (maintenance, backup to USB/network, help/FAQ, support
code, reset), server messages, opt-in crash reports, storage care, device profiles, credentials asked on first start,
kids profile with screen time, kiosk mode, screensaver, autostart, per-language app name, per-add-on update lock,
external players, RSS ticker, remote templates, advancedsettings form. In-app update, mandatory update, rollback,
download page with Fire TV guide, version history and RSS feed, portal page, download statistics, build
notifications (Telegram/Discord/email). New tools: APK size, Kodi log analysis, dependency tree, skin settings,
nightly compatibility check, Windows portable fork, ADB QR pairing, screen mirroring, device info, backup before
update, parallel builds, build cache and a web interface. Website: animated wizard tour.*

## 3.3.1 – 2026-10-04

Backups im Wizard übersichtlicher.

### 💾 Wizard – Backups
- **Kompletter Build ohne Addon-Daten** ist jetzt eine eigene Zeile in der Backup-Liste statt einer Rückfrage beim
  kompletten Backup – die Rückfrage doppelte sich mit „Nur Addons“ und „Addons mit ihren Daten“
- Auch als Art für die **automatischen Backups** wählbar
- Beim **Wiederherstellen** eines Backups ohne Addon-Daten bleiben die vorhandenen Addon-Daten (Einstellungen,
  Anmeldungen) erhalten; ein komplettes Backup ersetzt wie bisher alles

### 🌐 Website
- **Besucherzähler** und **Download-Zähler** im Download-Bereich, Download-Zahl auch auf jeder Download-Karte
- Besuche zählt der Dienst Abacus ohne Cookies und ohne Speicherung im Browser (in `assets/js/config.js` abschaltbar);
  die Datenschutzerklärung beschreibt das in einem eigenen Abschnitt
- Download-Zahlen kommen ohne fremde Anfrage aus `assets/stats.json` – neuer Befehl
  `python main.py site-stats --site <Website-Ordner> --repo <Besitzer/Repo>` liest sie aus den GitHub-Releases
  (Installer `.exe`, Portable `.zip`)

*English: “complete build without add-on data” is now its own row in the backup list instead of a question for the
complete backup, also available for scheduled backups; restoring it keeps the existing add-on data. Website: visitor
counter (Abacus, no cookies) and download counter (from `assets/stats.json`, written by the new `site-stats`
command from the GitHub releases).*

## 3.3.0 – 2026-10-04

Großes Komfort- und Sicherheits-Update für den Wizard.

### 🧙 Wizard – Bedienung
- **Einrichtungsassistent** beim ersten Start (Sprache, automatische Wartung, Save Data, Backups) – jederzeit wieder
  in den Einstellungen
- **Suche** in langen Auswahllisten (Addons, Datenbanken …), Auswahl bleibt über den Filter hinweg erhalten
- **Schnellzugriff**: die drei zuletzt benutzten Werkzeuge liegen auf der Startseite
- **Ansicht**: große Kacheln, kleine Kacheln oder Liste – Vorgabe im Forge, änderbar im Wizard
- **Build-Kacheln mit Fanart** und Abzeichen „Neu“ (14 Tage), „Update“, „Empfohlen“ (im Forge wählbar)
- **Bildergalerie** je Build: Screenshots im Forge hinterlegen, im Wizard mit Links/Rechts blättern
- **Startbild** beim Öffnen (abschaltbar), sanfte Übergänge, fokussierte Kachel leicht vergrößert
- **Downloadzeit** vor der Installation (aus dem letzten Speedtest), „Jetzt ansehen“ beim Build-Update
- Herkunft (Repository) jedes Addons in den Addon-Werkzeugen, „Kodi“ für mitgelieferte Addons

### 🧹 Wizard – Wartung
- **Alles aufräumen mit Auswahl**: Cache, Pakete, Absturzberichte, alte Datenbanken, Vorschaubilder einzeln wählbar,
  Neustart nur wenn nötig
- **Datenbanken**: alle Datenbanken mit Bedeutung und Kodi-Version, unbenutzte (ältere Kodi-Versionen) markiert,
  mit Tipps – benutzte und von Kodi geöffnete werden nie gelöscht
- **advancedsettings.xml von Hand**: Puffer, Lesefaktor, Netzwerk, Wiedergabe, Bildgrößen – mit Tipp zu jedem Wert,
  Warnung bei zu großem Puffer, eigene Einträge möglich
- **Speicher-Assistent**: größte Addon-Daten und Caches einzeln leeren
- **Abhängigkeiten prüfen**: fehlende Module installieren, ausgeschaltete einschalten
- **Ergebnisliste** nach „Alle Addons aktualisieren“ (aktualisiert, neu, fehlgeschlagen)

### 💾 Wizard – Backups
- Build-Backup **mit oder ohne Addon-Daten** (ohne: kleiner und ohne Zugangsdaten), **eigener Name** je Backup
- **Automatische Backups** nach Zeitplan (Art und Anzahl wählbar, nie während der Wiedergabe)
- **Build-Wechsel mit Parken**: vor dem Wechsel wird der bisherige Build als Komplett-Backup geparkt und lässt sich
  später zurückholen
- Fortschritt beim Backup in Schritten mit Dateizähler; zwei Backups in derselben Minute überschreiben sich nicht mehr

### 🔒 Wizard – Sicherheit
- **PIN** (4–8 Ziffern) für Fresh Start, Build-Installation, Wiederherstellen und Löschen – gespeichert nur als Hash
- Bei gefährlichen Fragen ist „Nein“ vorausgewählt
- **Selbstschutz**: der Forge legt Prüfsummen aller Wizard-Dateien bei; ist etwas verändert, warnt der Wizard beim
  Öffnen (Abbrechen, Wizard reparieren, Trotzdem weiter), dazu Selbstprüfung und „Wizard reparieren“ in den
  Einstellungen
- **Passwort automatisch erkannt**: geschützte Builds fragen beim Einspielen nach dem Passwort – jetzt auch bei
  „Build aus Datei“ (`.skz`, der Forge legt die Schutzangaben als `.skz.json` daneben)

### 🛠️ Forge
- Neuer Build: Frage, ob er mit einem Passwort geschützt werden soll; Passwortfelder nur aktiv, wenn geschützt
- Build-Dialog: Fanart, Screenshots für die Galerie, Abzeichen; Projekt: Ansicht des Wizards
- Builds laden Fanart (`fanart/`) und Galerie (`gallery/`) mit hoch, veraltete Bilder werden entfernt

*English: big comfort and security update for the wizard – setup assistant, search in lists, quick access, view
(large/small tiles, list), build tiles with fanart and badges, picture gallery, splash screen, download time;
clean-up with a choice, databases with unused versions marked and tips, advancedsettings.xml by hand with tips, storage
assistant, dependency repair, update result list; build backups with or without add-on data and with a name, scheduled
backups, build switch with parking; PIN for dangerous actions, self-protection with checksums and repair, automatic
password detection also for “build from file”. In the Forge a new build asks whether to protect it with a password.*

## 3.2.0 – 2026-10-04

Passwortschutz für Builds, Build-Info und Update-Hinweise für Wizard und Repository.

### 🧙 Wizard
- **Passwortschutz je Build**: der Forge verschlüsselt den Build (PBKDF2-SHA256 + SHAKE-256, nur Standardbibliothek -
  läuft auf jedem Kodi ab 19, auch Android und macOS); online liegt nur die unlesbare `.skz`-Datei. Das Passwort steht
  nur in den Einstellungen des Forge. Im Wizard: Passwort-Abfrage (falsches Passwort wird erkannt, drei Versuche),
  auf Wunsch merkt sich das Gerät den abgeleiteten Schlüssel für Updates
- **Build-Info** als eigener Menüpunkt: Inhaltsliste des Builds (Version, Erstellungs- und Installationsdatum, Kodi,
  Skin, alle Addons mit Version) im Vergleich zum aktuellen Stand, *Als Textdatei speichern*; vor der Installation
  „Inhalt anzeigen“ (bei ungeschützten Builds)
- **Update-Hinweise**: Wizard-, Repository- und Build-Updates werden angeboten, „Update verfügbar“ in der Kopfzeile,
  Übersicht in den Einstellungen, Benachrichtigung; fehlendes Repository wird zur Installation angeboten
- Im Forge: Inhaltsliste je Build als Text unter `Wizard/<Name>/Build-Info/`, Repository mit Version und Prüfsumme in
  der Build-Liste
- **Hochladen**: veraltete eigene Dateien des Wizards (alte Versionen, eine frühere ungeschützte ZIP) werden auf dem
  Server entfernt - bei FTP/SFTP nur Dateien, die der Forge selbst hochgeladen hat
- Build-Liste behält nach dem Bearbeiten die Auswahl
- Im echten Kodi 21 geprüft: Wizard-Update 1.0.5 → 1.0.6, Repository-Update 1.2.0 → 1.2.1 („Später“ und Installieren),
  geschützter Build mit falschem und richtigem Passwort, Build-Info

*English: password protection per build (encrypted with the standard library only, works on every Kodi from 19; the
password stays in the Forge settings, the device can remember the derived key), build info menu item with the build's
content list compared to the current state and text export, update notices for wizard, repository and build (header,
settings overview, notification), outdated own files are removed from the server on upload.*

## 3.1.0 – 2026-10-04

Wizard und Repository: mehr Kontrolle über Repositories, Updates und Backups.

### 🧙 Wizard
- **Repositories prüfen**: alle Repositories, auch die mit Kodi gelieferten (z.B. das offizielle), jede Adresse
  aller Zweige (Kodi 19/20/21 …) – Ergebnis OK, teilweise oder nicht erreichbar
- **Alle Addons aktualisieren**: Addon-Listen aller Repositories neu laden und jedes verfügbare Update installieren;
  meldet Kodi Updates sonst nur, gilt das nur für diesen Lauf (die Einstellung kommt danach zurück)
- **Neue Backup-Arten**: nur Addons, Addons mit ihren Daten, nur Daten; eingespielte Addons schaltet der Wizard beim
  nächsten Start ein. Zurückspielen wie bisher aus dem Backup-Ordner (auch USB/Netzwerk) oder aus einer Datei
- **Build aus Datei**: lokale Build-ZIP (USB-Stick, Netzwerk, Download-Ordner) ohne Server installieren - andere ZIPs
  werden vor dem Aufräumen abgelehnt
- **Wizard und Repository bleiben** bei Build-Installation, Fresh Start und komplettem Restore immer erhalten: das im
  Forge eingetragene Repository und automatisch das, aus dem der Wizard installiert wurde (aus Kodis Addon-Datenbank,
  nur lesend)
- Im Wizard-Projekt: **Repository** auswählen; ist es im Forge gebaut, liefert der Wizard es mit und installiert es beim
  ersten Start
- Addon-Kacheln zeigen „installiert“; Texte zu Fresh Start nennen Wizard und Repository
- Für alle Systeme, auf denen Kodi läuft (Windows, Android, macOS, Linux): Pfade kommen von Kodi, Kodis eigener Temp-
  und Log-Ordner wird nie gelöscht
- Im echten Kodi 21 geprüft: Repository mitliefern und automatisch installieren, Repositories prüfen, Alle Addons
  aktualisieren, Backup „Nur Addons“, Fresh Start mit erhaltenem Repository

### 🗂️ Repository
- **Offizielle Kodi-Addons markieren** (Spalte *Kodi-Repo*) und auf Wunsch **nicht aufnehmen** (Standard an): nur, wenn
  das offizielle Repository das Addon für jede Kodi-Version des Zweigs anbietet und die eigene Version nicht neuer ist

*English: wizard – check repositories (all, incl. the ones shipped with Kodi, every address of all branches), update
all add-ons (once, even if Kodi only notifies), new backup kinds (add-ons only, add-ons with data, data only),
build from a local file, wizard and its repository are always kept on build installation, fresh start and full
restore; the wizard project can ship the Forge-built repository and install it on first start. Repository – mark
add-ons from the official Kodi repository and leave them out (default).*

## 3.0.0 – 2026-10-04

Aus dem Fork Builder wird die Schmiede für alles rund um Kodi: neuer Name **sKulls Forge**, neue Oberfläche mit
Seitenleiste und die neuen Bereiche **Addons**, **Repository** und **Wizard**.

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
- **Tooltips in allen Tabellen**: abgeschnittene Einträge zeigen beim Überfahren den vollständigen Text; in der
  Übersicht listet „Hinweise“ bei Addons alle Fehler und Warnungen
- **Übersicht** zeigt zusätzlich alle **Repositories** und **Addons** (Version, letzter Build bzw. letzte ZIP,
  Hinweise) – Doppelklick öffnet, „Öffnen und bauen“ / „ZIP bauen“ baut gleich

### 📁 Projekt-Ordner und Upload-Ziele
- Eigene Daten liegen jetzt im **Projekt-Ordner** (Standard `Dokumente\sKulls Forge`, änderbar): gemeinsam
  Kodi-APKs, Images (Icons, Banner, Wallpaper, Splash, Fanart), Addons, Repository (`Repository/<Name>/Build` =
  fertiges Repository), Config (Einstellungen), Presets, Temp, Logs (Protokolle), Wizard (`Wizard/<Name>/`, `Wizard/Source`), Backups und History - außerhalb davon und
  des Programmordners speichert das Tool nichts (auch nicht in %APPDATA%); **je Projekt ein Ordner** `Projects/<Projekt>/` mit Fork-Profil, Keystore
  und Builds
- **Neues Projekt…** (`Strg+N`): Fork-Einstellungen und Keystore wahlweise aus einem anderen Projekt übernehmen
- **Bereinigen / Werkseinstellung** in den Einstellungen: Zwischenspeicher und Protokolle löschen, Einstellungen,
  Sprachdateien, Presets, Projekt-Ordner und alte Daten in den Papierkorb - mit Bestätigung und Gesamtsicherung vorher
- Beim ersten Start: vorhandene Daten aus dem Programmordner **kopieren** (Pfade werden angepasst) oder vorerst
  dort lassen; Gesamtsicherung sichert und stellt den Projekt-Ordner wieder her (auch ältere Sicherungen)
- Übernahme-Dialog beim ersten Start mit **Abbrechen**: nichts wird geändert, beim nächsten Start fragt das Tool erneut
- **Protokolle** liegen im Projekt-Ordner unter `Logs/` (auch `auto.log` der automatischen Builds); alte Protokolle
  aus dem Programmordner werden beim Start dorthin verschoben, bei einem schweren Fehler nennt die Meldung die Logdatei
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

### 🧙 Wizard
- Eigenes **Wizard-Addon** für Kodi 19 und neuer: Builds aus einem Kodi-Ordner (z.B. portables Kodi) oder einer
  fertigen ZIP schnüren - ohne Cache, Vorschaubilder, Pakete, Logs und von Kodi neu aufgebaute Datenbanken
- Bauen erzeugt `builds.json` (Größe, SHA-256), die Build-ZIPs und das Wizard-Addon (Farbschema, Symbole, Logo,
  Kontakt, Save Data); neu gepackt wird nur bei neuer Build-Version
- Im Kodi: Builds installieren (Prüfsumme, erst komplett entpacken, dann aufräumen; Save Data und Whitelist bleiben),
  Wartung, Addon-Werkzeuge, Log-Anzeige, System-Tweaks, Backup/Restore, Fresh Start, Build- und Wizard-Updates
- **Leistung & Speicher** im Wizard: RAM und Speicher als Balken, Vorschlag für Puffer, Lesefaktor, Puffer-Modus,
  Bildgrößen und automatische Wartung (Profile Sparsam/Ausgewogen/Maximal, mit Begründung, Zurücksetzen) - ersetzt
  die bisherige feste Cache-Vorlage
- Im echten Kodi 21 getestet; dabei behoben: Wartung brach unter Windows ab (Cache-Ordner doppelt), Fokus-Fehler
  in den Dialogen (OK-Hinweis war nicht bedienbar), zweites Wizard-Fenster bei der Update-Prüfung, durcheinander
  geratenes Fenster nach „Profil neu laden“
- Ebenfalls im echten Kodi geprüft: Backup erstellen und wiederherstellen, „Alles aufräumen“ und Fresh Start
  (Save Data und Favoriten bleiben); behoben: Backup-Liste zeigte die Art nicht übersetzt und erkannte
  „Addon-Daten“-Sicherungen nicht, Aufräumen zählte unter Windows den benutzten Temp-Ordner und das Log als Fehler
- Deutsche Oberfläche und Addons-Seite im echten Kodi geprüft (Sprachpaket über den Wizard installiert); die
  Addon-Kacheln zeigen jetzt „installiert“
- **Zugangsdaten entfernen** beim Packen (Standard: an): Passwörter, Tokens, API-Schlüssel, MAC-Adressen und
  Anmeldungen aus Addon-Einstellungen, JSON-/INI-Dateien, SQLite-Datenbanken, `guisettings.xml` und Adressen;
  `passwords.xml` sowie Token-/Cookie-Dateien fallen weg - mit Behalten-Liste, Prüf-Lauf „Zugangsdaten prüfen…“
  und Befehl `wizard-check`; vorhandene Builds werden einmal neu gepackt
- Hochladen über die Upload-Ziele (FTP/SFTP oder GitHub), „In Addons übernehmen“ für Repository und Fork,
  Befehle `wizard-build` und `wizard-list`

### 🌐 Projekt-Website
- Statische Website zum Tool (Ordner `sKulls-Forge-Website` neben dem Programmordner) im Stil von ui8.ai/forge:
  Kamerafahrt beim Scrollen, Funktions-Tour mit Screenshots, Farbschemata wie im Tool (Standard sKulls Neon),
  Deutsch/Englisch, Changelog, Download-Bereich („bald verfügbar“), Impressum/Datenschutz und Kodi-Hinweis
- Screenshots mit Demo-Daten per `tools/make_screenshots.py` (alle 8 Farbschemata, Deutsch und Englisch,
  mit Wizard-Ansicht); auf den Bildern stehen nur neutrale Pfade (keine echten Ordner oder Benutzernamen)
- Adresse: https://skullsplitter2026.github.io/sKulls-Forge (auch im Fenster „Über“); der Quellcode ist
  momentan nicht öffentlich

*English: new name sKulls Forge ("Cast in one piece: forks, add-ons and repositories for Kodi"), environment
variables `SKFORGE_…`; new sidebar (Overview, Forks, Add-ons, Repository, Wizard, Settings, Tools, Detail log), new Settings and
Tools pages, scrollable fork tabs; project folder in Documents with data migration; central upload targets (FTP/SFTP/GitHub); own Kodi repository (build, check, upload via FTP/SFTP/GitHub, add to fork); own add-ons (templates, edit, check,
version and changelog, clean ZIP, add to fork/repository, test on the device); the overview also lists repositories and
add-ons; tooltips with the full text in all tables; logs in the project folder (`Logs/`), cancel button in the
first-start migration dialog; project website (scroll camera flight, feature tour, color schemes, DE/EN, changelog,
downloads coming soon); own build wizard add-on (build ZIPs with checksum, safe installation with save data,
maintenance, backup, updates; performance & storage with suggested buffer and image settings; credentials are
removed from builds when packing, with keep list, check run and command `wizard-check`; upload via FTP/SFTP or
GitHub; commands `wizard-build` and `wizard-list`). Website: https://skullsplitter2026.github.io/sKulls-Forge -
the source code is currently not public.*

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
