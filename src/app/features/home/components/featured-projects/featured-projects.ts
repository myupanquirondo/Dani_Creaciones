import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  computed,
  signal,
} from '@angular/core';

import { PROJECTS } from '../../../projects/data/projects.data';
import { Project } from '../../../projects/models/project.model';
import { ProjectCard } from '../../../projects/components/project-card/project-card';

@Component({
  selector: 'app-featured-projects',
  imports: [ProjectCard],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})
export class FeaturedProjects implements AfterViewInit, OnDestroy {
  @ViewChild('carousel')
  private carousel?: ElementRef<HTMLElement>;

  private readonly projects = signal<readonly Project[]>(PROJECTS);

  readonly featuredProjects = computed(() =>
    this.projects().filter((project) => project.featured)
  );

  readonly carouselProjects = computed(() => {
    const projects = this.featuredProjects();

    return projects.length > 1
      ? [...projects, ...projects, ...projects]
      : projects;
  });

  private intervalId?: ReturnType<typeof setInterval>;
  private scrollTimeout?: ReturnType<typeof setTimeout>;
  private currentIndex = 0;
  private isAdjusting = false;

  ngAfterViewInit(): void {
    const count = this.featuredProjects().length;

    if (count <= 1) return;

    this.currentIndex = count;

    requestAnimationFrame(() => {
      this.goToIndex(this.currentIndex, false);
      this.startAutoplay();
    });
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
    clearTimeout(this.scrollTimeout);
  }

  private getStep(): number {
    const element = this.carousel?.nativeElement;
    const card = element?.querySelector<HTMLElement>(
      '.featured-projects__item'
    );

    if (!element || !card) return 0;

    const styles = getComputedStyle(element);
    const gap = parseFloat(styles.columnGap) || 0;

    return card.offsetWidth + gap;
  }

  private goToIndex(index: number, smooth = true): void {
    const element = this.carousel?.nativeElement;
    if (!element) return;

    const step = this.getStep();

    element.scrollTo({
      left: index * step,
      behavior: smooth ? 'smooth' : 'instant',
    });
  }

  next(): void {
    if (this.featuredProjects().length <= 1) return;

    this.currentIndex++;
    this.goToIndex(this.currentIndex);
    this.restartAutoplay();
  }

  previous(): void {
    if (this.featuredProjects().length <= 1) return;

    this.currentIndex--;
    this.goToIndex(this.currentIndex);
    this.restartAutoplay();
  }

  onScroll(): void {
    if (this.isAdjusting) return;

    clearTimeout(this.scrollTimeout);

    this.scrollTimeout = setTimeout(() => {
      this.normalizePosition();
    }, 180);
  }

  private normalizePosition(): void {
    const element = this.carousel?.nativeElement;
    const count = this.featuredProjects().length;

    if (!element || count <= 1) return;

    const step = this.getStep();
    if (!step) return;

    const index = Math.round(element.scrollLeft / step);

    if (index < count || index >= count * 2) {
      this.isAdjusting = true;

      const normalizedIndex =
        ((index - count) % count + count) % count + count;

      this.currentIndex = normalizedIndex;
      this.goToIndex(normalizedIndex, false);

      requestAnimationFrame(() => {
        this.isAdjusting = false;
      });
    } else {
      this.currentIndex = index;
    }
  }

  private startAutoplay(): void {
    this.stopAutoplay();

    this.intervalId = setInterval(() => {
      if (document.hidden) return;

      this.currentIndex++;
      this.goToIndex(this.currentIndex);
    }, 3000);
  }

  private stopAutoplay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  private restartAutoplay(): void {
    this.startAutoplay();
  }

  onUserInteraction(): void {
    this.stopAutoplay();

    clearTimeout(this.scrollTimeout);

    this.scrollTimeout = setTimeout(() => {
      this.normalizePosition();
      this.startAutoplay();
    }, 3500);
  }
}
