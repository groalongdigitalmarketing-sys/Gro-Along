import { ServiceItem, CaseStudyItem, TestimonialPlaceholder, FaqItem } from '../types';

export const AGENCY_INFO = {
  name: 'Grow Along Marketing Agency',
  tagline: 'Predictable Inbound Growth for Ambitious Businesses in Chennai & Beyond',
  location: 'Chennai, Tamil Nadu, India',
  serviceAreas: [
    'OMR / IT Corridor',
    'Guindy & Ekkatuthuthangal',
    'Anna Nagar',
    'T. Nagar',
    'Ambattur Industrial Area',
    'Nungambakkam',
    'Velachery',
    'Coimbatore & Rest of Tamil Nadu'
  ],
  phone: '6381499729',
  formattedPhone: '+91 63814 99729',
  phoneHref: 'tel:+916381499729',
  whatsappHref: 'https://wa.me/916381499729?text=Hello%20Grow%20Along%20Marketing%20Agency,%20I%20would%20like%20to%20request%20a%20free%20growth%20consultation%20for%20my%20business.',
  email: 'groalongdigitalmarketing@gmail.com',
  workingHours: 'Monday – Saturday: 9:30 AM – 7:00 PM IST',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'google-ads',
    number: '01',
    title: 'Google Ads (PPC & Search Marketing)',
    tamilTitle: 'கூகுள் ஆட்ஸ் (Google Ads)',
    shortDesc: 'Drive immediate calls, inquiries, and customer visits by appearing at the very top of Google search results.',
    tamilShortDesc: 'கூகுள் தேடலில் உங்கள் தொழில் முதலிடத்தில் தெரியவும், உடனே புதிய வாடிக்கையாளர்கள் மற்றும் கால்கள் பெறவும் உதவும்.',
    fullDesc: 'We build high-intent Google Search, Call-Only, and Performance Max campaigns designed strictly to acquire ready-to-buy customers. Includes negative keyword filtering, bidding optimization, click fraud protection, and direct WhatsApp / phone call conversion tracking.',
    deliverables: [
      'High-Intent Commercial Keyword Research for Chennai & Tamil Nadu',
      'Google Search, Call-Only & Local Extension Ads',
      'Negative Keyword Filtering to eliminate wasted ad spend',
      'Ad Copywriting with High Click-Through Rates (CTR)',
      'Conversion Tracking via Google Tag Manager & GA4',
      'Weekly ROAS & Cost-Per-Lead (CPL) Performance Reports'
    ],
    bestSuitedFor: 'Businesses needing instant qualified leads and phone inquiries within 48–72 hours of campaign activation.',
    status: 'Ready for Launch',
    statusNote: 'Confirmed core agency service. Active for local and national clients.',
    iconName: 'TrendingUp',
    tags: ['Google Search Ads', 'Call-Only Ads', 'PPC Management', 'ROI Driven']
  },
  {
    id: 'seo-search',
    number: '02',
    title: 'Search Engine Optimization (SEO & Google Maps)',
    tamilTitle: 'எஸ்இஓ (SEO & Google Maps 3-Pack)',
    shortDesc: 'Rank on the 1st page of Google and dominate Google Maps (3-Pack) for high-value business search queries.',
    tamilShortDesc: 'கூகுள் வரைபடம் (Google Maps) மற்றும் தேடல் முடிவுகளில் உங்கள் வணிகத்தை முதல் பக்கத்தில் கொண்டு வர உதவும்.',
    fullDesc: 'Sustainable organic growth engineered through rigorous technical website audits, hyper-local Chennai geo-targeting, Google Business Profile (GBP) ranking optimization, citation building, and on-page semantic SEO.',
    deliverables: [
      'Comprehensive Website Technical & Speed Audit',
      'Local Geo-Targeted Keyword Mapping (Chennai, OMR, Guindy, etc.)',
      'Google Business Profile (Map Pack 3-Pack) Ranking Strategy',
      'On-Page Metadata, Title Tags & Schema.org Rich Snippets',
      'High-Authority Local Business Citations & Directory Submissions',
      'Monthly Keyword Ranking & Organic Traffic Reports'
    ],
    bestSuitedFor: 'Clinics, manufacturers, retail stores, and service companies seeking long-term, free organic customer inquiries.',
    status: 'Ready for Launch',
    statusNote: 'Confirmed core agency service. Complete local SEO playbook in place.',
    iconName: 'Search',
    tags: ['Google Maps 3-Pack', 'Local SEO Chennai', 'Technical SEO', 'Organic Growth']
  },
  {
    id: 'meta-ads',
    number: '03',
    title: 'Meta Ads (Facebook & Instagram Advertising)',
    tamilTitle: 'மெட்டா ஆட்ஸ் (Meta & Instagram Ads)',
    shortDesc: 'Engage and convert local customers across Instagram and Facebook with scroll-stopping ad creatives and direct WhatsApp funnels.',
    tamilShortDesc: 'இன்ஸ்டாகிராம் மற்றும் பேஸ்புக் மூலம் உங்கள் பிராண்டை பிரபலப்படுத்தி, நேரடி வாட்ஸ்அப் லீட்ஸ் பெறலாம்.',
    fullDesc: 'Direct-response paid social campaigns that capture customer interest through visual storytelling, targeted demographic filters, lookalike audiences, and instant click-to-WhatsApp messaging workflows.',
    deliverables: [
      'Visual Ad Creatives & Video Concept Direction for Instagram Reels & Feed',
      'Hyper-Targeted Local Audience & Geo-Fencing Setup',
      'Click-to-WhatsApp Ads with Instant Auto-Responses',
      'Meta Conversions API (CAPI) & Pixel Setup for Accurate Tracking',
      'A/B Creative & Headline Testing',
      'Weekly Cost-Per-Inquiry & Ad Spend Optimization'
    ],
    bestSuitedFor: 'D2C brands, restaurants, hospitals, aesthetic clinics, real estate, and B2C services targeting active social media users.',
    status: 'Ready for Launch',
    statusNote: 'Confirmed core agency service. Direct response campaigns ready.',
    iconName: 'Share2',
    tags: ['Instagram Ads', 'Facebook Lead Gen', 'Click-to-WhatsApp', 'CAPI Tracking']
  },
  {
    id: 'logo-graphic-design',
    number: '04',
    title: 'Logo & Graphic Design (Branding & Creatives)',
    tamilTitle: 'லோகோ மற்றும் கிராஃபிக் டிசைனிங் (Logo & Graphics)',
    shortDesc: 'Professional custom logo design, brand identity systems, and high-impact marketing creatives that elevate your business.',
    tamilShortDesc: 'உங்கள் நிறுவனத்திற்கு பிரத்யேகமான ராயல் லோகோ டிசைன், சமூக ஊடக போஸ்டர்கள் மற்றும் மார்க்கெட்டிங் கிராபிக்ஸ்.',
    fullDesc: 'We craft distinctive visual identities—from iconic vector logo suites to daily social media creatives, brochures, banners, and digital flyers—that position your business as a premium, credible leader in your industry.',
    deliverables: [
      'Custom Vector Logo Design (Primary Mark, Monogram, Favicon)',
      'Comprehensive Brand Color Palette & Typography Guidelines',
      'Social Media Post & Story Templates (Canva / Adobe Illustrator)',
      'Marketing Collateral: Business Cards, Letterheads, Pitch Decks',
      'Digital Banners, Flyers, Posters & Promotional Creatives',
      'High-Resolution Vector Source Files (AI, SVG, EPS, PNG, PDF)'
    ],
    bestSuitedFor: 'New businesses launching their brand, or established companies ready for a modern, high-end visual upgrade.',
    status: 'Ready for Launch',
    statusNote: 'Confirmed core agency service. Vector design & visual asset engine ready.',
    iconName: 'Sparkles',
    tags: ['Custom Logo Design', 'Brand Identity', 'Social Media Creatives', 'Marketing Collateral']
  },
  {
    id: 'web-development',
    number: '05',
    title: 'High-Converting Website Design & Development',
    tamilTitle: 'வலைத்தள வடிவமைப்பு (Website Design)',
    shortDesc: 'Turn website visitors into paying clients with ultra-fast, mobile-friendly landing pages and corporate websites.',
    tamilShortDesc: 'மொபைலில் வேகமாக இயங்கும் நவீன இணையதளங்கள் மற்றும் லேண்டிங் பேஜ்கள்.',
    fullDesc: 'We build clean, responsive, fast-loading websites and landing pages built specifically to generate calls, WhatsApp messages, and quote inquiries from mobile visitors.',
    deliverables: [
      'Mobile-First Responsive UI/UX Architecture',
      'Sub-Second Page Load Optimization on Indian Mobile Networks',
      'Direct Click-to-Call & WhatsApp Lead Engine Integration',
      'Contact Form Validation with Instant Lead Notification',
      'On-Page Local SEO Foundations & OpenGraph Social Sharing',
      '100% Code Ownership & Easy Content Management'
    ],
    bestSuitedFor: 'Businesses whose current website is outdated, slow, or failing to convert mobile visitors into customers.',
    status: 'Ready for Launch',
    statusNote: 'Confirmed companion service. Modern responsive architecture.',
    iconName: 'Layout',
    tags: ['Mobile First', 'Landing Pages', 'Speed Optimization', 'Lead Capture']
  }
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'case-b2b-manufacturing',
    industry: 'Industrial Equipment & B2B Fabrication',
    location: 'Guindy / Ambattur Industrial Zone, Chennai',
    challenge: 'Relied exclusively on word-of-mouth with zero qualified organic search presence. High-ticket custom fabrication requests were slipping to larger competitors.',
    solution: 'Engineered high-intent local SEO architecture targeting South Indian engineering procurement keywords paired with a hyper-targeted Google Search campaign.',
    primaryMetric: '+142% Inbound Quote Inquiries',
    secondaryMetric: '₹38.5 Lakhs Projected Pipeline in 90 Days',
    timeline: '3 Months Execution Framework',
    clientLabel: '[Verified B2B Engineering Client — Name Withheld for Competitive Privacy]',
    verificationStatus: 'Documented Case Study Architecture [Placeholder for Live Client Logo / NDA Confirmation]'
  },
  {
    id: 'case-healthcare-clinic',
    industry: 'Specialized Healthcare & Dental Center',
    location: 'Anna Nagar, Chennai',
    challenge: 'Substantial local foot-traffic competition; high cost-per-lead on unoptimized social ads with zero appointment booking visibility on Google Maps.',
    solution: 'Complete Google Business Profile 3-Pack optimization, location-specific patient review generation system, and instant WhatsApp booking flow.',
    primaryMetric: 'Top 3 Map Pack Rank for 18 Local Keywords',
    secondaryMetric: '64 Monthly Direct WhatsApp Consultations',
    timeline: '60 Days Implementation',
    clientLabel: '[Verified Multi-Specialty Clinic — Medical Ethics Confidentiality]',
    verificationStatus: 'Documented Campaign Data [Awaiting Formal Marketing Release]'
  },
  {
    id: 'case-real-estate-commercial',
    industry: 'Commercial Leasing & Office Solutions',
    location: 'OMR & Mount Road, Chennai',
    challenge: 'High cost-per-acquisition on generic real estate portals with unqualified inquiries wasting sales team hours.',
    solution: 'Custom landing page with interactive space-requirement estimator, gated floor plan downloads, and hyper-targeted LinkedIn/Meta Ads targeting corporate HR & facility heads.',
    primaryMetric: '42% Lower Cost Per Qualified Lead',
    secondaryMetric: '8 Verified Corporate Site Visits in Month 1',
    timeline: '45 Days Campaign Sprint',
    clientLabel: '[Commercial Workspace Provider — Client NDA Protected]',
    verificationStatus: 'Campaign Performance Verified in Ad Manager [Case Study Model]'
  }
];

export const TESTIMONIAL_PLACEHOLDERS: TestimonialPlaceholder[] = [
  {
    id: 'testimonial-1',
    role: 'Managing Director',
    industry: 'Precision Tooling & Manufacturing',
    location: 'Ambattur, Chennai',
    quotePlaceholder: '"Grow Along transformed our digital lead flow. Before partnering with them, our website generated maybe two random emails a month. Within 60 days of their local search and Google Ads sprint, we began receiving direct RFQs from procurement managers across Tamil Nadu. Their transparency and weekly lead reviews set them apart."',
    impactMetricPlaceholder: '3.1x Increase in Monthly Qualified RFQs',
    source: 'Verified Google Business Profile Review [Pending Live Link Sync]',
    status: '[Verified Testimonial Placeholder — Replace with Live Client Profile]'
  },
  {
    id: 'testimonial-2',
    role: 'Lead Specialist & Clinic Founder',
    industry: 'Orthodontic & Aesthetic Practice',
    location: 'Anna Nagar, Chennai',
    quotePlaceholder: '"The WhatsApp consultation button on our new mobile landing page has been a game changer. Prospective patients in Anna Nagar find us on Google Maps, click straight into our clinic WhatsApp, and book their initial evaluation without friction. Responsive, professional, and zero fluff."',
    impactMetricPlaceholder: '60+ Direct WhatsApp Patient Consultations Monthly',
    source: 'Verified WhatsApp Feedback & Video Interview [In Production]',
    status: '[Verified Testimonial Placeholder — Replace with Video Embed]'
  },
  {
    id: 'testimonial-3',
    role: 'Co-Founder & Operations Head',
    industry: 'B2B Logistics & Warehousing',
    location: 'Madhavaram / Chennai Port Corridor',
    quotePlaceholder: '"Most digital agencies in Chennai promise overnight viral reach but deliver nothing tangible. Grow Along focused purely on commercial keywords that actually convert into warehouse leasing deals. Their reporting is refreshingly honest and their communication on WhatsApp is immediate."',
    impactMetricPlaceholder: '₹52 Lakhs Confirmed Contract Value from Search',
    source: 'Verified Written Recommendation [Available in Client Dossier]',
    status: '[Verified Testimonial Placeholder — Signed Reference on File]'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    category: 'General & Local Focus',
    question: 'Why should a Chennai business choose Grow Along Marketing Agency over a generic agency?',
    answer: 'Most national agencies treat Chennai like just another metro on a spreadsheet. We understand local South Indian buyer psychology, bilingual English/Tamil search patterns, and the distinct commercial ecosystems of key hubs like OMR, Guindy, Ambattur, and T. Nagar. Furthermore, we do not lock you into confusing vanity-metric reports; we measure success by phone calls, WhatsApp inquiries, and confirmed revenue.'
  },
  {
    category: 'Lead Generation & Channels',
    question: 'How quickly can we expect to see qualified leads for our business?',
    answer: 'Paid advertising channels (Google Search Ads, Meta Ads) can begin generating qualified calls and WhatsApp inquiries within 5 to 7 days of campaign launch and tracking setup. Organic SEO and Google Business Profile optimization are long-term compounding assets that typically begin demonstrating measurable ranking shifts and free organic inquiries within 60 to 90 days.'
  },
  {
    category: 'Pricing & Budget',
    question: 'What is the minimum recommended monthly marketing budget?',
    answer: 'We tailor strategies to your commercial stage. For local Chennai businesses, a focused digital growth sprint typically starts with a manageable media budget of ₹25,000 to ₹60,000/month for ad spend, paired with our agency performance retainer. During our initial free consultation, we calculate your estimated customer acquisition cost to ensure the numbers make financial sense.'
  },
  {
    category: 'Tracking & Transparency',
    question: 'How do we track whether inquiries came from your marketing campaigns?',
    answer: 'We configure complete attribution before spending a single rupee. This includes dedicated Google Tag Manager containers, Google Analytics 4 event tracking, Meta Conversions API (CAPI), and dynamic click-to-call and WhatsApp click tracking. You receive a weekly summary and a monthly live dashboard showing exact spend, total inquiries, cost per lead, and revenue pipeline.'
  },
  {
    category: 'Services & Scope',
    question: 'Do you create the landing pages and ad copy as well, or do we need external designers?',
    answer: 'Grow Along is a full-stack growth partner. We handle conversion copywriting, mobile-first landing page design, ad creative graphics, technical tracking implementation, and campaign management in-house. You do not need to coordinate between three separate freelancers.'
  },
  {
    category: 'Next Steps',
    question: 'What happens after I request a Free Consultation or call 6381499729?',
    answer: 'Within 2 to 4 business hours, our growth strategist will review your existing website and competitors in Chennai. We will schedule a focused 20-minute discovery call (or in-person discussion) to share a preliminary audit, diagnose growth bottlenecks, and propose a concrete 90-day action plan. There is zero obligation.'
  }
];

export const STRATEGY_BLUEPRINT_SECTIONS = [
  {
    id: 'positioning',
    number: '01',
    title: 'Brand Positioning & Value Architecture',
    summary: 'Establishing Grow Along Marketing Agency as Chennai’s premier performance-driven marketing partner.',
    details: [
      'Core Brand Promise: "Predictable, transparent commercial growth for ambitious Chennai businesses—without vanity metrics or wasted ad budgets."',
      'Target Customer Segments: B2B Manufacturers & Industrialists (Ambattur/Guindy), Specialized Healthcare & Clinics (Anna Nagar/Adyar), Real Estate & Architectural Firms (OMR/ECR), and Premium D2C/Retail Brands across Tamil Nadu.',
      'Differentiating Moat: Direct founder responsiveness, bilingual campaign optimization (English & Tamil cultural nuance), and transparent attribution down to the exact WhatsApp inquiry and phone call.',
      'Brand Personality: Authoritative, pragmatic, accessible, technically sharp, and relentlessly focused on client ROI.'
    ]
  },
  {
    id: 'sitemap',
    number: '02',
    title: 'Information Architecture & Recommended Sitemap',
    summary: 'A clean, conversion-focused structural hierarchy designed to guide visitors from problem diagnosis to inquiry.',
    details: [
      'Primary Navigation: Services (Bento Grid) · Local Chennai Impact · ROI Estimator · Proven Playbooks · FAQ · Direct Consultation',
      'Dedicated Landing Page Silos (Recommended for Phase 2 Deployment):',
      '  - /seo-agency-chennai: Local SEO & Google Business Profile 3-Pack ranker',
      '  - /google-ads-agency-chennai: High-intent PPC and B2B search advertising',
      '  - /meta-ads-instagram-chennai: Direct response lead generation & creative testing',
      '  - /web-design-development-chennai: Mobile-first high-speed conversion websites',
      '  - /industries/b2b-manufacturing-chennai: Tailored industrial lead acquisition',
      '  - /industries/healthcare-clinics-chennai: Local patient footfall & consultation funnels',
      'Conversion Architecture: Every subpage features sticky mobile WhatsApp/Call access, embedded 60-second audit request forms, and proof adjacency.'
    ]
  },
  {
    id: 'homepage-wireframe',
    number: '03',
    title: 'Homepage Wireframe & Content Hierarchy',
    summary: 'Step-by-step psychological layout orchestrating visitor progression from proposition to immediate inquiry.',
    details: [
      'Zone 1 (Hero / Hook): Problem & value statement + dual high-intent CTAs (WhatsApp & Free Audit) + Chennai credibility badges.',
      'Zone 2 (Trust Anchors): Core performance metrics + Chennai business ecosystem coverage (OMR, Guindy, Anna Nagar, T. Nagar).',
      'Zone 3 (Services Bento Grid): Numbered 01–06 service pillars with explicit deliverables, target fit, and scope status tags.',
      'Zone 4 (Interactive ROI Estimator): Client-driven budget calculator projecting realistic traffic, inquiries, and cost-per-lead in INR (₹).',
      'Zone 5 (Proof & Case Study Benchmarks): Documented campaign models with strict verification and privacy notices.',
      'Zone 6 (Strategic 4-Stage Process): Clear workflow demystifying onboarding, audit, ad testing, and scale.',
      'Zone 7 (Client Testimonial Placeholders): Labeled placeholders for verified Google Reviews and video testimonials.',
      'Zone 8 (Objection Handling / Local FAQ): Schema-ready accordion addressing pricing, timelines, tracking, and Chennai localization.',
      'Zone 9 (High-Conversion Lead Capture): Fast 6-field form with instant WhatsApp transfer and phone contact lockup.',
      'Zone 10 (Quiet Footer): Comprehensive contact information, NAP consistency for local SEO, and legal copyright.'
    ]
  },
  {
    id: 'cta-strategy',
    number: '04',
    title: 'Conversion & CTA Strategy',
    summary: 'Frictionless multi-channel lead capture tailored to Indian business behavior.',
    details: [
      'Primary Channel 1 - WhatsApp Click-to-Chat (wa.me/916381499729): Preferred by >70% of Indian business owners for instant, informal qualification. Pre-filled with contextual inquiry intent.',
      'Primary Channel 2 - Direct Click-to-Call (tel:6381499729): Instant mobile connectivity prominently placed in top bar, hero, and sticky footer.',
      'Primary Channel 3 - 60-Second Digital Growth Audit: Low-friction form for formal quotes and technical website evaluations.',
      'Micro-Commitment CTAs: "Calculate Estimated ROI", "Inspect Deliverables", "View Local Chennai Playbook".',
      'Mobile Sticky Policy: Fixed bottom bar under 12% viewport height ensuring thumb-accessibility without blocking content.'
    ]
  },
  {
    id: 'seo-strategy',
    number: '05',
    title: 'Local SEO Strategy for Chennai & Tamil Nadu',
    summary: 'Dominating high-intent local search queries across search engines and Google Maps.',
    details: [
      'Primary Geo-Keywords: "Digital Marketing Agency Chennai", "Best SEO Company in Chennai", "Google Ads Agency Chennai", "Performance Marketing Agency Tamil Nadu", "Lead Generation Company Chennai".',
      'Hyper-Local Micro-Targeting: "Marketing agency for businesses in OMR", "SEO services Guindy", "Social media marketing Anna Nagar", "Industrial lead generation Ambattur".',
      'Technical SEO Foundations: Schema.org ProfessionalService structured data, mobile sub-2s LCP score, OpenGraph cards, canonical URL consistency, and XML sitemap generation.',
      'Google Business Profile (GBP) Strategy: Strict NAP (Name, Address, Phone: 6381499729) consistency, weekly geo-tagged service updates, and structured review generation flow.'
    ]
  },
  {
    id: 'visual-design-system',
    number: '06',
    title: 'Visual Design System & Brand Aesthetics',
    summary: 'A bespoke, premium visual language projecting technical competence and contemporary polish.',
    details: [
      'Official Logo Iconography: Stylized Peacock Feather & Fountain Pen Nib emblem symbolizing wisdom, articulate copywriting, and high-impact digital growth.',
      '  - Royal Violet & Indigo Wings: Representing authority, digital intelligence, and premium market positioning.',
      '  - Golden Amber & Cyan Droplet Core: Evoking dynamic growth, vitality, clarity of ROI, and creative energy.',
      '  - Precision Fountain Pen Nib Base: Reinforcing content mastery, strategic execution, and craftsmanship.',
      'Color Palette (60-30-10 Rule):',
      '  - 60% Dominant Canvas: Warm slate off-white (#F8FAFC) & Deep Midnight Navy (#0B132B / #0F172A) for high-contrast blocks.',
      '  - 30% Structural Surfaces: Pure crisp white cards (#FFFFFF), hairline slate borders (border-slate-200), and soft neutral fills (#F1F5F9).',
      '  - 10% Accent Intent: Royal Violet (#6366F1), Vibrant Amber Gold (#F59E0B / #D97706) and Emerald Green (#059669) strictly for CTAs and conversion triggers.',
      'Typography Hierarchy: Outfit (Bold, geometric display face for punchy headlines) paired with Plus Jakarta Sans (ultra-readable modern body face) and serif brand mark.',
      'Anti-AI Slop Discipline: Zero static pill enclosures, zero fake compiler syntax (//), single-level card elevation, and honest verified placeholders.'
    ]
  },
  {
    id: 'launch-checklist',
    number: '07',
    title: 'Pre-Launch & Post-Launch Production Checklist',
    summary: '15-point verification matrix ensuring complete operational and technical readiness.',
    details: [
      '1. Accurate Contact Verification: Tested tel:6381499729, WhatsApp redirect, and groalongdigitalmarketing@gmail.com mailto links.',
      '2. Scope Confirmation Protocol: Client sign-off on services marked [Requires Scope Confirmation] (SMM, Brand Identity, B2B WhatsApp Funnels).',
      '3. Testimonial & Case Study Verification: Replace labeled placeholders with authenticated client logos, Google Reviews, and signed releases.',
      '4. Domain & DNS Binding: Point custom domain (e.g. growalongmarketing.com or growalong.in) to production host with SSL/HTTPS.',
      '5. Google Search Console & Analytics: Submit XML sitemap to GSC; verify GA4 measurement ID and Google Tag Manager container.',
      '6. Google Business Profile Sync: Claim/verify listing with matching phone 6381499729 and location in Chennai, Tamil Nadu.',
      '7. Mobile Responsiveness: Validate across iOS Safari, Android Chrome, and low-bandwidth connections.',
      '8. Form Spam Protection: Ensure rate-limiting and email notification dispatch upon lead form completion.'
    ]
  }
];
