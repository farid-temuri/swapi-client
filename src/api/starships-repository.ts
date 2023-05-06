import { ISOString, ListEntity } from "."

interface StarshipEntity {
	name: string
	model:string
	starship_class:string
	manufacturer:string
	cost_in_credits:string
	length:string
	crew:string
	passengers:string
	max_atmosphering_speed:string
	hyperdrive_rating:string
	MGLT:string
	cargo_capacity:string
	consumables:string
	films:string[]
	pilots:string[]
	url:string
	created:ISOString
	edited:ISOString
}

interface StarshipsListEntity extends ListEntity<StarshipEntity> {}

export default {
	getStarship:async  () => {
		const { $axios } = useNuxtApp()
		const res = await $axios.get<StarshipsListEntity>( '/films/' )
		return res.data
	},
	getStarshipById: async(id:number) => {
		const { $axios } = useNuxtApp()
		const res = await $axios.get<StarshipEntity>( `/films/${id}` )
		return res.data
	}
}