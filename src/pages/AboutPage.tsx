import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap, Award, HeartHandshake } from 'lucide-react';
import { staggerContainer, staggerItem, fadeUp } from '../lib/animations';
import ScrollReveal from '../components/ScrollReveal';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';
import Footer from '../components/Footer';

const values = [
  { icon: Shield, title: 'Commercial Grade', desc: 'Built to withstand the most demanding professional environments, day after day.' },
  { icon: Zap, title: 'Energy Efficient', desc: 'Advanced engineering that reduces operational costs without compromising performance.' },
  { icon: Award, title: 'ISO Certified', desc: 'Every product meets rigorous international quality and safety standards.' },
  { icon: HeartHandshake, title: 'Expert Support', desc: 'Dedicated consultation, installation, and after-sales service from industry specialists.' },
];

const stats = [
  { value: 500, suffix: '+', label: 'Kitchens Equipped' },
  { value: 15, suffix: '', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: '#1d1d1f' }}>
        {count}<span style={{ color: '#0071e3' }}>{suffix}</span>
      </div>
      <p className="mt-2 text-sm" style={{ color: '#6e6e73' }}>{label}</p>
    </div>
  );
}

export default function AboutPage() {
  usePageMeta({
    title: 'About Us — HokLong Kitchen',
    description:
      'Learn about HokLong Kitchen, our mission, values, and proven expertise in commercial kitchen equipment and installation.',
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20" style={{ background: '#ffffff' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <p className="text-sm font-medium tracking-wide mb-3" style={{ color: '#0071e3' }}>
              About HokLong Kitchen
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tight mb-5"
              style={{ color: '#1d1d1f' }}
            >
              The difference is
              <br />
              <span style={{ color: '#86868b' }}>in the details.</span>
            </h1>
            <p
              className="text-base md:text-lg max-w-[580px] mx-auto"
              style={{ color: '#6e6e73' }}
            >
              We don't just sell equipment. We engineer complete kitchen solutions
              that transform how professionals work.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24" style={{ background: '#f5f5f7' }}>
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl" style={{ background: '#e8e8ed' }}>
                <img
                  src="/images/kitchen-full.jpg"
                  alt="HokLong Kitchen headquarters"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight mb-5"
                style={{ color: '#1d1d1f' }}
              >
                15 years of precision engineering.
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6e6e73' }}>
                Founded with a simple mission: to bring world-class kitchen equipment
                to professional culinary spaces across the region. Over 15 years,
                we've grown from a small distributor to a trusted partner for
                Michelin-starred restaurants, international hotels, and high-volume
                catering operations.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#6e6e73' }}>
                Every piece of equipment we recommend has been tested, vetted, and
                approved by our team of culinary engineers. We don't just sell —
                we consult, plan, install, and support.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-sm font-medium hover:underline underline-offset-4"
                style={{ color: '#0071e3' }}
              >
                Get in touch &rsaquo;
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24" style={{ background: '#ffffff' }}>
        <div className="page-container">
          <ScrollReveal className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight"
              style={{ color: '#1d1d1f' }}
            >
              What we stand for
            </h2>
          </ScrollReveal>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                className="text-center p-6 rounded-2xl"
                style={{ background: '#f5f5f7' }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                  style={{ background: '#e1f0ff' }}
                >
                  <v.icon size={22} style={{ color: '#0071e3' }} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold mb-2 tracking-tight" style={{ color: '#1d1d1f' }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6e6e73' }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20" style={{ background: '#f5f5f7' }}>
        <div className="page-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ background: '#ffffff' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
              style={{ color: '#1d1d1f' }}
            >
              Work with us
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: '#6e6e73' }}>
              Whether you're planning a new kitchen or upgrading an existing one,
              we'd love to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-lg"
                style={{ background: '#0071e3' }}
              >
                Contact Us
              </Link>
              <Link
                to="/solutions"
                className="px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300"
                style={{ border: '1px solid #d2d2d7', color: '#424245' }}
              >
                View Solutions
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </>
  );
}
