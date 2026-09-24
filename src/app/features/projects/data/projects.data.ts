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
];
