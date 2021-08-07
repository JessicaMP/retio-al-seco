<template lang="pug">
.grid.mx-2.my-1
    .grid-lg-7
        img(src=`~/assets/images/logo.svg` alt="Logo")
    .grid-lg-5
        .grid
            .grid-lg-6.border__style
                .d-flex.justify-center
                    img(src=`~/assets/icons/find-column.svg` alt="Icon select")
                    p.mx-1 Seleccionar tu comuna
                    img(src=`~/assets/icons/arrow-down.svg` alt="Icon select")
            .grid-lg-6
                .d-flex.justify-center
                    .d-flex.search__style
                        input.mx-1(
                            type="search"
                            placeholder="Busca tu producto")
                        img(src=`~/assets/icons/search.svg` alt="Icon select")
</template>
<script>
export default {
    name: "Header"
}
</script>
<style lang="sass" scoped>
    .border__style
        border-left: 1px solid #F9F9F9
        border-right: 1px solid #F9F9F9
    .search__style
        background-color: #F7F7F7
        border-radius: 23px
        padding: 0.5rem
        input
            border: none
            background-color: #F7F7F7
            color: #3A3A3A
            font-weight: 500
</style>