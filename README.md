<a id="top"></a>

<div align="center">

<img src="resources/logo.png" alt="sKulls Forge" width="160">

# sKulls Forge

### ⚒️ *Aus einem Guss: Forks, Addons und Repositories für Kodi* &nbsp;·&nbsp; *Cast in one piece: forks, add-ons and repositories for Kodi*

<sub>früher *sKulls ForkForge* bzw. *sKulls Kodi Fork Builder* · formerly *sKulls ForkForge* / *sKulls Kodi Fork Builder*</sub>

**Eigene Kodi-Forks aus offiziellen Kodi-APKs – mit Branding, Addons, Einstellungen, Signatur und Installation per ADB**
<br>
**Build your own Kodi forks from official Kodi APKs – with branding, add-ons, settings, signing and ADB install**

![Version](https://img.shields.io/badge/version-2.0.0-2f6fb5?style=for-the-badge)
![Python](https://img.shields.io/badge/python-3.9%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Kodi](https://img.shields.io/badge/Kodi-18%20Leia%20→%2022%20Piers-17B2E7?style=for-the-badge&logo=kodi&logoColor=white)
![Windows](https://img.shields.io/badge/Windows-10%20%2F%2011-0078D6?style=for-the-badge&logo=windows&logoColor=white)
![Android](https://img.shields.io/badge/Android-APK-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![Sprachen](https://img.shields.io/badge/Sprachen-DE%20·%20EN%20·%20%2B%20.po-8a4fff?style=for-the-badge)

### 🌐 [🇩🇪 Deutsch](#de) &nbsp;·&nbsp; [🇬🇧 English](#en) &nbsp;·&nbsp; 📜 [Versionsverlauf / Changelog](CHANGELOG.md)

</div>

---

<a id="de"></a>

# 🇩🇪 Deutsch

<a id="de-inhalt"></a>

## 📑 Inhaltsverzeichnis

- [✨ Überblick](#de-ueberblick)
- [🧩 Unterstützte Kodi-Versionen](#de-versionen)
- [⚙️ Voraussetzungen](#de-voraussetzungen)
- [🚀 Installation & Start](#de-start)
- [📖 How to use – Anleitung](#de-howto)
  - [⚡ Der erste Fork in 10 Schritten](#de-howto-erster-fork)
  - [🔄 Ein Update veröffentlichen](#de-howto-update)
  - [📦 Einen Build aus einem Wizard-Backup machen](#de-howto-backup)
  - [📺 Ein IPTV-Fork mit PVR IPTV Simple](#de-howto-iptv)
  - [🚀 Automatisch veröffentlichen (GitHub/FTP)](#de-howto-publish)
  - [🤝 Ein Profil weitergeben](#de-howto-teilen)
  - [🧙 Mit Assistent oder Vorlage starten](#de-howto-assistent)
  - [⏰ Nachts automatisch bauen lassen](#de-howto-auto)
  - [💾 Auf einen neuen PC umziehen](#de-howto-umzug)
- [🧰 Alle Features im Detail](#de-features)
  - [📦 Tab 1 – APKs & Fork](#de-f-apks)
  - [📝 Tab 2 – Manifest](#de-f-manifest)
  - [🔤 Tab 3 – Strings](#de-f-strings)
  - [🎨 Tab 4 – Branding](#de-f-branding)
  - [🧩 Tab 5 – Addons](#de-f-addons)
  - [🎛️ Tab 6 – Kodi-Einstellungen](#de-f-kodi)
  - [🔐 Tab 7 – Signatur](#de-f-signatur)
  - [🏗️ Tab 8 – Build & Installation](#de-f-build)
  - [🔎 Tab Detail-Log](#de-f-detaillog)
  - [🔒 Kindersicherung](#de-f-kindersicherung)
  - [🗂️ Profile](#de-f-profile)
  - [🧙 Assistent & Profil-Vorlagen](#de-f-assistent)
  - [🕘 Build-Verlauf](#de-f-verlauf)
  - [⏰ Automatische Builds](#de-f-automatik)
  - [🔔 Neue Kodi-Version](#de-f-kodiupdate)
  - [📋 Build-Report](#de-f-report)
  - [🖥️ Oberfläche & Komfort](#de-f-oberflaeche)
  - [🧭 Übersicht aller Forks](#de-f-uebersicht)
  - [🧩 Eigene Addons](#de-f-addons)
  - [🗂️ Eigenes Repository](#de-f-repository)
  - [💾 Gesamtsicherung](#de-f-gesamtsicherung)
  - [⌨️ Tastatur, Rückgängig & Barrierefreiheit](#de-f-tastatur)
  - [🩺 Diagnosepaket](#de-f-diagnose)
  - [🌐 Sprachen: Auswahl, Sprachdateien & Sprach-Server](#de-f-sprachen)
- [💻 Kommandozeile (CLI)](#de-cli)
- [📁 Ordnerstruktur](#de-ordner)
- [🔧 Wie der Fork technisch funktioniert](#de-technik)
- [🩺 Fehlerbehebung](#de-faq)
- [⚖️ Rechtliches](#de-rechtliches)

---

<a id="de-ueberblick"></a>

## ✨ Überblick

**sKulls Forge** macht aus einer offiziellen Kodi-APK eine eigene App, die **neben dem Original-Kodi**
installiert werden kann – mit eigenem Namen, eigenem Icon, fest eingebauten Addons und fertig vorkonfigurierten
Einstellungen. Alles läuft über eine grafische Oberfläche (Deutsch/Englisch, hell/dunkel) oder über die Kommandozeile.

| | Highlights |
|---|---|
| 🏷️ | Neuer **Package-Name** – der Fork läuft parallel zum Original und hat eigene Daten |
| 🎨 | **Branding**: App-Icon, Android-TV-Banner, Splash-Screen, Vendor-Logo – automatisch in alle Größen skaliert |
| 🧩 | **Addons & Repositories** fest einbetten, Addon-**Einstellungen vorbelegen**, fehlende **Abhängigkeiten automatisch laden** |
| 🎛️ | **Kodi-Einstellungen** vorgeben: Skin, Sprache, Region, Addon-Updates, Cache, Quellen, Favoriten, Userdata |
| 📦 | **Wizard-/Kodi-Backups** als Vorlage übernehmen |
| ✂️ | **APK verkleinern** – nicht benötigte Kodi-Addons entfernen |
| 🔐 | **Signatur** mit Keystore-Verwaltung, Zertifikat-Schutz für Updates und automatischer **Keystore-Sicherung** |
| 🔄 | **Update-Builds** mit automatischem Version-Code und **Update-Hinweis im Fork** (update.json) |
| 📲 | **Installation per ADB** (USB/WLAN) und **Gerätetest** mit Absturzprüfung und Screenshot |
| 🧱 | **Multi-ABI-Batch-Build** (arm64-v8a + armeabi-v7a in einem Durchgang) |
| 🏪 | Addons **direkt aus dem Kodi-Repository** – auch Binär-Addons (PVR, inputstream) passend zu arm64/armv7 |
| 🏠 | **Estuary-Hauptmenü** gestalten, **Tastenbelegung** festlegen, **Setup vom Gerät übernehmen** |
| 🧬 | **Build-Varianten** (z.B. „Kids“), **Upload** per FTP/SFTP/GitHub mit **QR-Codes**, **Live-Log** und **Build-Vergleich** |
| 🗂️ | **Profile** speichern, als **ZIP weitergeben**, per **CLI** automatisiert bauen |
| 🔒 | **Kindersicherung** (Kodi-Master-Lock), **Kompatibilitätsprüfung** der Addons, **Kodi-Einstellungen-Explorer** |
| 🧙 | **Einsteiger-Assistent**, **Profil-Vorlagen** (IPTV, Kids, Minimal, Mediacenter), **Build-Verlauf** |
| ⏰ | **Automatische Builds** per Windows-Aufgabenplanung, **Download-Seite**, „**Was ist neu**“ im Fork, Installation auf **allen Geräten** |
| 🛠️ | **Eigene Addons** aus Vorlagen anlegen, bearbeiten, prüfen (Python-Version für Kodi 18–22, Syntax, Abhängigkeiten), sauber verpacken und per ADB testen · **eigenes Repository** bauen und per FTP/SFTP/GitHub hochladen |
| 🧭 | **Übersicht aller Forks** (dazu Repositories und Addons) als Startseite, verschlüsselte **Gesamtsicherung**, **Rückgängig/Wiederholen**, **Tastenkürzel**, **Diagnosepaket**, **weitere Sprachen** per Sprachdatei |
| ✨ | Moderne Oberfläche: **Startbildschirm**, **Symbole** an Tabs, Menüs und Knöpfen, **8 Farbschemata** (Hell und Dunkel wie bisher, dazu sKulls Neon, Mitternacht, Graphit, Nord, Sand, Mint) |

[⬆️ nach oben](#top)

---

<a id="de-versionen"></a>

## 🧩 Unterstützte Kodi-Versionen

Geprüft mit je einem Fork (arm64, deutsches Sprachpaket eingebettet, Userdata-Vorlage) auf einem Android-16-Gerät:

| Kodi | Build + Signatur | Ersteinrichtung | Läuft auf Android 16 |
|---|:---:|:---:|:---:|
| **21.3 Omega** | ✅ | ✅ Python 3 | ✅ |
| **20.5 Nexus** | ✅ | ✅ Python 3 | ✅ |
| **19.5 Matrix** | ✅ | ✅ Python 3 | ⚠️ schwarzes Bild\* |
| **18.9 Leia** | ✅ | ✅ Python 2 | ⚠️ schwarzes Bild\* |
| **22 Piers** | ✅ vorbereitet (Preset `kodi22`) | ✅ | – |

\* Ein Kontroll-Fork, bei dem nur der Package-Name geändert war, verhält sich genauso – das liegt an Kodi 18/19
selbst, nicht am Fork. Auf älteren Geräten laufen diese Versionen normal. Der Build warnt bei Kodi 18/19 automatisch.
**Für aktuelle Geräte Kodi 20 oder neuer verwenden.**

> 💡 Kodi 18 kennt die Einstellung „Addon-Updates aus jedem Repository“ nicht – das Tool warnt dann nur. Alle
> generierten Hilfs-Addons (Ersteinrichtung, Update-Hinweis) laufen unter Python 2 **und** Python 3.

[⬆️ nach oben](#top)

---

<a id="de-voraussetzungen"></a>

## ⚙️ Voraussetzungen

- 🐍 **Python 3.9+** und `pip install -r requirements.txt` (Pillow für Branding und Vorschaubilder; optional
  `qrcode` für QR-Codes, `paramiko` für SFTP-Upload und `cryptography` für die verschlüsselte Gesamtsicherung)
- ☕ **Java JDK** (für `keytool` und die mitgelieferten JARs)
- 🪟 **Windows 10/11** (Kern-Funktionen laufen auch unter Linux/macOS, ADB-Tools liegen aber als `.exe` bei)

Alle weiteren Werkzeuge liegen im Ordner `resources/` und haben **Vorrang** vor PATH bzw. Android SDK:

| Werkzeug | Datei | Zweck |
|---|---|---|
| 🧰 apktool 2.11.1 | `apktool.jar` | APK entpacken und neu bauen (direkt per Java gestartet) |
| ✍️ apksigner | `apksigner.jar` | Signieren und Signatur prüfen |
| 📐 zipalign | `zipalign.exe` | APK vor dem Signieren ausrichten |
| 🔏 uber-apk-signer 1.3.0 | `uber-apk-signer.jar` | alternative Signatur-Methode |
| 🔍 aapt2 | `aapt2.exe` | Build-Report, Original-Grafiken (Package, Version, SDK, Icons) |
| 📲 adb | `adb.exe` + `AdbWin*.dll` | Installation, Start, Gerätetest |

> 🛠️ `python main.py tools` bzw. *Einstellungen → Werkzeuge* (`Strg+,`) zeigt, welche Werkzeuge gefunden wurden.

[⬆️ nach oben](#top)

---

<a id="de-start"></a>

## 🚀 Installation & Start

```bash
pip install -r requirements.txt
python main.py
```

- ▶️ `python main.py` (oder Doppelklick auf `main.py`) startet die GUI **ohne Konsolenfenster**.
- 🐞 `python main.py --console` lässt die Konsole für die Fehlersuche offen.
- 🧹 Beim Start räumt das Tool alte Reste in `temp/` auf; beim Beenden wird der eigene **ADB-Server beendet**
  (andere adb-Installationen, z.B. von Android Studio, bleiben unberührt).
- 💾 Das zuletzt benutzte Profil wird beim Start automatisch geladen.

[⬆️ nach oben](#top)

---

<a id="de-howto"></a>

## 📖 How to use – Anleitung

<a id="de-howto-erster-fork"></a>

### ⚡ Der erste Fork in 10 Schritten

1. **📥 Kodi holen** – *Extras → Kodi-APK herunterladen…*: ABI wählen (`arm64-v8a` = aktuelle Geräte,
   `armeabi-v7a` = ältere/32-bit TV-Boxen), Version markieren, *Herunterladen & hinzufügen*. Die APK landet in
   `input/` und in der Liste von **Tab 1**. Für einen Batch-Build einfach beide ABIs laden.
2. **🏷️ Fork benennen** – in **Tab 1** *Package-Name* (z.B. `skulls.fusion.build`, muss sich von
   `org.xbmc.kodi` unterscheiden) und *App-Name* eintragen. Leere Felder übernehmen die Werte der Original-APK;
   Version und SDK werden beim Einlesen automatisch vorbelegt.
3. **🎨 Branding** – in **Tab 4** Icon (512×512 PNG), TV-Banner (16:9), Splash-Screen (1920×1080) und
   Vendor-Logo wählen. Links sehen Sie die Original-Grafiken, rechts die neuen – Maus darüber zeigt die Großansicht.
4. **🧩 Addons einbetten** – in **Tab 5** Addon- oder Repository-ZIPs bzw. -Ordner hinzufügen. *fest* = immer aktiv,
   *optional* = vom Nutzer abschaltbar. Für ein deutsches Kodi das Addon `resource.language.de_de` mit einbetten.
5. **⚙️ Addon-Einstellungen vorbelegen** (optional) – Addon markieren, *Einstellungen vorbelegen…* (oder
   Doppelklick): z.B. Portal-URL und MAC eines IPTV-Addons eintragen, *Übernehmen*.
6. **🎛️ Kodi einstellen** – in **Tab 6** Sprache (z.B. `resource.language.de_de`), Region, Skin,
   Addon-Updates, *unbekannte Quellen*, Cache-Vorlage, Quellen/Favoriten und ggf. eine Userdata-Vorlage festlegen.
7. **🔐 Keystore anlegen** – in **Tab 7** Store-Passwort (min. 6 Zeichen) und Key-Alias eintragen,
   *Keystore erstellen*. **Passwort notieren** und mit *Keystore sichern unter…* auf einen USB-Stick/in die Cloud kopieren.
8. **💾 Profil speichern** – *Datei → Profil speichern* (`Strg+S`). Damit lässt sich der Fork jederzeit neu bauen.
9. **🏗️ Bauen** – in **Tab 8** *▶ FORK BUILD (alle APKs)*. Im Log stehen alle Schritte, am Ende der Build-Report.
   Die fertigen APKs liegen in `output/` (`…_signed.apk` + `…_report.txt`).
10. **📲 Installieren & testen** – Gerät per USB-Debugging oder WLAN (*IP[:Port]* → *Verbinden*) verbinden,
    *Gerätetest (letzte APK)* klicken: das Tool installiert, startet und beobachtet den Fork 60 Sekunden und zeigt
    das Ergebnis mit Screenshot. Alternativ vor dem Build *Danach per ADB installieren* (+ *und starten*) bzw.
    *oder Gerätetest (60 s)* anhaken.

> ✅ Beim ersten Start des Forks kopiert das Ersteinrichtungs-Addon die Vorlagen ins Profil und meldet
> „Einrichtung abgeschlossen – bitte Kodi neu starten“. Ab dem zweiten Start ist alles vollständig aktiv.

<a id="de-howto-update"></a>

### 🔄 Ein Update veröffentlichen

1. **Tab 1 → Updates des Forks**: *Version-Code bei jedem Build automatisch erhöhen* anhaken.
2. Optional für den **Update-Hinweis im Fork**: *update.json-Adresse* eintragen, z.B.
   `https://meinserver.de/fork/update.json`, dazu *Änderungen (DE / EN)* (kurzer Text, Englisch optional). *APK-Download-Ordner* nur ausfüllen,
   wenn die APKs woanders liegen als die update.json.
3. **Denselben Keystore** verwenden – das Tool prüft das anhand des gemerkten Zertifikats und bricht sonst ab.
4. *FORK BUILD* – der Version-Code wird erhöht und das Profil automatisch gespeichert. Neben den APKs entsteht
   eine `update.json`.
5. `update.json` **und** die APKs auf den Server laden. Installierte Forks prüfen beim Start (höchstens alle
   12 Stunden) und bieten die neue Version zum Herunterladen an.

<a id="de-howto-backup"></a>

### 📦 Einen Build aus einem Wizard-Backup machen

1. In Kodi (bzw. mit einem Wizard) ein **Backup als ZIP** erstellen.
2. **Tab 6 → Aus Backup-ZIP importieren…** und das ZIP wählen. Das Tool erkennt die Struktur (`userdata/`,
   `addons/`, auch in Unterordnern wie `Backup/.kodi/`) und zeigt, was es gefunden hat.
3. Auswählen: *Userdata als Vorlage*, *Addons einbetten*, *geänderte Einstellungen übernehmen*.
   Thumbnails, Datenbanken, Caches, Logs und gerätespezifische Einstellungen werden automatisch weggelassen.
4. Das Backup wird nach `profiles/<Profil>_backup/` entpackt und in das Profil eingetragen → Profil speichern → bauen.

> 📲 **Noch einfacher:** Kodi (oder den Fork) ganz normal am Gerät einrichten und dann **Tab 6 → Vom Gerät
> übernehmen…** – das Tool holt die Kodi-Daten per ADB und übernimmt sie genauso wie ein Backup.

<a id="de-howto-iptv"></a>

### 📺 Ein IPTV-Fork mit PVR IPTV Simple

1. **Tab 5 → Aus Kodi-Repository…**, nach `iptvsimple` suchen, *PVR IPTV Simple Client* markieren → *Hinzufügen*.
   Das Addon steht als „Kodi-Repo“ in der Liste und wird beim Build **passend zu Kodi-Version und CPU** (arm64/armv7)
   jeder APK geladen – inklusive `inputstream.adaptive`/`ffmpegdirect`/`rtmp`.
2. Addon markieren → **Einstellungen vorbelegen…** → *URL für M3U-Wiedergabeliste* (und ggf. EPG) eintragen.
3. Optional **Tab 4 → Hauptmenü**: Startfenster *TV (Sender)*, nicht benötigte Menüpunkte ausblenden.
4. Bauen – der Fork startet direkt mit den Sendern.

<a id="de-howto-publish"></a>

### 🚀 Automatisch veröffentlichen (GitHub/FTP)

1. **Tab 8 → Upload**: Methode wählen – *GitHub-Release* (Repository `owner/repo` + Token mit Schreibrecht auf
   Releases) oder *FTP/FTPS/SFTP* (Server, Benutzer, Passwort, Zielordner).
2. Bei GitHub **GitHub-Adresse als update.json übernehmen** klicken – der Fork prüft dann
   `https://github.com/<owner>/<repo>/releases/latest/download/update.json`.
3. *Nach jedem erfolgreichen Build hochladen* anhaken (oder später *Letzten Build jetzt hochladen*).
4. Build starten: APKs, `update.json` und QR-Codes landen im Release bzw. auf dem Server; bei GitHub zeigen die
   Links automatisch auf die Downloads dieses Releases.

<a id="de-howto-teilen"></a>

### 🤝 Ein Profil weitergeben

- **Exportieren**: *Datei → Profil als ZIP exportieren…* – packt Profil, Grafiken, Addons, Userdata-Vorlage und
  zusätzliche Dateien in ein ZIP. Kodi-APKs und Keystore nur auf Wunsch, **Passwörter nie**.
- **Importieren**: *Datei → Profil aus ZIP importieren…* – entpackt nach `profiles/<Name>/` und lädt das Profil.
  Fehlende Kodi-APKs meldet das Tool (über *Extras → Kodi-APK herunterladen* nachladen), ohne Keystore
  im Tab Signatur einen wählen oder erstellen.

> ⚠️ Den Keystore nur an vertraute Personen weitergeben – wer ihn hat, kann Updates Ihres Forks signieren.

<a id="de-howto-assistent"></a>

### 🧙 Mit Assistent oder Vorlage starten

- **Assistent**: *Datei → Assistent: neuer Fork…* führt in 6 Schritten zum fertigen Fork – Kodi-APK (mit Download),
  App-Name/Package/Version, Icon und Hintergrundbild, Vorlage, Keystore (vorhandenen verwenden oder neu anlegen),
  Zusammenfassung. *Fertig* speichert das Profil unter `profiles/<name>.json` und baut auf Wunsch sofort.
  Sprache und Region sind auf Deutsch voreingestellt.
- **Vorlage**: *Datei → Neues Profil aus Vorlage…* setzt ein neues Profil nach Vorlage auf. APKs, Ausgabeordner,
  Keystore und das deutsche Sprachpaket des aktuellen Profils bleiben erhalten. Bei *Kids* fragt das Tool direkt
  nach dem Code der Kindersicherung.

<a id="de-howto-auto"></a>

### ⏰ Nachts automatisch bauen lassen

1. Profil fertig einrichten und speichern, Passwörter in Tab 7 speichern, ggf. Upload in Tab 8 einrichten.
2. *Extras → Automatisch bauen (Zeitplan)…*: Uhrzeit, täglich oder *nur wöchentlich (sonntags)*, *danach hochladen*,
   *Varianten mitbauen* → **Einrichten / ändern**.
3. Windows startet dann `main.py auto <Profil>` ohne Fenster: neue Kodi-Version **derselben Hauptversion** und
   Addon-Updates übernehmen, bauen, hochladen. Das Protokoll steht in `Logs/auto.log`, jeder Build im **Build-Verlauf**.

> 💡 Der Rechner muss zur eingestellten Zeit laufen. Eine neue Hauptversion (z.B. Kodi 22) wird nur mit
> `python main.py auto <Profil> --major` übernommen – so gibt es keine Überraschungen.

<a id="de-howto-umzug"></a>

### 💾 Auf einen neuen PC umziehen

1. Auf dem alten PC *Datei → Gesamtsicherung erstellen…*: ein Passwort (mind. 8 Zeichen) festlegen, optional
   die Kodi-APKs mitsichern, Datei speichern (z.B. auf einen USB-Stick).
2. Auf dem neuen PC das Tool installieren (siehe [Installation & Start](#de-start)) und
   `pip install cryptography` ausführen.
3. *Datei → Gesamtsicherung wiederherstellen…*, Datei wählen, Passwort eingeben. Das Tool zeigt Datum und Umfang
   und fragt, ob es wiederherstellen soll.
4. Fertig: Profile, Keystores, gespeicherte Passwörter, Build-Verlauf und alle verwendeten Dateien sind da.
   Dateien, deren alter Ordner auf dem neuen PC fehlt, liegen in `restored/` – die Profile zeigen automatisch dorthin.

[⬆️ nach oben](#top)

---

<a id="de-features"></a>

## 🧰 Alle Features im Detail

<a id="de-f-apks"></a>

### 📦 Tab 1 – APKs & Fork

| Feature | Erklärung |
|---|---|
| 📚 **APK-Liste / Batch-Build** | Mehrere Original-APKs (z.B. arm64-v8a + armeabi-v7a) werden in einem Durchgang zu Forks gebaut. Die ABI wird aus der APK erkannt, fehlende Dateien werden markiert. |
| 📥 **Kodi herunterladen** | Versionsliste direkt von `mirrors.kodi.tv` für arm64-v8a, armeabi-v7a und x86 – optional mit Beta/RC. Download mit Fortschrittsanzeige nach `input/`, bereits vorhandene Dateien werden nicht erneut geladen. |
| ℹ️ **APK-Info** | Package, Version (Name + Code), minSdk, targetSdk und Anzahl Permissions der gewählten APK. Leere Felder werden damit vorbelegt (Version-Code = Original + 1). |
| 🧾 **Presets** | Permissions, Features und SDK-Werte für Kodi 21 (`kodi21`) und Kodi 22 (`kodi22`) – eigene Presets speichern und löschen (`presets/`). |
| 🏷️ **Fork-Eigenschaften** | Profil-Name, Package-Name (wird auf gültige Java-Syntax geprüft), App-Name, Version-Name/-Code, minSdk/targetSdk. |
| 🔘 **Optionen** | `android:debuggable`, `allowBackup`, Installation bevorzugt auf externem Speicher (`preferExternal`), Telemetrie-Meta-Daten entfernen. |
| 🔄 **Update-Build** | *Version-Code bei jedem Build automatisch erhöhen*: neuer Code = max(bisheriger, Original-APK) + 1. Wird nur bei mindestens einem erfolgreichen Build verbraucht und danach im Profil gespeichert. |
| 🔔 **Update-Hinweis im Fork** | Mit *update.json-Adresse* bettet der Build das Service-Addon `service.<package>.update` ein. Es prüft beim Start (höchstens alle 12 h) die Datei, wählt die APK passend zur CPU (arm64/armv7/x86) und öffnet den Download im Browser des Geräts. Deutsch/Englisch je nach Kodi-Sprache. |
| 🆕 **„Was ist neu“** | Nach einem Update zeigt der Fork beim ersten Start einmalig den Änderungstext an (Einträge mit `;` trennen → Aufzählung). Nicht bei der Erstinstallation. |
| 🇩🇪🇬🇧 **Änderungen DE / EN** | Zwei Felder *Änderungen (DE / EN)*: Der englische Text (optional) erscheint bei englischem Kodi im Update-Hinweis und in „Was ist neu“, auf der englischen Download-Seite und im GitHub-Release. Leer = überall der deutsche Text. |
| 🌍 **Download-Seite** | Neben der `update.json` entsteht eine `index.html` (handytauglich) mit Icon, Version, Änderungen, Download-Knopf je CPU, Größe, SHA-256 und QR-Code – direkt hochladbar. Oben rechts umschaltbar: **Design** (Automatisch/Hell/Dunkel) und **Sprache** (DE/EN); ohne Auswahl folgt die Seite der System- und Browsersprache, die Auswahl merkt sich der Browser. |
| 🛡️ **Abgesicherte update.json** | Der Update-Hinweis im Fork akzeptiert **nur HTTPS** (Adresse der update.json und der APK) und zeigt die Downloadgröße. Der Build warnt bei `http://`-Adressen. |
| 🌐 **update.json** | Der Build schreibt sie neben die APKs – mit Version, Änderungstext, Datum, Download-Link, **SHA-256-Prüfsumme** und **Größe** je ABI: |

```json
{
  "version_code": 2103002,
  "version_name": "21.3",
  "changelog": "Neue Addons; Kindersicherung",
  "changelog_en": "New add-ons; parental lock",
  "apks": {
    "arm64-v8a": "https://meinserver.de/fork/Fork_v21.3_arm64-v8a_signed.apk",
    "armeabi-v7a": "https://meinserver.de/fork/Fork_v21.3_armeabi-v7a_signed.apk"
  },
  "sha256": { "arm64-v8a": "9f2c…", "armeabi-v7a": "41ab…" },
  "size": { "arm64-v8a": 84213760, "armeabi-v7a": 78114304 }
}
```

<a id="de-f-manifest"></a>

### 📝 Tab 2 – Manifest

| Feature | Erklärung |
|---|---|
| 🔑 **Permissions** | Zusätzliche `uses-permission`-Einträge hinzufügen. |
| 🧱 **Features** | Zusätzliche `uses-feature`-Einträge (z.B. `android.software.leanback`). |
| 🏷️ **Meta-Daten** | `meta-data` in `<application>` setzen (Wert oder `@Resource`) oder aus der APK entfernen. |

<a id="de-f-strings"></a>

### 🔤 Tab 3 – Strings

| Feature | Erklärung |
|---|---|
| 📖 **Strings laden** | Liest alle `strings.xml` der APK (alle Sprachen) ohne vollständiges Entpacken. |
| ✏️ **Bearbeiten** | Werte ändern, neue Strings anlegen, Strings entfernen, Änderungen zurücknehmen. Filter und Ansicht „nur Änderungen“. Der App-Name wird in Tab 1 gesetzt. |

<a id="de-f-branding"></a>

### 🎨 Tab 4 – Branding

| Feature | Erklärung |
|---|---|
| 🖼️ **App-Icon** | Ersetzt alle Launcher-Icons (`mipmap`/`drawable`, `assets/media/icon*`) in Originalgröße und -format. Gibt es kein Icon, werden mipmap-Icons angelegt. Hinweis bei adaptiven Icons (Android 8+). |
| 📺 **Android-TV-Banner** | Ersetzt das Leanback-Banner (16:9). |
| 🌅 **Splash-Screen** | Ersetzt `splash.jpg`/`applaunch_screen.png`. |
| 🏢 **Vendor-Logo** | Logo in Kodi (ca. 465×128, transparent). |
| 🔍 **Original-Vorschau** | Die Original-Grafiken der gewählten APK als Vorschaubild, **Maus darüber = Großansicht** (transparente Bereiche auf Schachbrett). |
| 📐 **Auto-Skalierung** | Bilder werden mittig zugeschnitten und auf jede vorhandene Größe skaliert. |
| 📁 **Weitere Dateien** | Beliebige Dateien/Ordner an einen Zielpfad in der APK kopieren – Modus *replace* (ersetzen) oder *add* (zusammenführen). |
| 🏠 **Hauptmenü (Estuary)** | 12 Menüpunkte ausblenden (Filme, Serien, Musik, Musikvideos, TV, Radio, Spiele, Addons, Bilder, Videos, Favoriten, Wetter), **Startfenster** (z.B. *TV (Sender)*), **Farbschema** und ein **eigenes Hintergrundbild** – es ersetzt den eingefärbten Estuary-Hintergrund, das Muster darüber wird ausgeblendet. Gilt nur mit Estuary. |

<a id="de-f-addons"></a>

### 🧩 Tab 5 – Addons

| Feature | Erklärung |
|---|---|
| ➕ **Addons einbetten** | ZIPs, entpackte Ordner oder alle ZIPs eines Ordners. Sie landen in `assets/addons/<id>` und werden in `system/addon-manifest.xml` eingetragen (sonst deaktiviert Kodi sie). `__pycache__` wird weggelassen. |
| 🔒 **fest / optional** | *fest* = System-Addon (immer aktiv), *optional* = aktiv, aber abschaltbar. |
| 🔗 **Abhängigkeiten** | Beim Markieren werden die benötigten Addons angezeigt (`?` = nicht in der Liste). |
| ⚙️ **Einstellungen vorbelegen** | Formular aus `resources/settings.xml` des Addons – **altes** (bis Kodi 18) und **neues** Format (ab Kodi 19), mit Kategorien, deutschen/englischen Beschriftungen, Auswahllisten, Schaltern, Passwortfeldern, Suche, „nur geänderte“ und Zurücksetzen. Gespeichert werden nur abweichende Werte. |
| 🛡️ **Doppelt abgesichert** | Die Werte werden (1) als Standardwerte ins eingebettete Addon geschrieben und (2) als `addon_data/<id>/settings.xml` beim ersten Start angelegt – sie **bleiben auch nach einem Addon-Update** aus dem Repository erhalten. Formularwerte haben Vorrang vor einer Userdata-Vorlage. |
| ⬇️ **Abhängigkeiten automatisch laden** | Fehlende Pflicht-Abhängigkeiten werden beim Build aus dem **offiziellen Kodi-Repository** geladen – aus dem Repo, das in der APK hinterlegt ist (Kodi 21 → omega, Kodi 18 → leia …), rekursiv und mit Android-Plattformprüfung. Zu alte Versionen werden gemeldet. Cache in `cache/repo/`. |
| ✂️ **APK verkleinern** | Entfernt mitgelieferte Kodi-Addons samt Manifest-Eintrag und nativer Bibliothek. Abhängigkeiten verbleibender Addons, Skin und Sprache des Profils, die Gamepad-Navigation und die eingebauten Bildschirmschoner bleiben immer erhalten. |
| 🏪 **Aus Kodi-Repository** | Durchsuchbare Liste des offiziellen Repos (passend zur Kodi-Version der APK, Filter nach Art). Gewählte Addons werden als `repo://<id>` gespeichert und **bei jedem Build** frisch geladen – passend zur Kodi-Version **und CPU-Architektur** jeder APK (Batch-Build arm64 + armv7 bekommt jeweils die richtige Bibliothek). |
| ⚙️ **Binär-Addons** | PVR-Clients, `inputstream.*`, Audio-Decoder usw.: die native Bibliothek kommt – wie bei den mitgelieferten Kodi-Addons – nach `lib/<abi>/`, der Rest nach `assets/addons/`. Auch als lokales ZIP; passt dessen Plattform nicht zur APK, gibt es eine Warnung. |
| 🔄 **Updates prüfen** | Sucht neuere Versionen der eingebetteten Addons im offiziellen Kodi-Repo **und** in allen im Profil eingebetteten Fremd-Repositories (nur Ordner, die zur Kodi-Version passen) und lädt sie auf Wunsch als ZIP neben die bisherige Quelle. |
| 🧪 **Kompatibilität prüfen** | Prüft **vor dem Build** jedes Addon gegen jede Kodi-APK des Profils: benötigte Kodi-Schnittstellen (`xbmc.python`, `xbmc.gui`, `xbmc.addon` …) – „Addon ist zu neu“ (z.B. Python-3-Addon in Kodi 18) bzw. „zu alt“ – und ob Binär-Addons für Android gebaut sind. Läuft auch bei jedem Build automatisch mit (Warnungen im Log und Report). |

**Kategorien zum Verkleinern:**

| Kategorie | Inhalt | Ersparnis ca. |
|---|---|---|
| 🖐️ Skin Estouchy | Touch-Skin (bis Kodi 19) | 4,6 MB |
| 🌦️ Wetter-Icons | `resource.images.weathericons.default` | 4,7 MB |
| 🌐 Web-Oberfläche | `webinterface.default` (Browser-Fernbedienung) | 4,3 MB |
| 🎮 Spiele-Controller-Profile | `game.controller.*` außer `default` | 1,7 MB |
| 🎵 Musik-Visualisierungen | `visualization.*` | je nach APK |
| 🌙 Bildschirmschoner | zusätzliche `screensaver.*` | je nach APK |
| 🌍 Sprachpakete | weitere `resource.language.*` außer Englisch + gewählter Sprache | je nach APK |

> 📊 Beispiel Kodi 21.3 arm64: ca. 16 MB unkomprimiert weniger. Die tatsächliche Ersparnis steht im Build-Report.

<a id="de-f-kodi"></a>

### 🎛️ Tab 6 – Kodi-Einstellungen

| Feature | Erklärung |
|---|---|
| 🎨 **Skin** | Standard-Skin (leer = Estuary). Andere Skins in Tab 5 einbetten. |
| 🌍 **Sprache** | z.B. `resource.language.de_de` – das Sprach-Addon muss eingebettet sein (außer `en_gb`). |
| 🗺️ **Region** | Name wie in Kodis Regionaleinstellungen, z.B. *Deutschland*. |
| 🔁 **Addon-Updates** | *Automatisch – jedes Repository* · *Automatisch – nur offizielle Kodi-Repos* (Standard) · *Aus*. |
| 🔓 **Unbekannte Quellen** | Standardmäßig erlauben (nötig für Fremd-Repos). |
| 🚫 **Versionsprüfung aus** | Entfernt `service.xbmc.versioncheck` aus dem Manifest – keine Update-Hinweise auf das Original-Kodi. |
| 🚀 **Cache-Vorlage** | Puffer fürs Streaming – ab Kodi 21 als `filecache.*`-Einstellungen, davor in `advancedsettings.xml` (eine vorhandene aus der Vorlage wird ergänzt). |
| ➕ **Weitere Einstellungen** | Beliebige Setting-ID = Standardwert, z.B. `videoplayer.adjustrefreshrate = 2`. Existiert eine ID nicht, warnt der Build. |
| 🔎 **Einstellungen durchsuchen** | Explorer für **alle** Kodi-Einstellungen der gewählten APK (ca. 300) – wie in Kodi nach Bereich und Kategorie sortiert, mit Beschriftung (deutsch, wenn das Sprachpaket eingebettet ist), Hilfetext, Stufe (Einfach … Experte), Auswahllisten und Schaltern. Android-Standardwerte werden berücksichtigt, Einstellungen, die es unter Android nicht gibt (DirectX, VideoToolbox, Laufwerke), ausgeblendet. Geänderte Werte landen in *Weitere Einstellungen*. |
| 🔒 **Kindersicherung** | Kodi-Master-Lock mit Zahlen-Code – siehe [Kindersicherung](#de-f-kindersicherung). |
| 📂 **Quellen** | Editor für `sources.xml`: Videos, Musik, Bilder, **Dateimanager** (z.B. Repository-URL für „Aus ZIP installieren“), Programme, Spiele. Eine sources.xml aus der Vorlage wird ergänzt, gleiche Namen ersetzt. |
| ⭐ **Favoriten** | Editor für `favourites.xml` mit Name, Aktion und Bild. *Aktion erzeugen* baut für ein eingebettetes Addon den passenden Befehl (`ActivateWindow(…)`, `RunScript(…)`, `RunAddon(…)`). |
| 🗃️ **Userdata-Vorlage** | Ordner wie `special://profile`: `advancedsettings.xml`, `favourites.xml`, `RssFeeds.xml`, `Lircmap.xml` übernimmt Kodi direkt; alles andere (`sources.xml`, `keymaps/`, `addon_data/` …) kopiert das Ersteinrichtungs-Addon. `guisettings.xml`, `Database/`, `Thumbnails/` werden ignoriert. |
| 📦 **Backup-Import** | Übernimmt ein Kodi-/Wizard-Backup (ZIP): Userdata ohne Caches, Addons und die geänderten Werte aus `guisettings.xml` (Skin, Sprache, Region, unbekannte Quellen werden den passenden Feldern zugeordnet; Bildschirm-, Audiogerät- und Systemwerte werden ausgelassen). |
| 📲 **Vom Gerät übernehmen** | Kodi oder einen Fork am Gerät einrichten, App auswählen – das Tool holt `userdata` und `addons` per ADB (`tar`, ohne Thumbnails/Datenbanken/Paket-Cache; Ausweichweg `adb pull`) und importiert sie wie ein Backup. |
| 🎮 **Tastenbelegung** | Keymap-Editor: Bereich (überall, Hauptmenü, Video-Vollbild, Live-TV …), Taste (Menü, Farbtasten, Info, Kanal ± … oder eigener Name), kurz/lang gedrückt, Aktion (`ContextMenu`, `ActivateWindow(…)`, `RunAddon(…)`, `noop` …). Ergebnis: `keymaps/fork_keymap.xml` im Profil. |

**Cache-Vorlagen:**

| Vorlage | Speicher | Lesefaktor | Puffermodus | für |
|---|---|---|---|---|
| Kodi-Standard | – | – | – | unverändert |
| 🚀 Streaming stark | 512 MB | 10× | alle Dateisysteme | ab 3 GB RAM (Shield, aktuelle Handys) |
| ⚖️ Streaming mittel | 256 MB | 5× | alle Dateisysteme | 2 GB RAM |
| 🐢 Schwache Geräte | 96 MB | 4× | alle Dateisysteme | 1 GB RAM (Fire TV Stick) |

> ℹ️ Kodi reserviert etwa das Dreifache des eingestellten Speichers im RAM.

<a id="de-f-signatur"></a>

### 🔐 Tab 7 – Signatur

| Feature | Erklärung |
|---|---|
| 🗝️ **Keystore** | Vorhandenen Keystore (`.jks`, `.keystore`, `.p12`) wählen oder neu erstellen (RSA 2048, 10 000 Tage, frei wählbarer DName). *Aliases anzeigen* liest den Keystore aus. |
| 🔑 **Passwörter** | Werden nur in `config/settings.json` gespeichert – **nie im Profil**. Für die CLI auch per Umgebungsvariable. Bei PKCS12 gilt das Store-Passwort auch als Key-Passwort. |
| ✍️ **Signatur-Methode** | *zipalign + apksigner* (empfohlen) oder *uber-apk-signer*. Schemas v1 (Android < 7), v2 (7+), v3 (9+), v4 (11+, `.idsig`). |
| 🧬 **Zertifikat-Schutz** | Der SHA-256-Fingerabdruck wird beim ersten Build im Profil gemerkt. Ein späterer Build mit einem **anderen Keystore bricht ab** – ein solches Update ließe sich nicht über die installierte App installieren. *Zertifikat zurücksetzen* nur bei Absicht. |
| 💾 **Automatische Sicherung** | Jeder neue bzw. geänderte Keystore wird nach `backups/keystores/` kopiert (mit Infodatei: Alias, Fingerabdruck – ohne Passwort). |
| 🧳 **Externe Sicherung** | *Keystore sichern unter…* kopiert ihn z.B. auf einen USB-Stick. Bis dahin erinnert jeder Build-Report daran; der Status steht direkt im Tab. |
| 🛠️ **Werkzeuge** | Status aller Werkzeuge mit Pfad, eigener apktool-Pfad, *Suchen* und *Erneut prüfen*. |

<a id="de-f-build"></a>

### 🏗️ Tab 8 – Build & Installation

| Feature | Erklärung |
|---|---|
| ▶️ **FORK BUILD** | Komplette Pipeline für alle APKs: Entpacken → Anpassen → Bauen → zipalign/Signieren → Report. *Nur ausgewählte APK* baut eine einzelne. Abbrechen jederzeit über die Statusleiste. |
| 🪜 **Einzelschritte** | 1 Entpacken, 2 Anpassen, 3 Bauen, 4 Signieren – zum Nachvollziehen oder manuellen Eingreifen. |
| 📲 **Danach installieren** | *Danach per ADB installieren* (+ *und starten*). Beim Batch-Build wird automatisch die APK passend zur CPU des Geräts gewählt. |
| 📱📺 **Alle Geräte** | Mit *alle Geräte* wird nach dem Build auf **jedem verbundenen Gerät** installiert bzw. der Gerätetest ausgeführt – z.B. Handy (arm64) und TV-Box (armv7) gleichzeitig, jedes mit der passenden APK. CLI: `--device all`. |
| 🕘 **Build-Verlauf** | Knopf *Build-Verlauf…* – siehe [Build-Verlauf](#de-f-verlauf). |
| 🩺 **Gerätetest** | Installiert, startet (Start-Activity per Paketmanager, Handy **und** Android-TV) und beobachtet den Fork 60 s: läuft der Prozess, Absturzmeldungen im Logcat, Fehler und Ersteinrichtung im `kodi.log`, Screenshot. Erkennt gesperrte Bildschirme. Ergebnis als `*_devicetest.txt` + `.png` neben der APK. |
| 🔌 **ADB** | Geräteliste, WLAN-Verbindung (*IP[:Port]*), letzte APK installieren, APK wählen und installieren, Starten, Deinstallieren. Klare Hinweise bei typischen Installationsfehlern. |
| 🧬 **Build-Varianten** | Aus einem Profil zusätzlich Varianten bauen (z.B. „Kids“): eigener Package-Name, App-Name, Icon, Sprache, **Addons weglassen**, zusätzliche Kodi-Einstellungen. Gleicher Version-Code und Keystore; Ausgabe und Update-Adressen im Unterordner der Variante (bei GitHub: `update-<variante>.json` im selben Release). |
| ☁️ **Upload** | FTP, FTPS, SFTP (`pip install paramiko`) oder **GitHub-Release** (Release wird angelegt bzw. ersetzt, Links in `update.json` zeigen auf die Release-Downloads). Automatisch nach dem Build oder per *Letzten Build jetzt hochladen*. Passwort/Token nur in `config/settings.json`. |
| 🔳 **QR-Codes** | Zu jeder APK ein `…_qr.png` mit dem Download-Link (sobald eine Download-Adresse bekannt ist) – zum Abscannen mit dem Handy. Benötigt `pip install qrcode`. |
| 📜 **Log** | Alle Ausgaben farbig (Fehler, Warnungen, Erfolg), löschen und speichern. |

<a id="de-f-detaillog"></a>

### 🔎 Tab Detail-Log

Unten in der Seitenleiste (`Strg+9`). Alle Vorgänge mit Uhrzeit – Build-Ausgaben, Werkzeug-Aufrufe, Warnungen, Fehler. Filter nach Stufe
(DEBUG/INFO/WARNUNG/FEHLER), Suchfeld, automatisches Scrollen, *Speichern…* und *Log-Ordner öffnen*.
Dauerhaft in `Logs/forge.log` im Projekt-Ordner (ab INFO, rotierend 3 × 1 MB).

📡 **Live vom Gerät**: `kodi.log` (per `tail -F`) oder den Logcat der laufenden App direkt im Detail-Log mitlesen –
Fehler und Warnungen farbig, mit Suche und Filter. Package leer = Package des Forks.

🔍 **Builds vergleichen** (*Extras*): zwei APKs gegenüberstellen – Version, Größe, Addons (neu/geändert/entfernt),
Kodi-Standardeinstellungen, Dateien der Ersteinrichtung, native Bibliotheken – mit Vorschlag für den
Änderungstext (*Als Änderungstext übernehmen* → Tab 1). Ergebnis als `…_vergleich.txt`.

<a id="de-f-kindersicherung"></a>

### 🔒 Kindersicherung

**Tab 6 → Kindersicherung…** richtet den **Master-Lock von Kodi** ein – derselbe Schutz wie in Kodi unter
*Einstellungen → Profile → Allgemein*.

| Feature | Erklärung |
|---|---|
| 🔢 **Zahlen-Code** | 4 bis 10 Ziffern, zweimal einzugeben. Gespeichert wird nur die **MD5-Prüfsumme** – wie in Kodi selbst. |
| 🧱 **Bereiche** | Einstellungen, Addon-Verwaltung, Dateimanager, Programme/Addons, Videos, Musik, Bilder, Spiele – einzeln wählbar. |
| 🚪 **Beim Start** | Optional fragt Kodi den Code schon beim Start ab. |
| 🔁 **Robust** | Kodi überschreibt `profiles.xml` beim Beenden mit dem Stand im Speicher. Das Ersteinrichtungs-Addon schreibt die Sperre daher beim Start **und** nach dem letzten Speichern von Kodi, bis Kodi mit aktiver Sperre startet – **aktiv ab dem zweiten Start**. |
| 🧒 **Vorlage „Kids“** | Die Profil-Vorlage *Kids* aktiviert die Sperre und fragt direkt nach dem Code. |

> ⚠️ **Code nicht vergessen** – ohne ihn hilft nur Neuinstallieren (Daten gehen verloren). Der Nutzer kann die Sperre
> mit dem Code in Kodi ändern oder aufheben.

<a id="de-f-profile"></a>

### 🗂️ Profile

| Feature | Erklärung |
|---|---|
| 💾 **Speichern / Öffnen** | Alle Tabs zusammen bilden ein Profil (`profiles/*.json`), `Strg+N`/`Strg+O`/`Strg+S`. Ungespeicherte Änderungen werden beim Schließen abgefragt. |
| 🧭 **Portable Pfade** | Pfade im Projektordner werden relativ gespeichert – das Projekt kann umbenannt oder verschoben werden. |
| 🙈 **Ohne Passwörter** | Passwörter stehen nie im Profil. |
| 🗜️ **Als ZIP exportieren / importieren** | Profil mit allen Grafiken, Addons, Userdata-Vorlage und Dateien in einer ZIP – APKs und Keystore optional. |

<a id="de-f-assistent"></a>

### 🧙 Assistent & Profil-Vorlagen

**Einsteiger-Assistent** (*Datei → Assistent: neuer Fork…*): 6 Schritte – ① Kodi-APK (mit Download) ② App-Name,
Package-Name, Version ③ Icon und Hintergrundbild ④ Vorlage ⑤ Keystore (vorhandenen verwenden oder neu erstellen,
inkl. automatischer Sicherung) ⑥ Zusammenfassung mit *Profil speichern und sofort bauen*.

**Profil-Vorlagen** (*Datei → Neues Profil aus Vorlage…*, auch im Assistenten):

| Vorlage | Inhalt |
|---|---|
| 📺 **IPTV-Box** | PVR IPTV Simple + inputstream.adaptive aus dem Kodi-Repo, Start im TV, Cache mittel, unnötige Menüpunkte und Addons weg |
| 🧒 **Kids** | Kindersicherung für Einstellungen, Addons und Dateimanager, TV/Radio/Addons im Menü ausgeblendet |
| 🪶 **Minimal** | So klein wie möglich: alle Verkleinerungs-Kategorien, schlankes Hauptmenü, keine Kodi-Versionsprüfung |
| 🎬 **Mediacenter** | Für die eigene Mediathek: großer Cache, automatische Bildwiederholrate, alle Menüpunkte |

APKs, Ausgabeordner, Keystore und das deutsche Sprachpaket des aktuellen Profils werden übernommen.

<a id="de-f-verlauf"></a>

### 🕘 Build-Verlauf

Jeder erfolgreiche Build wird mit dem **kompletten Profilstand** in `history/<Profil>/` gespeichert (Zeit,
Version, Code, APKs mit ABI/Größe/Report, Änderungstext). *Extras → Build-Verlauf…* bzw. der Knopf in Tab 8 zeigt die
Liste: **Report öffnen**, **Ordner öffnen**, **Stand laden** (Einstellungen von damals in die Oberfläche, noch nicht
gespeichert) oder **Neu bauen** (diesen Stand sofort bauen – z.B. um eine ältere Version wiederherzustellen).

<a id="de-f-automatik"></a>

### ⏰ Automatische Builds

*Extras → Automatisch bauen (Zeitplan)…* legt eine Aufgabe in der **Windows-Aufgabenplanung** an (Ordner
„sKulls Forge“) – täglich oder wöchentlich (sonntags) zur gewählten Uhrzeit, optional mit Upload und
Varianten. Der Dialog zeigt, ob und wann die Aufgabe eingerichtet ist; *Entfernen* löscht sie wieder.

Ablauf von `main.py auto`: neue Kodi-Version derselben Hauptversion laden und im Profil eintragen → Addon-Updates
laden → Version-Code erhöhen (falls aktiviert) → bauen (ggf. mit Varianten) → hochladen → Profil speichern.
Protokoll: `Logs/auto.log`. Die Keystore-Passwörter und Upload-Zugänge kommen aus `config/settings.json`.

<a id="de-f-kodiupdate"></a>

### 🔔 Neue Kodi-Version

Das Tool prüft **einmal täglich** im Hintergrund, ob es für die Kodi-APKs des Profils eine neuere stabile Version
gibt, und zeigt sie gelb in der Kopfzeile. Ein Klick darauf (oder *Extras → Nach neuer Kodi-Version suchen*) bietet an:
**Ja** = herunterladen, im Profil ersetzen und neu bauen · **Nein** = nur herunterladen und ersetzen ·
**Abbrechen**. Bei einer neuen Hauptversion gibt es einen zusätzlichen Hinweis.

<a id="de-f-report"></a>

### 📋 Build-Report

Neben jeder APK liegt `…_report.txt` mit: Größe, Package, App-Name, Version, SDK, ABI, Start-Activity
(+ Android TV), Signatur-Prüfung mit Schemas, Addon-Update-Modus, nachgeladene Abhängigkeiten, vorbelegte
Addon-Einstellungen, Cache-Vorlage, Quellen/Favoriten, Update-Hinweis, APK-Ersparnis, Zertifikat-Fingerabdruck,
eingebettete Addons, gesetzte Standard-Einstellungen, Userdata und **alle Warnungen**.

<a id="de-f-oberflaeche"></a>

### 🖥️ Oberfläche & Komfort

| Feature | Erklärung |
|---|---|
| 🧭 **Seitenleiste** | Links stehen die Bereiche **Übersicht**, **Forks** (die Tabs 1–8), **Addons**, **Repository** und **Wizard**, unten **Einklappen**, **Einstellungen**, **Werkzeuge** und **Detail-Log**. Eingeklappt bleiben nur die Symbole (Name als Tooltip). Bei schmalem Fenster (unter 1360 Pixel) klappt sie automatisch ein; Tabs, die nicht ganz ins Fenster passen, lassen sich scrollen. *Wizard* ist noch im Aufbau und zeigt, was geplant ist. |
| ⚙️ **Einstellungen** | `Strg+,`: *Bereinigen / Werkseinstellung* (Zwischenspeicher, Protokolle, Einstellungen, Projekt-Ordner – mit Papierkorb und vorheriger Gesamtsicherung), Farbschema, Startbildschirm, Seitenleiste, Sprache und Sprach-Server, **Projekt-Ordner** (anzeigen, ändern, Ordner anlegen, Daten übernehmen), **Upload-Ziele** (FTP, FTPS, SFTP, GitHub – mit *Verbindung testen*; Fork-Upload und Repository wählen nur noch Ziel und Unterordner), Werkzeuge (apktool-Pfad, gefundene Programme), Suche nach neuen Kodi-Versionen beim Start, Ordner öffnen. |
| 🧰 **Werkzeuge** | Alle Helfer als Kacheln: Gesamtsicherung, Diagnosepaket, Kodi-APK herunterladen, neue Kodi-Version prüfen, Build-Verlauf, Builds vergleichen, Zeitplan, Profil teilen, Ordner. |
| 🎨 **Farbschemata** | *Einstellungen*, *Ansicht → Farbschema* oder das ☀-Symbol oben rechts: **System** (folgt der Windows-Einstellung live), die ursprünglichen Designs **Hell** und **Dunkel** sowie **sKulls Neon**, **Mitternacht**, **Graphit**, **Nord** (dunkel) und **Sand**, **Mint** (hell). Dunkle Schemata bekommen eine dunkle Titelleiste. |
| ✨ **Symbole** | Tabs, Menüeinträge und die wichtigsten Knöpfe haben Symbole (Windows-Symbolschrift Segoe Fluent Icons) – scharf in jeder Größe und immer in der Farbe des Schemas. Hauptaktionen wie **FORK BUILD** sind in der Akzentfarbe hervorgehoben. |
| 🖼️ **Startbildschirm** | Beim Start erscheint das sKulls-Logo mit Name, Slogan, Version und Fortschritt. Abschaltbar über *Ansicht → Startbildschirm anzeigen*. Das Logo ist auch Fenstersymbol und steht im Kopfbereich. |
| 🌐 **Sprache** | Die **Sprachauswahl** oben rechts (oder *Ansicht → Sprache*) schaltet die komplette Oberfläche **sofort** um – Eingaben bleiben erhalten. Beim ersten Start wird die Windows-Sprache übernommen, falls es sie gibt. Details: [Sprachen](#de-f-sprachen). |
| 🪟 **Fenster** | Alle Dialoge öffnen mittig über dem Hauptfenster. |
| 🖱️ **Tooltips in Tabellen** | Ist ein Eintrag in einer Tabelle abgeschnitten, zeigt die Maus darüber den vollständigen Text – in allen Tabellen und Dialogen. In der Übersicht zeigt die Spalte *Hinweise* bei Addons zusätzlich alle Fehler und Warnungen. |
| ❓ **Hilfe** | *About → Hilfe* (`F1`) mit Kurzanleitung, *About → Tastenkürzel* (`Umschalt+F1`), *About → About* mit Version und gefundenen Werkzeugen. |
| 🧹 **Aufräumen** | `temp/` wird automatisch geleert, der ADB-Server beim Beenden gestoppt. |

<a id="de-f-uebersicht"></a>

### 🧭 Übersicht aller Forks

Die **Übersicht** (erster Eintrag der Seitenleiste) ist die Startseite des Tools. Sie zeigt alle Profile aus `profiles/` (auch importierte
in Unterordnern) auf einen Blick:

| Spalte / Kachel | Inhalt |
|---|---|
| 🏷️ **Fork, App / Package, Version** | Profilname, App-Name, Package-Name, Version-Name und -Code |
| 🧩 **Kodi** | Kodi-Version und CPU-Varianten der Original-APKs, z.B. *21.3 (arm64, armv7)* |
| 🕘 **Letzter Build** | aus dem Build-Verlauf (*noch nie*, wenn es noch keinen gibt) |
| ⏰ **Zeitplan** | nächster automatischer Build aus der Windows-Aufgabenplanung |
| 🔔 **Neues Kodi** | neuere stabile Kodi-Version auf dem Mirror (gelb markiert) |
| ⬇️ **Downloads** | Summe der APK-Downloads aller GitHub-Releases (nur mit GitHub-Upload) |
| ⚠️ **Hinweise** | Probleme (fehlende Kodi-APK oder Keystore, kein Package-Name – rot markiert) und Merkmale (Update-Hinweis, Upload, Kindersicherung, Varianten) |

Oben stehen Kennzahlen (Anzahl Forks, zuletzt gebaut, aktive Zeitpläne, neue Kodi-Versionen, Forks mit Problemen,
Repositories, Addons). Das geladene Profil ist fett. **Öffnen** (Doppelklick/Enter), **Öffnen und bauen**,
**Build-Verlauf…**, **Ausgabe-Ordner**, **Zeitplan…** und **Aktualisieren**. Lokale Werte erscheinen sofort, Zeitplan
und Online-Daten kommen im Hintergrund dazu.

Darunter stehen **Repositories** (Version, Anzahl Addons, zuletzt gebaut, Upload-Ziel, Hinweise wie fehlende
Addon-Quellen) und **Addons** aus dem Addons-Ordner (Version, Kodi-Versionen, letzte ZIP, erster Fehler bzw. Hinweis wie
*noch keine ZIP* oder *ZIP ist älter als die Version im Ordner*). *Öffnen* / Doppelklick springt in den Bereich,
*Öffnen und bauen* bzw. *ZIP bauen* baut gleich.

<a id="de-f-addons"></a>

### 🧩 Eigene Addons

In der Seitenleiste unter **Addons** entstehen eigene Kodi-Addons. Jedes Addon ist ein Ordner in `Addons/<addon-id>/`
(dort holen es auch Fork und Repository ab), fertige ZIPs landen in `Addons/ZIPs/<addon-id>-<version>.zip`.

| Schritt | Erklärung |
|---|---|
| ✨ **Neu aus Vorlage…** | Video-Plugin (`plugin.video.…`), Programm-Script (`script.…`), Dienst (`service.…`), Kontextmenü (`context.…`) oder Bibliothek (`script.module.…`). Angelegt werden `addon.xml`, lauffähiger Beispielcode (Python 2 und 3), `settings.xml`, Sprachdateien Englisch/Deutsch, `changelog.txt` und ein Symbol. Die ID wird aus Art und Name vorgeschlagen. |
| 📥 **Übernehmen…** | Vorhandenes Addon als ZIP oder Ordner in den Addons-Ordner holen (z.B. ein angepasstes `pvr.stalker`) – ohne `.git`, `__pycache__`, `.pyc`. |
| 📝 **Angaben** | Name, Version, Anbieter, Kurzbeschreibung, Beschreibung, Neuigkeiten, Lizenz, Webseite, Quellcode und die Kodi-Version (setzt `xbmc.python`: Kodi 18 = 2.26.0, Kodi 19+ = 3.0.0, Kodi 20+ = 3.0.1). *Speichern* schreibt die `addon.xml` – Erweiterungen, weitere Sprachen und Kommentare bleiben erhalten. |
| 🔗 **Abhängigkeiten** | Hinzufügen, bearbeiten (Mindestversion, optional) und entfernen. Die Spalte *Stand* zeigt, ob das Addon im Addons-Ordner liegt, zu Kodi gehört oder aus einem Repository kommen muss. *Online prüfen* sucht fehlende im offiziellen Kodi-Repository. |
| 🔢 **Version erhöhen…** | Neue Version mit Änderungen (eine je Zeile): Eintrag oben in `changelog.txt` und wahlweise in `<news>`. |
| 🔎 **Prüfen** | `addon.xml`, ID, Version, Name/Anbieter, fehlende Programmdateien und Bilder, passende Python-Version für die gewählte Kodi-Version (*Prüfen für*), **Python-Syntax** aller Dateien, typische Python-2-Reste (`xbmc.translatePath`, `iconImage=`, `has_key`), Abhängigkeiten, Sprachordner, Bildgrößen, Reste wie `.git` und Größe. |
| 📦 **ZIP bauen** | Prüft und baut eine saubere ZIP (Wurzelordner = Addon-ID). Gleicher Inhalt = *unverändert*; anderer Inhalt bei gleicher Version wird gemeldet (Kodi würde kein Update sehen). Fehler brechen ab. |
| 📺 **Zum Fork / Repository** | Trägt das Addon (die ZIP der aktuellen Version, sonst den Ordner) in Tab 5 des geladenen Fork-Profils bzw. in das geöffnete Repository ein. |
| 📱 **Auf dem Gerät testen** | *ZIP aufs Gerät* legt die ZIP in den Download-Ordner (Kodi: *Aus ZIP-Datei installieren*). *Direkt installieren* kopiert das Addon per ADB in die gewählte Kodi-App (*Suchen* findet alle Kodi-Apps auf dem Gerät) und ersetzt eine vorhandene Fassung – mit Rückfrage. *Kodi neu starten* und *Kodi-Log live* (im Detail-Log) helfen beim Testen. Ein neues Addon muss man in Kodi einmal aktivieren. |
| 📂 **Dateien** | Alle Dateien des Addons; Doppelklick öffnet eine Datei mit dem Standardprogramm. |

<a id="de-f-repository"></a>

### 🗂️ Eigenes Repository

In der Seitenleiste unter **Repository** entsteht ein eigenes Kodi-Repository, aus dem Kodi deine Addons installiert
und automatisch aktualisiert. Das Projekt liegt in `Repository/<Name>/`, das Ergebnis in `Repository/<Name>/Build/`.

| Schritt | Erklärung |
|---|---|
| 🧩 **Repository-Addon** | ID (muss mit `repository.` beginnen), Name, Version (*Version erhöhen*), Anbieter, Beschreibung, Symbol und Fanart. Das Repository-Addon wird automatisch erzeugt. *Vorhandenes übernehmen…* liest ein bestehendes Repository-Addon ein (ID, Name, Adresse, Zweige) und erhöht die Version, damit Kodi das Update erkennt. |
| 🌐 **Adresse** | Öffentliche `https`-Adresse des Ausgabe-Ordners. Bei GitHub Pages füllt *Adresse aus GitHub übernehmen* sie aus `owner/repo` und Zielordner aus. |
| 🌿 **Zweige** | Ein Zweig für alle Kodi-Versionen oder *Kodi 18 + 19 trennen*: `zips` für Kodi 19 und neuer (Python 3, Prüfung per SHA-256) und `leia` für Kodi 18 (Python 2, MD5). Jedes Addon kann in allen oder nur in bestimmten Zweigen stehen (*Zweige…*). |
| 📦 **Addons** | Ordner oder ZIPs hinzufügen, *Alle aus Ordner* oder *Aus Fork übernehmen*. Die ZIPs werden sauber neu gepackt (Wurzelordner = Addon-ID, ohne `.git`, `__pycache__`, `.pyc`), Bilder aus `<assets>` werden daneben abgelegt. |
| 🔎 **Prüfen** | Addon-ID und Version, Python-Version passend zum Zweig (z.B. Python-3-Addon im Kodi-18-Zweig), fehlende Bilder. Nach dem Bauen zeigt die Spalte *Stand*: neu, aktualisiert, unverändert oder **Inhalt geändert** (gleiche Version, aber anderer Inhalt – Kodi würde kein Update sehen). |
| 🏗️ **Bauen** | `addons.xml` + `.md5` je Zweig, je Addon `<id>-<version>.zip` mit `.md5` und `.sha256`, Repository-ZIP zum Installieren und eine `index.html` (für *Aus ZIP-Datei installieren* über eine Kodi-Quelle). Ältere Versionen bleiben bis zur eingestellten Anzahl erhalten. |
| ⬆️ **Hochladen** | FTP, FTPS, SFTP (nur geänderte Dateien) oder **GitHub**: alle Änderungen landen in *einem* Commit im gewählten Branch und Ordner – passend für GitHub Pages. Optional werden alte Dateien im GitHub-Ordner entfernt. Passwort/Token nur in `config/settings.json`. |
| 📺 **Zum Fork hinzufügen** | Trägt das Repository-Addon in Tab 5 des geladenen Fork-Profils ein (eine ältere Version derselben ID wird ersetzt). |

> 💡 Kommandozeile: `python main.py repo-build <projekt> [--upload]` und `python main.py repo-list`.

<a id="de-f-gesamtsicherung"></a>

### 💾 Gesamtsicherung

*Datei → Gesamtsicherung erstellen…* packt **alles, was das Tool braucht**, in eine Datei (`.skbackup`):

| Enthalten | Details |
|---|---|
| 🗂️ Profile, Presets, Build-Verlauf, Sprachdateien | Ordner `profiles/`, `presets/`, `history/`, `lang/` |
| 🔐 Keystores | `backups/keystores/` und jeder Keystore, auf den ein Profil verweist – auch außerhalb des Projekts |
| ⚙️ Einstellungen | `config/settings.json` **mit** Keystore- und Upload-Passwörtern |
| 🖼️ Verwendete Dateien | Grafiken, Addons, Userdata-Vorlagen und zusätzliche Dateien der Profile (auch außerhalb des Projekts) |
| 📦 Kodi-APKs | optional (lassen sich sonst neu herunterladen) |

- 🔒 **Verschlüsselt** mit AES-256-GCM, Schlüssel per scrypt aus dem Passwort (mind. 8 Zeichen). Ohne Passwort ist
  nichts lesbar – auch nicht, welche Dateien enthalten sind. Veränderte oder beschädigte Dateien werden erkannt.
- ♻️ **Wiederherstellen** (*Datei → Gesamtsicherung wiederherstellen…*): Nach dem Passwort zeigt das Tool Datum und
  Umfang. Vorhandene Dateien, die sich unterscheiden, werden vorher nach `backups/restore_<Zeit>/` verschoben,
  gleiche übersprungen. Dateien von außerhalb des Projekts kommen an ihren alten Ort – fehlt der Ordner (neuer PC),
  landen sie in `restored/` und Profile/Einstellungen werden angepasst. Danach lädt das Tool Einstellungen und Profil neu.
- 💻 CLI: `python main.py backup ZIEL.skbackup [--apks]` und `python main.py restore DATEI.skbackup` (Passwort per
  Abfrage oder Umgebungsvariable `SKFORGE_BACKUP_PASS`).

<a id="de-f-tastatur"></a>

### ⌨️ Tastatur, Rückgängig & Barrierefreiheit

**Rückgängig / Wiederholen** (*Bearbeiten*, `Strg+Z` / `Strg+Y`): Jede Änderung am Profil – Eingaben, Häkchen,
Listen, Dialoge wie Quellen oder Kindersicherung, geladene Stände aus dem Build-Verlauf – lässt sich zurücknehmen
(bis zu 50 Schritte). Das Tool springt dabei in den Tab, in dem die Änderung war, und nennt ihn in der Statusleiste.
Beim Öffnen eines anderen Profils beginnt der Verlauf neu.

| Taste | Aktion | | Taste | Aktion |
|---|---|---|---|---|
| `Strg+N` / `Strg+O` | Neues Projekt / Profil öffnen | | `F5` | FORK BUILD (alle APKs) |
| `Strg+S` / `Strg+Umschalt+S` | Speichern / unter… | | `Umschalt+F5` | nur ausgewählte APK |
| `Strg+Z` | Rückgängig | | `F6` | Gerätetest (letzte APK) |
| `Strg+Y` / `Strg+Umschalt+Z` | Wiederholen | | `F7` | letzte APK installieren |
| `Strg+0` | Übersicht | | `Esc` | laufende Aufgabe abbrechen |
| `Strg+1` … `Strg+8` | Forks: Tab 1 bis 8 | | `Strg+Umschalt+H` | Build-Verlauf |
| `Strg+9` | Detail-Log | | `Strg+Umschalt+D` | Kodi-APK herunterladen |
| `Strg+Tab` / `Strg+Umschalt+Tab` | nächster / vorheriger Tab | | `F1` / `Umschalt+F1` | Hilfe / Tastenkürzel |
| `Alt` + Buchstabe | Menü öffnen (unterstrichen) | | `Strg+Q` | Beenden |
| `Strg+,` | Einstellungen | | | |

Alle Felder, Häkchen und Knöpfe sind per `Tab`/`Umschalt+Tab` und Leertaste erreichbar, das Feld mit dem Fokus ist
farbig umrandet. In Dialogen schließt `Esc` den Dialog.

<a id="de-f-diagnose"></a>

### 🩺 Diagnosepaket

*About → Diagnosepaket erstellen…* (oder `python main.py diagnose`) erzeugt ein ZIP für den Support: Systeminfo
(Windows, Python, Java, Pakete), Werkzeug-Status, Logs, das Build-Log des Fensters, die letzten 5 Build-Reports und
3 Gerätetests, Einstellungen und das aktuelle Profil. **Automatisch bereinigt**: Passwörter, Tokens, Upload-Zugänge,
geheime Addon-Einstellungen (Passwort, MAC, Token …) und Zugangsdaten in Adressen werden durch `***` ersetzt, der
Benutzerordner durch `~`. Keystores, APKs und Screenshots kommen nie ins Paket. Eine `LIESMICH.txt` listet den Inhalt.

<a id="de-f-sprachen"></a>

### 🌐 Sprachen: Auswahl, Sprachdateien & Sprach-Server

**Sprachauswahl:** Oben rechts in der Kopfzeile steht ein Aufklappmenü mit allen Sprachen in ihrem eigenen Namen
(*Deutsch, English, Français …*). Unvollständige Übersetzungen zeigen ihren Fortschritt, z.B. *Français (87 %)*.
Der letzte Eintrag ist **Weitere Sprachen herunterladen …**. Beim ersten Start übernimmt das Tool die Sprache von
Windows, falls es sie gibt.

**Sprachdateien (`lang/*.po`):** Alle Texte liegen im gettext-Format – dem Standard für Übersetzungen, den auch
Kodi verwendet. Deutsch ist die Originalsprache (steht im Programm), Englisch wird als `lang/en.po` mitgeliefert.
Fehlt in einer Sprache eine Übersetzung, erscheint Englisch.

| Aufbau einer Sprachdatei | Bedeutung |
|---|---|
| `msgid "Datei"` | deutscher Originaltext – nicht ändern |
| `msgstr "Fichier"` | Übersetzung (leer = noch nicht übersetzt) |
| `#. EN: File` | englischer Text als Hilfe für Übersetzer |
| `msgctxt "regex"` | Text mit variablen Teilen – `{0}`, `{1}` … sind Platzhalter und müssen erhalten bleiben |

**Neue Sprache übersetzen:**

1. *Ansicht → Sprache → Sprachdatei erstellen / aktualisieren…*: Sprachcode (z.B. `fr`, `tr`, `pt-br`) eingeben – der
   Name der Sprache wird vorgeschlagen. Es entsteht `lang/<code>.po` mit allen Texten.
2. Mit einem Texteditor oder [Poedit](https://poedit.net) übersetzen – gern nach und nach.
3. *Ansicht → Sprache → Sprachdateien neu laden* – die Sprache erscheint sofort in der Auswahl.

Nach einem Update des Tools ergänzt „aktualisieren“ neue Texte, fertige Übersetzungen bleiben erhalten.

**Sprach-Server:** *Weitere Sprachen herunterladen …* zeigt die Sprachen auf dem Server mit Fortschritt, Version und
Status (*neu*, *installiert*, *Update verfügbar*) und lädt die gewählten herunter. Auf dem Server liegen eine
`languages.json` (Liste mit Version, Fortschritt und SHA-256) und die `.po`-Dateien – z.B. in einem GitHub-Repository.
`python main.py lang-index` erzeugt alles fertig zum Hochladen in `server/languages/` (mit Anleitung `README.md`).

🔒 **Sicherheit:** Geladen wird nur über HTTPS, Größe und SHA-256 werden geprüft. Sprachdateien enthalten nur Text:
Suchausdrücke kommen immer aus dem Programm, und Übersetzungen mit anderen Platzhaltern als `{0}`, `{1}` … werden
verworfen.

[⬆️ nach oben](#top)

---

<a id="de-cli"></a>

## 💻 Kommandozeile (CLI)

```bash
python main.py                                            # GUI
python main.py gui profiles/meinfork.json                 # GUI mit Profil
python main.py build profiles/meinfork.json               # alle APKs aus dem Profil bauen
python main.py build profiles/meinfork.json --install --launch
python main.py build profiles/meinfork.json --test        # danach Gerätetest (60 s)
python main.py build profiles/meinfork.json --variants --upload   # mit Varianten, danach hochladen
python main.py build profiles/meinfork.json --install --device all   # auf allen verbundenen Geräten
python main.py auto profiles/meinfork.json [--upload] [--variants] [--major]   # Kodi/Addons aktualisieren + bauen
python main.py schedule profiles/meinfork.json --time 03:00 [--weekly] [--upload] [--variants]
python main.py schedule profiles/meinfork.json --remove   # Zeitplan entfernen
python main.py compare output/alt_signed.apk output/neu_signed.apk
python main.py check-addons profiles/meinfork.json [--update]     # Addon-Updates suchen/laden
python main.py build profiles/meinfork.json --apk input/kodi-21.3-Omega-arm64-v8a.apk
python main.py devicetest output/xyz_signed.apk [--device SERIAL] [--seconds 60]
python main.py check-kodi profiles/meinfork.json [--download]
python main.py export-profile profiles/meinfork.json meinfork.zip [--apks] [--keystore]
python main.py import-profile meinfork.zip
python main.py download --list --abi armeabi-v7a          # verfügbare Kodi-Versionen
python main.py download --version 21.3 --abi arm64-v8a    # nach input/ laden
python main.py devices --connect 192.168.1.50             # ADB per WLAN
python main.py install output/xyz_signed.apk --launch org.meinfork.kodi
python main.py tools                                      # gefundene Werkzeuge
python main.py overview [--online]                        # Übersicht aller Forks
python main.py backup D:\sicherung.skbackup [--apks]      # verschlüsselte Gesamtsicherung
python main.py restore D:\sicherung.skbackup [--yes]      # Gesamtsicherung wiederherstellen
python main.py diagnose [ZIEL.zip]                        # bereinigtes Diagnosepaket
python main.py lang-template fr Français                  # Sprachdatei lang/fr.po anlegen/ergänzen
python main.py lang-index                                 # Dateien für den Sprach-Server (server/languages/)
python main.py lang-list [--url URL]                      # Sprachen auf dem Sprach-Server
python main.py lang-download fr [--url URL]               # Sprache laden bzw. aktualisieren
python main.py repo-build meinrepo [--upload] [--full]    # eigenes Repository bauen (und hochladen)
python main.py repo-list                                  # Repository-Projekte anzeigen
python main.py addon-list                                 # eigene Addons mit Kurzprüfung
python main.py addon-check plugin.video.x [--kodi 21]     # Addon prüfen
python main.py addon-build plugin.video.x [--kodi 21]     # prüfen und ZIP nach Addons/ZIPs bauen
```

- 🔑 Keystore-Passwort: Umgebungsvariable `SKFORGE_KS_PASS` (optional `SKFORGE_KEY_PASS`),
  sonst das in der GUI gespeicherte. Passwort der Gesamtsicherung: `SKFORGE_BACKUP_PASS`, sonst Abfrage.
  Die früheren Namen `FORKFORGE_…` und `KODI_FORK_BUILDER_…` funktionieren weiterhin.
- 💾 Ändert ein Build das Profil (automatischer Version-Code, gemerktes Zertifikat), wird die Profil-Datei gespeichert.
- 🔢 Rückgabewert `0` = alles erfolgreich, `1` = Fehler, `2` = falscher Aufruf.

[⬆️ nach oben](#top)

---

<a id="de-ordner"></a>

## 📁 Ordnerstruktur

**Projekt-Ordner** (Standard `Dokumente\sKulls Forge`, änderbar unter *Einstellungen → Projekt-Ordner*) – alle eigenen Daten:

| Ordner | Inhalt |
|---|---|
| 📂 `Kodi-APKs/` | Original-Kodi-APKs |
| 📂 `Images/` | Bilder für alle Projekte: `Icons/`, `Banner/`, `Wallpaper/`, `Splash/`, `Fanart/` |
| 📂 `Addons/` | eigene Addons (je Addon ein Ordner, auch ZIPs) für Forks und Repositories; `Addons/ZIPs/` = fertige Addon-ZIPs |
| 📂 `Repository/<Name>/` | Repository-Projekt `<Name>.json`, `Build/` = fertiges Repository zum Hochladen, `Fork-Addon/` = Repository-Addon zum Einbetten |
| 📂 `Config/` | `settings.json`: Einstellungen, Upload-Ziele, Passwörter und Token |
| 📂 `Presets/` | eigene Presets |
| 📂 `Temp/` | temporäre Dateien (werden automatisch aufgeräumt) |
| 📂 `Logs/` | Protokolle `forge.log` und `auto.log` (automatische Builds) |
| 📂 `Wizard/` | `Wizard/Build/` = fertige Wizard-ZIP, `Wizard/Source/` = entpackte Fassung |
| 📂 `Backups/` | Gesamtsicherungen, `Backups/Keystores/` automatische Keystore-Sicherungen, `restore_<Zeit>/` beim Wiederherstellen ersetzte Dateien |
| 📂 `History/` | Build-Verlauf |
| 📂 `Projects/<Projekt>/` | **ein Ordner je Fork-Projekt:** |
| &nbsp;&nbsp;📄 `<Projekt>.json` | Fork-Profil |
| &nbsp;&nbsp;📂 `Keystore/` | Signatur-Schlüssel des Forks – **gut aufbewahren** |
| &nbsp;&nbsp;📂 `Builds/` | fertige Forks: `…_signed.apk`, `…_report.txt`, `…_qr.png`, `update.json`, `index.html` |

*Datei → Neues Projekt…* (`Strg+N`) legt ein Projekt an und kann aus einem anderen Projekt **auswählen**, was kopiert
wird: Fork-Einstellungen und Keystore. Bilder, Addons, Repositories und Wizard sind ohnehin für alle Projekte da.

**Programmordner** – das Tool selbst:

| Ordner | Inhalt |
|---|---|
| 📂 `resources/` | mitgelieferte Werkzeuge |
| 📂 `lang/` | Sprachdateien: `en.po` (mitgeliefert), eigene und heruntergeladene `<code>.po` |
| 📂 `cache/repo/` | Addon-Verzeichnis und geladene Addons aus dem Kodi-Repo (darf gelöscht werden) |
| 📂 `work/` | Arbeitsdateien während des Builds (werden aufgeräumt) |
| 📂 `server/languages/` | Dateien für den Sprach-Server zum Hochladen (`python main.py lang-index`) |
| 📂 `modules/` | Programmcode |

> ℹ️ Ältere Installationen hatten alles im Programmordner (`config/`, `presets/`, `profiles/`, `input/`, `output/`,
> `repos/`, `AddToFork/`).
> Beim ersten Start **kopiert** das Tool die Daten auf Knopfdruck in den Projekt-Ordner – die alten Dateien bleiben
> liegen.

[⬆️ nach oben](#top)

---

<a id="de-technik"></a>

## 🔧 Wie der Fork technisch funktioniert

- 🏷️ **Package-Name**: wird direkt im Manifest gesetzt, die Ressourcentabelle trägt dadurch ebenfalls den neuen
  Namen. Kodi braucht seine Java-Klassen **doppelt**: `libkodi.so` registriert seine Funktionen fest auf
  `org/xbmc/kodi/…` (die Originale bleiben unverändert), lädt zur Laufzeit aber auch
  `<neues Package>.XBMCBroadcastReceiver` und `.XBMCInputDeviceListener`. Deshalb wird das Klassen-Package
  zusätzlich unter den neuen Namen kopiert – ohne diese Kopie stürzt der Fork beim Start ab. Provider-Authorities,
  Autostart und SharedPreferences zeigen auf den neuen Namen. Klassen-Kopien eines bereits umbenannten Forks
  werden automatisch entfernt.
- 🧩 **Addons** landen entpackt in `assets/addons/<id>` und werden in `system/addon-manifest.xml` eingetragen.
- 🎛️ **Einstellungen** werden als `<default>` in `system/settings/settings.xml` (und `android.xml`, falls diese
  den Standard überschreibt) gesetzt und gelten beim ersten Start.
- 🗃️ **Userdata**: `advancedsettings.xml` → `assets/system/`, `favourites.xml`/`RssFeeds.xml`/`Lircmap.xml` →
  `assets/userdata/` (kopiert Kodi selbst). Alles andere – auch vorbelegte Addon-Einstellungen und Quellen –
  kopiert das generierte Service-Addon `service.<package>.firstrun` beim ersten Start ins Profil, **ohne vorhandene
  Dateien zu überschreiben**. Nach einem Update ergänzt es neue Dateien.
- 🏠 **Skin-Einstellungen** (Hauptmenü) setzt es per `Skin.SetBool(…)`, sobald das Hauptmenü offen ist – eine
  kopierte Skin-Datei würde Kodi überschreiben.
- 🔒 **Kindersicherung**: das Ersteinrichtungs-Addon schreibt `profiles.xml` mit Lock-Modus und MD5-Code –
  beim Start und noch einmal, nachdem Kodi beim Beenden seine Einstellungen gespeichert hat.
- 🆕 **„Was ist neu“**: `whatsnew.txt` (und `whatsnew_en.txt` für ein nicht-deutsches Kodi) im Ersteinrichtungs-Addon, angezeigt nur, wenn schon eine ältere Version
  eingerichtet war.
- 🔔 **Update-Hinweis**: Service-Addon `service.<package>.update`, Python 2/3-kompatibel, nur HTTPS.

[⬆️ nach oben](#top)

---

<a id="de-faq"></a>

## 🩺 Fehlerbehebung

| Problem | Lösung |
|---|---|
| ❌ `INSTALL_FAILED_UPDATE_INCOMPATIBLE` | Auf dem Gerät ist eine Version mit anderem Keystore – zuerst deinstallieren (löscht deren Daten). |
| ❌ `INSTALL_FAILED_VERSION_DOWNGRADE` | Installierte Version ist neuer – Version-Code erhöhen bzw. *automatisch erhöhen* aktivieren. |
| ❌ `INSTALL_FAILED_CONFLICTING_PROVIDER` | Ein anderes Kodi nutzt dieselben Provider – Package-Name ändern. |
| ❌ `INSTALL_FAILED_NO_MATCHING_ABIS` | APK passt nicht zur CPU – andere ABI (arm64-v8a/armeabi-v7a) bauen. |
| ⛔ Build bricht ab: „Keystore/Alias passt nicht zum Zertifikat“ | Den ursprünglichen Keystore wählen (Sicherung in `backups/keystores/`). Nur bei Absicht *Zertifikat zurücksetzen*. |
| ⬛ Schwarzes Bild mit Kodi 18/19 | Einschränkung von Kodi selbst auf neuen Geräten – Kodi 20+ verwenden. |
| ⬛ Gerätetest-Screenshot schwarz | Gerät war gesperrt oder der Bildschirm aus – entsperren und erneut testen. |
| ⚠️ „Abhängigkeit … nicht im Kodi-Repository“ | Das Addon aus seinem eigenen Repository als ZIP in Tab 5 einbetten. |
| 🔁 Einstellungen/Quellen erst nach Neustart aktiv | Normal: das Ersteinrichtungs-Addon kopiert beim ersten Start – danach Kodi neu starten. |
| 🧰 Werkzeuge fehlen | *Einstellungen → Werkzeuge* (`Strg+,`); ein Java-JDK installieren – alles andere liegt in `resources/`. |
| 💥 Fork stürzt ab | *Gerätetest* ausführen oder das Absturzprotokoll auslesen: `resources\adb.exe logcat -d -b crash` |
| 🔒 Kindersicherung greift nicht | Sie ist erst **ab dem zweiten Start** aktiv. Eine bereits installierte Version ohne Sperre bekommt sie nach dem Update ebenfalls beim nächsten Neustart. |
| 🔑 Kindersicherungs-Code vergessen | Fork deinstallieren und neu installieren (Daten gehen verloren) – der Code ist nur als Prüfsumme gespeichert. |
| 🔒 „Falsches Passwort“ bei der Gesamtsicherung | Das Passwort lässt sich nicht wiederherstellen – ohne es ist die Sicherung nicht lesbar. |
| 📦 „Paket 'cryptography' benötigt“ | `pip install cryptography` ausführen. |
| 🆘 Hilfe anfragen | *About → Diagnosepaket erstellen…* und das ZIP mitschicken – Passwörter sind entfernt. |
| ⏰ Zeitplan baut nicht | `Logs/auto.log` im Projekt-Ordner prüfen; Passwörter in Tab 7 gespeichert? Rechner lief zur Uhrzeit? *Aufgabenplanung → sKulls Forge*. |
| 🔔 Update-Hinweis kommt nicht | Die update.json-Adresse muss mit `https://` beginnen – `http://` wird aus Sicherheitsgründen ignoriert. |

[⬆️ nach oben](#top)

---

<a id="de-rechtliches"></a>

## ⚖️ Rechtliches

Kodi® ist eine Marke der XBMC Foundation. Dieses Tool steht in keiner Verbindung zur XBMC Foundation und ist kein
offizielles Kodi-Produkt. Mit dem Tool erstellte Forks müssen die **GPL-Lizenz** von Kodi einhalten.

[⬆️ nach oben](#top)

---
---

<a id="en"></a>

# 🇬🇧 English

<a id="en-contents"></a>

## 📑 Table of contents

- [✨ Overview](#en-overview)
- [🧩 Supported Kodi versions](#en-versions)
- [⚙️ Requirements](#en-requirements)
- [🚀 Installation & start](#en-start)
- [📖 How to use](#en-howto)
  - [⚡ Your first fork in 10 steps](#en-howto-first-fork)
  - [🔄 Publishing an update](#en-howto-update)
  - [📦 Building from a wizard backup](#en-howto-backup)
  - [📺 An IPTV fork with PVR IPTV Simple](#en-howto-iptv)
  - [🚀 Publishing automatically (GitHub/FTP)](#en-howto-publish)
  - [🤝 Sharing a profile](#en-howto-share)
  - [🧙 Starting with the wizard or a template](#en-howto-wizard)
  - [⏰ Letting it build automatically at night](#en-howto-auto)
  - [💾 Moving to a new PC](#en-howto-move)
- [🧰 All features in detail](#en-features)
  - [📦 Tab 1 – APKs & Fork](#en-f-apks)
  - [📝 Tab 2 – Manifest](#en-f-manifest)
  - [🔤 Tab 3 – Strings](#en-f-strings)
  - [🎨 Tab 4 – Branding](#en-f-branding)
  - [🧩 Tab 5 – Add-ons](#en-f-addons)
  - [🎛️ Tab 6 – Kodi settings](#en-f-kodi)
  - [🔐 Tab 7 – Signing](#en-f-signing)
  - [🏗️ Tab 8 – Build & Install](#en-f-build)
  - [🔎 Detail log tab](#en-f-detaillog)
  - [🔒 Parental lock](#en-f-lock)
  - [🗂️ Profiles](#en-f-profiles)
  - [🧙 Wizard & profile templates](#en-f-wizard)
  - [🕘 Build history](#en-f-history)
  - [⏰ Automatic builds](#en-f-auto)
  - [🔔 New Kodi version](#en-f-kodiupdate)
  - [📋 Build report](#en-f-report)
  - [🖥️ Interface & convenience](#en-f-interface)
  - [🧭 Overview of all forks](#en-f-overview)
  - [🧩 Your own add-ons](#en-f-addons)
  - [🗂️ Your own repository](#en-f-repository)
  - [💾 Full backup](#en-f-fullbackup)
  - [⌨️ Keyboard, undo & accessibility](#en-f-keyboard)
  - [🩺 Diagnostic package](#en-f-diagnose)
  - [🌐 Languages: selection, language files & language server](#en-f-languages)
- [💻 Command line (CLI)](#en-cli)
- [📁 Folder structure](#en-folders)
- [🔧 How the fork works technically](#en-technical)
- [🩺 Troubleshooting](#en-faq)
- [⚖️ Legal](#en-legal)

---

<a id="en-overview"></a>

## ✨ Overview

**sKulls Forge** turns an official Kodi APK into your own app that can be installed **next to the
original Kodi** – with its own name, its own icon, built-in add-ons and preconfigured settings. Everything works
through a graphical interface (German/English, light/dark) or from the command line.

| | Highlights |
|---|---|
| 🏷️ | New **package name** – the fork runs alongside the original and has its own data |
| 🎨 | **Branding**: app icon, Android TV banner, splash screen, vendor logo – automatically scaled to all sizes |
| 🧩 | Embed **add-ons & repositories**, **preset add-on settings**, **download missing dependencies automatically** |
| 🎛️ | Predefine **Kodi settings**: skin, language, region, add-on updates, cache, sources, favourites, userdata |
| 📦 | Use **wizard/Kodi backups** as a template |
| ✂️ | **Shrink the APK** – remove unneeded Kodi add-ons |
| 🔐 | **Signing** with keystore management, certificate protection for updates and automatic **keystore backups** |
| 🔄 | **Update builds** with automatic version code and an **update notice inside the fork** (update.json) |
| 📲 | **Install via ADB** (USB/Wi-Fi) and **device test** with crash check and screenshot |
| 🧱 | **Multi-ABI batch build** (arm64-v8a + armeabi-v7a in one run) |
| 🏪 | Add-ons **straight from the Kodi repository** – including binary add-ons (PVR, inputstream) matching arm64/armv7 |
| 🏠 | Design the **Estuary home menu**, define **key mapping**, **take over the setup from a device** |
| 🧬 | **Build variants** (e.g. "Kids"), **upload** via FTP/SFTP/GitHub with **QR codes**, **live log** and **build comparison** |
| 🗂️ | Save **profiles**, **share them as ZIP**, build automatically via **CLI** |
| 🔒 | **Parental lock** (Kodi master lock), add-on **compatibility check**, **Kodi settings explorer** |
| 🧙 | **Beginner wizard**, **profile templates** (IPTV, Kids, Minimal, Mediacenter), **build history** |
| ⏰ | **Automatic builds** via Windows Task Scheduler, **download page**, "**What's new**" inside the fork, install on **all devices** |
| 🛠️ | **Your own add-ons** from templates: edit, check (Python version for Kodi 18–22, syntax, dependencies), package cleanly and test via ADB · build **your own repository** and upload it via FTP/SFTP/GitHub |
| 🧭 | **Overview of all forks** (plus repositories and add-ons) as start page, encrypted **full backup**, **undo/redo**, **keyboard shortcuts**, **diagnostic package**, **more languages** via language files |
| ✨ | Modern interface: **splash screen**, **icons** on tabs, menus and buttons, **8 color schemes** (Light and Dark as before, plus sKulls Neon, Midnight, Graphite, Nord, Sand, Mint) |

[⬆️ back to top](#top)

---

<a id="en-versions"></a>

## 🧩 Supported Kodi versions

Tested with one fork each (arm64, German language pack embedded, userdata template) on an Android 16 device:

| Kodi | Build + signing | First-run setup | Runs on Android 16 |
|---|:---:|:---:|:---:|
| **21.3 Omega** | ✅ | ✅ Python 3 | ✅ |
| **20.5 Nexus** | ✅ | ✅ Python 3 | ✅ |
| **19.5 Matrix** | ✅ | ✅ Python 3 | ⚠️ black screen\* |
| **18.9 Leia** | ✅ | ✅ Python 2 | ⚠️ black screen\* |
| **22 Piers** | ✅ prepared (preset `kodi22`) | ✅ | – |

\* A control fork with only the package name changed behaves the same – this is caused by Kodi 18/19 itself, not by
the fork. On older devices these versions run normally. The build warns automatically for Kodi 18/19.
**Use Kodi 20 or newer for current devices.**

> 💡 Kodi 18 does not know the setting "add-on updates from any repository" – the tool only warns. All generated
> helper add-ons (first-run setup, update notice) run on Python 2 **and** Python 3.

[⬆️ back to top](#top)

---

<a id="en-requirements"></a>

## ⚙️ Requirements

- 🐍 **Python 3.9+** and `pip install -r requirements.txt` (Pillow for branding and previews; optionally `qrcode`
  for QR codes, `paramiko` for SFTP upload and `cryptography` for the encrypted full backup)
- ☕ **Java JDK** (for `keytool` and the bundled JARs)
- 🪟 **Windows 10/11** (the core also runs on Linux/macOS, but the bundled ADB tools are `.exe` files)

All other tools are located in `resources/` and take **precedence** over PATH or the Android SDK:

| Tool | File | Purpose |
|---|---|---|
| 🧰 apktool 2.11.1 | `apktool.jar` | decode and rebuild APKs (started directly via Java) |
| ✍️ apksigner | `apksigner.jar` | sign and verify |
| 📐 zipalign | `zipalign.exe` | align the APK before signing |
| 🔏 uber-apk-signer 1.3.0 | `uber-apk-signer.jar` | alternative signing method |
| 🔍 aapt2 | `aapt2.exe` | build report, original graphics (package, version, SDK, icons) |
| 📲 adb | `adb.exe` + `AdbWin*.dll` | installation, launch, device test |

> 🛠️ `python main.py tools` or *Settings → Tools* (`Ctrl+,`) shows which tools were found.

[⬆️ back to top](#top)

---

<a id="en-start"></a>

## 🚀 Installation & start

```bash
pip install -r requirements.txt
python main.py
```

- ▶️ `python main.py` (or double-clicking `main.py`) starts the GUI **without a console window**.
- 🐞 `python main.py --console` keeps the console open for troubleshooting.
- 🧹 On start the tool cleans up leftovers in `temp/`; on exit its own **ADB server is stopped** (other adb
  installations, e.g. Android Studio's, are left alone).
- 💾 The last used profile is loaded automatically.

[⬆️ back to top](#top)

---

<a id="en-howto"></a>

## 📖 How to use

<a id="en-howto-first-fork"></a>

### ⚡ Your first fork in 10 steps

1. **📥 Get Kodi** – *Tools → Download Kodi APK…*: choose the ABI (`arm64-v8a` = current devices,
   `armeabi-v7a` = older/32-bit TV boxes), select a version, *Download & add*. The APK goes to `input/` and into
   the list in **tab 1**. For a batch build simply download both ABIs.
2. **🏷️ Name the fork** – in **tab 1** enter the *package name* (e.g. `skulls.fusion.build`, must differ from
   `org.xbmc.kodi`) and the *app name*. Empty fields keep the values of the original APK; version and SDK are
   prefilled automatically.
3. **🎨 Branding** – in **tab 4** choose icon (512×512 PNG), TV banner (16:9), splash screen (1920×1080) and vendor
   logo. The original graphics are shown on the left, the new ones on the right – hover for a large view.
4. **🧩 Embed add-ons** – in **tab 5** add add-on or repository ZIPs/folders. *fixed* = always enabled,
   *optional* = can be disabled by the user. For a German Kodi embed `resource.language.de_de`.
5. **⚙️ Preset add-on settings** (optional) – select an add-on, *Preset settings…* (or double-click): e.g. enter the
   portal URL and MAC of an IPTV add-on, *Apply*.
6. **🎛️ Configure Kodi** – in **tab 6** set language (e.g. `resource.language.de_de`), region, skin, add-on
   updates, *unknown sources*, cache preset, sources/favourites and optionally a userdata template.
7. **🔐 Create a keystore** – in **tab 7** enter a store password (min. 6 characters) and key alias, *Create keystore*.
   **Write down the password** and copy the keystore to a USB stick/cloud with *Back up keystore to…*.
8. **💾 Save the profile** – *File → Save profile* (`Ctrl+S`), so the fork can be rebuilt at any time.
9. **🏗️ Build** – in **tab 8** click *▶ FORK BUILD (all APKs)*. The log shows every step and finally the build report.
   Finished APKs are in `output/` (`…_signed.apk` + `…_report.txt`).
10. **📲 Install & test** – connect the device via USB debugging or Wi-Fi (*IP[:port]* → *Connect*) and click
    *Device test (last APK)*: the tool installs, launches and watches the fork for 60 seconds and shows the result
    with a screenshot. Alternatively tick *Install via ADB afterwards* (+ *and launch*) or *or device test (60 s)*
    before building.

> ✅ On the fork's first start the first-run add-on copies the templates into the profile and shows "setup
> complete – please restart Kodi". From the second start everything is fully active.

<a id="en-howto-update"></a>

### 🔄 Publishing an update

1. **Tab 1 → Fork updates**: tick *Increase version code automatically on every build*.
2. Optionally for the **update notice inside the fork**: enter the *update.json address*, e.g.
   `https://myserver.com/fork/update.json`, plus *Changes (DE / EN)* (short text, English optional). Fill in *APK download folder* only if the
   APKs are stored somewhere other than update.json.
3. Use the **same keystore** – the tool checks this against the stored certificate and aborts otherwise.
4. *FORK BUILD* – the version code is increased and the profile saved automatically. An `update.json` is created
   next to the APKs.
5. Upload `update.json` **and** the APKs to the server. Installed forks check on start (at most every 12 hours) and
   offer the new version for download.

<a id="en-howto-backup"></a>

### 📦 Building from a wizard backup

1. Create a **backup as ZIP** in Kodi (or with a wizard).
2. **Tab 6 → Import from backup ZIP…** and choose the ZIP. The tool detects the structure (`userdata/`, `addons/`,
   also inside subfolders such as `Backup/.kodi/`) and shows what it found.
3. Choose: *use userdata as template*, *embed add-ons*, *take over changed settings*. Thumbnails, databases,
   caches, logs and device-specific settings are left out automatically.
4. The backup is extracted to `profiles/<profile>_backup/` and added to the profile → save the profile → build.

> 📲 **Even easier:** set up Kodi (or the fork) on the device as usual, then **tab 6 → Take over from device…** –
> the tool pulls the Kodi data via ADB and imports it just like a backup.

<a id="en-howto-iptv"></a>

### 📺 An IPTV fork with PVR IPTV Simple

1. **Tab 5 → From Kodi repository…**, search for `iptvsimple`, select *PVR IPTV Simple Client* → *Add*. The add-on
   is listed as "Kodi repo" and is downloaded during the build **matching the Kodi version and CPU** (arm64/armv7)
   of each APK – including `inputstream.adaptive`/`ffmpegdirect`/`rtmp`.
2. Select the add-on → **Preset settings…** → enter the *M3U playlist URL* (and EPG if needed).
3. Optionally **tab 4 → Home menu**: startup window *TV (channels)*, hide unneeded menu items.
4. Build – the fork starts directly with the channels.

<a id="en-howto-publish"></a>

### 🚀 Publishing automatically (GitHub/FTP)

1. **Tab 8 → Upload**: choose a method – *GitHub release* (repository `owner/repo` + a token with write access to
   releases) or *FTP/FTPS/SFTP* (server, user, password, target folder).
2. For GitHub click **Use GitHub address for update.json** – the fork then checks
   `https://github.com/<owner>/<repo>/releases/latest/download/update.json`.
3. Tick *Upload after every successful build* (or use *Upload last build now* later).
4. Start the build: APKs, `update.json` and QR codes end up in the release or on the server; with GitHub the links
   automatically point to the downloads of this release.

<a id="en-howto-share"></a>

### 🤝 Sharing a profile

- **Export**: *File → Export profile as ZIP…* – packs profile, graphics, add-ons, userdata template and additional
  files into one ZIP. Kodi APKs and keystore only on request, **passwords never**.
- **Import**: *File → Import profile from ZIP…* – extracts to `profiles/<name>/` and loads the profile. Missing Kodi
  APKs are reported (download them via *Tools → Download Kodi APK*); without a keystore choose or create one in the
  Signing tab.

> ⚠️ Only share the keystore with trusted persons – whoever has it can sign updates of your fork.

<a id="en-howto-wizard"></a>

### 🧙 Starting with the wizard or a template

- **Wizard**: *File → Wizard: new fork…* leads to a finished fork in 6 steps – Kodi APK (with download),
  app name/package/version, icon and background image, template, keystore (use the existing one or create a new
  one), summary. *Finish* saves the profile as `profiles/<name>.json` and builds right away on request. Language and
  region are preset to German.
- **Template**: *File → New profile from template…* sets up a new profile from a template. APKs, output folder,
  keystore and the German language pack of the current profile are kept. With *Kids* the tool asks for the parental
  lock code right away.

<a id="en-howto-auto"></a>

### ⏰ Letting it build automatically at night

1. Finish and save the profile, save the passwords in tab 7, set up the upload in tab 8 if needed.
2. *Tools → Build automatically (schedule)…*: time, daily or *weekly only (Sundays)*, *upload afterwards*,
   *Also build variants* → **Set up / change**.
3. Windows then runs `main.py auto <profile>` without a window: take over a new Kodi release of **the same major
   version** and add-on updates, build, upload. The log is in `Logs/auto.log`, every build in the **build history**.

> 💡 The PC must be running at the scheduled time. A new major version (e.g. Kodi 22) is only taken over with
> `python main.py auto <profile> --major` – no surprises.

<a id="en-howto-move"></a>

### 💾 Moving to a new PC

1. On the old PC *File → Create full backup…*: set a password (at least 8 characters), optionally include the Kodi
   APKs, save the file (e.g. to a USB stick).
2. On the new PC install the tool (see [Installation & start](#en-start)) and run `pip install cryptography`.
3. *File → Restore full backup…*, choose the file, enter the password. The tool shows date and size and asks whether
   to restore.
4. Done: profiles, keystores, saved passwords, build history and all used files are back. Files whose old folder is
   missing on the new PC are placed in `restored/` – the profiles point there automatically.

[⬆️ back to top](#top)

---

<a id="en-features"></a>

## 🧰 All features in detail

<a id="en-f-apks"></a>

### 📦 Tab 1 – APKs & Fork

| Feature | Description |
|---|---|
| 📚 **APK list / batch build** | Several original APKs (e.g. arm64-v8a + armeabi-v7a) are built into forks in one run. The ABI is detected from the APK, missing files are marked. |
| 📥 **Download Kodi** | Version list straight from `mirrors.kodi.tv` for arm64-v8a, armeabi-v7a and x86 – optionally with beta/RC. Download with progress to `input/`, existing files are not downloaded again. |
| ℹ️ **APK info** | Package, version (name + code), minSdk, targetSdk and number of permissions of the selected APK. Empty fields are prefilled from it (version code = original + 1). |
| 🧾 **Presets** | Permissions, features and SDK values for Kodi 21 (`kodi21`) and Kodi 22 (`kodi22`) – save and delete your own presets (`presets/`). |
| 🏷️ **Fork properties** | Profile name, package name (checked for valid Java syntax), app name, version name/code, minSdk/targetSdk. |
| 🔘 **Options** | `android:debuggable`, `allowBackup`, prefer installation on external storage (`preferExternal`), remove telemetry meta-data. |
| 🔄 **Update build** | *Increase version code automatically on every build*: new code = max(previous, original APK) + 1. Only used up if at least one build succeeds, then stored in the profile. |
| 🔔 **Update notice inside the fork** | With an *update.json address* the build embeds the service add-on `service.<package>.update`. On start (at most every 12 h) it checks the file, picks the APK matching the CPU (arm64/armv7/x86) and opens the download in the device's browser. German/English depending on Kodi's language. |
| 🆕 **"What's new"** | After an update the fork shows the change text once on the first start (separate entries with `;` → bullet list). Not on a fresh install. |
| 🇩🇪🇬🇧 **Changes DE / EN** | Two fields *Changes (DE / EN)*: the English text (optional) is used with an English Kodi in the update notice and "What's new", on the English download page and in the GitHub release. Empty = the German text everywhere. |
| 🌍 **Download page** | Next to `update.json` an `index.html` is created (mobile friendly) with icon, version, changes, a download button per CPU, size, SHA-256 and QR code – ready to upload. Switchable at the top right: **theme** (auto/light/dark) and **language** (DE/EN); without a choice the page follows the system theme and browser language, the choice is remembered by the browser. |
| 🛡️ **Secured update.json** | The update notice inside the fork accepts **HTTPS only** (update.json and APK address) and shows the download size. The build warns about `http://` addresses. |
| 🌐 **update.json** | Written by the build next to the APKs – with version, change text, date, download link, **SHA-256 checksum** and **size** per ABI: |

```json
{
  "version_code": 2103002,
  "version_name": "21.3",
  "changelog": "Neue Addons; Kindersicherung",
  "changelog_en": "New add-ons; parental lock",
  "apks": {
    "arm64-v8a": "https://myserver.com/fork/Fork_v21.3_arm64-v8a_signed.apk",
    "armeabi-v7a": "https://myserver.com/fork/Fork_v21.3_armeabi-v7a_signed.apk"
  },
  "sha256": { "arm64-v8a": "9f2c…", "armeabi-v7a": "41ab…" },
  "size": { "arm64-v8a": 84213760, "armeabi-v7a": 78114304 }
}
```

<a id="en-f-manifest"></a>

### 📝 Tab 2 – Manifest

| Feature | Description |
|---|---|
| 🔑 **Permissions** | Add further `uses-permission` entries. |
| 🧱 **Features** | Add further `uses-feature` entries (e.g. `android.software.leanback`). |
| 🏷️ **Meta-data** | Set `meta-data` in `<application>` (value or `@resource`) or remove it from the APK. |

<a id="en-f-strings"></a>

### 🔤 Tab 3 – Strings

| Feature | Description |
|---|---|
| 📖 **Load strings** | Reads all `strings.xml` of the APK (all languages) without a full decode. |
| ✏️ **Edit** | Change values, add new strings, remove strings, undo changes. Filter and "changes only" view. The app name is set in tab 1. |

<a id="en-f-branding"></a>

### 🎨 Tab 4 – Branding

| Feature | Description |
|---|---|
| 🖼️ **App icon** | Replaces all launcher icons (`mipmap`/`drawable`, `assets/media/icon*`) in original size and format. If there is no icon, mipmap icons are created. Note for adaptive icons (Android 8+). |
| 📺 **Android TV banner** | Replaces the leanback banner (16:9). |
| 🌅 **Splash screen** | Replaces `splash.jpg`/`applaunch_screen.png`. |
| 🏢 **Vendor logo** | Logo inside Kodi (approx. 465×128, transparent). |
| 🔍 **Original preview** | The original graphics of the selected APK as thumbnails, **hover = large view** (transparent areas on a checkerboard). |
| 📐 **Auto scaling** | Images are center-cropped and scaled to every existing size. |
| 📁 **Additional files** | Copy any files/folders to a target path inside the APK – mode *replace* or *add* (merge). |
| 🏠 **Home menu (Estuary)** | Hide 12 menu items (movies, TV shows, music, music videos, TV, radio, games, add-ons, pictures, videos, favourites, weather), **startup window** (e.g. *TV (channels)*), **colour scheme** and a **custom background image** – it replaces Estuary's tinted background, the pattern on top is hidden. Only applies with Estuary. |

<a id="en-f-addons"></a>

### 🧩 Tab 5 – Add-ons

| Feature | Description |
|---|---|
| ➕ **Embed add-ons** | ZIPs, extracted folders or all ZIPs of a folder. They go to `assets/addons/<id>` and are registered in `system/addon-manifest.xml` (otherwise Kodi disables them). `__pycache__` is skipped. |
| 🔒 **fixed / optional** | *fixed* = system add-on (always enabled), *optional* = enabled, but can be disabled. |
| 🔗 **Dependencies** | Selecting an add-on shows its requirements (`?` = not in the list). |
| ⚙️ **Preset settings** | Form built from the add-on's `resources/settings.xml` – **old** (up to Kodi 18) and **new** format (from Kodi 19), with categories, German/English labels, lists, toggles, password fields, search, "changed only" and reset. Only values differing from the default are stored. |
| 🛡️ **Double safety** | The values are (1) written into the embedded add-on as defaults and (2) created as `addon_data/<id>/settings.xml` on first start – they **survive an add-on update** from the repository. Form values take precedence over a userdata template. |
| ⬇️ **Download dependencies automatically** | Missing required dependencies are downloaded during the build from the **official Kodi repository** – the repo defined in the APK (Kodi 21 → omega, Kodi 18 → leia …), recursively and with an Android platform check. Too old versions are reported. Cache in `cache/repo/`. |
| ✂️ **Shrink APK** | Removes bundled Kodi add-ons including manifest entry and native library. Dependencies of remaining add-ons, the profile's skin and language, gamepad navigation and the built-in screensavers are always kept. |
| 🏪 **From Kodi repository** | Searchable list of the official repo (matching the APK's Kodi version, filter by type). Chosen add-ons are stored as `repo://<id>` and downloaded fresh **on every build** – matching the Kodi version **and CPU architecture** of each APK (a batch build arm64 + armv7 gets the right library for each). |
| ⚙️ **Binary add-ons** | PVR clients, `inputstream.*`, audio decoders etc.: the native library goes – like with Kodi's bundled add-ons – to `lib/<abi>/`, the rest to `assets/addons/`. Also works for local ZIPs; if their platform does not match the APK, you get a warning. |
| 🔄 **Check for updates** | Looks for newer versions of the embedded add-ons in the official Kodi repo **and** in all third-party repositories embedded in the profile (only folders matching the Kodi version) and downloads them as ZIP next to the previous source on request. |
| 🧪 **Check compatibility** | Checks every add-on against every Kodi APK of the profile **before building**: required Kodi interfaces (`xbmc.python`, `xbmc.gui`, `xbmc.addon` …) – "add-on is too new" (e.g. a Python 3 add-on in Kodi 18) or "too old" – and whether binary add-ons are built for Android. Also runs automatically with every build (warnings in log and report). |

**Shrink categories:**

| Category | Content | Savings approx. |
|---|---|---|
| 🖐️ Skin Estouchy | touch skin (up to Kodi 19) | 4.6 MB |
| 🌦️ Weather icons | `resource.images.weathericons.default` | 4.7 MB |
| 🌐 Web interface | `webinterface.default` (browser remote) | 4.3 MB |
| 🎮 Game controller profiles | `game.controller.*` except `default` | 1.7 MB |
| 🎵 Music visualizations | `visualization.*` | depends on APK |
| 🌙 Screensavers | additional `screensaver.*` | depends on APK |
| 🌍 Language packs | further `resource.language.*` except English + chosen language | depends on APK |

> 📊 Example Kodi 21.3 arm64: approx. 16 MB less (uncompressed). The actual savings are shown in the build report.

<a id="en-f-kodi"></a>

### 🎛️ Tab 6 – Kodi settings

| Feature | Description |
|---|---|
| 🎨 **Skin** | Default skin (empty = Estuary). Embed other skins in tab 5. |
| 🌍 **Language** | e.g. `resource.language.de_de` – the language add-on must be embedded (except `en_gb`). |
| 🗺️ **Region** | Name as shown in Kodi's regional settings, e.g. *Deutschland*. |
| 🔁 **Add-on updates** | *Automatic – any repository* · *Automatic – official Kodi repos only* (default) · *Off*. |
| 🔓 **Unknown sources** | Allowed by default (required for third-party repos). |
| 🚫 **Disable version check** | Removes `service.xbmc.versioncheck` from the manifest – no update hints for the original Kodi. |
| 🚀 **Cache preset** | Buffer for streaming – a `filecache.*` setting from Kodi 21, before that in `advancedsettings.xml` (an existing one from the template is extended). |
| ➕ **Further settings** | Any setting ID = default value, e.g. `videoplayer.adjustrefreshrate = 2`. The build warns if an ID does not exist. |
| 🔎 **Browse settings** | Explorer for **all** Kodi settings of the selected APK (about 300) – sorted by section and category like in Kodi, with label (German if the language pack is embedded), help text, level (basic … expert), lists and toggles. Android defaults are taken into account, settings that don't exist on Android (DirectX, VideoToolbox, drives) are hidden. Changed values go to *Further settings*. |
| 🔒 **Parental lock** | Kodi master lock with a numeric code – see [Parental lock](#en-f-lock). |
| 📂 **Sources** | Editor for `sources.xml`: videos, music, pictures, **file manager** (e.g. a repository URL for "Install from zip file"), programs, games. A sources.xml from the template is extended, equal names are replaced. |
| ⭐ **Favourites** | Editor for `favourites.xml` with name, action and image. *Create action* builds the matching command for an embedded add-on (`ActivateWindow(…)`, `RunScript(…)`, `RunAddon(…)`). |
| 🗃️ **Userdata template** | Folder like `special://profile`: Kodi uses `advancedsettings.xml`, `favourites.xml`, `RssFeeds.xml`, `Lircmap.xml` directly; everything else (`sources.xml`, `keymaps/`, `addon_data/` …) is copied by the first-run add-on. `guisettings.xml`, `Database/`, `Thumbnails/` are ignored. |
| 📦 **Backup import** | Takes over a Kodi/wizard backup (ZIP): userdata without caches, add-ons and the changed values from `guisettings.xml` (skin, language, region, unknown sources are mapped to the matching fields; screen, audio device and system values are left out). |
| 📲 **Take over from device** | Set up Kodi or a fork on the device, choose the app – the tool pulls `userdata` and `addons` via ADB (`tar`, without thumbnails/databases/package cache; fallback `adb pull`) and imports them like a backup. |
| 🎮 **Key mapping** | Keymap editor: section (everywhere, home, fullscreen video, live TV …), key (menu, colour keys, info, channel ± … or your own name), short/long press, action (`ContextMenu`, `ActivateWindow(…)`, `RunAddon(…)`, `noop` …). Result: `keymaps/fork_keymap.xml` in the profile. |

**Cache presets:**

| Preset | Memory | Read factor | Buffer mode | for |
|---|---|---|---|---|
| Kodi default | – | – | – | unchanged |
| 🚀 Streaming strong | 512 MB | 10× | all filesystems | 3 GB RAM or more (Shield, current phones) |
| ⚖️ Streaming medium | 256 MB | 5× | all filesystems | 2 GB RAM |
| 🐢 Weak devices | 96 MB | 4× | all filesystems | 1 GB RAM (Fire TV Stick) |

> ℹ️ Kodi reserves about three times the configured memory in RAM.

<a id="en-f-signing"></a>

### 🔐 Tab 7 – Signing

| Feature | Description |
|---|---|
| 🗝️ **Keystore** | Choose an existing keystore (`.jks`, `.keystore`, `.p12`) or create a new one (RSA 2048, 10,000 days, custom DName). *Show aliases* reads the keystore. |
| 🔑 **Passwords** | Stored only in `config/settings.json` – **never in the profile**. For the CLI also via environment variable. With PKCS12 the store password is also the key password. |
| ✍️ **Signing method** | *zipalign + apksigner* (recommended) or *uber-apk-signer*. Schemes v1 (Android < 7), v2 (7+), v3 (9+), v4 (11+, `.idsig`). |
| 🧬 **Certificate protection** | The SHA-256 fingerprint is stored in the profile on the first build. A later build with a **different keystore is aborted** – such an update could not be installed over the installed app. *Reset certificate* only on purpose. |
| 💾 **Automatic backup** | Every new or changed keystore is copied to `backups/keystores/` (with an info file: alias, fingerprint – no password). |
| 🧳 **External backup** | *Back up keystore to…* copies it e.g. to a USB stick. Until then every build report reminds you; the status is shown in the tab. |
| 🛠️ **Tools** | Status of all tools with path, custom apktool path, *Search* and *Check again*. |

<a id="en-f-build"></a>

### 🏗️ Tab 8 – Build & Install

| Feature | Description |
|---|---|
| ▶️ **FORK BUILD** | Complete pipeline for all APKs: decode → customize → build → zipalign/sign → report. *Selected APK only* builds a single one. Cancel at any time from the status bar. |
| 🪜 **Single steps** | 1 Decode, 2 Customize, 3 Build, 4 Sign – to follow along or intervene manually. |
| 📲 **Install afterwards** | *Install via ADB afterwards* (+ *and launch*). In a batch build the APK matching the device's CPU is chosen automatically. |
| 📱📺 **All devices** | With *all devices* the build is installed or device-tested on **every connected device** – e.g. phone (arm64) and TV box (armv7) at once, each with the matching APK. CLI: `--device all`. |
| 🕘 **Build history** | *Build history…* button – see [Build history](#en-f-history). |
| 🩺 **Device test** | Installs, launches (launch activity via the package manager, phone **and** Android TV) and watches the fork for 60 s: is the process running, crash messages in logcat, errors and first-run setup in `kodi.log`, screenshot. Detects locked screens. Result as `*_devicetest.txt` + `.png` next to the APK. |
| 🔌 **ADB** | Device list, Wi-Fi connection (*IP[:port]*), install last APK, choose & install APK, launch, uninstall. Clear hints for typical installation errors. |
| 🧬 **Build variants** | Build additional variants from one profile (e.g. "Kids"): own package name, app name, icon, language, **leave out add-ons**, additional Kodi settings. Same version code and keystore; output and update addresses in the variant's subfolder (with GitHub: `update-<variant>.json` in the same release). |
| ☁️ **Upload** | FTP, FTPS, SFTP (`pip install paramiko`) or **GitHub release** (release is created or replaced, links in `update.json` point to the release downloads). Automatically after the build or via *Upload last build now*. Password/token only in `config/settings.json`. |
| 🔳 **QR codes** | For every APK a `…_qr.png` with the download link (as soon as a download address is known) – to scan with a phone. Needs `pip install qrcode`. |
| 📜 **Log** | All output colored (errors, warnings, success), clear and save. |

<a id="en-f-detaillog"></a>

### 🔎 Detail log tab

At the bottom of the sidebar (`Ctrl+9`). All events with timestamps – build output, tool calls, warnings, errors. Filter by level (DEBUG/INFO/WARNING/ERROR),
search field, auto-scroll, *Save…* and *Open log folder*. Permanently stored in `Logs/forge.log` in the project folder
(INFO and above, rotating 3 × 1 MB).

📡 **Live from device**: follow `kodi.log` (via `tail -F`) or the logcat of the running app directly in the detail
log – errors and warnings colored, with search and filter. Empty package = the fork's package.

🔍 **Compare builds** (*Tools*): put two APKs side by side – version, size, add-ons (new/changed/removed), Kodi
default settings, first-run setup files, native libraries – with a suggested change text (*Use as change text* →
tab 1). Result saved as `…_vergleich.txt`.

<a id="en-f-lock"></a>

### 🔒 Parental lock

**Tab 6 → Parental lock…** sets up **Kodi's master lock** – the same protection as in Kodi under
*Settings → Profiles → General*.

| Feature | Description |
|---|---|
| 🔢 **Numeric code** | 4 to 10 digits, entered twice. Only the **MD5 checksum** is stored – just like Kodi does. |
| 🧱 **Areas** | Settings, add-on manager, file manager, programs/add-ons, videos, music, pictures, games – each selectable. |
| 🚪 **On start** | Optionally Kodi asks for the code right when it starts. |
| 🔁 **Robust** | On exit Kodi overwrites `profiles.xml` with the state in memory. The first-run add-on therefore writes the lock on start **and** after Kodi's final save until Kodi starts with the lock active – **active from the second start**. |
| 🧒 **"Kids" template** | The *Kids* profile template enables the lock and asks for the code right away. |

> ⚠️ **Don't forget the code** – without it the only way out is reinstalling (data is lost). The user can change or
> remove the lock in Kodi with the code.

<a id="en-f-profiles"></a>

### 🗂️ Profiles

| Feature | Description |
|---|---|
| 💾 **Save / open** | All tabs together form a profile (`profiles/*.json`), `Ctrl+N`/`Ctrl+O`/`Ctrl+S`. Unsaved changes are confirmed on close. |
| 🧭 **Portable paths** | Paths inside the project folder are stored relatively – the project can be renamed or moved. |
| 🙈 **No passwords** | Passwords are never stored in the profile. |
| 🗜️ **Export / import as ZIP** | Profile with all graphics, add-ons, userdata template and files in one ZIP – APKs and keystore optional. |

<a id="en-f-wizard"></a>

### 🧙 Wizard & profile templates

**Beginner wizard** (*File → Wizard: new fork…*): 6 steps – ① Kodi APK (with download) ② app name, package name,
version ③ icon and background image ④ template ⑤ keystore (use the existing one or create a new one, including the
automatic backup) ⑥ summary with *Save profile and build right away*.

**Profile templates** (*File → New profile from template…*, also in the wizard):

| Template | Content |
|---|---|
| 📺 **IPTV box** | PVR IPTV Simple + inputstream.adaptive from the Kodi repo, starts in TV, medium cache, unneeded menu items and add-ons removed |
| 🧒 **Kids** | Parental lock for settings, add-ons and file manager, TV/radio/add-ons hidden in the menu |
| 🪶 **Minimal** | As small as possible: all shrink categories, slim home menu, no Kodi version check |
| 🎬 **Mediacenter** | For your own media library: large cache, automatic refresh rate, all menu items |

APKs, output folder, keystore and the German language pack of the current profile are taken over.

<a id="en-f-history"></a>

### 🕘 Build history

Every successful build is stored with the **complete profile state** in `history/<profile>/` (time, version, code,
APKs with ABI/size/report, change text). *Tools → Build history…* or the button in tab 8 shows the list: **Open
report**, **Open folder**, **Load state** (settings from back then into the interface, not saved yet) or **Rebuild**
(build that state right away – e.g. to restore an older version).

<a id="en-f-auto"></a>

### ⏰ Automatic builds

*Tools → Build automatically (schedule)…* creates a task in the **Windows Task Scheduler** (folder
"sKulls Forge") – daily or weekly (Sundays) at the chosen time, optionally with upload and variants.
The dialog shows whether and when the task is set up; *Remove* deletes it again.

What `main.py auto` does: download a new Kodi release of the same major version and put it into the profile →
download add-on updates → increase the version code (if enabled) → build (with variants if requested) → upload →
save the profile. Log: `Logs/auto.log`. Keystore passwords and upload credentials come from `config/settings.json`.

<a id="en-f-kodiupdate"></a>

### 🔔 New Kodi version

The tool checks **once a day** in the background whether a newer stable version exists for the profile's Kodi APKs
and shows it in yellow in the header. Clicking it (or *Tools → Check for new Kodi version*) offers:
**Yes** = download, replace in the profile and rebuild · **No** = only download and replace · **Cancel**.
A new major version gets an additional warning.

<a id="en-f-report"></a>

### 📋 Build report

Next to every APK there is `…_report.txt` with: size, package, app name, version, SDK, ABI, launch activity
(+ Android TV), signature verification with schemes, add-on update mode, downloaded dependencies, preset add-on
settings, cache preset, sources/favourites, update notice, APK savings, certificate fingerprint, embedded add-ons,
default settings, userdata and **all warnings**.

<a id="en-f-interface"></a>

### 🖥️ Interface & convenience

| Feature | Description |
|---|---|
| 🧭 **Sidebar** | On the left are the areas **Overview**, **Forks** (tabs 1–8), **Add-ons**, **Repository** and **Wizard**, at the bottom **Collapse**, **Settings**, **Tools** and **Detail log**. Collapsed, only the icons remain (name as tooltip). In a narrow window (below 1360 pixels) it collapses automatically; tabs that do not fit completely can be scrolled. *Wizard* is still under construction and shows what is planned. |
| ⚙️ **Settings** | `Ctrl+,`: *Clean up / factory reset* (caches, logs, settings, project folder – with recycle bin and a full backup first), color scheme, splash screen, sidebar, language and language server, **project folder** (show, change, create folders, take over data), **upload targets** (FTP, FTPS, SFTP, GitHub – with *Test connection*; fork upload and repository only choose target and subfolder), tools (apktool path, programs found), check for new Kodi versions on start, open folders. |
| 🧰 **Tools** | All helpers as tiles: full backup, diagnostic package, download Kodi APK, check for a new Kodi version, build history, compare builds, schedule, share profile, folders. |
| 🎨 **Color schemes** | *Settings*, *View → Color scheme* or the ☀ icon at the top right: **System** (follows the Windows setting live), the original **Light** and **Dark** designs plus **sKulls Neon**, **Midnight**, **Graphite**, **Nord** (dark) and **Sand**, **Mint** (light). Dark schemes get a dark title bar. |
| ✨ **Icons** | Tabs, menu entries and the most important buttons have icons (Windows icon font Segoe Fluent Icons) – sharp at any size and always in the scheme's color. Main actions such as **FORK BUILD** are highlighted in the accent color. |
| 🖼️ **Splash screen** | On start the sKulls logo appears with name, slogan, version and progress. Can be turned off via *View → Show splash screen*. The logo is also the window icon and shown in the header. |
| 🌐 **Language** | The **language selection** at the top right (or *View → Language*) switches the entire interface **instantly** – inputs are kept. On the first start the Windows language is used if available. Details: [Languages](#en-f-languages). |
| 🪟 **Windows** | All dialogs open centered over the main window. |
| 🖱️ **Tooltips in tables** | If an entry in a table is cut off, hovering over it shows the full text – in all tables and dialogs. In the overview, the *Notes* column of add-ons also lists all errors and warnings. |
| ❓ **Help** | *About → Help* (`F1`) with a quick guide, *About → Keyboard shortcuts* (`Shift+F1`), *About → About* with version and found tools. |
| 🧹 **Cleanup** | `temp/` is emptied automatically, the ADB server is stopped on exit. |

<a id="en-f-overview"></a>

### 🧭 Overview of all forks

The **Overview** (first entry of the sidebar) is the tool's start page. It shows all profiles in `profiles/` (including imported ones in
subfolders) at a glance:

| Column / tile | Content |
|---|---|
| 🏷️ **Fork, app / package, version** | profile name, app name, package name, version name and code |
| 🧩 **Kodi** | Kodi version and CPU variants of the original APKs, e.g. *21.3 (arm64, armv7)* |
| 🕘 **Last build** | from the build history (*never* if there is none yet) |
| ⏰ **Schedule** | next automatic build from Windows Task Scheduler |
| 🔔 **New Kodi** | newer stable Kodi version on the mirror (highlighted in yellow) |
| ⬇️ **Downloads** | total APK downloads of all GitHub releases (GitHub upload only) |
| ⚠️ **Notes** | problems (missing Kodi APK or keystore, no package name – in red) and features (update notice, upload, parental lock, variants) |

Key figures are shown on top (number of forks, last built, active schedules, new Kodi versions, forks with problems,
repositories, add-ons). The loaded profile is bold. **Open** (double-click/Enter), **Open and build**, **Build history…**,
**Output folder**, **Schedule…** and **Refresh**. Local values appear instantly, schedules and online data are added in
the background.

Below are the **repositories** (version, number of add-ons, last built, upload target, notes such as missing add-on
sources) and the **add-ons** from the Addons folder (version, Kodi versions, latest ZIP, first error or note such as
*no ZIP yet* or *ZIP is older than the version in the folder*). *Open* / double-click jumps to the area, *Open and
build* or *Build ZIP* builds right away.

<a id="en-f-addons"></a>

### 🧩 Your own add-ons

In the sidebar under **Add-ons** you create your own Kodi add-ons. Every add-on is a folder in `Addons/<addon-id>/`
(fork and repository pick it up from there), finished ZIPs go to `Addons/ZIPs/<addon-id>-<version>.zip`.

| Step | Explanation |
|---|---|
| ✨ **New from template…** | Video plugin (`plugin.video.…`), program script (`script.…`), service (`service.…`), context menu (`context.…`) or library (`script.module.…`). Created are `addon.xml`, working example code (Python 2 and 3), `settings.xml`, English/German language files, `changelog.txt` and an icon. The ID is suggested from type and name. |
| 📥 **Take over…** | Bring an existing add-on as ZIP or folder into the Addons folder (e.g. a customized `pvr.stalker`) – without `.git`, `__pycache__`, `.pyc`. |
| 📝 **Details** | Name, version, provider, summary, description, news, license, website, source code and the Kodi version (sets `xbmc.python`: Kodi 18 = 2.26.0, Kodi 19+ = 3.0.0, Kodi 20+ = 3.0.1). *Save* writes the `addon.xml` – extensions, other languages and comments are kept. |
| 🔗 **Dependencies** | Add, edit (minimum version, optional) and remove. The *Status* column shows whether the add-on is in the Addons folder, part of Kodi or has to come from a repository. *Check online* looks up missing ones in the official Kodi repository. |
| 🔢 **Increase version…** | New version with changes (one per line): entry at the top of `changelog.txt` and optionally in `<news>`. |
| 🔎 **Check** | `addon.xml`, ID, version, name/provider, missing program files and images, matching Python version for the chosen Kodi version (*Check for*), **Python syntax** of all files, typical Python 2 leftovers (`xbmc.translatePath`, `iconImage=`, `has_key`), dependencies, language folders, image sizes, leftovers like `.git` and size. |
| 📦 **Build ZIP** | Checks and builds a clean ZIP (root folder = add-on ID). Same content = *unchanged*; different content with the same version is reported (Kodi would not see an update). Errors abort. |
| 📺 **To fork / repository** | Adds the add-on (the ZIP of the current version, otherwise the folder) to tab 5 of the loaded fork profile or to the open repository. |
| 📱 **Test on the device** | *ZIP to device* puts the ZIP into the Download folder (Kodi: *Install from zip file*). *Install directly* copies the add-on via ADB into the chosen Kodi app (*Search* finds all Kodi apps on the device) and replaces an existing version – after asking. *Restart Kodi* and *Kodi log live* (in the detail log) help with testing. A new add-on has to be enabled once in Kodi. |
| 📂 **Files** | All files of the add-on; double-click opens a file with the default program. |

<a id="en-f-repository"></a>

### 🗂️ Your own repository

In the sidebar under **Repository** you create your own Kodi repository from which Kodi installs your add-ons and
updates them automatically. The project is stored in `Repository/<name>/`, the result in `Repository/<name>/Build/`.

| Step | Explanation |
|---|---|
| 🧩 **Repository add-on** | ID (must start with `repository.`), name, version (*Increase version*), provider, description, icon and fanart. The repository add-on is generated automatically. *Import existing…* reads an existing repository add-on (ID, name, address, branches) and raises the version so Kodi sees the update. |
| 🌐 **Address** | Public `https` address of the output folder. For GitHub Pages, *Take address from GitHub* fills it in from `owner/repo` and the target folder. |
| 🌿 **Branches** | One branch for all Kodi versions or *Separate Kodi 18 + 19*: `zips` for Kodi 19 and newer (Python 3, SHA-256 check) and `leia` for Kodi 18 (Python 2, MD5). Every add-on can be in all or only some branches (*Branches…*). |
| 📦 **Add-ons** | Add folders or ZIPs, *All from folder* or *Take from fork*. The ZIPs are repacked cleanly (root folder = add-on ID, without `.git`, `__pycache__`, `.pyc`), images from `<assets>` are placed next to them. |
| 🔎 **Check** | Add-on ID and version, Python version matching the branch (e.g. a Python 3 add-on in the Kodi 18 branch), missing images. After building, the *Status* column shows: new, updated, unchanged or **content changed** (same version but different content – Kodi would not see an update). |
| 🏗️ **Build** | `addons.xml` + `.md5` per branch, per add-on `<id>-<version>.zip` with `.md5` and `.sha256`, the repository ZIP for installing and an `index.html` (for *Install from zip file* via a Kodi source). Older versions are kept up to the chosen number. |
| ⬆️ **Upload** | FTP, FTPS, SFTP (changed files only) or **GitHub**: all changes go into *one* commit in the chosen branch and folder – suitable for GitHub Pages. Old files in the GitHub folder can be removed. Password/token only in `config/settings.json`. |
| 📺 **Add to fork** | Adds the repository add-on to tab 5 of the loaded fork profile (an older version with the same ID is replaced). |

> 💡 Command line: `python main.py repo-build <project> [--upload]` and `python main.py repo-list`.

<a id="en-f-fullbackup"></a>

### 💾 Full backup

*File → Create full backup…* packs **everything the tool needs** into one file (`.skbackup`):

| Included | Details |
|---|---|
| 🗂️ Profiles, presets, build history, language files | folders `profiles/`, `presets/`, `history/`, `lang/` |
| 🔐 Keystores | `backups/keystores/` and every keystore a profile refers to – also outside the project |
| ⚙️ Settings | `config/settings.json` **including** keystore and upload passwords |
| 🖼️ Used files | graphics, add-ons, userdata templates and additional files of the profiles (also outside the project) |
| 📦 Kodi APKs | optional (can otherwise be downloaded again) |

- 🔒 **Encrypted** with AES-256-GCM, key derived from the password (at least 8 characters) with scrypt. Without the
  password nothing is readable – not even which files are included. Modified or damaged files are detected.
- ♻️ **Restore** (*File → Restore full backup…*): after the password the tool shows date and size. Existing files that
  differ are moved to `backups/restore_<time>/` first, identical ones are skipped. Files from outside the project go
  back to their old place – if the folder is missing (new PC) they go to `restored/` and profiles/settings are
  updated. Afterwards the tool reloads settings and profile.
- 💻 CLI: `python main.py backup TARGET.skbackup [--apks]` and `python main.py restore FILE.skbackup` (password is
  asked for or taken from the environment variable `SKFORGE_BACKUP_PASS`).

<a id="en-f-keyboard"></a>

### ⌨️ Keyboard, undo & accessibility

**Undo / redo** (*Edit*, `Ctrl+Z` / `Ctrl+Y`): every change to the profile – inputs, checkboxes, lists, dialogs such
as sources or parental lock, states loaded from the build history – can be undone (up to 50 steps). The tool jumps to
the tab where the change was made and names it in the status bar. Opening another profile starts a new history.

| Key | Action | | Key | Action |
|---|---|---|---|---|
| `Ctrl+N` / `Ctrl+O` | New project / open profile | | `F5` | FORK BUILD (all APKs) |
| `Ctrl+S` / `Ctrl+Shift+S` | Save / save as… | | `Shift+F5` | selected APK only |
| `Ctrl+Z` | Undo | | `F6` | Device test (last APK) |
| `Ctrl+Y` / `Ctrl+Shift+Z` | Redo | | `F7` | install last APK |
| `Ctrl+0` | Overview | | `Esc` | cancel the running task |
| `Ctrl+1` … `Ctrl+8` | Forks: tabs 1 to 8 | | `Ctrl+Shift+H` | Build history |
| `Ctrl+9` | Detail log | | `Ctrl+Shift+D` | Download Kodi APK |
| `Ctrl+Tab` / `Ctrl+Shift+Tab` | next / previous tab | | `F1` / `Shift+F1` | Help / keyboard shortcuts |
| `Alt` + letter | open menu (underlined) | | `Ctrl+Q` | Exit |
| `Ctrl+,` | Settings | | | |

All fields, checkboxes and buttons can be reached with `Tab`/`Shift+Tab` and Space, the focused field has a colored
border. In dialogs `Esc` closes the dialog.

<a id="en-f-diagnose"></a>

### 🩺 Diagnostic package

*About → Create diagnostic package…* (or `python main.py diagnose`) creates a ZIP for support: system info (Windows,
Python, Java, packages), tool status, logs, the build log of the window, the last 5 build reports and 3 device tests,
settings and the current profile. **Cleaned automatically**: passwords, tokens, upload credentials, secret add-on
settings (password, MAC, token …) and credentials in addresses are replaced by `***`, the user folder by `~`.
Keystores, APKs and screenshots are never included. A `LIESMICH.txt` lists the contents.

<a id="en-f-languages"></a>

### 🌐 Languages: selection, language files & language server

**Language selection:** at the top right of the header there is a drop-down with all languages in their own names
(*Deutsch, English, Français …*). Incomplete translations show their progress, e.g. *Français (87 %)*. The last entry
is **Download more languages …**. On the first start the tool uses the Windows language if available.

**Language files (`lang/*.po`):** all texts use the gettext format – the standard for translations that Kodi uses as
well. German is the source language (built into the program), English ships as `lang/en.po`. If a translation is
missing, English is shown.

| Structure of a language file | Meaning |
|---|---|
| `msgid "Datei"` | German source text – do not change |
| `msgstr "Fichier"` | translation (empty = not translated yet) |
| `#. EN: File` | English text as a hint for translators |
| `msgctxt "regex"` | text with variable parts – `{0}`, `{1}` … are placeholders and must be kept |

**Translating a new language:**

1. *View → Language → Create / update language file…*: enter the language code (e.g. `fr`, `tr`, `pt-br`) – the
   language name is suggested. This creates `lang/<code>.po` with all texts.
2. Translate it with a text editor or [Poedit](https://poedit.net) – bit by bit is fine.
3. *View → Language → Reload language files* – the language appears in the selection right away.

After a tool update, "update" adds new texts and keeps finished translations.

**Language server:** *Download more languages …* lists the languages on the server with progress, version and status
(*new*, *installed*, *update available*) and downloads the selected ones. The server holds a `languages.json` (list
with version, progress and SHA-256) and the `.po` files – e.g. in a GitHub repository. `python main.py lang-index`
creates everything ready for upload in `server/languages/` (with instructions in `README.md`).

🔒 **Security:** downloads use HTTPS only, size and SHA-256 are verified. Language files contain text only: search
expressions always come from the program, and translations with placeholders other than `{0}`, `{1}` … are
discarded.

[⬆️ back to top](#top)

---

<a id="en-cli"></a>

## 💻 Command line (CLI)

```bash
python main.py                                            # GUI
python main.py gui profiles/myfork.json                   # GUI with profile
python main.py build profiles/myfork.json                 # build all APKs of the profile
python main.py build profiles/myfork.json --install --launch
python main.py build profiles/myfork.json --test          # device test afterwards (60 s)
python main.py build profiles/myfork.json --variants --upload     # with variants, then upload
python main.py build profiles/myfork.json --install --device all  # on all connected devices
python main.py auto profiles/myfork.json [--upload] [--variants] [--major]   # update Kodi/add-ons + build
python main.py schedule profiles/myfork.json --time 03:00 [--weekly] [--upload] [--variants]
python main.py schedule profiles/myfork.json --remove     # remove the schedule
python main.py compare output/old_signed.apk output/new_signed.apk
python main.py check-addons profiles/myfork.json [--update]       # check/download add-on updates
python main.py build profiles/myfork.json --apk input/kodi-21.3-Omega-arm64-v8a.apk
python main.py devicetest output/xyz_signed.apk [--device SERIAL] [--seconds 60]
python main.py check-kodi profiles/myfork.json [--download]
python main.py export-profile profiles/myfork.json myfork.zip [--apks] [--keystore]
python main.py import-profile myfork.zip
python main.py download --list --abi armeabi-v7a          # available Kodi versions
python main.py download --version 21.3 --abi arm64-v8a    # download to input/
python main.py devices --connect 192.168.1.50             # ADB via Wi-Fi
python main.py install output/xyz_signed.apk --launch org.myfork.kodi
python main.py tools                                      # found tools
python main.py overview [--online]                        # overview of all forks
python main.py backup D:\backup.skbackup [--apks]         # encrypted full backup
python main.py restore D:\backup.skbackup [--yes]         # restore full backup
python main.py diagnose [TARGET.zip]                      # cleaned diagnostic package
python main.py lang-template fr Français                  # create/update lang/fr.po
python main.py lang-index                                 # files for the language server (server/languages/)
python main.py lang-list [--url URL]                      # languages on the language server
python main.py lang-download fr [--url URL]               # download or update a language
python main.py repo-build myrepo [--upload] [--full]      # build your own repository (and upload it)
python main.py repo-list                                  # show repository projects
python main.py addon-list                                 # your own add-ons with a quick check
python main.py addon-check plugin.video.x [--kodi 21]     # check an add-on
python main.py addon-build plugin.video.x [--kodi 21]     # check and build the ZIP into Addons/ZIPs
```

- 🔑 Keystore password: environment variable `SKFORGE_KS_PASS` (optionally `SKFORGE_KEY_PASS`),
  otherwise the one saved in the GUI. Full backup password: `SKFORGE_BACKUP_PASS`, otherwise it is asked for.
  The former names `KODI_FORK_BUILDER_…` still work.
- 💾 If a build changes the profile (automatic version code, stored certificate), the profile file is saved.
- 🔢 Exit code `0` = all successful, `1` = error, `2` = wrong usage.

[⬆️ back to top](#top)

---

<a id="en-folders"></a>

## 📁 Folder structure

**Project folder** (default `Documents\sKulls Forge`, can be changed under *Settings → Project folder*) – all your own data:

| Folder | Contents |
|---|---|
| 📂 `Kodi-APKs/` | original Kodi APKs |
| 📂 `Images/` | images for all projects: `Icons/`, `Banner/`, `Wallpaper/`, `Splash/`, `Fanart/` |
| 📂 `Addons/` | your own add-ons (one folder per add-on, also ZIPs) for forks and repositories; `Addons/ZIPs/` = finished add-on ZIPs |
| 📂 `Repository/<name>/` | repository project `<name>.json`, `Build/` = finished repository to upload, `Fork-Addon/` = repository add-on to embed |
| 📂 `Config/` | `settings.json`: settings, upload targets, passwords and tokens |
| 📂 `Presets/` | your own presets |
| 📂 `Temp/` | temporary files (cleaned up automatically) |
| 📂 `Logs/` | log files `forge.log` and `auto.log` (automatic builds) |
| 📂 `Wizard/` | `Wizard/Build/` = finished wizard ZIP, `Wizard/Source/` = unpacked version |
| 📂 `Backups/` | full backups, `Backups/Keystores/` automatic keystore backups, `restore_<time>/` files replaced during a restore |
| 📂 `History/` | build history |
| 📂 `Projects/<project>/` | **one folder per fork project:** |
| &nbsp;&nbsp;📄 `<project>.json` | fork profile |
| &nbsp;&nbsp;📂 `Keystore/` | signing key of the fork – **keep it safe** |
| &nbsp;&nbsp;📂 `Builds/` | finished forks: `…_signed.apk`, `…_report.txt`, `…_qr.png`, `update.json`, `index.html` |

*File → New project…* (`Ctrl+N`) creates a project and can **choose** what to copy from another project: fork settings,
keystore. Images, add-ons, repositories and wizard are available to all projects anyway.

**Program folder** – the tool itself:

| Folder | Contents |
|---|---|
| 📂 `resources/` | bundled tools |
| 📂 `lang/` | language files: `en.po` (bundled), your own and downloaded `<code>.po` |
| 📂 `cache/repo/` | add-on index and add-ons loaded from the Kodi repo (may be deleted) |
| 📂 `work/` | working files during the build (cleaned up) |
| 📂 `server/languages/` | files for the language server to upload (`python main.py lang-index`) |
| 📂 `modules/` | program code |

> ℹ️ Older installations kept everything in the program folder (`config/`, `presets/`, `profiles/`, `input/`,
> `output/`, `repos/`, `AddToFork/`). On the first start the tool **copies** the data into the project folder at the push of a
> button – the old files stay.

[⬆️ back to top](#top)

---

<a id="en-technical"></a>

## 🔧 How the fork works technically

- 🏷️ **Package name**: set directly in the manifest, so the resource table carries the new name as well. Kodi needs
  its Java classes **twice**: `libkodi.so` registers its functions on `org/xbmc/kodi/…` (the originals stay
  unchanged), but at runtime also loads `<new package>.XBMCBroadcastReceiver` and `.XBMCInputDeviceListener`.
  Therefore the class package is additionally copied under the new name – without this copy the fork crashes on
  start. Provider authorities, autostart and SharedPreferences point to the new name. Class copies of an already
  renamed fork are removed automatically.
- 🧩 **Add-ons** are extracted to `assets/addons/<id>` and registered in `system/addon-manifest.xml`.
- 🎛️ **Settings** are set as `<default>` in `system/settings/settings.xml` (and `android.xml` if it overrides the
  default) and apply on first start.
- 🗃️ **Userdata**: `advancedsettings.xml` → `assets/system/`, `favourites.xml`/`RssFeeds.xml`/`Lircmap.xml` →
  `assets/userdata/` (copied by Kodi itself). Everything else – including preset add-on settings and sources – is
  copied into the profile on first start by the generated service add-on `service.<package>.firstrun`, **without
  overwriting existing files**. After an update it adds new files.
- 🏠 **Skin settings** (home menu) are set via `Skin.SetBool(…)` as soon as the home window is open – a copied skin
  settings file would be overwritten by Kodi.
- 🔒 **Parental lock**: the first-run add-on writes `profiles.xml` with lock mode and MD5 code – on start and once
  more after Kodi has saved its settings on exit.
- 🆕 **"What's new"**: `whatsnew.txt` (and `whatsnew_en.txt` for a non-German Kodi) inside the first-run add-on, shown only if an older version was already set up.
- 🔔 **Update notice**: service add-on `service.<package>.update`, Python 2/3 compatible, HTTPS only.

[⬆️ back to top](#top)

---

<a id="en-faq"></a>

## 🩺 Troubleshooting

| Problem | Solution |
|---|---|
| ❌ `INSTALL_FAILED_UPDATE_INCOMPATIBLE` | A version signed with a different keystore is installed – uninstall it first (deletes its data). |
| ❌ `INSTALL_FAILED_VERSION_DOWNGRADE` | The installed version is newer – increase the version code or enable *increase automatically*. |
| ❌ `INSTALL_FAILED_CONFLICTING_PROVIDER` | Another Kodi uses the same providers – change the package name. |
| ❌ `INSTALL_FAILED_NO_MATCHING_ABIS` | The APK does not match the CPU – build the other ABI (arm64-v8a/armeabi-v7a). |
| ⛔ Build aborts: "keystore/alias does not match the certificate" | Choose the original keystore (backup in `backups/keystores/`). Only *reset certificate* on purpose. |
| ⬛ Black screen with Kodi 18/19 | A limitation of Kodi itself on new devices – use Kodi 20+. |
| ⬛ Device test screenshot is black | The device was locked or the screen was off – unlock it and test again. |
| ⚠️ "Dependency … is not in the Kodi repository" | Embed the add-on as ZIP from its own repository in tab 5. |
| 🔁 Settings/sources only active after a restart | Normal: the first-run add-on copies on the first start – then restart Kodi. |
| 🧰 Tools missing | *Settings → Tools* (`Ctrl+,`); install a Java JDK – everything else is in `resources/`. |
| 💥 Fork crashes | Run the *device test* or read the crash log: `resources\adb.exe logcat -d -b crash` |
| 🔒 Parental lock not active | It is active **from the second start**. An installed version without the lock also gets it on the next restart after the update. |
| 🔑 Parental lock code forgotten | Uninstall and reinstall the fork (data is lost) – the code is only stored as a checksum. |
| 🔒 "Wrong password" for the full backup | The password cannot be recovered – without it the backup cannot be read. |
| 📦 "needs the package 'cryptography'" | Run `pip install cryptography`. |
| 🆘 Asking for help | *About → Create diagnostic package…* and send the ZIP – passwords are removed. |
| ⏰ Schedule does not build | Check `Logs/auto.log` in the project folder; passwords saved in tab 7? Was the PC running at that time? *Task Scheduler → sKulls Forge*. |
| 🔔 No update notice | The update.json address must start with `https://` – `http://` is ignored for security reasons. |

[⬆️ back to top](#top)

---

<a id="en-legal"></a>

## ⚖️ Legal

Kodi® is a trademark of the XBMC Foundation. This tool is not affiliated with the XBMC Foundation and is not an
official Kodi product. Forks created with this tool must comply with Kodi's **GPL license**.

[⬆️ back to top](#top)
