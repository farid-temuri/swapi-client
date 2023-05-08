import { ISOString, ListEntity } from "."

interface SpeciesEntity {
	name: string
	classification:string
	designation: string
	average_height:string
	average_lifespan:string
	eye_colors:string
	hair_colors:string
	skin_colors:string
	language:string
	homeworld:string
	people:string[]
	films:string[]
	url:string
	created:ISOString
	edited:ISOString
}

interface SpeciesListEntity extends ListEntity<SpeciesEntity> {}

export default {
	getStarship:async  () => {
		const { $axios } = useNuxtApp()
		const res = await $axios.get<SpeciesListEntity>( '/species/' )
		return res.data
	},
	getStarshipById: async(id:number) => {
		const { $axios } = useNuxtApp()
		const res = await $axios.get<SpeciesEntity>( `/species/${id}` )
		return res.data
	}
}