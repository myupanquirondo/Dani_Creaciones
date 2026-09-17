import { Component, input } from '@angular/core';

@Component({
  selector: 'app-order-step',
  imports: [],
  templateUrl: './order-step.html',
  styleUrl: './order-step.scss',
})
export class OrderStep {
  readonly step = input.required<number>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}