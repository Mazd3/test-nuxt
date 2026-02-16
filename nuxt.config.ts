// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/styles/index.scss'],
  
  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://test-task-api.tapir.ws',
    }
  },
  
  components: [
    {
      path: '~/components',
      extensions: ['vue']
    }
  ],
  imports: {
    autoImport: false,
  },
  modules: [
    [
      '@nuxt/fonts',
      {
        families: [
          {
            name: 'Golos Text',
            provider: 'google',
            weights: [400, 500, 600, 700]
          }
        ]
      }
    ]
  ]
})
