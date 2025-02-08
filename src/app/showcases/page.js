// src/app/showcases/page.js
import Menu from '@/components/Menu';
import Link from 'next/link';
import CaseStudyCard from '@/components/CaseStudyCard';
import caseStudies from '@/app/showcases/data/caseStudies';

export default function ShowcasesPage() {
  return (
    <div className="overflow-hidden">
      <Menu />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">AI Impact Showcase</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-500 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}