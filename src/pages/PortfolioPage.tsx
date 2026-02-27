import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';
import { staggerContainer, staggerItem } from '../lib/animations';
import { portfolioProjects } from '../data/portfolio';
import { usePageMeta } from '../hooks/usePageMeta';

export default function PortfolioPage() {
  usePageMeta({
    title: 'Project Portfolio — HokLong Kitchen',
    description:
      'Review completed kitchen case studies with client needs, solutions delivered, and measurable outcomes.',
  });

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20" style={{ background: '#1d1d1f' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <p className="text-sm font-medium tracking-wide mb-3" style={{ color: '#0071e3' }}>
              Project Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tight mb-5 text-white">
              Proven in real
              <br />
              <span style={{ color: 'rgba(255,255,255,0.56)' }}>high-performance kitchens.</span>
            </h1>
            <p className="text-base md:text-lg max-w-[620px] mx-auto" style={{ color: 'rgba(255,255,255,0.64)' }}>
              Explore case studies that show how we translate operational challenges into precision-built kitchen environments.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: '#f5f5f7' }}>
        <div className="page-container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {portfolioProjects.map((project) => (
              <motion.article
                key={project.id}
                variants={staggerItem}
                className="rounded-3xl overflow-hidden"
                style={{ background: '#ffffff', border: '1px solid #e8e8ed' }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative min-h-[280px] lg:min-h-full">
                    <img src={project.image} alt={project.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.55) 100%)' }} />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <p className="text-xs uppercase tracking-[0.14em] mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        {project.clientType} · {project.location}
                      </p>
                      <h2 className="text-2xl font-semibold tracking-tight">{project.title}</h2>
                    </div>
                  </div>
                  <div className="p-7 md:p-8 lg:p-10">
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.08em] mb-2" style={{ color: '#0071e3' }}>
                        Client Need
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#6e6e73' }}>
                        {project.needs}
                      </p>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.08em] mb-2" style={{ color: '#0071e3' }}>
                        Solution Delivered
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#6e6e73' }}>
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: '#0071e3' }}>
                        Outcomes
                      </h3>
                      <ul className="space-y-2">
                        {project.results.map((item) => (
                          <li key={item} className="text-sm leading-relaxed" style={{ color: '#424245' }}>
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: '#ffffff' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4" style={{ color: '#1d1d1f' }}>
              Have a project in mind?
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: '#6e6e73' }}>
              Share your requirements and we will propose a tailored equipment and installation roadmap.
            </p>
            <Link to="/contact" className="inline-flex items-center px-7 py-3.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-lg" style={{ background: '#0071e3' }}>
              Start Your Project
            </Link>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </>
  );
}
