import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';
import { ProjectCard } from '../../components/project-card/project-card';
import { ProjectFilter } from '../../components/project-filter/project-filter';
import { CATEGORIES } from '../../../categories/data/categories.data';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectCard, ProjectFilter, RouterLink],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly projects = signal<readonly Project[]>(PROJECTS);

  // Máximo de proyectos mostrados por página
  readonly projectsPerPage = 16;

  // Página actual
  readonly currentPage = signal(1);

  private readonly categoryFromUrl = toSignal(
    this.route.queryParamMap.pipe(
      map((params) => params.get('categoria'))
    ),
    { initialValue: null }
  );

  readonly categories = computed(() => [
    'Todos',
    ...CATEGORIES.map((category) => category.name),
  ]);

  readonly selectedCategory = computed(() => {
    const categorySlug = this.categoryFromUrl();

    if (!categorySlug) {
      return 'Todos';
    }

    const category = CATEGORIES.find(
      (category) => category.slug === categorySlug
    );

    return category?.name ?? 'Todos';
  });

  // Proyectos filtrados por categoría
  readonly filteredProjects = computed(() => {
    const selectedCategory = this.selectedCategory();

    if (selectedCategory === 'Todos') {
      return this.projects();
    }

    return this.projects().filter(
      (project) => project.category === selectedCategory
    );
  });

  // Cantidad total de páginas
  readonly totalPages = computed(() =>
    Math.ceil(
      this.filteredProjects().length / this.projectsPerPage
    )
  );

  // Array utilizado para mostrar 1, 2, 3, 4...
  readonly pages = computed(() =>
    Array.from(
      { length: this.totalPages() },
      (_, index) => index + 1
    )
  );

  // Solo los proyectos correspondientes a la página actual
  readonly paginatedProjects = computed(() => {
    const start =
      (this.currentPage() - 1) * this.projectsPerPage;

    const end = start + this.projectsPerPage;

    return this.filteredProjects().slice(start, end);
  });

  selectCategory(categoryName: string): void {
    const category =
      categoryName === 'Todos'
        ? undefined
        : CATEGORIES.find(
            (category) => category.name === categoryName
          );

    // Al cambiar de categoría regresamos a la página 1
    this.currentPage.set(1);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        categoria: category?.slug ?? null,
      },
      queryParamsHandling: 'merge',
    });
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages()) {
      return;
    }

    this.currentPage.set(page);
  }

  previousPage(): void {
    this.goToPage(this.currentPage() - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage() + 1);
  }
}