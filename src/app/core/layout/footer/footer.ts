import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NAVIGATION_ITEMS } from '../../constants/navigation.constants';
import { CONTACT_INFO } from '../../constants/contact.constants';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly navigationItems = NAVIGATION_ITEMS;
  readonly contactInfo = CONTACT_INFO;
}