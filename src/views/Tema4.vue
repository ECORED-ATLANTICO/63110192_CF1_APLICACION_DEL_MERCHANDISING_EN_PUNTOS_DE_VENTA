<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <em>Merchandising</em> visual


    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_4_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.1. <em>Layout</em> 
        .mb-0 
    
    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_4_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.2. Mobiliario 
        .mb-0 
    
    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_4_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.3. Vitrinismo 
        .mb-0 

    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_4_4.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.4. Ambientación 
        .mb-0 
    
    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_4_5.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.5. Señalización y rotulación 
        .mb-0 
    
    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_4_6.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.6. Iluminación 
        .mb-0 
    
    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_4_7.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.7. Color 
        .mb-0 

    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_4_7.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.7. Música ambiental
        .mb-0 

    

    
</template>

<script>
export default {
  name: 'Tema4',
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
