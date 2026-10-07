import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/common/SEOHead';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import ContactActionBlock from '../../components/common/ContactActionBlock';
import ServiceActionModal from '../../components/common/ServiceActionModal';

export default function MetaAdsServicePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const deliverables = [
    {
      title: 'Campaign & Pixel Architecture',
      desc: 'Configuring Meta Business Manager, dataset event tracking, Conversions API (CAPI), and custom domain verification for clean attribution.',
    },
    {
      title: 'Audience Research & Persona Mapping',
      desc: 'Developing cold prospect targeting tiers, competitor customer overlap audiences, and custom lookalike layers based on actual buyer behaviors.',
    },
    {
      title: 'Structured Full-Funnel Campaign Layout',
      desc: 'Separating prospecting (TOF), consideration (MOF), and high-intent retargeting (BOF) to prevent ad fatigue and wasted impressions.',
    },
    {
      title: 'Direct-Response Creative & Hook Direction',
      desc: 'Crafting persuasive ad angles, pain-point headlines, and visual briefs designed to stop the scroll and provoke high-intent clicks.',
    },
    {
      title: 'Daily Campaign Monitoring & Budget Allocation',
      desc: 'Constant monitoring of frequency, CPM fluctuations, cost-per-click, and lead velocity, reallocating budget toward winning ad sets.',
    },
    {
      title: 'Conversion Optimization & Performance Reporting',
      desc: 'Bi-weekly and monthly reporting breaking down actual cost-per-acquisition (CPA) and ROAS, eliminating underperforming creative angles.',
    },
  ];

  const faqs = [
    {
      q: 'Do you guarantee a specific number of leads or sales?',
      a: 'No. Direct-response advertising performance depends heavily on the strength of your core offer, pricing, product-market fit, and sales follow-up speed. I guarantee disciplined media buying, tested ad creative angles, and rigorous audience targeting designed to minimize acquisition costs.',
    },
    {
      q: 'Does the ₹12,000 service fee include the Meta ad spend budget?',
      a: 'No. The starting fee of ₹12,000 covers professional campaign management, strategy, creative copywriting, and optimization. Your ad spend is paid directly to Meta via your own Business Manager ad account.',
    },
    {
      q: 'What is the recommended minimum monthly ad spend?',
      a: 'For local service businesses, a minimum ad spend of ₹15,000 to ₹30,000 per month is ideal to collect statistically significant conversion signals. For D2C e-commerce, ₹30,000+ is recommended.',
    },
    {
      q: 'What tracking methods do you install?',
      a: 'I configure both browser Meta Pixel events and server-side Conversions API (CAPI) using Google Tag Manager to ensure resilient attribution even under modern iOS tracking constraints.',
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white text-slate-900">
      <SEOHead
        title="Meta Ads Management | Amit Ola – Performance Marketing"
        description="Targeted Facebook and Instagram advertising management by Amit Ola starting from ₹12,000. Audience research, direct-response copy, CAPI tracking, and CPA reduction."
        canonicalPath="/services/meta-ads"
        breadcrumbs={[
          { name: 'Services', url: '/services' },
          { name: 'Meta Ads', url: '/services/meta-ads' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Breadcrumbs
          items={[
            { name: 'Services', url: '/services' },
            { name: 'Meta Ads Management', url: '/services/meta-ads' },
          ]}
        />

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
            Performance Marketing · Facebook &amp; Instagram Ads
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Targeted Meta ads that <br />
            <span className="text-blue-600">
              acquire qualified commercial buyers.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
            Stop burning budget on generic boosted posts. I engineer structured paid advertising funnels
            that place compelling direct-response offers in front of prospects ready to initiate a conversation.
          </p>

          <div className="flex flex-wrap items-baseline gap-6 mb-8 bg-slate-50 border border-slate-200 rounded-xl px-6 py-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Management Tier:
            </span>
            <span className="text-2xl font-extrabold font-mono text-slate-900 tabular-nums">
              Starting from ₹12,000
            </span>
            <span className="text-xs text-slate-500">
              Creative strategy, testing matrix &amp; CAPI tracking setup
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-xs"
            >
              Discuss Meta Ads
            </button>
            <Link
              to="/growth-packages"
              className="px-6 py-3.5 border border-slate-300 hover:bg-slate-50 text-slate-800 text-sm font-semibold rounded-lg transition-colors"
            >
              Explore Monthly Retainers
            </Link>
          </div>

          <ContactActionBlock
            compact
            serviceContext="Meta Ads"
            whatsappMessage="Hi Amit, I want to discuss Meta Ads for my business."
            emailSubject="Meta Ads Enquiry - Amit Ola"
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

          {/* Ethics Reassurance Notice */}
          <div className="p-6 bg-blue-50/70 border border-blue-200/80 rounded-xl flex items-start gap-4 text-xs text-slate-700 mb-14">
            <ShieldAlert className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="uppercase tracking-wider text-slate-900 font-bold block">
                Disciplined Media Buying Statement:
              </span>
              <p className="text-slate-600 leading-relaxed">
                I do not promise fabricated vanity figures or overnight sales guarantees. Ad results are governed by offer clarity, competitor density, creative resonance, and landing page conversion rates. My commitment is disciplined budget stewardship, continuous hook testing, and data-driven audience refinement.
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
          title="Discuss Your Meta Ads Campaign"
          subtitle="Share your target audience, current monthly ad spend, and offer details. I will evaluate your ad account and propose a structured funnel."
          serviceContext="Meta Ads"
          whatsappMessage="Hi Amit, I want to discuss Meta Ads for my business."
          emailSubject="Meta Ads Enquiry - Amit Ola"
        />
      </div>

      <ServiceActionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName="Meta Ads (Facebook & Instagram)"
        price="Starting from ₹12,000"
      />
    </div>
  );
}
