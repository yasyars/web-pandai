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
        <!-- <v-row >
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
            align="center"
            justify="center"
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
            </v-card>
          </v-col>
        </v-row> -->
      </v-container>
      <v-container fluid>
        <v-row >
    
          <v-col
            key="Bebras Challenge"
            cols="6"
            align="center"
            justify="center"
          >
            <v-card>
              <a href="http://bebras.or.id/v3" target="_blank">
              <v-img
                :src="require('../assets/bebras-challenge.jpeg')"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="'Bebras Challenge'"></v-card-title>
              </v-img>
              </a>
            </v-card>
          </v-col>


           <v-col
            key="Kegiatan Biro"
            cols="6"
            align="center"
            justify="center"
          >
            <v-card>
              <router-link to="/list-biro">
              <v-img
                :src="require('../assets/kegiatan-biro.jpg')"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="'Kegiatan Paket'"></v-card-title>
              </v-img>
              </router-link>
            </v-card>
          </v-col>


           <v-col
            key="Workshop Nasional"
            cols="4"
            align="center"
            justify="center"
          >
            <v-card>
              <router-link to="/about">
              <v-img
                :src="require('../assets/workshop.jpg')"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="'Workshop Nasional'"></v-card-title>
              </v-img>
              </router-link>
            </v-card>
          </v-col>

           <v-col
            key="Pilot Project"
            cols="4"
            align="center"
            justify="center"
          >
            <v-card>
              <router-link to="/about">
              <v-img
                :src="require('../assets/pilot-project.png')"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="'Pilot Project'"></v-card-title>
              </v-img>
              </router-link>
            </v-card>
          </v-col>

           <v-col
            key="CS Education Week"
            cols="4"
            align="center"
            justify="center"
          >
            <v-card>
              <a href="https://csedweek.org/" target="_blank">
              <v-img
                :src="require('../assets/cs-education-week.jpg')"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="'CS Education Week'"></v-card-title>
              </v-img>
              </a>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
// import router from '../router/index.js' 

// @ is an alias to /src
export default {
  name: 'Kegiatan',
  components: {
  },
  data: () => ({
    cards: [
      { title: 'Bebras Challenge', src: require('../assets/bebras-challenge.jpeg'), flex: 6 },
      { title: 'Kegiatan Biro', src: require('../assets/carousel1.png'), flex: 6 },
      { title: 'Workshop Nasional', src: require('../assets/workshop.jpg'), flex: 4 },
      { title: 'Pilot Project', src: require('../assets/pilot-project.png'), flex: 4 },
      { title: 'CS Education Week', src: require('../assets/cs-education-week.jpg') , flex: 4},
    ],
  }),
  // methods: {
  //     redirectBiro() { // this method is called on button click
  //        if (1 == 1)
  //        {
  //           router.push({name: 'ListBiro'})
  //        }
  //     }
  //   },
}
</script>
