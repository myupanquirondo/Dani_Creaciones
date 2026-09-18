import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { PROJECTS } from '../../data/projects.data';
import { ProjectGallery } from '../../components/project-gallery/project-gallery';
import { CONTACT_INFO } from '../../../../core/constants/contact.constants';

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

  readonly whatsappUrl = computed(() => {
    const project = this.project();

    if (!project || !CONTACT_INFO.whatsappUrl) {
      return '';
    }

    const message =
      `Hola, quisiera cotizar el proyecto "${project.title}". ` +
      `¿Podrían brindarme más información?`;

    return `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
  });
}