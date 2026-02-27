import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { staggerContainer, staggerItem } from '../lib/animations';
import ScrollReveal from '../components/ScrollReveal';
import { products } from '../data/products';
import Footer from '../components/Footer';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ProductsPage() {
  usePageMeta({
    title: 'Products — HokLong Kitchen',
    description:
      'Browse categorized commercial kitchen equipment including ovens, refrigeration, ventilation, storage, prep, and sanitation systems.',
  });

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(products.map((product) => product.category)))],
    [],
  );
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20" style={{ background: '#f5f5f7' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <p
              className="text-sm font-medium tracking-wide mb-3"
              style={{ color: '#0071e3' }}
            >
              Our Collection
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tight mb-5"
              style={{ color: '#1d1d1f' }}
            >
              Professional equipment.
            </h1>
            <p
              className="text-base md:text-lg max-w-[520px] mx-auto"
              style={{ color: '#6e6e73' }}
            >
              Every piece is engineered for performance, durability, and
              day-to-day efficiency in the world's most demanding kitchens.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24" style={{ background: '#ffffff' }}>
        <div className="page-container">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300"
                style={{
                  background: activeCategory === category ? '#0071e3' : '#f5f5f7',
                  color: activeCategory === category ? '#ffffff' : '#424245',
                  border: activeCategory === category ? '1px solid #0071e3' : '1px solid #e8e8ed',
                }}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            variants={staggerContainer}
            key={activeCategory}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/products/${product.slug}`}
                  className="group block"
                >
                  <div
                    className="relative overflow-hidden rounded-2xl transition-shadow duration-500 hover:shadow-lg"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #e8e8ed',
                    }}
                  >
                    <div
                      className="relative overflow-hidden"
                      style={{ aspectRatio: '4/3', background: '#f5f5f7' }}
                    >
                      <img
                        src={product.img}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <span
                        className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{
                          background: 'rgba(255,255,255,0.88)',
                          color: '#6e6e73',
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        {product.tag}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.08em] mb-2" style={{ color: '#0071e3' }}>
                        {product.category}
                      </p>
                      <h3
                        className="text-lg font-semibold mb-2 tracking-tight"
                        style={{ color: '#1d1d1f' }}
                      >
                        {product.name}
                      </h3>
                      <p
                        className="text-sm mb-4 leading-relaxed"
                        style={{ color: '#6e6e73' }}
                      >
                        {product.tagline}
                      </p>
                      <span
                        className="inline-flex items-center text-sm font-medium group-hover:underline underline-offset-4"
                        style={{ color: '#0071e3' }}
                      >
                        View details &rsaquo;
                      </span>
                    </div>
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
              Need help choosing?
            </h2>
            <p
              className="text-base mb-8 max-w-md mx-auto"
              style={{ color: '#6e6e73' }}
            >
              Our equipment specialists will help you find the perfect
              solution for your kitchen.
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
