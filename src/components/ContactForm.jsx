"use client";

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '', // Added email field
        user_company: '',
        problem_type: 'Strategie & Use-Case-Findung', // Updated default
        message: '' // Added message field
    });
    const [emailSent, setEmailSent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_ud637om';
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_wmxmx3h';
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'Y6n6aivzQs_nuWEOD';

        if (!serviceId || !templateId || !publicKey) {
            setError('E-Mail-Konfiguration ist unvollständig. Bitte kontaktieren Sie uns direkt.');
            setIsSubmitting(false);
            return;
        }

        // Basic validation
        if (!formData.user_name.trim() || !formData.user_email.trim() || !formData.message.trim()) {
            setError('Bitte füllen Sie alle Pflichtfelder aus (Name, E-Mail, Nachricht).');
            setIsSubmitting(false);
            return;
        }


        try {
            // Send the form data directly, no need for e.target if managing state
            await emailjs.send(serviceId, templateId, formData, publicKey);
            setEmailSent(true);
            setFormData({ // Reset form
                user_name: '',
                user_email: '',
                user_company: '',
                problem_type: 'Strategie & Use-Case-Findung',
                message: ''
            });
        } catch (err) {
            console.error('FAILED...', err);
            setError('Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 md:py-24 bg-primary text-secondary"> {/* Changed bg to primary, text to secondary */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bereit, GenAI für sich zu nutzen?</h2>
                    <p className="text-lg mb-8 text-secondary/90">
                        Kontaktieren Sie uns für eine unverbindliche Erstberatung und erfahren Sie, wie wir Ihr Unternehmen mit Generativer KI transformieren können.
                    </p>
                </div>

                {emailSent ? (
                    <div className="bg-accent/20 border border-accent text-accent px-6 py-4 rounded-md text-center max-w-md mx-auto">
                        <h3 className="font-semibold text-xl mb-2">Vielen Dank!</h3>
                        <p>Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-secondary p-8 rounded-lg shadow-xl space-y-6">
                        <div>
                            <label htmlFor="user_name" className="block text-sm font-medium text-neutral mb-1">Name*</label>
                            <input
                                type="text"
                                id="user_name"
                                name="user_name"
                                value={formData.user_name}
                                onChange={handleChange}
                                placeholder="Ihr Name"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-neutral placeholder-gray-400"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="user_email" className="block text-sm font-medium text-neutral mb-1">E-Mail-Adresse*</label>
                            <input
                                type="email"
                                id="user_email"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                placeholder="ihre.email@unternehmen.de"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-neutral placeholder-gray-400"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="user_company" className="block text-sm font-medium text-neutral mb-1">Unternehmen (Optional)</label>
                            <input
                                type="text"
                                id="user_company"
                                name="user_company"
                                value={formData.user_company}
                                onChange={handleChange}
                                placeholder="Name Ihres Unternehmens"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-neutral placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <label htmlFor="problem_type" className="block text-sm font-medium text-neutral mb-1">Bereich Ihres Interesses*</label>
                            <select
                                id="problem_type"
                                name="problem_type"
                                value={formData.problem_type}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-neutral bg-white"
                                required
                            >
                                <option value="Strategie & Use-Case-Findung">Strategie & Use-Case-Findung</option>
                                <option value="Entwicklung & Prototyping">Entwicklung & Prototyping von GenAI-Lösungen</option>
                                <option value="Implementierung & Skalierung">Implementierung & Skalierung</option>
                                <option value="Mitarbeiterschulung & Workshops">Mitarbeiterschulung & Workshops</option>
                                <option value="Sonstiges">Sonstiges / Allgemeine Anfrage</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-neutral mb-1">Ihre Nachricht*</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Beschreiben Sie kurz Ihr Anliegen oder Ihre Fragen..."
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary text-neutral placeholder-gray-400"
                                required
                            ></textarea>
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-accent text-secondary px-6 py-3 rounded-md text-lg font-semibold hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sende...' : 'Anfrage absenden'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
