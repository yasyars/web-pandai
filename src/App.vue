<template>
<div id="app">
    <v-app>
      <Navbar/>
      <v-main>
        <router-view></router-view>
      </v-main>
    <v-spacer></v-spacer>
    <footer>
      <Footer/>
    </footer>
  </v-app>
  </div>

</template>
<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
} */

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Navbar from './components/Navbar.vue';
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
