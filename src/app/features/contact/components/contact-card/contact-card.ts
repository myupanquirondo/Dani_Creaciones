import { Component, input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  imports: [],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.scss',
})
export class ContactCard {
  readonly title = input.required<string>();
  readonly value = input.required<string>();
  readonly href = input.required<string>();
}