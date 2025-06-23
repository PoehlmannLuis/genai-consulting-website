// app/roi/page.js
import UseCaseValidator from '@/components/UseCaseValidator';
import ContactForm from '@/components/ContactForm';
import Menu from '@/components/Menu';
import Link from 'next/link';
import { ArrowLeftIcon, LightBulbIcon } from '@heroicons/react/24/solid';

export default function RoiPage() {
  return (
    <div className="bg-secondary min-h-screen"> {/* Consistent page background */}
      <Menu />
      <main className="pt-20"> {/* Padding for fixed menu */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              GenAI Potenzialanalyse für Ihr Unternehmen
            </h1>
            <p className="text-lg text-neutral max-w-3xl mx-auto">
              Nutzen Sie unseren interaktiven Rechner, um eine erste Einschätzung des potenziellen ROI durch den Einsatz von Generativer KI in spezifischen Unternehmensbereichen zu erhalten. Identifizieren Sie vielversprechende Anwendungsfälle und verstehen Sie den möglichen Mehrwert.
            </p>
          </div>

          <UseCaseValidator />

          <section id="contact" className="mt-16 md:mt-24"> {/* Added ID for menu linking */}
            <ContactForm />
          </section>

          <div className="mt-12 md:mt-16 text-center">
            <Link href="/" className="inline-flex items-center text-accent hover:text-primary font-medium transition-colors duration-300 group">
              <ArrowLeftIcon className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
