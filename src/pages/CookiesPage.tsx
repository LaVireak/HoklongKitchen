import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';

export default function CookiesPage() {
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
              Cookie Policy
            </h1>
          </ScrollReveal>

          <div className="prose-sm space-y-6" style={{ color: '#6e6e73' }}>
            <p className="text-sm leading-relaxed">
              <strong style={{ color: '#1d1d1f' }}>Last updated:</strong> February 2026
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-3" style={{ color: '#1d1d1f' }}>
              What Are Cookies
            </h2>
            <p className="text-sm leading-relaxed">
              Cookies are small text files stored on your device when you visit our website. They help us provide a better experience by remembering your preferences and understanding how you use our site.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-3" style={{ color: '#1d1d1f' }}>
              How We Use Cookies
            </h2>
            <p className="text-sm leading-relaxed">
              We use essential cookies for website functionality and analytics cookies to understand site usage. We do not use advertising or tracking cookies from third parties.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-3" style={{ color: '#1d1d1f' }}>
              Managing Cookies
            </h2>
            <p className="text-sm leading-relaxed">
              You can control cookies through your browser settings. Disabling cookies may affect some website functionality. Most browsers allow you to refuse or delete cookies.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-3" style={{ color: '#1d1d1f' }}>
              Contact
            </h2>
            <p className="text-sm leading-relaxed">
              For cookie-related questions, please{' '}
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
