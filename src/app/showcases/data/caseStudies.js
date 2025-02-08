// src/app/showcases/data/caseStudies.js
const caseStudies = [
  {
    id: 1,
    title: "Production Line Anomaly Detection",
    industry: "Manufacturing",
    challenge: "High false positives in QC reports",
    solution: "Fine-tuned Vision Transformer for defect classification",
    tools: ["HuggingFace Transformers", "FastAPI", "React Dashboard"],
    benefit: "30% reduction in false positives",
    demoType: "huggingface",
    demoUrl: "https://huggingface.co/spaces/yourusername/production-anomaly-demo"
  },
  {
    id: 2,
    title: "Intelligent Logistics Routing",
    industry: "Logistics",
    challenge: "Suboptimal delivery routes",
    solution: "LLM-powered route optimization with real-time NLP interface",
    tools: ["LangChain", "OpenAI GPT-4", "Python GeoPy"],
    benefit: "15% fuel cost reduction",
    demoType: "api",
    demoEndpoint: "/api/logistics-demo"
  }
];

export default caseStudies;