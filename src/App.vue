<template>
<div id="app">
    <v-app>
        <!-- <Navbar/> -->
      <scrollactive class="nav" active-class="-active">

      <v-app-bar
        app
        color="baseColor"
        light
        height="72px"
        hide-on-scroll
        class ="shadow-sm"
        id="mainNav"
        >
        <div class="d-flex align-center  js-scroll-trigger">
            <v-img
            alt="PANDAI"
            class="shrink mr-2"
            contain
            min-width="100"
            src="./assets/logo-pandai.png"
            transition="scale-transition"
            width="150"
            />
        </div>
        <v-spacer></v-spacer>
        <v-tabs></v-tabs>
        <v-tabs>
          <a light class="tab-custom scrollactive-item" href="#home">Beranda</a>
          <a light class="tab-custom scrollactive-item" href="#about">Tentang</a>
          <a  light class="tab-custom scrollactive-item" href="#kegiatan">
          Kegiatan</a>
         <a light class="tab-custom scrollactive-item" href="#four">Pendaftaran</a>
        </v-tabs>
        
        
        <v-btn text disabled></v-btn>

        <v-btn      
          href="https://accounts.google.com/signin/v2/identifier?service=wise&passive=1209600&continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fu%2F0%2Fcreate&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2Fu%2F0%2Fcreate&ltmpl=forms&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
          target="_blank"
          color="primary"
        >
          <span class="">Masuk</span>
        </v-btn>
      </v-app-bar>
  </scrollactive>


  <a name="home" id="home"></a>
  <section >
    <Home/>
  </section>

  <a name="about" id="about"></a>
  <section>
    <About/>
  </section>

  <a name="kegiatan" id="kegiatan"></a>
  <section>
    <!-- <Kegiatan/> -->
    <router-view></router-view>
  </section>

  <!-- <router-view></router-view> -->
    <v-spacer></v-spacer>
    <footer>
      <Footer/>
    </footer>
      
  </v-app>
  </div>

</template>

<style lang="scss">

.tab-custom{
    font-family: "Roboto", sans-serif !important;
    font-size: 16px !important;
    line-height: normal;
    color: #666 !important;
    padding-top: 30px !important;
    text-align: center !important;
}


.nav {

  a {
  padding: 1rem;
  flex-grow: 1;
  color: #666;
  text-decoration: none;

  &.-active {
    color: var(--primary) !important;
    border-bottom: solid !important ;
    border-color:var(--primary)!important;
  }
}
}




section {
  // min-height: 100vh;
  // max-width: 60rem;
  // padding: 60px 2rem 0 2rem;
  margin: auto;
  box-sizing: border-box;
}

body {
  font-size: 16px;
  font-family: R;
}

</style>

<script>
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
// import Kegiatan from './views/Kegiatan';



export default {
  name: 'App',

  components: {
    // Navbar,
    Footer,
    Home,
    About,
    // Kegiatan,
  },

  data: () => ({
    //
  }),
};
</script>
