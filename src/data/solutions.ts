export interface Solution {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  img: string;
  highlights: string[];
}

export const solutions: Solution[] = [
  {
    id: 1,
    slug: 'restaurants',
    name: 'Restaurants',
    tagline: 'From intimate bistros to Michelin-starred dining.',
    description:
      'We design and equip restaurant kitchens of every scale — fine dining, casual, fast-casual, and ghost kitchens. Our team works with architects and chefs to deliver layouts that maximise efficiency while meeting the highest hygiene standards.',
    img: '/images/kitchen-full.jpg',
    highlights: [
      'Custom layout planning with 3D visualization',
      'Full equipment supply and installation',
      'Ventilation and fire suppression systems',
      'Ongoing maintenance contracts',
      'Staff training on equipment operation',
    ],
  },
  {
    id: 2,
    slug: 'hotels',
    name: 'Hotels',
    tagline: 'Equipping world-class hospitality kitchens.',
    description:
      'Hotel operations demand equipment that runs 24/7 without fail. We provide integrated kitchen solutions for banquet halls, room service, buffet lines, and specialty restaurants — all under one roof.',
    img: '/images/oven.jpg',
    highlights: [
      'Multi-outlet kitchen design',
      'Banquet and buffet equipment',
      'Central production kitchen setups',
      'Energy-efficient systems for high-volume use',
      'Priority 24/7 support contracts',
    ],
  },
  {
    id: 3,
    slug: 'catering',
    name: 'Catering',
    tagline: 'Mobile-ready equipment for high-volume events.',
    description:
      'Our catering solutions are built for flexibility and speed. From transportable combi ovens to mobile hot-holding units, we equip caterers to deliver consistent quality at scale, every time.',
    img: '/images/prep-station.jpg',
    highlights: [
      'Portable and transportable equipment',
      'Hot and cold holding solutions',
      'Rapid cook and finish systems',
      'Event-scale dishwashing units',
      'Flexible lease-to-own options',
    ],
  },
  {
    id: 4,
    slug: 'food-courts',
    name: 'Food Courts',
    tagline: 'Compact, high-output kitchen modules.',
    description:
      'Food court kitchens must maximise output in minimal space. We specialize in compact, modular kitchen designs that meet strict mall and building regulations while keeping operators efficient.',
    img: '/images/mixer.jpg',
    highlights: [
      'Space-optimised layout design',
      'Modular equipment packages',
      'Shared ventilation systems',
      'Regulatory compliance support',
      'Quick-service counter solutions',
    ],
  },
  {
    id: 5,
    slug: 'cloud-kitchens',
    name: 'Cloud Kitchens',
    tagline: 'Optimised for delivery-first operations.',
    description:
      'Cloud kitchens are the future of food service. We design multi-brand kitchen spaces with shared infrastructure, smart storage, and equipment optimised for rapid order fulfilment.',
    img: '/images/fridge.jpg',
    highlights: [
      'Multi-brand kitchen design',
      'Delivery-optimised workflow layouts',
      'Shared cold storage solutions',
      'Smart inventory management integration',
      'Rapid deployment packages',
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
