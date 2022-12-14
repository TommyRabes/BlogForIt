import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    'baseUrl': 'http://localhost:4200',
    supportFile: false
  },
  viewportHeight: 768,
  viewportWidth: 1280
})