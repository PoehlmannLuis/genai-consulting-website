// app/page.js
import Hero from '@/components/Hero';
import ImpactNumbers from '@/components/ImpactNumbers'; // Import the new component
import ProcessSection from '@/components/ProcessSection';
import WhyMeSection from '@/components/WhyMeSection';
import ContactForm from '@/components/ContactForm';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer'; // Import Footer

export default function HomePage() {
  return (
    <div className="bg-secondary flex flex-col min-h-screen"> {/* Ensure a base background and full height */}
      <Menu />
      <main className="flex-grow"> {/* Wrap sections in main for semantic HTML and allow footer to push down */}
        <Hero />
        <ImpactNumbers /> {/* Add the ImpactNumbers section here */}
        <section id="process">
          <ProcessSection />
        </section>
        <section id="why-us">
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
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer /> {/* Add Footer to the end of the page */}
    </div>
  );
}
