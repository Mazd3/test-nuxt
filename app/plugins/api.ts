import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    
    const api = $fetch.create({
      baseURL: config.public.apiBaseUrl,
      onRequest({ request, options }) {
        options.headers.set('Content-Type', 'application/json');
      },
      onResponseError({ response }) {
        // Глобальная обработка ошибок API
        if (response.status === 404) {
          console.error('API endpoint not found:', response.url);
        }
      },
    })
  
    return {
      provide: {
        api,
      },
    }
  })
  