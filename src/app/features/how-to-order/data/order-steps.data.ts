import { OrderStepData } from '../models/order-step.model';

export const ORDER_STEPS: readonly OrderStepData[] = [
  {
    step: 1,
    title: 'Cuéntanos tu idea',
    description: 'Envíanos una foto, tema o indicaciones de tu tarea.',
  },
  {
    step: 2,
    title: 'Te damos una cotización',
    description: 'Te respondemos con el precio y tiempo de entrega.',
  },
  {
    step: 3,
    title: 'Elaboramos tu trabajo',
    description: 'Con mucho cuidado y detalle.',
  },
  {
    step: 4,
    title: 'Coordinamos la entrega',
    description: 'Envío o punto de encuentro.',
  },
];