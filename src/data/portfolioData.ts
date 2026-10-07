import type {
  ServiceItem,
  AdditionalService,
  GrowthPackage,
  ExperienceItem,
  ProcessStep,
  CaseStudy,
  FocusMetric,
} from '../types/portfolio';

// Local high-fidelity image assets generated for Amit Ola's portfolio
import portraitImg from '../assets/images/amit_ola_portrait_1790349787911.jpg';
import caseSeoImg from '../assets/images/case_seo_strategy_1790349667858.jpg';
import caseMetaImg from '../assets/images/case_meta_performance_1790349680600.jpg';
import caseEcommerceImg from '../assets/images/case_ecommerce_scale_1790349693849.jpg';
import caseWebImg from '../assets/images/case_web_conversion_1790349706966.jpg';

export const PERSONAL_INFO = {
  name: 'Amit Ola',
  location: 'Nawalgarh, Rajasthan, India',
  profession: 'Freelance Digital Marketing Expert & SEO Specialist',
  experienceYears: '2+',
  phone: '+91 96026 38026',
  phoneRaw: '9602638026',
  phoneClean: '919602638026',
  email: 'nexloomdigital@gmail.com',
  portraitImage:portraitImg,
  tagline: 'Turning digital attention into growth.',
  subheading:
    'I help businesses build visibility, generate qualified leads and grow through SEO, performance marketing, social media and conversion-focused digital experiences.',
  availability: 'Available for freelance engagements & retainers',
};

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'a2b-software',
    company: 'A2B Software LLC',
    role: 'Digital Marketing Manager',
    location: 'Remote',
    tenure: 'Recent Engagement',
    description:
      'Led comprehensive digital marketing operations, cross-channel acquisition strategies, and conversion rate architecture for software and tech offerings.',
    responsibilities: [
      'Orchestrated multi-channel marketing campaigns spanning paid social and organic search',
      'Refined conversion pathways and landing page funnels for lead acquisition',
      'Collaborated directly with engineering and product stakeholders on growth iterations',
    ],
  },
  {
    id: 'dtc-capital',
    company: 'DTC Capital',
    role: 'Social Media Manager',
    location: 'Remote',
    tenure: 'Client Engagements',
    description:
      'Directed organic and paid social distribution channels, audience positioning, and interactive brand presence across business networks.',
    responsibilities: [
      'Developed content calendars and narrative positioning across platforms',
      'Managed brand voice and inbound community interactions',
      'Analyzed engagement patterns to drive targeted reach without vanity metrics',
    ],
  },
  {
    id: 'brainosys',
    company: 'Brainosys',
    role: 'SEO Executive & Meta Ads Specialist',
    location: 'India',
    tenure: 'Professional Tenure',
    description:
      'Executed technical on-page, off-page SEO and high-converting Meta Ads (Facebook & Instagram) performance campaigns across multiple client web properties.',
    responsibilities: [
      'Conducted exhaustive keyword intent clustering, SEO audits, and competitive gap analyses',
      'Planned, launched, and optimized targeted Meta Ads campaigns for lead generation and conversions',
      'Resolved technical crawl anomalies, internal linking depth, Pixel tracking, and Search Console performance',
    ],
  },
  {
    id: 'ubgot-academy',
    company: 'Ubgot Academy',
    role: 'Digital Marketing & Meta Ads Expert',
    location: 'India',
    tenure: 'Foundational Period',
    description:
      'Spearheaded digital growth strategies, Meta Ads campaign management, practical marketing deployment, and lead generation funnels.',
    responsibilities: [
      'Built and scaled Meta Ads (Facebook & Instagram) performance campaigns and audience segmentation funnels',
      'Managed digital presence initiatives, local business visibility, and search listings',
      'Established disciplined campaign tracking, Meta Pixel conversion tags, and ROI attribution',
    ],
  },
];

export const MAIN_SERVICES: ServiceItem[] = [
  {
    id: 'seo',
    name: 'Search Engine Optimization (SEO)',
    description:
      'Complete search architecture to secure dominant visibility for high-intent queries that drive actual business enquiries.',
    startingPrice: 9000,
    periodLabel: 'starting from',
    recommendedFor: 'Businesses needing consistent organic leads without paying per click',
    deliverables: [
      'Comprehensive Technical Site Audit',
      'Intent-Driven Keyword Research & Mapping',
      'On-Page Optimization (Meta, Headings, Internal Links)',
      'Google Search Console & Analytics Setup',
      'Core Web Vitals & Speed Recommendations',
      'Monthly Search Visibility Report',
    ],
  },
  {
    id: 'web-design',
    name: 'Web Design & CRO',
    description:
      'Conversion-centered web design that transforms passive website visitors into qualified calls, inquiries, and sales.',
    startingPrice: 15000,
    periodLabel: 'starting from',
    recommendedFor: 'Brands with outdated websites that fail to convert traffic into leads',
    deliverables: [
      'Custom Responsive Layout (Mobile + Desktop)',
      'Conversion-Focused Copywriting Structure',
      'Speed-Optimized Technical Build',
      'Lead Capture & WhatsApp Integration',
      'Search Engine Friendly Architecture',
      'Analytics & Event Tracking Deployment',
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Account Management',
    description:
      'Strategic operational management and catalog optimization to improve product discovery, sales velocity, and seller ratings.',
    startingPrice: 15000,
    periodLabel: 'starting from',
    recommendedFor: 'D2C brands and retailers looking to scale store sales sustainably',
    deliverables: [
      'Product Listing & Title SEO Optimization',
      'A+ Content & Visual Hierarchy Guidance',
      'Inventory Movement & Promotion Planning',
      'Review Acquisition & Account Health Safeguards',
      'Paid Ad Campaign Oversight',
      'Monthly Gross Sales & Margin Audits',
    ],
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads (Facebook & Instagram)',
    description:
      'Targeted performance advertising designed to put your offer directly in front of buyers ready to take action.',
    startingPrice: 12000,
    periodLabel: 'starting from',
    recommendedFor: 'Businesses wanting rapid customer acquisition and scalable lead volume',
    deliverables: [
      'Custom Audience & Persona Architecture',
      'Ad Creative Angles & Direct Response Copy',
      'Pixel, Conversions API & Event Tracking',
      'A/B Creative & Hook Testing',
      'Retargeting & LTV Funnel Setup',
      'Weekly ROAS & Cost-Per-Acquisition Optimization',
    ],
  },
  {
    id: 'social-media',
    name: 'Social Media Management',
    description:
      'Consistent, brand-aligned social content and community management that builds credibility and sustained trust.',
    startingPrice: 11000,
    periodLabel: 'starting from',
    recommendedFor: 'Founders and companies looking to establish an active, authoritative voice',
    deliverables: [
      'Monthly Content Strategy & Posting Calendar',
      'High-Quality Static & Carousel Graphics',
      'Compelling Value-Driven Captions & Hashtags',
      'Community Engagement & Inbound Message Handling',
      'Profile Bio & Link-in-Bio Funnel Optimization',
      'Monthly Growth & Engagement Analytics',
    ],
  },
];

export const ADDITIONAL_SERVICES: AdditionalService[] = [
  {
    id: 'gbp-optimization',
    name: 'Google Business Profile Optimization',
    startingPrice: 5000,
    description:
      'Local map pack ranking optimization, geo-targeted citations, category calibration, and review strategy.',
    turnaround: '3–5 Days',
  },
  {
    id: 'keyword-audit',
    name: 'Keyword Research & SEO Audit',
    startingPrice: 4000,
    description:
      'Exhaustive deep-dive analyzing search competitor gaps, search intent clusters, and quick-win keyword opportunities.',
    turnaround: '3 Days',
  },
  {
    id: 'social-strategy',
    name: 'Social Media Strategy Blueprint',
    startingPrice: 5000,
    description:
      'A bespoke content pillars document, target audience breakdown, and visual style direction for your internal team.',
    turnaround: '4 Days',
  },
  {
    id: 'landing-optimization',
    name: 'Landing Page Optimization',
    startingPrice: 6000,
    description:
      'Heuristic UX audit, value proposition sharpening, form friction reduction, and CTA placement redesign.',
    turnaround: '3–5 Days',
  },
  {
    id: 'content-strategy',
    name: 'Content Marketing Strategy',
    startingPrice: 5000,
    description:
      'Editorial topic clusters mapped to user buying journeys, designed to rank and build high authority.',
    turnaround: '4 Days',
  },
  {
    id: 'website-seo',
    name: 'Website SEO Technical Remediation',
    startingPrice: 7000,
    description:
      'Hands-on technical fixes for site architecture, canonicals, schema markup, and indexation bottlenecks.',
    turnaround: '5–7 Days',
  },
];

export const GROWTH_PACKAGES: GrowthPackage[] = [
  {
    id: 'starter-growth',
    name: 'Starter Growth',
    price: 14000,
    cadence: 'per month',
    tagline: 'Essential organic presence and local discovery for emerging local businesses.',
    deliverables: [
      'SEO Basics & Monthly On-Page Tuning',
      'Social Media Strategy & Core Content',
      'Google Business Profile Optimization',
      'Monthly Performance & Progress Report',
      'Direct WhatsApp Advisory Support',
    ],
    popular: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 22000,
    cadence: 'per month',
    tagline: 'Balanced multi-channel engine connecting organic search with targeted paid reach.',
    deliverables: [
      'Comprehensive Ongoing SEO Optimization',
      'Full Social Media Management (12 posts/mo)',
      'Meta Ads Campaign Setup & Management',
      'Monthly Landing Page Recommendations',
      'Bi-Weekly Performance Reporting & Calls',
    ],
    popular: true,
  },
  {
    id: 'business-growth',
    name: 'Business Growth',
    price: 30000,
    cadence: 'per month',
    tagline: 'Aggressive lead generation system for established companies ready to scale.',
    deliverables: [
      'Advanced SEO & Content Keyword Clustering',
      'Social Media Management (16 posts/mo)',
      'Meta Ads Funnel Optimization & Scaling',
      'Landing Page Optimization & A/B Wireframes',
      'Monthly Growth & Conversion Strategy Sessions',
    ],
    popular: false,
  },
  {
    id: 'full-digital',
    name: 'Full Digital',
    price: 40000,
    cadence: 'per month',
    tagline: 'Complete outsourced digital marketing department for ambitious growth brands.',
    deliverables: [
      'Full-Stack SEO (Technical, On-Page & Off-Page)',
      'Complete Social Media & Community Operations',
      'Multi-Campaign Meta Ads Management',
      'Website Architecture & Strategy Consulting',
      'E-commerce & Store Management Guidance',
      'Weekly Strategy Synchronization & Real-Time Reporting',
    ],
    popular: false,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    name: 'Discover',
    subtitle: 'Deep-dive into business context',
    summary:
      'We begin by understanding your exact business model, target customer personas, competitive landscape, and commercial revenue objectives.',
    deliverables: ['Stakeholder Briefing', 'Target Audience Profile', 'Growth Constraints Audit'],
  },
  {
    number: '02',
    name: 'Audit',
    subtitle: 'Objective digital forensics',
    summary:
      'A forensic assessment of your existing digital presence — search visibility, advertising efficiency, technical bottlenecks, and customer drop-off points.',
    deliverables: ['Technical SEO Audit', 'Campaign Efficiency Review', 'Opportunity Matrix'],
  },
  {
    number: '03',
    name: 'Strategize',
    subtitle: 'Practical roadmap formulation',
    summary:
      'Developing a customized, multi-channel growth blueprint with clear deliverables, prioritized quick-wins, and realistic milestones.',
    deliverables: ['90-Day Execution Roadmap', 'Keyword Intent Clusters', 'Creative & Offer Angles'],
  },
  {
    number: '04',
    name: 'Execute',
    subtitle: 'Precision implementation',
    summary:
      'Rolling out on-page SEO changes, publishing structured content, configuring ad audiences, and deploying conversion-focused adjustments.',
    deliverables: ['Live Campaign Launch', 'Technical Code/Meta Updates', 'Tracking Tag Verification'],
  },
  {
    number: '05',
    name: 'Optimize',
    subtitle: 'Continuous refinement & scale',
    summary:
      'Reviewing real query metrics and ad performance data weekly to eliminate wasted spend, double down on winning channels, and lower acquisition costs.',
    deliverables: ['Bi-Weekly Reports', 'Continuous Split-Testing', 'Channel Scaling Recommendations'],
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: 'Strategy First',
    description:
      'Every campaign begins with understanding your business unit economics and target buyer mindset, not cookie-cutter checklists.',
  },
  {
    title: 'Data Driven',
    description:
      'Decisions are strictly guided by search intent metrics, ad performance signals, and bottom-line revenue goals — never guesswork.',
  },
  {
    title: 'Multi-Channel Thinking',
    description:
      'SEO, paid media, social channels, and web experience multiply each other when engineered as a unified customer journey.',
  },
  {
    title: 'Transparent Communication',
    description:
      'Direct access to me with honest timelines, realistic projections, and straightforward reporting without corporate jargon.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-seo',
    title: 'Organic Search Visibility & High-Intent Indexation',
    category: 'SEO & Search Architecture',
    image: caseSeoImg,
    problem:
      'Client had minimal organic search footprint and was entirely dependent on rising paid ad costs for inquiries.',
    solution:
      'Restructured site architecture, resolved technical crawl anomalies, and built targeted intent keyword clusters for decision-phase searchers.',
    servicesProvided: ['Technical SEO Audit', 'Keyword Intent Mapping', 'On-Page Optimization', 'Crawl Optimization'],
    keyOutcomeFocus: 'Organic keyword rankings for commercial queries & sustainable inbound organic discovery',
    highlights: [
      'Engineered structured data schema across primary pages',
      'Resolved multi-page indexation blockers in Search Console',
      'Optimized page title hierarchy for high-intent search queries',
    ],
  },
  {
    id: 'case-meta',
    title: 'Direct-Response Meta Ads Acquisition Funnel',
    category: 'Performance Marketing',
    image: caseMetaImg,
    problem:
      'Generic advertising campaigns were burning budget with high cost-per-click and low form completion rates.',
    solution:
      'Redesigned the ad creative framework with pain-point hook testing, tightened custom audience exclusions, and built dedicated mobile landing screens.',
    servicesProvided: ['Meta Ads Management', 'Creative Direct-Response Copy', 'CAPI Conversion Tracking', 'A/B Hook Testing'],
    keyOutcomeFocus: 'Lowering acquisition cost per lead & enhancing qualified prospect intent',
    highlights: [
      'Built multi-stage retargeting funnel for warm website visitors',
      'Integrated Conversions API for resilient server-side attribution',
      'Tested 8 creative angles to isolate the highest converting messaging',
    ],
  },
  {
    id: 'case-ecommerce',
    title: 'Catalog Optimization & Marketplace Growth Operations',
    category: 'E-commerce Account Operations',
    image: caseEcommerceImg,
    problem:
      'Store catalog had low organic product discoverability, disjointed descriptions, and stagnating month-over-month sales velocity.',
    solution:
      'Standardized product attribute taxonomies, implemented search-friendly title formulas, and restructured promotional pricing calendars.',
    servicesProvided: ['Catalog Architecture', 'Title & Attribute SEO', 'Account Health Oversight', 'Promotional Planning'],
    keyOutcomeFocus: 'Product discoverability, listing conversion rate, and inventory turnover velocity',
    highlights: [
      'Optimized backend search terms for high-volume catalog SKUs',
      'Streamlined product imagery guidelines to improve click-through rate',
      'Established disciplined promotion schedules around seasonal demand',
    ],
  },
  {
    id: 'case-web',
    title: 'High-Converting Web Experience & Lead Funnel',
    category: 'Web Design & CRO',
    image: caseWebImg,
    problem:
      'Outdated desktop layout suffered from 78% mobile bounce rates and confusing navigation pathways.',
    solution:
      'Designed and built a sleek, modern, mobile-first web layout with frictionless WhatsApp click-to-chat and instant enquiry forms.',
    servicesProvided: ['Mobile-First UI Design', 'Conversion Architecture', 'Speed Optimization', 'WhatsApp Funnel Integration'],
    keyOutcomeFocus: 'Visitor engagement time, mobile usability score, and inquiry submission rate',
    highlights: [
      'Reduced initial page load latency to under 1.2 seconds',
      'Placed strategic direct WhatsApp contact triggers at key decision sections',
      'Crafted clear, zero-jargon service breakdown cards',
    ],
  },
];

export const FOCUS_METRICS: FocusMetric[] = [
  {
    title: 'Visibility',
    subtitle: 'Being found at the moment of intent',
    description:
      'Securing high-visibility placement on Google Search and targeted social feeds when prospective clients actively look for solutions.',
    kpis: ['Keyword Ranking Depth', 'Search Impressions', 'Brand Search Volume'],
  },
  {
    title: 'Traffic Quality',
    subtitle: 'Attracting decision-makers, not vanity clicks',
    description:
      'Filtering for visitors whose geography, budget, and pain points align with what you actually sell.',
    kpis: ['Engaged Session Rate', 'High-Intent Query Ratio', 'Zero-Bounce Navigation'],
  },
  {
    title: 'Qualified Leads',
    subtitle: 'Meaningful commercial conversations',
    description:
      'Structuring every page and ad so high-value prospects reach out directly via call, form, or WhatsApp.',
    kpis: ['Form Submissions', 'Direct WhatsApp Chats', 'Direct Phone Enquiries'],
  },
  {
    title: 'Conversions',
    subtitle: 'Frictionless customer journeys',
    description:
      'Removing hesitation triggers, slow loading scripts, and confusing pricing through clear conversion rate optimization.',
    kpis: ['Landing Page Conversion Rate', 'Checkout Velocity', 'Micro-Commitment Rates'],
  },
  {
    title: 'Brand Presence',
    subtitle: 'Authority that commands premium pricing',
    description:
      'Establishing a consistent, trustworthy visual and communication identity across touchpoints so prospects trust your expertise.',
    kpis: ['Profile Engagement', 'Direct Brand Mentions', 'Trust Signals Consistency'],
  },
  {
    title: 'Retention',
    subtitle: 'Lifetime customer value maximization',
    description:
      'Cultivating repeat business, referrals, and long-term client engagements through sustained channel performance.',
    kpis: ['Repeat Engagement Rate', 'Customer Lifetime Value', 'Referral Momentum'],
  },
];
