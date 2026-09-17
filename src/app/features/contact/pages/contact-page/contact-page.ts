import { Component } from '@angular/core';

import { CONTACT_INFO } from '../../../../core/constants/contact.constants';
import { SectionTitle } from '../../../../shared/ui/section-title/section-title';
import { ContactCard } from '../../components/contact-card/contact-card';
import { SocialLinks } from '../../components/social-links/social-links';

@Component({
  selector: 'app-contact-page',
  imports: [SectionTitle, ContactCard, SocialLinks],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {
  readonly contactInfo = CONTACT_INFO;
}