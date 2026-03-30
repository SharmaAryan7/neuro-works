/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-tint": "#4647d3", "on-tertiary-fixed": "#39000d", "inverse-primary": "#8083ff",
        "on-error-container": "#510017", "on-tertiary-container": "#67001f", "secondary": "#6a37d4",
        "on-primary-fixed": "#000000", "surface-dim": "#c3d5f8", "background": "#f4f6ff",
        "on-secondary-container": "#5517bf", "surface-container": "#dee8ff", "primary-fixed": "#9396ff",
        "surface": "#f4f6ff", "tertiary": "#a53046", "surface-container-high": "#d5e3ff",
        "primary": "#4647d3", "primary-dim": "#3939c7", "error": "#b41340", "outline": "#6c778c",
        "on-secondary": "#f8f0ff", "on-secondary-fixed-variant": "#5f28c8", "primary-container": "#9396ff",
        "secondary-fixed-dim": "#ceb9ff", "on-tertiary-fixed-variant": "#760726", "on-error": "#ffefef",
        "error-container": "#f74b6d", "inverse-on-surface": "#929db4", "surface-container-highest": "#cdddfe",
        "surface-bright": "#f4f6ff", "secondary-fixed": "#dac9ff", "secondary-dim": "#5e26c7",
        "tertiary-fixed-dim": "#ff788b", "surface-container-lowest": "#ffffff", "tertiary-fixed": "#ff909d",
        "surface-variant": "#cdddfe", "inverse-surface": "#040e1f", "tertiary-container": "#ff909d",
        "error-dim": "#a70138", "on-primary": "#f4f1ff", "on-tertiary": "#ffefef", "secondary-container": "#dac9ff",
        "primary-fixed-dim": "#8387ff", "tertiary-dim": "#95233b", "on-surface": "#242f41", "outline-variant": "#a2adc4",
        "on-background": "#242f41", "on-primary-container": "#0a0081", "on-surface-variant": "#515c70",
        "on-secondary-fixed": "#40009b", "surface-container-low": "#ecf1ff", "on-primary-fixed-variant": "#0e009d"
      },
      fontFamily: {
        "headline": ["Plus Jakarta Sans", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "1.5rem", "full": "9999px" },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}