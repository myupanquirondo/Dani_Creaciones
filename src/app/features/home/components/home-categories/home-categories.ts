import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CATEGORIES } from '../../../categories/data/categories.data';
import { Category } from '../../../categories/models/category.model';
import { SectionTitle } from '../../../../shared/ui/section-title/section-title';

@Component({
  selector: 'app-home-categories',
  imports: [RouterLink, SectionTitle],
  templateUrl: './home-categories.html',
  styleUrl: './home-categories.scss',
})
export class HomeCategories {
  readonly categories = signal<readonly Category[]>(CATEGORIES);
}