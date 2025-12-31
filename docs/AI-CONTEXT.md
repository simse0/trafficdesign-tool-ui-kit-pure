# trafficdesign UI Kit - AI Quick Reference

> Kompakte Referenz für AI-Assistenten. Für Details siehe `COMPONENTS.md`.

## Einbinden

```html
<link rel="stylesheet" href="dist/td-ui-kit.css">
<script src="dist/td-ui-kit.js"></script>
<!-- Optional: Charts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script src="dist/td-charts.js"></script>
```

## CSS-Klassen Übersicht

### Buttons
| Klasse | Beschreibung |
|--------|--------------|
| `.btn` | Basis-Button |
| `.btn-primary` | Primary (türkis) |
| `.btn-secondary` | Secondary (weiß mit Border) |
| `.btn-ghost` | Transparent |
| `.btn-danger` | Rot |
| `.btn-success` | Grün |
| `.btn-xs` `.btn-sm` `.btn-lg` | Größen |
| `.btn-icon` | Nur Icon |

### Cards & Container
| Klasse | Beschreibung |
|--------|--------------|
| `.card-tool` | Haupt-Card-Container |
| `.card-tool-header` | Card Header |
| `.card-tool-body` | Card Body |
| `.card-tool-footer` | Card Footer (grauer BG) |
| `.panel` | Einfacher Container |
| `.panel-padded` | Panel mit Padding |

### Formulare
| Klasse | Beschreibung |
|--------|--------------|
| `.input-field` | Text Input |
| `.input-field-error` | Error State |
| `.input-field-success` | Success State |
| `.select-field` | Select Dropdown |
| `.toggle` + `.toggle-handle` | Toggle Switch |
| `.label` | Label |
| `.label-required` | Label mit * |
| `.help-text` | Hilfetext |
| `.error-text` | Fehlertext |

### Tabellen
| Klasse | Beschreibung |
|--------|--------------|
| `.table-tool` | Basis-Tabelle |
| `.table-tool-striped` | Zebra-Streifen |
| `.table-tool-compact` | Kompakter |

### Badges & Tags
| Klasse | Beschreibung |
|--------|--------------|
| `.badge` | Basis Badge |
| `.badge-primary` `.badge-success` `.badge-warning` `.badge-error` `.badge-info` `.badge-neutral` | Farben |
| `.tag` | Tag mit optional `.tag-close` |

### Alerts & Notifications
| Klasse | Beschreibung |
|--------|--------------|
| `.alert` | Basis Alert |
| `.alert-success` `.alert-warning` `.alert-error` `.alert-info` | Varianten |
| `.toast` | Toast Notification |
| `.toast-success` `.toast-error` `.toast-warning` `.toast-info` | Varianten |

### Navigation
| Klasse | Beschreibung |
|--------|--------------|
| `.sidebar` | Sidebar Container |
| `.sidebar-brand` | Logo-Bereich |
| `.sidebar-nav` | Navigation Container |
| `.sidebar-section` | Gruppierung |
| `.sidebar-section-title` | Überschrift |
| `.sidebar-link` | Nav Link |
| `.sidebar-link-active` | Aktiver Link |
| `.topbar` | Header Bar |
| `.breadcrumbs` | Breadcrumb Navigation |
| `.tabs` + `.tab` | Tab Navigation |
| `.tab-active` | Aktiver Tab |

### Avatare
| Klasse | Beschreibung |
|--------|--------------|
| `.avatar` | Basis Avatar |
| `.avatar-xs` `.avatar-sm` `.avatar-md` `.avatar-lg` `.avatar-xl` | Größen |
| `.avatar-status-online` `.avatar-status-offline` `.avatar-status-busy` | Status |
| `.avatar-group` | Gruppierte Avatare |

### Progress & Loading
| Klasse | Beschreibung |
|--------|--------------|
| `.progress-bar` + `.progress-bar-fill` | Progress Bar |
| `.spinner` `.spinner-sm` `.spinner-md` `.spinner-lg` | Spinner |
| `.skeleton` `.skeleton-text` `.skeleton-title` | Skeleton Loader |

### Dropdown & Modal
| Klasse | Beschreibung |
|--------|--------------|
| `.dropdown` | Dropdown Container |
| `.dropdown-menu` | Dropdown Menü |
| `.dropdown-item` | Menü Item |
| `.modal` | Modal Container |
| `.modal-header` `.modal-body` `.modal-footer` | Modal Teile |
| `.modal-backdrop` | Overlay |

### Listen & Feeds
| Klasse | Beschreibung |
|--------|--------------|
| `.activity-feed` + `.activity-item` | Activity Feed |
| `.timeline` + `.timeline-item` | Timeline |
| `.user-list` + `.user-list-item` | User Liste |
| `.task-list` + `.task-item` | Task Liste |
| `.notification-list` + `.notification-item` | Notifications |

### Workflows
| Klasse | Beschreibung |
|--------|--------------|
| `.stepper` + `.stepper-item` | Horizontaler Stepper |
| `.workflow-stepper` + `.workflow-step` | Workflow Steps |
| `.vertical-workflow` + `.vertical-workflow-item` | Vertikaler Workflow |
| `.kanban-board` + `.kanban-column` + `.kanban-card` | Kanban Board |

## JavaScript API

```javascript
// Toast Notifications
notify('Nachricht', 'success'); // success | error | warning | info
notify('Mit Dauer', 'info', 3000);

// Modal
TDUI.openModal('modal-id');
TDUI.closeModal('modal-id');

// Sidebar
TDUI.toggleSidebar();

// Utilities
TDUI.show('.selector');
TDUI.hide('.selector');
TDUI.copyToClipboard('text');
TDUI.formatNumber(12345);      // "12.345"
TDUI.formatCurrency(99.99);    // "99,99 €"
TDUI.debounce(fn, 300);
TDUI.throttle(fn, 100);
```

## Data-Attribute (für JS-Interaktivität)

| Attribut | Element | Funktion |
|----------|---------|----------|
| `data-dropdown-trigger` | Button in `.dropdown` | Öffnet Dropdown |
| `data-modal-open="id"` | Button | Öffnet Modal |
| `data-modal-close` | Button in Modal | Schließt Modal |
| `data-tab="id"` | Tab Button | Tab wechseln |
| `data-tooltip="text"` | Jedes Element | Tooltip anzeigen |
| `data-accordion-trigger` | Button | Accordion öffnen |
| `data-context-menu="id"` | Element | Rechtsklick-Menü |

## CSS Custom Properties (Theming)

```css
:root {
  --td-brand-primary: #00AFCE;
  --td-brand-dark: #1d1d1d;
  --td-success: #22C55E;
  --td-warning: #F59E0B;
  --td-error: #EF4444;
  --td-info: #3B82F6;
  --td-surface-50 bis --td-surface-900: Grautöne;
}
```

## Utility Klassen

**Display:** `.flex` `.grid` `.hidden` `.block`
**Flex:** `.flex-col` `.items-center` `.justify-between` `.gap-2` `.gap-4`
**Grid:** `.grid-cols-2` `.grid-cols-3` `.md:grid-cols-2` `.lg:grid-cols-3`
**Spacing:** `.p-4` `.px-4` `.py-2` `.m-4` `.mb-4` `.mt-2`
**Text:** `.text-sm` `.text-lg` `.font-semibold` `.text-center`
**Colors:** `.bg-white` `.bg-surface-50` `.text-brand-primary` `.text-error`
**Borders:** `.rounded` `.rounded-lg` `.border` `.border-surface-200`

