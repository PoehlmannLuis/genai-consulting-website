"use client"; // If using client-side hooks like useState
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, AcademicCapIcon, LightBulbIcon, SparklesIcon, PresentationChartLineIcon } from '@heroicons/react/24/solid'; // Example icons

// Simplified APIDemoComponent - actual implementation might be more complex
const APIDemoComponent = ({ endpoint }) => {
    const [apiData, setApiData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            // In a real scenario, you might need to POST data or handle authentication
            const response = await fetch(endpoint); // Using the provided endpoint directly
            if (!response.ok) {
                throw new Error(`API Fehler: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setApiData(data);
        } catch (e) {
            setError(e.message);
            console.error("API Fehler:", e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="mt-4 p-4 border border-neutral/20 rounded-lg bg-secondary/50">
            <button
                onClick={fetchData}
                disabled={isLoading}
                className="bg-accent text-secondary px-4 py-2 rounded-md hover:bg-accent/90 transition-colors text-sm disabled:opacity-50"
            >
                {isLoading ? "Demo wird geladen..." : "Live API Demo ausführen"}
            </button>
            {error && <p className="text-red-500 mt-2 text-sm">Fehler: {error}</p>}
            {apiData && (
                <pre className="bg-neutral/10 text-neutral p-3 rounded-md overflow-x-auto mt-3 text-xs">
                    <code>{JSON.stringify(apiData, null, 2)}</code>
                </pre>
            )}
        </div>
    );
};


const CaseStudyCard = ({ study }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const getIconForIndustry = (industry) => {
        // Simple icon mapping, can be expanded
        if (industry.toLowerCase().includes("manufacturing") || industry.toLowerCase().includes("produktion")) return <AcademicCapIcon className="h-5 w-5 text-primary inline mr-1" />;
        if (industry.toLowerCase().includes("logistics") || industry.toLowerCase().includes("logistik")) return <LightBulbIcon className="h-5 w-5 text-primary inline mr-1" />;
        return <SparklesIcon className="h-5 w-5 text-primary inline mr-1" />; // Default icon
    };

    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden">
            {/* Optional: Image for the case study */}
            {study.imageUrl && (
                <div className="w-full h-48 overflow-hidden">
                    <img src={study.imageUrl} alt={study.title} className="w-full h-full object-cover"/>
                </div>
            )}

            <div className="p-6 flex-grow">
                <div className="flex items-center text-sm text-neutral mb-2">
                    {getIconForIndustry(study.industry)}
                    <span>{study.industry}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-primary">{study.title}</h3>

                <p className="text-neutral text-base mb-3 leading-relaxed"><strong>Herausforderung:</strong> {study.challenge}</p>

                {isExpanded && (
                    <>
                        <p className="text-neutral text-base mb-3 leading-relaxed"><strong>Lösung:</strong> {study.solution}</p>
                        <div className="mb-4">
                            <h4 className="font-semibold text-neutral mb-1">Eingesetzte Technologien:</h4>
                            <div className="flex flex-wrap gap-2">
                                {study.tools.map((tool) => (
                                    <span key={tool} className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-medium">{tool}</span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-accent/10 text-accent p-3 rounded-lg mb-4">
                            <PresentationChartLineIcon className="h-6 w-6 text-accent inline mr-2" />
                            <span className="font-semibold">Erreicht:</span> {study.benefit}
                        </div>

                        {/* Demo Section */}
                        {study.demoType && (
                            <div className="demo-container bg-secondary/50 p-4 rounded-lg border border-neutral/20">
                                <h4 className="font-semibold text-neutral mb-2 text-center">Live Demo</h4>
                                {study.demoType === 'huggingface' && study.demoUrl && (
                                    <iframe
                                        src={study.demoUrl}
                                        className="w-full h-[350px] md:h-[400px] rounded-md border-neutral/30 border"
                                        loading="lazy"
                                        title={`${study.title} - Hugging Face Demo`}
                                    />
                                )}
                                {study.demoType === 'api' && study.demoEndpoint && (
                                    <APIDemoComponent endpoint={study.demoEndpoint} />
                                )}
                                {study.demoType === 'link' && study.demoUrl && (
                                     <a href={study.demoUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-accent text-secondary px-4 py-2 rounded-md hover:bg-accent/90 transition-colors">
                                        Externe Demo ansehen
                                     </a>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>

            <div className="p-6 border-t border-neutral/10">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full flex items-center justify-center text-accent hover:text-primary font-medium transition-colors duration-200 group"
                >
                    {isExpanded ? "Weniger Details anzeigen" : "Mehr Details & Demo anzeigen"}
                    {isExpanded ? <ChevronUpIcon className="h-5 w-5 ml-2 transform transition-transform duration-200 group-hover:-translate-y-0.5" /> : <ChevronDownIcon className="h-5 w-5 ml-2 transform transition-transform duration-200 group-hover:translate-y-0.5" />}
                </button>
            </div>
        </div>
    );
};

export default CaseStudyCard;