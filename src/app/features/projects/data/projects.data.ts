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
      '/images/projects/nucleo-del-sujeto/nucleo-del-sujeto-portada.png',
    images: [
      '/images/projects/nucleo-del-sujeto/nucleo-del-sujeto-portada.png',
      '/images/projects/nucleo-del-sujeto/nucleo-del-sujeto-abierto.png',
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
      '/images/projects/antonimo/el-antonimo-portada.png',
    images: [
      '/images/projects/antonimo/el-antonimo-portada.png',
      '/images/projects/antonimo/el-antonimo-abierto.png',
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
      '/images/projects/mar-peruano/mar-peruano.png',
    images: [
      '/images/projects/mar-peruano/mar-peruano.png',
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
      '/images/projects/milagros-de-jesus/los-milagros-de-jesus-adelante.png',
    images: [
      '/images/projects/milagros-de-jesus/los-milagros-de-jesus-adelante.png',
      '/images/projects/milagros-de-jesus/los-milagros-de-jesus-atras.png',
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
      '/images/projects/reniec/reniec.png',
    images: [
      '/images/projects/reniec/reniec.png',
    ],
    featured: true,
  },
];