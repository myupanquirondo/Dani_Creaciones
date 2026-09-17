import { Component, signal } from '@angular/core';

import { CATEGORIES } from '../../../categories/data/categories.data';
import { Category } from '../../../categories/models/category.model';
import { CategoryCard } from '../../../categories/components/category-card/category-card';
import { SectionTitle } from '../../../../shared/ui/section-title/section-title';

@Component({
  selector: 'app-home-categories',
  imports: [CategoryCard, SectionTitle],
  templateUrl: './home-categories.html',
  styleUrl: './home-categories.scss',
})
export class HomeCategories {
  readonly categories = signal<readonly Category[]>(CATEGORIES);
}