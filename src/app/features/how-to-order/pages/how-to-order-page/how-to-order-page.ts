
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ORDER_STEPS } from '../../data/order-steps.data';
import { OrderStepData } from '../../models/order-step.model';
import { OrderStep } from '../../components/order-step/order-step';

@Component({
  selector: 'app-how-to-order-page',
  imports: [OrderStep, RouterLink],
  templateUrl: './how-to-order-page.html',
  styleUrl: './how-to-order-page.scss',
})
export class HowToOrderPage {
  readonly orderSteps = signal<readonly OrderStepData[]>(ORDER_STEPS);
}
