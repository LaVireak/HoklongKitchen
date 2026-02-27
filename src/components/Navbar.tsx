import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const links = [
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const closeMenu = () => setMenuOpen(false);

  // Homepage uses a dark visual treatment to blend into hero
  const isHomepage = location.pathname === '/';
  const showLight = isHomepage;

  const headerStyle = scrolled
    ? (isHomepage
        ? {
            background: 'rgba(10,10,10,0.62)',
            backdropFilter: 'saturate(150%) blur(18px)',
            WebkitBackdropFilter: 'saturate(150%) blur(18px)',
            borderBottom: '1px solid rgba(255,255,255,0.12)',
          }
        : {
            background: 'rgba(255,255,255,0.72)',
            backdropFilter: 'saturate(180%) blur(20px)',
            WebkitBackdropFilter: 'saturate(180%) blur(20px)',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
          })
    : {
        background: isHomepage ? 'transparent' : 'rgba(255,255,255,0.72)',
        backdropFilter: isHomepage ? 'none' : 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: isHomepage ? 'none' : 'saturate(180%) blur(20px)',
      };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={headerStyle}>

      <nav className="page-container flex items-center justify-between h-[var(--nav-height)]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-0.5 group">
          <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${showLight ? 'text-white' : 'text-apple-gray-900'}`}>
            HokLong
          </span>
          <span className={`text-xl font-light tracking-tight transition-colors duration-300 ${showLight ? 'text-white/60' : 'text-apple-gray-400'}`}>
            Kitchen
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={`relative text-[13px] font-medium tracking-wide py-2 transition-colors duration-300 group ${
                  isActive(link.href)
                    ? showLight ? 'text-white' : 'text-apple-gray-900'
                    : showLight
                      ? 'text-white/60 hover:text-white'
                      : 'text-apple-gray-500 hover:text-apple-gray-900'
                }`}
              >
                {link.label}
                {/* Active indicator underline */}
                <motion.span
                  className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full transition-all duration-300 ${
                    isActive(link.href)
                      ? showLight ? 'bg-white' : 'bg-apple-blue'
                      : 'bg-transparent group-hover:bg-apple-gray-300/50'
                  }`}
                  layoutId={isActive(link.href) ? 'nav-active' : undefined}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center gap-6">
          <Link
            to="/contact"
            className={`text-[13px] font-semibold tracking-tight transition-colors duration-300 ${
              showLight ? 'text-white/80 hover:text-white' : 'text-apple-blue hover:text-apple-blue-hover'
            }`}
          >
            Get a Quote
          </Link>
          <Link
            to="/products"
            className={`px-6 py-2.5 rounded-full text-[13px] font-bold tracking-tight transition-all duration-300 hover:scale-[1.04] active:scale-[0.96] shadow-2xl ${
              showLight
                ? 'bg-white text-apple-gray-900 hover:bg-white shadow-white/10'
                : 'bg-apple-gray-900 text-white hover:bg-apple-gray-800 shadow-black/10'
            }`}
          >
            Shop Now
          </Link>
        </div>

        {/* Medium Screen CTA (Just one button to avoid overlap) */}
        <div className="hidden md:flex lg:hidden items-center">
          <Link
            to="/products"
            className={`px-5 py-2 rounded-full text-[12px] font-bold tracking-tight transition-all duration-300 ${
              showLight
                ? 'bg-white text-apple-gray-900 hover:bg-white'
                : 'bg-apple-gray-900 text-white hover:bg-apple-gray-800'
            }`}
          >
            Explore
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${
            showLight
              ? 'text-white hover:bg-white/10'
              : 'text-apple-gray-600 hover:bg-apple-gray-100'
          }`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* ── Mobile Panel ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-[var(--nav-height)] z-40"
            style={{
              background: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
            }}
          >
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="px-5 sm:px-6 pt-6 pb-8 flex flex-col h-full"
            >
              {/* Links */}
              <div className="flex-1 space-y-1">
                {links.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={link.href}
                      onClick={closeMenu}
                      className={`flex items-center justify-between py-4 text-lg sm:text-xl font-semibold transition-colors duration-200 ${
                        isActive(link.href)
                          ? 'text-apple-blue'
                          : 'text-apple-gray-900 active:text-apple-gray-500'
                      }`}
                      style={{ borderBottom: '1px solid #f0f0f5' }}
                    >
                      {link.label}
                      <ChevronRight
                        size={18}
                        className={isActive(link.href) ? 'text-apple-blue' : 'text-apple-gray-300'}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-3 pt-6"
                style={{ borderTop: '1px solid #e8e8ed' }}
              >
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center w-full py-4 rounded-2xl bg-apple-blue text-white text-base font-semibold hover:bg-apple-blue-hover transition-colors duration-200 shadow-lg shadow-blue-500/20"
                >
                  Request a Quote
                </Link>
                <Link
                  to="/products"
                  onClick={closeMenu}
                  className="flex items-center justify-center w-full py-4 rounded-2xl text-apple-gray-900 text-base font-semibold transition-colors duration-200"
                  style={{ border: '1.5px solid #d2d2d7' }}
                >
                  Browse Products
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
