<template>
    <v-app-bar
        app
        color="primary"
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
            src="../assets/logo-pandai-01.svg"
            transition="scale-transition"
            width="150"
            />

            <v-img
            alt="Bebras Indonesia"
            class="shrink mr-2"
            contain
            min-width="100"
            src="../assets/logo-tulisan-bebras.png"
            transition="scale-transition"
            width="150"
            />
        </div>
        <v-tabs></v-tabs>
        <v-tabs></v-tabs>
        <v-tabs dark color="base">
            <v-tab class="tab-custom" to="/">Beranda</v-tab>
            <v-tab class="tab-custom" to="/about">Tentang</v-tab>
            <v-tab class="tab-custom" to="/kegiatan">Kegiatan</v-tab>
            <v-tab class="tab-custom" to="/peserta">Peserta</v-tab>
        </v-tabs>
        <v-btn text disabled ></v-btn>
        <v-btn
            href="https://accounts.google.com/signin/v2/identifier?service=wise&passive=1209600&continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fu%2F0%2Fcreate&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2Fu%2F0%2Fcreate&ltmpl=forms&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
            target="_blank"
            color="secondary"
        >
            <span class="">Masuk</span>
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
    letter-spacing: 0px !important;
    line-height: normal !important;
}

</style>
<script>
</script>
