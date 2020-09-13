<template>
  <v-card
    class="mx-auto"
    max-width="450"
  >
    <!-- <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img> -->

    <v-card-title class="col-6">
      Paket Standar
    </v-card-title>

    <v-card-subtitle style="text-align: justify">
      Pelatihan Gerakan Pandai paket standar ditujukan untuk mengenalkan CT ke guru, sehingga guru dapat menginfus ke pelajaran masing-masing. Secara sederhana, jika guru sudah menerapkan pembelajaran yang menekankan pencapaian berpikir tingkat tinggi melalui problem soving, inquiry based learning, problem-based learning, project based learning, dan student centered learning, dan sebagai tambahan juga menggunakan teknologi informasi dan komunikasi serta memakai peranti/gawai/komputer, maka seharusnya guru sudah menerapkan CT dalam mata pelajarannya.
    </v-card-subtitle>

    <v-card-actions>
      <!-- <v-btn text>Share</v-btn> -->

      <v-btn
        color="purple"
        text
      >
        Daftar Kegiatan
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
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
  
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>

<script>
// @ is an alias to /src
export default {
  name: 'Paket',
  components: {
  },
  // data: () => ({
  //   cards: [
  //     { title: 'Paket Standar', src: require('../assets/workshop.jpg'), flex: 4 },
  //     { title: 'Paket Tambahan', src: require('../assets/workshop.jpg'), flex: 4 },
  //   ],
  // }),
  data: () => ({
      show: false,
      descriptionStandar: [
          { field: 'Judul', content: 'Pelatihan untuk Guru'},
          { field: 'Durasi', content: 'Total 1,5 hari (12 jam) tatap muka'},
          { field: 'Peserta', content: 'Guru'},
          { field: 'Tujuan', content: 'Computational Thinking merupakan salah satu ketrampilan abad digital yang perlu dikuasai setiap insan. Kemampuan berpikir, khususnya CT adalah kertampilan umum yang esensial (generic essential skill) yang perlu diintegrasikan ke semua bidang. CT membentuk siswa untuk berpikir kritis dan kreatif,menjadi kreator karya digital yang dibutuhkan saat kini.'},
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
