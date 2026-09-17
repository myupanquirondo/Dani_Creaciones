import { Component } from '@angular/core';

import { Hero } from '../../components/hero/hero';
import { HomeCategories } from '../../components/home-categories/home-categories';
import { FeaturedProjects } from '../../components/featured-projects/featured-projects';
import { HomeCta } from '../../components/home-cta/home-cta';
import { SectionTitle } from '../../../../shared/ui/section-title/section-title';

@Component({
  selector: 'app-home-page',
  imports: [
    Hero,
    HomeCategories,
    FeaturedProjects,
    HomeCta,
    SectionTitle,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}