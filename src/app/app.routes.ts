import { Routes } from '@angular/router';

import { MainLayout } from './core/layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/pages/home-page/home-page').then(
            (m) => m.HomePage
          ),
      },
      {
        path: 'proyectos',
        loadComponent: () =>
          import('./features/projects/pages/projects-page/projects-page').then(
            (m) => m.ProjectsPage
          ),
      },
      {
        path: 'proyectos/:slug',
        loadComponent: () =>
          import(
            './features/projects/pages/project-detail-page/project-detail-page'
          ).then((m) => m.ProjectDetailPage),
      },
      {
        path: 'categorias',
        loadComponent: () =>
          import(
            './features/categories/pages/categories-page/categories-page'
          ).then((m) => m.CategoriesPage),
      },
      {
        path: 'como-pedir',
        loadComponent: () =>
          import(
            './features/how-to-order/pages/how-to-order-page/how-to-order-page'
          ).then((m) => m.HowToOrderPage),
      },
      {
        path: 'sobre-mi',
        loadComponent: () =>
          import('./features/about/pages/about-page/about-page').then(
            (m) => m.AboutPage
          ),
      },
      {
        path: 'contacto',
        loadComponent: () =>
          import('./features/contact/pages/contact-page/contact-page').then(
            (m) => m.ContactPage
          ),
      },
      {
        path: '**',
        loadComponent: () =>
          import(
            './features/not-found/pages/not-found-page/not-found-page'
          ).then((m) => m.NotFoundPage),
      },
    ],
  },
];