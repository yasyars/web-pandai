<template>
    <v-app-bar
        app
        color="baseColor"
        light
        height="72px"
        hide-on-scroll
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
        <div>
            <v-tabs>
                <v-tab light to="/">Beranda</v-tab>
                <v-tab light to="/about">Tentang</v-tab>
                <v-tab  light to="/kegiatan">Kegiatan</v-tab>
                <v-tab light to="/pendaftaran">Pendaftaran</v-tab>
            </v-tabs>
        </div>
        
       
        <v-btn text disabled></v-btn>

        <v-btn
            
            href="https://accounts.google.com/signin/v2/identifier?service=wise&passive=1209600&continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fu%2F0%2Fcreate&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2Fu%2F0%2Fcreate&ltmpl=forms&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
            target="_blank"
            color="primary"
        >
            <span class="mr-2 text-normal">MASUK</span>
            <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
    </v-app-bar>
</template>

<style scoped>

.v-btn{
    text-transform:none !important;
    font-family: "Roboto", sans-serif;
}

.v-tab{
    text-transform:none !important;
    font-family: "Roboto", sans-serif;
    height:50px;
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
