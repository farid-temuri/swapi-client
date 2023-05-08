import repositoryFactory from '~/api';
import { PeopleListEntity } from '~/api/people-repository';
const peopleRepo = repositoryFactory( 'people' )

export const usePeopleStore = defineStore( 'peopleStore', () => {

	const people = ref<PeopleListEntity | null>(null)

	const fetchPeople = async() => {
		people.value = await peopleRepo.getPeople()
	}

	const initialFetch = async() => {
		if ( people.value === null ) {
			await fetchPeople()
		}
	}

	return {
		people,
		initialFetch
	}
})