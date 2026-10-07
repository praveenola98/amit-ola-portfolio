import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/common/SEOHead';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import ContactActionBlock from '../../components/common/ContactActionBlock';
import ServiceActionModal from '../../components/common/ServiceActionModal';

export default function SeoServicePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const deliverables = [
    {
      title: 'Keyword Intent Mapping',
      desc: 'Exhaustive keyword research categorizing queries by transactional, commercial, and informational intent to attract prospective buyers rather than casual browsers.',
    },
    {
      title: 'Technical SEO & Crawl Diagnostics',
      desc: 'Auditing and fixing indexation blockers, XML sitemaps, canonical tags, mobile responsiveness, and Core Web Vitals.',
    },
    {
      title: 'On-Page Content & Tag Optimization',
      desc: 'Optimizing title tags, meta descriptions, semantic H1-H3 hierarchy, URL structures, and content density for targeted search terms.',
    },
    {
      title: 'Internal Linking & Site Architecture',
      desc: 'Designing topical silos and strategic contextual link equity to help key conversion pages rank with authority.',
    },
    {
      title: 'Image & Asset Optimization',
      desc: 'Compressing visuals, applying keyword-descriptive alt tags, and implementing modern next-gen image serving.',
    },
    {
      title: 'Transparent Monthly SEO Reporting',
      desc: 'Detailed monthly performance reports from Google Search Console and analytics tracking real impressions, clicks, and ranking trajectories.',
    },
  ];

  const faqs = [
    {
      q: 'Do you guarantee #1 rankings on Google?',
      a: 'No. Any marketer promising guaranteed #1 rankings is practicing unethical SEO. Google explicitly warns against rank guarantees because search algorithms evaluate hundreds of dynamic factors. What I do guarantee is disciplined technical execution, white-hat optimization, and commercial keyword alignment that builds genuine authority.',
    },
    {
      q: 'How long does SEO take to produce measurable results?',
      a: 'SEO is a compounding acquisition channel. Technical fixes and indexation updates usually reflect within 2 to 6 weeks, while competitive commercial keyword movements typically require 3 to 6 months of steady optimization.',
    },
    {
      q: 'Is this a one-time project or a monthly retainer?',
      a: 'Starting from ₹9,000, we offer both one-time technical foundation audits and ongoing monthly optimization retainers. For long-term keyword momentum, a monthly retainer is recommended.',
    },
    {
      q: 'What tools and platforms do you optimize for?',
      a: 'I optimize websites built on WordPress, Shopify, Next.js, React, Webflow, and custom codebases, utilizing Google Search Console, Google Analytics 4, Ahrefs/Semrush data, and Screaming Frog.',
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white text-slate-900">
      <SEOHead
        title="SEO Services | Amit Ola – Freelance SEO Specialist"
        description="Search Engine Optimization (SEO) services by Amit Ola starting from ₹9,000. Keyword research, technical SEO, on-page optimization, and organic search visibility."
        canonicalPath="/services/seo"
        breadcrumbs={[
          { name: 'Services', url: '/services' },
          { name: 'SEO', url: '/services/seo' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Breadcrumbs
          items={[
            { name: 'Services', url: '/services' },
            { name: 'Search Engine Optimization (SEO)', url: '/services/seo' },
          ]}
        />

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
            Search Engine Optimization · Specialized Service
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Search engine optimization <br />
            <span className="text-blue-600">
              that builds long-term pipeline.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
            I help businesses establish organic search authority, rank for commercial high-intent keywords,
            and capture qualified prospective clients actively searching for their products and services.
          </p>

          <div className="flex flex-wrap items-baseline gap-6 mb-8 bg-slate-50 border border-slate-200 rounded-xl px-6 py-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Investment Tier:
            </span>
            <span className="text-2xl font-extrabold font-mono text-slate-900 tabular-nums">
              Starting from ₹9,000
            </span>
            <span className="text-xs text-slate-500">
              Custom scope for enterprise audits &amp; multi-lingual catalogs
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-xs"
            >
              Discuss SEO
            </button>
            <Link
              to="/growth-packages"
              className="px-6 py-3.5 border border-slate-300 hover:bg-slate-50 text-slate-800 text-sm font-semibold rounded-lg transition-colors"
            >
              Explore Monthly Packages
            </Link>
          </div>

          <ContactActionBlock
            compact
            serviceContext="SEO"
            whatsappMessage="Hi Amit, I want to discuss SEO services for my business."
            emailSubject="SEO Enquiry - Amit Ola"
          />
        </div>

        {/* What Is Included */}
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
            {deliverables.map((item, idx) => (
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

          {/* Ethics Reassurance Notice */}
          <div className="p-6 bg-blue-50/70 border border-blue-200/80 rounded-xl flex items-start gap-4 text-xs text-slate-700 mb-14">
            <ShieldAlert className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="uppercase tracking-wider text-slate-900 font-bold block">
                Transparent Ranking Policy:
              </span>
              <p className="text-slate-600 leading-relaxed">
                I do not make misleading claims of guaranteed #1 rankings or instant overnight traffic. Search engines reward technical precision, content relevance, and domain authority. My work strictly implements proven white-hat optimization practices aligned with Google Search Essentials.
              </p>
            </div>
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
          title="Discuss Your SEO Initiative"
          subtitle="Share your website URL and target search queries. I will examine your site's crawl indexation and identify quick-win ranking opportunities."
          serviceContext="SEO"
          whatsappMessage="Hi Amit, I want to discuss SEO services for my business."
          emailSubject="SEO Enquiry - Amit Ola"
        />
      </div>

      <ServiceActionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName="Search Engine Optimization (SEO)"
        price="Starting from ₹9,000"
      />
    </div>
  );
}
