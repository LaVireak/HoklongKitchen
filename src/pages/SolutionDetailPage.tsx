import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { getSolutionBySlug, solutions } from '../data/solutions';
import { fadeUp, staggerContainer, staggerItem } from '../lib/animations';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';

export default function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? getSolutionBySlug(slug) : undefined;

  if (!solution) {
    return (
      <>
        <section className="pt-32 pb-20 text-center">
          <div className="page-container">
            <h1 className="text-3xl font-semibold mb-4" style={{ color: '#1d1d1f' }}>
              Solution not found
            </h1>
            <p className="mb-8" style={{ color: '#6e6e73' }}>
              The solution you're looking for doesn't exist.
            </p>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: '#0071e3' }}
            >
              <ArrowLeft size={16} /> Back to solutions
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const related = solutions.filter((s) => s.id !== solution.id).slice(0, 2);

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-20 md:pt-24" style={{ background: '#ffffff' }}>
        <div className="page-container pt-4">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:underline underline-offset-4"
            style={{ color: '#0071e3' }}
          >
            <ArrowLeft size={14} /> All Solutions
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12 md:py-20" style={{ background: '#ffffff' }}>
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl" style={{ background: '#f5f5f7' }}>
                <img
                  src={solution.img}
                  alt={solution.name}
                  className="w-full aspect-[4/3] object-cover"
                  fetchPriority="high"
                />
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <p className="text-sm font-medium tracking-wide mb-3" style={{ color: '#0071e3' }}>
                Commercial Solutions
              </p>
              <h1
                className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 leading-tight"
                style={{ color: '#1d1d1f' }}
              >
                {solution.name}
              </h1>
              <p className="text-lg mb-3 font-medium" style={{ color: '#424245' }}>
                {solution.tagline}
              </p>
              <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: '#6e6e73' }}>
                {solution.description}
              </p>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-lg inline-flex"
                style={{ background: '#0071e3' }}
              >
                Start a Project
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-20" style={{ background: '#f5f5f7' }}>
        <div className="page-container">
          <ScrollReveal className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight"
              style={{ color: '#1d1d1f' }}
            >
              What we deliver
            </h2>
          </ScrollReveal>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
          >
            {solution.highlights.map((h) => (
              <motion.div
                key={h}
                variants={staggerItem}
                className="flex items-start gap-3 p-5 rounded-xl"
                style={{ background: '#ffffff', border: '1px solid #e8e8ed' }}
              >
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: '#e1f0ff' }}
                >
                  <Check size={12} style={{ color: '#0071e3' }} />
                </div>
                <span className="text-sm" style={{ color: '#1d1d1f' }}>{h}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-16 md:py-20" style={{ background: '#ffffff' }}>
        <div className="page-container">
          <ScrollReveal className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight"
              style={{ color: '#1d1d1f' }}
            >
              Other solutions
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {related.map((s) => (
              <Link
                key={s.id}
                to={`/solutions/${s.slug}`}
                className="group block rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                style={{ background: '#ffffff', border: '1px solid #e8e8ed' }}
              >
                <div style={{ aspectRatio: '16/10', background: '#f5f5f7' }}>
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold tracking-tight mb-1" style={{ color: '#1d1d1f' }}>
                    {s.name}
                  </h3>
                  <span className="text-sm font-medium" style={{ color: '#0071e3' }}>
                    Learn more &rsaquo;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
