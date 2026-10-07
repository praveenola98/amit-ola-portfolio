import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/common/SEOHead';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import ContactActionBlock from '../../components/common/ContactActionBlock';
import ServiceActionModal from '../../components/common/ServiceActionModal';

export default function EcommerceServicePage() {
  const [modalOpen, setModalOpen] = useState(false);

  const deliverables = [
    {
      title: 'Full E-commerce Account Operations',
      desc: 'Day-to-day oversight of marketplace accounts (Amazon, Flipkart, Shopify) protecting account health metrics, buyer feedback, and order fulfillment SLAs.',
    },
    {
      title: 'Product Listing Creation & Copywriting',
      desc: 'Writing benefit-driven, high-converting product titles, bullet points, and description sections that overcome customer hesitation.',
    },
    {
      title: 'Catalog Optimization & Category Mapping',
      desc: 'Resolving listing errors, categorizing variations accurately, and structuring inventory taxonomy to maximize organic search discovery.',
    },
    {
      title: 'Storefront Optimization & Conversion Design',
      desc: 'Optimizing navigation pathways, featured collection banners, trust badges, and checkout flow to minimize cart abandonment.',
    },
    {
      title: 'Basic E-commerce SEO & Keyword Indexation',
      desc: 'Targeting backend search terms, search query volume, and keyword-rich attribute indexing within marketplace search algorithms.',
    },
    {
      title: 'Performance Monitoring & Gross Sales Audits',
      desc: 'Weekly tracking of unit sales velocity, buy-box percentages, conversion rates, and promotional return-on-investment.',
    },
  ];

  const faqs = [
    {
      q: 'Which e-commerce platforms do you support?',
      a: 'I manage D2C standalone Shopify and WooCommerce storefronts as well as Indian and global marketplace accounts including Amazon and Flipkart seller accounts.',
    },
    {
      q: 'What is the starting price for E-commerce management?',
      a: 'Services start from ₹15,000 per month or per catalog sprint, depending on the number of active SKUs and channel complexity.',
    },
    {
      q: 'Do you also handle paid ads for e-commerce products?',
      a: 'Yes. E-commerce sponsored ads and Meta dynamic product ads (DPA) can be paired with account management in our Business Growth and Full Digital packages.',
    },
    {
      q: 'How do you safeguard account health?',
      a: 'By proactively monitoring late dispatch rates, cancellation metrics, negative review spikes, and listing suppression notices, ensuring uninterrupted seller privileges.',
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white text-slate-900">
      <SEOHead
        title="E-commerce Account Management | Amit Ola"
        description="Strategic e-commerce management and marketplace catalog optimization by Amit Ola starting from ₹15,000. Product listings, store optimization, and sales velocity."
        canonicalPath="/services/ecommerce-management"
        breadcrumbs={[
          { name: 'Services', url: '/services' },
          { name: 'E-commerce Management', url: '/services/ecommerce-management' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Breadcrumbs
          items={[
            { name: 'Services', url: '/services' },
            { name: 'E-commerce Account Management', url: '/services/ecommerce-management' },
          ]}
        />

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
            E-Commerce Growth &amp; Catalog Operations
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            E-commerce operations <br />
            <span className="text-blue-600">
              that scale real sales velocity.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
            Managing an online store requires relentless catalog hygiene, search discovery, and inventory alignment.
            I optimize your product listings and store operations so your products get discovered and purchased.
          </p>

          <div className="flex flex-wrap items-baseline gap-6 mb-8 bg-slate-50 border border-slate-200 rounded-xl px-6 py-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Investment Tier:
            </span>
            <span className="text-2xl font-extrabold font-mono text-slate-900 tabular-nums">
              Starting from ₹15,000
            </span>
            <span className="text-xs text-slate-500">
              Shopify, Amazon &amp; marketplace store operations
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-colors shadow-xs"
            >
              Discuss My Store
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
            serviceContext="E-commerce Account Management"
            whatsappMessage="Hi Amit, I want to discuss E-commerce Account Management."
            emailSubject="E-commerce Enquiry - Amit Ola"
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
          title="Discuss Your Store Operations"
          subtitle="Send me your store link or marketplace seller ID. I will review listing quality, backend terms, and identify quick revenue gains."
          serviceContext="E-commerce Account Management"
          whatsappMessage="Hi Amit, I want to discuss E-commerce Account Management."
          emailSubject="E-commerce Enquiry - Amit Ola"
        />
      </div>

      <ServiceActionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName="E-commerce Account Management"
        price="Starting from ₹15,000"
      />
    </div>
  );
}
