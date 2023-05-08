import { ISOString, ListEntity } from "."

interface VehicleEntity {
	name: string
	model:string
	vehicle_class: string
	manufacturer: string
	length: string
	cost_in_credits: string
	crew: string
	passengers: string
	max_atmosphering_speed: string
	cargo_capacity: string
	consumables: string
	films:string[]
	pilots:string[]
	url:string
	created:ISOString
	edited:ISOString
}

interface VehiclesListEntity extends ListEntity<VehicleEntity> {}

export default {
	getStarship:async  () => {
		const { $axios } = useNuxtApp()
		const res = await $axios.get<VehiclesListEntity>( '/vehicles/' )
		return res.data
	},
	getStarshipById: async(id:number) => {
		const { $axios } = useNuxtApp()
		const res = await $axios.get<VehicleEntity>( `/vehicles/${id}` )
		return res.data
	}
}