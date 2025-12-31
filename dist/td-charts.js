/**
 * trafficdesign UI Kit - ApexCharts Theme & Utilities
 * Version: 1.0.0
 * 
 * ApexCharts Konfiguration für das trafficdesign Design System
 * 
 * Copyright (c) 2025 trafficdesign
 * MIT License
 */

(function(global) {
  'use strict';

  // ============================================
  // CHART COLORS (matching Design System)
  // ============================================
  const chartColors = {
    primary: '#00AFCE',
    primaryLight: '#E5F8FA',
    success: '#22C55E',
    successLight: '#DCFCE7',
    warning: '#F59E0B',
    warningLight: '#FEF3C7',
    error: '#EF4444',
    errorLight: '#FEE2E2',
    info: '#3B82F6',
    infoLight: '#DBEAFE',
    dark: '#1d1d1d',
    surface: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252'
    }
  };

  // Standard color palette for series
  const seriesColors = [
    chartColors.primary,
    chartColors.success,
    chartColors.warning,
    chartColors.error,
    chartColors.info,
    '#8B5CF6', // Purple
    '#EC4899', // Pink
    '#14B8A6', // Teal
  ];

  // ============================================
  // BASE CHART THEME
  // ============================================
  const trafficdesignChartTheme = {
    chart: {
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        },
        autoSelected: 'zoom'
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 400,
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      },
      dropShadow: {
        enabled: false
      },
      background: 'transparent'
    },
    colors: seriesColors,
    grid: {
      borderColor: chartColors.surface[200],
      strokeDashArray: 4,
      xaxis: {
        lines: { show: false }
      },
      yaxis: {
        lines: { show: true }
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 10
      }
    },
    xaxis: {
      labels: {
        style: {
          colors: chartColors.surface[500],
          fontSize: '12px',
          fontWeight: 500
        }
      },
      axisBorder: {
        show: true,
        color: chartColors.surface[200]
      },
      axisTicks: {
        show: true,
        color: chartColors.surface[200]
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: chartColors.surface[500],
          fontSize: '12px',
          fontWeight: 500
        },
        formatter: function(value) {
          if (value >= 1000000) {
            return (value / 1000000).toFixed(1) + 'M';
          } else if (value >= 1000) {
            return (value / 1000).toFixed(1) + 'K';
          }
          return value;
        }
      }
    },
    tooltip: {
      theme: 'light',
      style: {
        fontSize: '13px',
        fontFamily: 'Inter, system-ui, sans-serif'
      },
      x: {
        show: true
      },
      y: {
        formatter: function(value) {
          if (typeof value === 'number') {
            return new Intl.NumberFormat('de-DE').format(value);
          }
          return value;
        }
      }
    },
    legend: {
      fontFamily: 'Inter, system-ui, sans-serif',
      fontSize: '13px',
      fontWeight: 500,
      labels: {
        colors: chartColors.surface[600]
      },
      itemMargin: {
        horizontal: 12,
        vertical: 4
      },
      markers: {
        width: 10,
        height: 10,
        radius: 2
      }
    },
    dataLabels: {
      style: {
        fontSize: '12px',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: 600
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      opacity: 1
    },
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.05
        }
      },
      active: {
        filter: {
          type: 'darken',
          value: 0.1
        }
      }
    },
    responsive: [{
      breakpoint: 768,
      options: {
        chart: {
          toolbar: {
            show: false
          }
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  // ============================================
  // CHART PRESETS
  // ============================================
  
  // Line Chart Preset
  const lineChartPreset = {
    ...trafficdesignChartTheme,
    chart: {
      ...trafficdesignChartTheme.chart,
      type: 'line'
    },
    stroke: {
      curve: 'smooth',
      width: 2.5
    },
    markers: {
      size: 0,
      hover: {
        size: 6
      }
    }
  };

  // Area Chart Preset
  const areaChartPreset = {
    ...trafficdesignChartTheme,
    chart: {
      ...trafficdesignChartTheme.chart,
      type: 'area'
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [0, 100]
      }
    }
  };

  // Bar Chart Preset
  const barChartPreset = {
    ...trafficdesignChartTheme,
    chart: {
      ...trafficdesignChartTheme.chart,
      type: 'bar'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
        columnWidth: '60%',
        dataLabels: {
          position: 'top'
        }
      }
    },
    dataLabels: {
      enabled: false
    }
  };

  // Horizontal Bar Chart Preset
  const horizontalBarChartPreset = {
    ...barChartPreset,
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4,
        barHeight: '60%'
      }
    }
  };

  // Donut Chart Preset
  const donutChartPreset = {
    ...trafficdesignChartTheme,
    chart: {
      ...trafficdesignChartTheme.chart,
      type: 'donut'
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '14px',
              fontWeight: 600,
              color: chartColors.dark
            },
            value: {
              show: true,
              fontSize: '24px',
              fontWeight: 700,
              color: chartColors.dark,
              formatter: function(val) {
                return new Intl.NumberFormat('de-DE').format(val);
              }
            },
            total: {
              show: true,
              label: 'Gesamt',
              fontSize: '14px',
              fontWeight: 500,
              color: chartColors.surface[500],
              formatter: function(w) {
                const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return new Intl.NumberFormat('de-DE').format(total);
              }
            }
          }
        }
      }
    },
    stroke: {
      width: 0
    },
    dataLabels: {
      enabled: false
    }
  };

  // Pie Chart Preset
  const pieChartPreset = {
    ...donutChartPreset,
    chart: {
      ...trafficdesignChartTheme.chart,
      type: 'pie'
    },
    plotOptions: {
      pie: {
        donut: {
          size: '0%'
        }
      }
    }
  };

  // Radial Bar (Gauge) Preset
  const radialBarPreset = {
    ...trafficdesignChartTheme,
    chart: {
      ...trafficdesignChartTheme.chart,
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%'
        },
        track: {
          background: chartColors.surface[100],
          strokeWidth: '100%'
        },
        dataLabels: {
          name: {
            fontSize: '14px',
            fontWeight: 500,
            color: chartColors.surface[500],
            offsetY: -10
          },
          value: {
            fontSize: '28px',
            fontWeight: 700,
            color: chartColors.dark,
            formatter: function(val) {
              return val + '%';
            }
          }
        }
      }
    },
    stroke: {
      lineCap: 'round'
    }
  };

  // Sparkline Preset (Mini Charts)
  const sparklinePreset = {
    chart: {
      type: 'line',
      sparkline: {
        enabled: true
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 300
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    colors: [chartColors.primary],
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function() {
            return '';
          }
        }
      }
    }
  };

  // Heatmap Preset
  const heatmapPreset = {
    ...trafficdesignChartTheme,
    chart: {
      ...trafficdesignChartTheme.chart,
      type: 'heatmap'
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 4,
        colorScale: {
          ranges: [
            { from: 0, to: 25, color: chartColors.primaryLight, name: 'Niedrig' },
            { from: 26, to: 50, color: '#7DD3E3', name: 'Mittel' },
            { from: 51, to: 75, color: '#3BC4DB', name: 'Hoch' },
            { from: 76, to: 100, color: chartColors.primary, name: 'Sehr hoch' }
          ]
        }
      }
    },
    dataLabels: {
      enabled: false
    }
  };

  // Treemap Preset
  const treemapPreset = {
    ...trafficdesignChartTheme,
    chart: {
      ...trafficdesignChartTheme.chart,
      type: 'treemap'
    },
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        fontFamily: 'Inter, system-ui, sans-serif'
      }
    }
  };

  // ============================================
  // TDUI CHARTS NAMESPACE
  // ============================================
  const TDUICharts = {
    version: '1.0.0',
    colors: chartColors,
    seriesColors: seriesColors,
    
    // Base theme
    theme: trafficdesignChartTheme,
    
    // Presets
    presets: {
      line: lineChartPreset,
      area: areaChartPreset,
      bar: barChartPreset,
      horizontalBar: horizontalBarChartPreset,
      donut: donutChartPreset,
      pie: pieChartPreset,
      radialBar: radialBarPreset,
      sparkline: sparklinePreset,
      heatmap: heatmapPreset,
      treemap: treemapPreset
    },

    /**
     * Create a chart with the trafficdesign theme
     * @param {string} selector - DOM selector
     * @param {object} options - Chart options
     * @param {string} preset - Preset name (optional)
     */
    create: function(selector, options, preset) {
      if (typeof ApexCharts === 'undefined') {
        console.error('TDUICharts: ApexCharts is not loaded. Please include ApexCharts library.');
        return null;
      }

      let baseOptions = this.theme;
      
      if (preset && this.presets[preset]) {
        baseOptions = this.presets[preset];
      }

      const mergedOptions = this.deepMerge(baseOptions, options);
      const chart = new ApexCharts(document.querySelector(selector), mergedOptions);
      
      return chart;
    },

    /**
     * Deep merge two objects
     */
    deepMerge: function(target, source) {
      const output = Object.assign({}, target);
      
      if (this.isObject(target) && this.isObject(source)) {
        Object.keys(source).forEach(key => {
          if (this.isObject(source[key])) {
            if (!(key in target)) {
              Object.assign(output, { [key]: source[key] });
            } else {
              output[key] = this.deepMerge(target[key], source[key]);
            }
          } else {
            Object.assign(output, { [key]: source[key] });
          }
        });
      }
      
      return output;
    },

    isObject: function(item) {
      return (item && typeof item === 'object' && !Array.isArray(item));
    },

    /**
     * Format number for German locale
     */
    formatNumber: function(value) {
      return new Intl.NumberFormat('de-DE').format(value);
    },

    /**
     * Format currency for German locale
     */
    formatCurrency: function(value, currency = 'EUR') {
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: currency
      }).format(value);
    },

    /**
     * Format percentage
     */
    formatPercent: function(value) {
      return new Intl.NumberFormat('de-DE', {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
      }).format(value / 100);
    },

    /**
     * Generate gradient colors
     */
    generateGradient: function(color, opacity = [0.45, 0.05]) {
      return {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: opacity[0],
          opacityTo: opacity[1],
          stops: [0, 100]
        }
      };
    }
  };

  // Export to global
  global.TDUICharts = TDUICharts;

})(typeof window !== 'undefined' ? window : this);

