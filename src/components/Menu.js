// components/Menu.js
import Link from 'next/link';

export default function Menu() {
  return (
    <nav className="bg-secondary py-4"> {/* bg-gray-100 replaced with bg-secondary */}
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-neutral"> {/* text-gray-800 replaced with text-neutral */}
          Mehrwert durch KI erfahren {/* Replace with your website name or logo */}
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-neutral hover:text-primary"> {/* text-gray-700 replaced with text-neutral, hover:text-gray-900 replaced with hover:text-primary */}
            Startseite
          </Link>
          <Link href="/roi" className="text-neutral hover:text-primary"> {/* text-gray-700 replaced with text-neutral, hover:text-gray-900 replaced with hover:text-primary */}
            ROI Berechnung
          </Link>
          {/* Add more menu items as needed */}
          {/* Example:
          <Link href="/services" className="text-neutral hover:text-primary">
            Services
          </Link>
          <Link href="/about" className="text-neutral hover:text-primary">
            Über mich
          </Link>
          */}
        </div>
      </div>
    </nav>
  );
}
