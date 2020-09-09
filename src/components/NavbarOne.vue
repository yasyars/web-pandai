<template>
<nav class="shadow-sm smart-scroll navbar navbar-expand-lg nav-custom fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top" >
                 <v-img
                    alt="PANDAI"
                    class="shrink mr-2"
                    contain
                    min-width="100"
                    src="../assets/logo-pandai.png"
                    transition="scale-transition"
                    width="150"
                    />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<style scss scoped>

.nav-custom{
    background-color: var(--base-color);
}

.smart-scroll{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
.scrolled-down{
   transform:translateY(-100%); transition: all 0.3s ease-in-out;
}
.scrolled-up{
   transform:translateY(0); transition: all 0.3s ease-in-out;
}

</style>

<script>
</script>