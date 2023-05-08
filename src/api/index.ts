import peopleRepository from "./people-repository"
import filmsRepository from "./films-repository"
import planetsRepository from "./planets-repository"
import speciesRepository from "./species-repository"
import starshipsRepository from "./starships-repository"
import vehiclesRepository from "./vehicles-repository"

import { TypeofObjectValues } from "~~/types";

export interface ListEntity<T> {
	count: number,
	next: string | null;
	previous: string | null;
	results: T
}

export type ISOString = string

const apiDictionary = {
	people: peopleRepository,
	films: filmsRepository,
	planets: planetsRepository,
	species: speciesRepository,
	starships: starshipsRepository,
	vehiclies: vehiclesRepository,
}

const reposittoryFactory = <T extends keyof typeof apiDictionary>( name: T ) => apiDictionary[ name ]

// !!!NOTE 
// const apiFactory = ( name: keyof typeof apiDictionary ) => apiDictionary[ name ] 
// this ⤴️ returns union of all dictionary keys ICONRRECTRLY

export default reposittoryFactory