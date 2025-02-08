"use client";
import React from 'react';

const ProcessStep = ({ icon, title, description, caseStudy }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className="p-6 rounded-lg shadow-md bg-secondary hover:shadow-lg transition-shadow duration-300 relative" // bg-white replaced with bg-secondary
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="text-accent text-4xl mb-4">{icon}</div> {/* text-cta-orange replaced with text-accent */}
            <h3 className="text-xl font-semibold mb-2 text-neutral">{title}</h3> {/* text-gray-700 implicitly replaced with text-neutral for better contrast, and added text-neutral class */}
            <p className="text-neutral">{description}</p> {/* text-gray-700 replaced with text-neutral */}
            {isHovered && caseStudy && (
                <div className="absolute top-0 left-0 w-full h-full bg-primary/75 text-secondary flex items-center justify-center rounded-lg p-4"> {/* bg-black bg-opacity-75 replaced with bg-primary/75, text-white replaced with text-secondary */}
                    <p className="text-center">{caseStudy}</p>
                </div>
            )}
        </div>
    );
};

export default function ProcessSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12 text-primary">Unser pragmatischer 3-Schritte-Prozess</h2> {/* Added text-primary to heading for color consistency with palette */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ProcessStep
                        icon="🔍"
                        title="Use-Case-Findung"
                        description="Datenanalyse & Workshop zur Identifizierung profitabler GenAI-Anwendungen."
                        caseStudy="Case Study: Robotersteuerung mit GPT-4 – 30% schnellere Inbetriebnahme"
                    />
                    <ProcessStep
                        icon="🤖"
                        title="Lösungsentwicklung"
                        description="Prototyping & Entwicklung maßgeschneiderter GenAI-Lösungen mit LLMs."
                        caseStudy="Case Study: GenAI Chatbots für Kundensupport – 30% höhere Lösungsrate"
                    />
                    <ProcessStep
                        icon="🚀"
                        title="Umsetzung & Skalierung"
                        description="Integration in Ihre Prozesse & Skalierung für nachhaltigen ROI."
                        caseStudy="Case Study: GenAI für Workflow-Orchestrierung – 40% Kostenreduktion in Rechnungsverarbeitung"
                    />
                </div>
            </div>
        </section>
    );
}
