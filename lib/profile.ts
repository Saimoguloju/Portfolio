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
    "I build AI agents, voice systems, and retrieval pipelines that run in live customer operations. About two years in, currently leading AI engineering at Elision Technologies.",
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
        "An end-to-end voice platform processing thousands of customer calls a day. Speech-to-text, text-to-speech, LLM orchestration, call analytics, evaluation, observability, and reliability monitoring sit in one system.",
    },
    {
      title: "EngageIQ",
      meta: "Elision Technologies · 2025",
      summary:
        "A customer-interaction platform on Supabase and Pinecone, with Whisper-based speech intelligence, retrieval-augmented generation, and production monitoring and tracing.",
    },
    {
      title: "lc-shift",
      meta: "Open source · Python package",
      summary:
        "A multi-LLM router that chooses a model from prompt complexity, latency, and cost. It orchestrates OpenAI, Gemini, Claude, and Ollama without baking one provider into the application.",
      links: [
        { label: "GitHub", href: "https://github.com/Saimoguloju/lc-shift" },
        { label: "PyPI", href: "https://pypi.org/project/lc-shift/" },
      ],
    },
    {
      title: "OpenSRE",
      meta: "Open source · DevOps agent",
      summary:
        "An autonomous DevOps and SRE agent built with LangGraph. The loop is detect, analyze, decide, act: root-cause analysis, remediation suggestions, and alerts to Slack, Telegram, and WhatsApp. Packaged for Docker.",
      links: [{ label: "GitHub", href: "https://github.com/Saimoguloju" }],
    },
    {
      title: "Multilingual voice agents",
      meta: "Elision Technologies · 2025",
      summary:
        "Customer-support agents with accent handling, live conversation, retrieval, hallucination detection, ticket automation, and intelligent call transfer, built with Vapi.",
    },
  ] satisfies WorkItem[],
  systems: [
    {
      name: "Voice",
      summary:
        "Speech-to-text and text-to-speech pipelines for live calls and post-call review, using Vapi, Deepgram, Twilio, ElevenLabs, and Whisper.",
    },
    {
      name: "Agents",
      summary:
        "Multi-agent workflows with LangGraph and tool calling, including OpenClaw workspaces for CRM, WhatsApp, email, and support.",
    },
    {
      name: "Retrieval",
      summary:
        "Retrieval-augmented generation with Pinecone, knowledge bases, hallucination checks, and feedback loops that tighten what the model is allowed to say.",
    },
    {
      name: "Routing",
      summary:
        "Model orchestration across OpenAI, Claude, Gemini, and Mistral, with fallbacks chosen for latency and cost.",
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
      dates: "Nov 2025 — Present",
      summary:
        "Leading the AI engineering team. Production agents, the voice intelligence platform, routing across OpenAI, Claude, Gemini, and Mistral, n8n workflows, and FastAPI services shipped with Docker.",
    },
    {
      title: "AI & Automation Engineer",
      org: "Expedify",
      dates: "Jun 2025 — Oct 2025",
      logo: expedifyLogo,
      summary:
        "Turned product and marketing needs into automation. Lead-generation pipelines in n8n, an internal node-based workflow system, and LLM and retrieval automations, including TDS tasks.",
    },
    {
      title: "AI Engineer",
      org: "Helios Core AI",
      dates: "Feb 2025 — May 2025",
      logo: heliosLogo,
      summary:
        "FastAPI microservices for conversational AI and document summarization across PDF, DOCX, and TXT. Azure Cognitive Services for speech, Azure Blob Storage for files, and Docker deployments with SSL.",
    },
  ] satisfies Role[],
  education: {
    degree: "Bachelor of Technology in Data Science",
    school: "TKR College of Engineering and Technology",
    dates: "Sep 2020 — Jul 2024",
  },
  certifications:
    "AWS Fundamentals on Coursera, Data Science with Python from NPTEL, and Agentic AI with LangChain and LangGraph on Udemy.",
  community:
    "Writes on Medium and LinkedIn, with 18K+ LinkedIn followers, and runs a Telugu Data Science community across Twitter, WhatsApp, and YouTube.",
  skills: [
    "Python",
    "TypeScript",
    "JavaScript",
    "FastAPI",
    "React",
    "LangChain",
    "LangGraph",
    "PostgreSQL",
    "Supabase",
    "Pinecone",
    "Redis",
    "Docker",
    "AWS",
    "GCP",
    "Azure",
    "Vapi",
    "Deepgram",
    "ElevenLabs",
    "Whisper",
  ],
};
