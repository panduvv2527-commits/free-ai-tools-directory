const aiTools = [
    // General Purpose & Reasoning
    {
        id: 1,
        name: "ChatGPT",
        icon: "💬",
        category: "general-purpose",
        description: "All-in-one assistant for writing, research, data analysis, image generation & voice chat.",
        url: "https://chatgpt.com"
    },
    {
        id: 2,
        name: "Claude",
        icon: "🧠",
        category: "general-purpose",
        description: "Handles long documents, deep research & complex writing; strong at contract review and strategic planning.",
        url: "https://claude.ai"
    },
    {
        id: 3,
        name: "DeepSeek",
        icon: "🔍",
        category: "general-purpose",
        description: "Strong text/code models plus a reasoning mode; supports web search & file uploads.",
        url: "https://deepseek.com"
    },
    {
        id: 4,
        name: "Microsoft Copilot",
        icon: "🪟",
        category: "general-purpose",
        description: "Works inside Word, Excel, Outlook, PowerPoint & Teams for drafting, data analysis & meeting summaries.",
        url: "https://copilot.microsoft.com"
    },
    {
        id: 5,
        name: "Google Gemini",
        icon: "✨",
        category: "general-purpose",
        description: "Integrated into Gmail, Docs, Sheets & Slides for writing, research & AI-generated presentations.",
        url: "https://gemini.google.com"
    },
    {
        id: 6,
        name: "Notion AI",
        icon: "📝",
        category: "productivity",
        description: "Summarizes meeting notes, writes project docs, creates task lists & answers questions across company knowledge.",
        url: "https://notion.so"
    },

    // Coding & Development
    {
        id: 7,
        name: "Cursor",
        icon: "💻",
        category: "code",
        description: "AI-first code editor that reads your whole repo & makes multi-file edits; popular for debugging and refactoring.",
        url: "https://cursor.sh"
    },
    {
        id: 8,
        name: "GitHub Copilot",
        icon: "🐙",
        category: "code",
        description: "AI pair programmer inside your IDE; best for GitHub-centric teams on a budget.",
        url: "https://github.com/features/copilot"
    },
    {
        id: 9,
        name: "Claude Code",
        icon: "⚙️",
        category: "code",
        description: "Terminal-based agent for deep multi-file refactors and large codebase understanding.",
        url: "https://claude.ai"
    },

    // Creative & Design
    {
        id: 10,
        name: "Midjourney",
        icon: "🎨",
        category: "image-generation",
        description: "Generates high-quality, artistic & photorealistic images; strong for brainstorming and storyboarding.",
        url: "https://midjourney.com"
    },
    {
        id: 11,
        name: "Adobe Firefly",
        icon: "🔥",
        category: "image-generation",
        description: "Commercially safe image & video generation for brand work; integrates with Creative Cloud.",
        url: "https://firefly.adobe.com"
    },
    {
        id: 12,
        name: "Canva Magic Studio",
        icon: "🎭",
        category: "design",
        description: "One-click background removal, resizing & graphic generation; great for non-designers.",
        url: "https://canva.com"
    },
    {
        id: 13,
        name: "Runway Gen-3",
        icon: "🎬",
        category: "video",
        description: "Text-to-video & image-to-video for cinematic clips and VFX.",
        url: "https://runway.ml"
    },
    {
        id: 14,
        name: "ElevenLabs",
        icon: "🎤",
        category: "music",
        description: "Realistic voice generation, cloning & dubbing in 70+ languages.",
        url: "https://elevenlabs.io"
    },

    // Writing & Content
    {
        id: 15,
        name: "Grammarly",
        icon: "✍️",
        category: "writing",
        description: "AI writing assistant for grammar, tone, clarity & style.",
        url: "https://grammarly.com"
    },
    {
        id: 16,
        name: "Anyword",
        icon: "📊",
        category: "writing",
        description: "Performance-marketing copy generator with predictive scoring to compare variants before publishing.",
        url: "https://anyword.com"
    },
    {
        id: 17,
        name: "Frase",
        icon: "📚",
        category: "writing",
        description: "Combines SEO research, AI drafting, publishing & content monitoring in one platform.",
        url: "https://frase.io"
    },
    {
        id: 18,
        name: "QuillBot",
        icon: "🖊️",
        category: "writing",
        description: "Focused on paraphrasing and sentence-level rewriting rather than full content generation.",
        url: "https://quillbot.com"
    },

    // Presentations
    {
        id: 19,
        name: "Zoho Show",
        icon: "🎪",
        category: "presentations",
        description: "Free cloud presentation tool with Zia AI for generating slides from a basic idea.",
        url: "https://zoho.com/show"
    },
    {
        id: 20,
        name: "Slides",
        icon: "💡",
        category: "presentations",
        description: "Browser-based tool for web-style decks; includes AI copywriter and translation into 40+ languages.",
        url: "https://slides.com"
    },
    {
        id: 21,
        name: "Keynote",
        icon: "🍎",
        category: "presentations",
        description: "Apple's presentation app with strong visual polish and built-in Apple Intelligence features.",
        url: "https://apple.com/keynote"
    },

    // Research & Academic
    {
        id: 22,
        name: "Semantic Scholar",
        icon: "🔬",
        category: "research",
        description: "Free access to 200M+ papers with no account required.",
        url: "https://semanticscholar.org"
    },
    {
        id: 23,
        name: "Elicit",
        icon: "📖",
        category: "research",
        description: "Literature discovery tool that links answers directly to scholarly papers.",
        url: "https://elicit.org"
    },
    {
        id: 24,
        name: "ResearchRabbit",
        icon: "🐰",
        category: "research",
        description: "Citation mapping and field exploration; free tier supports up to 50 seed articles.",
        url: "https://researchrabbitapp.com"
    },
    {
        id: 25,
        name: "SciSpace",
        icon: "🧪",
        category: "research",
        description: "Helps understand dense papers by explaining concepts and answering questions.",
        url: "https://scispace.com"
    },
    {
        id: 26,
        name: "Scite",
        icon: "🎯",
        category: "research",
        description: "Verifies whether key claims still hold up in newer literature.",
        url: "https://scite.ai"
    },

    // Music & Audio
    {
        id: 27,
        name: "Suno",
        icon: "🎵",
        category: "music",
        description: "Generates full songs with lyrics and melody from a text prompt; handles Hinglish and Bollywood styles well.",
        url: "https://suno.ai"
    },
    {
        id: 28,
        name: "Udio",
        icon: "🎸",
        category: "music",
        description: "Producer-focused tool with timeline edits, inpainting & stem downloads for DAW integration.",
        url: "https://udio.com"
    },
    {
        id: 29,
        name: "Beatoven.ai",
        icon: "🎼",
        category: "music",
        description: "Composes background soundtracks for videos by selecting emotions per timeline section.",
        url: "https://beatoven.ai"
    },
    {
        id: 30,
        name: "Murf",
        icon: "🔊",
        category: "music",
        description: "Text-to-speech with emphasis on vocal quality and enterprise scalability.",
        url: "https://murf.ai"
    },

    // Productivity & Business
    {
        id: 31,
        name: "Perplexity",
        icon: "🌐",
        category: "productivity",
        description: "AI search engine with cited answers for reliable research.",
        url: "https://perplexity.ai"
    },
    {
        id: 32,
        name: "Otter.ai",
        icon: "📱",
        category: "productivity",
        description: "Live transcription and AI meeting summaries with speaker identification.",
        url: "https://otter.ai"
    },
    {
        id: 33,
        name: "Granola",
        icon: "🎙️",
        category: "productivity",
        description: "Captures meeting audio locally without a bot joining; generates notes after the call.",
        url: "https://granola.ai"
    },
    {
        id: 34,
        name: "Fathom",
        icon: "🎯",
        category: "productivity",
        description: "Strong free tier for meeting recording and transcription; includes CRM sync.",
        url: "https://fathom.video"
    },
    {
        id: 35,
        name: "Zapier",
        icon: "⚡",
        category: "productivity",
        description: "No-code automation to connect apps & add AI steps to workflows.",
        url: "https://zapier.com"
    },
    {
        id: 36,
        name: "n8n",
        icon: "🔗",
        category: "productivity",
        description: "Open-source no-code automation platform to connect apps & add AI steps to workflows.",
        url: "https://n8n.io"
    },

    // Analytics & Data
    {
        id: 37,
        name: "ChatGPT Advanced Data Analysis",
        icon: "📊",
        category: "analytics",
        description: "Upload CSV/Excel files and run Python analysis, statistical tests & visualizations in chat.",
        url: "https://chatgpt.com"
    },
    {
        id: 38,
        name: "Snowflake Cortex",
        icon: "❄️",
        category: "analytics",
        description: "LLM functions directly inside SQL queries for text generation, sentiment & summarization.",
        url: "https://snowflake.com/cortex"
    },
    {
        id: 39,
        name: "Qlik Predict",
        icon: "🔮",
        category: "analytics",
        description: "No-code ML for prediction and scenario planning with explainable AI.",
        url: "https://qlik.com/predict"
    },

    // Website Builders
    {
        id: 40,
        name: "Wix",
        icon: "🌍",
        category: "website-builders",
        description: "Most mature AI site generation; answers a few questions and produces a complete site with images.",
        url: "https://wix.com"
    },
    {
        id: 41,
        name: "Squarespace",
        icon: "🎨",
        category: "website-builders",
        description: "Best design quality with polished templates; AI handles first-draft layout and copy.",
        url: "https://squarespace.com"
    },
    {
        id: 42,
        name: "one.com",
        icon: "💼",
        category: "website-builders",
        description: "Bundles site, domain, email & SSL from around £1/month; ideal for small businesses wanting one bill.",
        url: "https://one.com"
    },

    // Customer Support
    {
        id: 43,
        name: "LiveAgent",
        icon: "💬",
        category: "customer-support",
        description: "AI chatbot platform with configurable scope per industry; connects to order data for e-commerce, docs for SaaS.",
        url: "https://liveagent.com"
    },
    {
        id: 44,
        name: "Intercom",
        icon: "📞",
        category: "customer-support",
        description: "General-purpose support automation with escalation rules for refunds, billing & clinical questions.",
        url: "https://intercom.com"
    },
    {
        id: 45,
        name: "Zendesk AI",
        icon: "🤝",
        category: "customer-support",
        description: "Enterprise support automation with AI-powered ticketing, routing & customer satisfaction.",
        url: "https://zendesk.com"
    }
];
