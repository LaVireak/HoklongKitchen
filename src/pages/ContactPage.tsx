import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { fadeUp } from '../lib/animations';
import Footer from '../components/Footer';
import { usePageMeta } from '../hooks/usePageMeta';
import {
  validateContactForm,
  type ContactFormInput,
  type ContactFormErrors,
} from '../dto/contactForm.dto';

const contactInfo = [
  { icon: MapPin, label: 'Visit us', value: 'Phnom Penh, Cambodia' },
  { icon: Phone, label: 'Call us', value: '+855 12 345 678' },
  { icon: Mail, label: 'Email us', value: 'info@hoklongkitchen.com' },
];

export default function ContactPage() {
  usePageMeta({
    title: 'Contact Us — HokLong Kitchen',
    description:
      'Contact HokLong Kitchen for commercial kitchen equipment quotes, installation consultation, and project support.',
  });

  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { data, errors: validationErrors } = validateContactForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // In production, this would POST to an API
      setFormData(data);
      setSubmitted(true);
    }
  };

  const handleChange = (field: keyof ContactFormInput, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16" style={{ background: '#ffffff' }}>
        <div className="page-container text-center">
          <ScrollReveal>
            <p className="text-sm font-medium tracking-wide mb-3" style={{ color: '#0071e3' }}>
              Contact Us
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tight mb-5"
              style={{ color: '#1d1d1f' }}
            >
              Let's build your
              <br />
              <span style={{ color: '#86868b' }}>perfect kitchen.</span>
            </h1>
            <p className="text-base md:text-lg max-w-[520px] mx-auto" style={{ color: '#6e6e73' }}>
              Free consultation · Custom quotes within 24 hours · No obligation
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-12 md:py-20" style={{ background: '#ffffff' }}>
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div
                className="rounded-2xl p-8 md:p-10"
                style={{ background: '#f5f5f7', border: '1px solid #e8e8ed' }}
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                        style={{ background: '#e1f0ff' }}
                      >
                        <CheckCircle size={32} style={{ color: '#0071e3' }} />
                      </div>
                      <h3
                        className="text-2xl font-semibold mb-3"
                        style={{ color: '#1d1d1f' }}
                      >
                        Message sent!
                      </h3>
                      <p className="text-base mb-6" style={{ color: '#6e6e73' }}>
                        Thank you for reaching out. Our team will get back to you
                        within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
                          setErrors({});
                        }}
                        className="text-sm font-medium hover:underline underline-offset-4"
                        style={{ color: '#0071e3' }}
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <h3
                        className="text-xl font-semibold mb-6"
                        style={{ color: '#1d1d1f' }}
                      >
                        Request a Quote
                      </h3>

                      {/* Name */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-medium mb-1.5"
                          style={{ color: '#1d1d1f' }}
                        >
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          autoComplete="name"
                          maxLength={80}
                          required
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'contact-name-error' : undefined}
                          className="w-full px-4 py-3 rounded-xl text-sm transition-colors focus:outline-none"
                          style={{
                            background: '#ffffff',
                            border: errors.name ? '1px solid #ff3b30' : '1px solid #d2d2d7',
                            color: '#1d1d1f',
                          }}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p id="contact-name-error" className="text-xs mt-1" style={{ color: '#ff3b30' }}>
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-medium mb-1.5"
                          style={{ color: '#1d1d1f' }}
                        >
                          Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          autoComplete="email"
                          inputMode="email"
                          maxLength={120}
                          required
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'contact-email-error' : undefined}
                          className="w-full px-4 py-3 rounded-xl text-sm transition-colors focus:outline-none"
                          style={{
                            background: '#ffffff',
                            border: errors.email ? '1px solid #ff3b30' : '1px solid #d2d2d7',
                            color: '#1d1d1f',
                          }}
                          placeholder="you@restaurant.com"
                        />
                        {errors.email && (
                          <p id="contact-email-error" className="text-xs mt-1" style={{ color: '#ff3b30' }}>
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-sm font-medium mb-1.5"
                          style={{ color: '#1d1d1f' }}
                        >
                          Phone (optional)
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          autoComplete="tel"
                          inputMode="tel"
                          maxLength={30}
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                          className="w-full px-4 py-3 rounded-xl text-sm transition-colors focus:outline-none"
                          style={{
                            background: '#ffffff',
                            border: errors.phone ? '1px solid #ff3b30' : '1px solid #d2d2d7',
                            color: '#1d1d1f',
                          }}
                          placeholder="+855 12 345 678"
                        />
                        {errors.phone && (
                          <p id="contact-phone-error" className="text-xs mt-1" style={{ color: '#ff3b30' }}>
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Interest */}
                      <div>
                        <label
                          htmlFor="contact-interest"
                          className="block text-sm font-medium mb-1.5"
                          style={{ color: '#1d1d1f' }}
                        >
                          Product Interest
                        </label>
                        <select
                          id="contact-interest"
                          value={formData.interest}
                          onChange={(e) => handleChange('interest', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl text-sm transition-colors focus:outline-none appearance-none"
                          style={{
                            background: '#ffffff',
                            border: '1px solid #d2d2d7',
                            color: formData.interest ? '#1d1d1f' : '#86868b',
                          }}
                        >
                          <option value="">Select a category</option>
                          <option value="ovens">Convection Ovens</option>
                          <option value="refrigeration">Refrigeration</option>
                          <option value="mixers">Industrial Mixers</option>
                          <option value="prep">Prep Stations</option>
                          <option value="ventilation">Ventilation</option>
                          <option value="dishwashers">Dishwashers</option>
                          <option value="full-kitchen">Full Kitchen Design</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-sm font-medium mb-1.5"
                          style={{ color: '#1d1d1f' }}
                        >
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          minLength={10}
                          maxLength={1000}
                          required
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? 'contact-message-error' : undefined}
                          className="w-full px-4 py-3 rounded-xl text-sm transition-colors focus:outline-none resize-none"
                          style={{
                            background: '#ffffff',
                            border: errors.message ? '1px solid #ff3b30' : '1px solid #d2d2d7',
                            color: '#1d1d1f',
                          }}
                          placeholder="Tell us about your project..."
                        />
                        {errors.message && (
                          <p id="contact-message-error" className="text-xs mt-1" style={{ color: '#ff3b30' }}>
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                        style={{ background: '#0071e3' }}
                      >
                        <Send size={14} />
                        Send Message
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 p-5 rounded-xl"
                    style={{ background: '#f5f5f7', border: '1px solid #e8e8ed' }}
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: '#e1f0ff' }}
                    >
                      <info.icon size={18} style={{ color: '#0071e3' }} />
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-0.5" style={{ color: '#86868b' }}>
                        {info.label}
                      </p>
                      <p className="text-sm font-medium" style={{ color: '#1d1d1f' }}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Quick links */}
                <div
                  className="p-5 rounded-xl"
                  style={{ background: '#f5f5f7', border: '1px solid #e8e8ed' }}
                >
                  <p className="text-xs font-medium mb-3" style={{ color: '#86868b' }}>
                    Quick Links
                  </p>
                  <div className="space-y-2">
                    <Link
                      to="/products"
                      className="block text-sm font-medium hover:underline underline-offset-4"
                      style={{ color: '#0071e3' }}
                    >
                      Browse Products &rsaquo;
                    </Link>
                    <Link
                      to="/solutions"
                      className="block text-sm font-medium hover:underline underline-offset-4"
                      style={{ color: '#0071e3' }}
                    >
                      View Solutions &rsaquo;
                    </Link>
                    <Link
                      to="/faq"
                      className="block text-sm font-medium hover:underline underline-offset-4"
                      style={{ color: '#0071e3' }}
                    >
                      FAQ &rsaquo;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20" style={{ background: '#ffffff' }}>
        <div className="page-container">
          <ScrollReveal>
            <div className="mb-6 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3" style={{ color: '#1d1d1f' }}>
                Find Us
              </h2>
              <p className="text-base" style={{ color: '#6e6e73' }}>
                Visit our showroom and consultation center in Phnom Penh.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #e8e8ed' }}>
              <iframe
                title="HokLong Kitchen Location Map"
                src="https://www.google.com/maps?q=Phnom%20Penh%20Cambodia&z=13&output=embed"
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: 'block' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </>
  );
}
