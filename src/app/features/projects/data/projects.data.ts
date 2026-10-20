import { Project } from '../models/project.model';

export const PROJECTS: readonly Project[] = [
  {
    id: 1,
    slug: 'nucleo-del-sujeto',
    title: 'El núcleo del sujeto',
    description:
      'Material didáctico elaborado de forma creativa para explicar qué es el núcleo del sujeto, cómo identificarlo y comprenderlo mediante ejemplos visuales.',
    category: 'Manualidades',
    price: 'Desde S/ 30',
    estimatedTime: '2 a 3 días',
    materials: [
      'Cartulina',
      'Papel de colores',
      'Papel impreso',
      'Lana',
      'Elementos decorativos',
    ],
    customization:
      'Se pueden personalizar los colores, el contenido, el tamaño y la temática según el trabajo solicitado.',
    coverImage:
      '/images/projects/nucleo-del-sujeto/nucleo-del-sujeto-portada.webp',
    images: [
      '/images/projects/nucleo-del-sujeto/nucleo-del-sujeto-portada.webp',
      '/images/projects/nucleo-del-sujeto/nucleo-del-sujeto-abierto.webp',
    ],
    featured: true,
  },

  {
    id: 2,
    slug: 'el-antonimo',
    title: 'El Antónimo',
    description:
      'Material didáctico desplegable elaborado para explicar qué son los antónimos mediante definiciones, ejemplos y recursos visuales que facilitan su comprensión.',
    category: 'Manualidades',
    price: 'Desde S/ 30',
    estimatedTime: '2 a 3 días',
    materials: [
      'Cartulina',
      'Papel de colores',
      'Papel impreso',
      'Lana',
      'Elementos decorativos',
    ],
    customization:
      'Se pueden personalizar los colores, ejemplos, contenido, tamaño y decoración de acuerdo con el tema solicitado.',
    coverImage:
      '/images/projects/antonimo/el-antonimo-portada.webp',
    images: [
      '/images/projects/antonimo/el-antonimo-portada.webp',
      '/images/projects/antonimo/el-antonimo-abierto.webp',
    ],
    featured: true,
  },

  {
    id: 3,
    slug: 'mar-peruano',
    title: 'Mar Peruano',
    description:
      'Trabajo escolar desplegable sobre el Mar Peruano que presenta de manera visual información sobre su ubicación, fauna, flora, actividad económica y gastronomía.',
    category: 'Trípticos',
    price: 'Desde S/ 35',
    estimatedTime: '2 a 3 días',
    materials: [
      'Cartulina',
      'Papel de colores',
      'Papel impreso',
      'Papel decorativo',
      'Elementos tridimensionales',
    ],
    customization:
      'El contenido, los colores, las imágenes, las secciones y el tamaño pueden adaptarse según el tema y los requisitos del trabajo.',
    coverImage:
      '/images/projects/mar-peruano/mar-peruano.webp',
    images: [
      '/images/projects/mar-peruano/mar-peruano.webp',
    ],
    featured: true,
  },

  {
    id: 4,
    slug: 'milagros-de-jesus',
    title: 'Los milagros de Jesús',
    description:
      'Maqueta educativa tridimensional que representa diferentes milagros de Jesús mediante escenas, personajes y elementos visuales distribuidos alrededor de la estructura.',
    category: 'Maquetas',
    price: 'Desde S/ 45',
    estimatedTime: '3 a 4 días',
    materials: [
      'Tecnopor',
      'Cartulina',
      'Papel impreso',
      'Foami',
      'Elementos decorativos',
    ],
    customization:
      'Se pueden personalizar las escenas, los milagros representados, los personajes, los colores, el tamaño y los textos según lo solicitado.',
    coverImage:
      '/images/projects/milagros-de-jesus/los-milagros-de-jesus-adelante.webp',
    images: [
      '/images/projects/milagros-de-jesus/los-milagros-de-jesus-adelante.webp',
      '/images/projects/milagros-de-jesus/los-milagros-de-jesus-atras.webp',
    ],
    featured: true,
  },

  {
    id: 5,
    slug: 'reniec',
    title: 'RENIEC',
    description:
      'Material educativo desplegable sobre el RENIEC que explica qué es esta institución, sus principales funciones y su importancia para la identificación y el registro de los ciudadanos.',
    category: 'Manualidades',
    price: 'Desde S/ 35',
    estimatedTime: '2 a 3 días',
    materials: [
      'Cartulina',
      'Papel impreso',
      'Papel de colores',
      'Imágenes educativas',
      'Elementos decorativos',
    ],
    customization:
      'Se pueden modificar los colores, la información, las imágenes, el tamaño y la distribución del contenido según los requisitos del trabajo.',
    coverImage:
      '/images/projects/reniec/reniec.webp',
    images: [
      '/images/projects/reniec/reniec.webp',
    ],
    featured: true,
  },

  {
    id: 6,
    slug: 'tren-bimbo',
    title: 'Tren Bimbo',
    description:
      'Maqueta escolar tridimensional de un tren inspirado en Bimbo, elaborada con materiales reciclables y decorativos. Incluye una locomotora, un vagón de carga y una estructura con productos en miniatura, destacando sus colores y detalles artesanales.',
    category: 'Maquetas',
    price: 'Consultar precio',
    estimatedTime: 'Consultar disponibilidad',
    materials: [
      'Cartón',
      'Cartulina',
      'Papel de colores',
      'Papel corrugado',
      'Imágenes impresas',
      'Pintura',
      'Elementos decorativos',
    ],
    customization:
      'Se pueden personalizar los colores, el tamaño, los diseños y los elementos decorativos según los requisitos del proyecto solicitado.',
    coverImage:
      '/images/projects/tren-bimbo/tren_bimbo_frontal.webp',
    images: [
      '/images/projects/tren-bimbo/tren_bimbo_frontal.webp',
      '/images/projects/tren-bimbo/tren_bimbo_decostado.webp',
    ],
    featured: true,
  },
  {
    id: 7,
    slug: 'caja-sorpresa',
    title: 'Caja Sorpresa',
    description:
      'Caja sorpresa artesanal elaborada con cartón y decorada con signos de interrogación de diferentes colores. Presenta un diseño creativo y llamativo, ideal para actividades escolares, dinámicas educativas y juegos de preguntas.',
    category: 'Manualidades',
    price: 'Consultar precio',
    estimatedTime: 'Consultar disponibilidad',
    materials: [
      'Cartón',
      'Cartulina negra',
      'Papel de colores',
      'Elementos decorativos',
    ],
    customization:
      'Se pueden personalizar los colores, el tamaño, las figuras decorativas y la temática de la caja según las necesidades del cliente.',
    coverImage:
      '/images/projects/caja-sorpresa/caja_sorpresa_frontal.webp',
    images: [
      '/images/projects/caja-sorpresa/caja_sorpresa_frontal.webp',
      '/images/projects/caja-sorpresa/caja_sorpresa_perspectiva.webp',
    ],
    featured: true,
  },
  {
    id: 8,
    slug: 'album-de-las-celulas',
    title: 'Álbum de las células',
    description:
      'Álbum escolar elaborado de manera creativa para presentar información sobre las células mediante ilustraciones, contenidos educativos y elementos decorativos. Cuenta con una portada personalizada y diferentes secciones para facilitar el aprendizaje.',
    category: 'Manualidades',
    price: 'Consultar precio',
    estimatedTime: 'Consultar disponibilidad',
    materials: [
      'Cartón',
      'Cartulina',
      'Papel de colores',
      'Papel impreso',
      'Cinta decorativa',
      'Elementos decorativos',
    ],
    customization:
      'Se pueden personalizar la portada, los colores, las ilustraciones, el contenido, la cantidad de páginas y el tamaño del álbum según los requisitos del trabajo.',
    coverImage:
      '/images/projects/album-celulas/album_celulas_portada.webp',
    images: [
      '/images/projects/album-celulas/album_celulas_portada.webp',
      '/images/projects/album-celulas/album_celulas_indice.webp',
      '/images/projects/album-celulas/album_celulas_neurona.webp',
      '/images/projects/album-celulas/album_celulas_abierto.webp',
    ],
    featured: true,
  },
  {
    id: 9,
    slug: 'album-de-las-its',
    title: 'Álbum de las ITS',
    description:
      'Álbum educativo personalizado sobre las infecciones de transmisión sexual (ITS), elaborado con una portada decorativa y páginas informativas sobre el VIH, la sífilis y otros contenidos relacionados con la educación para la salud.',
    category: 'Manualidades',
    price: 'Consultar precio',
    estimatedTime: 'Consultar disponibilidad',
    materials: [
      'Cartón',
      'Cartulina',
      'Papel decorativo',
      'Papel impreso',
      'Anillos metálicos',
      'Cintas y lazos',
      'Elementos decorativos',
    ],
    customization:
      'Se pueden personalizar los colores, la portada, el contenido educativo, las ilustraciones, la cantidad de páginas y el tamaño del álbum según los requisitos del trabajo.',
    coverImage:
      '/images/projects/album-its/album_its_portada.webp',
    images: [
      '/images/projects/album-its/album_its_portada.webp',
      '/images/projects/album-its/album_its_datos.webp',
      '/images/projects/album-its/album_its_vih_1.webp',
      '/images/projects/album-its/album_its_vih_2.webp',
      '/images/projects/album-its/album_its_sifilis.webp',
    ],
    featured: true,
  },
  {
    id: 10,
    slug: 'celular-maqueta',
    title: 'Maqueta de celular gigante',
    description:
      'Maqueta tridimensional de un celular gigante elaborada artesanalmente con cartón y materiales decorativos. Presenta un diseño inspirado en un teléfono inteligente, con pantalla frontal, botones y detalles de cámara en la parte posterior.',
    category: 'Maquetas',
    price: 'Consultar precio',
    estimatedTime: 'Consultar disponibilidad',
    materials: [
      'Cartón',
      'Cartulina negra',
      'Papel de colores',
      'Pintura',
      'Pegamento',
      'Elementos decorativos',
    ],
    customization:
      'Se pueden personalizar el tamaño, los colores, el diseño de la pantalla, la marca y los detalles exteriores según los requisitos del trabajo.',
    coverImage:
      '/images/projects/celular-maqueta/celular_maqueta_frontal.webp',
    images: [
      '/images/projects/celular-maqueta/celular_maqueta_frontal.webp',
      '/images/projects/celular-maqueta/celular_maqueta_posterior.webp',
    ],
    featured: true,
  },
  {
    id: 11,
    slug: 'capitulos-motivacion',
    title: 'Papelotes educativos sobre la motivación',
    description:
      'Colección de nueve papelotes educativos elaborados a mano sobre los capítulos 1 al 9 de un trabajo relacionado con la motivación. Cada capítulo presenta información organizada, ilustraciones y elementos decorativos que facilitan la comprensión del tema.',
    category: 'Papelotes',
    price: 'Consultar precio',
    estimatedTime: 'Consultar disponibilidad',
    materials: [
      'Papelote',
      'Cartulina',
      'Papel de colores',
      'Imágenes impresas',
      'Plumones',
      'Elementos decorativos',
    ],
    customization:
      'Se pueden personalizar los temas, capítulos, colores, ilustraciones, contenido y decoración según los requisitos del trabajo solicitado.',
    coverImage:
      '/images/projects/capitulos-motivacion/capitulo_1.webp',
    images: [
      '/images/projects/capitulos-motivacion/capitulo_1.webp',
      '/images/projects/capitulos-motivacion/capitulo_2.webp',
      '/images/projects/capitulos-motivacion/capitulo_3.webp',
      '/images/projects/capitulos-motivacion/capitulo_4.webp',
      '/images/projects/capitulos-motivacion/capitulo_5.webp',
      '/images/projects/capitulos-motivacion/capitulo_6.webp',
      '/images/projects/capitulos-motivacion/capitulo_7.webp',
      '/images/projects/capitulos-motivacion/capitulo_8.webp',
      '/images/projects/capitulos-motivacion/capitulo_9.webp',
    ],
    featured: true,
  },
];
