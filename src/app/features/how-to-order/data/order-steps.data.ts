
import { OrderStepData } from '../models/order-step.model';

export const ORDER_STEPS: readonly OrderStepData[] = [
  {
    step: 1,
    title: 'Cuéntanos tu idea',
    description:
      'Envíanos una foto, tema o las indicaciones de tu tarea por WhatsApp.',
    image:
      'https://res.cloudinary.com/ll1rz1dd/image/upload/f_auto,q_auto,w_160/v1795048953/cuentame_tu_idea.webp',
  },
  {
    step: 2,
    title: 'Te damos una cotización',
    description:
      'Te respondemos con el precio estimado y el tiempo de entrega según tu proyecto.',
    image:
      'https://res.cloudinary.com/ll1rz1dd/image/upload/f_auto,q_auto,w_160/v1795048954/damos_cotizacion.webp',
  },
  {
    step: 3,
    title: 'Elaboramos tu trabajo',
    description:
      'Una vez confirmado, nos ponemos manos a la obra con mucho cuidado y detalle.',
    image:
      'https://res.cloudinary.com/ll1rz1dd/image/upload/f_auto,q_auto,w_160/v1795048956/elaboracion_trabajo.webp',
  },
  {
    step: 4,
    title: 'Coordinamos la entrega',
    description:
      'Te avisamos cuando esté listo y coordinamos el punto de encuentro según tu zona.',
    image:
      'https://res.cloudinary.com/ll1rz1dd/image/upload/f_auto,q_auto,w_160/v1795048952/coordinazion_entrega.webp',
  },
];
