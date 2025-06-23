import Menu from '@/components/Menu';
import AboutContent from '@/components/AboutPage/AboutContent'; // Will create this next
import Footer from '@/components/Footer'; // Assuming a Footer component exists or will be created

export default function AboutPage() {
  return (
    <div className="bg-secondary min-h-screen flex flex-col">
      <Menu />
      <main className="flex-grow pt-20"> {/* pt-20 for fixed menu */}
        <AboutContent />
      </main>
      <Footer /> {/* Assuming a Footer component */}
    </div>
  );
}
