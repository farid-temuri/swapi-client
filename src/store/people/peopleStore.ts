import repositoryFactory from '~/api';
import { PeopleListEntity } from '~/api/people-repository';
const peopleRepo = repositoryFactory( 'people' )

export const usePeopleStore = defineStore( 'peopleStore', () => {

	const people = ref<PeopleListEntity | null>(null)

	const currentPageModule = ref(1)

	const currentPage = computed({
		get() { return currentPageModule.value },
		set( newVal ) {
			currentPageModule.value = newVal
			fetchPeople(currentPageModule.value)
		}
	})

	const fetchPeople = async ( page?: number ) => {
		isLoading.value = true
		people.value = await peopleRepo.getPeople( page )
		isLoading.value = false
	}

	const isLoading = ref<boolean>(false)

	const initialFetch = async() => {
		if ( people.value === null ) {
			await fetchPeople()
		}
	}

	const paginationLength = computed<number>( () => {	
		if ( !people.value?.count ) return 0
		const remainder = people.value.count % 10? 1: 0
		return Math.trunc( people.value.count / 10 + remainder )
	})

	return {
		people,
		initialFetch,
		paginationLength,
		currentPage,
		isLoading:readonly( isLoading )
	}
})