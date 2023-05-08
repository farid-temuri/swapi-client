<template>
<div>{{peopleStore.people}}</div>
</template>
<script lang='ts' setup>
import { usePeopleStore } from '~/store/people/peopleStore'


const peopleStore = usePeopleStore()

await peopleStore.initialFetch()
</script>