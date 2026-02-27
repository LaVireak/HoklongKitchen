import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const productLinks = [
  { label: 'Convection Ovens', to: '/products/convection-ovens' },
  { label: 'Refrigeration', to: '/products/refrigeration' },
  { label: 'Industrial Mixers', to: '/products/industrial-mixers' },
  { label: 'Prep Stations', to: '/products/prep-stations' },
  { label: 'Ventilation Hoods', to: '/products/ventilation-hoods' },
  { label: 'Dishwashers', to: '/products/dishwashers' },
];

const solutionLinks = [
  { label: 'Installation Process', to: '/services' },
  { label: 'After-Sales Support', to: '/services' },
  { label: 'Compliance & Certification', to: '/services' },
  { label: 'Project Portfolio', to: '/portfolio' },
];

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
  { label: 'FAQ', to: '/faq' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Cookie Policy', to: '/cookies' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="relative overflow-hidden" style={{ background: '#151518' }}>
      {/* Subtle gradient accent at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,113,227,0.5), transparent)' }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={fadeUp}
      >
        {/* ── Newsletter / CTA Section ── */}
        <div className="page-container pt-16 pb-12 md:pt-20 md:pb-14">
          <div
            className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{
              background: 'linear-gradient(135deg, rgba(0,113,227,0.2), rgba(0,113,227,0.08))',
              border: '1px solid rgba(0,113,227,0.28)',
            }}
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 tracking-tight">
                Ready to upgrade your kitchen?
              </h3>
              <p className="text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Get a free consultation and custom quote for your operation.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-apple-blue text-white text-sm font-semibold hover:bg-apple-blue-hover transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 whitespace-nowrap"
            >
              Get Started
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Main Footer Grid ── */}
        <div className="page-container pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2">
              <Link to="/" className="inline-flex items-center gap-0.5 mb-5">
                <span className="text-xl font-bold tracking-tight text-white">HokLong</span>
                <span className="text-xl font-light tracking-tight" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Kitchen
                </span>
              </Link>
              <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: 'rgba(255,255,255,0.72)' }}>
                Premium commercial kitchen equipment, certified installation,
                and long-term support for professional culinary operations.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:info@hoklongkitchen.com"
                  className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.76)' }}
                >
                  <Mail size={15} className="flex-shrink-0" style={{ color: 'rgba(255,255,255,0.55)' }} />
                  info@hoklongkitchen.com
                </a>
                <a
                  href="tel:+85512345678"
                  className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.76)' }}
                >
                  <Phone size={15} className="flex-shrink-0" style={{ color: 'rgba(255,255,255,0.55)' }} />
                  +855 12 345 678
                </a>
                <div
                  className="flex items-start gap-3 text-sm"
                  style={{ color: 'rgba(255,255,255,0.76)' }}
                >
                  <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }} />
                  Phnom Penh, Cambodia
                </div>
              </div>
            </div>

            {/* Products Column */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.62)' }}>
                Products
              </h4>
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.78)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1 text-sm font-medium text-apple-blue hover:text-apple-blue-hover transition-colors duration-200"
                  >
                    View All <ArrowRight size={13} />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.62)' }}>
                Services
              </h4>
              <ul className="space-y-2.5">
                {solutionLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.78)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.62)' }}>
                Company
              </h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.78)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="page-container">
          <div
            className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-xs text-center sm:text-left" style={{ color: 'rgba(255,255,255,0.62)' }}>
              &copy; {currentYear} HokLong Kitchen. All rights reserved.
            </p>
            <div className="flex items-center justify-center sm:justify-end flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-xs transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.62)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
