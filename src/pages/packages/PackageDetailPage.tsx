import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Check,
  X,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
} from 'lucide-react';

import SEOHead from '../../components/common/SEOHead';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import ContactActionBlock from '../../components/common/ContactActionBlock';
import ServiceActionModal from '../../components/common/ServiceActionModal';

import { GROWTH_PACKAGES } from '../../data/portfolioData';

export default function PackageDetailPage() {
  const { packageId } = useParams<{ packageId: string }>();
  const [modalOpen, setModalOpen] = useState(false);

  // ============================================================
  // PACKAGE DETAILS
  // ============================================================

  const packageDetails: Record<
    string,
    {
      whoItsFor: string;
      notIncluded: string[];
      process: string[];
      faqs: { q: string; a: string }[];
    }
  > = {
    'starter-growth': {
      whoItsFor:
        'Local businesses, service professionals, and emerging brands who need a solid organic search foundation and a credible social media presence without high upfront overhead.',

      notIncluded: [
        'Paid Meta advertising management (available in Growth tier)',
        'E-commerce multi-marketplace catalog optimization',
        'Custom web development or full site redesigns',
      ],

      process: [
        'Week 1: Baseline audit of Google Business Profile & website on-page SEO',
        'Week 2: Keyword cluster mapping and social media editorial strategy setup',
        'Week 3: On-page tags updates and publication of core branded social assets',
        'Week 4: Performance audit and monthly progress synchronization report',
      ],

      faqs: [
        {
          q: 'Can I upgrade to paid ads later?',
          a: 'Yes, you can transition smoothly to the Growth package anytime as your organic baseline solidifies.',
        },
        {
          q: 'Is there a long-term contract?',
          a: 'No. All packages operate on a flexible month-to-month agreement.',
        },
      ],
    },

    growth: {
      whoItsFor:
        'Growing companies and service businesses that want to pair organic Google rankings with direct-response customer acquisition on Facebook & Instagram.',

      notIncluded: [
        'Direct advertising ad spend (paid directly to Meta)',
        'Full e-commerce inventory logistics management',
      ],

      process: [
        'Week 1: Technical SEO fixes, Meta Business Manager setup & Pixel/CAPI install',
        'Week 2: Keyword intent mapping, audience research & direct-response ad creative drafting',
        'Week 3: Campaign launch, active hook testing & initial search engine re-indexing',
        'Week 4: CPA optimization, wasted spend elimination & monthly executive review',
      ],

      faqs: [
        {
          q: 'What monthly ad spend is recommended for this tier?',
          a: 'Typically between ₹15,000 to ₹60,000/month in Meta ad spend depending on your local or national coverage.',
        },
        {
          q: 'Who pays for the ad spend?',
          a: 'You pay Meta directly through your Business Manager. My retainer covers complete campaign architecture, testing, and optimization.',
        },
      ],
    },

    'business-growth': {
      whoItsFor:
        'Established brands and e-commerce stores looking for unified organic rankings, multi-channel performance advertising, and dedicated web conversion rate testing.',

      notIncluded: [
        'Third-party software subscription licenses (e.g. Shopify app fees, Klaviyo, Semrush)',
        'Direct advertising budget paid to Meta or Google',
      ],

      process: [
        'Week 1: Full-funnel technical search audit, tracking telemetry check & catalog review',
        'Week 2: Conversion rate audits on core product/service pages and ad creative batch production',
        'Week 3: Multi-ad-set scaling, retargeting funnel deployment, and ranking keyword expansion',
        'Week 4: Executive ROAS/CPA review, margin analysis & next-month roadmap synchronization',
      ],

      faqs: [
        {
          q: 'Does this cover both lead generation and e-commerce?',
          a: 'Yes, this package is designed specifically for businesses with complex catalogs or high-value customer acquisition needs.',
        },
        {
          q: 'How frequently do we communicate?',
          a: 'You receive bi-weekly strategy updates and continuous direct WhatsApp access for rapid approvals.',
        },
      ],
    },

    'full-digital': {
      whoItsFor:
        'Ambitious businesses, D2C brands, and multi-service organizations seeking an outsourced digital growth department without agency overhead.',

      notIncluded: [
        'External third-party platform subscription fees or ad spend budgets',
      ],

      process: [
        'Full-scale ecosystem audit across SEO architecture, paid media funnels, marketplace store operations, and web usability',
        'Dedicated monthly sprint planning covering all channels in sync',
        'Multi-campaign ad management, content publishing, and catalog optimization',
        'Weekly executive performance reports and ongoing priority execution',
      ],

      faqs: [
        {
          q: 'How is this different from hiring an internal team?',
          a: 'You get experienced specialist execution across SEO, paid ads, and web strategy at a fraction of the cost of hiring 3-4 separate in-house salaries.',
        },
        {
          q: 'Can components be customized?',
          a: 'Yes. Every deliverable in the Full Digital package can be re-weighted based on what moves your company revenue fastest.',
        },
      ],
    },
  };

  // ============================================================
  // CURRENT PACKAGE
  // ============================================================

  const currentPkg = GROWTH_PACKAGES.find(function (pkg) {
    return pkg.id === packageId;
  });

  if (!currentPkg) {
    return <Navigate to="/growth-packages" replace />;
  }

  const extended =
    packageDetails[currentPkg.id] || packageDetails['growth'];

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-[#f8f9ff]
        via-[#f3f5fb]
        to-[#eef0f8]
        pb-20
        pt-24
        text-slate-900
      "
    >
      {/* ========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-56
          top-20
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-blue-200/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-56
          top-[25%]
          h-[36rem]
          w-[36rem]
          rounded-full
          bg-violet-200/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[15%]
          left-[35%]
          h-80
          w-80
          rounded-full
          bg-indigo-100/25
          blur-3xl
        "
      />

      <SEOHead
        title={`${currentPkg.name} Package (₹${currentPkg.price.toLocaleString(
          'en-IN'
        )}/mo) | Amit Ola`}
        description={`Complete breakdown of the ${currentPkg.name} digital marketing retainer by Amit Ola. Deliverables, process, pricing, and expectations.`}
        canonicalPath={`/packages/${currentPkg.id}`}
        breadcrumbs={[
          {
            name: 'Growth Packages',
            url: '/growth-packages',
          },
          {
            name: currentPkg.name,
            url: `/packages/${currentPkg.id}`,
          },
        ]}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">

        {/* ========================================================
            BREADCRUMBS
        ========================================================= */}

        <div className="mb-10">
          <Breadcrumbs
            items={[
              {
                name: 'Growth Packages',
                url: '/growth-packages',
              },
              {
                name: currentPkg.name,
                url: `/packages/${currentPkg.id}`,
              },
            ]}
          />
        </div>

        {/* ========================================================
            HERO
        ========================================================= */}

        <div
          className="
            relative
            mb-14
            overflow-hidden
            rounded-[2rem]
            border border-white/80
            bg-white/45
            p-6
            shadow-[inset_3px_3px_9px_rgba(255,255,255,0.95),inset_-4px_-4px_11px_rgba(148,163,184,0.10),0_22px_55px_rgba(100,116,139,0.09)]
            backdrop-blur-xl
            sm:p-10
            lg:p-12
          "
        >
          {/* Hero Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-blue-200/25
              blur-3xl
            "
          />

          <div className="relative z-10 max-w-4xl">

            {/* Eyebrow */}
            <div
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border border-blue-100/80
                bg-blue-50/70
                px-4
                py-2
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.14em]
                text-blue-600
                shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(59,130,246,0.06)]
              "
            >
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Monthly Retainer Blueprint
            </div>

            {/* Heading */}
            <h1
              className="
                text-4xl
                font-extrabold
                leading-[1.05]
                tracking-[-0.04em]
                text-slate-900
                sm:text-5xl
                lg:text-6xl
              "
            >
              {currentPkg.name}{' '}
              <span
                className="
                  bg-gradient-to-r
                  from-blue-600
                  via-indigo-600
                  to-violet-600
                  bg-clip-text
                  text-transparent
                "
              >
                Package.
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="
                mb-7
                mt-5
                max-w-3xl
                text-base
                leading-relaxed
                text-slate-500
                sm:text-lg
              "
            >
              {currentPkg.tagline}
            </p>

            {/* Price + CTA */}
            <div className="mb-8 flex flex-wrap items-center gap-4">

              <div
                className="
                  flex
                  items-baseline
                  gap-2
                  rounded-[1.25rem]
                  border border-white/80
                  bg-slate-50/70
                  px-5
                  py-3.5
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.08),0_8px_20px_rgba(100,116,139,0.06)]
                "
              >
                <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                  Monthly Investment:
                </span>

                <span className="font-mono text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  ₹{currentPkg.price.toLocaleString('en-IN')}
                </span>

                <span className="text-xs font-semibold text-slate-400">
                  /month
                </span>
              </div>

              <button
                onClick={function () {
                  setModalOpen(true);
                }}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-[1.1rem]
                  border border-blue-400/20
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600
                  px-6
                  py-3.5
                  text-sm
                  font-extrabold
                  text-white
                  shadow-[inset_2px_2px_5px_rgba(255,255,255,0.20),inset_-2px_-2px_5px_rgba(30,64,175,0.30),0_12px_25px_rgba(59,130,246,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:from-blue-500
                  hover:to-indigo-500
                "
              >
                <span>Get This Package</span>

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                />
              </button>
            </div>

            {/* Contact */}
            <ContactActionBlock
              compact
              serviceContext={currentPkg.name}
              whatsappMessage={`Hi Amit, I'm interested in the ${currentPkg.name} Package. I'd like to discuss my requirements.`}
              emailSubject={`${currentPkg.name} Package Enquiry - Amit Ola`}
            />
          </div>
        </div>

        {/* ========================================================
            MAIN PACKAGE CONTENT
        ========================================================= */}

        <section className="space-y-14">

          {/* ======================================================
              WHO THIS PACKAGE IS FOR
          ======================================================= */}

          <section>
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-10">

              <div className="lg:col-span-4">
                <div
                  className="
                    inline-flex
                    rounded-full
                    bg-blue-50/70
                    px-3
                    py-1.5
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.12em]
                    text-blue-600
                  "
                >
                  Audience Fit
                </div>

                <h2
                  className="
                    mt-4
                    text-2xl
                    font-extrabold
                    tracking-[-0.03em]
                    text-slate-900
                  "
                >
                  Who This Package Is For
                </h2>
              </div>

              <div
                className="
                  lg:col-span-8
                  rounded-[1.5rem]
                  border border-white/80
                  bg-white/50
                  p-6
                  text-sm
                  leading-relaxed
                  text-slate-600
                  shadow-[inset_3px_3px_7px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.08),0_12px_30px_rgba(100,116,139,0.06)]
                  backdrop-blur-xl
                  sm:p-8
                "
              >
                {extended.whoItsFor}
              </div>
            </div>
          </section>

          {/* ======================================================
              INCLUDED / NOT INCLUDED
          ======================================================= */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* Included */}
            <div
              className="
                rounded-[1.75rem]
                border border-emerald-200/70
                bg-emerald-50/35
                p-6
                shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(16,185,129,0.06),0_16px_35px_rgba(100,116,139,0.06)]
                backdrop-blur-xl
                sm:p-8
              "
            >
              <h3 className="mb-6 flex items-center gap-3 text-lg font-extrabold text-slate-900">

                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-emerald-50
                    text-emerald-600
                    shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(16,185,129,0.08)]
                  "
                >
                  <Check className="h-5 w-5" />
                </span>

                <span>What Is Included in Retainer</span>
              </h3>

              <ul className="space-y-3">
                {currentPkg.deliverables.map(function (item, idx) {
                  return (
                    <li
                      key={idx}
                      className="
                        flex
                        items-start
                        gap-3
                        rounded-xl
                        border border-white/70
                        bg-white/45
                        p-3
                        text-sm
                        leading-relaxed
                        text-slate-600
                        shadow-[inset_1px_1px_4px_rgba(255,255,255,0.9)]
                      "
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Not Included */}
            <div
              className="
                rounded-[1.75rem]
                border border-white/80
                bg-white/45
                p-6
                shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.08),0_16px_35px_rgba(100,116,139,0.06)]
                backdrop-blur-xl
                sm:p-8
              "
            >
              <h3 className="mb-6 flex items-center gap-3 text-lg font-extrabold text-slate-900">

                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-100/80
                    text-slate-400
                    shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.08)]
                  "
                >
                  <X className="h-5 w-5" />
                </span>

                <span>What Is Not Included</span>
              </h3>

              <ul className="space-y-3">
                {extended.notIncluded.map(function (item, idx) {
                  return (
                    <li
                      key={idx}
                      className="
                        flex
                        items-start
                        gap-3
                        rounded-xl
                        border border-white/70
                        bg-slate-50/60
                        p-3
                        text-sm
                        leading-relaxed
                        text-slate-500
                        shadow-[inset_1px_1px_4px_rgba(255,255,255,0.9)]
                      "
                    >
                      <span className="mt-0.5 font-mono text-slate-400">
                        ✕
                      </span>

                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* ======================================================
              EXECUTION PROCESS
          ======================================================= */}

          <div
            className="
              rounded-[2rem]
              border border-white/80
              bg-white/45
              p-6
              shadow-[inset_3px_3px_9px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.09),0_18px_45px_rgba(100,116,139,0.07)]
              backdrop-blur-xl
              sm:p-8
              lg:p-10
            "
          >
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4">

              <div>
                <div
                  className="
                    mb-2
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.13em]
                    text-blue-600
                  "
                >
                  Execution Framework
                </div>

                <h3
                  className="
                    text-xl
                    font-extrabold
                    tracking-[-0.025em]
                    text-slate-900
                    sm:text-2xl
                  "
                >
                  Standard Monthly Execution Workflow
                </h3>
              </div>

              <span
                className="
                  rounded-full
                  border border-white/80
                  bg-slate-50/70
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  text-slate-400
                  shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95)]
                "
              >
                4 Execution Phases
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {extended.process.map(function (step, idx) {
                return (
                  <div
                    key={idx}
                    className="
                      group
                      rounded-[1.25rem]
                      border border-white/80
                      bg-slate-50/65
                      p-5
                      shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.07),0_8px_18px_rgba(100,116,139,0.05)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-white/70
                      hover:shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.08),0_14px_25px_rgba(100,116,139,0.09)]
                    "
                  >
                    <div
                      className="
                        mb-3
                        inline-flex
                        rounded-full
                        bg-blue-50
                        px-3
                        py-1
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.08em]
                        text-blue-600
                      "
                    >
                      Phase 0{idx + 1}
                    </div>

                    <p
                      className="
                        text-xs
                        leading-relaxed
                        text-slate-500
                      "
                    >
                      {step}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ======================================================
              TRANSPARENT EXECUTION STANDARD
          ======================================================= */}

          <div
            className="
              flex
              items-start
              gap-4
              rounded-[1.5rem]
              border border-blue-100/80
              bg-blue-50/50
              p-5
              shadow-[inset_3px_3px_7px_rgba(255,255,255,0.95),inset_-3px_-3px_7px_rgba(59,130,246,0.06),0_12px_28px_rgba(59,130,246,0.05)]
              backdrop-blur-xl
              sm:p-6
            "
          >
            <span
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-white/70
                text-blue-600
                shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.08)]
              "
            >
              <ShieldAlert className="h-5 w-5" />
            </span>

            <div>
              <div
                className="
                  mb-1.5
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.12em]
                  text-slate-800
                "
              >
                Transparent Execution Standard
              </div>

              <p
                className="
                  text-xs
                  leading-relaxed
                  text-slate-500
                  sm:text-sm
                "
              >
                I do not make misleading claims of guaranteed business revenue,
                fixed lead quotas, or algorithm manipulation. All marketing
                operates in competitive market dynamics. I guarantee transparent
                weekly execution, rigorous testing, and direct strategist
                accountability.
              </p>
            </div>
          </div>

          {/* ======================================================
              FAQ
          ======================================================= */}

          <div>
            <div className="mb-7">
              <div
                className="
                  mb-2
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.13em]
                  text-blue-600
                "
              >
                Common Questions
              </div>

              <h3
                className="
                  text-2xl
                  font-extrabold
                  tracking-[-0.03em]
                  text-slate-900
                "
              >
                Package FAQs
              </h3>
            </div>

            <div className="max-w-4xl space-y-4">
              {extended.faqs.map(function (faq, i) {
                return (
                  <div
                    key={i}
                    className="
                      rounded-[1.35rem]
                      border border-white/80
                      bg-white/50
                      p-5
                      shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.08),0_10px_24px_rgba(100,116,139,0.05)]
                      backdrop-blur-xl
                      sm:p-6
                    "
                  >
                    <h4
                      className="
                        mb-2
                        text-sm
                        font-extrabold
                        text-slate-900
                      "
                    >
                      {faq.q}
                    </h4>

                    <p
                      className="
                        text-xs
                        leading-relaxed
                        text-slate-500
                        sm:text-sm
                      "
                    >
                      {faq.a}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            GLOBAL CONTACT
        ========================================================= */}

        <div className="mt-16">
          <ContactActionBlock
            title={`Ready to begin with ${currentPkg.name}?`}
            subtitle="Get in touch directly via WhatsApp, Phone, or Email to review onboarding details and kick off campaign research."
            serviceContext={currentPkg.name}
            whatsappMessage={`Hi Amit, I'm interested in the ${currentPkg.name} Package. I'd like to discuss my requirements.`}
            emailSubject={`${currentPkg.name} Package Enquiry - Amit Ola`}
          />
        </div>
      </div>

      {/* ========================================================
          PACKAGE ACTION MODAL
      ========================================================= */}

      <ServiceActionModal
        isOpen={modalOpen}
        onClose={function () {
          setModalOpen(false);
        }}
        serviceName={currentPkg.name}
        price={currentPkg.price}
        isPackage={true}
      />
    </div>
  );
}