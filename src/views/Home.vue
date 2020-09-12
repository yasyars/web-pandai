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
