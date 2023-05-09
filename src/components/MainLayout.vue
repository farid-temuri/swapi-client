<template>
  <v-app id="inspire">
    <v-app-bar
      class="px-3"
      color="primary"
      flat
      density="compact"
    >
      <v-spacer></v-spacer>

      <VTabs
        centered
        color="white"
      > 
        <VTab
          v-for="link in links"
          :key="link.pathName.name"
					:to="link.pathName"
        >
				{{ link.name }}
        </VTab>
      </VTabs>
      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
<slot></slot>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const links = ref( [
	{
		name: 'Main',
		pathName:{ name:'index'}
	},
	{
		name: 'People',
		pathName: {name:'people'}
	}
] )

</script>