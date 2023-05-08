import { ISOString, ListEntity } from "."

interface PlanetEntity {
	name:string
	diameter :string
	rotation_period :string
	orbital_period:string
	gravity:string
	population :string
	climate :string
	terrain :string
	surface_water :string
	residents :string[]
	films :string[]
	url :string
	created :ISOString
	edited :ISOString
}

interface PlanetsListEntity extends ListEntity<PlanetEntity> {}

export default {
	getStarship:async  () => {
		const { $axios } = useNuxtApp()
		const res = await $axios.get<PlanetsListEntity>( '/planets/' )
		return res.data
	},
	getStarshipById: async(id:number) => {
		const { $axios } = useNuxtApp()
		const res = await $axios.get<PlanetEntity>( `/planets/${id}` )
		return res.data
	}
}