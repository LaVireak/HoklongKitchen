import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center" style={{ background: '#ffffff' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center px-6"
      >
        <div
          className="text-[120px] md:text-[180px] font-bold leading-none tracking-tighter mb-4"
          style={{ color: '#e8e8ed' }}
        >
          404
        </div>
        <h1
          className="text-2xl md:text-3xl font-semibold tracking-tight mb-3"
          style={{ color: '#1d1d1f' }}
        >
          Page not found
        </h1>
        <p
          className="text-base mb-8 max-w-md mx-auto"
          style={{ color: '#6e6e73' }}
        >
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/"
            className="px-7 py-3 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-lg"
            style={{ background: '#0071e3' }}
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3 rounded-full text-sm font-medium transition-all duration-300"
            style={{ border: '1px solid #d2d2d7', color: '#424245' }}
          >
            Contact Support
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
