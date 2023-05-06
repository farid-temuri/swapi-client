// https://nuxt.com/docs/api/configuration/nuxt-config
import { md3 } from 'vuetify/blueprints'
export default defineNuxtConfig({
	srcDir: 'src',
	modules: [
		'nuxt-3-axios',
		'nuxt-3-vuetify'
	],
	axios:{
    baseURL: 'https://swapi.dev/api/'
	},
	vuetify: {
    scssSettingsSrc: 'settings.scss',
    vuetifyOptions: {
      blueprint: md3,
    }
  }
} )
