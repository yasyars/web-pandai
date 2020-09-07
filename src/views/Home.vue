<template>
  <div id="Home">
    
    <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/banner1.jpg')"
          class="my-3"
          contain
          height="500"
        />
        
      </v-col>

    </v-row>
  
  </v-container>
  <!-- <Hello/> -->
  </div>
</template>

<script>


export default {
   name: 'Home',

  components: {
}
}
</script>
