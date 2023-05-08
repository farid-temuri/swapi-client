import repositoryFactory from '~/api';
import { PeopleEntity } from '~/api/people-repository';
const peopleRepo = repositoryFactory( 'people' )

export const usePersonStore = defineStore( 'personStore', () => {

	const person = ref<PeopleEntity | null>(null)

	const fetchPerson = async(id:number) => {
		person.value = await peopleRepo.getPersonById(id)
	}

	const initialFetch = async(id:number) => {
		if ( person.value === null ) {
			await fetchPerson(id)
		}
	}

	return {
		person,
		initialFetch
	}
})