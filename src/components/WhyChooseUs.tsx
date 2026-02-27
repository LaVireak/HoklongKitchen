import { motion } from 'framer-motion';
import { Shield, Zap, Award, HeartHandshake } from 'lucide-react';
import { staggerContainer, staggerItem } from '../lib/animations';
import ScrollReveal from './ScrollReveal';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';

const features = [
  { icon: Shield,         title: 'Commercial Grade',   desc: 'Built to withstand the most demanding professional environments, day after day.' },
  { icon: Zap,            title: 'Energy Efficient',   desc: 'Advanced engineering that reduces operational costs without compromising performance.' },
  { icon: Award,          title: 'ISO Certified',      desc: 'Every product meets rigorous international quality and safety standards.' },
  { icon: HeartHandshake, title: 'Expert Support',     desc: 'Dedicated consultation, installation, and after-sales service from industry specialists.' },
];

const stats = [
  { value: 500, suffix: '+',  label: 'Kitchens Equipped'   },
  { value: 15,  suffix: '',   label: 'Years Experience'     },
  { value: 98,  suffix: '%',  label: 'Client Satisfaction'  },
  { value: 24,  suffix: '/7', label: 'Support Available'    },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
        {count}<span style={{ color: '#0071e3' }}>{suffix}</span>
      </div>
      <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ background: '#1d1d1f' }}>
      <div className="page-container">

        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <p className="text-sm font-medium tracking-wide mb-3" style={{ color: '#0071e3' }}>
            Why HokLong
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            The difference is in the details.
          </h2>
          <p className="text-base md:text-lg max-w-[580px] mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
            We don't just sell equipment. We engineer complete kitchen solutions
            that transform how professionals work.
          </p>
        </ScrollReveal>

        {/* Feature Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mb-20"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="group p-6 sm:p-8"
            >
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 transition-colors duration-500"
                style={{ background: 'rgba(255,255,255,0.07)' }}
              >
                <feature.icon size={20} style={{ color: 'rgba(255,255,255,0.55)' }} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
