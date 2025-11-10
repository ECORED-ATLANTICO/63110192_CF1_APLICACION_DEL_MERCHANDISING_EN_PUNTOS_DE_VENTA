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

  
    #t_4_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.2. Mobiliario 
    .mb-0 

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-terciario-20")
      div(titulo="La tematización")
        .row.justify-content-center.align-items-center.px-1
          .col-12.col-lg-7.order-2.order-lg-1.mb-0
            p.mb-0 es la creación de conceptos visuales asociados a eventos especiales, temporadas o campañas promocionales. Esto ayuda a generar una conexión emocional con los consumidores y a hacer que la experiencia de compra sea más memorable (González, 2019).
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_4/img_6.png', class="img-fluid")
      div(titulo="La iluminación estratégica")
        .row.justify-content-center.align-items-center.px-1
          .col-12.col-lg-7.order-2.order-lg-1.mb-0
            p.mb-0 también cumple un rol crucial. Al colocar luz sobre ciertos productos o zonas, se logra resaltar lo más relevante, guiar la mirada del cliente y aumentar la percepción de valor de los artículos exhibidos (González, 2019).
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_4/img_7.png', class="img-fluid")
      div(titulo="La buena distribución del espacio")
        .row.justify-content-center.align-items-center.px-1
          .col-12.col-lg-7.order-2.order-lg-1.mb-0
            p.mb-0 en la vitrina evita la saturación visual y permite que el mensaje llegue con claridad. Al equilibrar los elementos, se facilita la lectura del concepto visual y se optimiza el uso del espacio disponible (González, 2019).
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_4/img_8.png', class="img-fluid")
      div(titulo="La renovación frecuente")
        .row.justify-content-center.align-items-center.px-1
          .col-12.col-lg-7.order-2.order-lg-1.mb-0
            p.mb-0 adaptándola a fechas clave o a nuevas promociones. Esta actualización mantiene la atención del cliente, crea un sentido de novedad constante y puede motivar visitas recurrentes al establecimiento (González, 2019).
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_4/img_9.png', class="img-fluid")
      div(titulo="El enfoque en productos estratégicos")
        .row.justify-content-center.align-items-center.px-1
          .col-12.col-lg-7.order-2.order-lg-1.mb-0
            p.mb-0 dentro de la vitrina permite dirigir el interés hacia artículos de alta rotación o con ofertas destacadas, favoreciendo su venta y aprovechando al máximo el espacio de exhibición (González, 2019).
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_4/img_10.png', class="img-fluid")
    
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
