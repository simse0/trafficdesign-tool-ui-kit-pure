/**
 * trafficdesign UI Kit - Pure JavaScript
 * Version: 1.0.0
 * 
 * Framework-unabhängiges JavaScript für Interaktivität
 * Ersetzt Alpine.js für einfache UI-Komponenten.
 * 
 * Copyright (c) 2025 trafficdesign
 * MIT License
 */

(function(global) {
  'use strict';

  // ============================================
  // TDUI Namespace
  // ============================================
  const TDUI = {
    version: '1.0.0',
    
    // Store für Notifications
    notifications: [],
    notificationId: 0,

    // ============================================
    // INITIALIZATION
    // ============================================
    init: function() {
      document.addEventListener('DOMContentLoaded', () => {
        this.initDropdowns();
        this.initModals();
        this.initToggles();
        this.initTabs();
        this.initTooltips();
        this.initFileUploads();
        this.initAccordions();
        this.initContextMenus();
        this.createToastContainer();
      });
    },

    // ============================================
    // DROPDOWNS
    // ============================================
    initDropdowns: function() {
      // Click handler für Dropdown-Trigger
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-dropdown-trigger]');
        
        if (trigger) {
          e.preventDefault();
          const dropdown = trigger.closest('.dropdown');
          if (dropdown) {
            this.toggleDropdown(dropdown);
          }
          return;
        }

        // Schließe alle Dropdowns wenn außerhalb geklickt
        if (!e.target.closest('.dropdown')) {
          this.closeAllDropdowns();
        }
      });

      // Escape Key schließt Dropdowns
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeAllDropdowns();
        }
      });
    },

    toggleDropdown: function(dropdown) {
      const isOpen = dropdown.classList.contains('open');
      this.closeAllDropdowns();
      
      if (!isOpen) {
        dropdown.classList.add('open');
        const menu = dropdown.querySelector('.dropdown-menu');
        if (menu) {
          menu.classList.add('show');
        }
      }
    },

    closeAllDropdowns: function() {
      document.querySelectorAll('.dropdown.open').forEach(dropdown => {
        dropdown.classList.remove('open');
        const menu = dropdown.querySelector('.dropdown-menu');
        if (menu) {
          menu.classList.remove('show');
        }
      });
    },

    // ============================================
    // MODALS
    // ============================================
    initModals: function() {
      // Click handler für Modal-Trigger
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-modal-open]');
        if (trigger) {
          e.preventDefault();
          const modalId = trigger.getAttribute('data-modal-open');
          this.openModal(modalId);
          return;
        }

        const closeTrigger = e.target.closest('[data-modal-close]');
        if (closeTrigger) {
          e.preventDefault();
          const modal = closeTrigger.closest('.modal');
          if (modal) {
            this.closeModal(modal.id);
          }
          return;
        }

        // Schließe Modal wenn auf Backdrop geklickt
        if (e.target.classList.contains('modal-backdrop')) {
          const modal = document.querySelector('.modal.show');
          if (modal) {
            this.closeModal(modal.id);
          }
        }
      });

      // Escape Key schließt Modal
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const modal = document.querySelector('.modal.show');
          if (modal) {
            this.closeModal(modal.id);
          }
        }
      });
    },

    openModal: function(modalId) {
      const modal = document.getElementById(modalId);
      const backdrop = document.getElementById(modalId + '-backdrop') || 
                       document.querySelector('.modal-backdrop');
      
      if (modal) {
        modal.classList.add('show');
        if (backdrop) {
          backdrop.classList.add('show');
        }
        document.body.style.overflow = 'hidden';
        
        // Focus auf erstes fokussierbares Element
        const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable) {
          focusable.focus();
        }
      }
    },

    closeModal: function(modalId) {
      const modal = document.getElementById(modalId);
      const backdrop = document.getElementById(modalId + '-backdrop') || 
                       document.querySelector('.modal-backdrop');
      
      if (modal) {
        modal.classList.remove('show');
        if (backdrop) {
          backdrop.classList.remove('show');
        }
        document.body.style.overflow = '';
      }
    },

    // ============================================
    // TOGGLE SWITCHES
    // ============================================
    initToggles: function() {
      document.addEventListener('click', (e) => {
        const toggle = e.target.closest('.toggle');
        if (toggle) {
          e.preventDefault();
          this.toggleSwitch(toggle);
        }
      });
    },

    toggleSwitch: function(toggle) {
      const isActive = toggle.classList.contains('active');
      toggle.classList.toggle('active');
      
      // Custom Event für Änderungen
      const event = new CustomEvent('toggle:change', {
        detail: { active: !isActive, element: toggle }
      });
      toggle.dispatchEvent(event);
    },

    // ============================================
    // TABS
    // ============================================
    initTabs: function() {
      document.addEventListener('click', (e) => {
        const tab = e.target.closest('[data-tab]');
        if (tab) {
          e.preventDefault();
          const tabGroup = tab.closest('[data-tabs]');
          const targetId = tab.getAttribute('data-tab');
          this.switchTab(tabGroup, tab, targetId);
        }
      });
    },

    switchTab: function(tabGroup, activeTab, targetId) {
      if (!tabGroup) return;

      // Deaktiviere alle Tabs
      tabGroup.querySelectorAll('[data-tab]').forEach(tab => {
        tab.classList.remove('active', 'tab-active');
      });

      // Aktiviere geklickten Tab
      activeTab.classList.add('active', 'tab-active');

      // Zeige/Verstecke Content
      const tabContent = tabGroup.nextElementSibling;
      if (tabContent && tabContent.classList.contains('tab-content')) {
        tabContent.querySelectorAll('[data-tab-panel]').forEach(panel => {
          panel.style.display = panel.getAttribute('data-tab-panel') === targetId ? 'block' : 'none';
        });
      }
    },

    // ============================================
    // TOOLTIPS
    // ============================================
    initTooltips: function() {
      document.querySelectorAll('[data-tooltip]').forEach(element => {
        let tooltip = null;

        element.addEventListener('mouseenter', (e) => {
          const text = element.getAttribute('data-tooltip');
          const position = element.getAttribute('data-tooltip-position') || 'top';
          
          tooltip = document.createElement('div');
          tooltip.className = 'tooltip show';
          tooltip.textContent = text;
          document.body.appendChild(tooltip);

          const rect = element.getBoundingClientRect();
          const tooltipRect = tooltip.getBoundingClientRect();

          let top, left;
          switch (position) {
            case 'bottom':
              top = rect.bottom + 8;
              left = rect.left + (rect.width - tooltipRect.width) / 2;
              break;
            case 'left':
              top = rect.top + (rect.height - tooltipRect.height) / 2;
              left = rect.left - tooltipRect.width - 8;
              break;
            case 'right':
              top = rect.top + (rect.height - tooltipRect.height) / 2;
              left = rect.right + 8;
              break;
            default: // top
              top = rect.top - tooltipRect.height - 8;
              left = rect.left + (rect.width - tooltipRect.width) / 2;
          }

          tooltip.style.top = top + window.scrollY + 'px';
          tooltip.style.left = left + window.scrollX + 'px';
        });

        element.addEventListener('mouseleave', () => {
          if (tooltip) {
            tooltip.remove();
            tooltip = null;
          }
        });
      });
    },

    // ============================================
    // NOTIFICATIONS / TOASTS
    // ============================================
    createToastContainer: function() {
      if (!document.getElementById('toast-container')) {
        const container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
      }
    },

    notify: function(message, type = 'info', duration = 5000) {
      const container = document.getElementById('toast-container');
      if (!container) return;

      const id = ++this.notificationId;
      const toast = document.createElement('div');
      toast.id = 'toast-' + id;
      toast.className = 'toast toast-' + type;
      toast.innerHTML = `
        <span>${message}</span>
        <button class="toast-close" onclick="TDUI.closeToast(${id})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      `;

      container.appendChild(toast);

      // Auto-close nach duration
      if (duration > 0) {
        setTimeout(() => this.closeToast(id), duration);
      }

      return id;
    },

    closeToast: function(id) {
      const toast = document.getElementById('toast-' + id);
      if (toast) {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 200);
      }
    },

    // ============================================
    // FILE UPLOADS
    // ============================================
    initFileUploads: function() {
      document.querySelectorAll('.file-upload').forEach(zone => {
        const input = zone.querySelector('input[type="file"]');
        
        if (!input) return;

        ['dragenter', 'dragover'].forEach(event => {
          zone.addEventListener(event, (e) => {
            e.preventDefault();
            zone.classList.add('dragover');
          });
        });

        ['dragleave', 'drop'].forEach(event => {
          zone.addEventListener(event, (e) => {
            e.preventDefault();
            zone.classList.remove('dragover');
          });
        });

        zone.addEventListener('drop', (e) => {
          const files = e.dataTransfer.files;
          if (files.length > 0) {
            input.files = files;
            const event = new Event('change', { bubbles: true });
            input.dispatchEvent(event);
          }
        });

        zone.addEventListener('click', () => {
          input.click();
        });
      });
    },

    // ============================================
    // ACCORDIONS
    // ============================================
    initAccordions: function() {
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-accordion-trigger]');
        if (trigger) {
          e.preventDefault();
          const item = trigger.closest('[data-accordion-item]');
          const content = item.querySelector('[data-accordion-content]');
          
          if (content) {
            const isOpen = content.style.display !== 'none';
            content.style.display = isOpen ? 'none' : 'block';
            trigger.setAttribute('aria-expanded', !isOpen);
            
            // Rotiere Icon wenn vorhanden
            const icon = trigger.querySelector('[data-accordion-icon]');
            if (icon) {
              icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
            }
          }
        }
      });
    },

    // ============================================
    // CONTEXT MENUS
    // ============================================
    initContextMenus: function() {
      document.addEventListener('contextmenu', (e) => {
        const target = e.target.closest('[data-context-menu]');
        if (target) {
          e.preventDefault();
          const menuId = target.getAttribute('data-context-menu');
          this.showContextMenu(menuId, e.clientX, e.clientY);
        }
      });

      document.addEventListener('click', () => {
        this.hideAllContextMenus();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.hideAllContextMenus();
        }
      });
    },

    showContextMenu: function(menuId, x, y) {
      this.hideAllContextMenus();
      
      const menu = document.getElementById(menuId);
      if (menu) {
        menu.style.left = x + 'px';
        menu.style.top = y + 'px';
        menu.classList.add('show');

        // Korrigiere Position wenn außerhalb des Viewports
        const rect = menu.getBoundingClientRect();
        if (rect.right > window.innerWidth) {
          menu.style.left = (x - rect.width) + 'px';
        }
        if (rect.bottom > window.innerHeight) {
          menu.style.top = (y - rect.height) + 'px';
        }
      }
    },

    hideAllContextMenus: function() {
      document.querySelectorAll('.context-menu.show').forEach(menu => {
        menu.classList.remove('show');
      });
    },

    // ============================================
    // SIDEBAR TOGGLE
    // ============================================
    toggleSidebar: function(sidebarSelector = '.sidebar') {
      const sidebar = document.querySelector(sidebarSelector);
      if (sidebar) {
        sidebar.classList.toggle('hidden');
        
        const event = new CustomEvent('sidebar:toggle', {
          detail: { hidden: sidebar.classList.contains('hidden') }
        });
        document.dispatchEvent(event);
      }
    },

    // ============================================
    // UTILITIES
    // ============================================
    
    // Fügt eine Klasse hinzu oder entfernt sie
    toggleClass: function(selector, className) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => el.classList.toggle(className));
    },

    // Zeigt ein Element
    show: function(selector) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.style.display = '';
        el.classList.add('show');
      });
    },

    // Versteckt ein Element
    hide: function(selector) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.style.display = 'none';
        el.classList.remove('show');
      });
    },

    // Smooth Scroll zu Element
    scrollTo: function(selector, offset = 0) {
      const element = document.querySelector(selector);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },

    // Kopiert Text in die Zwischenablage
    copyToClipboard: function(text) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          this.notify('In Zwischenablage kopiert!', 'success', 2000);
        });
      } else {
        // Fallback für ältere Browser
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        this.notify('In Zwischenablage kopiert!', 'success', 2000);
      }
    },

    // Formatiert eine Zahl
    formatNumber: function(num, locale = 'de-DE') {
      return new Intl.NumberFormat(locale).format(num);
    },

    // Formatiert eine Währung
    formatCurrency: function(num, currency = 'EUR', locale = 'de-DE') {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
      }).format(num);
    },

    // Debounce Funktion
    debounce: function(func, wait) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    },

    // Throttle Funktion
    throttle: function(func, limit) {
      let inThrottle;
      return function(...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    }
  };

  // Initialisiere beim Laden
  TDUI.init();

  // Exportiere global
  global.TDUI = TDUI;
  
  // Shorthand für notify
  global.notify = function(message, type, duration) {
    return TDUI.notify(message, type, duration);
  };

})(typeof window !== 'undefined' ? window : this);

