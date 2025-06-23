// app/page.js
import Hero from '@/components/Hero';
import ProcessSection from '@/components/ProcessSection';
import WhyMeSection from '@/components/WhyMeSection';
import ContactForm from '@/components/ContactForm';
import Menu from '@/components/Menu';
// Removed UseCaseValidator from direct import, as it's on the /roi page.
// Consider adding a "Call to Action" component for the ROI page if needed.

export default function HomePage() {
  return (
    <div className="bg-secondary"> {/* Ensure a base background for the page */}
      <Menu />
      <Hero />
      <main> {/* Wrap sections in main for semantic HTML */}
        <section id="process"> {/* ID for menu linking */}
          <ProcessSection />
        </section>
        <section id="why-us"> {/* ID for menu linking */}
          <WhyMeSection />
        </section>
        {/* Optional: Add a CTA section for ROI calculator or Showcases */}
        {/*
        <section className="py-16 md:py-24 bg-primary text-secondary text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Entdecken Sie Ihr GenAI-Potenzial!</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nutzen Sie unseren Rechner für eine schnelle Potenzialanalyse oder sehen Sie sich unsere erfolgreichen Kundenprojekte an.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/roi" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Zur Potenzialanalyse
              </Link>
              <Link href="/showcases" className="bg-transparent border-2 border-secondary hover:bg-secondary hover:text-primary text-secondary font-semibold px-8 py-3 rounded-lg transition-colors">
                Zu den Showcases
              </Link>
            </div>
          </div>
        </section>
        */}
        <section id="contact"> {/* ID for menu linking */}
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
