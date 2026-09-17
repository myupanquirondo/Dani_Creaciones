import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-project-filter',
  imports: [],
  templateUrl: './project-filter.html',
  styleUrl: './project-filter.scss',
})
export class ProjectFilter {
  readonly categories = input.required<readonly string[]>();
  readonly selectedCategory = input.required<string>();

  readonly categoryChange = output<string>();

  selectCategory(category: string): void {
    this.categoryChange.emit(category);
  }
}