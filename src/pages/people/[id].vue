<template>
<div>{{personStore.person}}</div>
</template>
<script lang='ts' setup>
import { usePersonStore } from '~/store/people/personStore';

const route = useRoute()
const personStore = usePersonStore()

await personStore.initialFetch( Number(
	typeof route.params.id === 'string'
		? route.params.id
		: route.params.id[0]
) )
</script>