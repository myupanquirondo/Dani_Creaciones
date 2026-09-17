import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';
import { ProjectCard } from '../../components/project-card/project-card';
import { ProjectFilter } from '../../components/project-filter/project-filter';
import { SectionTitle } from '../../../../shared/ui/section-title/section-title';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectCard, ProjectFilter, SectionTitle],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly projects = signal<readonly Project[]>(PROJECTS);

  private readonly categoryFromUrl = toSignal(
    this.route.queryParamMap.pipe(
      map((params) => params.get('categoria'))
    ),
    { initialValue: null }
  );

  readonly categories = computed(() => [
    'Todos',
    ...new Set(this.projects().map((project) => project.category)),
  ]);

  readonly selectedCategory = computed(() => {
    const categorySlug = this.categoryFromUrl();

    if (!categorySlug) {
      return 'Todos';
    }

    const category = this.projects().find(
      (project) =>
        this.createSlug(project.category) === categorySlug
    )?.category;

    return category ?? 'Todos';
  });

  readonly filteredProjects = computed(() => {
    const selectedCategory = this.selectedCategory();

    if (selectedCategory === 'Todos') {
      return this.projects();
    }

    return this.projects().filter(
      (project) => project.category === selectedCategory
    );
  });

  selectCategory(category: string): void {
    const categorySlug =
      category === 'Todos' ? null : this.createSlug(category);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        categoria: categorySlug,
      },
      queryParamsHandling: 'merge',
    });
  }

  private createSlug(value: string): string {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-');
  }
}