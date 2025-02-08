"use client"; 

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [problem, setProblem] = useState('Use-Case-Findung');
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceId = 'service_ud637om'; // Replace with your EmailJS Service ID
        const templateId = 'template_wmxmx3h';   // Replace with your EmailJS Template ID
        const publicKey = 'Y6n6aivzQs_nuWEOD';     // Replace with your EmailJS Public Key

        try {
            const response = await emailjs.sendForm(serviceId, templateId, e.target, publicKey);
            console.log('SUCCESS!', response.status, response.text);
            setEmailSent(true);
            setName('');
            setCompany('');
            setProblem('Use-Case-Findung');
        } catch (error) {
            console.error('FAILED...', error);
            alert('Failed to send email. Please try again.');
        }
    };


    return (
        <section className="py-20 bg-bayerisch-blue text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Kontaktieren Sie mich</h2>
                {emailSent ? (
                    <div className="bg-growth-green text-white p-4 rounded-md mb-4">
                        Danke, Luis meldet sich spätestens in 48h zurück!
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="mb-4">
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Ihr Name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="company"
                                name="user_company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                placeholder="Firma (optional)"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-6">
                            <select
                                id="problem"
                                name="problem_type"
                                value={problem}
                                onChange={(e) => setProblem(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            >
                                <option value="Use-Case-Findung">Use-Case-Findung</option>
                                <option value="Technische Umsetzung">Technische Umsetzung</option>
                                <option value="Skalierung">Skalierung</option>
                                <option value="Sonstiges">Sonstiges</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="bg-cta-orange text-blue-900 px-8 py-3 rounded-lg hover:scale-105 transition-transform"
                        >
                            Nachricht senden
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
