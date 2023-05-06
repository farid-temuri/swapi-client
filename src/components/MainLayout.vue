<template>
  <v-app id="inspire">
    <v-app-bar
      class="px-3"
      color="white"
      flat
      density="compact"
    >
      <v-spacer></v-spacer>

      <v-tabs
        centered
        color="grey-darken-2"
      >
        <v-tab
          v-for="link in links"
          :key="link.to"
					:to="link.to"
					@click="$router.push({
						name:link.to
						})"
        >
				{{ link.name }}
        </v-tab>
      </v-tabs>
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
		to: 'index'
	},
	{
		name: 'People',
		to: 'people'
	}
] )

</script>