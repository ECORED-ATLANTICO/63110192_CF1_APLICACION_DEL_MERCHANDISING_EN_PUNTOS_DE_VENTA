<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Producto y servicio
 
    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_1/img_1.png')
      .bloque-texto-t__texto.color-secundario-20.col-10.mb-0
        p.mb-0 Los productos y servicios representan el eje central de toda estrategia comercial. Toda organización, sin importar su tamaño o sector, debe comprender profundamente qué ofrece, cómo lo ofrece y a quién va dirigido. Esta claridad permite desarrollar propuestas de valor efectivas que generen satisfacción y fidelización en el cliente.

    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_1_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.1	Concepto 
        .mb-0 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema_1/img_2.png", class="img-fluid")
      .col-12.col-lg-8
        p.mb-2(data-aos="fade-left") En el ámbito del <em>marketing</em> y la gestión comercial, el término producto hace referencia a cualquier bien tangible que se lanza al mercado con el fin de satisfacer una necesidad, deseo o expectativa del consumidor. Los productos pueden ser físicos, como un televisor, un par de zapatos o un electrodoméstico; pero también incluyen elementos simbólicos como la marca, el empaque o el diseño, que influyen en la decisión de compra del consumidor (Kotler & Armstrong, 2021). Estos elementos tangibles se pueden ver, tocar y almacenar, lo que facilita su evaluación antes de la compra y permite la comparación entre diferentes opciones. 
        .cajon.color-secundario-20.p-4.mb-0(data-aos="fade-left")
          p.mb-0 Por otro lado, los servicios se entienden como actividades, beneficios o satisfacciones que se ofrecen para ser consumidas, pero que no adoptan una forma física. No implican la propiedad de algo, sino la experiencia de un proceso. En este sentido, los servicios son intangibles, inseparables de su fuente, variables según el contexto y perecederos, es decir, no pueden almacenarse ni repetirse exactamente igual (Martínez Cruz, s.&nbsp;f.) Ejemplos cotidianos de servicios incluyen una consulta médica, una asesoría contable o un masaje terapéutico. En todos los casos, el valor está en la atención, la experiencia y el resultado percibido por el cliente.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-11.order-2.order-lg-1.mb-0
        p.mb-0 Desde la perspectiva del punto de venta, tanto los productos como los servicios deben gestionarse estratégicamente a través de herramientas como el <em>merchandising</em> visual, que busca seducir al cliente mediante la organización del espacio, la ambientación sensorial y la presentación adecuada de los elementos de la oferta (Editorial GG, s.&nbsp;f.). Esto cobra aún más relevancia cuando se trata de servicios, donde el entorno influye directamente en la percepción de calidad.
      .col-4.col-lg-1.order-1.order-lg-2.mb-lg-0.mb-3
        img(src="@/assets/curso/temas/tema_1/img_3.svg", class="img-fluid")
   
    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_1_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.2	Tipos 
        .mb-0 

      .bloque-texto-g.bloque-texto-g.color-adicional-2.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_4.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Comprender los distintos tipos de productos y servicios es esencial para diseñar estrategias efectivas de promoción, distribución y atención al cliente. Los productos pueden clasificarse principalmente en productos de consumo y productos industriales, según su finalidad. Los primeros se dirigen al consumidor final y están pensados para un uso cotidiano o personal. Por ejemplo, una prenda de vestir, un alimento o un electrodoméstico. Los productos industriales, por el contrario, están destinados a ser utilizados en la producción de otros bienes o servicios, como maquinaria, herramientas o materias primas.
    
      p.mb-5 Adicionalmente, existe una clasificación según la durabilidad. Los productos duraderos tienen un ciclo de vida prolongado, se utilizan en múltiples ocasiones y suelen requerir una inversión mayor, como sucede con los muebles o los vehículos. Los productos no duraderos, en cambio, son de consumo inmediato o rápido, como los alimentos perecederos o artículos de higiene personal.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-11.order-2.order-lg-1.mb-0
        p.mb-0 Desde la perspectiva del punto de venta, tanto los productos como los servicios deben gestionarse estratégicamente a través de herramientas como el <em>merchandising</em> visual, que busca seducir al cliente mediante la organización del espacio, la ambientación sensorial y la presentación adecuada de los elementos de la oferta (Editorial GG, s.&nbsp;f.). Esto cobra aún más relevancia cuando se trata de servicios, donde el entorno influye directamente en la percepción de calidad.
      .col-4.col-lg-1.order-1.order-lg-2.mb-lg-0.mb-3
        img(src="@/assets/curso/temas/tema_1/img_4_1.svg", class="img-fluid")
    
    h3(data-aos='zoom-in-right').mb-4
      span.label-title.label-title--1 Tipos de productos y servicios

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema_1/img_6.png", class="img-flud")
      .col-12.col-lg-8.mb-5
        .tarjeta.tarjeta--fondo__slider.p-5.mb-0
          SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-3
            .row.justify-content-center.align-items-center
              .col-6.col-lg-2.mb-lg-0.mb-5
                figure
                  img(src='@/assets/curso/temas/tema_1/img_8.svg')
              .col-10.col-lg-8.mb-0
                h5.mb-3 Producto de consumo
                p.mb-3 Bienes que se adquieren para uso personal y cotidiano.
                p.mb-0 <b>Ejemplo:</b> zapatos, jabón, alimentos.
            
            .row.justify-content-center.align-items-center
              .col-6.col-lg-2.mb-lg-0.mb-5
                figure
                  img(src='@/assets/curso/temas/tema_1/img_9.svg')
              .col-10.col-lg-8.mb-0
                h5.mb-3 Producto industrial
                p.mb-3 Bienes utilizados en procesos productivos o comerciales.
                p.mb-3 <b>Ejemplo:</b> maquinaria, herramientas, acero.

            .row.justify-content-center.align-items-center
              .col-6.col-lg-2.mb-lg-0.mb-5
                figure
                  img(src='@/assets/curso/temas/tema_1/img_10.svg')
              .col-10.col-lg-8.mb-0
                h5.mb-3 Producto duradero
                p.mb-3 Bienes de larga vida útil, diseñados para múltiples usos.
                p.mb-3 <b>Ejemplo:</b> lavadora, televisor, muebles.
            
            .row.justify-content-center.align-items-center
              .col-6.col-lg-2.mb-lg-0.mb-5
                figure
                  img(src='@/assets/curso/temas/tema_1/img_11.svg')
              .col-10.col-lg-8.mb-0
                h5.mb-3 Producto no duradero
                p.mb-3 Bienes de consumo rápido o inmediato. 
                p.mb-3 <b>Ejemplo:</b> yogurt, servilletas, bebidas.

            .row.justify-content-center.align-items-center
              .col-6.col-lg-2.mb-lg-0.mb-5
                figure
                  img(src='@/assets/curso/temas/tema_1/img_12.svg')
              .col-10.col-lg-7.mb-
                h5.mb-3 Servicio personal
                p.mb-3 Atenciones orientadas al bienestar individual. 
                p.mb-3 <b>Ejemplo:</b> corte de cabello, manicure.
            
            .row.justify-content-center.align-items-center
              .col-6.col-lg-2.mb-lg-0.mb-5
                figure
                  img(src='@/assets/curso/temas/tema_1/img_13.svg')
              .col-10.col-lg-6.mb-0
                h5.mb-3 Servicio profesional
                p.mb-3 Prestaciones que requieren formación especializada.
                p.mb-3 <b>Ejemplo:</b> auditoría contable, asesoría legal.

            .row.justify-content-center.align-items-center
              .col-6.col-lg-2.mb-lg-0.mb-5
                figure
                  img(src='@/assets/curso/temas/tema_1/img_14.svg')
              .col-10.col-lg-6.mb-0
                h5.mb-3 Servicio público
                p.mb-3 Ofrecidos por el Estado o entidades autorizadas.
                p.mb-3 <b>Ejemplo:</b> transporte público, seguridad social.
            
            .row.justify-content-center.align-items-center
              .col-6.col-lg-2.mb-lg-0.mb-5
                figure
                  img(src='@/assets/curso/temas/tema_1/img_15.svg')
              .col-10.col-lg-6.mb-0
                h5.mb-3 Servicio comercial
                p.mb-3 Servicios prestados por empresas privadas en el ámbito de ventas.
                p.mb-3 <b>Ejemplo:</b> atención al cliente, entregas.

    separador

    .row.justify-content-center.align-items-center.mb-0     
        .col-12.col-lg-12
          #t_1_3.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 1.3	Características 
          .mb-0 
      
    p.mb-5 Los productos y servicios poseen características distintas que influyen directamente en la forma en que deben ser diseñados, promocionados, comercializados y entregados al cliente. A continuación, se describen las principales particularidades que los diferencian y que deben ser consideradas en toda estrategia de mercadeo.
    
    .bg_img_2.mb-5
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-2
            p.mb-3 <b>Tangibilidad e intangibilidad:</b> la tangibilidad es una de las principales ventajas de los productos. Este atributo permite que los bienes sean vistos, tocados, evaluados, medidos y comparados antes de ser adquiridos. Los productos físicos pueden probarse, fotografiarse, almacenarse y transportarse, lo cual facilita su comercialización a través de canales físicos y virtuales.
            p.mb-3 Por el contrario, los servicios son intangibles, lo que significa que no pueden ser percibidos físicamente antes de ser consumidos. El cliente no puede ver ni tocar un servicio de forma directa, lo cual representa un desafío para el <em>marketing</em>, ya que es necesario generar confianza a través de la reputación, la atención, las referencias y los elementos visuales del entorno (Kotler & Armstrong, 2021).
            
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_1/img_17.png')
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-2
            p.mb-3 <b>Producción y consumo:</b> en los productos, el proceso de producción se realiza de manera anticipada a su comercialización. Esto quiere decir que pueden fabricarse en masa, controlarse por estándares de calidad y almacenarse hasta que el cliente los requiera. Esta separación entre producción y consumo permite una mayor planificación operativa y logística.
            p.mb-3 En los servicios, en cambio, se da la inseparabilidad, ya que se producen y consumen de manera simultánea. Por ejemplo, un corte de cabello o una consulta médica solo ocurren cuando el cliente está presente. Esta condición implica que la calidad del servicio está estrechamente relacionada con el momento y el profesional que lo presta.

          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_1/img_18.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            p.mb-3 <b>Homogeneidad y variabilidad:</b> los productos suelen ser homogéneos, especialmente cuando provienen de procesos de producción estandarizados. Esto significa que un mismo modelo de producto tendrá las mismas características técnicas y visuales, garantizando una experiencia uniforme para todos los compradores.
            p.mb-3 En contraste, los servicios presentan una alta variabilidad, ya que su calidad puede depender de múltiples factores: la persona que lo ofrece, el estado de ánimo del cliente, el lugar donde se presta el servicio o incluso las condiciones externas. Esta variación obliga a implementar sistemas de control de calidad, protocolos de atención y capacitación continua del personal (Martínez Cruz, s.&nbsp;f.).
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_1/img_19.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            p.mb-3 <b>Almacenamiento y perecibilidad:</b> los productos se pueden almacenar, es decir, conservar en inventario hasta el momento de su venta. Esta posibilidad permite regular la oferta, planificar campañas promocionales y responder a la demanda sin depender del tiempo real de producción.
            p.mb-3 Por el contrario, los servicios son perecederos, ya que no pueden guardarse ni reproducirse exactamente igual después de haber sido prestados. Un cupo de asesoría no utilizado se pierde, y una hora de consulta no agendada no puede recuperarse. Esta característica exige una gestión eficiente del tiempo, la capacidad y la programación de recursos humanos.
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_1/img_20.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            p.mb-3 <b>Propiedad y experiencia:</b> en la compra de un producto, se transfiere la propiedad del bien al cliente. El consumidor se convierte en dueño del objeto adquirido y puede usarlo, venderlo o desecharlo a su criterio.
            p.mb-3 En cambio, en los servicios no se transfiere propiedad alguna; el cliente accede a una experiencia o resultado durante un tiempo determinado. Por ejemplo, al pagar por una clase, no se obtiene un objeto, sino el conocimiento transmitido. Esta diferencia lleva a las empresas a enfocarse en crear experiencias memorables y valor agregado.
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_1/img_21.png', class="img-fluid")
      
    <br><br>
    .bg_img_1.mb-5
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10.mb-4
          .titulo-sexto.color-tabla
              h5 Tabla 1. 
              |  Características de productos y servicios
          .tabla-a.mb-5
            table
              caption
                p <b>Fuente:</b> adaptada de Kotler y Armstrong, 2021 y Martínez (s.&nbsp;f.), 2016.
              thead
                tr
                  th.col-3 Característica
                  th Productos (bienes tangibles)
                  th Servicios (bienes intangibles)
              tbody
                tr
                  td Tangibilidad
                  td Son visibles, palpables y evaluables antes de la compra.
                  td No pueden tocarse ni evaluarse físicamente antes del uso.
                tr.bg-table-01
                  td Producción
                  td Se producen antes de su consumo y pueden almacenarse.
                  td Se producen y consumen simultáneamente.
                tr
                  td Homogeneidad
                  td Productos iguales mantienen consistencia en calidad y forma.
                  td La calidad puede variar entre prestadores y situaciones.
                tr.bg-table-01
                  td Perecibilidad
                  td Pueden conservarse hasta que el cliente los adquiera.
                  td No pueden guardarse; si no se usan, se pierden.  
                tr
                  td Propiedad
                  td Se transfiere al comprador junto con el bien.
                  td El cliente solo accede a la experiencia o resultado.

        .row.justify-content-center.align-items-center.mb-5
          .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-2
            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              |  Características diferenciales entre productos y servicios
            figure
              img(src="@/assets/curso/temas/tema_1/img_22.svg", class="img-fluid d-none d-lg-block img100 mb-3" alt="La figura 1 muestra las características diferenciales entre los productos y los servicios, y que deben ser tenidas en cuenta para cualquier estrategia de mercadeo. Texto de la imagen: En la figura 1 se muestran las Diferencias entre productos y servicios Tangibilidad Producto: se puede ver y tocar. Servicio: no se puede ver ni tocar. Producción Producto: se fabrica antes y se almacena. Servicio: se produce y consume al mismo tiempo. Homogeneidad Producto: es uniforme. Servicio: varía según quién lo presta. Perecibilidad Producto: se puede guardar. Servicio: no se puede almacenar. Propiedad Producto: el cliente lo posee. Servicio: el cliente solo lo experimenta.")
              img(src="@/assets/curso/temas/tema_1/img_23.svg", class="img-fluid d-block d-lg-none img100 mb-3" alt="La figura 1 muestra las características diferenciales entre los productos y los servicios, y que deben ser tenidas en cuenta para cualquier estrategia de mercadeo. Texto de la imagen: En la figura 1 se muestran las Diferencias entre productos y servicios Tangibilidad Producto: se puede ver y tocar. Servicio: no se puede ver ni tocar. Producción Producto: se fabrica antes y se almacena. Servicio: se produce y consume al mismo tiempo. Homogeneidad Producto: es uniforme. Servicio: varía según quién lo presta. Perecibilidad Producto: se puede guardar. Servicio: no se puede almacenar. Propiedad Producto: el cliente lo posee. Servicio: el cliente solo lo experimenta.")
            figcaption 
              p <b>Fuente:</b> SENA 2025.  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
