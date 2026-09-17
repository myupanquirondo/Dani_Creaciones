import { Component, computed, signal } from '@angular/core';

import { PROJECTS } from '../../../projects/data/projects.data';
import { Project } from '../../../projects/models/project.model';

@Component({
  selector: 'app-featured-projects',
  imports: [],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})
export class FeaturedProjects {
  private readonly projects = signal<readonly Project[]>(PROJECTS);

  readonly featuredProjects = computed(() =>
    this.projects().filter((project) => project.featured)
  );
}