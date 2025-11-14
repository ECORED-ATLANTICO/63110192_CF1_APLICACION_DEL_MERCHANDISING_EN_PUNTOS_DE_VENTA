<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Merchandising</em>
    
    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_3/img_1.png')
      .bloque-texto-t__texto.color-secundario-20.col-10.mb-0
        p.mb-0 El <em>merchandising</em> es una herramienta fundamental del <em>marketing</em> que busca optimizar la presentación de productos en el punto de venta para incentivar la compra. Se trata de una estrategia que articula aspectos visuales, sensoriales, psicológicos y logísticos, con el fin de influir en la decisión de compra del consumidor de forma directa (Martínez, 2017).

    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_3_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.1 Definición 
        .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema_3/img_2.png", class="img-fluid")
      .col-12.col-lg-8 
        .cajon.color-secundario-20.p-4.mb-0(data-aos="fade-left")
          p.mb-0 El <em>merchandising</em> se puede definir como el conjunto de técnicas utilizadas en el punto de venta para presentar productos de manera atractiva, persuasiva y eficiente, con el objetivo de aumentar su rotación y maximizar los beneficios (Kotler & Armstrong, 2021). Incluye acciones como la disposición del mobiliario, la iluminación, la ambientación sonora y el uso de materiales promocionales. Estas acciones están diseñadas para generar una experiencia de compra positiva y memorable que impulse la decisión de compra.
    
    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_3_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.2 Evolución 
        .mb-0 
    p.mb-3 El <em>merchandising</em> ha evolucionado desde una simple organización de productos en estanterías hasta convertirse en una estrategia compleja que integra el comportamiento del consumidor, el <em>neuromarketing</em> y el uso de tecnologías interactivas (Editorial GG, 2016).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/temas/tema_1/img_5.svg")
        h3.titulo-con-imagen__texto Etapas de evolución del &nbsp;<em>merchandising</em>

    .row.justify-content-center.align-items-center.mb-5
        .col-12.col-md-6.col-xl-4.mb-4
          .crd_hover_txt.rounded-3(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_3/img_3.png", class="img-fluid")
            .crd_hover_txt--body.color-terciario-20.p-4
              h5.mb-4.text-center Tradicional
              p.mb-2.text-center  Enfocada en el orden del producto, su visibilidad y accesibilidad. Se basa en la ubicación estratégica dentro del local.
              p.mb-2.text-center  <b>Ejemplo:</b> Estanterías organizadas por categoría y a la altura de los ojos.

        .col-12.col-md-6.col-xl-4.mb-4
          .crd_hover_txt.rounded-3(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_3/img_4.png", class="img-fluid")
            .crd_hover_txt--body.color-terciario-20.p4
              h5.mb-4.text-center Moderno
              p.mb-2.text-center Integra conceptos de <em>marketing</em> visual, diseño de ambientes, y promoción de marca. Inicia la incorporación de tecnología básica.
              p.mb-2.text-center <b>Ejemplo:</b> Mobiliario con diseño atractivo, iluminación dirigida y vitrinas temáticas.

        .col-12.col-md-6.col-xl-4.mb-4
          .crd_hover_txt.rounded-3(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_3/img_5.png", class="img-fluid")
            .crd_hover_txt--body.color-terciario-20.p4
              h5.mb-4.text-center Digital
              p.mb-2.text-center Utiliza tecnologías avanzadas, como realidad aumentada, pantallas digitales, big data y experiencia personalizada.
              p.mb-2.text-center <b>Ejemplo:</b> Kioscos interactivos, apps para escanear productos 

    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_3_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.3 Principios 
        .mb-0 

      p.mb-5 Los principios básicos del <em>merchandising</em> permiten estructurar su aplicación de manera efectiva y asegurar que se cumpla su objetivo estratégico.
    
    .bg_img_2.mb-5
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-5
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-4
            h5.mb-3 Atracción
            p.mb-3 Llamar la atención del cliente desde la entrada o vitrina. Utiliza elementos visuales como colores, movimiento y contraste. Un ejemplo claro de esto es la exhibición de productos destacados en vitrinas iluminadas, que generan un primer impacto visual positivo en el comprador (Editorial GG, 2016). 
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_6.png')

        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-4
            h5.mb-3 Orden  
            p.mb-3 Distribución clara y lógica de los productos. Facilita la navegación del cliente en el punto de venta, guiando su recorrido y mejorando la experiencia de compra. Por ejemplo, se aplica cuando hay zonas bien delimitadas para lácteos, carnicería y vegetales en un supermercado (Martínez, 2017).
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_7.png', class="img-fluid")

        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-4
            h5.mb-3 Renovación 
            p.mb-3 Cambios periódicos en las exhibiciones, promociones y ambientación del espacio comercial. Con ello se evita que el cliente frecuente se aburra o pierda interés. Un ejemplo sería una temática especial para el regreso a clases con exhibidores nuevos y materiales escolares llamativos (Martínez Cruz, s. f.). 
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_8.png', class="img-fluid")

        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-4
            h5.mb-3 Coherencia 
            p.mb-3 Presentación alineada con la identidad de la marca y las expectativas del segmento objetivo. Esto refuerza el mensaje de la empresa y la fidelización del cliente. Por ejemplo, una tienda de productos ecológicos puede utilizar mobiliario elaborado con madera reciclada para comunicar compromiso ambiental (Kotler & Armstrong, 2021). 
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_9.png', class="img-fluid")
        
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-4
            h5.mb-3 Experiencia 
            p.mb-3 Integrar los sentidos del cliente (vista, olfato, tacto y oído) para crear un entorno de compra agradable y memorable. Esto genera emociones positivas y mayor recordación de marca. Un ejemplo efectivo es la reproducción de música suave y el uso de aromas como el pan recién horneado en una panadería (Editorial GG, 2016; Martínez Cruz, s. f.).
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_10.png', class="img-fluid")

    <br><br>
    .row.justify-content-center.align-items-center.mb-5.mt-5
        .col-12.col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mb-2
          .titulo-sexto.color-acento-contenido
            h5 Figura 4.
            |  Principios básicos en la aplicación del <em>merchandising</em>
          .row.justify-content-center.align-items-center.mb-5.mt-5
            .col-12.col-sm-12.col-md-12.col-lg-12.col-xl-12.col-xxl-12.mb-0
              figure
                img(src="@/assets/curso/temas/tema_3/img_11.svg", class="img-fluid d-none d-lg-block img100 mb-3" alt="La figura 4 muestra cuales son los principios básicos para la aplicación del merchandising, los cuales facilitan una aplicación organizada y eficiente, garantizando que las acciones desarrolladas contribuyan al cumplimiento de los objetivos estratégicos establecidos. Texto de la imagen: describe los principios básicos en la aplicación del merchandising: Atracción: captar la atención del cliente mediante elementos visuales como color, forma y movimiento. Orden: organizar los productos de forma clara y lógica para facilitar la circulación del cliente. Renovación: actualizar periódicamente las exhibiciones y ambientes para mantener el interés del comprador. Coherencia: alinear la presentación del punto de venta con la identidad de marca y el público objetivo. Experiencia: involucrar los sentidos del cliente para generar una vivencia de compra agradable y memorable.")
                img(src="@/assets/curso/temas/tema_3/img_12.svg", class="img-fluid d-block d-lg-none img100 mb-3" alt="La figura 4 muestra cuales son los principios básicos para la aplicación del merchandising, los cuales facilitan una aplicación organizada y eficiente, garantizando que las acciones desarrolladas contribuyan al cumplimiento de los objetivos estratégicos establecidos. Texto de la imagen: describe los principios básicos en la aplicación del merchandising: Atracción: captar la atención del cliente mediante elementos visuales como color, forma y movimiento. Orden: organizar los productos de forma clara y lógica para facilitar la circulación del cliente. Renovación: actualizar periódicamente las exhibiciones y ambientes para mantener el interés del comprador. Coherencia: alinear la presentación del punto de venta con la identidad de marca y el público objetivo. Experiencia: involucrar los sentidos del cliente para generar una vivencia de compra agradable y memorable.")
          figcaption 
            p <b>Fuente:</b> SENA 2025. 
    
    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_3_4.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.4 Tipos 
        .mb-0 
    
    .bloque-texto-g.bloque-texto-g.color-adicional-2.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_3/img_13.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los diferentes tipos de <em>merchandising</em> responden a distintas estrategias comerciales según el tipo de producto, el canal de venta y los objetivos del punto de venta. Conocer estas tipologías permite seleccionar y aplicar la más adecuada según las necesidades del negocio, mejorando la experiencia del cliente y optimizando los resultados comerciales. A continuación, se describen los principales tipos de <em>merchandising</em>, sus características y un ejemplo representativo de su aplicación:
    
    .bg_img_5.mb-5
      .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/temas/tema_1/img_5.svg")
        h3.titulo-con-imagen__texto Tipos de &nbsp;<em>merchandising</em>

      .row.justify-content-center.align-items-start.mb-5
        .col-8.col-lg-4.mb-lg-0.mb-3(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/tema_3/img_14.png", class="img-flud")
        .col-12.col-lg-8.mb-5
          .tarjeta.tarjeta--fondo__slider.p-5.mb-0
            SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
              .row.justify-content-center.align-items-center
                .col-12.col-lg-12.mb-0
                  h5.mb-3 Visual
                  p.mb-3 Se enfoca en la estética y el impacto visual de los productos en el punto de venta. Busca atraer al cliente mediante una presentación armónica, ordenada y estratégica.
                  p.mb-3 <b>Ejemplo:</b> Exhibición piramidal de frutas con colores contrastantes, acompañada de buena iluminación.

              .row.justify-content-center.align-items-center
                .col-12.col-lg-12.mb-0
                  h5.mb-3 De seducción
                  p.mb-3 Utiliza estímulos sensoriales como aromas, sonidos y texturas, así como elementos emocionales, para influir en la decisión de compra del cliente.
                  p.mb-3 <b>Ejemplo:</b> ambientación musical suave con aromas agradables en una tienda de ropa de temporada.

              row.justify-content-center.align-items-center
                .col-12.col-lg-12.mb-0
                  h5.mb-3 Digital
                  p.mb-3 Integra tecnología en la experiencia de compra, tanto en tiendas físicas como virtuales, a través de pantallas, códigos QR, <em>apps</em> o realidad aumentada.
                  p.mb-3 <b>Ejemplo:</b> pantallas interactivas que muestran características del producto y recomendaciones personalizadas.

              row.justify-content-center.align-items-center
                .col-12.col-lg-12.mb-0
                  h5.mb-3 De gestión
                  p.mb-3 Orientado a la eficiencia operativa. Se enfoca en el control de inventarios, rotación de productos, y uso de herramientas como planogramas y métricas de rendimiento.
                  p.mb-3 <b>Ejemplo:</b> implementación de planogramas digitales para optimizar la reposición y ubicación de productos.

              row.justify-content-center.align-items-center
                .col-12.col-lg-12.mb-0
                  h5.mb-3 Por categoría
                  p.mb-3 Agrupa los productos según su naturaleza o tipo, facilitando al cliente la comparación, elección y compra dentro de una misma familia de productos.
                  p.mb-3 <b>Ejemplo:</b> estanterías organizadas por categoría como bebidas, cereales y snacks en un supermercado.

      separador

      .row.justify-content-center.align-items-center.mb-0     
        .col-12.col-lg-12
          #t_3_5.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 3.5 Objetivos 
          .mb-0 
    
      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-lg-11.order-2.order-lg-1.mb-3
          p.mb-0 El <em>merchandising</em> es una herramienta estratégica que busca aumentar la rentabilidad del punto de venta mediante la adecuada presentación del producto y el diseño de experiencias atractivas para el consumidor. Su enfoque no solo es visual, sino también sensorial, psicológico y comercial, por lo que sus objetivos deben ser definidos con precisión para generar impacto en los resultados del negocio (Chebat & Morrin, 2007).
        .col-4.col-lg-1.order-1.order-lg-2.mb-lg-0.mb-3
          img(src="@/assets/curso/temas/tema_3/img_15.svg", class="img-fluid")

      .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/temas/tema_1/img_5.svg")
        h3.titulo-con-imagen__texto Objetivos de &nbsp;<em>merchandising</em>

    .bg_img_2.mb-5
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-5
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-4
            h5.mb-3 Incrementar las ventas por impulso
            p.mb-0 Se busca estimular compras no planeadas mediante una disposición estratégica de productos atractivos en zonas de alto tránsito, como cajas o pasillos principales.
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_15.png')

        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-4
            h5.mb-3 Aumentar el tiempo al interior del punto de venta
            p.mb-0 Al prolongar el tiempo de permanencia del cliente, se aumenta la probabilidad de que vea más productos y realice compras adicionales.
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_16.png')
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-4
            h5.mb-3 Mejorar la presentación del producto
            p.mb-0 El uso de exhibiciones limpias, organizadas y atractivas visualmente resalta los beneficios del producto, generando mayor interés y deseo de compra.
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_17.png')
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-4
            h5.mb-3 Facilitar la rotación del inventario
            p.mb-0 Mediante una disposición adecuada y promociones dirigidas, se favorece la venta de productos rezagados o con menor rotación, optimizando el inventario.
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_18.png')
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-4
            h5.mb-3 Reforzar la imagen de marca
            p.mb-0 El refuerzo de la marca y la coherencia visual contribuyen a fortalecer el reconocimiento y la percepción positiva de la marca.
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_19.png')
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0.p-4
            h5.mb-3 Orientar al cliente en su trayectoria en proceso de compra
            p.mb-0 La señalización, distribución del espacio y categorías claras ayudan al cliente a encontrar lo que busca, haciendo más eficiente y satisfactoria su experiencia de compra. 
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_20.png')
      
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-12.col-lg-10 
        .cajon.color-terciario-20.p-4.mb-0(data-aos="fade-left")
          p.mb-2 El logro de estos objetivos está directamente relacionado con una buena planeación y ejecución en el punto de venta, lo cual requiere entender tanto las necesidades del cliente como las posibilidades del entorno físico y digital.
    
    .bg_img_6.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-sm-10.col-md-10.col-lg-10.col-xl-10.col-xxl-10.mb-2
          .titulo-sexto.color-acento-contenido
            h5 Figura 5.
            |  Objetivos del <em>merchandising</em>
          figure
            img(src="@/assets/curso/temas/tema_3/img_21.svg", class="img-fluid d-none d-lg-block img100 mb-3", alt="en la figura se presentan los objetivos mas importantes  del merchansading aplicados a una empresaTexto de la imagen: Se enlistan los objetivos de merchandising entre los cuales tenemos: Incrementar las ventas por impulso. Aumentar el tiempo al interior del punto de venta. Mejorar la presentación del producto. Facilitar la rotación del inventario. Reforzar la imagen de marca. Y orientar al cliente en su trayectoria en proceso de compra.")
            img(src="@/assets/curso/temas/tema_3/img_22.svg", class="img-fluid d-block d-lg-none img100 mb-3", alt="en la figura se presentan los objetivos mas importantes  del merchansading aplicados a una empresaTexto de la imagen: Se enlistan los objetivos de merchandising entre los cuales tenemos: Incrementar las ventas por impulso. Aumentar el tiempo al interior del punto de venta. Mejorar la presentación del producto. Facilitar la rotación del inventario. Reforzar la imagen de marca. Y orientar al cliente en su trayectoria en proceso de compra.")
          figcaption 
            p <b>Fuente:</b> SENA 2025.  


    separador

    .row.justify-content-center.align-items-center.mb-0     
      .col-12.col-lg-12
        #t_3_6.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.6 Beneficios 
        .mb-0 

    p.mb-5 El <em>merchandising</em> va más allá de la presentación visual de productos; es una estrategia que impulsa las ventas, mejora la experiencia del cliente y refuerza la identidad de marca. Su correcta aplicación genera ventajas comerciales sostenibles y diferenciadoras en el punto de venta.

    .bg_img_7.mb-5
      .row.justify-content-center.align-items-center.mb-0     
        .col-12.col-lg-10
          PasosA.color-acento-contenido-20.mb-5(tipo="n")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-8.order-2.order-lg-1.mb-0.text-justify
                h3.mb-3 Mayor rotación del producto
                p.mb-0 El <em>merchandising</em> permite aumentar la rotación de productos al presentarlos de manera llamativa y estratégica. Esto incentiva una mayor frecuencia de compra y evita la acumulación de inventario, lo cual es clave para productos perecederos o de alta rotación. Acciones como promociones semanales o ubicaciones destacadas ayudan a lograr este efecto (Martínez Cruz, s. f.; Editorial GG, 2016).
              .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_23.png', class="img-fluid")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-3.mb-lg-0.mb-3.d-flex
                figure.d-flex.align-items-stretch.w-100.mb-3
                  img(src='@/assets/curso/temas/tema_3/img_24.png', class="img-fluid")
              .col-12.col-lg-9.mb-lg-0.mb-3.text-justify
                h3.mb-3 Fidelización del cliente
                p.mb-0 Una experiencia de compra positiva, construida a través de estímulos visuales, sensoriales y emocionales, genera vínculos con el consumidor. El uso de ambientaciones temáticas, trato personalizado y espacios agradables promueve la recompra y fortalece la lealtad hacia la marca (Martínez Cruz, s. f.).
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-8.order-2.order-lg-1.mb-0.text-justify
                h3.mb-3 Incremento de ventas por impulso
                p.mb-0 El <em>merchandising</em> estimula las compras no planeadas al ubicar productos llamativos en zonas de paso o espera, como las cajas registradoras. Estos estímulos aprovechan momentos estratégicos para incentivar decisiones rápidas de compra, aumentando así el ticket promedio (Editorial GG, 2016).
              .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_25.png', class="img-fluid")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-4.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_26.png', class="img-fluid")
              .col-12.col-lg-8.mb-0.text-justify
                h3.mb-3 Posicionamiento de marca
                p.mb-0 Una presentación coherente con la identidad visual de la empresa (colores, logos, diseño y estilo) refuerza el posicionamiento en la mente del consumidor. La armonía entre la estética del punto de venta y los valores de la marca mejora su reconocimiento y recordación (Martínez Cruz, s. f.).
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-8.order-2.order-lg-1.mb-0.text-justify
                h3.mb-3 Ventaja competitiva
                p.mb-0 El <em>merchandising</em> bien ejecutado se convierte en un diferenciador clave frente a la competencia. Ofrecer experiencias únicas como degustaciones, demostraciones en vivo o ambientaciones inmersivas permite que el cliente perciba un mayor valor y prefiera ese punto de venta (Editorial GG, 2016). 
              .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_27.png', class="img-fluid")
</template>

<script>
export default {
  name: 'Tema3',
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
