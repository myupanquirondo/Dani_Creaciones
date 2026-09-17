import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type ButtonVariant = 'primary' | 'secondary' | 'light';

@Component({
  selector: 'app-button',
  imports: [RouterLink],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  readonly label = input.required<string>();
  readonly route = input.required<string>();
  readonly variant = input<ButtonVariant>('primary');
}