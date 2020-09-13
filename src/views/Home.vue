<template>
    <div id="Home">
      <v-carousel 
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      height="650"
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>

      <v-container fluid>

      <v-row class="text-center">
        <v-col class="mb-4" cols="12">
          <h1 class="display-2 font-weight-bold mb-3" style="margin-top: 30px">
            Tentang Kami
          </h1>
        </v-col>
        <v-col
          class="mb-5"
          cols="9"
        >
          <h3 class="headline font-weight-bold mb-3">
              Gerakan PANDAI
          </h3>
          <p style="text-align: justify; margin-top: 15px">
            Gerakan PANDAI merupakan program yang diselenggarakan oleh Bebras Indonesia dengan disponsori oleh Google.org dan mendapat dukungan dari Direktorat Jenderal Guru dan Tenaga Kependidikan & Direktorat Jenderal Pendidikan Tinggi Kementerian Pendidikan dan Kebudayaan. Tujuan dari gerakan ini adalah memberikan pelatihan Computational Thinking (CT)kepada guru, dengan harapan agar keterampilan yang didapatkan tersebut dapat meningkatkan keterampilan berfikir secara kritis dan kreatif para siswa serta memberikan fondasi untuk menyiapkan generasi penerus yang berdaya saing di era Revolusi Industri 4 saat ini. Bebras Indonesia sebagai pelaksana Gerakan PANDAI adalah himpunan relawan dosen Perguruan Tinggi di berbagai kota di Indonesia yang turut serta dalam sebuah inisiatif internasional yang bertujuan untuk mempromosikan CT (berpikir dengan landasan komputasi atau informatika), di kalangan guru dan murid mulai tingkat SD, SMP, SMA, serta masyarakat luas.
          </p>
        </v-col>
          <v-col
          cols="3"
          class="col-middle">
          <v-img
            src="../assets/logo-pandai.png" >
          </v-img>
        </v-col>
        <v-col
        cols="3"
        >
          <v-img
            src="../assets/logo-bebras.png" >
            
          </v-img>
        </v-col>
        <v-col
          class="mb-5"
          cols="9"
        >
          <h3 class="headline font-weight-bold">
              Bebras Indonesia
          </h3>
          <p style="text-align: justify; margin-top: 15px">
            Bebras pertama kali digelar di Lithuania (www.bebras.org), merupakan aktivitas ekstra kurikuler yang mengedukasi kemampuan problem solving dalam informatika dengan jumlah peserta terbanyak di dunia. Siswa peserta akan mengikuti kompetisi bebras di bawah supervisi guru, yang dapat mengintegrasikan tantangan tersebut dalam aktivitas mengajar guru. Kompetisi ini dilakukan setiap tahun secara online melalui komputer. Yang dilombakan dalam kompetisi adalah sekumpulan soal yang disebut Bebras task. Bebras task disajikan dalam bentuk uraian persoalan yang dilengkapi dengan gambar yang menarik, sehingga siswa dapat lebih mudah memahami soal. Soal-soal tersebut dapat dijawab tanpa perlu belajar informatika terlebih dahulu, tapi soal tersebut sebetulnya terkait pada konsep tertentu dalam informatika dan computational thinking. Bebras task sekaligus menunjukkan aspek informatika dan computational thinking.
          </p>
        </v-col>
      
      </v-row>
    
      </v-container>


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
                <v-card-title v-text="'Kegiatan Biro'"></v-card-title>
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


export default {
   name: 'Home',

  components: {
    //HelloWorld
  },
    data () {
      return {
        items: [
          {
            src: require('../assets/carousel1.png'),
          },
          {
            src: require('../assets/carousel2.jpg'),
          },
        ],
      }
    },
  }
</script>
