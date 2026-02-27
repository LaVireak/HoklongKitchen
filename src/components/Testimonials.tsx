import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../lib/animations';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    quote:
      'HokLong transformed our kitchen from good to exceptional. The equipment quality and their consultation process is truly world-class.',
    name: 'Chef Laurent Dubois',
    role: 'Executive Chef, Le Meridien',
    avatar: null,
  },
  {
    quote:
      'We equipped three hotel kitchens with HokLong. Five years later, zero downtime. That speaks for itself.',
    name: 'Sarah Chen',
    role: 'Director of Operations, Grand Hyatt',
    avatar: null,
  },
  {
    quote:
      'The attention to detail in every piece of equipment, from ovens to prep stations, shows they truly understand professional kitchens.',
    name: 'Marco Rossi',
    role: 'Owner, Rossi & Figli Restaurants',
    avatar: null,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32" style={{ background: '#1d1d1f' }}>
      <div className="page-container">
        {/* Header */}
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <p className="text-sm font-medium tracking-wide mb-3" style={{ color: '#0071e3' }}>
            Trusted by Professionals
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            What chefs say.
          </h2>
        </ScrollReveal>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              className="rounded-2xl p-8 transition-all duration-500"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Quote mark */}
              <div className="text-5xl font-serif leading-none mb-4" style={{color:'rgba(255,255,255,0.15)'}}>"</div>

              <p className="text-base leading-relaxed mb-8" style={{color:'rgba(255,255,255,0.6)'}}>
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-6" style={{borderTop:'1px solid rgba(255,255,255,0.08)'}}>
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold" style={{background:'rgba(255,255,255,0.08)',color:'rgba(255,255,255,0.5)'}}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs" style={{color:'rgba(255,255,255,0.4)'}}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
