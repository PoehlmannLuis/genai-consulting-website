"use client";
import React, { useState } from 'react';
import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function UseCaseValidator() {
    // 1. Define Use Cases and their input fields & calculations
    const useCases = {
        customerService: {
            name: "Kundenservice Automatisierung",
            inputs: [
                { id: "csEmployeeCount", label: "Anzahl der Kundenservicemitarbeiter", type: "range", min: 1, max: 500, default: 50 },
                { id: "csHourlyRate", label: "Durchschnittlicher Stundensatz (EUR)", type: "number", default: 40 },
                { id: "csInquiriesPerMonth", label: "Durchschnittliche monatliche Kundenanfragen pro Mitarbeiter", type: "number", default: 100 },
                { id: "csAutomationPercentage", label: "Prozentsatz der Anfragen, die durch GenAI automatisiert werden können (%)", type: "range", min: 0, max: 100, default: 30 },
                { id: "csTimeSavingPerInquiry", label: "Zeitersparnis pro automatisierter Anfrage durch GenAI (%)", type: "range", min: 0, max: 100, default: 40 },
            ],
            calculation: (inputs, solutionCost) => {
                const employeeCount = inputs.csEmployeeCount;
                const hourlyRate = inputs.csHourlyRate;
                const inquiriesPerMonth = inputs.csInquiriesPerMonth;
                const automationPercentage = inputs.csAutomationPercentage / 100;
                const timeSavingPercentage = inputs.csTimeSavingPerInquiry / 100;

                const automatedInquiriesPerMonth = employeeCount * inquiriesPerMonth * automationPercentage;
                // Assuming average handling time per inquiry before GenAI is 15 minutes (0.25 hours) - this is an assumption!
                const assumedHandlingTimeBeforeGenAI = 0.25; // Hours
                const hoursSavedPerMonth = automatedInquiriesPerMonth * assumedHandlingTimeBeforeGenAI * timeSavingPercentage;
                const costSavedPerMonth = hoursSavedPerMonth * hourlyRate;
                const costSavedPerYear = costSavedPerMonth * 12;
                const netCostSavingPerYear = costSavedPerYear - solutionCost;


                return { hoursSavedPerMonth, costSavedPerYear, netCostSavingPerYear };
            },
        },
        contentCreation: {
            name: "Inhaltserstellung",
            inputs: [
                { id: "ccEmployeeCount", label: "Anzahl der Mitarbeiter im Bereich Inhaltserstellung/Marketing", type: "range", min: 1, max: 100, default: 10 },
                { id: "ccHourlyRate", label: "Durchschnittlicher Stundensatz (EUR)", type: "number", default: 50 },
                { id: "ccHoursPerMonth", label: "Durchschnittliche Stunden pro Monat für Inhaltserstellung pro Mitarbeiter", type: "number", default: 40 },
                { id: "ccSupportPercentage", label: "Prozentsatz der Inhaltserstellungsaufgaben, die durch GenAI unterstützt werden können (%)", type: "range", min: 0, max: 100, default: 50 },
                { id: "ccTimeSavingPerTask", label: "Zeitersparnis pro Inhaltserstellungsaufgabe mit GenAI-Unterstützung (%)", type: "range", min: 0, max: 100, default: 30 },
            ],
            calculation: (inputs, solutionCost) => {
                const employeeCount = inputs.ccEmployeeCount;
                const hourlyRate = inputs.ccHourlyRate;
                const hoursPerMonth = inputs.ccHoursPerMonth;
                const supportPercentage = inputs.ccSupportPercentage / 100;
                const timeSavingPercentage = inputs.ccTimeSavingPerTask / 100;

                const totalContentCreationHours = employeeCount * hoursPerMonth;
                const supportedHours = totalContentCreationHours * supportPercentage;
                const hoursSavedPerMonth = supportedHours * timeSavingPercentage;
                const costSavedPerMonth = hoursSavedPerMonth * hourlyRate;
                const costSavedPerYear = costSavedPerMonth * 12;
                const netCostSavingPerYear = costSavedPerYear - solutionCost;


                return { hoursSavedPerMonth, costSavedPerYear, netCostSavingPerYear };
            },
        },
        // Add more use cases here (Data Analysis, Admin Tasks, etc.) following the same structure
    };

    const useCaseOptions = Object.entries(useCases).map(([key, useCase]) => ({
        value: key,
        label: useCase.name,
    }));


    const [selectedUseCaseKey, setSelectedUseCaseKey] = useState(useCaseOptions[0].value); // Default to first use case
    const selectedUseCase = useCases[selectedUseCaseKey];
    const [inputValues, setInputValues] = useState(() => {
        // Initialize input values based on default values from selectedUseCase
        const initialValues = {};
        selectedUseCase.inputs.forEach(input => {
            initialValues[input.id] = input.default;
        });
        return initialValues;
    });
    const [solutionCost, setSolutionCost] = useState(0); // State for solution cost

    const calculationResult = selectedUseCase.calculation(inputValues, solutionCost);

    const chartData = {
        labels: ['Zeitersparnis (Monat)', 'Kostenersparnis (Jahr)'],
        datasets: [
            {
                label: 'GenAI Benefit',
                data: [calculationResult.hoursSavedPerMonth, calculationResult.costSavedPerYear],
                backgroundColor: ['rgba(0, 204, 102, 0.7)', 'rgba(0, 102, 204, 0.7)'], // Consider using Tailwind colors for chart
                borderColor: ['rgba(0, 204, 102, 1)', 'rgba(0, 102, 204, 1)'], // Consider using Tailwind colors for chart
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: { // Example tooltip customization (consider more detailed tooltips if needed)
                callbacks: {
                    label: (context) => {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.label === 'Zeitersparnis (Monat)') {
                            label += `${context.formattedValue} Stunden`;
                        } else if (context.label === 'Kostenersparnis (Jahr)') {
                            label += `${context.formattedValue} €`;
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Wert',
                },
            },
        },
    };

    const handleInputChange = (inputId, value) => {
        setInputValues(prevValues => ({ ...prevValues, [inputId]: parseFloat(value) }));
    };

    return (
        <section className="py-20 bg-secondary"> {/* bg-gray-50 replaced with bg-secondary */}
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8 text-primary">Wie viel Zeit/Kosten spart Ihnen GenAI?</h2> {/* text-3xl font-bold mb-8  and added text-primary */}
                {/* Explanatory Text about the calculator would go here */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div className="mb-6">
                            <label htmlFor="useCase" className="block text-neutral text-sm font-bold mb-2"> {/* text-gray-700 replaced with text-neutral */}
                                Anwendungsfall auswählen
                            </label>
                            <select
                                id="useCase"
                                className="w-full p-2 border rounded text-neutral" // text-gray-700 implicitly replaced with text-neutral, added text-neutral class
                                value={selectedUseCaseKey}
                                onChange={(e) => setSelectedUseCaseKey(e.target.value)}
                            >
                                {useCaseOptions.map(option => (
                                    <option key={option.value} value={option.value} className="text-neutral">{option.label}</option> // added text-neutral to option
                                ))}
                            </select>
                        </div>

                        {selectedUseCase.inputs.map(input => (
                            <div key={input.id} className="mb-6">
                                <label htmlFor={input.id} className="block text-neutral text-sm font-bold mb-2"> {/* text-gray-700 replaced with text-neutral */}
                                    {input.label}
                                </label>
                                {input.type === 'range' ? (
                                    <>
                                        <input
                                            type="range"
                                            id={input.id}
                                            min={input.min}
                                            max={input.max}
                                            value={inputValues[input.id]}
                                            onChange={(e) => handleInputChange(input.id, e.target.value)}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" // consider styling the range input further if needed with custom colors
                                        />
                                        <p className="text-neutral text-sm mt-1">Aktuell: {inputValues[input.id]} {input.type === 'range' && input.id.includes('Percentage') ? '%' : ''}</p> {/* text-gray-600 replaced with text-neutral */}
                                    </>
                                ) : (
                                    <input
                                        type="number"
                                        id={input.id}
                                        value={inputValues[input.id]}
                                        onChange={(e) => handleInputChange(input.id, e.target.value)}
                                        className="w-full p-2 border rounded text-neutral" // text-gray-700 implicitly replaced with text-neutral, added text-neutral class
                                    />
                                )}
                            </div>
                        ))}
                        <div className="mb-6">
                            <label htmlFor="solutionCost" className="block text-neutral text-sm font-bold mb-2"> {/* text-gray-700 replaced with text-neutral */}
                                Geschätzte jährliche GenAI-Lösungskosten (EUR)
                            </label>
                            <input
                                type="number"
                                id="solutionCost"
                                value={solutionCost}
                                onChange={(e) => setSolutionCost(parseFloat(e.target.value))}
                                className="w-full p-2 border rounded text-neutral" // text-gray-700 implicitly replaced with text-neutral, added text-neutral class
                            />
                            <p className="text-neutral text-sm mt-1">Optionale Angabe für Netto-ROI Berechnung</p> {/* text-gray-600 replaced with text-neutral */}
                        </div>


                    </div>
                    <div>
                        <div className="bg-secondary shadow-md rounded-lg p-6"> {/* bg-white replaced with bg-secondary */}
                            <h3 className="text-xl font-semibold mb-4 text-primary">Ihr GenAI Sparpotenzial für {selectedUseCase.name}</h3> {/* text-xl font-semibold mb-4 and added text-primary */}
                            <div className="mb-4">
                                <p className="text-neutral">Geschätzte Zeitersparnis pro Monat:</p> {/* text-gray-700 replaced with text-neutral */}
                                <p className="text-2xl font-bold text-accent">≥{calculationResult.hoursSavedPerMonth.toFixed(0)} Stunden</p> {/* growth-green-text replaced with text-accent */}
                            </div>
                            <div>
                                <p className="text-neutral">Geschätzte jährliche Kostenersparnis:</p> {/* text-gray-700 replaced with text-neutral */}
                                <p className="text-2xl font-bold text-accent">{calculationResult.costSavedPerYear.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</p> {/* growth-green-text replaced with text-accent */}
                            </div>
                            {solutionCost > 0 && (
                                <div className="mt-4">
                                    <p className="text-neutral">Netto-Kostenersparnis nach Abzug der Lösungskosten:</p> {/* text-gray-700 replaced with text-neutral */}
                                    <p className="text-2xl font-bold text-accent">{calculationResult.netCostSavingPerYear > 0 ? calculationResult.netCostSavingPerYear.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }) : 'Keine Nettoersparnis' }</p> {/* growth-green-text replaced with text-accent */}
                                </div>
                            )}

                            <div className="mt-6">
                                <Chart type='bar' data={chartData} options={chartOptions} />
                            </div>
                        </div>
                        {/* Success Story Snippets/Links could go here */}
                        {/* Disclaimer Text would go here */}
                        {/* Call to Action Button would go here */}
                    </div>
                </div>
            </div>
        </section>
    );
}
