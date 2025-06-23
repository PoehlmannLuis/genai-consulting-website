"use client"; // For potential future interactivity, though not strictly needed for this static version
import React from 'react';
import Link from 'next/link'; // For internal links

const AboutContent = () => {
  // Placeholder data - to be filled or provided by Luis
  const careerTimeline = [
    {
      role: "Head of AI Business Stream",
      company: "evosoft GmbH (A Siemens Company)",
      dates: "YYYY - Present",
      description: "Leading strategic AI initiatives, developing and deploying enterprise-grade AI solutions, focusing on GenAI, MLOps, and Computer Vision for industrial applications within the Siemens ecosystem. Responsible for business development, team leadership, and project execution, bridging the gap between complex business challenges and cutting-edge AI technologies.",
    },
    {
      role: "Research Assistant / PhD Candidate (External with evosoft)",
      company: "FHWS Würzburg & evosoft GmbH",
      dates: "YYYY - YYYY",
      description: "Conducted research on fast and efficient object detection for edge devices, contributing to advancements in deploying AI in resource-constrained environments. Applied research findings to practical industrial problems.",
    },
    {
      role: "Dual Study Electrical Engineering / Electronics Technician Apprenticeship",
      company: "Bosch Rexroth & Siemens",
      dates: "YYYY - YYYY",
      description: "Gained foundational experience in electrical engineering, industrial automation, and system integration through a comprehensive dual study program and apprenticeship, providing a strong practical basis for later AI work in industrial settings.",
    },
  ];

  const education = [
    {
      degree: "M.Sc. Information Systems",
      institution: "University of Applied Sciences Würzburg-Schweinfurt (FHWS)",
      year: "YYYY",
      thesisTitle: "Fast and efficient object detection for edge devices",
      thesisLink: "#placeholder-msc-thesis", // Placeholder link
      description: "Specialized in applied AI, machine learning, and data science with a focus on practical implementation for real-world problems."
    },
    {
      degree: "B.Eng. Electrical Engineering & Information Technology",
      institution: "Technische Hochschule Nürnberg Georg Simon Ohm",
      year: "YYYY",
      thesisTitle: "Reinforcement Learning for industrial plant control (Concept & Simulation)",
      thesisLink: "#placeholder-beng-thesis", // Placeholder link
      description: "Focused on automation technology, control systems, and the fundamentals of information technology in engineering contexts."
    },
  ];

  const certificationsPlaceholder = "[Eine umfassende Liste der Zertifizierungen und Schulungen wird von Luis bereitgestellt. Beispiele: Azure AI Engineer, Certified Scrum Master, Siemens Industrial AI Trainings, etc.]";
  const cvDownloadLink = "#placeholder-cv-download"; // Placeholder link

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
          Über Luis Pöhlmann
        </h1>
        <p className="text-xl text-neutral max-w-2xl mx-auto">
          Ein erfahrener KI-Experte mit einer Leidenschaft für die Transformation von Unternehmen durch innovative und pragmatische KI-Lösungen.
        </p>
      </header>

      {/* Professional Headshot Placeholder */}
      <div className="mb-12 md:mb-16 text-center">
        <div className="w-48 h-48 md:w-60 md:h-60 bg-neutral/20 rounded-full mx-auto flex items-center justify-center text-neutral/70">
          [Professionelles Porträtfoto]
        </div>
      </div>

      {/* Introduction Section */}
      <section className="mb-12 md:mb-16 text-lg text-neutral leading-relaxed max-w-3xl mx-auto text-center">
        <p className="mb-4">
          Mit über 8 Jahren Erfahrung in der Konzeption und Implementierung von KI-Systemen, insbesondere in industriellen Umfeldern, helfe ich Unternehmen, das volle Potenzial von Technologien wie Generative AI, Machine Learning und Computer Vision auszuschöpfen. Mein Fokus liegt darauf, komplexe Herausforderungen in messbare Geschäftsergebnisse umzuwandeln.
        </p>
        <p>
          Vom globalen Konzern bis zum agilen Mittelständler – mein Ziel ist es, KI-Strategien zu entwickeln, die nicht nur technologisch fortschrittlich, sondern auch nachhaltig und wertschöpfend sind.
        </p>
      </section>

      {/* Career Timeline Section */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Beruflicher Werdegang</h2>
        <div className="relative border-l-4 border-primary/30 pl-6 space-y-10">
          {/* Placeholder for actual timeline visualization library if desired */}
          {careerTimeline.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[34px] top-1 w-6 h-6 bg-accent rounded-full border-4 border-secondary"></div>
              <h3 className="text-xl font-semibold text-primary mb-1">{item.role}</h3>
              <p className="text-md font-medium text-accent mb-1">{item.company} ({item.dates})</p>
              <p className="text-neutral/90 text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-neutral">
            * Detailliertere Informationen und Projekterfahrungen sind im <Link href={cvDownloadLink} className="text-accent hover:underline">vollständigen Lebenslauf</Link> verfügbar.
        </p>
      </section>

      {/* Education Section */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Ausbildung</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-1">{edu.degree}</h3>
              <p className="text-md font-medium text-accent mb-2">{edu.institution} ({edu.year})</p>
              <p className="text-neutral/90 text-sm mb-1"><strong>Abschlussarbeit:</strong> {edu.thesisTitle}</p>
              {/* <Link href={edu.thesisLink} className="text-accent hover:underline text-sm block mb-2">Details zur Abschlussarbeit (Platzhalter)</Link> */}
              <p className="text-neutral/80 text-sm leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Zertifizierungen & Weiterbildungen</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <p className="text-neutral leading-relaxed italic">
            {certificationsPlaceholder}
          </p>
          <p className="mt-4 text-sm text-neutral">Eine vollständige Liste ist auf Anfrage und im <Link href={cvDownloadLink} className="text-accent hover:underline">Lebenslauf</Link> enthalten.</p>
        </div>
      </section>

      {/* CV Download Placeholder */}
      <section className="text-center mb-12 md:mb-16">
          <Link href={cvDownloadLink} passHref>
              <button className="bg-accent text-secondary px-8 py-3 rounded-lg text-lg hover:bg-accent/90 transition-colors transform hover:scale-105 active:scale-95">
                  Vollständigen Lebenslauf herunterladen (PDF)
              </button>
          </Link>
          <p className="text-xs text-neutral mt-2">(Platzhalter für CV-Download)</p>
      </section>

      {/* Call to Action */}
      <section className="text-center py-10 bg-primary rounded-lg">
        <h2 className="text-3xl font-semibold text-secondary mb-6">Interessiert an einer Zusammenarbeit?</h2>
        <p className="text-secondary/90 mb-8 max-w-xl mx-auto">
          Lassen Sie uns besprechen, wie ich Ihr Unternehmen mit maßgeschneiderten KI-Lösungen unterstützen kann.
        </p>
        <Link href="/#contact" passHref>
          <button className="bg-secondary text-primary px-10 py-3 rounded-lg text-lg font-semibold hover:bg-secondary/90 transition-colors transform hover:scale-105 active:scale-95">
            Kontakt aufnehmen
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AboutContent;
