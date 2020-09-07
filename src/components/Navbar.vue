<template>
    <v-app-bar
        app
        color="baseColor"
        light
        height="72px"
        hide-on-scroll
        class ="shadow-sm" 
        >
        <div class="d-flex align-center">
            <v-img
            alt="PANDAI"
            class="shrink mr-2"
            contain
            min-width="100"
            src="../assets/logo-pandai.png"
            transition="scale-transition"
            width="150"
            />
        </div>
        <v-spacer></v-spacer>
        <v-tabs></v-tabs>
        <v-tabs>
            <v-tab light class="tab-custom scrollactive-item" to="/">Beranda</v-tab>
            <v-tab light class="tab-custom scrollactive-item" to="/about">Tentang</v-tab>
            <v-tab  light class="tab-custom scrollactive-item" to="/kegiatan">Kegiatan</v-tab>
            <v-tab light class="tab-custom scrollactive-item" to="/pendaftaran">Pendaftaran</v-tab>
        </v-tabs>
        
       
        <v-btn text disabled></v-btn>

        <v-btn
            
            href="https://accounts.google.com/signin/v2/identifier?service=wise&passive=1209600&continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fu%2F0%2Fcreate&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2Fu%2F0%2Fcreate&ltmpl=forms&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
            target="_blank"
            color="primary"
        >
            <span class="">Masuk</span>
            <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
    </v-app-bar>
</template>

<style lang="scss">

.v-btn{
    text-transform:none !important;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0px ;
}

.v-tab{
    text-transform:none !important;
    font-family: "Roboto", sans-serif;
}

.tab-custom{
    font-family: "Roboto", sans-serif !important;
    font-size: 16px !important;
    font-style: normal !important;
    font-weight: normal !important;
    letter-spacing: 0px ;
    line-height: normal;
}
</style>
<script>
// import HelloWorld from './components/HelloWorld';

// export default {
//   name: 'App',

//   components: {
//     HelloWorld,
//   },

//   data: () => ({
//     //
//   }),
// };
</script>
