import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { PROJECTS } from '../../data/projects.data';
import { CONTACT_INFO } from '../../../../core/constants/contact.constants';

@Component({
  selector: 'app-project-detail-page',
  imports: [],
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

  readonly currentImageIndex = signal(0);

  readonly project = computed(() => {
    const slug = this.slug();

    if (!slug) {
      return undefined;
    }

    return PROJECTS.find((project) => project.slug === slug);
  });

  readonly currentImage = computed(() => {
    const project = this.project();

    if (!project || project.images.length === 0) {
      return project?.coverImage;
    }

    return project.images[this.currentImageIndex()];
  });

  previousImage(): void {
    const project = this.project();

    if (!project || project.images.length <= 1) {
      return;
    }

    const previousIndex =
      this.currentImageIndex() === 0
        ? project.images.length - 1
        : this.currentImageIndex() - 1;

    this.currentImageIndex.set(previousIndex);
  }

  nextImage(): void {
    const project = this.project();

    if (!project || project.images.length <= 1) {
      return;
    }

    const nextIndex =
      (this.currentImageIndex() + 1) % project.images.length;

    this.currentImageIndex.set(nextIndex);
  }

  selectImage(index: number): void {
    this.currentImageIndex.set(index);
  }

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
