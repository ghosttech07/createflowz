// Shared site content. Draft copy: edit freely.

export const services = [
  { slug: "social", name: "Social Media Management", text: "Strategy, calendars, posting and community, handled end to end.", points: ["Content strategy", "Monthly calendar", "Community replies"], icon: "share" },
  { slug: "reels", name: "Reels & Video Editing", text: "Scroll-stopping short-form video with hooks built for retention.", points: ["Scripts & hooks", "Editing & captions", "Motion graphics"], icon: "video", dark: true },
  { slug: "automation", name: "Automation & DM Funnels", text: "Comment-to-DM flows that capture and follow up leads 24/7.", points: ["Keyword DM flows", "Lead capture", "Auto follow-ups"], icon: "bolt" },
  { slug: "ads", name: "Paid Ads", text: "Meta and Google campaigns built on content that already works.", points: ["Campaign setup", "Creative testing", "Revenue tracking"], icon: "target" },
  { slug: "branding", name: "Branding & Design", text: "Identity, templates and carousels people recognise instantly.", points: ["Logo & identity", "Post templates", "Carousels"], icon: "pen" },
  { slug: "websites", name: "Websites & Landing Pages", text: "Fast sites designed in Figma and built to book calls.", points: ["UI/UX design", "Development", "Conversion copy"], icon: "monitor" },
] as const;

export const cases = [
  {
    slug: "cafe",
    name: "Café brand — Instagram growth",
    client: "Neighbourhood café",
    tags: "Social Media · Reels",
    img: "/images/work-cafe.jpg",
    alt: "A barista pouring latte art while a phone on a tripod films him",
    metric: "+412%",
    metricLabel: "Instagram reach",
    challenge: "Great coffee, a loyal morning crowd and an Instagram account that only regulars ever saw. Posts went out when someone remembered.",
    did: ["A weekly reel plan built around the counter: latte art, new bakes, the team", "Monthly shoot days so content never ran dry", "Local hashtags, collabs with nearby food pages and story polls"],
    result: "Reach grew 412% and the account became the café’s top source of new walk-ins and table bookings.",
  },
  {
    slug: "fitness",
    name: "Fitness coach — Reels series",
    client: "Independent fitness coach",
    tags: "Video Editing",
    img: "/images/work-fitness.jpg",
    alt: "A coach filmed mid-squat with a kettlebell",
    metric: "2.1M",
    metricLabel: "Views on the series",
    challenge: "Plenty of training knowledge, but long talking-head videos that people skipped in the first two seconds.",
    did: ["A repeatable series format: one mistake, one fix, under 30 seconds", "Hooks written and tested before every shoot", "Fast cuts, captions and on-screen counters for silent viewing"],
    result: "The series passed 2.1M views and filled the coach’s online programme waitlist.",
  },
  {
    slug: "real-estate",
    name: "Real estate — DM automation",
    client: "Real-estate agency",
    tags: "Automation · Paid Ads",
    img: "/images/work-real-estate.jpg",
    alt: "Three agents talking in a bright apartment",
    metric: "850",
    metricLabel: "Leads a month",
    challenge: "Property reels got comments like “price?” and “location?” that sat unanswered for hours, by which time buyers had moved on.",
    did: ["Comment-to-DM flows that send price, location and a brochure instantly", "Lead capture that qualifies budget and timeline", "Meta ads behind the best-performing listings"],
    result: "Around 850 qualified leads a month, answered within seconds and handed to agents ready to call.",
  },
  {
    slug: "skincare",
    name: "Skincare startup — Brand & website",
    client: "D2C skincare startup",
    tags: "Branding · Web",
    img: "/images/work-skincare.jpg",
    alt: "Skincare bottles and packaging laid out on stone",
    metric: "New",
    metricLabel: "Identity and website",
    challenge: "A strong product launching with a borrowed look: a stock logo, mismatched posts and no website to send buyers to.",
    did: ["A full identity: logo, colours, type and packaging direction", "Post and carousel templates the team can reuse", "A fast product website designed in Figma and built to sell"],
    result: "A brand that looks as good as the product, and one place to send every ad, reel and bio link.",
  },
];

// Stats shown on the homepage and About page: [number, unit, label]
export const stats: [number, string, string][] = [
  [35, "+", "Brands grown"],
  [45, "M+", "Traffic handled"],
  [3, "x", "Average lead growth"],
  [98, "%", "Client retention"],
];

export const steps = [
  { n: "01", title: "Discover", text: "A free call to understand your business, audience and goals." },
  { n: "02", title: "Strategy", text: "We audit your accounts and competitors, then build a 90-day plan." },
  { n: "03", title: "Create & launch", text: "We script, shoot, edit and publish. Automations and ads go live." },
  { n: "04", title: "Grow & optimise", text: "Monthly reports on what works, and the next moves to scale." },
];
