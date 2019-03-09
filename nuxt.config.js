const pkg = require('./package')

module.exports = {
  mode: 'universal',
  
  generate:{
    routes:[
      'posts/balut',
      'posts/whereIsIt',
      'posts/how'
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
<<<<<<< HEAD
    '~/plugins/currency'
=======
    { src: '~/plugins/vue-notifications', ssr: false },
    { src: '~/plugins/currency', ssr: false }
>>>>>>> ba1cb8bb257eab0f9e842f4dc80d3d09f22e9df8
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

   /*
  ** Axios.js modules options
  */
 axios: {
   baseURL: 'https://jsonplaceholder.typicode.com'
 },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
