<template>
<div>
	<VDataTableServer
	v-if="peopleStore.people"
	:headers="headers"
	color="red"
	:items="peopleStore.people.results"
	:loading="peopleStore.isLoading"
	:items-length="peopleStore.people.count"
	>
	<template #bottom> 
	<VPagination 
		color="primary"
		:length="peopleStore.paginationLength"
		v-model="peopleStore.currentPage"
		:disabled="peopleStore.isLoading"
	 >
	</VPagination>
	</template>
</VDataTableServer></div>
</template>
<script lang='ts' setup>
import { usePeopleStore } from '~/store/people/peopleStore'
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { DataTableHeader } from '@/../types/index'

const peopleStore = usePeopleStore()

await peopleStore.initialFetch()

const headers = [ 
	{ title: 'Name', key: 'name', sortable: false },
	{ title: 'Height(cm)', key: 'height', sortable: false },
	{ title: 'Gender', key: 'gender', sortable: false },
	{ title: 'Mass(kg)', key: 'mass', sortable: false },
	{ title: 'Birth year', key: 'birth_year', sortable: false },
	{ title: 'Eye color', key: 'eye_color', sortable: false },
	{ title: 'Skin color', key: 'skin_color', sortable: false },
	{ title: 'Homeworld', key: 'homeworld', sortable: false },
	{ title: 'films', key: 'films', sortable: false },
	{ title: 'species', key: 'species', sortable: false },
	{ title: 'starships', key: 'starships', sortable: false },
	{ title: 'vehicles', key: 'vehicles', sortable: false },
] satisfies DataTableHeader[]

</script>