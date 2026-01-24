export const PDF_CONTENT = {
    metadata: {
        title: "THE SUB-SECOND STANDARD",
        subtitle: "A Technical Performance Audit for High-Ticket Construction & Contracting",
        version: "Version 2.0 (2026 Edition)",
        author: "Prepared By: SubSecond Labs",
        objective: "Objective: Revenue Retention via Latency Elimination.",
        website: "www.subsecondlabs.com" // Update with your actual URL
    },
    sections: [
        {
            id: "executive-summary",
            heading: "1. THE EXECUTIVE SUMMARY",
            body: [
                "In the high-ticket construction market (Roofing, HVAC, General Contracting), trust is binary. A client trusts you, or they bounce.",
                "Most contractors focus on 'colors' and 'logos.' They ignore the digital physics of their business."
            ],
            highlightBox: {
                title: "The Reality:",
                points: [
                    "53% of mobile users abandon a site if it takes >3 seconds to load.",
                    "100ms of latency cost Amazon 1% in sales. For a $50k roofing job, friction costs contracts.",
                    "Google now penalizes 'visually unstable' sites (CLS) in search rankings."
                ]
            },
            closing: "If your website feels slow, your business feels 'cheap.' SubSecond Labs engineers digital assets that operate at the speed of thought (<100ms), ensuring you never lose a lead to 'loading...'"
        },
        {
            id: "core-vitals",
            heading: "2. THE 3 CORE VITALS (THE 'MONEY' METRICS)",
            intro: "We do not measure 'beauty.' We measure conversion physics.",
            metrics: [
                {
                    name: "A. LCP (Largest Contentful Paint)",
                    definition: "How long until the main 'Hero' image is visible.",
                    standard: "Under 1.2 Seconds.",
                    risk: "If a user stares at a white screen for 2 seconds, they assume your phone lines are also dead."
                },
                {
                    name: "B. CLS (Cumulative Layout Shift)",
                    definition: "Does the text 'jump' when an image loads?",
                    standard: "0.000 (Zero Shift).",
                    risk: "Visual instability destroys trust. It screams 'Amateur.' High-net-worth clients subconsciously associate layout shifts with scams."
                },
                {
                    name: "C. INP (Interaction to Next Paint)",
                    definition: "When they click 'Get a Quote,' how fast does the button react?",
                    standard: "<50 Milliseconds.",
                    risk: "If they click and wait, they click 'Back' and call your competitor."
                }
            ]
        },
        {
            id: "friction-audit",
            heading: "3. THE 10-POINT 'FRICTION' AUDIT",
            intro: "Ask your current web developer these questions. If they hesitate, you are losing money.",
            checklist: [
                "1. Lighthouse Score: Is the Mobile Performance score above 90? (Most are <40).",
                "2. Image Formats: Are you serving Next-Gen formats (AVIF/WebP) or heavy JPEGs?",
                "3. The 'JQuery' Test: Is the site relying on outdated JQuery plugins for animations? (Blocks main thread).",
                "4. Server Location: Is the site hosted on the Edge (close to the user) or a cheap shared server?",
                "5. Layout Stability: Do images have hard-coded aspect ratios to prevent jumping?",
                "6. Font Loading: Is the text visible instantly (FOUT/FOIT mitigation)?",
                "7. Third-Party Bloat: Are analytics scripts deferred so they don't block the 'Call Now' button?",
                "8. Responsiveness: Does the site fundamentally change layout for mobile, or just 'shrink'?",
                "9. Security: Are headers configured for strict content security (CSP)?",
                "10. The Framework: Is it built on modern architecture (Next.js) or a legacy CMS (WordPress/Wix)?"
            ]
        },
        {
            id: "guarantee",
            heading: "4. THE SUB-SECOND GUARANTEE",
            body: [
                "We do not build 'websites.' We engineer Revenue Engines."
            ],
            bullets: [
                "100/100 Mobile Performance Scores.",
                "<100ms Interaction Latency.",
                "Zero Layout Shift."
            ],
            closing: "We build for the 1% of contractors who understand that Speed = Trust."
        }
    ]
};