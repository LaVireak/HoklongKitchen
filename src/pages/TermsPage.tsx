import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20" style={{ background: '#ffffff' }}>
        <div className="page-container max-w-3xl">
          <ScrollReveal>
            <p className="text-sm font-medium tracking-wide mb-3" style={{ color: '#86868b' }}>
              Legal
            </p>
            <h1
              className="text-4xl md:text-5xl font-semibold tracking-tight mb-8"
              style={{ color: '#1d1d1f' }}
            >
              Terms of Service
            </h1>
          </ScrollReveal>

          <div className="prose-sm space-y-6" style={{ color: '#6e6e73' }}>
            <p className="text-sm leading-relaxed">
              <strong style={{ color: '#1d1d1f' }}>Last updated:</strong> February 2026
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-3" style={{ color: '#1d1d1f' }}>
              1. Agreement to Terms
            </h2>
            <p className="text-sm leading-relaxed">
              By accessing and using the HokLong Kitchen website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-3" style={{ color: '#1d1d1f' }}>
              2. Products and Services
            </h2>
            <p className="text-sm leading-relaxed">
              All products featured on our website are subject to availability. Prices and specifications may change without notice. Formal quotes provided by our sales team supersede any website listings.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-3" style={{ color: '#1d1d1f' }}>
              3. Warranty
            </h2>
            <p className="text-sm leading-relaxed">
              All commercial equipment comes with a 5-year manufacturer warranty covering parts and labour under normal commercial use. Extended warranty options are available upon request.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-3" style={{ color: '#1d1d1f' }}>
              4. Limitation of Liability
            </h2>
            <p className="text-sm leading-relaxed">
              HokLong Kitchen shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services beyond the purchase price of the equipment.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-3" style={{ color: '#1d1d1f' }}>
              5. Contact
            </h2>
            <p className="text-sm leading-relaxed">
              For questions about these terms, please{' '}
              <Link to="/contact" className="font-medium hover:underline underline-offset-4" style={{ color: '#0071e3' }}>
                contact us
              </Link>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
