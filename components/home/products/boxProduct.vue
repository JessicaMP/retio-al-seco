<template lang="pug">
    div
        .d-flex.align-center.pt-2.pb_8.bg__image.color__white.font-bold.px-middle.border__radius__top
            .bg__white.border__radius__100.px__image.mr-1
                img(src=`~/assets/images/kalis.png` alt="Icon select")
            p.m-0 {{Content.title || 'Título'}}
        .bg__grey
            .mx-middle
                .grid
                    .grid-6
                        span.font__size__12 Retiro en tienda
                        .d-flex.my-middle.align-center
                            img.mr-middle(src=`~/assets/icons/boxes.svg` alt="Icon select")
                            p.m-0.font-bold {{Content.schedule || 'Horario'}}
                    .grid-6
                        span.font__size__12 Costo de envió (Maipú)
                        .d-flex.my-middle.align-center
                            img.mr-middle(src=`~/assets/icons/coins.svg` alt="Icon select")
                            p.m-0.font-bold {{Content.shippingCost || 'Precio'}}
                .grid
                    .grid-6
                        span.font__size__12 Reparto a domicilio
                        .d-flex.my-middle.align-center
                            img.mr-middle(src=`~/assets/icons/shipping.svg` alt="Icon select")
                            p.m-0.font-bold {{Content.delivery || 'Delivery'}}
                    .grid-6
                        span.font__size__12 Tiempo de envío (Maipú)
                        .d-flex.my-middle.align-center
                            img.mr-middle(src=`~/assets/icons/time.svg` alt="Icon select")
                            p.m-0.font-bold {{Content.shippingTime || 'Tiempo'}}
        .grid.bg__pink.color__white.border__radius__bottom
            .grid-12
                p.text-center Visitar Kali´s
</template>
<script>
export default {
    name: "BoxProduct",
    props: {
        Content: { type: Object, required: false }
    }
}
</script>
<style lang="sass" scoped>
.bg__image
    background: url('~/assets/images/bg-1.png');
.border__radius
    border-radius: 30px
    &__top
        border-top-right-radius: 30px
        border-top-left-radius: 30px
    &__bottom
        border-bottom-right-radius: 30px
        border-bottom-left-radius: 30px
    &__100
        border-radius: 100%
.px__image
    padding-left: 7px
    padding-right: 7px
.m-middle
    margin: 0.5rem
.mx-middle
    margin-left: 0.5rem
    margin-right: 0.5rem
.my-middle
    margin-top: 0.5rem
    margin-bottom: 0.5rem
.mr-middle
    margin-right: 0.5rem
.px-middle
    padding-left: 0.5rem
    padding-right: 0.5rem
.pb_8
    padding-bottom: 8px
</style>