// src/app/showcases/page.js
import Menu from '@/components/Menu';
import Link from 'next/link';
import CaseStudyCard from '@/components/CaseStudyCard';
import caseStudies from '@/app/showcases/data/caseStudies'; // Assuming this path is correct and data is updated
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

export default function ShowcasesPage() {
  return (
    <div className="bg-secondary min-h-screen"> {/* Ensure page has a background */}
      <Menu />
      <main className="pt-20"> {/* Add padding top to account for fixed menu */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Erfolgsgeschichten aus der Praxis
            </h1>
            <p className="text-lg text-neutral max-w-2xl mx-auto">
              Entdecken Sie, wie wir Unternehmen wie Ihres dabei unterstützt haben, durch maßgeschneiderte GenAI-Lösungen echten Mehrwert zu generieren und Innovationspotenziale zu heben.
            </p>
          </div>

          {caseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {caseStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </div>
          ) : (
            <div className="text-center text-neutral py-10">
              <p className="text-xl mb-4">Derzeit sind keine Fallstudien verfügbar.</p>
              <p>Bitte schauen Sie bald wieder vorbei oder kontaktieren Sie uns, um mehr über unsere Projekte zu erfahren.</p>
            </div>
          )}

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