import { ListEntity } from "."

interface PeopleEntity {
	name: string
	birth_year: string
	eye_color: string
	gender: string
	hair_color: string
	height: string
	mass:string
	skin_color:string
	homeworld:string
	films:string[]
	species:string[]
	starships:string[]
	vehicles:string[]
	url:string
	created:string
	edited:string
}

interface PeopleListEntity extends ListEntity<PeopleEntity> {}

export default {
	getPeoples:async  () => {
		const { $axios } = useNuxtApp()
		const res = await $axios.get<PeopleListEntity>( '/people/' )
		return res.data
	},
	getPersonById: async(id:number) => {
		const { $axios } = useNuxtApp()
		const res = await $axios.get<PeopleEntity>( `/people/${id}` )
		return res.data
	}
}