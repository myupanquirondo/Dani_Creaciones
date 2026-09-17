import { Component, input } from '@angular/core';

@Component({
  selector: 'app-social-links',
  imports: [],
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
})
export class SocialLinks {
  readonly instagramUrl = input<string>('');
  readonly tiktokUrl = input<string>('');
}