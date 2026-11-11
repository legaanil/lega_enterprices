export const WA = "918302752145";
export const wa = (t) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;

export const tech = ["React", "Next.js", "Node.js", "Flutter", "React Native", "Shopify", "WordPress", "WooCommerce", "Firebase", "Figma"];

export const services = [
  { slug: "web", title: "Web development", blurb: "Sites that load fast, rank on Google and bring in enquiries.",
    list: ["Business & corporate websites", "Online stores (Shopify / WooCommerce)", "Landing pages", "Custom web applications"] },
  { slug: "mobile", title: "Mobile app development", blurb: "One codebase, two stores, apps people actually keep installed.",
    list: ["Android apps", "iOS apps", "Cross-platform (Flutter / React Native)", "App Store & Play Store launch"] },
  { slug: "maintenance", title: "Upgrades & maintenance", blurb: "Already have a site? We fix what is slow, dated or broken.",
    list: ["Redesign of an existing site", "Speed optimisation", "SEO setup", "Monthly maintenance & support"] },
];

export const more = [
  ["Digital marketing", "SEO, Google Ads and social media for your new site"],
  ["Business automation", "Custom tools for billing, inventory and reports"],
  ["Cloud & hosting", "Setup on AWS, DigitalOcean or shared hosting"],
  ["Marketplace management", "Listings and catalogues on Amazon and Flipkart"],
];

export const industries = [
  ["Healthcare", "Clinic sites, appointment apps, 3D hospital tours"],
  ["Real estate", "Project sites, lead forms, 3D walkthroughs"],
  ["Restaurants & hospitality", "Menus, ordering, billing tools"],
  ["Education", "Institute sites, admissions, learning apps"],
  ["E-commerce", "Shopify and WooCommerce stores"],
  ["Manufacturing", "Catalogues, enquiry portals, factory 3D"],
  ["Travel & tourism", "Booking pages, packages, galleries"],
  ["Startups & SaaS", "MVPs, dashboards, AI products"],
];

export const why = [
  ["One point of contact", "You talk to the people building your project, on WhatsApp or a call. No account managers in between."],
  ["You own everything", "Source code, design files, domain and hosting accounts are in your name from day one."],
  ["Local and reachable", "We are in Jodhpur. Meet us, call us, and get answers the same day."],
];

export const steps = [
  ["Discovery", "A call to understand your business, goals and budget. You get a written scope."],
  ["Design", "Wireframes and a clickable prototype. Nothing gets built until you approve it."],
  ["Build & test", "Clean code, tested on real phones and browsers, with progress shared along the way."],
  ["Launch & support", "We deploy to your domain or the app stores, then stay on for fixes and updates."],
];

export const projects = [
  { name: "Tresiphi", cat: "web pos", tag: "Web app · Restaurant tech", title: "Tresiphi Technologies", url: "https://tresiphi.com", cta: "Visit Tresiphi",},
  { name: "WeltNexus", cat: "web ai", tag: "Web platform · AI", title: "Welt Nexus Technologies", url: "https://weltnexus.com", cta: "Visit WeltNexus",
    problem: "Teams with AI ideas but no in-house engineering to turn them into working products.",
    solution: "A company site and platform presenting AI products, engineering and consulting under one roof.",
    result: "Live at weltnexus.com." },
];

export const filters = [["all", "All"], ["web", "Web app"], ["ai", "AI"], ["pos", "Restaurant tech"]];

export const tours = [
  ["Hospitals", "Wards, OT, reception", <><path d="M30 200l70 35 70-35V110l-70-35-70 35z" /><path d="M100 75v160M30 110l70 35 70-35" /><path d="M80 90V60h40v30" stroke="#F2A93B" /></>],
  ["Real estate", "Flats, villas, townships", <><path d="M40 210V90l60-30 60 30v120z" /><path d="M40 130h120M40 170h120M100 60v150" /><path d="M60 90l40-20 40 20" stroke="#F2A93B" /></>],
  ["Factories & workshops", "Layout, machines, flow", <><path d="M20 200V120l40-30v30l40-30v30l40-30v30l40-30v110z" /><path d="M40 200v-40h30v40M120 200v-30h40v30" /><path d="M150 70V40h15v30" stroke="#F2A93B" /></>],
  ["Showrooms & hotels", "Interiors, product reveals", <><path d="M30 130l70-35 70 35-70 35z" /><path d="M30 130v50l70 35 70-35v-50" /><path d="M100 165v50" /><circle cx="100" cy="95" r="14" stroke="#F2A93B" /></>],
];

export const stats = [[2, "", "Live client products"], [3, "", "Core services"], [1, "", "Point of contact"]];

export const estGroups = [
  ["Website", ["Business website", "Online store", "Landing page", "Web application"]],
  ["Mobile app", ["Android app", "iOS app", "Cross-platform app"]],
  ["Extras", ["3D walkthrough video", "Redesign", "SEO setup", "Maintenance"]],
];

export const faqs = [
  ["How long does a website take?", "A typical business website takes 2 to 4 weeks. Online stores and custom apps take longer, and we give you a timeline in the written scope."],
  ["Do I own the code and the domain?", "Yes. Code, design files and domain are handed over to you at launch."],
  ["Can you work with clients outside Jodhpur?", "Yes. Calls and updates run over WhatsApp, phone and video, so location does not matter."],
  ["What do you need to start a 3D walkthrough?", "Floor plans or CAD drawings and a few reference photos. We handle modelling, lighting and animation, and deliver the video in the formats you need."],
  ["How much will it cost?", "It depends on pages, features and platforms. After a short call we send a fixed quote in writing, so the price does not change halfway through."],
  ["Can you improve a website I already have?", "Yes. We can redesign it, speed it up, fix mobile layout and add SEO without starting from zero."],
  ["Will my app work on both Android and iPhone?", "Yes. With Flutter or React Native we build one app that runs on both, and publish it to the Play Store and App Store for you."],
  ["Do you offer support after launch?", "Yes, monthly maintenance covers updates, backups, security and small changes."],
];

export const servicePages = {
  web: { title: "Website Development in Jodhpur", eyebrow: "Website development", h: "Websites that load fast and bring in enquiries.",
    lead: "From a simple business site to a full web application, we design and build it around how your customers actually find and contact you.",
    items: [["Business websites", "Clear pages for your services, team and contact details, written for Google and for people."], ["Online stores", "Shopify or WooCommerce stores with payments, shipping and inventory set up."], ["Landing pages", "Single focused pages for a campaign, an offer or a new product launch."], ["Web applications", "Dashboards, portals and booking systems built to your workflow."]],
    faq: [["How long does a website take?", "A business website usually takes 2 to 4 weeks. Stores and web apps take longer; you get a timeline in the written scope."], ["Will it work on mobile?", "Yes. Every site is built mobile-first and tested on real phones."]] },
  mobile: { title: "Mobile App Development in Jodhpur", eyebrow: "Mobile app development", h: "Apps people keep installed.",
    lead: "We build Android and iOS apps, and publish them to the Play Store and App Store for you.",
    items: [["Android apps", "Native and cross-platform Android apps for your customers or your staff."], ["iOS apps", "iPhone and iPad apps, prepared and submitted to the App Store."], ["Flutter & React Native", "One codebase for both platforms, so you pay for one build and reach everyone."], ["Launch & updates", "Store listing, release and later updates handled by us."]],
    faq: [["Android, iOS or both?", "If your budget allows one, we help you pick from who your users are. Flutter or React Native can cover both."], ["Do I own the app?", "Yes. Source code and store accounts are in your name."]] },
  maintenance: { title: "Website Upgrades & Maintenance in Jodhpur", eyebrow: "Upgrades & maintenance", h: "Fix what is slow, dated or broken.",
    lead: "Already have a website or app? We improve it without starting from zero, then keep it healthy.",
    items: [["Redesign", "A fresh look and clearer structure for an existing site."], ["Speed optimisation", "Smaller images, cleaner code and better hosting so pages open quickly."], ["SEO setup", "Titles, descriptions, schema markup and sitemap so Google understands your business."], ["Monthly maintenance", "Updates, backups, security checks and small changes every month."]],
    faq: [["My site is on WordPress. Can you help?", "Yes, we work on WordPress, Shopify and custom-built sites."], ["What does monthly maintenance include?", "Software updates, backups, security monitoring and a set number of small edits."]] },
};

export const site = {
  email: "",
  hours: "",
  social: { linkedin: "", instagram: "", facebook: "", youtube: "" },
  team: [],
  reviews: [],
};

const extra = {
  web: {
    description: "Custom business websites, online stores, landing pages and web apps built by Lega Enterprises in Jodhpur. Get a free consultation.",
    who: "For businesses in Jodhpur and across India that need a website that works as hard as they do: clinics, shops, manufacturers, builders, schools and startups.",
    local: "We are based in Jodhpur, so we can meet you in person, understand your local market and write for the way your customers actually search.",
    faq: [["Will my website show up on Google?", "No one can promise a ranking, but we set up the basics Google looks for: page titles and descriptions, fast loading, a sitemap and local business details."]],
  },
  mobile: {
    description: "Android, iOS and cross-platform mobile apps built by Lega Enterprises in Jodhpur. Published to the Play Store and App Store for you.",
    who: "For businesses that want customers or staff to use their service from a phone: booking, ordering, delivery, field work or internal tools.",
    local: "We are based in Jodhpur, so we can sit down with you and your team, see how the work really happens, and build the app around it.",
    faq: [["Do I need an app or a website?", "If customers mostly find you on Google, start with a website. If they will use you every day, an app helps. We will tell you honestly which one you need first."], ["How long does an app take?", "It depends on the features. We give you a timeline in the written scope before any work starts."]],
  },
  maintenance: {
    description: "Website redesign, speed optimisation, SEO setup and monthly maintenance from Lega Enterprises in Jodhpur.",
    who: "For anyone with an existing website or app that is slow, out of date, hard to use on a phone or not bringing in enquiries.",
    local: "We are based in Jodhpur, so you can bring us your current site, and we will review it with you and tell you whether to fix it or rebuild it.",
    faq: [["Can you take over a site built by someone else?", "Yes. After a quick review of the code and hosting, we tell you whether to fix it or rebuild it."]],
  },
};
for (const k in extra) {
  const { faq, ...rest } = extra[k];
  Object.assign(servicePages[k], rest);
  servicePages[k].faq.push(...faq);
}
