<template>
  <div class="kegiatan">
    <v-container fluid>
      <v-row class="text-center">
        <v-col class="mb-4" cols="12">
          <h1 class="display-2 font-weight-bold mb-3" style="margin-top: 30px">
            Kegiatan
          </h1>

        </v-col>
      </v-row>
    </v-container>
        <v-spacer></v-spacer>
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>
  
              <v-card-actions>
                <v-spacer></v-spacer>
  
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Kegiatan',
  components: {
  },
  data: () => ({
    cards: [
      { title: 'Workshop Nasional', src: require('../assets/workshop.jpg'), flex: 4 },
      { title: 'Favorite road trips', src: require('../assets/workshop.jpg'), flex: 4 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      { title: 'Workshop Nasional', src: require('../assets/workshop.jpg'), flex: 4 },
      { title: 'Favorite road trips', src: require('../assets/workshop.jpg'), flex: 4 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
    ],
  }),
}
</script>
