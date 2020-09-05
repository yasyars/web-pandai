<template>
  <div id="app">
    <nav class="navbar">
      <router-link class= "nav-item" to="/" >Beranda</router-link>
      <router-link class= "nav-item" to="/about">Tentang</router-link>
      <router-link class= "nav-item" to="/kegiatan">Kegiatan</router-link>
    </nav>
    <router-view/>
    <v-spacer></v-spacer>
    <footer>
      <Footer/>
    </footer>
  </div>

</template>

<style>
.nav-item{
  align-items: center;
  padding: 10px;
  font-weight: bold;
  color: #2c3e50;
  font-style: normal;
  text-decoration: none;
}
.navbar{
  background-color: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 1366px;
  /* height: 75px; */
  /* left: 100px;
  top: 0px; */
  padding: 30px;
  align-items: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
} */

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<script>
//import HelloWorld from './components/HelloWorld';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>