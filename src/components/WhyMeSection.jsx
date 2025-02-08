"use client";
import React from 'react';
import Image from 'next/image';

export default function WhyMeSection() {
    return (
        <section className="py-20 bg-secondary"> {/* bg-gray-100 replaced with bg-secondary */}
            <div className="container mx-auto px-4 text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <Image
                        src="/ai-farmer.png" // Place "ai-farmer.png" in your public folder
                        alt="Luis Poehlmann - AI-Bauer mit Laptop"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-md mx-auto md:mx-0"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-primary">Warum Ich? Pragmatisch. Direkt. Bayerisch.</h2> {/* text-3xl font-bold mb-6 and added text-primary */}
                    <ul className="mb-6">
                        <li className="mb-2"><span className="font-bold text-accent">5 Jahre</span> Industrieerfahrung in GenAI-Projekten</li> {/* growth-green-text replaced with text-accent */}
                        <li className="mb-2"><span className="font-bold text-accent">12+</span> erfolgreich umgesetzte GenAI Use-Cases</li> {/* growth-green-text replaced with text-accent */}
                        <li><span className="font-bold text-accent">100%</span> Kundenzufriedenheit (bisher 😉)</li> {/* growth-green-text replaced with text-accent */}
                    </ul>
                    <blockquote className="italic text-neutral"> {/* text-gray-700 replaced with text-neutral */}
                        „Keine Buzzwords, nur Ergebnisse: Wenn’s keinen Mehrwert bringt, mach ich’s nicht.“
                        <footer className="blockquote-footer mt-2 text-neutral">Luis Poehlmann, GenAI Consultant</footer> {/* text-gray-700 replaced with text-neutral */}
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
