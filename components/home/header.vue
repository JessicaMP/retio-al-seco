<template lang="pug">
.grid.mx-2.my-1
    .grid-lg-7
        img(src=`~/assets/icons/logo.svg` alt="Logo")
    .grid-lg-5
        .grid
            .grid-lg-6.border__style
                .d-flex.justify-center
                    img(src=`~/assets/icons/find-column.svg` alt="Icon select")
                    p.mx-1 Seleccionar tu comuna
                    img(src=`~/assets/icons/arrow-down.svg` alt="Icon select")
            .grid-lg-6
                Search
</template>
<script>
import Search from "../search.vue"
export default {
    name: "Header",
    components: {
        Search
    }
}
</script>
<style lang="sass" scoped>
    .border__style
        border-left: 1px solid #F9F9F9
        border-right: 1px solid #F9F9F9

</style>