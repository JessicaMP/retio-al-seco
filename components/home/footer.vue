<template lang="pug">
.grid.bg__purple.p-2.color__white
    .grid-lg-2
        p.font__size__12.m-0 Localización:
        .d-flex
            img.mr-1(src=`~/assets/icons/find-column-white.svg` alt="Icon select")
            p Estás en: Maipú
    .grid-lg-8
        p.font__size__12 Social Media
        .d-flex
            img.max__width__30.mr-1(src=`~/assets/icons/instagram.svg` alt="Icon select")
            img.max__width__30.mr-1(src=`~/assets/icons/facebook.svg` alt="Icon select")
            img.max__width__30.mr-1(src=`~/assets/icons/whatsapp.svg` alt="Icon select")
    .grid-lg-2.text-right
        img(src=`~/assets/icons/logo-white.svg` alt="Logo")
        p.font__size__12.m-0 Al Seco 2021 / Santiago de Chile

</template>
<script>
export default {
    name: "Footer"
}
</script>