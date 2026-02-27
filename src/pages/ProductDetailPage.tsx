import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { getProductBySlug, products } from '../data/products';
import { fadeUp, staggerContainer, staggerItem } from '../lib/animations';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [selectedImage, setSelectedImage] = useState(product?.img ?? '');

  usePageMeta({
    title: product
      ? `${product.name} — HokLong Kitchen`
      : 'Product Not Found — HokLong Kitchen',
    description: product
      ? `${product.tagline} ${product.description}`
      : 'The requested product could not be found in the HokLong Kitchen catalog.',
  });

  useEffect(() => {
    setSelectedImage(product?.img ?? '');
  }, [product]);

  if (!product) {
    return (
      <>
        <section className="pt-32 pb-20 text-center">
          <div className="page-container">
            <h1 className="text-3xl font-semibold mb-4" style={{ color: '#1d1d1f' }}>
              Product not found
            </h1>
            <p className="mb-8" style={{ color: '#6e6e73' }}>
              The product you're looking for doesn't exist.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: '#0071e3' }}
            >
              <ArrowLeft size={16} /> Back to products
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  // Get related products (excluding current)
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-20 md:pt-24" style={{ background: '#ffffff' }}>
        <div className="page-container pt-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:underline underline-offset-4"
            style={{ color: '#0071e3' }}
          >
            <ArrowLeft size={14} /> All Products
          </Link>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-12 md:py-20" style={{ background: '#ffffff' }}>
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="relative overflow-hidden rounded-2xl lg:rounded-3xl"
                style={{ background: '#f5f5f7' }}
              >
                <img
                  src={selectedImage || product.img}
                  alt={product.name}
                  className="w-full aspect-[4/3] object-cover"
                  fetchPriority="high"
                />
                <span
                  className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.88)',
                    color: '#6e6e73',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {product.tag}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {product.gallery.map((galleryImage, index) => (
                  <button
                    key={`${galleryImage}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(galleryImage)}
                    className="relative rounded-xl overflow-hidden"
                    style={{
                      border:
                        selectedImage === galleryImage
                          ? '2px solid #0071e3'
                          : '1px solid #e8e8ed',
                    }}
                    aria-label={`View angle ${index + 1}`}
                  >
                    <img
                      src={galleryImage}
                      alt={`${product.name} angle ${index + 1}`}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <p
                className="text-sm font-medium tracking-wide mb-3"
                style={{ color: '#0071e3' }}
              >
                {product.tag}
              </p>
              <h1
                className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 leading-tight"
                style={{ color: '#1d1d1f' }}
              >
                {product.name}
              </h1>
              <p
                className="text-lg mb-3 font-medium"
                style={{ color: '#424245' }}
              >
                {product.tagline}
              </p>
              <p
                className="text-base leading-relaxed mb-8 max-w-lg"
                style={{ color: '#6e6e73' }}
              >
                {product.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-lg"
                  style={{ background: '#0071e3' }}
                >
                  Request a Quote
                </Link>
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300"
                  style={{ border: '1px solid #d2d2d7', color: '#424245' }}
                >
                  Ask a Question
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20" style={{ background: '#f5f5f7' }}>
        <div className="page-container">
          <ScrollReveal className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight mb-3"
              style={{ color: '#1d1d1f' }}
            >
              Key Features
            </h2>
          </ScrollReveal>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {product.features.map((feature) => (
              <motion.div
                key={feature}
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
                <span className="text-sm" style={{ color: '#1d1d1f' }}>
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-16 md:py-20" style={{ background: '#ffffff' }}>
        <div className="page-container max-w-3xl">
          <ScrollReveal className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight mb-3"
              style={{ color: '#1d1d1f' }}
            >
              Technical Specifications
            </h2>
          </ScrollReveal>
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #e8e8ed' }}>
            {Object.entries(product.specs).map(([key, value], i) => (
              <div
                key={key}
                className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-1 sm:gap-4 items-start sm:items-center px-5 sm:px-6 py-4 text-sm"
                style={{
                  background: i % 2 === 0 ? '#ffffff' : '#f5f5f7',
                  borderBottom:
                    i < Object.entries(product.specs).length - 1
                      ? '1px solid #e8e8ed'
                      : 'none',
                }}
              >
                <span className="font-medium break-words" style={{ color: '#1d1d1f' }}>
                  {key}
                </span>
                <span className="break-words sm:text-right" style={{ color: '#6e6e73' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 md:py-20" style={{ background: '#f5f5f7' }}>
        <div className="page-container">
          <ScrollReveal className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight"
              style={{ color: '#1d1d1f' }}
            >
              You may also need
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.slug}`}
                className="group block rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                style={{ background: '#ffffff', border: '1px solid #e8e8ed' }}
              >
                <div style={{ aspectRatio: '4/3', background: '#f5f5f7' }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3
                    className="text-base font-semibold tracking-tight mb-1"
                    style={{ color: '#1d1d1f' }}
                  >
                    {p.name}
                  </h3>
                  <span
                    className="text-sm font-medium"
                    style={{ color: '#0071e3' }}
                  >
                    View details &rsaquo;
                  </span>
                </div>
              </Link>
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
              Ready to order?
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: '#6e6e73' }}>
              Get a custom quote for the {product.name} tailored to your kitchen's needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-7 py-3.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-lg"
              style={{ background: '#0071e3' }}
            >
              Request a Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </>
  );
}
