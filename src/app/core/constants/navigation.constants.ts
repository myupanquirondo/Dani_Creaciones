export interface NavigationItem {
  readonly label: string;
  readonly route: string;
}

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  {
    label: 'Inicio',
    route: '/',
  },
  {
    label: 'Nuestros trabajos',
    route: '/proyectos',
  },
  {
    label: 'Categorías',
    route: '/categorias',
  },
  {
    label: '¿Cómo pedir?',
    route: '/como-pedir',
  },
  {
    label: 'Sobre mí',
    route: '/sobre-mi',
  },
  {
    label: 'Contacto',
    route: '/contacto',
  },
];