import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/common/SEOHead';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import ContactActionBlock from '../../components/common/ContactActionBlock';
import ServiceActionModal from '../../components/common/ServiceActionModal';

export default function SocialMediaServicePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const deliverables = [
    {
      title: 'Editorial Content Planning',
      desc: 'Structured monthly calendar mapping educational carousels, proof breakdowns, problem-solution posts, and brand narrative pillars.',
    },
    {
      title: 'Channel Content Strategy Blueprint',
      desc: 'Defining tone of voice, visual identity guidelines, competitor benchmarks, and engagement hooks for Instagram, LinkedIn, and Facebook.',
    },
    {
      title: 'Posting & Schedule Management',
      desc: 'End-to-end publishing, high-resolution formatting, hashtag strategy, and optimal time slot scheduling so your channels remain active.',
    },
    {
      title: 'Profile Bio & Funnel Optimization',
      desc: 'Transforming dead profile pages into lead funnels with high-clarity positioning bios, strategic highlights, and WhatsApp CTA links.',
    },
    {
      title: 'Community Engagement & Inbound Handling',
      desc: 'Responding to inbound comment queries, community interactions, and routing high-value prospects directly to your WhatsApp or sales team.',
    },
    {
      title: 'Monthly Performance Analytics',
      desc: 'Clear monthly reviews analyzing reach growth, top-performing hooks, saves/shares ratios, and profile visits without vanity noise.',
    },
  ];

  const faqs = [
    {
      q: 'Which social platforms do you manage?',
      a: 'I specialize in Instagram, Facebook business pages, and professional LinkedIn company profiles, tailoring format and tone specifically to each platform.',
    },
    {
      q: 'Does this service include graphic design and copy?',
      a: 'Yes. Every post includes custom static or carousel visual creatives and persuasive, value-packed captions with structured call-to-actions.',
    },
    {
      q: 'What is the starting price for Social Media Management?',
      a: 'Management starts from ₹11,000 per month for standard 12-to-16 post monthly distribution. Custom schedules can be configured upon request.',
    },
    {
      q: 'Do you guarantee viral posts or follower counts?',
      a: 'No. Follower count alone is a vanity metric. My focus is building an authoritative, credible digital presence that impresses prospective buyers when they research your brand.',
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white text-slate-900">
      <SEOHead
        title="Social Media Management | Amit Ola – Social Strategist"
        description="Professional social media management by Amit Ola starting from ₹11,000/month. Content planning, copywriting, page optimization, and community engagement."
        canonicalPath="/services/social-media-management"
        breadcrumbs={[
          { name: 'Services', url: '/services' },
          { name: 'Social Media Management', url: '/services/social-media-management' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Breadcrumbs
          items={[
            { name: 'Services', url: '/services' },
            { name: 'Social Media Management', url: '/services/social-media-management' },
          ]}
        />

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
            Organic Social Distribution &amp; Brand Authority
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Social media that builds <br />
            <span className="text-blue-600">
              genuine commercial authority.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
            When potential clients research your company, your social presence is their immediate trust test.
            I produce consistent, valuable, brand-aligned content that positions you as the obvious industry authority.
          </p>

          <div className="flex flex-wrap items-baseline gap-6 mb-8 bg-slate-50 border border-slate-200 rounded-xl px-6 py-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Monthly Tier:
            </span>
            <span className="text-2xl font-extrabold font-mono text-slate-900 tabular-nums">
              Starting from ₹11,000 / month
            </span>
            <span className="text-xs text-slate-500">
              Content calendars, carousels &amp; direct message routing
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-xs"
            >
              Discuss Social Media
            </button>
            <Link
              to="/growth-packages"
              className="px-6 py-3.5 border border-slate-300 hover:bg-slate-50 text-slate-800 text-sm font-semibold rounded-lg transition-colors"
            >
              Combine With SEO &amp; Ads
            </Link>
          </div>

          <ContactActionBlock
            compact
            serviceContext="Social Media Management"
            whatsappMessage="Hi Amit, I want to discuss Social Media Management."
            emailSubject="Social Media Enquiry - Amit Ola"
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
          title="Discuss Your Social Media Strategy"
          subtitle="Share your existing social handles. I will review your profile, engagement rate, and recommend an actionable monthly content calendar."
          serviceContext="Social Media Management"
          whatsappMessage="Hi Amit, I want to discuss Social Media Management."
          emailSubject="Social Media Enquiry - Amit Ola"
        />
      </div>

      <ServiceActionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName="Social Media Management"
        price="Starting from ₹11,000/month"
      />
    </div>
  );
}
