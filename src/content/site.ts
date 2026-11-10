// All words, links and images on the homepage live here.
// Edit this file to change the site; the layout code never needs touching for copy changes.
//
// Placeholders are written in [square brackets] and render in a muted colour,
// so nothing unfinished goes live unnoticed. Replace every one before launch.

export const studio = {
  name: "Createflowz",
  descriptor: "Branding & Web Studio",
};

export const contact = {
  email: "hello@createflowz.com", // [confirm address]
  // Paste a Calendly or Cal.com link here. While it is empty, no "book a call" link is shown.
  bookingUrl: "",
  people: "You’ll talk to [Founder name], from [Studio city].",
  replyTime: "Replies within one business day [confirm].",
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export const hero = {
  eyebrow: "We are Createflowz",
  lineOne: "Brand it.",
  lineTwo: "Sell it.",
  sentence:
    "Createflowz is a branding and web studio. We design the brand and the website or store, then run the ads and search that bring buyers to it. For startups, online stores, local businesses and established brands in the US, UK and Canada.",
  primaryCta: { label: "Start a project", href: "/lets-talk" },
  secondaryCta: { label: "See the work", href: "#work" },
  // The header button on every page opens the Let's talk page.
  letsTalk: { label: "Let’s talk", href: "/lets-talk" },
};

// White band straight after the hero: a short label and one large paragraph.
export const statement = {
  label: "A branding & web studio",
  text: "One team takes you from logo to live store to monthly sales. No handoffs between agencies, no waiting on someone else’s timeline, and a report every month that shows what your spend brought back.",
};

// Two groups, matching the Build / Grow choices in the contact picker.
// The section pins while each service takes the screen in turn: a huge faint `word`, a diamond photo and the text.
// Photos are stand-ins from Unsplash; swap `img` and `alt` for your own whenever you like.
export const services = {
  heading: "What we do",
  lead: "We build the brand and the store, then grow the sales. Hire us for one half or both.",
  groups: [
    {
      name: "Build",
      items: [
        {
          name: "Branding",
          word: "Branding",
          img: "/images/services/branding.jpg",
          alt: "Logo sketches and a brand book spread on a desk",
          tone: "lime",
          text: "Logo, colour, type and packaging, with a guide short enough that freelancers actually follow it. The Alt Pouches cans started here.",
        },
        {
          name: "Websites and apps",
          word: "Websites",
          img: "/images/services/websites.jpg",
          alt: "Someone typing on a laptop at a wooden table",
          tone: "surface",
          text: "Shopify stores and marketing sites that load fast on a phone, plus iOS and Android apps. Your team changes prices and copy without calling us.",
        },
      ],
    },
    {
      name: "Grow",
      items: [
        {
          name: "Google and Meta ads",
          word: "Ads",
          img: "/images/services/ads.jpg",
          alt: "A phone held over a laptop keyboard",
          tone: "surface",
          text: "Search, Shopping, Facebook and Instagram. Each month you get the number that matters: what the spend brought back in sales.",
        },
        {
          name: "SEO and social",
          word: "SEO",
          img: "/images/services/seo.jpg",
          alt: "A hand writing notes in a notebook beside a laptop",
          tone: "lime",
          text: "Product pages that rank in the countries you ship to, and social accounts posted to every week so they never go quiet.",
        },
      ],
    },
  ],
  footnote: "Not sure which you need? Most clients start with one and add the rest later.",
  cta: { label: "Start a project", href: "/lets-talk" },
} as const;

export const work = {
  eyebrow: "Case studies",
  heading: "Some of our finest work.",
  intro: "Three recent projects: two online stores and a local restaurant. Ask on a call for work in your category.",
  cases: [
    {
      name: "Alt Pouches",
      url: "https://altpouches.co.uk/",
      urlLabel: "altpouches.co.uk",
      summary: "A UK nicotine-pouch brand selling direct and to trade.",
      did: "We made the brand and the can designs, built the Shopify store, and handle the ads, search and social.",
      result: "[One real result, e.g. orders per month or conversion rate since launch.]",
      desktop: { src: "/images/work/alt-pouches-desktop.jpg", alt: "Alt Pouches store homepage on a laptop" },
      mobile: { src: "/images/work/alt-pouches-phone.jpg", alt: "Alt Pouches product listing on a phone" },
    },
    {
      name: "Aram",
      url: "https://www.aramcbd.co.uk/",
      urlLabel: "aramcbd.co.uk",
      summary: "UK wellness gummies: H4CBD, ashwagandha, shilajit and creatine.",
      did: "We built the Shopify store. [Confirm the rest of the scope.]",
      result: "[One real result, e.g. orders per month or conversion rate since launch.]",
      desktop: { src: "/images/work/aram-desktop.jpg", alt: "Aram store homepage on a laptop" },
      mobile: { src: "/images/work/aram-phone.jpg", alt: "Aram shop-by-goal section on a phone" },
    },
    {
      name: "Melt Pizza",
      url: "https://meltpizza.co.uk/",
      urlLabel: "meltpizza.co.uk",
      summary: "Stone-baked pizza in Southampton: delivery, takeaway and dine-in.",
      did: "We built the website. [Confirm the rest of the scope.]",
      result: "[One real result, e.g. online orders per week since launch.]",
      desktop: { src: "/images/work/melt-desktop.jpg", alt: "Melt Pizza website homepage on a laptop" },
      mobile: { src: "/images/work/melt-phone.jpg", alt: "Melt Pizza menu section on a phone" },
    },
  ],
};

// Sticky scroll: each verb stays pinned mid-screen while its photo scrolls past behind it.
// Photos are stand-ins (Unsplash); swap `img` and `alt` for your own whenever you like.
export const process = {
  heading: "How a project runs",
  steps: [
    {
      verb: "Listen",
      when: "Week 1",
      text: "A call, then an audit of your brand, site, ads and analytics. You get a written plan and a fixed quote before any work starts.",
      img: "/images/posts/before-rebrand.jpg",
      alt: "A vintage typewriter on a white table",
    },
    {
      verb: "Create",
      when: "[Weeks 2 to 6]",
      text: "We design and build. You review at set points on a private link you can click through, not a slide deck.",
      img: "/images/process/create.jpg",
      alt: "White angular concrete building against a black sky",
    },
    {
      verb: "Launch",
      when: "Launch week",
      text: "The site goes live with tracking checked, and the first search and ad campaigns switch on.",
      img: "/images/process/launch.jpg",
      alt: "Suspension bridge tower in fog, seen from above",
    },
    {
      verb: "Flow",
      when: "Every month",
      text: "A one-page report: what you spent, what it brought back, and where the budget moves next.",
      img: "/images/process/flow.jpg",
      alt: "Station platform with a row of lit windows",
    },
  ],
};

// Hidden until there is a real quote. Set `show: true` once it is filled in.
export const testimonial = {
  show: false,
  heading: "What clients say",
  quote: "[Client testimonial in the client’s own words.]",
  author: "[Name], [Role], [Company], [Country]",
  rating: "[Clutch or Google review rating, with a link to the profile.]",
  cta: { label: "Start a project", href: "/lets-talk" },
};

// Latest posts: a sideways-sliding row of cards (the start of the blog).
// These are DRAFT ideas, not published posts. Replace each title, date, image and link with a real post.
// A card with an empty href is shown without a link.
export const posts = {
  heading: "Latest posts",
  items: [
    {
      tag: "Insights",
      date: "[Date]",
      title: "How much does a Shopify store cost in 2026?",
      img: "/images/posts/shopify-cost.jpg",
      alt: "A laptop and an open notebook on a wooden desk",
      href: "",
    },
    {
      tag: "News",
      date: "[Date]",
      title: "Behind the Alt Pouches can designs",
      img: "/images/posts/can-designs.jpg",
      alt: "A designer’s tools laid out on a dark desk",
      href: "",
    },
    {
      tag: "Insights",
      date: "[Date]",
      title: "Google ads or Meta ads: where should a new store spend first?",
      img: "/images/posts/ads-first.jpg",
      alt: "A phone lying on a table, close up",
      href: "",
    },
    {
      tag: "News",
      date: "[Date]",
      title: "Taking Melt Pizza’s orders online",
      img: "/images/posts/melt-online.jpg",
      alt: "A man sitting in a busy café",
      href: "",
    },
    {
      tag: "Insights",
      date: "[Date]",
      title: "Five things to fix before you rebrand",
      img: "/images/posts/before-rebrand.jpg",
      alt: "A vintage typewriter on a white table",
      href: "",
    },
  ],
};

export const faq = {
  heading: "Questions",
  items: [
    {
      q: "Do you work with clients in the US, UK and Canada?",
      a: "Yes. Calls are booked in your time zone and we invoice in USD, GBP or CAD.",
    },
    {
      q: "Can we hire you for one service?",
      a: "Yes. You can start with a store, a brand, or ads alone, and add the rest later.",
    },
    {
      q: "How much does a project cost?",
      a: "Websites start from [$X], brand identities from [$X] and ad management from [$X] a month. After the first call we send a fixed quote.",
    },
    {
      q: "How long does a website take?",
      a: "Most marketing sites take [4 to 6] weeks; stores and apps take [8 to 16]. You get a dated timeline before we start.",
    },
    {
      q: "Who owns the work?",
      a: "You do. Ad accounts, analytics and the store are set up in your name, not ours, and the brand files and code are yours.",
    },
    {
      q: "Is there a long contract?",
      a: "Ads, SEO and social run month to month after [an initial three months], so we keep earning the work.",
    },
  ],
};

export const brief = {
  heading: "Start a project",
  sentence: "Tell us what you’re building or selling. We’ll reply with a plan and a rough price.",
  question: "What do you need?",
  groups: [
    { name: "Build", items: ["Branding", "Packaging", "Website", "App"] },
    { name: "Grow", items: ["Google ads", "Meta ads", "SEO", "Social media"] },
  ],
  regions: ["US", "UK", "Canada", "Elsewhere"],
  empty: "Pick what you need and it shows here.",
  sendLabel: "Email this brief",
  sendHint: "Opens your email app with the brief filled in.",
  copyLabel: "Copy brief",
  copiedLabel: "Brief copied",
  copyFailed: "Couldn’t copy. Email us at the address below instead.",
  callLabel: "Or book a 30-minute call",
};

// The Let's talk page (/lets-talk): a form beside a tall photo, then three ways to reach the studio.
export const letsTalk = {
  title: "Hi. Tell us about your project.",
  intro: "Fill out the form below or",
  introLink: "send us an email.",
  // Paste a Formspree (or similar) form URL here to send the form straight from the page.
  // While it is empty, Send opens the visitor's email app with everything filled in.
  formEndpoint: "",
  fields: {
    company: "Company name",
    name: "Your name",
    phone: "Phone number",
    email: "Email address",
    needs: "What do you need?",
    project: "Tell us about your project (scope, timeline, budget)",
  },
  submit: "Send",
  sending: "Sending…",
  sent: "Thanks. Your message is on its way; we’ll reply within one business day.",
  mailOpened: "Your email app should open with your message filled in. Press send there.",
  failed: "That didn’t send. Please email us at hello@createflowz.com instead.",
  required: "Please fill in your name, a valid email and a line about your project.",
  sideLabel: "Let’s talk",
  img: "/images/lets-talk.jpg",
  alt: "A laptop on a desk under a bright window",
  ways: [
    { heading: "Let’s talk", text: "Tell us about your next project.", kind: "email" },
    { heading: "Say hello", text: "Drop us a line or give us a call.", kind: "phone" },
    { heading: "Our office", text: "[Studio address]", kind: "address" },
  ],
} as const;

// Footer layout: logo, tagline and social icons on the left; contact and links on the right.
export const footer = {
  tagline: "Building brands that sell, in the US, UK and Canada.",
  contactHeading: "Get in touch",
  phone: "[Phone number]", // e.g. "+44 20 1234 5678"; it becomes a tap-to-call link once real
  exploreHeading: "Explore",
  address: "[Studio address]",
  // Paste each profile link; an icon with an empty href is not shown.
  socials: [
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "X", href: "#" },
    { name: "LinkedIn", href: "#" },
  ],
  privacy: { label: "[Privacy]", href: "#main" },
  credits: "Process photographs by davide ragusa, Carl Nenzen Loven, Jared Erondu and Matthew Wiebe on Unsplash.",
  copyright: "© 2026 Createflowz",
};
