// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  builder: 'vite', // Ensure Vite is set as the builder
  baseURL: '/PortfolioV2/',
  generate: {
    // Optional: customize if needed
    dir: 'dist', // This should be the default
  },
})
