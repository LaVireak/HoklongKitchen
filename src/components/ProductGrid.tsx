import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../lib/animations';
import ScrollReveal from './ScrollReveal';
import { products } from '../data/products';

// Show first 4 from data
const gridProducts = products.slice(0, 4);

export default function ProductGrid() {
  return (
    <section className="py-24 md:py-32" style={{ background: '#f5f5f7' }}>
      <div className="page-container">

        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <p className="text-sm font-medium tracking-wide mb-3" style={{ color: '#0071e3' }}>
            Our Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4" style={{ color: '#1d1d1f' }}>
            Professional grade.
          </h2>
          <p className="text-base md:text-lg max-w-[500px] mx-auto" style={{ color: '#6e6e73' }}>
            Equipment selected for performance, durability,
            and day-to-day efficiency.
          </p>
        </ScrollReveal>

        {/* Product Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {gridProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <Link to={`/products/${product.slug}`}>
                <div
                  className="relative overflow-hidden rounded-[20px] transition-shadow duration-500 hover:shadow-lg"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e8e8ed',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: '1/1', background: '#f5f5f7' }}>
                    <img
                      src={product.img}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span
                      className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.88)', color: '#6e6e73', backdropFilter: 'blur(8px)' }}
                    >
                      {product.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold mb-1 tracking-tight" style={{ color: '#1d1d1f' }}>
                      {product.name}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6e6e73' }}>
                      {product.tagline}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium group-hover:underline underline-offset-4" style={{ color: '#0071e3' }}>
                      Learn more &rsaquo;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-14 flex justify-center"
        >
          <Link
            to="/products"
            className="group flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 border hover:border-apple-gray-900 hover:text-apple-gray-900"
            style={{ borderColor: '#d2d2d7', color: '#424245' }}
          >
            View all products
            <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
