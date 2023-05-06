import peopleRepository from "./people-repository"
import filmsRepository from "./films-repository"

export interface ListEntity<T> {
	count: number,
	next: string | null;
	previous: string | null;
	results: T
}

export type ISOString = string

const apiDictionary = {
	people: peopleRepository,
	films: filmsRepository
} as const 

const apiFactory = (key: keyof typeof apiDictionary) => {
	return apiDictionary[key]
}

export default apiFactory