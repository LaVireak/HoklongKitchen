export interface Product {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  tag: string;
  category: 'Ovens' | 'Refrigeration' | 'Ventilation' | 'Storage' | 'Preparation' | 'Sanitation';
  img: string;
  gallery: string[];
  description: string;
  features: string[];
  specs: Record<string, string>;
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'convection-ovens',
    name: 'Convection Ovens',
    tagline: 'Precision heat for perfect results.',
    tag: 'Baking',
    category: 'Ovens',
    img: '/images/oven.jpg',
    gallery: ['/images/oven.jpg', '/images/kitchen-full.jpg', '/images/prep-station.jpg'],
    description:
      'Multi-zone convection technology delivers perfectly even heat distribution. Built for the demands of professional kitchens with intuitive controls and commercial-grade insulation.',
    features: [
      'Multi-zone convection technology',
      'Precision digital temperature control',
      'Self-cleaning catalytic panels',
      'Commercial-grade insulation',
      'Stainless steel construction',
      'Energy-efficient operation',
    ],
    specs: {
      'Temperature Range': '50°C – 300°C',
      Capacity: '10 GN 1/1 trays',
      Power: '16.5 kW',
      Dimensions: '920 × 800 × 1050 mm',
      Weight: '145 kg',
      Warranty: '5 years commercial',
    },
  },
  {
    id: 2,
    slug: 'prep-stations',
    name: 'Prep Stations',
    tagline: 'Built for the hardest shifts.',
    tag: 'Prep',
    category: 'Preparation',
    img: '/images/prep-station.jpg',
    gallery: ['/images/prep-station.jpg', '/images/kitchen-full.jpg', '/images/mixer.jpg'],
    description:
      'Ergonomically designed work surfaces with integrated storage, cutting boards, and drainage. Heavy-gauge stainless steel withstands decades of daily use.',
    features: [
      'Heavy-gauge 304 stainless steel',
      'Adjustable shelving system',
      'Integrated cutting board slots',
      'Undershelf storage',
      'Backsplash option available',
      'NSF certified',
    ],
    specs: {
      'Work Surface': '1800 × 700 mm',
      Height: '900 mm (adjustable)',
      Gauge: '16-gauge stainless steel',
      'Load Capacity': '350 kg',
      Finish: 'Satin brushed',
      Warranty: '5 years commercial',
    },
  },
  {
    id: 3,
    slug: 'industrial-mixers',
    name: 'Industrial Mixers',
    tagline: 'High-torque. Zero compromise.',
    tag: 'Mixing',
    category: 'Preparation',
    img: '/images/mixer.jpg',
    gallery: ['/images/mixer.jpg', '/images/prep-station.jpg', '/images/kitchen-full.jpg'],
    description:
      'High-torque planetary drive systems handle every consistency from delicate meringues to heavy bread doughs. Whisper-quiet operation with professional precision.',
    features: [
      'Planetary mixing action',
      'Variable speed control (12 speeds)',
      'Stainless steel bowl with guard',
      'Timer with auto shut-off',
      'Multiple attachment compatibility',
      'Whisper-quiet operation',
    ],
    specs: {
      'Bowl Capacity': '60 liters',
      'Motor Power': '2.2 kW',
      Speeds: '12 variable speeds',
      'Dough Capacity': '25 kg',
      Dimensions: '650 × 590 × 1150 mm',
      Warranty: '5 years commercial',
    },
  },
  {
    id: 4,
    slug: 'refrigeration',
    name: 'Refrigeration Systems',
    tagline: 'Advanced cooling for compliance.',
    tag: 'Cold Storage',
    category: 'Refrigeration',
    img: '/images/fridge.jpg',
    gallery: ['/images/fridge.jpg', '/images/kitchen-full.jpg', '/images/prep-station.jpg'],
    description:
      'Dual-zone cooling with smart temperature management ensures food safety compliance. Stainless steel construction designed for years of continuous operation.',
    features: [
      'Dual-zone temperature control',
      'Digital temperature display',
      'Auto-defrost system',
      'LED interior lighting',
      'Self-closing doors',
      'HACCP compliant',
    ],
    specs: {
      Capacity: '1400 liters',
      'Temperature Range': '-2°C to +8°C',
      Refrigerant: 'R290 (eco-friendly)',
      'Energy Class': 'A++',
      Dimensions: '1340 × 810 × 2100 mm',
      Warranty: '5 years commercial',
    },
  },
  {
    id: 5,
    slug: 'ventilation-hoods',
    name: 'Ventilation Hoods',
    tagline: 'Breathe easy. Cook freely.',
    tag: 'Ventilation',
    category: 'Ventilation',
    img: '/images/kitchen-full.jpg',
    gallery: ['/images/kitchen-full.jpg', '/images/oven.jpg', '/images/prep-station.jpg'],
    description:
      '1,200 CFM stainless steel range hoods with whisper-quiet motors and auto-clean filters. Engineered for high-volume cooking environments.',
    features: [
      '1,200 CFM extraction rate',
      'Baffle grease filters',
      'LED task lighting',
      'Variable speed control',
      'Auto-clean filter system',
      'Fire suppression ready',
    ],
    specs: {
      Airflow: '1,200 CFM',
      'Noise Level': '≤45 dB',
      'Filter Type': 'Stainless steel baffle',
      Lighting: 'LED (4000K)',
      Width: '1200 / 1500 / 1800 mm',
      Warranty: '5 years commercial',
    },
  },
  {
    id: 6,
    slug: 'dishwashers',
    name: 'Commercial Dishwashers',
    tagline: 'Spotless results. Every cycle.',
    tag: 'Sanitation',
    category: 'Sanitation',
    img: '/images/kitchen-full.jpg',
    gallery: ['/images/kitchen-full.jpg', '/images/fridge.jpg', '/images/oven.jpg'],
    description:
      'High-temperature pass-through and hood-type dishwashers deliver spotless, sanitized results in under 60 seconds per rack. Built for non-stop operation.',
    features: [
      '60-second wash cycles',
      'Built-in rinse aid dispenser',
      'Heat recovery system',
      'Double-skinned for insulation',
      'WRAS approved',
      'Self-draining pump',
    ],
    specs: {
      'Cycle Time': '60 / 90 / 120 seconds',
      'Rack Size': '500 × 500 mm',
      'Rinse Temperature': '85°C',
      'Water Consumption': '2.4 L / cycle',
      Dimensions: '600 × 640 × 820 mm',
      Warranty: '5 years commercial',
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
