# LHNO Command Helper

Eine schlanke, statische Webseite zum Sammeln, Suchen und Kopieren wichtiger Wartungs- und Administrationsbefehle.  
Das Projekt ist bewusst einfach gehalten: **HTML + CSS + JavaScript**, keine Datenbank, kein Build-Prozess, keine Abhängigkeiten.

## Ziel

Der Command Helper dient als persönliches Admin-Cockpit für wiederkehrende Befehle, ähnlich der Idee von Helper-Script-Sammlungen, aber für allgemeine Wartung und Diagnose.

Aktuell vorbereitet für:

- Windows
- Linux
- macOS
- Android über ADB
- iPhone/iOS über macOS/libimobiledevice

## Dateien

```text
command-helper/
├── index.html      # Seitenstruktur
├── styles.css      # LHNO-Design, Layout, Responsive Design
├── script.js       # Befehlsdaten, Filter, Suche, Copy-Funktion
└── README.md       # Projektdokumentation
```

## Nutzung

1. Den Ordner entpacken.
2. `index.html` im Browser öffnen.
3. Über System-Tabs, Kategorien oder Suche filtern.
4. Mit **Befehl kopieren** den gewünschten Befehl in die Zwischenablage übernehmen.

Die Seite funktioniert lokal ohne Server.

## Neue Befehle ergänzen

Neue Befehle werden in `script.js` im Array `commands` ergänzt.

Beispiel:

```js
{
  system: "Windows",
  category: "Netzwerk",
  title: "DNS-Cache leeren",
  description: "Leert den lokalen DNS-Cache.",
  command: "ipconfig /flushdns",
  shell: "PowerShell / CMD als Administrator",
  risk: "safe",
  tags: ["dns", "cache", "netzwerk"]
}
```

## Felder eines Befehls

| Feld | Bedeutung | Beispiel |
|---|---|---|
| `system` | Betriebssystem oder Plattform | `Windows`, `Linux`, `macOS` |
| `category` | Funktionsbereich | `Netzwerk`, `Updates`, `Logs` |
| `title` | Kurzer Anzeigename | `DNS-Cache leeren` |
| `description` | Kurze Erklärung | `Leert den lokalen DNS-Cache.` |
| `command` | Kopierbarer Befehl | `ipconfig /flushdns` |
| `shell` | Ausführungsumgebung | `PowerShell / CMD als Administrator` |
| `risk` | Risiko-Stufe | `safe`, `medium`, `danger` |
| `tags` | Suchbegriffe | `["dns", "netzwerk"]` |

## Risiko-Stufen

| Wert | Anzeige | Bedeutung |
|---|---|---|
| `safe` | Gering | Diagnose oder unkritische Anzeige |
| `medium` | Mittel | Änderung am System möglich |
| `danger` | Hoch | Potenziell destruktiv oder schwer reversibel |

## Design

Das Design orientiert sich am LHNO/LNHO-Stil:

- ruhiger technischer Look
- Blau/Cyan/Violet-Gradient
- dunkler Standardmodus
- helle Ansicht umschaltbar
- Karten mit 16px Radius
- subtile Schatten
- Code in Monospace-Schrift

## Deployment

Geeignet für:

- lokalen Browserstart
- internen Webserver
- GitHub Pages
- Nginx/Apache
- einfache Nextcloud-/Intranet-Ablage

Für einen Webserver genügt es, alle vier Dateien in ein gemeinsames Verzeichnis zu legen.

## Hinweise

Einige Befehle benötigen Administratorrechte oder Root-Rechte. Riskante Befehle sind entsprechend markiert, ersetzen aber keine fachliche Prüfung vor der Ausführung.

## Mögliche spätere Erweiterungen

- Favoriten
- Export/Import einer `commands.json`
- Rollen oder Profile, z. B. Schule, Server, Privatgeräte
- eigene Warnhinweise pro Befehl
- Markdown-Notizen pro Befehl
- getrennte Daten-Dateien pro Plattform
- Offline-PWA mit App-Icon
