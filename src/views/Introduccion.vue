<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-12
        p.mb-3 El <em>merchandising</em> es una herramienta clave dentro de las estrategias comerciales modernas, ya que permite optimizar la presentación de productos y servicios en los puntos de venta. A través de técnicas visuales y sensoriales, se busca captar la atención del cliente, influir en sus decisiones de compra y fortalecer la identidad de marca.
        
    .row.justify-content-center.align-items-start.mb-3
      .col-12.col-lg-7.mb-1.mb-lg-1
        p.mb-3 Este componente formativo tiene como propósito que el aprendiz conozca y aplique los principios fundamentales del <em>merchandising</em>, comprendiendo cómo intervienen elementos como el color, la iluminación, el mobiliario o la ambientación para mejorar la experiencia del consumidor. También se estudian las características del producto y del cliente como base para diseñar una exhibición efectiva.
        .tarjeta.color-secundario-20.p-3.mb-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.col-lg-2.order-1.order-lg-2.mb-3
              figure
                img(src='@/assets/curso/introduccion/img_2.svg', class="img-fluid").h-100.mb-3
            .col-12.col-lg-10.order-2.order-lg-1.mb-0
              p.mb-0 A lo largo del desarrollo temático, el aprendiz podrá identificar tipos de clientes, segmentarlos, reconocer los diferentes tipos de <em>merchandising</em> y aplicar conceptos de <em>layout</em>, señalización y música ambiental. Todo esto permitirá que la exhibición de productos responda a una estrategia clara, alineada con las necesidades del mercado y el perfil del comprador.
  
      .col-12.col-lg-5
        figure.mb-5
          img(src='@/assets/curso/introduccion/img_1.png', class="img-fluid")

    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/JAUAw5CC4q4?si=MMRx_jCt-InS1nnz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Principios del <em>merchandising</em>

</template>

<script>
export default {
  name: 'Introduccion',
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
