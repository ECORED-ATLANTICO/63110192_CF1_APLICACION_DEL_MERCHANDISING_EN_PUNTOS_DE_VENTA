export default {
  global: {
    Name: 'Principios del <em>merchandising</em>',
    Description:
      'Este componente brinda al aprendiz los fundamentos teóricos y prácticos del <em>merchandising</em>, enfocados en la aplicación de elementos visuales y sensoriales en el punto de venta. Se abordan principios, tipos y objetivos del <em>merchandising</em> para optimizar la presentación de productos según el comportamiento del cliente y las estrategias comerciales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Producto y servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipologías',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Perfil',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Segmentos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Características comportamentales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '<em>Merchandising</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Evolución',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Principios',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tipos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Objetivos',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Beneficios',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '<em>Merchandising</em> visual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: '<em>Layout</em>',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Mobiliario',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Vitrinismo',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Ambientación',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Señalización y rotulación',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Iluminación',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Color',
            hash: 't_4_7',
          },
          {
            numero: '4.8',
            titulo: 'Música ambiental',
            hash: 't_4_8',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Producto y servicio',
      referencia:
        'lepatru007. (2022, 26 agosto). <em>Qué es un producto: Características, tipos, propósitos, beneficios</em> [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ls8xm2fys7I',
    },
    {
      tema: 'Cliente',
      referencia:
        '<em>Marketing Trainee</em>. (2021, 24 junio). <em>¿QUÉ ES un servicio? Tipos de servicios, características</em> [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PsAhMpLZinM',
    },
    {
      tema: '<em>Merchandising</em>',
      referencia:
        'López, B. (2017). <em>¿Qué es el Merchandising? Todo lo que tienes que saber</em> [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Am6_RilX9xk',
    },
    {
      tema: '<em>Merchandising visual</em>',
      referencia:
        'Educativos Digitales SENA. (2021). <em>Visual merchandising</em> [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6kYW3aYKamI',
    },
    {
      tema: '<em>Merchandising</em> visual',
      referencia:
        'Editorial GG. (s.f.) (2016). <em>Visual merchandising</em> [PDF]. Editorial Gustavo Gili.',
      tipo: 'Libro',
      link:
        'https://editorialgg.com/media/catalog/product/9/7/9788425228681_inside.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ambientación',
      significado:
        'Conjunto de elementos sensoriales como aroma, temperatura, decoración y música que crean una atmósfera específica en el punto de venta.',
    },
    {
      termino: 'Cliente',
      significado:
        'Persona u organización que adquiere productos o servicios y es el centro de las estrategias comerciales y de merchandising.',
    },
    {
      termino: 'Color',
      significado:
        'Elemento visual que influye en las emociones del consumidor y refuerza la identidad de marca en el punto de venta.',
    },
    {
      termino: 'Distribución (<em>layout</em>)',
      significado:
        'Organización del espacio físico del punto de venta para facilitar el recorrido del cliente y optimizar la exhibición de productos.',
    },
    {
      termino: 'Experiencia de compra',
      significado:
        'Conjunto de sensaciones, percepciones y emociones que vive el cliente durante su interacción con el punto de venta.',
    },
    {
      termino: 'Fidelización',
      significado:
        'Estrategia orientada a lograr que el cliente repita su compra y mantenga una relación constante con la marca o el negocio.',
    },
    {
      termino: 'Iluminación',
      significado:
        'Uso estratégico de la luz para destacar productos, crear ambientes y guiar al consumidor dentro del establecimiento.',
    },
    {
      termino: 'Marca',
      significado:
        'Nombre, símbolo o diseño que identifica un producto o servicio y lo diferencia de la competencia.',
    },
    {
      termino: '<em>Merchandising</em>',
      significado:
        'Conjunto de técnicas que buscan aumentar la venta de productos a través de su presentación estratégica en el punto de venta.',
    },
    {
      termino: '<em>Merchandising</em> visual',
      significado:
        'Aplicación de elementos visuales y sensoriales en el punto de venta para atraer y motivar al cliente a comprar.',
    },
    {
      termino: 'Mobiliario',
      significado:
        'Equipamiento físico como estanterías, vitrinas o góndolas utilizado para exhibir productos en el establecimiento.',
    },
    {
      termino: 'Música ambiental',
      significado:
        'Sonido de fondo utilizado para mejorar la experiencia del cliente, reforzar el ambiente y prolongar el tiempo de permanencia.',
    },
    {
      termino: 'Perfil del cliente',
      significado:
        'Conjunto de características demográficas, psicográficas y conductuales que describen a un tipo de consumidor.',
    },
    {
      termino: 'Producto',
      significado:
        'Bien tangible que se ofrece en el mercado para satisfacer necesidades o deseos del cliente.',
    },
    {
      termino: 'Promoción',
      significado:
        'Acciones y estrategias que buscan incentivar la compra mediante descuentos, ofertas o estímulos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Editorial .GG. (s.f.). <em>Visual merchandising (2016)</em>. Editorial Gustavo Gili.',
      link:
        'https://editorialgg.com/media/catalog/product/9/7/9788425228681_inside.pdf',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2021). <em>Fundamentos de marketing (14.ª ed.)</em>. Pearson.',
      link:
        'https://tigubarcelos.wordpress.com/wp-content/uploads/2019/03/fundamentos-de-marketing-ld267.pdf',
    },
    {
      referencia:
        'Martínez, D. (s.f.). Merchandising (2017). <em>Fundación Universitaria del Área Andina.</em>',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/1370/Merchandising.pdf',
    },
    {
      referencia:
        'Martínez Cruz, H. (s.f.). <em>El arte de seducir: Merchandising (1.ª ed.).</em> ECOE Ediciones.',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2018/01/El-arte-de-seducir-1.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
