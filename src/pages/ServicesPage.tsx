import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Wrench, ClipboardCheck, Award } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { staggerContainer, staggerItem } from '../lib/animations';
import Footer from '../components/Footer';
import { usePageMeta } from '../hooks/usePageMeta';

const process = [
  {
    title: 'Consultation & Site Survey',
    description:
      'We assess your menu, service volume, utility points, and floor plan to define the right equipment strategy from day one.',
  },
  {
    title: 'Kitchen Planning & Specification',
    description:
      'Our team prepares the full equipment schedule, technical drawings, and compliance-ready specs tailored to your operation.',
  },
  {
    title: 'Installation & Commissioning',
    description:
      'Certified technicians install, test, calibrate, and commission each system for safe, reliable day-one performance.',
  },
  {
    title: 'Training & After-Sales Support',
    description:
      'We provide operator training, preventive maintenance, and responsive support to keep your kitchen running at full capacity.',
  },
];

const certifications = [
  'ISO 9001 Quality Management',
  'HACCP Installation Standards',
  'Commercial Electrical Safety Compliance',
  'Certified Ventilation & Fire-Safety Partners',
];

const servicePillars = [
  {
    icon: ShieldCheck,
    title: 'Certified Expertise',
    text: 'Installation by qualified technicians following strict safety and quality procedures.',
  },
  {
    icon: Wrench,
    title: 'Preventive Maintenance',
    text: 'Scheduled service plans reduce downtime and extend equipment lifespan.',
  },
  {
    icon: ClipboardCheck,
    title: 'Project Management',
    text: 'Clear milestones from planning to handover, with transparent communication.',
  },
];

export default function ServicesPage() {
  usePageMeta({
    title: 'Services & Installation — HokLong Kitchen',
    description:
      'Professional kitchen consultation, planning, installation, commissioning, and after-sales support with certified expertise.',
  });

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20" style={{ background: '#f5f5f7' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <p className="text-sm font-medium tracking-wide mb-3" style={{ color: '#0071e3' }}>
              Services & Installation
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tight mb-5" style={{ color: '#1d1d1f' }}>
              End-to-end kitchen
              <br />
              <span style={{ color: '#86868b' }}>implementation.</span>
            </h1>
            <p className="text-base md:text-lg max-w-[620px] mx-auto" style={{ color: '#6e6e73' }}>
              From first consultation to final commissioning, we deliver professional installation services that prioritize safety,
              compliance, and long-term reliability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: '#ffffff' }}>
        <div className="page-container">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: '#1d1d1f' }}>
              Our Process
            </h2>
          </ScrollReveal>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {process.map((step, index) => (
              <motion.article
                key={step.title}
                variants={staggerItem}
                className="rounded-2xl p-6 md:p-7"
                style={{
                  background: 'rgba(255,255,255,0.82)',
                  border: '1px solid #e8e8ed',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#0071e3' }}>
                  Step {index + 1}
                </p>
                <h3 className="text-xl font-semibold tracking-tight mb-3" style={{ color: '#1d1d1f' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6e6e73' }}>
                  {step.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: '#f5f5f7' }}>
        <div className="page-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ScrollReveal>
            <div className="rounded-2xl p-8" style={{ background: '#ffffff', border: '1px solid #e8e8ed' }}>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-5" style={{ color: '#1d1d1f' }}>
                Certifications & Compliance
              </h2>
              <ul className="space-y-3">
                {certifications.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: '#424245' }}>
                    <Award size={16} className="mt-0.5" style={{ color: '#0071e3' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {servicePillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={staggerItem}
                className="rounded-2xl p-6"
                style={{ background: '#ffffff', border: '1px solid #e8e8ed' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#e1f0ff' }}>
                    <pillar.icon size={18} style={{ color: '#0071e3' }} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1" style={{ color: '#1d1d1f' }}>{pillar.title}</h3>
                    <p className="text-sm" style={{ color: '#6e6e73' }}>{pillar.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: '#ffffff' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4" style={{ color: '#1d1d1f' }}>
              Ready to start your installation?
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: '#6e6e73' }}>
              Tell us your timeline and requirements, and our specialists will prepare a tailored installation plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-lg" style={{ background: '#0071e3' }}>
                <CheckCircle2 size={16} />
                Request a Quote
              </Link>
              <Link to="/portfolio" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium" style={{ border: '1px solid #d2d2d7', color: '#424245' }}>
                View Completed Projects
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </>
  );
}
