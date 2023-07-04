export default {
  global: {
    componenteFormativo:
      'Identificación de los componentes ambientales de acuerdo al contexto',
    descripcionCurso:
      'En este componente formativo se abordan términos, técnicas y métodos necesarios para el diagnóstico ambiental en una organización. Se incluye la identificación del contexto de la organización, componentes ambientales, evaluación de impacto y riesgos ambientales para priorizar impactos significativos y proponer planes de manejo ambiental.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        titulo: 'Bases conceptuales de medio e impacto ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de componentes ambientales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Área de influencia ambiental y recolección de información',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Bases conceptuales impacto ambiental',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Marco normativo ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Identificación de impactos ambientales por ciclo de vida',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Métodos e instrumentos para la recolección de la información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Diagnóstico ambiental',
        desarrolloContenidos: true,
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
        download: 'downloads/222319_CF01_DU.pdf',
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
      tema: '1. Bases conceptuales de medio e impacto ambiental',
      referencia:
        'National Geographic (2015, Noviembre 26) El impacto ambiental del hombre 2007 (completo) [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jNmkU7CDE80&feature=youtu.be',
    },
    {
      tema: '3. Identificación de impactos ambientales por ciclo de vida',
      referencia:
        'Biblioteca del plástico (2016 junio 7) Análisis de Ciclo de Vida. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MyDHWRwvSzo',
    },
  ],
  glosario: [
    {
      termino: 'Aspecto ambiental',
      significado:
        'elemento de las actividades, productos o servicios de una organización que interactúa o puede interactuar con el medio ambiente. (ISO 14001:2015)',
    },
    {
      termino: 'Ciclo de vida',
      significado:
        'etapas consecutivas e interrelacionadas de un sistema de producto (o servicio), desde la adquisición de materia prima o su generación a partir de recursos naturales hasta la disposición final. (ISO 14001:2015)',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'cambio en el medio ambiente, ya sea adverso o beneficioso como resultado total o parcial de los aspectos ambientales de una organización. (ISO 14001:2015)',
    },
    {
      termino: 'Medio ambiente',
      significado:
        'entorno en el cual una organización opera, incluidos el aire, el agua, el suelo, los recursos naturales, la flora, la fauna, los seres humanos y sus interrelaciones. (ISO 14001:2015)',
    },
    {
      termino: 'Plan de manejo ambiental',
      significado:
        'es un conjunto de acciones y medidas diseñadas para minimizar o prevenir los impactos negativos de una actividad o proyecto en el medio ambiente.',
    },
    {
      termino: 'Prevención de la contaminación',
      significado:
        'utilización de procesos, prácticas, técnicas, materiales, productos, servicios o energía para evitar, reducir o controlar la generación, emisión o descarga de cualquier tipo de contaminante o residuo, con el fin de reducir impactos ambientales adversos. (ISO 14001:2015)',
    },
    {
      termino: 'Proceso',
      significado:
        'conjunto de actividades interrelacionadas o que interactúan, que transforman las entradas en salidas. (ISO 14001:2015)',
    },
  ],
  referencias: [
    {
      referencia:
        'ANDI (2018). <i>Guía para la definición, identificación y delimitación del área de influencia</i>.',
      link:
        'http://www.andi.com.co/Uploads/guia_para_la_definicion_identificacion_y_delimitacion_del_area_de_influencia_0.pdf',
    },
    {
      referencia: 'ANLA (s.f.). <i>Términos de referencia</i>.',
      link:
        'https://www.anla.gov.co/01_anla/normatividad/documentos-estrategicos/terminos-de-referencia',
    },
    {
      referencia:
        'Arboleda, J. A. (2008). <i>Manual de evaluación de impacto ambiental de proyectos, obra o actividades</i>. Medellín, Colombia.',
      link: 'https://doi.org/10.1017/CBO9781107415324.004',
    },
    {
      referencia:
        'Conferencia de las Naciones Unidas sobre Medio Ambiente en Estocolmo. (1972). <i>Declaración de la Conferencia de las Naciones Unidas sobre el Medio Humano. Estocolmo, 5-16 de junio de 1972</i>.',
      link: 'https://daccess-ods.un.org/tmp/9892757.53498077.html',
    },
    {
      referencia:
        'Decreto 2811 de 1974. [Ministerio de Ambiente]. Por el cual se dicta el Código Nacional de Recursos Naturales Renovables y de Protección al Medio Ambiente. Diario Oficial, No. 34.148, de 18 de diciembre de 1974.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/decreto_2811_1974.html',
    },
    {
      referencia:
        'International Organization for Standardization. (2015). Sistema de gestión ambiental – Requisitos con orientación para su uso. NTC-ISO 14001-2015',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible (2017, septiembre 27) Creación del Ministerio de Ambiente y Desarrollo Sostenible. [Archivo de video] Youtube.',
      link: 'https://www.youtube.com/watch?v=cq7vjlAkCIU',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible –Colombia (2019, diciembre 5) Antioquia conmemoró los 25 años del Sistema Nacional Ambiental. [Archivo de video] Youtube.',
      link:
        'https://www.youtube.com/watch?time_continue=31&v=nbfpvNzuYD4&feature=emb_logo',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (s.f.). Normativa',
      link: 'https://www.minambiente.gov.co/normativa/',
    },
    {
      referencia:
        'SENA línea Produccion5 (2014, Julio 10). Recolección de Información. [Archivo de video] Youtube.',
      link: 'https://www.youtube.com/watch?v=u_atFPU0DOY',
    },
    {
      referencia:
        'Senado Colombia (2016, marzo 14) ¿Sabe usted cómo hacen las leyes en Colombia? [Archivo de video] Youtube.',
      link: 'https://www.youtube.com/watch?v=BW0KINqhaZY',
    },
    {
      referencia:
        'UNFCC (1992) <i>Convención Marco de las Naciones Unidas sobre el Cambio Climático; Naciones Unidas, Río de Janeiro</i>.',
      link: 'https://unfccc.int/resource/docs/convkp/convsp.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Triana Guarnizo',
          cargo: 'Instructora',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Juan Carlos Cárdenas Sánchez',
          cargo: 'Instructor',
          centro: 'Regional Distrito - Capital Centro de Gestión Industrial',
        },
        {
          nombre: 'Gloria Esperanza Ortiz Russi',
          cargo: 'Evaluador y diseñador instruccional',
          centro: 'Regional Distrito - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Natalia Andrea Bueno Pizarro',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Bogotá- CENIGRAF',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
