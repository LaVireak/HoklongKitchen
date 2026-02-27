import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, appleEaseOut } from '../lib/animations';

export default function CommercialSection() {
  return (
    <section id="commercial" className="relative py-24 md:py-32 overflow-hidden" style={{background:'#1d1d1f'}}>
      {/* Subtle steel gradient accent */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 steel-gradient" />
      </div>

      <div className="relative page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pb-8">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <p className="text-sm font-medium tracking-wide mb-4" style={{color:'#0071e3'}}>
              Commercial Solutions
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight mb-6 leading-tight" style={{color:'#ffffff'}}>
              Designed for
              <br />
              serious kitchens.
            </h2>
            <p className="text-base md:text-lg max-w-md mb-8 leading-relaxed" style={{color:'rgba(255,255,255,0.55)'}}>
              From Michelin-starred restaurants to large-scale hotel operations,
              our commercial line delivers the reliability and precision that
              professionals demand. Every unit is built to perform under
              the most demanding conditions.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Custom kitchen layout planning',
                'Full installation & commissioning',
                'Preventive maintenance programs',
                'Priority 24/7 technical support',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:'#0071e3'}} />
                  <span className="text-sm" style={{color:'rgba(255,255,255,0.75)'}}>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-lg"
                style={{background:'#0071e3'}}
              >
                Request a Quote
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-white text-sm font-medium transition-all duration-300"
                style={{border:'1px solid rgba(255,255,255,0.2)'}}
              >
                View Solutions
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: appleEaseOut, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl">
              <motion.img
                src="/images/kitchen-full.jpg"
                alt="Commercial kitchen"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: appleEaseOut }}
              />
              {/* Depth overlay */}
              <div className="absolute inset-0" style={{background:'linear-gradient(to top right, rgba(29,29,31,0.3), transparent)'}} />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 left-4 lg:-left-8 rounded-2xl p-5 shadow-lg"
              style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.8)', zIndex: 10 }}
            >
              <div className="text-2xl font-semibold" style={{color:'#1d1d1f'}}>500+</div>
              <div className="text-xs mt-0.5" style={{color:'#6e6e73'}}>Kitchens equipped worldwide</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
