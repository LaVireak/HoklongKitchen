import { Link } from "react-router-dom";
import HotspotSection from "../components/HotspotSection";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";

export default function StudioPage() {
  return (
    <>
      {/* Interactive Section — reuse existing component */}
      <HotspotSection />

      {/* About the Studio */}
      <section className="py-16 md:py-24" style={{ background: "#f5f5f7" }}>
        <div className="page-container max-w-3xl text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight mb-5"
              style={{ color: "#1d1d1f" }}
            >
              Design. Plan. Build.
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: "#6e6e73" }}
            >
              Our Kitchen Studio service takes you from initial concept to final
              installation. We work alongside architects and chefs to create
              kitchen environments that maximise workflow efficiency, meet
              regulatory standards, and look stunning.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-lg"
                style={{ background: "#0071e3" }}
              >
                Book a Consultation
              </Link>
              <Link
                to="/products"
                className="px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300"
                style={{ border: "1px solid #d2d2d7", color: "#424245" }}
              >
                Browse Equipment
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </>
  );
}
