// app/page.js
import Hero from '@/components/Hero';
import ProcessSection from '@/components/ProcessSection';
import WhyMeSection from '@/components/WhyMeSection';
import ContactForm from '@/components/ContactForm';
import Menu from '@/components/Menu'; // Import the Menu component

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Menu /> {/* Add the Menu component at the top */}
      <Hero />
      {/* Remove UseCaseValidator from the homepage */}
      <ProcessSection />
      <WhyMeSection />
      <ContactForm />
    </div>
  );
}
