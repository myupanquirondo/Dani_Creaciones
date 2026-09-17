import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-gallery',
  imports: [],
  templateUrl: './project-gallery.html',
  styleUrl: './project-gallery.scss',
})
export class ProjectGallery {
  readonly images = input.required<readonly string[]>();
  readonly projectTitle = input.required<string>();
}