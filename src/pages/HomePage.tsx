import { motion, type Transition } from 'framer-motion';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import ProductGrid from '../components/ProductGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import CommercialSection from '../components/CommercialSection';
import HotspotSection from '../components/HotspotSection';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import { usePageMeta } from '../hooks/usePageMeta';

const fadeInTransition: Transition = { 
  duration: 0.8, 
  ease: [0.22, 1, 0.36, 1] 
};

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: fadeInTransition
};

export default function HomePage() {
  usePageMeta({
    title: 'HokLong Kitchen — Professional Kitchen Equipment & Installation',
    description:
      'Premium commercial kitchen equipment, expert installation services, and project portfolio for restaurants, hotels, and culinary spaces.',
  });

  return (
    <div className="overflow-hidden">
      <Hero />
      <motion.div {...fadeIn}>
        <ProductShowcase />
      </motion.div>
      <motion.div {...fadeIn}>
        <ProductGrid />
      </motion.div>
      <motion.div {...fadeIn}>
        <WhyChooseUs />
      </motion.div>
      <motion.div {...fadeIn}>
        <CommercialSection />
      </motion.div>
      <motion.div {...fadeIn} className="section-spacing">
        <HotspotSection />
      </motion.div>
      <motion.div {...fadeIn} className="section-spacing">
        <Testimonials />
      </motion.div>
      <motion.div {...fadeIn} className="section-spacing">
        <FAQSection />
      </motion.div>
      <Footer />
    </div>
  );
}
