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
        height="650"
        width=100%
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        >
        
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
          </v-row>

        </v-carousel-item>
      </v-carousel>

    </v-row>
  
  </v-container>
  <!-- <Hello/> -->
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
