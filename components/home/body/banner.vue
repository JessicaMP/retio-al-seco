<template lang="pug">
.grid.bg__pink.p-2.font-bold.color__white
    .grid-lg-5
        p.font__size__40 En Al Seco siempre encontrarás lo que buscas
    .grid-lg-7
        .grid.font__size__18
            .grid-lg-4
                .d-flex.justify-center.align-center
                    img(src=`~/assets/images/atention-all-days.png` alt="Atention 24/7")
                    p ATENCIÓN 24/7
            .grid-lg-4
                .d-flex.justify-center.align-center
                    img(src=`~/assets/images/find-all.png` alt="Find products")
                    p ENCONTRARÁS DE TODO 
            .grid-lg-4
                .d-flex.justify-center.align-center
                    img(src=`~/assets/images/transport.png` alt="Image Transport")
                    p HASTA TU PUERTA
</template>
<script>
export default {
    name: "Banner"
}
</script>
<style lang="sass" scoped>

</style>