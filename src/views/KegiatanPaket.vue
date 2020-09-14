<template>
  <div class="kegiatanPaket">
    <!-- Page Title -->
    <v-container fluid style="padding-top: 72px">
      <v-row class="text-center">
        <v-col class="mb-4" cols="12" style="color: #E19000">
          <h1 class="display-2 font-weight-bold mb-3" style="margin-top: 30px">
            Kegiatan Paket
          </h1>

        </v-col>
      </v-row>
    </v-container>
    
    <v-spacer></v-spacer>
    
    <!-- Page Body -->
    <v-container fluid>
      <v-row>

        <v-card
          class="mx-auto mb-7 shadow-sm"
          max-width="100%"
        >
          <!-- <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img> -->

          <v-card-title class="col-12 white--text" style="background-color: #FEB451">
            Paket Standar
          </v-card-title>

          <v-card-subtitle style="text-align: justify">
            <br>Pelatihan Gerakan Pandai paket standar ditujukan untuk mengenalkan CT ke guru, sehingga guru dapat menginfus ke pelajaran masing-masing. Secara sederhana, jika guru sudah menerapkan pembelajaran yang menekankan pencapaian berpikir tingkat tinggi melalui problem soving, inquiry based learning, problem-based learning, project based learning, dan student centered learning, dan sebagai tambahan juga menggunakan teknologi informasi dan komunikasi serta memakai peranti/gawai/komputer, maka seharusnya guru sudah menerapkan CT dalam mata pelajarannya.
          </v-card-subtitle>

          <v-card-actions>
            <!-- <v-btn text>Share</v-btn> -->

            <v-btn
              text
              text-color="#1CBDB5"
            >
            <router-link to="/paket-standar">Daftar Paket Standar</router-link>
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              icon
              @click="showstandar = !showstandar"
            >
              <v-icon>{{ showstandar ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showstandar">
              <v-divider></v-divider>

              <v-card-text>

              <v-list three-line>
                <v-list-item
                  v-for="item in descriptionStandar"
                  :key="item.field"
                >
                  <v-list-item-content>
                    <v-list-item-title v-html="item.field"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.content" class="wrap-text"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>

        <v-card
          class="mx-auto shadow-sm"
          max-width="100%"
        >
          <!-- <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img> -->

          <v-card-title class="col-12 white--text" style="background-color: #FEB451">
            Paket Tambahan
          </v-card-title>

          <v-card-subtitle style="text-align: justify">
            <br>Pelatihan Gerakan Pandai paket standar ditujukan sebagai kelanjutan dari paket standar dan diperuntukan bagi guru-guru yang memiliki kemampuan lebih. Kegiatan di dalam paket ini terdiri dari workshop guru inti dan micro teaching ke siswa. Materi yang akan diberikan pada paket ini pun lebih advanced dengan target bahwa guru dapat menginfus Computational Thinking secara sistematis dengan kelengkapan perangkat ajarnya dalam mata pelajaran yang diampunya. Paket tambahan ini akan mulai diadakan pada April 2021.
          </v-card-subtitle>

          <v-card-actions>
            <!-- <v-btn text>Share</v-btn> -->
            
            <v-btn
              color="#1CBDB5"
              text
            >
              Daftar Paket Tambahan
            </v-btn>

            <v-spacer></v-spacer>
            
            <v-btn
              icon
              @click="showtambahan = !showtambahan"
            >
              <v-icon>{{ showtambahan ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showtambahan">
              <v-divider></v-divider>

              <v-card-text>

              <v-list three-line>
                <v-list-item
                  v-for="item in descriptionTambahan"
                  :key="item.field"
                >
                  <v-list-item-content>
                    <v-list-item-title v-html="item.field"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.content" class="wrap-text"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>

      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'KegiatanPaket',
  components: {
  },
  // data: () => ({
  //   cards: [
  //     { title: 'Paket Standar', src: require('../assets/workshop.jpg'), flex: 4 },
  //     { title: 'Paket Tambahan', src: require('../assets/workshop.jpg'), flex: 4 },
  //   ],
  // }),
  data: () => ({
      showstandar: false,
      showtambahan: false,
      descriptionStandar: [
          { field: 'Peserta', content: 'Guru'},
          { field: 'Durasi', content: 'Total 1,5 hari (12 jam) tatap muka'},
          { field: 'Jumlah', content: '48 paket'},
          { field: 'Kegiatan', content: 'Workshop guru inti<br> Diseminasi ke guru sasaran<br> Micro teaching ke siswa'},
          { field: 'Tujuan', content: 'Computational Thinking merupakan salah satu ketrampilan abad digital yang perlu dikuasai setiap insan. Kemampuan berpikir, khususnya CT adalah kertampilan umum yang esensial (generic essential skill) yang perlu diintegrasikan ke semua bidang. CT membentuk siswa untuk berpikir kritis dan kreatif, menjadi kreator karya digital yang dibutuhkan saat kini.'},
          { field: 'Tools/Platform Pelatihan', content: 'Setiap paket wajib menset-up satu google classroom untuk mengelola materi dan guru pesertanya. Setiap regu menset up satu google class room dan sebuah lingkungan kerja dengan google drive yang wajib disetor link/lokasinya di sistem NBO. Semua artefak pelatihan disimpan dalam lingkungan masing-masing tersebut.'},
        ],
        descriptionTambahan: [
          { field: 'Peserta', content: 'Guru'},
          { field: 'Durasi', content: 'Akan diatur lebih lanjut'},
          { field: 'Jumlah', content: '2 paket'},
          { field: 'Kegiatan', content: 'Workshop guru inti<br> Micro teaching ke siswa'},
          { field: 'Tujuan', content: 'Materi advance dengan target guru mampu menginfus CT secara sistematis dengan kelengkapan perangkat ajarnya'},
          { field: 'Tools/Platform Pelatihan', content: 'Setiap paket wajib menset-up satu google classroom untuk mengelola materi dan guru pesertanya. Setiap regu menset up satu google class room dan sebuah lingkungan kerja dengan google drive yang wajib disetor link/lokasinya di sistem NBO. Semua artefak pelatihan disimpan dalam lingkungan masing-masing tersebut.'},
        ],
  }),
}
</script>

<style lang="scss">
.wrap-text {
  -webkit-line-clamp: unset !important;
  text-align: justify;
}
</style>
