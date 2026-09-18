import { Component } from '@angular/core';
import { ORDER_STEPS } from '../../../how-to-order/data/order-steps.data';

@Component({
  selector: 'app-home-order-process',
  imports: [],
  templateUrl: './home-order-process.html',
  styleUrl: './home-order-process.scss',
})
export class HomeOrderProcess {
  protected readonly orderSteps = ORDER_STEPS;
}