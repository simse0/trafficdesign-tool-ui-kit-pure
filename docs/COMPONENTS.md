# trafficdesign UI Kit - Komponenten-Dokumentation

Detaillierte Dokumentation aller UI-Komponenten mit vollständigen Code-Beispielen.

## Inhaltsverzeichnis

- [Buttons](#buttons)
- [Cards & Container](#cards--container)
- [Formulare](#formulare)
- [Tabellen](#tabellen)
- [Badges & Tags](#badges--tags)
- [Alerts & Notifications](#alerts--notifications)
- [Navigation](#navigation)
- [Avatare](#avatare)
- [Dropdowns](#dropdowns)
- [Modals](#modals)
- [Progress & Loading](#progress--loading)
- [Listen & Feeds](#listen--feeds)
- [Workflows & Stepper](#workflows--stepper)

---

## Buttons

### Standard Buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-success">Success</button>
```

### Button-Größen

```html
<button class="btn btn-primary btn-xs">Extra Small</button>
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Icon Button

```html
<button class="btn-icon">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
</button>
```

### Button mit Icon

```html
<button class="btn btn-primary">
  <svg width="16" height="16">...</svg>
  Mit Icon
</button>
```

### Disabled State

```html
<button class="btn btn-primary" disabled>Disabled</button>
```

---

## Cards & Container

### Tool Card (Standard)

```html
<div class="card-tool">
  <div class="card-tool-header">
    <h2 class="font-semibold">Titel</h2>
    <button class="btn btn-secondary btn-sm">Aktion</button>
  </div>
  <div class="card-tool-body">
    Inhalt hier...
  </div>
  <div class="card-tool-footer">
    <button class="btn btn-secondary">Abbrechen</button>
    <button class="btn btn-primary">Speichern</button>
  </div>
</div>
```

### Panel

```html
<div class="panel panel-padded">
  Einfacher Container mit Padding
</div>
```

### Stat Card (KPI)

```html
<div class="stat-card">
  <div class="stat-card-icon bg-brand-light text-brand-primary">
    <svg width="24" height="24">...</svg>
  </div>
  <div class="stat-card-content">
    <div class="stat-card-value">1.234</div>
    <div class="stat-card-label">Besucher</div>
  </div>
  <div class="stat-card-trend stat-card-trend-up">
    <svg width="16" height="16">...</svg>
    +12.5%
  </div>
</div>
```

---

## Formulare

### Text Input

```html
<div>
  <label class="label">Name</label>
  <input type="text" class="input-field" placeholder="Eingabe...">
  <p class="help-text">Optionaler Hilfetext</p>
</div>
```

### Pflichtfeld

```html
<label class="label label-required">E-Mail</label>
<input type="email" class="input-field">
```

### Input mit Icon

```html
<div class="input-group">
  <svg class="input-group-icon" width="16" height="16">...</svg>
  <input type="search" class="input-field" placeholder="Suchen...">
</div>
```

### Validierung

```html
<!-- Error -->
<input type="text" class="input-field input-field-error">
<p class="error-text">Dieses Feld ist erforderlich</p>

<!-- Success -->
<input type="text" class="input-field input-field-success">
```

### Select

```html
<select class="select-field">
  <option value="">Bitte wählen</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

### Textarea

```html
<textarea class="input-field" rows="4" placeholder="Beschreibung..."></textarea>
```

### Toggle Switch

```html
<button class="toggle" onclick="this.classList.toggle('active')">
  <span class="toggle-handle"></span>
</button>

<!-- Aktiv -->
<button class="toggle active">
  <span class="toggle-handle"></span>
</button>
```

### Checkbox & Radio

```html
<label class="flex items-center gap-2">
  <input type="checkbox" class="checkbox-field">
  <span>Option aktivieren</span>
</label>

<label class="flex items-center gap-2">
  <input type="radio" name="group" class="radio-field">
  <span>Option A</span>
</label>
```

---

## Tabellen

### Standard Tabelle

```html
<table class="table-tool">
  <thead>
    <tr>
      <th>Name</th>
      <th>E-Mail</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Max Mustermann</td>
      <td>max@example.com</td>
      <td><span class="badge badge-success">Aktiv</span></td>
    </tr>
  </tbody>
</table>
```

### Striped

```html
<table class="table-tool table-tool-striped">...</table>
```

### Compact

```html
<table class="table-tool table-tool-compact">...</table>
```

---

## Badges & Tags

### Badges

```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Erfolg</span>
<span class="badge badge-warning">Warnung</span>
<span class="badge badge-error">Fehler</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-neutral">Neutral</span>
```

### Tags

```html
<span class="tag">
  JavaScript
  <button class="tag-close">×</button>
</span>
```

---

## Alerts & Notifications

### Alerts

```html
<div class="alert alert-success">
  <svg class="alert-icon" width="20" height="20">...</svg>
  <div class="alert-content">
    <div class="alert-title">Erfolg!</div>
    <div>Die Aktion wurde erfolgreich ausgeführt.</div>
  </div>
</div>

<!-- Varianten: alert-info, alert-warning, alert-error -->
```

### Toast Notifications (via JavaScript)

```javascript
notify('Gespeichert!', 'success');
notify('Fehler aufgetreten', 'error');
notify('Bitte beachten', 'warning');
notify('Information', 'info');

// Mit Dauer (ms)
notify('Kurze Nachricht', 'info', 2000);
```

---

## Navigation

### Sidebar

```html
<aside class="sidebar">
  <div class="sidebar-brand">
    <img src="logo.svg" alt="Logo">
    <span class="text-lg font-bold text-white">Brand</span>
  </div>
  <nav class="sidebar-nav">
    <div class="sidebar-section">
      <div class="sidebar-section-title">Hauptmenü</div>
      <a href="#" class="sidebar-link sidebar-link-active">
        <svg class="sidebar-link-icon">...</svg>
        Dashboard
      </a>
      <a href="#" class="sidebar-link">
        <svg class="sidebar-link-icon">...</svg>
        Einstellungen
      </a>
    </div>
  </nav>
</aside>
```

### Topbar

```html
<header class="topbar">
  <div class="topbar-left">
    <button class="btn-icon" onclick="TDUI.toggleSidebar()">
      <svg>...</svg>
    </button>
    <nav class="breadcrumbs">
      <a href="#" class="breadcrumbs-item">Home</a>
      <span class="breadcrumbs-separator">/</span>
      <span class="breadcrumbs-current">Aktuelle Seite</span>
    </nav>
  </div>
  <div class="topbar-right">
    <!-- User Menu, Notifications, etc. -->
  </div>
</header>
```

### Tabs

```html
<div class="tabs" data-tabs>
  <button class="tab tab-active" data-tab="tab1">Tab 1</button>
  <button class="tab" data-tab="tab2">Tab 2</button>
  <button class="tab" data-tab="tab3">Tab 3</button>
</div>
<div class="tab-content">
  <div data-tab-panel="tab1">Inhalt Tab 1</div>
  <div data-tab-panel="tab2" style="display:none">Inhalt Tab 2</div>
  <div data-tab-panel="tab3" style="display:none">Inhalt Tab 3</div>
</div>
```

### Pagination

```html
<div class="pagination">
  <button class="pagination-item">←</button>
  <button class="pagination-item">1</button>
  <button class="pagination-item pagination-item-active">2</button>
  <button class="pagination-item">3</button>
  <button class="pagination-item">→</button>
</div>
```

---

## Avatare

### Größen

```html
<div class="avatar avatar-xs"><span>AB</span></div>
<div class="avatar avatar-sm"><span>AB</span></div>
<div class="avatar avatar-md"><span>AB</span></div>
<div class="avatar avatar-lg"><span>AB</span></div>
<div class="avatar avatar-xl"><span>AB</span></div>
```

### Mit Bild

```html
<div class="avatar avatar-md">
  <img src="user.jpg" alt="User">
</div>
```

### Mit Status

```html
<div class="avatar avatar-md">
  <span>AB</span>
  <span class="avatar-status avatar-status-online"></span>
</div>
<!-- Status: avatar-status-online, avatar-status-offline, avatar-status-busy, avatar-status-away -->
```

### Avatar Group

```html
<div class="avatar-group">
  <div class="avatar avatar-sm"><span>A</span></div>
  <div class="avatar avatar-sm"><span>B</span></div>
  <div class="avatar avatar-sm"><span>C</span></div>
  <div class="avatar avatar-sm avatar-overflow"><span>+5</span></div>
</div>
```

---

## Dropdowns

```html
<div class="dropdown">
  <button class="btn btn-secondary" data-dropdown-trigger>
    Menü öffnen
    <svg width="16" height="16">...</svg>
  </button>
  <div class="dropdown-menu">
    <div class="dropdown-header">Aktionen</div>
    <a href="#" class="dropdown-item">
      <svg width="16" height="16">...</svg>
      Bearbeiten
    </a>
    <a href="#" class="dropdown-item">Kopieren</a>
    <div class="dropdown-divider"></div>
    <a href="#" class="dropdown-item dropdown-item-danger">Löschen</a>
  </div>
</div>
```

---

## Modals

```html
<!-- Trigger -->
<button class="btn btn-primary" data-modal-open="my-modal">
  Modal öffnen
</button>

<!-- Modal -->
<div class="modal-backdrop" id="my-modal-backdrop"></div>
<div class="modal" id="my-modal">
  <div class="modal-header">
    <h3 class="modal-title">Modal Titel</h3>
    <button class="btn-icon" data-modal-close>
      <svg>...</svg>
    </button>
  </div>
  <div class="modal-body">
    <p>Modal Inhalt hier...</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" data-modal-close>Abbrechen</button>
    <button class="btn btn-primary">Bestätigen</button>
  </div>
</div>
```

---

## Progress & Loading

### Progress Bar

```html
<div class="progress-bar">
  <div class="progress-bar-fill" style="width: 75%;"></div>
</div>

<!-- Varianten -->
<div class="progress-bar progress-bar-success">...</div>
<div class="progress-bar progress-bar-warning">...</div>
<div class="progress-bar progress-bar-error">...</div>
```

### Spinner

```html
<span class="spinner spinner-sm"></span>
<span class="spinner spinner-md"></span>
<span class="spinner spinner-lg"></span>
```

### Skeleton Loader

```html
<div class="skeleton skeleton-text" style="width: 100%;"></div>
<div class="skeleton skeleton-title" style="width: 60%;"></div>
<div class="skeleton skeleton-avatar" style="width: 40px; height: 40px;"></div>
<div class="skeleton skeleton-button"></div>
```

---

## Listen & Feeds

### Activity Feed

```html
<div class="activity-feed">
  <div class="activity-item">
    <div class="activity-indicator activity-indicator-success"></div>
    <div class="activity-content">
      <div class="activity-header">
        <span class="font-medium">Max Mustermann</span>
        <span class="activity-time">vor 5 Min.</span>
      </div>
      <div class="activity-text">Hat ein Dokument hochgeladen</div>
    </div>
  </div>
</div>
```

### Timeline

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-marker timeline-marker-success"></div>
    <div class="timeline-content">
      <div class="timeline-header">
        <span class="font-medium">Schritt abgeschlossen</span>
        <span class="timeline-date">10:30</span>
      </div>
      <div class="timeline-text">Beschreibung...</div>
    </div>
  </div>
</div>
```

### Task List

```html
<div class="task-list">
  <div class="task-item">
    <input type="checkbox" class="task-checkbox">
    <span class="task-text">Aufgabe erledigen</span>
  </div>
  <div class="task-item task-completed">
    <input type="checkbox" class="task-checkbox" checked>
    <span class="task-text">Erledigte Aufgabe</span>
  </div>
</div>
```

---

## Workflows & Stepper

### Horizontaler Stepper

```html
<div class="workflow-stepper">
  <div class="workflow-step workflow-step-completed">
    <div class="workflow-step-icon">✓</div>
    <div class="workflow-step-title">Schritt 1</div>
    <div class="workflow-step-date">Erledigt</div>
  </div>
  <div class="workflow-connector workflow-connector-completed"></div>
  <div class="workflow-step workflow-step-active">
    <div class="workflow-step-icon">2</div>
    <div class="workflow-step-title">Schritt 2</div>
    <div class="workflow-step-date">In Bearbeitung</div>
  </div>
  <div class="workflow-connector"></div>
  <div class="workflow-step">
    <div class="workflow-step-icon">3</div>
    <div class="workflow-step-title">Schritt 3</div>
    <div class="workflow-step-date">Ausstehend</div>
  </div>
</div>
```

### Kanban Board

```html
<div class="kanban-board">
  <div class="kanban-column">
    <div class="kanban-column-header">
      <span>To Do</span>
      <span class="badge badge-neutral">3</span>
    </div>
    <div class="kanban-column-body">
      <div class="kanban-card">
        <div class="kanban-card-title">Task Titel</div>
        <div class="kanban-card-desc">Beschreibung</div>
      </div>
    </div>
  </div>
</div>
```

---

## Best Practices

1. **Semantisches HTML**: Verwende `<button>` für Aktionen, `<a>` für Links
2. **Accessibility**: Füge `aria-label` bei Icon-only Buttons hinzu
3. **Konsistenz**: Nutze die vordefinierten Klassen statt Custom CSS
4. **Responsive**: Nutze Grid-Klassen wie `md:grid-cols-2`, `lg:grid-cols-3`
5. **Feedback**: Zeige Loading-States und Erfolgsmeldungen

