<template>
<div>
	<VDataTable
	v-if="peopleStore.people"
	:headers="headers"
	:items="peopleStore.people.results"
	>
	<template #bottom> 
	<VPagination :length="paginationLength" v-model="peopleStore.currentPage">
	</VPagination>
	</template>
</VDataTable></div>
</template>
<script lang='ts' setup>
import { usePeopleStore } from '~/store/people/peopleStore'
import { VDataTable } from 'vuetify/labs/VDataTable'
import { DataTableHeader } from '@/../types/index'

const peopleStore = usePeopleStore()

await peopleStore.initialFetch()


const headers = [ 
	{ title: 'Name', key: 'name', sortable: false }
] satisfies DataTableHeader[]


const paginationLength = computed( () => {	
	if ( !peopleStore.people?.count ) return 0
	const remainder = peopleStore.people.count % 10? 1: 0
	return peopleStore.people.count / 10 + remainder
})

</script>