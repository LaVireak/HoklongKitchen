import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
          </ScrollReveal>

          <div className="prose-sm space-y-6" style={{ color: '#6e6e73' }}>
            <p className="text-sm leading-relaxed">
              <strong style={{ color: '#1d1d1f' }}>Last updated:</strong> February 2026
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-3" style={{ color: '#1d1d1f' }}>
              Information We Collect
            </h2>
            <p className="text-sm leading-relaxed">
              We collect information you provide directly, such as your name, email address, phone number, and message content when you submit a contact form or request a quote. We also collect standard server logs and analytics data to improve our services.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-3" style={{ color: '#1d1d1f' }}>
              How We Use Your Information
            </h2>
            <p className="text-sm leading-relaxed">
              Your information is used to respond to inquiries, provide quotes, deliver our services, and improve user experience. We do not sell your personal information to third parties.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-3" style={{ color: '#1d1d1f' }}>
              Data Security
            </h2>
            <p className="text-sm leading-relaxed">
              We implement industry-standard security measures to protect your personal information. However, no method of internet transmission is 100% secure.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-3" style={{ color: '#1d1d1f' }}>
              Contact
            </h2>
            <p className="text-sm leading-relaxed">
              For privacy-related questions, please{' '}
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
