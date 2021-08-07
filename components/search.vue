<template lang="pug">
.search__style
    .grid.px-1
        .grid-11
            input.mx-1.width__100(
                type="search"
                placeholder="Busca tu producto")
        .grid-1
            img(src=`~/assets/icons/search.svg` alt="Icon select")
</template>
<script>
export default {
    name: "Search"
}
</script>
<style lang="sass" scoped>
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