<template lang="pug">
    div
        Banner
        Products(:list="products")
        BannerAndFind
        Products(:list="products.filter((e, i)=> i <= 3)")
</template>
<script>
import Banner from "./banner.vue"
import BannerAndFind from "./bannerAndFind.vue"
import Products from "../products"
import DataJson from "~/Data.json"

export default {
    name: "Body",
    components: {
        Banner,
        Products,
        BannerAndFind
    },
    data: () => ({
        products: DataJson.products,
    })
}
</script>