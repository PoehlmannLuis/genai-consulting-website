import './globals.css'
import { GeistSans } from 'geist/font/sans'; // Using Geist Sans as per new Next.js projects
import { GeistMono } from 'geist/font/mono';   // Using Geist Mono as per new Next.js projects


export const metadata = {
  title: 'GenAI Solutions | Ihr Partner für KI in Unternehmen',
  description: 'Wir helfen Unternehmen, das Potenzial von Generativer KI (GenAI) zu erschließen – von Strategie bis Implementierung. Steigern Sie Effizienz und Innovation.',
  keywords: 'Generative KI, GenAI, Künstliche Intelligenz, Unternehmensberatung, KI Lösungen, AI Consulting, Digitale Transformation, Prozessoptimierung, Innovation',
  authors: [{ name: 'GenAI Solutions Team' }], // Or your specific name/company
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow' // SEO good practice
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-secondary text-neutral antialiased"> {/* Added base styling for body */}
        {children}
      </body>
    </html>
  )
}
