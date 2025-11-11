<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Principios del merchandising permite al aprendiz adquirir conocimientos esenciales sobre la presentación estratégica de productos y servicios en el punto de venta. A lo largo del proceso, el aprendiz comprende los conceptos, tipos y características de los productos, así como la importancia de identificar y segmentar al cliente. Además, desarrolla habilidades para aplicar los fundamentos del merchandising y utilizar elementos visuales como el layout, el mobiliario, la iluminación y el color, con el fin de crear experiencias de compra atractivas que respondan a estrategias comerciales efectivas
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="El componente formativo Principios del merchandising permite al aprendiz adquirir conocimientos esenciales sobre la presentación estratégica de productos y servicios en el punto de venta. A lo largo del proceso, el aprendiz comprende los conceptos, tipos y características de los productos, así como la importancia de identificar y segmentar al cliente. Además, desarrolla habilidades para aplicar los fundamentos del merchandising y utilizar elementos visuales como el layout, el mobiliario, la iluminación y el color, con el fin de crear experiencias de compra atractivas que respondan a estrategias comerciales efectivas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
