import { ListEntity } from "."

type ISOString = string

interface FilmEntity {
	title: string
	episode_id:number
	opening_crawl: string
	director:string
	producer:string
	release_date:ISOString
	species:string[]
	starships:string[]
	vehicles:string[]
	characters:string[]
	planets:string[]
	url:string
	created:string
	edited:string
}

interface FilmListEntity extends ListEntity<FilmEntity> {}

export default {
	getPeoples:async  () => {
		const { $axios } = useNuxtApp()
		const res = await $axios.get<FilmListEntity>( '/films/' )
		return res.data
	},
	getPersonById: async(id:number) => {
		const { $axios } = useNuxtApp()
		const res = await $axios.get<FilmEntity>( `/films/${id}` )
		return res.data
	}
}