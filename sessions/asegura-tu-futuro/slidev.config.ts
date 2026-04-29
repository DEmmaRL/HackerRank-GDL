import { defineConfig } from '@slidev/cli'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // Define custom color theme
  theme: 'seriph',
  favicon: '/favicon.svg',
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
  vite: {
    publicDir: 'public',
    resolve: {
      alias: {
        '@hr-gdl/shared-assets': path.resolve(__dirname, '../../packages/shared-assets/dist'),
      },
    },
  }
})
