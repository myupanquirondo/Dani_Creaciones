import { Project } from '../models/project.model';

export const PROJECTS: readonly Project[] = [
  {
    id: 1,
    slug: 'maleta-viajera-educativa',
    title: 'Maleta viajera educativa',
    description:
      'Proyecto educativo elaborado de forma creativa para presentar información de manera visual, ordenada e interactiva.',
    category: 'Manualidades',
    price: 'Desde S/ 45',
    estimatedTime: '3 a 5 días',
    materials: [
      'Cartón',
      'Cartulina',
      'Papel impreso',
      'Goma EVA',
      'Elementos decorativos',
    ],
    customization:
      'Se puede personalizar la temática, los colores, el contenido y los elementos decorativos.',
    images: [],
    featured: true,
  },
  {
    id: 2,
    slug: 'lapbook-mar-peruano',
    title: 'Lapbook del Mar Peruano',
    description:
      'Lapbook educativo sobre el Mar Peruano, diseñado para organizar y presentar información mediante elementos desplegables e interactivos.',
    category: 'Manualidades',
    price: 'Desde S/ 40',
    estimatedTime: '2 a 4 días',
    materials: [
      'Cartulina',
      'Papel impreso',
      'Papel de colores',
      'Goma EVA',
      'Elementos decorativos',
    ],
    customization:
      'El contenido, los colores, las imágenes y la temática pueden adaptarse según el trabajo solicitado.',
    images: [],
    featured: true,
  },
  {
    id: 3,
    slug: 'material-didactico-el-verbo',
    title: 'Material didáctico: El verbo',
    description:
      'Material didáctico interactivo diseñado para explicar el tema del verbo de una forma visual, creativa y fácil de comprender.',
    category: 'Manualidades',
    price: 'Desde S/ 30',
    estimatedTime: '2 a 3 días',
    materials: [
      'Cartulina',
      'Papel de colores',
      'Papel impreso',
      'Material decorativo',
    ],
    customization:
      'Se puede adaptar el contenido, los colores, el tamaño y la presentación al tema solicitado.',
    images: [],
    featured: true,
  },
  {
    id: 4,
    slug: 'maqueta-milagros-de-jesus',
    title: 'Maqueta: Los milagros de Jesús',
    description:
      'Maqueta educativa dividida en diferentes secciones para representar de manera visual algunos de los milagros de Jesús.',
    category: 'Maquetas',
    price: 'Desde S/ 60',
    estimatedTime: '4 a 6 días',
    materials: [
      'Cartón',
      'Cartulina',
      'Goma EVA',
      'Papel impreso',
      'Elementos decorativos',
    ],
    customization:
      'Se pueden personalizar las escenas, los colores, el contenido, el tamaño y los detalles de la maqueta.',
    images: [],
    featured: true,
  },
];