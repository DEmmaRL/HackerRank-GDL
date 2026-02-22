import { defineConfig } from '@slidev/cli'

export default defineConfig({
  // Define custom color theme
  theme: 'seriph',
  themeConfig: {
    primary: '#b85741ff', // rosy-copper
    secondary: '#31394dff', // charcoal-blue
    tertiary: '#002f4aff', // deep-space-blue
    background: '#ffffffff', // white
    accent: '#d9c4b1ff', // pale-oak
  },
  fonts: {
    sans: 'Roboto, sans-serif',
    serif: 'Georgia, serif',
    mono: 'Fira Code, monospace',
  },
})
