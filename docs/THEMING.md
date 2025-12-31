# trafficdesign UI Kit - Theming

Anleitung zur Anpassung des Designs über CSS Custom Properties.

## CSS Custom Properties Übersicht

Das UI Kit verwendet CSS Custom Properties (CSS-Variablen), die einfach überschrieben werden können.

### Brand Colors

```css
:root {
  --td-brand-primary: #00AFCE;        /* Haupt-Akzentfarbe (Türkis) */
  --td-brand-primary-hover: #009AA8;  /* Hover State */
  --td-brand-primary-active: #008494; /* Active/Pressed State */
  --td-brand-primary-light: #E5F8FA;  /* Heller Hintergrund */
  --td-brand-dark: #1d1d1d;           /* Dunkles Schwarz */
  --td-brand-dark-hover: #0a0a0a;
  --td-brand-light: #E5F2F3;          /* Heller türkiser Hintergrund */
  --td-brand-light-hover: #D5E8E9;
}
```

### Semantic Colors

```css
:root {
  /* Success (Grün) */
  --td-success: #22C55E;
  --td-success-light: #DCFCE7;
  --td-success-dark: #16A34A;

  /* Warning (Orange) */
  --td-warning: #F59E0B;
  --td-warning-light: #FEF3C7;
  --td-warning-dark: #D97706;

  /* Error (Rot) */
  --td-error: #EF4444;
  --td-error-light: #FEE2E2;
  --td-error-dark: #DC2626;

  /* Info (Blau) */
  --td-info: #3B82F6;
  --td-info-light: #DBEAFE;
  --td-info-dark: #2563EB;
}
```

### Surface Colors (Grautöne)

```css
:root {
  --td-surface-50: #FAFAFA;   /* Hellster Hintergrund */
  --td-surface-100: #F5F5F5;
  --td-surface-200: #E5E5E5;  /* Borders */
  --td-surface-300: #D4D4D4;
  --td-surface-400: #A3A3A3;  /* Placeholder Text */
  --td-surface-500: #737373;  /* Secondary Text */
  --td-surface-600: #525252;
  --td-surface-700: #404040;
  --td-surface-800: #262626;  /* Tooltips */
  --td-surface-900: #171717;
}
```

### Typography

```css
:root {
  --td-font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --td-font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  --td-text-xs: 0.75rem;    /* 12px */
  --td-text-sm: 0.875rem;   /* 14px */
  --td-text-base: 0.875rem; /* 14px (compact) */
  --td-text-lg: 1rem;       /* 16px */
  --td-text-xl: 1.125rem;   /* 18px */
  --td-text-2xl: 1.25rem;   /* 20px */
  --td-text-3xl: 1.5rem;    /* 24px */
}
```

### Spacing

```css
:root {
  --td-spacing-0: 0;
  --td-spacing-1: 0.25rem;  /* 4px */
  --td-spacing-2: 0.5rem;   /* 8px */
  --td-spacing-3: 0.75rem;  /* 12px */
  --td-spacing-4: 1rem;     /* 16px */
  --td-spacing-6: 1.5rem;   /* 24px */
  --td-spacing-8: 2rem;     /* 32px */
}
```

### Border Radius

```css
:root {
  --td-radius-sm: 0.25rem;   /* 4px */
  --td-radius-md: 0.375rem;  /* 6px */
  --td-radius-lg: 0.5rem;    /* 8px */
  --td-radius-xl: 0.75rem;   /* 12px */
  --td-radius-full: 9999px;  /* Rund */
}
```

### Shadows

```css
:root {
  --td-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --td-shadow-md: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --td-shadow-lg: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --td-shadow-dropdown: 0 4px 12px rgb(0 0 0 / 0.15);
  --td-shadow-modal: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
```

### Transitions

```css
:root {
  --td-transition-fast: 150ms;
  --td-transition-normal: 200ms;
  --td-transition-slow: 300ms;
}
```

---

## Theme anpassen

### Methode 1: CSS überschreiben

Füge nach dem UI Kit CSS deine eigenen Styles hinzu:

```html
<link rel="stylesheet" href="dist/td-ui-kit.css">
<style>
  :root {
    /* Eigene Primary Color */
    --td-brand-primary: #6366F1;
    --td-brand-primary-hover: #4F46E5;
    --td-brand-primary-active: #4338CA;
    --td-brand-primary-light: #EEF2FF;

    /* Eigene Font */
    --td-font-sans: 'Poppins', sans-serif;
  }
</style>
```

### Methode 2: Separate CSS-Datei

Erstelle eine `custom-theme.css`:

```css
/* custom-theme.css */
:root {
  --td-brand-primary: #6366F1;
  --td-brand-primary-hover: #4F46E5;
  --td-brand-primary-active: #4338CA;
  --td-brand-primary-light: #EEF2FF;
  --td-brand-light: #EEF2FF;
}
```

```html
<link rel="stylesheet" href="dist/td-ui-kit.css">
<link rel="stylesheet" href="custom-theme.css">
```

---

## Beispiel-Themes

### Dark Mode (experimentell)

```css
:root {
  --td-surface-50: #171717;
  --td-surface-100: #1f1f1f;
  --td-surface-200: #2a2a2a;
  --td-surface-300: #3d3d3d;
  --td-surface-400: #5c5c5c;
  --td-surface-500: #8c8c8c;
  --td-surface-600: #b3b3b3;
  --td-surface-700: #d4d4d4;
  --td-surface-800: #e5e5e5;
  --td-surface-900: #f5f5f5;
  
  --td-brand-dark: #f5f5f5;
}

body {
  background-color: var(--td-surface-100);
  color: var(--td-surface-700);
}

.card-tool,
.panel,
.modal {
  background-color: var(--td-surface-50);
}
```

### Corporate Blue Theme

```css
:root {
  --td-brand-primary: #2563EB;
  --td-brand-primary-hover: #1D4ED8;
  --td-brand-primary-active: #1E40AF;
  --td-brand-primary-light: #DBEAFE;
  --td-brand-light: #EFF6FF;
}
```

### Purple Theme

```css
:root {
  --td-brand-primary: #8B5CF6;
  --td-brand-primary-hover: #7C3AED;
  --td-brand-primary-active: #6D28D9;
  --td-brand-primary-light: #EDE9FE;
  --td-brand-light: #F5F3FF;
}
```

### Green Theme

```css
:root {
  --td-brand-primary: #10B981;
  --td-brand-primary-hover: #059669;
  --td-brand-primary-active: #047857;
  --td-brand-primary-light: #D1FAE5;
  --td-brand-light: #ECFDF5;
}
```

---

## ApexCharts Theme

Wenn du ApexCharts verwendest und die Farben anpassen möchtest, bearbeite die `dist/td-charts.js`:

```javascript
const chartColors = {
  primary: '#00AFCE',      // Deine Primary Color
  primaryLight: '#E5F8FA',
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  // ...
};
```

---

## Best Practices

1. **Nur Variablen überschreiben**: Vermeide es, die CSS-Klassen direkt zu überschreiben
2. **Konsistenz wahren**: Wenn du `--td-brand-primary` änderst, passe auch die Hover/Active States an
3. **Kontrast beachten**: Stelle sicher, dass Text auf den neuen Hintergrundfarben lesbar bleibt
4. **Testen**: Prüfe alle Komponenten nach Theme-Änderungen

