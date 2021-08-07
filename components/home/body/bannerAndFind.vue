<template lang="pug">
.grid.bg__pink.p-2.font-bold.color__white
    .grid-lg-4
        p.font__size__33 Encuentra productos o botillerías favoritas
    .grid-lg-4
        .d-flex.justify-center.align-center
            img(src=`~/assets/images/boy-runner.png` alt="Atention 24/7")
    .grid-lg-4
        .mx-2
            Search
</template>       
<script>
import Search from "../../search.vue"

export default {
    name: "BannerAndFind",
    components: {
        Search
    }
}
</script>