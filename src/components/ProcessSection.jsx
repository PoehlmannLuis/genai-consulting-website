"use client";
import React from 'react'; // Removed useState as it's not directly used in ProcessStep anymore for hover
import { motion } from 'framer-motion'; // For animations

// Simplified ProcessStep, hover effect can be managed by CSS if complex JS interaction isn't needed,
// or parent component can manage active state if necessary for more complex interactions.
// For this refactor, we'll rely on Tailwind's hover variants for simplicity.
const ProcessStep = ({ icon, title, description, phase }) => {
    return (
        <motion.div
            className="p-6 rounded-lg shadow-lg bg-secondary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center md:text-left md:items-start"
            whileHover={{ scale: 1.03 }}
        >
            <div className="text-accent text-5xl mb-4">{icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-primary">{title}</h3>
            <p className="text-neutral text-base leading-relaxed mb-2">{description}</p>
            <p className="text-sm text-accent font-medium">{phase}</p>
        </motion.div>
    );
};

export default function ProcessSection() {
    const processSteps = [
        {
            icon: "🧭",
            title: "Strategie & Identifikation",
            description: "Gemeinsam identifizieren wir GenAI-Anwendungsfälle mit dem höchsten Wertschöpfungspotenzial für Ihr Unternehmen. Wir analysieren Ihre aktuellen Prozesse und Datenlandschaft, um maßgeschneiderte Strategien zu entwickeln.",
            phase: "Phase 1: Finden & Evaluieren"
        },
        {
            icon: "💡",
            title: "Entwicklung & Prototyping",
            description: "Wir entwickeln iterative Prototypen und Proof-of-Concepts (PoCs), um die technische Machbarkeit und den Business Value schnell zu validieren. Dabei setzen wir auf agile Methoden und modernste GenAI-Modelle und Plattformen.",
            phase: "Phase 2: Entwickeln"
        },
        {
            icon: "🚀",
            title: "Implementierung & Skalierung",
            description: "Erfolgreiche GenAI-Lösungen integrieren wir nahtlos in Ihre bestehende IT-Infrastruktur und Geschäftsprozesse. Wir unterstützen Sie bei der Skalierung, dem Monitoring und der kontinuierlichen Optimierung.",
            phase: "Phase 3: Deployen & Optimieren"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white"> {/* Changed background for contrast with cards */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                        Von der Idee zur Wertschöpfung: Unser GenAI-Implementierungsansatz
                    </h2>
                    <p className="text-lg text-neutral max-w-2xl mx-auto">
                        Wir begleiten Sie partnerschaftlich in jeder Phase Ihrer GenAI-Reise, um sicherzustellen, dass Lösungen nicht nur innovativ, sondern auch nachhaltig erfolgreich sind.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {processSteps.map((step, index) => (
                        <ProcessStep
                            key={index}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                            phase={step.phase}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
