<template lang="pug">
.m-2.my-4
    .grid
        .grid-lg-3.mx-1(v-for="(product, index) in list")
            BoxProduct(
                :key="index"
                :content="product")
</template>
<script>
import BoxProduct from "./boxProduct.vue"

export default {
    name: "Products",
    components: {
        BoxProduct
    },
    props: {
        list: {type: Array, required: false}
    }
}
</script>