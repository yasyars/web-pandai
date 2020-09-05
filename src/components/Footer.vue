<template>
  <v-footer
    padless
  >
    <v-card
      flat
      tile
      class=flex
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="py-2">
        Hubungi kami di itb@bebras.or.id
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} — <strong>Gerakan PANDAI</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
  export default {
    name: 'Footer',

   data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
