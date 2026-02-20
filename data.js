// PC Essentials - Peripherals Data

const PERIPHERALS_DATA = {
    mouse: [
        {
            brand: "Logitech",
            name: "G Pro X Superlight 2",
            price: "$159",
            specs: ["60g", "4K Polling", "HERO 2 Sensor", "95hrs Battery"],
            whyPick: "The ultimate wireless gaming mouse. Insanely light, flawless sensor, and pro-level performance.",
            tags: ["fastest", "pro"],
            logo: "https://logo.clearbit.com/logitech.com",
            amazon: "https://www.amazon.com/s?k=Logitech+G+Pro+X+Superlight+2",
            details: "Features HERO 2 sensor with 44K DPI, LIGHTSPEED wireless technology, 5 programmable buttons, and PTFE feet. Used by top esports professionals worldwide."
        },
        {
            brand: "Razer",
            name: "DeathAdder V3 Pro",
            price: "$149",
            specs: ["63g", "8K Polling", "Focus Pro 35K", "90hrs Battery"],
            whyPick: "Ergonomic perfection for palm grip. Incredibly comfortable for long sessions.",
            tags: ["smoothest", "pro"],
            logo: "https://logo.clearbit.com/razer.com",
            amazon: "https://www.amazon.com/s?k=Razer+DeathAdder+V3+Pro",
            details: "Classic ergonomic shape refined over 15 years. Focus Pro 35K optical sensor, HyperSpeed wireless, and optical mouse switches Gen-3."
        },
        {
            brand: "Pulsar",
            name: "X2 Mini",
            price: "$99",
            specs: ["52g", "4K Polling", "PAW3395", "70hrs Battery"],
            whyPick: "Tiny and fast. Perfect for fingertip and claw grip players who want speed.",
            tags: ["fastest", "budget"],
            logo: "https://logo.clearbit.com/pulsargg.com",
            amazon: "https://www.amazon.com/s?k=Pulsar+X2+Mini+wireless+mouse",
            details: "Symmetrical mini shape at just 52g. Features top-tier PAW3395 sensor, Kailh GM 8.0 switches, and premium build quality."
        },
        {
            brand: "Zowie",
            name: "EC2-CW",
            price: "$149",
            specs: ["77g", "1K Polling", "3395 Sensor", "70hrs Battery"],
            whyPick: "Classic shape loved by CS pros. No software needed, just plug and play.",
            tags: ["smoothest", "pro"],
            logo: "https://logo.clearbit.com/zowie.benq.com",
            amazon: "https://www.amazon.com/s?k=Zowie+EC2-CW",
            details: "The legendary EC shape now wireless. No software needed, plug and play design. Trusted by CS professionals for over a decade."
        },
        {
            brand: "Lamzu",
            name: "Atlantis Mini Pro",
            price: "$89",
            specs: ["49g", "4K Polling", "PAW3395", "80hrs Battery"],
            whyPick: "Ultralight beast. Amazing value for a competitive mouse.",
            tags: ["fastest", "budget"],
            logo: "https://logo.clearbit.com/lamzu.gg",
            amazon: "https://www.amazon.com/s?k=Lamzu+Atlantis+Mini+Pro",
            details: "Incredible 49g weight with no holes. 4K Hz polling rate, PAW3395 sensor, and premium Huano switches. Best value ultralight mouse."
        },
        {
            brand: "Finalmouse",
            name: "UltralightX",
            price: "$189",
            specs: ["40g", "8K Polling", "Custom Sensor", "150hrs Battery"],
            whyPick: "The lightest gaming mouse ever made. For those who want the absolute minimum weight.",
            tags: ["fastest", "pro"],
            logo: "https://logo.clearbit.com/finalmouse.com",
            amazon: "https://www.amazon.com/s?k=Finalmouse+UltralightX",
            details: "Revolutionary 40g weight with magnesium alloy shell. Custom sensor, 8K polling, and 150+ hour battery life. The pinnacle of lightweight design."
        },
        {
            brand: "Logitech",
            name: "G502 X Plus",
            price: "$159",
            specs: ["106g", "LIGHTSPEED", "HERO 25K", "130hrs Battery"],
            whyPick: "Feature-packed with infinite scroll wheel and tons of buttons. Great for productivity too.",
            tags: ["smoothest"],
            logo: "https://logo.clearbit.com/logitech.com",
            amazon: "https://www.amazon.com/s?k=Logitech+G502+X+Plus",
            details: "13 programmable buttons, infinite scroll wheel, adjustable weight system, LIGHTFORCE hybrid switches, and RGB lighting."
        },
        {
            brand: "Razer",
            name: "Viper V3 Pro",
            price: "$159",
            specs: ["54g", "8K Polling", "Focus Pro 35K", "95hrs Battery"],
            whyPick: "Symmetrical shape with top-tier specs. Great for ambidextrous users.",
            tags: ["fastest", "pro"],
            logo: "https://logo.clearbit.com/razer.com",
            amazon: "https://www.amazon.com/s?k=Razer+Viper+V3+Pro",
            details: "Symmetrical esports shape at just 54g. 8K Hz polling, Focus Pro 35K sensor, and optical switches. Used by top Valorant pros."
        },
        {
            brand: "SteelSeries",
            name: "Aerox 3 Wireless",
            price: "$79",
            specs: ["68g", "1K Polling", "TrueMove Air", "200hrs Battery"],
            whyPick: "Honeycomb design, super light, and incredible battery life on a budget.",
            tags: ["budget"],
            logo: "https://logo.clearbit.com/steelseries.com",
            amazon: "https://www.amazon.com/s?k=SteelSeries+Aerox+3+Wireless",
            details: "Honeycomb shell design, IP54 water resistance, 200 hour battery, and Quantum 2.0 wireless. Great value lightweight option."
        },
        {
            brand: "Glorious",
            name: "Model O 2 Wireless",
            price: "$79",
            specs: ["68g", "4K Polling", "BAMF 2.0 Sensor", "110hrs Battery"],
            whyPick: "Affordable wireless with premium features. Hard to beat at this price.",
            tags: ["budget", "smoothest"],
            logo: "https://logo.clearbit.com/gloriousgaming.com",
            amazon: "https://www.amazon.com/s?k=Glorious+Model+O+2+Wireless",
            details: "Updated BAMF 2.0 sensor, 4K Hz polling, Glorious switches rated for 80M clicks, and improved shape. Best budget wireless mouse."
        },
        {
            brand: "Endgame Gear",
            name: "OP1we",
            price: "$89",
            specs: ["59g", "4K Polling", "PAW3395", "80hrs Battery"],
            whyPick: "Unique shape with swappable side panels. Highly customizable.",
            tags: ["smoothest", "budget"],
            logo: "https://logo.clearbit.com/endgamegear.com",
            amazon: "https://www.amazon.com/s?k=Endgame+Gear+OP1we",
            details: "Unique egg shape with interchangeable side grips. PAW3395 sensor, Kailh GM 8.0 switches, and 4K Hz wireless polling."
        },
        {
            brand: "Cooler Master",
            name: "MM712",
            price: "$59",
            specs: ["59g", "1K Polling", "PAW3389", "180hrs Battery"],
            whyPick: "Budget king. Lightweight wireless gaming at an unbeatable price.",
            tags: ["budget"],
            logo: "https://logo.clearbit.com/coolermaster.com",
            amazon: "https://www.amazon.com/s?k=Cooler+Master+MM712",
            details: "Ultraweave cable, optical micro switches, hybrid wireless technology, and insane 180 hour battery. Unbeatable value."
        }
    ],
    keyboard: [
        {
            brand: "Wooting",
            name: "Wooting 60HE+",
            price: "$175",
            specs: ["60%", "Hall Effect", "Adjustable Actuation", "Rapid Trigger"],
            whyPick: "The best gaming keyboard period. Rapid trigger gives you an unfair advantage in shooters.",
            tags: ["fastest", "pro"],
            logo: "https://logo.clearbit.com/wooting.io",
            amazon: "https://www.amazon.com/s?k=Wooting+60HE",
            details: "Lekker magnetic switches with 0.1mm-4mm adjustable actuation. Rapid Trigger, Mod Tap, and Toggle features. The competitive FPS standard."
        },
        {
            brand: "Razer",
            name: "Huntsman V3 Pro",
            price: "$249",
            specs: ["Full Size", "Analog Optical", "Rapid Trigger", "8K Polling"],
            whyPick: "Razer's answer to Hall Effect. Premium build with Snap Tap support.",
            tags: ["fastest", "pro"],
            logo: "https://logo.clearbit.com/razer.com",
            amazon: "https://www.amazon.com/s?k=Razer+Huntsman+V3+Pro",
            details: "Analog optical switches with adjustable actuation. Features Snap Tap, Rapid Trigger, 8K Hz polling, and magnetic wrist rest."
        },
        {
            brand: "SteelSeries",
            name: "Apex Pro TKL",
            price: "$189",
            specs: ["TKL", "OmniPoint 2.0", "Adjustable Actuation", "OLED Screen"],
            whyPick: "Magnetic switches with per-key actuation settings. Very versatile.",
            tags: ["fastest", "smoothest"],
            logo: "https://logo.clearbit.com/steelseries.com",
            amazon: "https://www.amazon.com/s?k=SteelSeries+Apex+Pro+TKL",
            details: "OmniPoint 2.0 adjustable switches (0.2mm-3.8mm). Features OLED smart display, aircraft-grade aluminum frame, and RGB per key."
        },
        {
            brand: "Keychron",
            name: "Q1 Pro",
            price: "$199",
            specs: ["75%", "Gasket Mount", "Hot-swap", "Wireless"],
            whyPick: "Premium typing experience with wireless. Great for work and gaming.",
            tags: ["smoothest", "quiet"],
            logo: "https://logo.clearbit.com/keychron.com",
            amazon: "https://www.amazon.com/s?k=Keychron+Q1+Pro",
            details: "Full aluminum CNC machined body, double gasket design, south-facing RGB, QMK/VIA support, and 2.4GHz/Bluetooth wireless."
        },
        {
            brand: "DrunkDeer",
            name: "A75",
            price: "$109",
            specs: ["75%", "Hall Effect", "Rapid Trigger", "Hot-swap"],
            whyPick: "Budget Hall Effect with rapid trigger. Incredible value for competitive gaming.",
            tags: ["fastest", "budget"],
            logo: "https://logo.clearbit.com/drunkdeer.com",
            amazon: "https://www.amazon.com/s?k=DrunkDeer+A75",
            details: "Magnetic switches with Rapid Trigger at half the price of competitors. Adjustable actuation 0.2mm-3.6mm, hot-swap sockets, and RGB."
        },
        {
            brand: "Akko",
            name: "5075B Plus",
            price: "$99",
            specs: ["75%", "Gasket Mount", "Hot-swap", "Wireless"],
            whyPick: "Budget gasket mount with wireless. Sounds and feels premium.",
            tags: ["budget", "smoothest"],
            logo: "https://logo.clearbit.com/akkogear.com",
            amazon: "https://www.amazon.com/s?k=Akko+5075B+Plus",
            details: "Cream Yellow switches, poron foam dampening, gasket mount structure, tri-mode wireless, and PBT keycaps. Insane value."
        },
        {
            brand: "HHKB",
            name: "Professional Hybrid Type-S",
            price: "$350",
            specs: ["60%", "Topre 45g", "Silent", "Wireless"],
            whyPick: "Legendary Topre switches. The ultimate typing experience for enthusiasts.",
            tags: ["smoothest", "quiet", "pro"],
            logo: "https://logo.clearbit.com/hhkeyboard.us",
            amazon: "https://www.amazon.com/s?k=HHKB+Professional+Hybrid+Type-S",
            details: "Topre electrostatic capacitive switches with silencing rings. Unique HHKB layout beloved by programmers. Made in Japan."
        },
        {
            brand: "Nuphy",
            name: "Air75 V2",
            price: "$119",
            specs: ["75%", "Low Profile", "Wireless", "Gateron Switches"],
            whyPick: "Best low-profile mechanical keyboard. Perfect for laptops and travel.",
            tags: ["budget", "quiet"],
            logo: "https://logo.clearbit.com/nuphy.com",
            amazon: "https://www.amazon.com/s?k=Nuphy+Air75+V2",
            details: "Ultra-slim design with Gateron low-profile switches. Tri-mode wireless, PBT keycaps, and backlit RGB. Pairs perfectly with MacBooks."
        },
        {
            brand: "VGN",
            name: "S99",
            price: "$89",
            specs: ["96%", "Gasket Mount", "Hot-swap", "RGB"],
            whyPick: "Full layout in compact form. Budget-friendly with great build quality.",
            tags: ["budget", "smoothest"],
            logo: "https://logo.clearbit.com/vgn.com",
            amazon: "https://www.amazon.com/s?k=VGN+S99+keyboard",
            details: "96% compact layout keeps numpad while saving space. Gasket mount, pre-lubed stabilizers, and south-facing RGB LEDs."
        },
        {
            brand: "Monsgeek",
            name: "M1",
            price: "$79",
            specs: ["75%", "Gasket Mount", "Hot-swap", "Aluminum"],
            whyPick: "Aluminum case at plastic price. Best value gasket mount keyboard.",
            tags: ["budget", "smoothest"],
            logo: "https://logo.clearbit.com/monsgeek.com",
            amazon: "https://www.amazon.com/s?k=Monsgeek+M1+keyboard",
            details: "Full aluminum case, gasket mount, hot-swap PCB, pre-lubed stabilizers. Usually costs $150+, Monsgeek does it for $79."
        },
        {
            brand: "Epomaker",
            name: "RT100",
            price: "$139",
            specs: ["96%", "Hall Effect", "Rapid Trigger", "Retro Design"],
            whyPick: "Unique retro aesthetic with modern Hall Effect tech. Style meets performance.",
            tags: ["fastest", "smoothest"],
            logo: "https://logo.clearbit.com/epomaker.com",
            amazon: "https://www.amazon.com/s?k=Epomaker+RT100",
            details: "Retro CRT-inspired design with Hall Effect magnetic switches. Features Rapid Trigger, tri-mode wireless, and a functional mini screen."
        },
        {
            brand: "Meletrix",
            name: "Zoom75",
            price: "$299",
            specs: ["75%", "Gasket Mount", "Hot-swap", "E-coating"],
            whyPick: "Premium enthusiast board. Sounds incredible with the right switches.",
            tags: ["smoothest", "pro"],
            logo: "https://logo.clearbit.com/meletrix.com",
            amazon: "https://www.amazon.com/s?k=Meletrix+Zoom75",
            details: "E-coated aluminum case, innovative gasket system, PORON dampening, hot-swap PCB with flex cuts. Endgame for enthusiasts."
        }
    ],
    headset: [
        {
            brand: "SteelSeries",
            name: "Arctis Nova Pro Wireless",
            price: "$349",
            specs: ["Hi-Res Audio", "ANC", "Dual Wireless", "Hot-swap Battery"],
            whyPick: "The ultimate gaming headset. Best audio quality and most features money can buy.",
            tags: ["best", "pro"],
            logo: "https://logo.clearbit.com/steelseries.com",
            amazon: "https://www.amazon.com/s?k=SteelSeries+Arctis+Nova+Pro+Wireless",
            details: "Hi-Res audio drivers, Active Noise Cancellation, simultaneous 2.4GHz + Bluetooth, hot-swap batteries, and premium DAC."
        },
        {
            brand: "Logitech",
            name: "G Pro X 2 Lightspeed",
            price: "$249",
            specs: ["50mm Drivers", "DTS:X 2.0", "Wireless", "48hr Battery"],
            whyPick: "Pro-level esports headset. Used by countless pro players for its reliability.",
            tags: ["best", "pro"],
            logo: "https://logo.clearbit.com/logitech.com",
            amazon: "https://www.amazon.com/s?k=Logitech+G+Pro+X+2+Lightspeed",
            details: "PRO-G 50mm graphene drivers, Blue VO!CE microphone technology, LIGHTSPEED wireless, and memory foam earpads."
        },
        {
            brand: "HyperX",
            name: "Cloud III Wireless",
            price: "$169",
            specs: ["53mm Drivers", "DTS Spatial", "120hr Battery", "Memory Foam"],
            whyPick: "Incredible comfort and insane battery life. Best value premium headset.",
            tags: ["best", "value"],
            logo: "https://logo.clearbit.com/hyperxgaming.com",
            amazon: "https://www.amazon.com/s?k=HyperX+Cloud+III+Wireless",
            details: "Angled 53mm drivers for immersive audio, ultra-comfortable memory foam, 120 hour battery, and durable aluminum frame."
        },
        {
            brand: "Razer",
            name: "BlackShark V2 Pro",
            price: "$179",
            specs: ["50mm Drivers", "THX Spatial", "70hr Battery", "HyperClear Mic"],
            whyPick: "Great sound signature for competitive gaming. Excellent directional audio.",
            tags: ["best", "value"],
            logo: "https://logo.clearbit.com/razer.com",
            amazon: "https://www.amazon.com/s?k=Razer+BlackShark+V2+Pro",
            details: "TriForce Titanium 50mm drivers, THX Spatial Audio, HyperClear Super Wideband mic, and ultra-soft breathable ear cushions."
        },
        {
            brand: "Corsair",
            name: "HS80 RGB Wireless",
            price: "$149",
            specs: ["50mm Drivers", "Dolby Atmos", "Floating Headband", "24hr Battery"],
            whyPick: "Floating headband eliminates pressure points. Super comfortable for long sessions.",
            tags: ["value"],
            logo: "https://logo.clearbit.com/corsair.com",
            amazon: "https://www.amazon.com/s?k=Corsair+HS80+RGB+Wireless",
            details: "Floating headband design, custom-tuned 50mm neodymium drivers, Dolby Atmos support, and broadcast-quality detachable mic."
        },
        {
            brand: "Beyerdynamic",
            name: "DT 900 Pro X",
            price: "$269",
            specs: ["48ohm", "Open-back", "Studio Quality", "Wired"],
            whyPick: "Audiophile choice. Unmatched sound quality with proper soundstage.",
            tags: ["best", "pro"],
            logo: "https://logo.clearbit.com/beyerdynamic.com",
            amazon: "https://www.amazon.com/s?k=Beyerdynamic+DT+900+Pro+X",
            details: "STELLAR.45 drivers, open-back design for natural soundstage, velour earpads, and German engineering. Add a ModMic for gaming."
        },
        {
            brand: "Sennheiser",
            name: "HD 560S",
            price: "$149",
            specs: ["120ohm", "Open-back", "Neutral Sound", "Wired"],
            whyPick: "Neutral reference sound. Great for competitive where audio accuracy matters.",
            tags: ["value", "pro"],
            logo: "https://logo.clearbit.com/sennheiser.com",
            amazon: "https://www.amazon.com/s?k=Sennheiser+HD+560S",
            details: "Reference-grade neutral frequency response, wide soundstage for footstep detection, lightweight design. Pair with ModMic for gaming."
        },
        {
            brand: "Audio-Technica",
            name: "ATH-M50x",
            price: "$149",
            specs: ["38ohm", "Closed-back", "Studio Quality", "Wired"],
            whyPick: "Industry standard studio headphones. Punchy bass and clear highs.",
            tags: ["value"],
            logo: "https://logo.clearbit.com/audio-technica.com",
            amazon: "https://www.amazon.com/s?k=Audio+Technica+ATH-M50x",
            details: "45mm large-aperture drivers, closed-back isolation, foldable design, and detachable cables. Industry standard for a reason."
        },
        {
            brand: "HyperX",
            name: "Cloud Stinger 2",
            price: "$49",
            specs: ["50mm Drivers", "Rotating Cups", "Lightweight", "Wired"],
            whyPick: "Best budget gaming headset. Comfortable and sounds good for the price.",
            tags: ["budget"],
            logo: "https://logo.clearbit.com/hyperxgaming.com",
            amazon: "https://www.amazon.com/s?k=HyperX+Cloud+Stinger+2",
            details: "DTS Headphone:X spatial audio, rotating ear cups, lightweight 275g design, and swivel-to-mute microphone."
        },
        {
            brand: "Logitech",
            name: "G435 Lightspeed",
            price: "$59",
            specs: ["40mm Drivers", "Bluetooth", "165g", "18hr Battery"],
            whyPick: "Ultra-lightweight wireless on a budget. Dual connectivity is a nice bonus.",
            tags: ["budget"],
            logo: "https://logo.clearbit.com/logitech.com",
            amazon: "https://www.amazon.com/s?k=Logitech+G435+Lightspeed",
            details: "Super lightweight 165g, dual wireless (LIGHTSPEED + Bluetooth), built-in mic with beamforming, and made with recycled plastic."
        },
        {
            brand: "Razer",
            name: "Barracuda X",
            price: "$79",
            specs: ["40mm Drivers", "Dual Wireless", "50hr Battery", "250g"],
            whyPick: "Budget wireless with Bluetooth and 2.4GHz. Great for multi-device use.",
            tags: ["budget", "value"],
            logo: "https://logo.clearbit.com/razer.com",
            amazon: "https://www.amazon.com/s?k=Razer+Barracuda+X",
            details: "SmartSwitch dual wireless, 50 hour battery, detachable HyperClear cardioid mic, and memory foam ear cushions."
        },
        {
            brand: "Cooler Master",
            name: "MH752",
            price: "$79",
            specs: ["40mm Drivers", "Virtual 7.1", "USB DAC", "Wired"],
            whyPick: "Based on legendary Takstar Pro 82. Amazing sound for a 'gaming' headset.",
            tags: ["budget", "value"],
            logo: "https://logo.clearbit.com/coolermaster.com",
            amazon: "https://www.amazon.com/s?k=Cooler+Master+MH752",
            details: "Based on acclaimed Takstar Pro 82 headphones, includes USB sound card with 7.1, plush protein leather earpads, and detachable mic."
        }
    ]
};

// AI Tools Data with rankings and availability
const AI_TOOLS_DATA = [
    // === CODING AI ===
    {
        name: "Claude",
        company: "Anthropic",
        description: "Advanced AI assistant excelling at coding, analysis, and thoughtful conversations. Known for nuanced understanding and detailed explanations.",
        bestFor: ["Coding assistance", "Analysis & research", "Creative writing", "Long documents"],
        categories: ["coding", "writing", "research"],
        color: "#D97706",
        url: "https://claude.ai",
        logoFile: null,
        free: true,
        rank: { coding: 1, writing: 2, research: 3 }
    },
    {
        name: "ChatGPT",
        company: "OpenAI",
        description: "Versatile AI chatbot for conversations, writing, coding, and creative tasks. The most widely used AI assistant.",
        bestFor: ["General conversations", "Creative writing", "Learning & explanations", "Quick research"],
        categories: ["writing", "coding", "research", "general"],
        color: "#10A37F",
        url: "https://chat.openai.com",
        logoFile: null,
        free: true,
        rank: { writing: 1, coding: 2, research: 2, general: 1 }
    },
    {
        name: "Google Gemini",
        company: "Google",
        description: "Google's multimodal AI with real-time information access and deep Google integration.",
        bestFor: ["Google integration", "Image analysis", "Real-time information", "Multimodal tasks"],
        categories: ["research", "general", "coding"],
        color: "#4285F4",
        url: "https://gemini.google.com",
        logoFile: null,
        free: true,
        rank: { research: 1, general: 2, coding: 3 }
    },
    {
        name: "GitHub Copilot",
        company: "GitHub / Microsoft",
        description: "AI pair programmer that suggests code completions directly in your IDE. Trained on billions of lines of code.",
        bestFor: ["Code completion", "IDE integration", "Learning new languages", "Boilerplate generation"],
        categories: ["coding"],
        color: "#238636",
        url: "https://github.com/features/copilot",
        logoFile: null,
        free: false,
        rank: { coding: 4 }
    },
    {
        name: "Cursor",
        company: "Cursor Inc.",
        description: "AI-first code editor built for pair programming with AI. Full codebase understanding and natural language editing.",
        bestFor: ["AI-native coding", "Codebase chat", "Refactoring", "Full IDE experience"],
        categories: ["coding"],
        color: "#7C3AED",
        url: "https://cursor.com",
        logoFile: null,
        free: false,
        rank: { coding: 5 }
    },
    {
        name: "Replit AI",
        company: "Replit",
        description: "Code, create, and learn with AI assistance in the browser. Great for beginners and quick prototyping.",
        bestFor: ["Learning to code", "Quick prototypes", "Browser-based coding", "Collaboration"],
        categories: ["coding"],
        color: "#F26207",
        url: "https://replit.com",
        logoFile: null,
        free: true,
        rank: { coding: 6 }
    },
    {
        name: "Tabnine",
        company: "Tabnine",
        description: "AI code assistant that runs locally for privacy. Supports all major IDEs and languages.",
        bestFor: ["Private code completion", "Enterprise security", "Offline coding", "IDE integration"],
        categories: ["coding"],
        color: "#6B5CE7",
        url: "https://tabnine.com",
        logoFile: null,
        free: false,
        rank: { coding: 7 }
    },

    // === WRITING AI ===
    {
        name: "Jasper",
        company: "Jasper AI",
        description: "AI content platform for marketing teams. Create blog posts, ads, emails, and social media content at scale.",
        bestFor: ["Marketing copy", "Blog posts", "Ad copy", "Brand voice"],
        categories: ["writing", "marketing"],
        color: "#FF6B6B",
        url: "https://jasper.ai",
        logoFile: null,
        free: false,
        rank: { writing: 3, marketing: 1 }
    },
    {
        name: "Copy.ai",
        company: "Copy.ai",
        description: "AI writing tool for marketing and sales teams. Generate copy for emails, social posts, and product descriptions.",
        bestFor: ["Sales copy", "Email writing", "Social media", "Product descriptions"],
        categories: ["writing", "marketing"],
        color: "#5865F2",
        url: "https://copy.ai",
        logoFile: null,
        free: true,
        rank: { writing: 4, marketing: 2 }
    },
    {
        name: "Grammarly",
        company: "Grammarly Inc.",
        description: "AI writing assistant for grammar, clarity, and tone. Integrates everywhere you write.",
        bestFor: ["Grammar checking", "Tone adjustment", "Clarity improvements", "Professional writing"],
        categories: ["writing"],
        color: "#15C39A",
        url: "https://grammarly.com",
        logoFile: null,
        free: true,
        rank: { writing: 5 }
    },
    {
        name: "Notion AI",
        company: "Notion",
        description: "AI integrated into Notion for writing, summarization, and workspace productivity.",
        bestFor: ["Writing assistance", "Summarization", "Note organization", "Workspace productivity"],
        categories: ["writing", "productivity"],
        color: "#000000",
        url: "https://notion.so/product/ai",
        logoFile: null,
        free: false,
        rank: { writing: 6, productivity: 2 }
    },

    // === RESEARCH AI ===
    {
        name: "Perplexity",
        company: "Perplexity AI",
        description: "AI-powered search engine that provides sourced answers. Great for research and fact-checking.",
        bestFor: ["Research with sources", "Fact-checking", "Current events", "Academic research"],
        categories: ["research"],
        color: "#20B2AA",
        url: "https://perplexity.ai",
        logoFile: null,
        free: true,
        rank: { research: 2 }
    },
    {
        name: "Elicit",
        company: "Elicit",
        description: "AI research assistant that helps analyze research papers and find relevant studies.",
        bestFor: ["Academic research", "Paper analysis", "Literature review", "Scientific queries"],
        categories: ["research"],
        color: "#6366F1",
        url: "https://elicit.com",
        logoFile: null,
        free: true,
        rank: { research: 4 }
    },
    {
        name: "Consensus",
        company: "Consensus",
        description: "AI search engine that finds and synthesizes scientific research papers.",
        bestFor: ["Scientific research", "Evidence-based answers", "Paper discovery", "Research synthesis"],
        categories: ["research"],
        color: "#3B82F6",
        url: "https://consensus.app",
        logoFile: null,
        free: true,
        rank: { research: 5 }
    },

    // === STOCKS & FINANCE AI ===
    {
        name: "FinChat",
        company: "FinChat.io",
        description: "ChatGPT for finance - AI that answers questions about public companies using verified financial data.",
        bestFor: ["Company research", "Financial Q&A", "Earnings analysis", "Investor queries"],
        categories: ["stocks", "finance", "research"],
        color: "#2563EB",
        url: "https://finchat.io",
        logoFile: null,
        free: true,
        rank: { stocks: 1, finance: 1 }
    },
    {
        name: "Danelfin",
        company: "Danelfin",
        description: "AI stock analysis providing explainable AI scores to help with investment decisions.",
        bestFor: ["Stock scoring", "AI predictions", "Risk analysis", "Portfolio building"],
        categories: ["stocks", "finance"],
        color: "#7C3AED",
        url: "https://danelfin.com",
        logoFile: null,
        free: true,
        rank: { stocks: 2, finance: 2 }
    },
    {
        name: "TrendSpider",
        company: "TrendSpider",
        description: "AI-powered technical analysis platform for traders. Automated chart analysis and alerts.",
        bestFor: ["Technical analysis", "Chart patterns", "Trading alerts", "Backtesting"],
        categories: ["stocks", "finance"],
        color: "#059669",
        url: "https://trendspider.com",
        logoFile: null,
        free: false,
        rank: { stocks: 3, finance: 3 }
    },
    {
        name: "Kavout",
        company: "Kavout",
        description: "AI-driven stock analysis platform using machine learning for investment insights.",
        bestFor: ["Stock screening", "AI stock ratings", "Portfolio analysis", "Investment research"],
        categories: ["stocks", "finance"],
        color: "#1E40AF",
        url: "https://kavout.com",
        logoFile: null,
        free: false,
        rank: { stocks: 4, finance: 4 }
    },
    {
        name: "Bloomberg Terminal AI",
        company: "Bloomberg",
        description: "AI-powered financial analysis integrated into Bloomberg Terminal for professional traders.",
        bestFor: ["Market analysis", "Financial data", "Trading insights", "News synthesis"],
        categories: ["stocks", "finance"],
        color: "#FF6600",
        url: "https://bloomberg.com/professional/solution/bloomberg-terminal",
        logoFile: null,
        free: false,
        rank: { stocks: 5, finance: 5 }
    },

    // === IMAGE GENERATION AI ===
    {
        name: "Leonardo AI",
        company: "Leonardo.ai",
        description: "AI image generation platform with game asset focus and easy-to-use interface.",
        bestFor: ["Game assets", "Consistent styles", "Character design", "Texture generation"],
        categories: ["image"],
        color: "#8B5CF6",
        url: "https://leonardo.ai",
        logoFile: null,
        free: true,
        rank: { image: 1 }
    },
    {
        name: "Stable Diffusion",
        company: "Stability AI",
        description: "Open-source image generation model you can run locally. Highly customizable.",
        bestFor: ["Local generation", "Custom models", "No restrictions", "Fine-tuning"],
        categories: ["image"],
        color: "#A855F7",
        url: "https://stability.ai",
        logoFile: null,
        free: true,
        rank: { image: 2 }
    },
    {
        name: "Microsoft Copilot (DALL-E)",
        company: "Microsoft",
        description: "Free access to DALL-E 3 image generation through Microsoft Copilot.",
        bestFor: ["Accurate prompts", "Text in images", "Realistic images", "Creative visuals"],
        categories: ["image"],
        color: "#00A4EF",
        url: "https://copilot.microsoft.com",
        logoFile: null,
        free: true,
        rank: { image: 3 }
    },
    {
        name: "Midjourney",
        company: "Midjourney Inc.",
        description: "Leading AI art generator creating stunning, artistic images from text descriptions.",
        bestFor: ["AI art generation", "Concept art", "Creative inspiration", "Visual brainstorming"],
        categories: ["image"],
        color: "#FF4500",
        url: "https://midjourney.com",
        logoFile: null,
        free: false,
        rank: { image: 4 }
    },
    {
        name: "DALL-E 3",
        company: "OpenAI",
        description: "OpenAI's image generation model with excellent prompt understanding and text rendering.",
        bestFor: ["Accurate prompts", "Text in images", "Realistic images", "Creative visuals"],
        categories: ["image"],
        color: "#10A37F",
        url: "https://openai.com/dall-e-3",
        logoFile: null,
        free: false,
        rank: { image: 5 }
    },
    {
        name: "Adobe Firefly",
        company: "Adobe",
        description: "Adobe's AI image generator trained on licensed content. Safe for commercial use.",
        bestFor: ["Commercial use", "Adobe integration", "Stock replacement", "Design workflows"],
        categories: ["image"],
        color: "#FF0000",
        url: "https://firefly.adobe.com",
        logoFile: null,
        free: true,
        rank: { image: 6 }
    },

    // === VIDEO AI ===
    {
        name: "CapCut",
        company: "ByteDance",
        description: "Free video editor with AI features like auto-captions, background removal, and effects.",
        bestFor: ["Auto captions", "Background removal", "Video effects", "Social content"],
        categories: ["video"],
        color: "#00F0FF",
        url: "https://capcut.com",
        logoFile: null,
        free: true,
        rank: { video: 1 }
    },
    {
        name: "Runway",
        company: "Runway ML",
        description: "AI video generation and editing platform. Create and edit videos with AI.",
        bestFor: ["Video generation", "Video editing", "Motion graphics", "Special effects"],
        categories: ["video"],
        color: "#00D4FF",
        url: "https://runwayml.com",
        logoFile: null,
        free: true,
        rank: { video: 2 }
    },
    {
        name: "Pika",
        company: "Pika Labs",
        description: "AI video generator creating short clips from text or images.",
        bestFor: ["Short videos", "Image animation", "Creative clips", "Social content"],
        categories: ["video"],
        color: "#FF6B9D",
        url: "https://pika.art",
        logoFile: null,
        free: true,
        rank: { video: 3 }
    },
    {
        name: "HeyGen",
        company: "HeyGen",
        description: "AI video generator with realistic avatars for business and marketing videos.",
        bestFor: ["Avatar videos", "Marketing content", "Training videos", "Localization"],
        categories: ["video", "marketing"],
        color: "#6366F1",
        url: "https://heygen.com",
        logoFile: null,
        free: false,
        rank: { video: 4, marketing: 3 }
    },
    {
        name: "Synthesia",
        company: "Synthesia",
        description: "Create AI videos with virtual presenters. No camera or studio needed.",
        bestFor: ["Training videos", "Corporate content", "Multilingual videos", "Presentations"],
        categories: ["video", "marketing"],
        color: "#4F46E5",
        url: "https://synthesia.io",
        logoFile: null,
        free: false,
        rank: { video: 5, marketing: 4 }
    },

    // === PRODUCTIVITY AI ===
    {
        name: "Otter.ai",
        company: "Otter.ai",
        description: "AI meeting assistant that records, transcribes, and summarizes meetings in real-time.",
        bestFor: ["Meeting transcription", "Note taking", "Summary generation", "Action items"],
        categories: ["productivity"],
        color: "#3B82F6",
        url: "https://otter.ai",
        logoFile: null,
        free: true,
        rank: { productivity: 1 }
    },
    {
        name: "Fireflies.ai",
        company: "Fireflies",
        description: "AI notetaker for meetings. Automatically records, transcribes, and analyzes conversations.",
        bestFor: ["Meeting notes", "CRM integration", "Conversation search", "Team collaboration"],
        categories: ["productivity"],
        color: "#8B5CF6",
        url: "https://fireflies.ai",
        logoFile: null,
        free: true,
        rank: { productivity: 3 }
    },
    {
        name: "Reclaim AI",
        company: "Reclaim.ai",
        description: "AI calendar assistant that automatically schedules tasks, habits, and meetings.",
        bestFor: ["Calendar management", "Time blocking", "Habit tracking", "Meeting scheduling"],
        categories: ["productivity"],
        color: "#2563EB",
        url: "https://reclaim.ai",
        logoFile: null,
        free: true,
        rank: { productivity: 4 }
    },
    {
        name: "Mem",
        company: "Mem Labs",
        description: "AI-powered note-taking app that organizes and connects your notes automatically.",
        bestFor: ["Smart notes", "Knowledge management", "Auto-organization", "AI search"],
        categories: ["productivity", "writing"],
        color: "#000000",
        url: "https://mem.ai",
        logoFile: null,
        free: false,
        rank: { productivity: 5, writing: 7 }
    }
];

// Rankings by category (for display)
const AI_RANKINGS = {
    coding: ["Claude", "ChatGPT", "Google Gemini", "GitHub Copilot", "Cursor", "Replit AI", "Tabnine"],
    writing: ["ChatGPT", "Claude", "Jasper", "Copy.ai", "Grammarly", "Notion AI", "Mem"],
    research: ["Google Gemini", "Perplexity", "Claude", "Elicit", "Consensus"],
    stocks: ["FinChat", "Danelfin", "TrendSpider", "Kavout", "Bloomberg Terminal AI"],
    image: ["Leonardo AI", "Stable Diffusion", "Microsoft Copilot (DALL-E)", "Midjourney", "DALL-E 3", "Adobe Firefly"],
    video: ["CapCut", "Runway", "Pika", "HeyGen", "Synthesia"],
    productivity: ["Otter.ai", "Notion AI", "Fireflies.ai", "Reclaim AI", "Mem"],
    marketing: ["Jasper", "Copy.ai", "HeyGen", "Synthesia"]
};
