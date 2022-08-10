import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/nattaliepiano.me/'
  },
  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver(),
        ],
      }),
      Icons({
        // the feature below is experimental ⬇️
        autoInstall: true
      })
    ]
  }
})
