<template>
<div>
	{{ peoplesRef }}
</div>
</template>
<script lang='ts' setup>
import api from '@/api'

const peopleApi = api('people')

const peoplesRef = await peopleApi.getPeoples()
</script>