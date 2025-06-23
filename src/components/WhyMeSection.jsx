"use client";
import React from 'react';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Example icon

export default function WhyMeSection() {
    const benefits = [
        { text: "Tiefgreifende Expertise in Unternehmens-KI und GenAI-Modellen.", icon: <CheckCircleIcon className="h-6 w-6 text-primary mr-2" /> },
        { text: "Nachweisliche Erfolge bei der Implementierung von GenAI-Lösungen in Konzernen und im Mittelstand.", icon: <CheckCircleIcon className="h-6 w-6 text-primary mr-2" /> },
        { text: "Kollaborativer Ansatz: Wir arbeiten eng mit Ihren Teams zusammen, um Wissenstransfer sicherzustellen.", icon: <CheckCircleIcon className="h-6 w-6 text-primary mr-2" /> },
        { text: "Fokus auf messbaren ROI und nachhaltige Wertschöpfung.", icon: <CheckCircleIcon className="h-6 w-6 text-primary mr-2" /> },
        { text: "Pragmatische, umsetzungsorientierte Beratung – von der Strategie bis zum Go-Live.", icon: <CheckCircleIcon className="h-6 w-6 text-primary mr-2" /> }
    ];

    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                            Warum mit uns Ihre GenAI-Initiative starten?
                        </h2>
                        <p className="text-lg text-neutral mb-8 leading-relaxed">
                            Wir sind mehr als nur Berater – wir sind Ihre Partner auf dem Weg zur erfolgreichen Nutzung von Generativer KI. Unser Ziel ist es, Ihr Unternehmen zukunftssicher zu machen und Ihnen entscheidende Wettbewerbsvorteile zu sichern.
                        </p>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                    {benefit.icon}
                                    <span className="text-neutral text-base">{benefit.text}</span>
                                </li>
                            ))}
                        </ul>
                        <blockquote className="mt-10 p-4 italic border-l-4 border-accent bg-white text-neutral shadow-md">
                            <p>"Unser Anspruch: Keine leeren Versprechungen, sondern messbare Ergebnisse, die Ihr Geschäft voranbringen. Wir setzen GenAI dort ein, wo es echten Mehrwert schafft."</p>
                            <footer className="mt-2 text-sm text-primary font-semibold">Ihr GenAI Experten Team</footer>
                        </blockquote>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                        <Image
                            src="/ai-farmer.png" // Placeholder, replace with a more corporate/team image if available
                            alt="Unser Expertenteam für GenAI-Lösungen"
                            width={500}
                            height={500}
                            className="rounded-xl shadow-2xl object-cover w-full max-w-md md:max-w-full" // Ensure image scales well
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
