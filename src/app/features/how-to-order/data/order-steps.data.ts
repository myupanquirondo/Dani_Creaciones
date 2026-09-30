import { OrderStepData } from '../models/order-step.model';

export const ORDER_STEPS: readonly OrderStepData[] = [
  {
    step: 1,
    title: 'Cuéntanos tu idea',
    description:
      'Envíanos una foto, tema o las indicaciones de tu tarea por WhatsApp.',
    image: '/images/how-to-order/cuentame_tu_idea.png',
  },
  {
    step: 2,
    title: 'Te damos una cotización',
    description:
      'Te respondemos con el precio estimado y el tiempo de entrega según tu proyecto.',
    image: '/images/how-to-order/damos_cotizacion.png',
  },
  {
    step: 3,
    title: 'Elaboramos tu trabajo',
    description:
      'Una vez confirmado, nos ponemos manos a la obra con mucho cuidado y detalle.',
    image: '/images/how-to-order/elaboracion_trabajo.png',
  },
  {
    step: 4,
    title: 'Coordinamos la entrega',
    description:
      'Te avisamos cuando esté listo y coordinamos el punto de encuentro según tu zona.',
    image: '/images/how-to-order/coordinazion_entrega.png',
  },
];