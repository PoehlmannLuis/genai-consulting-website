"use client"; // Required for useState and useEffect
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Icons for mobile menu

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = "text-neutral hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium";
  const mobileNavLinkClasses = "block text-neutral hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md text-base font-medium"; // Slightly larger for mobile

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-secondary shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className={`font-bold text-xl ${isScrolled || isOpen ? 'text-primary' : 'text-secondary hover:text-neutral'}`}>
              GenAI Solutions
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={navLinkClasses}>Startseite</Link>
              <Link href="/#process" scroll={true} className={navLinkClasses}>Unser Prozess</Link> {/* Example for internal link */}
              <Link href="/#why-us" scroll={true} className={navLinkClasses}>Warum wir?</Link> {/* Example for internal link */}
              <Link href="/showcases" className={navLinkClasses}>Showcases</Link>
              <Link href="/roi" className={navLinkClasses}>Potenzialanalyse</Link>
              <Link href="/#contact" scroll={true} className="bg-accent text-secondary px-4 py-2 rounded-md text-sm font-medium hover:bg-accent/90 transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled || isOpen ? 'text-primary' : 'text-secondary'} hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary`}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Hauptmenü öffnen</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-secondary shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className={mobileNavLinkClasses} onClick={toggleMenu}>Startseite</Link>
            <Link href="/#process" scroll={true} className={mobileNavLinkClasses} onClick={toggleMenu}>Unser Prozess</Link>
            <Link href="/#why-us" scroll={true} className={mobileNavLinkClasses} onClick={toggleMenu}>Warum wir?</Link>
            <Link href="/showcases" className={mobileNavLinkClasses} onClick={toggleMenu}>Showcases</Link>
            <Link href="/roi" className={mobileNavLinkClasses} onClick={toggleMenu}>Potenzialanalyse</Link>
            <Link href="/#contact" scroll={true} className={`${mobileNavLinkClasses} bg-accent text-secondary hover:bg-accent/90 w-full text-center`} onClick={toggleMenu}>
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
