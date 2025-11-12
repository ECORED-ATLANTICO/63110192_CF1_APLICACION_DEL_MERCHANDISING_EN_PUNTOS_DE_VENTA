<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <em>Merchandising</em> visual

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_4/img_1.png')
      .bloque-texto-t__texto.color-secundario-20.col-10.mb-0
        p.mb-0 El <em>merchandising</em> visual es una disciplina dentro del <em>marketing</em> que se enfoca en la disposición física y estética de los productos en el punto de venta, con el fin de influir en la percepción y comportamiento del consumidor. A través del uso de elementos como el <em>layout</em>, el mobiliario, la iluminación, la ambientación y la señalética, se crea un entorno que favorece la experiencia de compra, estimula las emociones y promueve la decisión de compra. Según Editorial GG (2016), estos componentes deben estar alineados con la identidad de la marca y adaptados a las expectativas del público objetivo.
    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_4_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.1 <em>Layout</em> 
        .mb-0 
    .bloque-texto-g.bloque-texto-g.color-adicional-2.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_4/img_2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El <em>layout</em> o distribución del espacio comercial define el recorrido del cliente y la organización interna del punto de venta. Su diseño debe facilitar la circulación fluida, permitir el acceso a las distintas zonas de productos y generar un flujo que estimule la exploración. Existen distintos tipos de <em>layout</em>, como el lineal, el libre y el mixto, cada uno con ventajas específicas según el tipo de tienda (Martínez, 2017).
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-4
        .titulo-sexto.color-tabla
            h5 Tabla 3. 
            |  Tipos de layout en <em>merchandising</em> visual
        .tabla-b.mb-5
          table
            caption
              p <b>Fuente:</b> adaptada de Shopify, 2024.
            thead
              tr
                th.col-4 Tipo de <em>layout</em>
                th Características principales
                th Ventajas de uso
                th Ejemplo práctico
            tbody
              tr
                td <em>Grid</em> (Cuadrícula)
                td Organización en pasillos rectos y paralelos. Maximiza el espacio, facilita la búsqueda.
                td Optimiza el espacio y permite alta densidad de productos con fácil localización.
                td Supermercados, tiendas de descuento como D1 o Dollar City.
              tr.bg-table-01
                td <em>Loop (Racetrack)</em>
                td Camino principal que guía al cliente por todo el local en forma de circuito.
                td Estimula la exploración completa y exposición uniforme de categorías.
                td Grandes superficies como IKEA o almacenes por departamentos.
              tr
                td <em>Free-flow</em> (Libre)
                td Diseño abierto sin pasillos fijos. Fomenta la exploración y la ambientación relajada.
                td Favorece la experiencia personalizada y estimula compras por descubrimiento.
                td Boutiques de moda, tiendas de diseño independiente.
              tr.bg-table-01
                td <em>Spine</em> (Espina dorsal)
                td Pasillo central con conexiones laterales. Combina eficiencia con visibilidad del producto.
                td Facilita la navegación y destaca productos estratégicos a lo largo del eje. 
                td Tiendas de tecnología, droguerías, locales tipo <em>minimarket</em>.
              tr.bg-table-01
                td Angular / Geométrico
                td Usa formas diagonales o no convencionales. Aporta estética visual y recorrido original.
                td Aumenta el atractivo visual y da un carácter exclusivo al espacio comercial. 
                td Tiendas de lujo, <em>concept stores</em>, perfumerías especializadas.
              tr.bg-table-01
                td <em>Herringbone</em> (Espina de pescado)
                td Ideal para espacios angostos. Combina pasillos diagonales para optimizar el flujo.
                td Mejora la circulación en espacios estrechos y aprovecha rincones para exposición. 
                td Librerías pequeñas o tiendas de ropa en espacios reducidos.
    separador

  
    #t_4_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.2 Mobiliario 
    .mb-0 

    .row.justify-content-center.align-items-start.mb-3
        .col-12.col-lg-4
          figure.mb-5
            img(src='@/assets/curso/temas/tema_4/img_3.png', class="img-fluid")

        .col-12.col-lg-8.mb-1.mb-lg-1
          p.mb-3 El mobiliario comercial cumple funciones de vitrinismo en cuanto a exhibición, almacenamiento y ambientación. Debe estar diseñado para resaltar los productos, facilitar su acceso y mantener la coherencia visual con la marca. Estanterías, vitrinas, góndolas y mostradores son ejemplos comunes. Un mobiliario bien seleccionado contribuye a la organización del espacio y mejora la visibilidad de los artículos (Kotler & Armstrong, 2021).
          .tarjeta.color-secundario-20.p-3
            .row.align-items-center
              .col-9.col-lg-10
                p.mb-0 El vitrinismo es una herramienta clave en el marketing visual que busca captar la atención del cliente desde el exterior del punto de venta. Uno de sus elementos principales es el diseño visual, que combina aspectos como colores, formas, estilos e iluminación para reflejar la identidad del negocio y atraer al público desde la primera mirada (González, 2019). Se debe tener en cuenta:
              .col-3.col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema_4/img_4.png', class="img-fluid")
    
    .row.justify-content-center.align-items-start.mb-5
      .col-12.col-lg-8.mb-5
        .tarjeta.tarjeta--fondo__slider.p-5.mb-0
          SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
            .row.justify-content-center.align-items-center
              .col-10.col-lg-12.mb-0
                h5.mb-3 La tematización
                p.mb-3 Es la creación de conceptos visuales asociados a eventos especiales, temporadas o campañas promocionales. Esto ayuda a generar una conexión emocional con los consumidores y a hacer que la experiencia de compra sea más memorable (González, 2019).
            
            .row.justify-content-center.align-items-center
              .col-10.col-lg-12.mb-0
                h5.mb-3 La iluminación estratégica
                p.mb-3 También cumple un rol crucial. Al colocar luz sobre ciertos productos o zonas, se logra resaltar lo más relevante, guiar la mirada del cliente y aumentar la percepción de valor de los artículos exhibidos (González, 2019).

            .row.justify-content-center.align-items-center
              .col-10.col-lg-12.mb-0
                h5.mb-3 La buena distribución del espacio
                p.mb-3 En la vitrina evita la saturación visual y permite que el mensaje llegue con claridad. Al equilibrar los elementos, se facilita la lectura del concepto visual y se optimiza el uso del espacio disponible (González, 2019).

            .row.justify-content-center.align-items-center
              .col-10.col-lg-12.mb-0
                h5.mb-3 La renovación frecuente
                p.mb-3 Adaptándola a fechas clave o a nuevas promociones. Esta actualización mantiene la atención del cliente, crea un sentido de novedad constante y puede motivar visitas recurrentes al establecimiento (González, 2019).

            .row.justify-content-center.align-items-center
              .col-10.col-lg-12.mb-0
                h5.mb-3 El enfoque en productos estratégicos
                p.mb-3 Dentro de la vitrina permite dirigir el interés hacia artículos de alta rotación o con ofertas destacadas, favoreciendo su venta y aprovechando al máximo el espacio de exhibición (González, 2019).

      .col-8.col-lg-4.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema_4/img_5.png", class="img-flud").h-100


    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-terciario-20").mb-5
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
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-4
        .titulo-sexto.color-tabla
          h5 Tabla 4. 
          |  Uso del color en el <em>merchandising</em> 
        .tabla-b.mb-5
          table
            caption
              p <b>Fuente:</b> : adaptada de Solomon, M. R.,2018.
            thead
              tr
                th Color
                th Impacto psicológico
                th Beneficios en el punto de venta
                th Ejemplos de uso común
            tbody
              tr
                td Rojo
                td Estimula, crea urgencia, llama la atención.
                td Aumenta el deseo de compra, útil en promociones.
                td Señales de descuento, ofertas, zonas de impulso.
              tr
                td Azul
                td Transmite confianza, tranquilidad y profesionalismo.
                td Genera sensación de seguridad, ideal para fidelización.
                td Productos tecnológicos, marcas bancarias.
              tr
                td Amarillo
                td Alegre, energético, estimula la atención visual.
                td Aumenta la visibilidad y favorece la retención visual.
                td Áreas infantiles, anuncios creativos.
              tr
                td Verde
                td Asociado con naturaleza, frescura y bienestar.
                td Ideal para productos ecológicos o saludables.
                td Supermercados, negocios verdes, farmacias.
              tr
                td Naranja
                td Entusiasmo, creatividad, dinamismo.
                td Estimula la acción y el consumo impulsivo.
                td Tiendas deportivas, accesorios.
              tr
                td Negro
                td Elegancia, sofisticación, simplicidad.
                td Transmite exclusividad y lujo.
                td Productos <em>premium</em>, vitrinas de moda.
              tr
                td Blanco
                td Limpieza, pureza, simplicidad.
                td Genera sensación de orden y amplitud.
                td Farmacias, tiendas de tecnología, vitrinas minimalistas.
              tr
                td Rosa
                td Sensibilidad, ternura, feminidad.
                td Crea un ambiente acogedor, usado en productos dirigidos a mujeres.
                td Cosméticos, moda femenina.
              tr
                td Morado
                td Lujo, misterio, creatividad.
                td Potencia productos exclusivos e innovadores.
                td Perfumería, productos de belleza.
      

    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_4_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.3 Música ambiental
        .mb-0 

    .bloque-texto-g.bloque-texto-g.color-adicional-2.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_4/img_11.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La música ambiental es un recurso sensorial que mejora la experiencia de compra, influye en el estado de ánimo del cliente y puede incluso modificar el ritmo de circulación en el punto de venta. El tipo de música seleccionada debe estar en sintonía con el perfil del público y el tipo de productos. Estudios demuestran que una música agradable y adecuada puede incrementar el tiempo de permanencia y favorecer la compra por impulso (Martínez Cruz, s. f.; Editorial GG, 2016).

    .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10 
          .cajon.color-terciario-20.p-4.mb-0(data-aos="fade-left")
            p.mb-2 Se recomienda revisar los siguientes videos, los cuales cual aportaran conocimientos relevantes y reforzará contenido de relacionado con el tema <em>merchandising</em> visual: 
    
    h3(data-aos='zoom-in-right').mb-4
      span.label-title.label-title--1 Visual &nbsp;<em>merchandising</em>
    
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/6kYW3aYKamI?si=t0KN9wJ9NWGADVhe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Visual <em>merchandising</em>

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
