# trafficdesign UI Kit

> Framework-unabhängiges UI Kit für Enterprise-Dashboards.  
> Funktioniert ohne Build-Tools, Tailwind CSS oder Alpine.js.

---

## Schwester-Repositories

Für Laravel-Projekte gibt es ein spezielles Schwester-Repository mit Laravel-spezifischen Integrationen und Beispielen:

- **[trafficdesign-tool-ui-kit-laravel](https://github.com/simse0/trafficdesign-tool-ui-kit-laravel)** - Laravel-Integration des trafficdesign UI Kits

---

## In eigenes Projekt integrieren

### Schritt 1: Repository klonen

Klone dieses Repository in dein Projekt (z.B. als Submodul oder Kopie):

```bash
# Als Git Submodul (empfohlen)
git submodule add https://github.com/DEIN-USER/td-ui-kit.git ui-kit

# Oder einfach kopieren
git clone https://github.com/DEIN-USER/td-ui-kit.git ui-kit
```

### Schritt 2: .cursorrules in deinem Projekt erstellen

Erstelle eine `.cursorrules` Datei im Root deines Projekts:

```markdown
# Projekt-Regeln

Dieses Projekt verwendet das trafficdesign UI Kit.

## UI Kit Referenz

Für alle UI-Komponenten nutze das trafficdesign UI Kit:
- **Klassen-Referenz**: Siehe `ui-kit/docs/AI-CONTEXT.md`
- **Beispiele**: Siehe `ui-kit/docs/COMPONENTS.md`
- **Theming**: Siehe `ui-kit/docs/THEMING.md`

## Dateien einbinden

```html
<link rel="stylesheet" href="ui-kit/dist/td-ui-kit.css">
<script src="ui-kit/dist/td-ui-kit.js"></script>
```

## Wichtige Klassen

- Buttons: `.btn .btn-primary|secondary|ghost|danger|success`
- Cards: `.card-tool` mit `.card-tool-header`, `.card-tool-body`, `.card-tool-footer`
- Inputs: `.input-field`, `.select-field`, `.toggle`
- Tables: `.table-tool`, `.table-tool-striped`
- Alerts: `.alert .alert-success|warning|error|info`

Befolge die Patterns aus dem UI Kit für konsistentes Design.
```

### Schritt 3: Im Projekt verwenden

Binde die Assets in deinen HTML-Dateien ein:

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meine App</title>
  <link rel="stylesheet" href="ui-kit/dist/td-ui-kit.css">
</head>
<body>
  
  <button class="btn btn-primary">Los geht's</button>
  
  <script src="ui-kit/dist/td-ui-kit.js"></script>
</body>
</html>
```

---

## Beispiel-Prompts für Cursor AI

Wenn das UI Kit integriert und die `.cursorrules` erstellt ist, kannst du Cursor so nutzen:

### Neue Seite erstellen

> "Erstelle eine Dashboard-Seite mit Sidebar, Topbar und 4 Stat-Cards. Nutze das trafficdesign UI Kit aus ui-kit/docs/AI-CONTEXT.md"

### Formular bauen

> "Baue ein Kontaktformular mit Name, E-Mail, Nachricht und Submit-Button. Verwende die Form-Klassen aus dem UI Kit."

### Tabelle mit Daten

> "Erstelle eine Tabelle mit Benutzerdaten (Name, E-Mail, Status als Badge, Aktions-Dropdown). Nutze table-tool und die Dropdown-Komponenten."

### Modal hinzufügen

> "Füge ein Bestätigungs-Modal hinzu das bei Klick auf 'Löschen' erscheint. Verwende die Modal-Klassen aus dem UI Kit."

---

## Projekt-Struktur

```
td-ui-kit/
├── dist/                  # Produktions-Assets (einbinden!)
│   ├── td-ui-kit.css      # Alle Styles
│   ├── td-ui-kit.js       # Vanilla JS
│   └── td-charts.js       # ApexCharts Theme
├── docs/                  # Dokumentation
│   ├── AI-CONTEXT.md      # Kompakte Referenz für AI
│   ├── COMPONENTS.md      # Detaillierte Doku
│   └── THEMING.md         # CSS-Variablen
├── examples/              # Demo-Seiten
│   ├── index.html         # Dashboard
│   └── pages/             # Komponenten-Demos
├── .cursorrules           # Cursor AI Regeln
└── README.md
```

## Dokumentation

| Datei | Beschreibung |
|-------|--------------|
| [docs/AI-CONTEXT.md](docs/AI-CONTEXT.md) | Kompakte Klassen-Referenz für AI-Assistenten |
| [docs/COMPONENTS.md](docs/COMPONENTS.md) | Ausführliche Beispiele aller Komponenten |
| [docs/THEMING.md](docs/THEMING.md) | CSS-Variablen und Theming-Anleitung |

## Enthaltene Komponenten

- **Buttons**: Primary, Secondary, Ghost, Danger, Success
- **Cards**: Tool Card, Panels, Stat Cards
- **Formulare**: Inputs, Select, Toggle, Validation
- **Tabellen**: Standard, Striped, Compact
- **Navigation**: Sidebar, Topbar, Tabs, Breadcrumbs
- **Feedback**: Alerts, Toasts, Badges, Progress
- **Overlays**: Modals, Dropdowns, Tooltips
- **Listen**: Activity Feed, Timeline, Task List
- **Workflows**: Stepper, Kanban Board

## JavaScript API

```javascript
// Toast Notifications
notify('Nachricht', 'success'); // success | error | warning | info

// Modal
TDUI.openModal('modal-id');
TDUI.closeModal('modal-id');

// Utilities
TDUI.formatNumber(12345);     // "12.345"
TDUI.formatCurrency(99.99);   // "99,99 €"
```

## Theming

Überschreibe CSS-Variablen für eigene Farben:

```css
:root {
  --td-brand-primary: #6366F1;
  --td-brand-primary-hover: #4F46E5;
}
```

Siehe [docs/THEMING.md](docs/THEMING.md) für Details.

## Live-Demo

Starte einen lokalen Server:

```bash
cd examples
python3 -m http.server 8080
# Öffne http://localhost:8080
```

## Lizenz

MIT License - Basierend auf [trafficdesign-tool-ui-kit](https://github.com/simse0/trafficdesign-tool-ui-kit)
