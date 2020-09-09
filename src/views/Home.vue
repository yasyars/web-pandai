<template>
  <div id="Home">
    <v-container grid-list-md text-xs-center>
    <v-row class="text-center">
      <!-- <v-col cols="12">
        <v-img
          :src="require('../assets/banner1.png')"
          class="my-3"
          contain
          width="100%"
        />
        
      </v-col> -->

      <v-carousel
        cycle
        height="550"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        >
          <v-sheet
            :color="colors[i]"
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

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
          Bebras pertama kali digelar di Lithuania (www.bebras.org), merupakan aktivitas ekstra kurikuler yang mengedukasi kemampuan problem solving dalam informatika dengan jumlah peserta terbanyak di dunia. Siswa peserta akan mengikuti kompetisi bebras di bawah supervisi guru, yang dapat mengintegrasikan tantangan tersebut dalam aktivitas mengajar guru. Kompetisi ini dilakukan setiap tahun secara online melalui komputer. Yang dilombakan dalam kompetisi adalah sekumpulan soal yang disebut Bebras task. Bebras task disajikan dalam bentuk uraian persoalan yang dilengkapi dengan gambar yang menarik, sehingga siswa dapat lebih mudah memahami soal. Soal-soal tersebut dapat dijawab tanpa perlu belajar informatika terlebih dahulu, tapi soal tersebut sebetulnya terkait pada konsep tertentu dalam informatika dan computational thinking. Bebras task sekaligus menunjukkan aspek informatika dan computational thinking.
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
          Gerakan PANDAI merupakan program yang diselenggarakan oleh Bebras Indonesia dengan disponsori oleh Google.org dan mendapat dukungan dari Direktorat Jenderal Guru dan Tenaga Kependidikan & Direktorat Jenderal Pendidikan Tinggi Kementerian Pendidikan dan Kebudayaan. Tujuan dari gerakan ini adalah memberikan pelatihan Computational Thinking (CT)kepada guru, dengan harapan agar keterampilan yang didapatkan tersebut dapat meningkatkan keterampilan berfikir secara kritis dan kreatif para siswa serta memberikan fondasi untuk menyiapkan generasi penerus yang berdaya saing di era Revolusi Industri 4 saat ini. Bebras Indonesia sebagai pelaksana Gerakan PANDAI adalah himpunan relawan dosen Perguruan Tinggi di berbagai kota di Indonesia yang turut serta dalam sebuah inisiatif internasional yang bertujuan untuk mempromosikan CT (berpikir dengan landasan komputasi atau informatika), di kalangan guru dan murid mulai tingkat SD, SMP, SMA, serta masyarakat luas.
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
  },
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        items: [
          {
            src: require('../assets/carousel1.png'),
          },
          {
            src: require('../assets/carousel2.jpg'),
          },
          {
            src: require('../assets/carousel3.jpg'),
          },

        ],
      }
    },
  }
</script>
