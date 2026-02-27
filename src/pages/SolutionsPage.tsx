import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../lib/animations';
import ScrollReveal from '../components/ScrollReveal';
import { solutions } from '../data/solutions';
import Footer from '../components/Footer';

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20" style={{ background: '#1d1d1f' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <p className="text-sm font-medium tracking-wide mb-3" style={{ color: '#0071e3' }}>
              Commercial Solutions
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tight mb-5 text-white"
            >
              Designed for
              <br />
              <span style={{ color: 'rgba(255,255,255,0.55)' }}>serious kitchens.</span>
            </h1>
            <p
              className="text-base md:text-lg max-w-[520px] mx-auto"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              From Michelin-starred restaurants to large-scale hotel operations,
              we deliver complete kitchen solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-24" style={{ background: '#ffffff' }}>
        <div className="page-container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {solutions.map((solution) => (
              <motion.div key={solution.id} variants={staggerItem}>
                <Link
                  to={`/solutions/${solution.slug}`}
                  className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg h-full"
                  style={{ background: '#ffffff', border: '1px solid #e8e8ed' }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: '16/10', background: '#f5f5f7' }}
                  >
                    <img
                      src={solution.img}
                      alt={solution.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                      }}
                    />
                    <h3 className="absolute bottom-4 left-5 text-xl font-semibold text-white">
                      {solution.name}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm mb-3 leading-relaxed" style={{ color: '#6e6e73' }}>
                      {solution.tagline}
                    </p>
                    <span
                      className="text-sm font-medium group-hover:underline underline-offset-4"
                      style={{ color: '#0071e3' }}
                    >
                      Learn more &rsaquo;
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ background: '#f5f5f7' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
              style={{ color: '#1d1d1f' }}
            >
              Let's plan your kitchen.
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: '#6e6e73' }}>
              Our team will design a complete solution tailored to your
              operation's specific needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-7 py-3.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-lg"
              style={{ background: '#0071e3' }}
            >
              Request a Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </>
  );
}
