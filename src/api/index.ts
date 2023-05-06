import peopleRepository from "./people-repository"

const apiDictionary = {
	people: peopleRepository
} as const 

const apiFactory = (key: keyof typeof apiDictionary) => {
	return apiDictionary[key]
}

export default apiFactory