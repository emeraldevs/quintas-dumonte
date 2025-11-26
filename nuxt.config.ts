// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/scripts', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      // 2. GOOGLE ANALYTICS (Adicionado aqui)
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-B2J8XXRR71'
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B2J8XXRR71');
          `
        }
      ]
    }
  },

  nitro: {
    preset: 'static'
  },
  
  

})