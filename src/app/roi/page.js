// app/roi/page.js
import UseCaseValidator from '@/components/UseCaseValidator';
import ContactForm from '@/components/ContactForm'; // You can reuse ContactForm or create a simpler contact section
import Menu from '@/components/Menu'; // Import the Menu component
import Link from 'next/link'; // Import Link for "Back to Home"


export default function RoiPage() {
  return (
    <div className="overflow-hidden">
      <Menu /> {/* Add the Menu component at the top */}
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">GenAI ROI Calculator</h1> {/* Page Title */}
        <UseCaseValidator />

        <section className="mt-12 py-10 bg-gray-50 rounded-lg shadow-md">
          <div className="container mx-auto px-4 text-center">
            <ContactForm /> {/* TODO Reuse your ContactForm component here */}
          </div>
        </section>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-500 hover:underline">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
