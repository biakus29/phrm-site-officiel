/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette de marque PHRM (cf. brand guide + CLAUDE.md).
        // 5 ancres officielles : profond, corporate, clair, neutre, blanc.
        phrm: {
          navy: '#123A6D', // Primaire — bleu corporate (ancre)
          sky: '#A8D6F4', // Accent global — bleu clair (ancre)
          mid: '#1E5A9E', // Bleu intermédiaire (hover boutons)
          pale: '#E6E9EE', // Gris neutre — surfaces légères (ancre)
          dark: '#0A1D34', // Bleu profond — navbar, footer, sections sombres (ancre)
          text: '#0A1D34', // Texte principal
          muted: '#4A6B89', // Texte secondaire
          bg: '#F8FAFC', // Fond de page — blanc cassé
          stroke: '#0A1D34',
        },
        module: {
          rh: '#123A6D', // PHRM Paie (= phrm.navy)
          compta: '#0EA5E9', // PHRM Compta (cyan distinct)
        },
        status: {
          success: '#16A34A',
          warning: '#D97706',
          error: '#DC2626',
          info: '#0EA5E9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
        badge: '20px',
      },
    },
  },
  plugins: [],
};
