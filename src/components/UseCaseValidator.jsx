"use client";
import React, { useState, useEffect } from 'react'; // Added useEffect
import { Bar } from 'react-chartjs-2'; // Corrected import for Bar chart
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// Define use cases with updated German descriptions and more corporate focus
const useCasesData = {
    customerService: {
        name: "Automatisierung im Kundenservice",
        description: "Reduzieren Sie Antwortzeiten und steigern Sie die Effizienz durch KI-gestützte Bearbeitung von Standardanfragen.",
        inputs: [
            { id: "csEmployeeCount", label: "Anzahl Mitarbeiter im Kundenservice", type: "range", min: 1, max: 1000, default: 50, unit: "Mitarbeiter" },
            { id: "csAvgSalary", label: "Durchschn. Jahresgehalt pro MA (EUR)", type: "number", default: 55000, unit: "€" },
            { id: "csInquiriesPerMonthPerEmp", label: "Monatl. Anfragen pro MA", type: "number", default: 200, unit: "Anfragen" },
            { id: "csAutomationRate", label: "Automatisierungsrate durch GenAI (%)", type: "range", min: 0, max: 80, default: 30, unit: "%" },
            { id: "csTimeSavePerAutomatedInquiry", label: "Zeitersparnis pro autom. Anfrage (%)", type: "range", min: 0, max: 100, default: 50, unit: "%" },
        ],
        calculation: (inputs, solutionCost) => {
            const hourlyRate = inputs.csAvgSalary / (52 * 40); // Approx. hourly rate
            const totalMonthlyInquiries = inputs.csEmployeeCount * inputs.csInquiriesPerMonthPerEmp;
            const automatedInquiries = totalMonthlyInquiries * (inputs.csAutomationRate / 100);
            // Assuming avg handling time of 10 mins (0.166 hours) for an inquiry that can be automated
            const timeSavedPerMonth = automatedInquiries * 0.166 * (inputs.csTimeSavePerAutomatedInquiry / 100);
            const costSavedPerYear = (timeSavedPerMonth * hourlyRate * 12);
            return {
                costSavedPerYear: costSavedPerYear,
                netCostSavingPerYear: costSavedPerYear - solutionCost,
                keyMetric: `${(timeSavedPerMonth).toFixed(0)} Std. / Monat`,
                keyMetricLabel: "Zeitersparnis"
            };
        },
    },
    contentCreation: {
        name: "Effizienzsteigerung in der Content-Erstellung",
        description: "Beschleunigen Sie die Erstellung von Marketingtexten, Produktbeschreibungen oder internen Dokumentationen.",
        inputs: [
            { id: "ccTeamSize", label: "Anzahl Mitarbeiter Content/Marketing", type: "range", min: 1, max: 200, default: 10, unit: "Mitarbeiter" },
            { id: "ccAvgSalary", label: "Durchschn. Jahresgehalt pro MA (EUR)", type: "number", default: 65000, unit: "€" },
            { id: "ccHoursPerWeekPerEmpOnContent", label: "Wöchentl. Stunden für Content pro MA", type: "number", default: 15, unit: "Std." },
            { id: "ccProductivityGain", label: "Produktivitätssteigerung durch GenAI (%)", type: "range", min: 0, max: 100, default: 25, unit: "%" },
        ],
        calculation: (inputs, solutionCost) => {
            const hourlyRate = inputs.ccAvgSalary / (52 * 40);
            const totalWeeklyHoursOnContent = inputs.ccTeamSize * inputs.ccHoursPerWeekPerEmpOnContent;
            const hoursSavedPerWeek = totalWeeklyHoursOnContent * (inputs.ccProductivityGain / 100);
            const costSavedPerYear = (hoursSavedPerWeek * hourlyRate * 52);
            return {
                costSavedPerYear: costSavedPerYear,
                netCostSavingPerYear: costSavedPerYear - solutionCost,
                keyMetric: `${(hoursSavedPerWeek * 4.33).toFixed(0)} Std. / Monat`, // Approx. 4.33 weeks/month
                keyMetricLabel: "Gewonnene Produktivstunden"
            };
        },
    },
    processAutomation: {
        name: "Automatisierung von Geschäftsprozessen",
        description: "Identifizieren und automatisieren Sie repetitive administrative Aufgaben oder Datenverarbeitungsschritte.",
        inputs: [
            { id: "paEmployeesInvolved", label: "Anzahl MA in relevanten Prozessen", type: "range", min: 1, max: 500, default: 20, unit: "Mitarbeiter" },
            { id: "paAvgSalary", label: "Durchschn. Jahresgehalt pro MA (EUR)", type: "number", default: 60000, unit: "€" },
            { id: "paHoursPerWeekOnAutomatedTasks", label: "Wöchentl. Stunden für autom. Aufgaben pro MA", type: "number", default: 8, unit: "Std." },
            { id: "paEfficiencyGain", label: "Effizienzsteigerung durch GenAI (%)", type: "range", min: 0, max: 90, default: 40, unit: "%" },
        ],
        calculation: (inputs, solutionCost) => {
            const hourlyRate = inputs.paAvgSalary / (52 * 40);
            const totalWeeklyHoursOnTasks = inputs.paEmployeesInvolved * inputs.paHoursPerWeekOnAutomatedTasks;
            const hoursSavedPerWeek = totalWeeklyHoursOnTasks * (inputs.paEfficiencyGain / 100);
            const costSavedPerYear = (hoursSavedPerWeek * hourlyRate * 52);
            return {
                costSavedPerYear: costSavedPerYear,
                netCostSavingPerYear: costSavedPerYear - solutionCost,
                keyMetric: `${(costSavedPerYear / 12).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })} / Monat`,
                keyMetricLabel: "Direkte Kostensenkung"
            };
        },
    }
};


export default function UseCaseValidator() {
    const useCaseOptions = Object.entries(useCasesData).map(([key, useCase]) => ({
        value: key,
        label: useCase.name,
    }));

    const [selectedUseCaseKey, setSelectedUseCaseKey] = useState(useCaseOptions[0].value);
    const [inputValues, setInputValues] = useState({});
    const [solutionCost, setSolutionCost] = useState(10000); // Default annual solution cost

    // Effect to initialize/update inputValues when selectedUseCaseKey changes
    useEffect(() => {
        const currentUseCase = useCasesData[selectedUseCaseKey];
        const initialValues = {};
        currentUseCase.inputs.forEach(input => {
            initialValues[input.id] = input.default;
        });
        setInputValues(initialValues);
    }, [selectedUseCaseKey]);

    const selectedUseCase = useCasesData[selectedUseCaseKey];
    // Ensure calculationResult is only computed if inputValues is populated
    const calculationResult = Object.keys(inputValues).length > 0 ? selectedUseCase.calculation(inputValues, solutionCost) : { costSavedPerYear: 0, netCostSavingPerYear: 0, keyMetric: "N/A", keyMetricLabel: "N/A" };

    const chartData = {
        labels: ['Jährliche Brutto-Einsparung', 'Jährliche Netto-Einsparung (nach Lösungkosten)'],
        datasets: [
            {
                label: 'Potenzielle Einsparungen (€)',
                data: [
                    Math.max(0, calculationResult.costSavedPerYear), // Ensure non-negative for chart
                    Math.max(0, calculationResult.netCostSavingPerYear)
                ],
                backgroundColor: [
                    'rgba(14, 71, 36, 0.7)', // primary color with opacity
                    'rgba(85, 64, 38, 0.7)'  // accent color with opacity
                ],
                borderColor: [
                    '#0E4724', // primary
                    '#554026'  // accent
                ],
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: true, position: 'top', labels: { color: '#52525B'} }, // text-neutral
            title: { display: true, text: 'Jährliches Einsparungspotenzial', color: '#0E4724', font: {size: 18}}, // text-primary
            tooltip: {
                callbacks: {
                    label: (context) => `${context.dataset.label}: ${context.formattedValue} €`
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Einsparungen in EUR (€)', color: '#52525B' }, // text-neutral
                ticks: { color: '#52525B' }, // text-neutral
                grid: { color: 'rgba(82, 82, 91, 0.1)'} // neutral-focus/10
            },
            x: {
                ticks: { color: '#52525B' }, // text-neutral
                grid: { display: false }
            }
        },
    };

    const handleInputChange = (inputId, value) => {
        setInputValues(prevValues => ({ ...prevValues, [inputId]: parseFloat(value) }));
    };

    const handleCostChange = (e) => {
        const value = e.target.value;
        setSolutionCost(value === '' ? 0 : parseFloat(value));
    };


    return (
        <section className="py-12 md:py-16 bg-white rounded-xl shadow-2xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-10"> {/* Changed to text-left for a more structured feel */}
                     <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-3">Interaktiver Potenzialrechner</h2>
                     <p className="text-neutral text-base md:text-lg">{selectedUseCase.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-start">
                    {/* Input Controls Column */}
                    <div className="lg:col-span-2 bg-secondary p-6 rounded-lg shadow-md space-y-6">
                        <div>
                            <label htmlFor="useCaseSelect" className="block text-sm font-medium text-neutral mb-1">Anwendungsfall wählen:</label>
                            <select
                                id="useCaseSelect"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-neutral placeholder-gray-400 bg-white"
                                value={selectedUseCaseKey}
                                onChange={(e) => setSelectedUseCaseKey(e.target.value)}
                            >
                                {useCaseOptions.map(option => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>

                        {selectedUseCase.inputs.map(input => (
                            <div key={input.id}>
                                <label htmlFor={input.id} className="block text-sm font-medium text-neutral mb-1">{input.label}:</label>
                                {input.type === 'range' ? (
                                    <>
                                        <input
                                            type="range"
                                            id={input.id}
                                            min={input.min}
                                            max={input.max}
                                            value={inputValues[input.id] || input.default} // Ensure value is defined
                                            onChange={(e) => handleInputChange(input.id, e.target.value)}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                        <p className="text-neutral text-xs mt-1 text-right">{inputValues[input.id] || input.default} {input.unit}</p>
                                    </>
                                ) : (
                                    <input
                                        type="number"
                                        id={input.id}
                                        value={inputValues[input.id] || input.default} // Ensure value is defined
                                        onChange={(e) => handleInputChange(input.id, e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-neutral placeholder-gray-400"
                                    />
                                )}
                            </div>
                        ))}
                        <div>
                            <label htmlFor="solutionCost" className="block text-sm font-medium text-neutral mb-1">Geschätzte jährliche GenAI-Lösungskosten (EUR):</label>
                            <input
                                type="number"
                                id="solutionCost"
                                value={solutionCost}
                                onChange={handleCostChange}
                                placeholder="z.B. 10000"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-neutral placeholder-gray-400"
                            />
                            <p className="text-xs text-neutral mt-1 flex items-center">
                                <InformationCircleIcon className="h-4 w-4 mr-1 inline"/>
                                Berücksichtigt Lizenzgebühren, Infrastruktur, Wartung etc.
                            </p>
                        </div>
                    </div>

                    {/* Results and Chart Column */}
                    <div className="lg:col-span-3 bg-secondary p-6 rounded-lg shadow-md">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-primary text-center">Ihr geschätztes Einsparungspotenzial für "{selectedUseCase.name}"</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-center">
                            <div className="bg-primary/10 p-4 rounded-lg">
                                <p className="text-sm text-primary font-medium">{calculationResult.keyMetricLabel}</p>
                                <p className="text-2xl font-bold text-primary">{calculationResult.keyMetric}</p>
                            </div>
                            <div className="bg-accent/10 p-4 rounded-lg">
                                <p className="text-sm text-accent font-medium">Jährliche Netto-Einsparung</p>
                                <p className="text-2xl font-bold text-accent">
                                    {calculationResult.netCostSavingPerYear >= 0 ?
                                     calculationResult.netCostSavingPerYear.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }) :
                                     `-${Math.abs(calculationResult.netCostSavingPerYear).toLocaleString('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
                                    }
                                </p>
                            </div>
                        </div>

                        <div className="h-[300px] md:h-[400px] w-full"> {/* Fixed height container for chart */}
                            <Bar data={chartData} options={chartOptions} />
                        </div>
                        <p className="text-xs text-neutral mt-6 text-center italic">
                            Hinweis: Diese Berechnung dient als erste Schätzung und basiert auf Ihren Eingaben und allgemeinen Annahmen. Eine detaillierte Analyse ist für eine genaue ROI-Prognose erforderlich.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
