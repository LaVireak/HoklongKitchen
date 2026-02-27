import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { slideLeft, slideRight, scaleIn } from '../lib/animations';

interface ShowcaseItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  slug: string;
  reverse?: boolean;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: 'Convection Ovens',
    subtitle: 'Precision Baking',
    description:
      'Multi-zone convection technology delivers perfectly even heat distribution. Built for the demands of professional kitchens with intuitive controls and commercial-grade insulation.',
    image: '/images/oven.jpg',
    slug: 'convection-ovens',
  },
  {
    title: 'Refrigeration Systems',
    subtitle: 'Advanced Cold Chain',
    description:
      'Dual-zone cooling with smart temperature management ensures food safety compliance. Stainless steel construction designed for years of continuous operation.',
    image: '/images/fridge.jpg',
    slug: 'industrial-refrigerator',
    reverse: true,
  },
  {
    title: 'Industrial Mixers',
    subtitle: 'Zero Compromise',
    description:
      'High-torque planetary drive systems handle every consistency from delicate meringues to heavy bread doughs. Whisper-quiet operation with professional precision.',
    image: '/images/mixer.jpg',
    slug: 'industrial-mixer',
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-24 md:py-32 overflow-hidden" style={{background:'#ffffff'}}>
      <div className="page-container">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium tracking-wide mb-3" style={{color:'#0071e3'}}>
            Engineered for Excellence
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight" style={{color:'#1d1d1f'}}>
            Every detail matters.
          </h2>
        </ScrollReveal>

        {/* Alternating Showcase */}
        <div className="flex flex-col gap-16 md:gap-24">
          {showcaseItems.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col ${
                item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-10 md:gap-14`}
            >
              {/* Image */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={item.reverse ? slideRight : slideLeft}
                className="w-full md:w-1/2"
              >
                <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl" style={{background:'#f5f5f7'}}>
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                    initial={{ scale: 1.1, filter: 'blur(4px)' }}
                    whileInView={{ scale: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={scaleIn}
                className="w-full md:w-1/2"
              >
                <p className="text-sm font-medium mb-3 tracking-wide" style={{color:'#0071e3'}}>
                  {item.subtitle}
                </p>
                <h3 className="text-3xl md:text-4xl lg:text-[44px] font-semibold tracking-tight mb-5 leading-tight" style={{color:'#1d1d1f'}}>
                  {item.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed mb-8 max-w-md" style={{color:'#6e6e73'}}>
                  {item.description}
                </p>
                <Link
                  to={`/products/${item.slug}`}
                  className="group inline-flex items-center text-base font-medium hover:underline underline-offset-4 transition-all duration-200" style={{color:'#0071e3'}}
                >
                  Learn more
                  <span className="ml-1.5 group-hover:translate-x-1 transition-transform duration-300">
                    &rsaquo;
                  </span>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
