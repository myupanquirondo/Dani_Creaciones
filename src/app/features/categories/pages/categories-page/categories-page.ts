import { Component, signal } from '@angular/core';

import { CATEGORIES } from '../../data/categories.data';
import { Category } from '../../models/category.model';
import { CategoryCard } from '../../components/category-card/category-card';
import { SectionTitle } from '../../../../shared/ui/section-title/section-title';

@Component({
  selector: 'app-categories-page',
  imports: [CategoryCard, SectionTitle],
  templateUrl: './categories-page.html',
  styleUrl: './categories-page.scss',
})
export class CategoriesPage {
  readonly categories = signal<readonly Category[]>(CATEGORIES);
}