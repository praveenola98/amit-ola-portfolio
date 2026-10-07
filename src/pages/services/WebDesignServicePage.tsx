import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/common/SEOHead';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import ContactActionBlock from '../../components/common/ContactActionBlock';
import ServiceActionModal from '../../components/common/ServiceActionModal';

export default function WebDesignServicePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const features = [
    {
      title: 'Responsive & Mobile-First Architecture',
      desc: 'Flawless visual hierarchy across all smartphone viewports, tablets, laptops, and ultra-wide displays with zero layout shift.',
    },
    {
      title: 'High-Converting Landing Pages',
      desc: 'Direct-response sales and lead capture pages structured around customer objections, clear value propositions, and action triggers.',
    },
    {
      title: 'Corporate & Service Websites',
      desc: 'Multi-page digital flagship properties that establish immediate trust and present your commercial offerings with clean, modern polish.',
    },
    {
      title: 'UI/UX & Conversion Layout Design',
      desc: 'Clear typography and structured layout design focused on readability, fast navigation, and frictionless user journeys.',
    },
    {
      title: 'Performance & Core Web Vitals',
      desc: 'Clean code execution and lightweight assets ensuring lightning-fast sub-second initial loads to preserve visitor attention.',
    },
    {
      title: 'Direct WhatsApp & Lead Capture Setup',
      desc: 'Frictionless click-to-chat WhatsApp buttons, validated lead inquiry forms, and analytics event tracking wired directly into your inbox.',
    },
  ];

  const faqs = [
    {
      q: 'What is the starting price for a website project?',
      a: 'Web design projects start from ₹15,000 for focused, high-converting landing pages or compact business web properties. Larger multi-page websites and custom portals are scoped individually.',
    },
    {
      q: 'Do you design with mobile visitors in mind?',
      a: 'Absolutely. Over 70% of inbound web traffic originates on mobile devices. Every layout is drafted mobile-first with thumb-friendly touch targets and rapid mobile performance.',
    },
    {
      q: 'Is technical SEO included in the build?',
      a: 'Yes. Every website includes foundational technical SEO: semantic HTML headings, XML sitemaps, robots.txt, fast Core Web Vitals, OpenGraph social preview tags, and clean metadata.',
    },
    {
      q: 'How long does a website project take from start to finish?',
      a: 'A dedicated landing page typically delivers in 5 to 7 days. A full 5-to-10 page business website takes approximately 2 to 3 weeks including revisions and tracking integration.',
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white text-slate-900">
      <SEOHead
        title="Web Design Services | Amit Ola – Freelance Web Designer"
        description="Conversion-focused modern web design and landing page development by Amit Ola starting from ₹15,000. Mobile-first UI/UX, fast speed, and WhatsApp lead integration."
        canonicalPath="/services/web-design"
        breadcrumbs={[
          { name: 'Services', url: '/services' },
          { name: 'Web Design', url: '/services/web-design' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Breadcrumbs
          items={[
            { name: 'Services', url: '/services' },
            { name: 'Web Design & CRO', url: '/services/web-design' },
          ]}
        />

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
            Web Design &amp; Conversion Optimization
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Websites engineered to <br />
            <span className="text-blue-600">
              convert visitors into clients.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
            A website that fails to generate leads is merely an expense.
            I design and build fast, modern, conversion-focused websites that establish instant market authority and drive direct customer inquiries.
          </p>

          <div className="flex flex-wrap items-baseline gap-6 mb-8 bg-slate-50 border border-slate-200 rounded-xl px-6 py-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Investment Tier:
            </span>
            <span className="text-2xl font-extrabold font-mono text-slate-900 tabular-nums">
              Starting from ₹15,000
            </span>
            <span className="text-xs text-slate-500">
              Landing pages, business portfolios, and custom multi-page sites
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-xs"
            >
              Start a Website Project
            </button>
            <Link
              to="/growth-packages"
              className="px-6 py-3.5 border border-slate-300 hover:bg-slate-50 text-slate-800 text-sm font-semibold rounded-lg transition-colors"
            >
              See Full Digital Packages
            </Link>
          </div>

          <ContactActionBlock
            compact
            serviceContext="Web Design"
            whatsappMessage="Hi Amit, I want to discuss a website project."
            emailSubject="Web Design Enquiry - Amit Ola"
          />
        </div>

        {/* Deliverables Grid */}
        <section className="py-14 border-t border-slate-200">
          <div className="border-b border-slate-200 pb-4 mb-10 flex items-center justify-between">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Deliverable Specifications
            </div>
            <div className="text-xs text-slate-500 font-medium">
              What Is Included
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {features.map((item, idx) => (
              <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Deliverable 0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 border-t border-slate-200 mb-14">
          <div className="border-b border-slate-200 pb-4 mb-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Frequently Asked Questions
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Conversion Section */}
        <ContactActionBlock
          title="Start Your Website Project"
          subtitle="Share your existing URL or project vision. I will review your goals and provide a structured scope and timeline."
          serviceContext="Web Design"
          whatsappMessage="Hi Amit, I want to discuss a website project."
          emailSubject="Web Design Enquiry - Amit Ola"
        />
      </div>

      <ServiceActionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName="Web Design & CRO"
        price="Starting from ₹15,000"
      />
    </div>
  );
}
