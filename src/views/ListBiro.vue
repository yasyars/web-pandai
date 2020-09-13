<template>
  <div class="list-biro">
    <v-container fluid>
      <v-row class="text-center">
        <v-col class="mb-4" cols="12">
          <h1 class="display-2 font-weight-bold mb-3" style="margin-top: 30px">
            Daftar Biro
          </h1>

        </v-col>
      </v-row>
    </v-container>
        <v-spacer></v-spacer>
      <v-container fluid>
      </v-container>
      <v-container fluid>
        <v-row >
    
          <v-col
            key="Bebras Challenge"
            cols="4"
            align="center"
            justify="center"
          >
            <v-card>
              
              <router-link to="/list-paket">
              <v-img
                :src="require('../assets/bebras-challenge.jpeg')"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="'Biro Bandung Raya'"></v-card-title>
              </v-img>
              </router-link>
            </v-card>
          </v-col>


           <v-col
            key="Kegiatan Biro"
            cols="4"
            align="center"
            justify="center"
          >
            <v-card>
              <router-link to="/about">
              <v-img
                :src="require('../assets/kegiatan-biro.jpg')"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="'Biro Sumatera'"></v-card-title>
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
                <v-card-title v-text="'Biro Jawa'"></v-card-title>
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
                <v-card-title v-text="'Biro Hongkong'"></v-card-title>
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
                <v-card-title v-text="'Biro Kalimantan'"></v-card-title>
              </v-img>
              </a>
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
                <v-card-title v-text="'Biro Bekasi'"></v-card-title>
              </v-img>
              </a>
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
      { title: 'Bebras Challenge', src: require('../assets/bebras-challenge.jpeg'), flex: 6 },
      { title: 'Kegiatan Biro', src: require('../assets/carousel1.png'), flex: 6 },
      { title: 'Workshop Nasional', src: require('../assets/workshop.jpg'), flex: 4 },
      { title: 'Pilot Project', src: require('../assets/pilot-project.png'), flex: 4 },
      { title: 'CS Education Week', src: require('../assets/cs-education-week.jpg') , flex: 4},
    ],
  }),
}
</script>
