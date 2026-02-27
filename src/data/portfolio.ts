export interface PortfolioProject {
  id: number;
  slug: string;
  title: string;
  clientType: string;
  location: string;
  image: string;
  needs: string;
  solution: string;
  results: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    slug: 'skyline-hotel-central-kitchen',
    title: 'Skyline Hotel Central Kitchen',
    clientType: '5-Star Hotel Group',
    location: 'Phnom Penh',
    image: '/images/kitchen-full.jpg',
    needs:
      'The client needed a high-output central kitchen serving room service, banquets, and two signature restaurants from one integrated back-of-house system.',
    solution:
      'We delivered a full design-build package with zoned prep lines, combi-oven banks, pass-through refrigeration, and coordinated ventilation to support simultaneous service peaks.',
    results: [
      '30% faster pass times during peak banquet windows',
      'Reduced energy consumption with A++ cold-chain systems',
      'Commissioned and operational in under 10 weeks',
    ],
  },
  {
    id: 2,
    slug: 'emberline-fine-dining',
    title: 'Emberline Fine Dining',
    clientType: 'Michelin-Guide Restaurant',
    location: 'Siem Reap',
    image: '/images/oven.jpg',
    needs:
      'The chef required precision thermal control and a workflow that supports tasting-menu execution with strict plating timelines.',
    solution:
      'Installed a precision oven suite, custom cold prep counters, and compact plating stations with integrated storage to optimize movement between hot and cold sections.',
    results: [
      'Higher consistency across multi-course service',
      'Improved brigade workflow with less cross-traffic',
      'Quiet, low-heat equipment improved kitchen comfort',
    ],
  },
  {
    id: 3,
    slug: 'urban-harvest-cloud-kitchen',
    title: 'Urban Harvest Cloud Kitchen Hub',
    clientType: 'Multi-Brand Delivery Operator',
    location: 'Phnom Penh',
    image: '/images/prep-station.jpg',
    needs:
      'The operator needed a compact multi-brand setup capable of high order throughput with strict food safety controls.',
    solution:
      'Built modular production lines with shared refrigeration, high-speed sanitation, and standardized prep stations for rapid handoff across brands.',
    results: [
      'Increased hourly order capacity by 42%',
      'Streamlined HACCP compliance audits',
      'Enabled future expansion with modular zones',
    ],
  },
  {
    id: 4,
    slug: 'greenfield-campus-catering',
    title: 'Greenfield Campus Catering Facility',
    clientType: 'Education & Events Catering',
    location: 'Battambang',
    image: '/images/fridge.jpg',
    needs:
      'The team required durable, easy-maintenance equipment for daily bulk meal production and periodic event surges.',
    solution:
      'Delivered heavy-duty prep stations, refrigeration walls, and industrial dishwashing with a maintenance plan tailored to daily high-cycle use.',
    results: [
      'Consistent output for 2,500+ meals/day',
      'Lower downtime via preventive service schedule',
      'Faster turnaround between lunch and event service',
    ],
  },
];
