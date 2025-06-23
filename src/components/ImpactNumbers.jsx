"use client"; // For potential future animations/interactions
import React from 'react';
import { CurrencyEuroIcon, ArrowTrendingUpIcon, UserGroupIcon, CheckCircleIcon } from '@heroicons/react/24/outline'; // Example icons

const ImpactNumbers = () => {
  const metrics = [
    {
      icon: <CurrencyEuroIcon className="h-10 w-10 md:h-12 md:w-12 text-accent mb-3" />,
      number: "500.000€+", // Static number for now, animation can be added later
      label: "Jährliche Kosteneinsparungen",
      description: "Erzielt durch KI-gestützte Logistikoptimierung für einen Großkunden.",
    },
    {
      icon: <ArrowTrendingUpIcon className="h-10 w-10 md:h-12 md:w-12 text-accent mb-3" />,
      number: "25%",
      label: "Prozesseffizienz-Steigerung",
      description: "In Fertigungsumgebungen durch Implementierung von Computer Vision und Predictive Maintenance.",
    },
    {
      icon: <UserGroupIcon className="h-10 w-10 md:h-12 md:w-12 text-accent mb-3" />,
      number: "8+",
      label: "Jahre KI-Transformationserfahrung",
      description: "Führung und Umsetzung von KI-Projekten in diversen Branchen und Unternehmensgrößen.",
    },
    {
      icon: <CheckCircleIcon className="h-10 w-10 md:h-12 md:w-12 text-accent mb-3" />,
      number: "12+", // Confirm exact number with Luis
      label: "Erfolgreiche GenAI-Implementierungen",
      description: "Von der Konzeption bis zur Skalierung wertschöpfender Generative AI Lösungen.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white"> {/* Changed background for better contrast with primary sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Messbarer Impact durch KI
          </h2>
          <p className="mt-4 text-lg text-neutral max-w-2xl mx-auto">
            Wir liefern nicht nur Technologie, sondern konkrete Ergebnisse, die Ihr Geschäft voranbringen.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-xl shadow-lg text-center transition-all duration-300 transform hover:scale-105 group"
              title={metric.description} // Tooltip with description
            >
              <div className="flex justify-center mb-4">
                {metric.icon}
              </div>
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:text-primary transition-colors">
                {metric.number}
              </p>
              <h3 className="text-md md:text-lg font-semibold text-neutral group-hover:text-primary transition-colors">
                {metric.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
