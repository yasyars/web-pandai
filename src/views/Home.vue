<template>
  <div id="Home">
    <v-container fluid style="margin: 0px; padding: 100px; width: 100%">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/banner1.jpg')"
          class="my-3"
          contain
          height="500"
        />
      </v-col>

      <v-col class="mb-4" cols="12">
        <h1 class="display-2 font-weight-bold mb-3" style="margin-top: 30px">
          Tentang Kami
        </h1>
        <!-- <p class="subheading font-weight-regular">
          Ingin tau lebih lanjut tentang Bebras?
          <br>Kunjungi linknya di sini
          <a
            href="www.bebras.or.id"
            target="_blank"
          >Bebras Indonesia</a>
        </p> -->

      </v-col>

      <v-col
        class="mb-5"
        cols="6"
      >
        <h2 class="headline font-weight-bold mb-3">
            Bebras Indonesia
        </h2>
        <p style="text-align: justify; margin-top: 15px">
          Bebras pertama kali digelar di Lithuania (www.bebras.org), merupakan aktivitas ekstra kurikuler yang mengedukasi kemampuan problem solving dalam informatika dengan jumlah peserta terbanyak di dunia. Siswa peserta akan mengikuti kompetisi bebras di bawah supervisi guru, yang dapat mengintegrasikan tantangan tersebut dalam aktivitas mengajar guru. Kompetisi ini dilakukan setiap tahun secara online melalui komputer.
        </p>
      </v-col>
      <v-col
        class="mb-5"
        cols="6"
      >
        <h2 class="headline font-weight-bold mb-3">
            Gerakan PANDAI
        </h2>
        <p style="text-align: justify; margin-top: 15px">
          Gerakan PANDAI merupakan kegiatan yang dilaksanakan oleh Bebras Indonesia dengan dukungan Google.org untuk menebarkan dan mengajarkan penguasaan computational thinking kepada siswa-siswa melalui guru-guru berbagai mata pelajaran.
        </p>
      </v-col>
      <!-- <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col> -->

      <!-- <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col> -->

      <!-- <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col> -->
    </v-row>
  </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  }
}
</script>
