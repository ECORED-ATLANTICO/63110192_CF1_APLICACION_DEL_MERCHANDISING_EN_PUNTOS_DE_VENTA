<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cliente
    
    .bloque-texto-g.bloque-texto-g.color-adicional-2.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El cliente es el corazón de todo negocio. Sin clientes no hay ventas, y sin ventas no hay empresa. Cada decisión comercial debe girar en torno a él, ya que es quien da sentido a los productos, servicios y esfuerzos de <em>marketing</em>. Conocerlo, entenderlo y atenderlo bien es la base para crecer, fidelizar y competir en el mercado.


    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_2_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.1 Concepto 
        .mb-0 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema_2/img_2.png", class="img-fluid")
      .col-12.col-lg-8 
        .cajon.color-secundario-20.p-4.mb-0(data-aos="fade-left")
          p.mb-0 Cliente es toda persona que, más allá de comprar un producto o servicio, entrega su confianza a cambio de una solución, una experiencia o un valor que mejora su vida o satisface una necesidad. Es alguien que no solo elige, sino que también evalúa, recuerda y, si se siente bien tratado, vuelve y recomienda.

    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_2_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.2 Tipologías 
        .mb-0 
    
      p.mb-3 Los clientes pueden organizarse en diferentes grupos dependiendo de lo que son, lo que buscan y cómo actúan frente a una oferta. Esta diversidad permite identificar perfiles como los siguientes:

    .row.justify-content-center.align-items-start.mb-5
      .col-8.col-lg-4.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema_2/img_3.png", class="img-flud")
      .col-12.col-lg-8.mb-5
        .tarjeta.tarjeta--fondo__slider.p-5.mb-0
          SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
            .row.justify-content-center.align-items-center
              .col-6.col-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_2/img_5.svg')
              .col-10.col-lg-9.mb-0
                p.mb-3 <b>Clientes nuevos:</b> son quienes dan su primer paso hacia la marca, explorando una compra inicial que puede abrir la puerta a una relación futura. A menudo, las empresas desarrollan estrategias de captación como promociones o descuentos para atraerlos. Ejemplo: Tesla utiliza una estrategia de pruebas gratuitas para atraer nuevos clientes y convencerlos de la calidad de sus vehículos eléctricos.
            
            .row.justify-content-center.align-items-center
              .col-6.col-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_2/img_6.svg')
              .col-10.col-lg-9.mb-0
                p.mb-3 <b>Clientes recurrentes:</b> son aquellos que compran con regularidad. Estos clientes ya han construido un vínculo con la empresa, confían en lo que ofrece y representan un flujo continuo y predecible de ingresos. Un ejemplo clásico de clientes recurrentes son los suscriptores de servicios como Netflix o los clientes leales de marcas como Apple.

            .row.justify-content-center.align-items-center
              .col-6.col-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_2/img_7.svg')
              .col-10.col-lg-9.mb-0
                p.mb-3 <b>Clientes potenciales:</b> aún no han comprado, pero ya demuestran un interés claro por lo que la empresa ofrece, lo que los convierte en candidatos reales para futuras ventas. Las estrategias de <em>marketing</em> deben centrarse en convertir a estos clientes potenciales en clientes reales. Un ejemplo puede ser la captación de clientes para un gimnasio mediante pruebas gratuitas.

            .row.justify-content-center.align-items-center
              .col-6.col-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_2/img_8.svg')
              .col-10.col-lg-9.mb-0
                p.mb-3 <b>Clientes leales:</b> son clientes que, con el tiempo, han mantenido una elección constante por una marca o producto, reflejando fidelidad y generando un alto nivel de compras repetidas. Un ejemplo sería Starbucks, que ha cultivado una base de clientes muy leal gracias a su programa de recompensas y la calidad constante de sus productos.
    .bg_img_3.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-2
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            |  Tipos de clientes
          figure
            img(src="@/assets/curso/temas/tema_2/img_9.svg", class="img-fluid d-none d-lg-block img100 mb-3" alt="La figura 2 muestra los diferentes tipos de clientes que existen en el mercado y sus características. Texto de la imagen: Clientes nuevos: hacen su primera compra; se atraen con promociones. Clientes recurrentes: compran con frecuencia y generan ingresos constantes. Clientes potenciales: aún no compran, pero muestran interés. Clientes leales: prefieren siempre la misma marca y compran repetidamente.")
            img(src="@/assets/curso/temas/tema_2/img_10.svg", class="img-fluid d-block d-lg-none img100 mb-3" alt="La figura 2 muestra los diferentes tipos de clientes que existen en el mercado y sus características. Texto de la imagen: Clientes nuevos: hacen su primera compra; se atraen con promociones. Clientes recurrentes: compran con frecuencia y generan ingresos constantes. Clientes potenciales: aún no compran, pero muestran interés. Clientes leales: prefieren siempre la misma marca y compran repetidamente.")
          figcaption 
            p <b>Fuente:</b> SENA 2025.  
    
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10 
          .cajon.color-terciario-20.p-4.mb-0(data-aos="fade-left")
            p.mb-2 El perfil del cliente permite crear estrategias de <em>marketing</em> personalizadas y efectivas. Un ejemplo es el perfil de quienes compran en Zara: personas que priorizan la moda actual, desean calidad sin pagar precios excesivos y valoran la rapidez con la que la marca responde a las nuevas tendencias. (Armstrong & Kotler, 2017).

      separador

      .row.justify-content-center.align-items-center.mb-0     
        .col-12.col-lg-12
          #t_2_3.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 2.3 Perfil 
          .mb-0 
    
      .row.justify-content-center.align-items-start.mb-3
        .col-12.col-lg-4
          figure.mb-5
            img(src='@/assets/curso/temas/tema_2/img_11.png', class="img-fluid")

        .col-12.col-lg-8.mb-1.mb-lg-1
          p.mb-3 La perfilación del cliente es esencial en la gestión comercial moderna, ya que permite identificar, clasificar y comprender a los consumidores con base en variables objetivas y subjetivas. Su utilidad radica en que ofrece a las organizaciones una visión clara sobre quién es su cliente, cómo actúa, qué espera y qué valor percibe en los productos o servicios ofrecidos. Esta comprensión estratégica es clave para diseñar acciones comerciales más precisas, eficientes y rentables.
          .tarjeta.color-secundario-20.p-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10.order-2.order-lg-1.mb-0
                p.mb-0 En la práctica, el cliente no solo es el punto de partida de toda acción de mercadeo, sino también el objetivo final de cualquier esfuerzo empresarial. Cada idea, cada canal de distribución, cada promoción y cada innovación debe responder a una necesidad real del cliente. Sin embargo, asumir que todos los consumidores son iguales sería un error estratégico. La diversidad de perfiles obliga a profundizar en el conocimiento del cliente más allá de lo superficial, y es allí donde la perfilación cobra relevancia.
              .col-4.col-lg-2.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_2/img_12.png', class="img-fluid")
    
      p.mb-5 La perfilación del cliente, parte del análisis de cuatro grandes dimensiones:

    .bg_img_2.mb-5
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-4
            h5.mb-3 Demográficas 
            p.mb-1 Esta dimensión abarca variables como edad, género, ingresos, nivel educativo u ocupación. Aunque es una de las formas más tradicionales de segmentar, sigue siendo fundamental, ya que permite identificar patrones de consumo asociados a etapas de vida, nivel adquisitivo y rol en la sociedad. Por ejemplo, un joven profesional con alto nivel educativo y buen salario probablemente tendrá intereses y comportamientos distintos a los de una persona jubilada en zona rural. 
            p.mb-3 (Kotler & Keller, 2016).
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_14.png')

        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-4
            h5.mb-3 Geográficas 
            p.mb-3 El lugar donde vive o se mueve el cliente influye directamente en sus decisiones de compra. La urbanización, la cultura local, el clima y la accesibilidad a productos y servicios modifican el comportamiento del consumidor. Un cliente urbano tendrá más exposición a nuevas tecnologías, mientras que uno rural priorizará la funcionalidad y durabilidad de los productos.
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_15.png', class="img-fluid")

        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-4
            h5.mb-3 Psicográficas 
            p.mb-1 Esta categoría profundiza en los aspectos subjetivos del consumidor: estilo de vida, valores, intereses, creencias y personalidad. Identificar estas variables permite diseñar estrategias que conecten emocionalmente con el cliente. Por ejemplo, una marca que promueve la sostenibilidad ambiental se alinea con clientes que valoran el consumo responsable, como ocurre con marcas como Patagonia. 
            p.mb-3 (Armstrong & Kotler, 2017).

          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_16.png', class="img-fluid")

        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-4
            h5.mb-3 Conductuales 
            p.mb-1 Analiza el comportamiento del cliente frente al producto o servicio: qué lo motiva a comprar, cómo usa el producto, si lo recomienda, y qué nivel de fidelidad mantiene. Esta dimensión es clave para determinar la efectividad de las estrategias de retención y recompra. Por ejemplo, los clientes recurrentes de Amazon valoran la eficiencia, mientras que otros consumidores son sensibles al precio y a las promociones constantes. 
            p.mb-3 (Churchill & Iacobucci, 2010).
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_17.png', class="img-fluid")
    
    <br><br>
    .bg_img_4.mb-5
      .row.justify-content-center.align-items-center.mb-5.mt-5
        .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-2
          .titulo-sexto.color-acento-contenido
            h5 Figura 3.
            |  Dimensiones en la perfilación de clientes
          figure
            img(src="@/assets/curso/temas/tema_2/img_18.svg", class="img-fluid d-none d-lg-block img100 mb-3" alt="La figura 3 muestra los aspectos que las empresas deben tener en cuenta para perfilar un cliente; esto es importante para el diseño de las estrategias de mercadeo. Texto de la imagen: Demográficas: edad, género, ingresos. Geográficas: lugar de residencia. Psicográficas: estilo de vida y valores. Conductuales: hábitos de compra y lealtad.")
            img(src="@/assets/curso/temas/tema_2/img_19.svg", class="img-fluid d-block d-lg-none img100 mb-3" alt="La figura 3 muestra los aspectos que las empresas deben tener en cuenta para perfilar un cliente; esto es importante para el diseño de las estrategias de mercadeo. Texto de la imagen: Demográficas: edad, género, ingresos. Geográficas: lugar de residencia. Psicográficas: estilo de vida y valores. Conductuales: hábitos de compra y lealtad.")
          figcaption 
            p <b>Fuente:</b> SENA 2025.  

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10 
          .cajon.color-terciario-20.p-4.mb-0(data-aos="fade-left")
            p.mb-2 En resumen, la perfilación del cliente permite crear estrategias de mercadeo más personalizadas y efectivas, optimizando los recursos y mejorando la experiencia de compra. Por ejemplo, el perfil del cliente típico de Zara incluye personas que buscan moda accesible, con diseño actual y disponibilidad inmediata. Este conocimiento permite a la marca ofrecer colecciones dinámicas, renovar el inventario frecuentemente y mantener una relación estrecha con su público objetivo (Armstrong & Kotler, 2017).

      separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_2_4.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.4 Segmentos 
        .mb-0 

    .bloque-texto-g.bloque-texto-g.color-adicional-2.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_20.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La segmentación de clientes es una herramienta esencial en <em>marketing</em>, que implica descomponer un mercado amplio y variado en segmentos más pequeños y homogéneos, cuyos integrantes comparten atributos, necesidades y comportamientos comunes, lo que permite una aproximación más precisa y efectiva a cada grupo. Al identificar estos segmentos, las empresas pueden desarrollar enfoques más precisos y personalizados que incrementen la efectividad de sus campañas y el rendimiento de sus productos o servicios.

    h3(data-aos='zoom-in-right').mb-4
      span.label-title.label-title--3 Criterios para la segmentación de clientes
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-12.mb-2
        p.mb-0 A continuación, una tabla que ilustra cómo se puede segmentar un mercado utilizando varias dimensiones:
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mb-4
        .titulo-sexto.color-tabla
            h5 Tabla 2. 
            |  Segmentación de clientes
        .tabla-a.mb-5
          table
            caption
              p <b>Fuente:</b> adaptada de Kotler, P., & Keller, K. L.,2016.
            thead
              tr
                th Segmento
                th Demografía
                th Psicografía
                th Geografía
                th Conducta de Compra
            tbody
              tr
                td.h5 Jóvenes adultos.
                td Edad: 18 - 30 años, solteros.
                td Estilo de vida activo, valoran la tecnología.
                td Zonas urbanas.
                td Compradores frecuentes de tecnología.
              tr.bg-table-01
                td.h5 Familias.
                td Edad: 30 - 45 años, casados.
                td Buscan estabilidad y comodidad familiar.
                td Zonas suburbanas y rurales.
                td Compradores regulares de productos para el hogar.
              tr
                td.h5 Lujosos.
                td Edad: 35 - 55 años, ingresos altos.
                td Estilo de vida exclusivo, aprecian el lujo.
                td Ciudades grandes.
                td Compradores esporádicos de productos de alta gama.
              tr.bg-table-01
                td.h5 Ecológicos.
                td Edad: 25 - 40 años, solteros.
                td Preocupación por el medio ambiente. 
                td Áreas con conciencia ecológica.
                td Compradores frecuentes de productos orgánicos.
             

    h3(data-aos='zoom-in-right').mb-4
      span.label-title.label-title--1 Importancia de la Segmentación

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema_2/img_23.png", class="img-fluid")
      .col-12.col-lg-8
        p.mb-2(data-aos="fade-left") La segmentación facilita a las empresas identificar a sus clientes clave, mientras adaptan sus ofertas y estrategias comunicacionales para satisfacer de manera más precisa las necesidades y deseos específicos de cada segmento. Esto aumenta la relevancia de las campañas, mejora la eficiencia de los recursos y fomenta una relación más estrecha con los consumidores. 
          .tarjeta.color-secundario-20.p-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10.order-2.order-lg-1.mb-0
                p.mb-0 <b>Ejemplo en la práctica:</b> una marca de ropa deportiva podría crear una línea de productos especialmente diseñada para mujeres jóvenes urbanas interesadas en el fitness (segmentación psicográfica) y otra línea orientada a consumidores rurales que buscan ropa funcional para actividades al aire libre (segmentación geográfica). Así, la empresa ofrece productos que se alinean más directamente con las necesidades de cada grupo.
              .col-4.col-lg-2.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_2/img_24.svg', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12.mb-3
        p.mb-3 La segmentación de clientes es una herramienta poderosa que permite a las empresas entender mejor a su público objetivo y ofrecer productos o servicios de manera más eficaz. Al descomponer un mercado vasto en grupos más definidos y similares, las empresas tienen la oportunidad de afinar sus estrategias de <em>marketing</em>, ofreciendo respuestas más específicas que no solo mejoran la experiencia del cliente, sino que también amplifican las posibilidades de expansión y generación de ingresos.

    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_2_5.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.5 Características comportamentales
        .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12.mb-3
        p.mb-3 Son las actitudes, percepciones, emociones y acciones que los clientes manifiestan durante su proceso de compra y su interacción con los productos, el entorno y las estrategias comerciales del punto de venta. Este comportamiento no es aleatorio, sino el resultado de la influencia de factores internos como la personalidad, las motivaciones, los valores, las expectativas y las experiencias previas; y factores externos, entre los que destacan el entorno físico del establecimiento, la disposición del producto, la atención recibida, las tendencias sociales y el contexto económico.
        p.mb-3 Entre las principales características tenemos:
    .bg_img_8.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-4.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_2/img_25.png', class="img-fluid")
        .col-12.col-lg-8.mb-0
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-12 col-md-12 col-lg-6")
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--1
                  .tarjeta--slider__title.mb-3.text-center.fw-bold Percepción visual
                  .tarjeta--slider__content.text-center La disposición del producto, la iluminación, los colores y la señalización influyen en cómo el cliente interpreta el espacio y decide recorrerlo.
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--2
                  .tarjeta--slider__title.mb-3.text-center.fw-bold Actitudes y hábitos de consumo
                  .tarjeta--slider__content.text-center Cada cliente desarrolla patrones de compra que responden a su estilo de vida, experiencias previas y nivel de fidelidad hacia la marca.
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--3
                  .tarjeta--slider__title.mb-3.text-center.fw-bold Tiempo de permanencia y recorrido
                  .tarjeta--slider__content.text-center El comportamiento del consumidor dentro del punto de venta depende de su disponibilidad de tiempo y del atractivo que le genere la exhibición.
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--4
                  .tarjeta--slider__title.mb-3.text-center.fw-bold Factores sociales y culturales
                  .tarjeta--slider__content.text-center las referencias de grupo, la cultura de consumo y las tendencias sociales condicionan la decisión final.
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--5
                  .tarjeta--slider__title.mb-3.text-center.fw-bold Respuesta emocional
                  .tarjeta--slider__content.text-center Los estímulos sensoriales, como música, aroma o ambientación; influyen en la conexión emocional que el cliente desarrolla con el espacio y los productos.
</template>

<script>
export default {
  name: 'Tema2',
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
