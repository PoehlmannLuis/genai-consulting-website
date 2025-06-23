// src/app/showcases/data/caseStudies.js
const caseStudies = [
  {
    id: 1,
    title: "Automatisierte Qualitätskontrolle in der Fertigung",
    industry: "Produktion & Fertigung",
    challenge: "Hohe Fehlerquoten und manuelle Inspektionsaufwände in der Qualitätskontrolle.",
    solution: "Implementierung einer GenAI-basierten Bilderkennungslösung zur automatischen Identifizierung von Produktdefekten in Echtzeit direkt am Fließband.",
    tools: ["Computer Vision", "Neuronale Netze (CNNs)", "Edge Computing", "Python", "TensorFlow"],
    benefit: "Reduktion der Fehlerquote um 25%, Steigerung der Inspektionsgeschwindigkeit um 60%, signifikante Senkung der Personalkosten in der QS.",
    // imageUrl: "/public/images/manufacturing_qc.jpg", // Removed as image does not exist
    demoType: "link", // Could be 'huggingface', 'api', or 'link' to an external demo/video
    demoUrl: "https://example.com/manufacturing-demo-video" // Placeholder
  },
  {
    id: 2,
    title: "Intelligente Automatisierung des Kundenservice",
    industry: "E-Commerce & Handel",
    challenge: "Hohes Anfragevolumen im Kundenservice, lange Wartezeiten und Schwierigkeiten bei der Skalierung des Support-Teams.",
    solution: "Entwicklung eines GenAI-Chatbots, der Kundenanfragen versteht, personalisierte Antworten liefert und komplexe Fälle intelligent an menschliche Agenten weiterleitet.",
    tools: ["Natural Language Processing (NLP)", "Large Language Models (LLMs)", "Dialogflow", "Node.js", "React"],
    benefit: "Reduktion der durchschnittlichen Bearbeitungszeit um 40%, Steigerung der Kundenzufriedenheit um 15%, 24/7 Verfügbarkeit des Supports.",
    // imageUrl: "/public/images/customer_service_bot.jpg", // Removed as image does not exist
    demoType: "huggingface", // Example: link to a Hugging Face Space
    demoUrl: "https://huggingface.co/spaces/your-org/kundenservice-chatbot-demo" // Placeholder
  },
  {
    id: 3,
    title: "Optimierung der Lieferketenplanung durch GenAI",
    industry: "Logistik & Supply Chain Management",
    challenge: "Ineffiziente Routenplanung, hohe Transportkosten und mangelnde Transparenz in der Lieferkette.",
    solution: "Einsatz von GenAI zur Analyse historischer Daten, Vorhersage von Nachfrageschwankungen und dynamischen Optimierung von Transportrouten und Lagerbeständen.",
    tools: ["Predictive Analytics", "Reinforcement Learning", "Python", "AWS Sagemaker", "Tableau"],
    benefit: "Reduktion der Transportkosten um 12%, Verbesserung der Lieferpünktlichkeit um 20%, erhöhte Resilienz der Lieferkette.",
    // imageUrl: "/public/images/logistics_optimization.jpg", // Removed as image does not exist
    demoType: "api", // Example: an API endpoint for a simplified demo
    demoEndpoint: "/api/demo/logistics-optimization" // Placeholder for internal API
  },
  {
    id: 4,
    title: "Personalisierte Content-Erstellung für Marketingkampagnen",
    industry: "Marketing & Werbung",
    challenge: "Zeitaufwändige Erstellung von zielgruppenspezifischem Marketing-Content und geringe Engagement-Raten.",
    solution: "Nutzung von GenAI zur automatisierten Erstellung von Texten, Bildern und sogar Video-Snippets, die auf individuelle Kundenprofile und -präferenzen zugeschnitten sind.",
    tools: ["Generative Adversarial Networks (GANs)", "GPT-4", "Python", "Adobe Creative Cloud APIs"],
    benefit: "Steigerung der Conversion-Rate um 18%, Reduktion der Content-Erstellungszeit um 70%, höhere Markenbindung durch personalisierte Ansprache.",
    // imageUrl: "/public/images/marketing_content.jpg", // Removed as image does not exist
    // No demo for this one or a link to a portfolio page
    demoType: "none",
  }
];

export default caseStudies;