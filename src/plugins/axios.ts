import axios from 'axios'

export default defineNuxtPlugin( () => {
	return {
		provide: {
			axios:	axios.create( {
				baseURL: 'https://swapi.dev/api/'
			})
		} 
	}
})