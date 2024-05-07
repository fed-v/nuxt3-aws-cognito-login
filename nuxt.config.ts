// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@vee-validate/nuxt',
  ],

  app: {
    head: {

        // Set global metadata for SEO
        title: 'Cognito Sandbox',
        meta: [
            { name: 'description', content: 'AWS Cognito Sandbox' }
        ],

        // Load extarnal Javascript file
        script: [ {} ],

        // Load external stylesheets
        link: [ 
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap' } 
        ]
        
    }
  },

  devtools: { enabled: true },

  // https://www.joshwcomeau.com/css/custom-css-reset/
  css: [
    '@/assets/styles/reset.css',
    '@/assets/styles/global.css',

  ],

  alias: {
    "./runtimeConfig": "./runtimeConfig.browser"
  },

  vite: {
    define: {
      "window.global": {}
    }
  }
  
})
