import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { PROJECTS } from '../../data/projects.data';
import { ProjectGallery } from '../../components/project-gallery/project-gallery';

@Component({
  selector: 'app-project-detail-page',
  imports: [ProjectGallery],
  templateUrl: './project-detail-page.html',
  styleUrl: './project-detail-page.scss',
})
export class ProjectDetailPage {
  private readonly route = inject(ActivatedRoute);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('slug'))
    ),
    { initialValue: null }
  );

  readonly project = computed(() => {
    const slug = this.slug();

    if (!slug) {
      return undefined;
    }

    return PROJECTS.find((project) => project.slug === slug);
  });
}