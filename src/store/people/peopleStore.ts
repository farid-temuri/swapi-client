import repositoryFactory from '~/api';
import { PeopleListEntity } from '~/api/people-repository';
const peopleRepo = repositoryFactory( 'people' )

export const usePeopleStore = defineStore( 'peopleStore', () => {

	const people = ref<PeopleListEntity | null>(null)

	// const currentPage = ref( 1 )
	
	const currentPageModule = ref(1)

	const currentPage = computed({
		get() { return currentPageModule.value },
		set( newVal ) {
			currentPageModule.value = newVal
			fetchPeople(currentPageModule.value)
		}
	})

	const fetchPeople = async( page ?:number) => {
		people.value = await peopleRepo.getPeople(page)
	}

	const initialFetch = async() => {
		if ( people.value === null ) {
			await fetchPeople()
		}
	}

	// watchEffect( () => {
	// 	fetchPeople(currentPage.value)
	// })

	return {
		people,
		initialFetch,
		currentPage
	}
})