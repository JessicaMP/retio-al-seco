<template lang="pug">
    div
        Banner
        BannerAndFind
</template>
<script>
import Banner from "./banner.vue"
import BannerAndFind from "./bannerAndFind.vue"

export default {
    name: "Body",
    components: {
        Banner,
        BannerAndFind
    }
}
</script>