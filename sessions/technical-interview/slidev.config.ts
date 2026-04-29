import { defineConfig } from '@slidev/cli'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@hr-gdl/shared-assets': path.resolve(__dirname, '../../packages/shared-assets/dist'),
      },
    },
  }
})
