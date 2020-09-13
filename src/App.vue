<template>
<div id="app">
    <v-app>
    <Navbar/>
  
  <router-view></router-view>

  <v-spacer></v-spacer>
  <footer>
    <Footer/>
  </footer>
      
  </v-app>
  </div>

</template>

<style lang="scss">

body {
  font-size: 16px;
  font-family: R;
}

</style>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer';


export default {
  name: 'App',

  components: {
    Navbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
