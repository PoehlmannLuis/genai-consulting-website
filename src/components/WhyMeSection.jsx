"use client";
import React from 'react';
import Image from 'next/image';
import { BriefcaseIcon, AcademicCapIcon, LightBulbIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'; // Updated icons

export default function WhyMeSection() {
    const expertisePoints = [
        {
            icon: <BriefcaseIcon className="h-8 w-8 text-accent mr-4 flex-shrink-0" />,
            title: "Head of AI Business Stream bei evosoft GmbH (A Siemens Company)",
            text: "Verantwortlich für die strategische Ausrichtung und Umsetzung von KI-Geschäftsfeldern, mit direktem Einblick in die Anforderungen und Herausforderungen globaler Industrieunternehmen."
        },
        {
            icon: <AcademicCapIcon className="h-8 w-8 text-accent mr-4 flex-shrink-0" />,
            title: "Tiefgreifende Expertise im Siemens-Ökosystem und industriellen Umgebungen",
            text: "Langjährige Erfahrung mit Siemens-Technologien und ein tiefes Verständnis für die spezifischen Bedürfnisse und Prozesse in der Fertigungs- und Prozessindustrie."
        },
        {
            icon: <LightBulbIcon className="h-8 w-8 text-accent mr-4 flex-shrink-0" />,
            title: "Spezialisiert auf die Brücke zwischen Geschäftszielen und technischen KI-Lösungen",
            text: "Fähigkeit, komplexe geschäftliche Anforderungen in effektive, technisch fundierte KI-Strategien und -Implementierungen zu übersetzen, die messbaren Mehrwert liefern."
        },
        {
            icon: <ShieldCheckIcon className="h-8 w-8 text-accent mr-4 flex-shrink-0" />,
            title: "Nachgewiesene Erfolgsbilanz bei KMUs in der DACH-Region",
            text: "Erfolgreiche Durchführung zahlreicher KI-Projekte für kleine und mittelständische Unternehmen, angepasst an deren spezifische Ressourcen und Marktbedingungen."
        }
    ];

    // Placeholder for company logos - replace with actual logo components or image tags
    const companyLogos = [
        { name: "Siemens", src: "/logos/siemens-placeholder.svg", alt: "Siemens Logo" },
        { name: "evosoft", src: "/logos/evosoft-placeholder.svg", alt: "evosoft Logo" },
        { name: "Bosch Rexroth", src: "/logos/bosch-placeholder.svg", alt: "Bosch Rexroth Logo" },
        // Add more logos as permitted
    ];

    const testimonial = {
        quote: "Luis hat uns nicht nur mit seiner technischen Expertise im Bereich GenAI überzeugt, sondern vor allem mit seinem tiefen Verständnis für unsere industriellen Prozesse. Die Zusammenarbeit war partnerschaftlich und die Ergebnisse haben unsere Erwartungen übertroffen.",
        author: "Dr. Max Mustermann",
        role: "Leiter Digitalisierung, Beispiel AG (Industrie)",
        // companyLogo: "/logos/beispiel-ag-placeholder.svg" // Optional: logo for testimonial
    };

    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Text Content Column */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
                            Warum Luis Pöhlmann für Ihre KI-Initiative?
                        </h2>

                        <ul className="space-y-6 mb-10">
                            {expertisePoints.map((point, index) => (
                                <li key={index} className="flex items-start">
                                    {point.icon}
                                    <div>
                                        <h3 className="text-lg font-semibold text-primary mb-1">{point.title}</h3>
                                        <p className="text-neutral text-base leading-relaxed">{point.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Testimonial Section */}
                        <div className="bg-white p-6 rounded-lg shadow-xl border-l-4 border-accent mb-10">
                             <p className="text-neutral italic leading-relaxed mb-4">"{testimonial.quote}"</p>
                             <p className="font-semibold text-primary">{testimonial.author}</p>
                             <p className="text-sm text-neutral">{testimonial.role}</p>
                        </div>

                        {/* Company Logos Placeholder - uncomment and style when actual logos are available
                        <div className="mt-10">
                            <h3 className="text-lg font-semibold text-neutral mb-4 text-center lg:text-left">Erfahrungshintergrund u.a. bei:</h3>
                            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
                                {companyLogos.map(logo => (
                                    <div key={logo.name} className="h-10 w-auto text-neutral/70 flex items-center justify-center p-2 bg-white rounded shadow">
                                        Placeholder: {logo.name}
                                        {/* <Image src={logo.src} alt={logo.alt} width={100} height={40} className="object-contain" /> * /}
                                    </div>
                                ))}
                            </div>
                        </div>
                        */}

                    </div>

                    {/* Image Column */}
                    <div className="order-1 lg:order-2 flex justify-center items-center">
                        <div className="relative w-full max-w-md lg:max-w-none">
                            <div className="bg-primary rounded-full w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] mx-auto flex items-center justify-center overflow-hidden shadow-2xl">
                                {/* Placeholder for professional headshot or action shot */}
                                <span className="text-secondary text-center p-4">
                                    [Professionelles Foto von Luis Pöhlmann - beratend oder Porträt]
                                </span>
                                {/* <Image
                                    src="/path-to-luis-professional-photo.jpg" // Replace with actual image path
                                    alt="Luis Pöhlmann - Ihr Experte für GenAI Lösungen"
                                    width={450}
                                    height={450}
                                    className="object-cover w-full h-full"
                                    priority // If above the fold and important for LCP
                                /> */}
                            </div>
                            {/* Optional: Add a subtle background element or shape */}
                            {/* <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-lg -z-10"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
