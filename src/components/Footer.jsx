import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-secondary/70 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-3">GenAI Solutions</h3>
            <p className="text-sm">
              Ihr Partner für innovative KI-Lösungen und digitale Transformation in Unternehmen.
            </p>
            {/* Optional: Add logo here */}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-accent transition-colors">Startseite</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">Über Mich</Link></li>
              <li><Link href="/#services" scroll={false} className="hover:text-accent transition-colors">Services (Platzhalter)</Link></li> {/* Placeholder until services pages are fully linked */}
              <li><Link href="/case-studies" className="hover:text-accent transition-colors">Fallstudien</Link></li>
              <li><Link href="/#contact" scroll={false} className="hover:text-accent transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-3">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="hover:text-accent transition-colors">Impressum (Platzhalter)</Link></li>
              <li><Link href="/datenschutz" className="hover:text-accent transition-colors">Datenschutz (Platzhalter)</Link></li>
            </ul>
            {/* Optional: Social Media Links */}
            {/* <div className="mt-4 flex space-x-4">
              <a href="#" className="text-secondary/70 hover:text-accent"><span className="sr-only">LinkedIn</span><svg>...</svg></a>
              <a href="#" className="text-secondary/70 hover:text-accent"><span className="sr-only">Xing</span><svg>...</svg></a>
            </div> */}
          </div>
        </div>
        <div className="border-t border-secondary/20 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Luis Pöhlmann - GenAI Solutions. Alle Rechte vorbehalten.</p>
          <p className="mt-1">Webseite entwickelt von [Ihr Name/Agentur falls zutreffend oder entfernen]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
