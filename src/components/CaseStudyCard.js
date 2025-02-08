// src/components/CaseStudyCard.js
import { useState } from 'react';

const CaseStudyCard = ({ study }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // API Demo Component (Implementation Required - See below)
    const APIDemoComponent = ({ endpoint }) => {
        const [apiData, setApiData] = useState(null);
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState(null);

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(endpoint);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setApiData(data);
            } catch (e) {
                setError(e);
                console.error("API Error:", e);
            } finally {
                setIsLoading(false);
            }
        };

        return (
            <div>
                <button onClick={fetchData} disabled={isLoading}>
                    {isLoading ? "Run API Demo"}
                </button>
                {error && <p className="text-red-500">Error: {error.message}</p>}
                {apiData && (
                    <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
                        <code>{JSON.stringify(apiData, null, 2)}</code>
                    </pre>
                )}
            </div>
        );
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-2">{study.title}</h3>
            <div className="badge bg-blue-100 text-blue-800 mb-4">{study.industry}</div>
            <p className="mb-4"><strong>Challenge:</strong> {study.challenge}</p>
            {!isExpanded && (
                <button
                    onClick={() => setIsExpanded(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Show Details & Demo
                </button>
            )}
            {isExpanded && (
                <div className="mt-4">
                    <p><strong>Solution:</strong> {study.solution}</p>
                    <div className="my-4 flex gap-2 flex-wrap">
                        {study.tools.map((tool) => (
                            <span key={tool} className="bg-gray-100 px-2 py-1 rounded text-sm">{tool}</span>
                        ))}
                    </div>
                    <p className="text-green-600 font-bold mb-4">Achieved: {study.benefit}</p>
                    <div className="demo-container bg-gray-50 p-4 rounded-lg">
                        {study.demoType === 'huggingface' && (
                            <iframe
                                src={study.demoUrl}
                                className="w-full h-[400px] rounded border-0"
                                loading="lazy"
                            />
                        )}
                        {study.demoType === 'api' && (
                            <APIDemoComponent endpoint={study.demoEndpoint} />
                        )}
                    </div>
                    <button
                        onClick={() => setIsExpanded(false)}
                        className="mt-4 text-gray-500 hover:text-gray-700"
                    >
                        Collapse
                    </button>
                </div>
            )}
        </div>
    );
};

export default CaseStudyCard;