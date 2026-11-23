import type { StaticImageData } from "next/image";
import expedifyLogo from "@/Images/Expedify.png";
import githubIcon from "@/Images/GitHub.png";
import heliosLogo from "@/Images/Helios Core AI.png";
import huggingfaceIcon from "@/Images/Hugging Face.png";
import linkedinIcon from "@/Images/LinkedIn.png";
import profilePhoto from "@/Images/profile_image.png";

export type ProfileLink = {
  label: string;
  href: string;
  icon?: StaticImageData;
};

export type WorkItem = {
  title: string;
  meta: string;
  summary: string;
  links?: ProfileLink[];
};

export type SystemItem = {
  name: string;
  summary: string;
};

export type Principle = {
  label: string;
  text: string;
};

export type Role = {
  title: string;
  org: string;
  dates: string;
  summary: string;
  highlights?: string[];
  orgUrl?: string;
  logo?: StaticImageData;
};

export const profile = {
  name: "Moguloju Sai",
  roles: [
    "Full Stack AI Engineer",
    "Forward Deployed Engineer",
    "Automation Specialist",
    "Integration Engineer",
  ],
  location: "India",
  email: "saimoguloju2@gmail.com",
  phone: "+91 9398053071",
  phoneHref: "tel:+919398053071",
  photo: profilePhoto,
  headline: "Production AI, built for real operations.",
  summary:
    "I build AI agents, SWE agents, RAG systems, multi-agent architectures, enterprise automation, and voice AI that run in live customer operations. About two years in, currently leading AI engineering at Elision Technologies.",
  links: [
    { label: "GitHub", href: "https://github.com/Saimoguloju", icon: githubIcon },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/moguloju-sai-2b060b228",
      icon: linkedinIcon,
    },
    {
      label: "Hugging Face",
      href: "https://huggingface.co/MogulojuSai",
      icon: huggingfaceIcon,
    },
  ] satisfies ProfileLink[],
  work: [
    {
      title: "Voice Intelligence Platform",
      meta: "Elision Technologies · 2025",
      summary:
        "An end-to-end voice platform processing thousands of customer calls a day. Speech-to-text, text-to-speech, LLM orchestration, call analytics, AI evaluation, observability, and reliability monitoring sit in one system.",
    },
    {
      title: "Multilingual voice agents",
      meta: "Elision Technologies · 2025",
      summary:
        "Customer-support agents with accent handling, real-time conversation, RAG-based knowledge retrieval, hallucination detection, ticket automation, and intelligent call transfer, built with Vapi.",
    },
    {
      title: "EngageIQ",
      meta: "Elision Technologies · 2025",
      summary:
        "A customer-interaction and voice-analytics platform on Supabase and Pinecone, with Whisper-based speech intelligence, retrieval-augmented generation, and production monitoring and tracing.",
    },
    {
      title: "OpenClaw AI workspaces",
      meta: "Elision Technologies · 2025",
      summary:
        "AI workspaces for lead generation, Pipedrive CRM integration, WhatsApp automation, customer support, email automation, and internal business workflows.",
    },
    {
      title: "lc-shift",
      meta: "Open source · Python package",
      summary:
        "A multi-LLM routing framework that picks a model from prompt complexity, latency, and cost. Prompt classification and dynamic inference routing across OpenAI, Gemini, Claude, and Ollama, without baking one provider into the application.",
      links: [
        { label: "GitHub", href: "https://github.com/Saimoguloju/lc-shift" },
        { label: "PyPI", href: "https://pypi.org/project/lc-shift/" },
      ],
    },
    {
      title: "OpenSRE",
      meta: "Open source · DevOps agent",
      summary:
        "An autonomous DevOps and SRE agent built with LangGraph. The loop is detect, analyze, decide, act: root-cause analysis, remediation suggestions, and real-time incident alerts to Slack, Telegram, and WhatsApp. Packaged for Docker.",
      links: [{ label: "GitHub", href: "https://github.com/Saimoguloju" }],
    },
  ] satisfies WorkItem[],
  systems: [
    {
      name: "Voice",
      summary:
        "Speech-to-text and text-to-speech pipelines for live calls and post-call review, using Vapi, Deepgram, Twilio, ElevenLabs, Whisper, Pipecat, and LiveKit.",
    },
    {
      name: "Agents",
      summary:
        "AI agents, SWE agents, and multi-agent workflows with LangGraph, CrewAI, and tool calling, plus n8n automations and OpenClaw workspaces for CRM, WhatsApp, email, and support.",
    },
    {
      name: "Retrieval",
      summary:
        "Retrieval-augmented generation with Pinecone and knowledge bases, hallucination checks, guardrails, evals, and feedback loops that tighten what the model is allowed to say.",
    },
    {
      name: "Routing",
      summary:
        "Multi-LLM orchestration across OpenAI, Claude, Gemini, and Mistral, with intelligent routing, fallbacks, latency optimization, and cost-aware inference.",
    },
  ] satisfies SystemItem[],
  principles: [
    {
      label: "Evaluation",
      text: "A demo is not a system. I measure retrieval, hallucination, latency, and the failures that show up after a call is live.",
    },
    {
      label: "Routing",
      text: "One model for every prompt is either wasteful or too weak. I route by complexity, latency, and cost, and I keep a fallback.",
    },
    {
      label: "Voice",
      text: "A voice agent is a latency budget. Transcription, the answer, and the spoken reply have to hold together while someone is still on the line.",
    },
  ] satisfies Principle[],
  experience: [
    {
      title: "Full Stack AI Engineer",
      org: "Elision Technologies",
      orgUrl: "https://www.linkedin.com/company/elision-technolab-llp/",
      dates: "Nov 2025 - Present",
      summary:
        "Leading the AI engineering team in designing, developing, and deploying production-grade AI agents, voice AI systems, RAG platforms, multi-agent architectures, and enterprise automation.",
      highlights: [
        "Architected and scaled a Voice Intelligence Platform processing thousands of customer calls daily, with STT, TTS, LLM orchestration, call analytics, evals, and reliability monitoring.",
        "Built multilingual voice support agents with accent handling, RAG-based retrieval, hallucination detection, ticket automation, and call transfer using Vapi.",
        "Implemented evals, tracing, and observability pipelines and dashboards tracking response quality, retrieval accuracy, hallucination rates, latency, and failure patterns.",
        "Architected multi-LLM orchestration across OpenAI, Claude, Gemini, and Mistral with model routing, fallbacks, and cost-aware inference.",
        "Built OpenClaw AI workspaces and production n8n workflows for lead generation, Pipedrive CRM, WhatsApp, email, and support automation.",
        "Built and deployed EngageIQ on Supabase, Pinecone, and Whisper, and shipped FastAPI microservices in Docker with centralized logging and fault-tolerant design.",
      ],
    },
    {
      title: "AI & Automation Engineer",
      org: "Expedify",
      orgUrl: "https://www.linkedin.com/company/expedify/",
      dates: "Jun 2025 - Oct 2025",
      logo: expedifyLogo,
      summary:
        "Worked with product and marketing teams to turn business requirements into scalable AI automation.",
      highlights: [
        "Designed and optimized lead-generation pipelines in n8n, integrating data scraping tools and APIs to automate outreach.",
        "Helped build an internal workflow automation system modelled on n8n's node-based architecture.",
        "Deployed LLM and RAG automations that streamlined internal processes, including TDS tasks.",
      ],
    },
    {
      title: "AI Engineer",
      org: "Helios Core AI",
      orgUrl: "https://www.linkedin.com/company/helios-core/",
      dates: "Feb 2025 - May 2025",
      logo: heliosLogo,
      summary:
        "Built AI-powered FastAPI microservices delivering conversational AI and document intelligence through REST APIs.",
      highlights: [
        "Built conversational AI workflows with OpenAI and LangChain, and document summarization for PDF, DOCX, and TXT.",
        "Integrated Azure Cognitive Services for speech-to-text and text-to-speech, and Azure Blob Storage for secure file handling.",
        "Worked on session management and data modelling with Pydantic, following SOLID principles with unit and integration tests.",
        "Deployed with Docker and Uvicorn, including SSL configuration.",
      ],
    },
  ] satisfies Role[],
  education: {
    degree: "Bachelor of Technology in Data Science",
    school: "TKR College of Engineering and Technology",
    dates: "Sep 2020 - Jul 2024",
  },
  certifications:
    "AWS Fundamentals on Coursera, Data Science with Python from NPTEL, and Agentic AI with LangChain and LangGraph on Udemy.",
  community:
    "Writes on Medium and LinkedIn, with 18K+ LinkedIn followers, and runs a Telugu Data Science community across Twitter, WhatsApp, and YouTube.",
  interests:
    "Exploring Quantum AI: how quantum computing can accelerate next-generation AI systems, optimization, model training, and reasoning.",
  skills: [
    // Languages
    "Python",
    "TypeScript",
    "JavaScript",
    "Java",
    // AI and agents
    "AI Agents",
    "Multi-Agent Systems",
    "RAG",
    "MCP",
    "OpenClaw",
    "Fine-tuning",
    "LoRA",
    "QLoRA",
    "AI Guardrails",
    "AI Evals",
    // Frameworks
    "FastAPI",
    "React",
    "LangChain",
    "LangGraph",
    "LangSmith",
    "CrewAI",
    "n8n",
    // Voice
    "Vapi",
    "Pipecat",
    "LiveKit",
    "Deepgram",
    "Twilio",
    "ElevenLabs",
    "Whisper",
    // Data
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Supabase",
    "Pinecone",
    "Redis",
    // DevOps and cloud
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Git",
    "AWS",
    "GCP",
    "Azure",
  ],
};
