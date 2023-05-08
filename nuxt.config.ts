import { md3 } from 'vuetify/blueprints'
export default defineNuxtConfig({
	srcDir: 'src',
	typescript: {
		strict: true
	},
	modules: [
		'nuxt-3-vuetify',
		'@pinia/nuxt',
	],
	vuetify: {
    scssSettingsSrc: 'settings.scss',
    vuetifyOptions: {
      blueprint: md3,
    }
	},
	pinia: {
    autoImports: [
      'defineStore', 
      ['defineStore', 'definePiniaStore'],
    ],
  },
})
