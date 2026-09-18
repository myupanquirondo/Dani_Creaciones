import { Component } from '@angular/core';

import { Hero } from '../../components/hero/hero';
import { HomeCategories } from '../../components/home-categories/home-categories';
import { FeaturedProjects } from '../../components/featured-projects/featured-projects';
import { HomeOrderProcess } from '../../components/home-order-process/home-order-process';
import { HomeAbout } from '../../components/home-about/home-about';
import { SectionTitle } from '../../../../shared/ui/section-title/section-title';

@Component({
  selector: 'app-home-page',
  imports: [
    Hero,
    HomeCategories,
    FeaturedProjects,
    HomeOrderProcess,
    HomeAbout,
    SectionTitle,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}