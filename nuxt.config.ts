// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/scripts', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],

  // ADICIONE ISSO AQUI:
  /*app: {
    // Troque 'quintas-dumonte' pelo NOME EXATO do seu repositório no GitHub
    // Mantenha as barras no começo e no fim.
    baseURL: '/quintas-dumonte/',
    cdnURL: '/quintas-dumonte/',
    buildAssetsDir: 'assets', // Opcional, ajuda a organizar
  },
*/

    nitro: {
    preset: 'static'
  },
  
})