import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Calculator,
} from 'lucide-react';

import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ContactActionBlock from '../components/common/ContactActionBlock';
import ServicesInteractiveList from '../components/ServicesInteractiveList';
import ServiceActionModal from '../components/common/ServiceActionModal';

import {
  MAIN_SERVICES,
  ADDITIONAL_SERVICES,
} from '../data/portfolioData';

export default function ServicesPage() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    serviceName: string;
    price?: number | string;
    isPackage?: boolean;
  }>({
    isOpen: false,
    serviceName: '',
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([
    'seo',
    'meta-ads',
  ]);

  const [billingCycle, setBillingCycle] = useState<
    'monthly' | 'one-time'
  >('monthly');

  const allServicesList = [
    ...MAIN_SERVICES.map(function (service) {
      return {
        id: service.id,
        name: service.name,
        price: service.startingPrice,
      };
    }),

    ...ADDITIONAL_SERVICES.map(function (service) {
      return {
        id: service.id,
        name: service.name,
        price: service.startingPrice,
      };
    }),
  ];

  function calculateTotal() {
    const rawTotal = selectedServices.reduce(function (sum, id) {
      const match = allServicesList.find(function (service) {
        return service.id === id;
      });

      return sum + (match ? match.price : 0);
    }, 0);

    return selectedServices.length >= 3
      ? Math.round(rawTotal * 0.9)
      : rawTotal;
  }

  const currentTotal = calculateTotal();

  function openServiceModal(
    serviceName: string,
    price?: number | string,
    isPackage = false
  ) {
    setModalState({
      isOpen: true,
      serviceName,
      price,
      isPackage,
    });
  }

  function closeServiceModal() {
    setModalState({
      ...modalState,
      isOpen: false,
    });
  }

  function toggleService(serviceId: string) {
    setSelectedServices(function (previous) {
      if (previous.includes(serviceId)) {
        return previous.filter(function (id) {
          return id !== serviceId;
        });
      }

      return [...previous, serviceId];
    });
  }

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
      <SEOHead
        title="Digital Marketing & SEO Services | Amit Ola"
        description="Comprehensive digital marketing services by Amit Ola. Transparent pricing on SEO, web design, Meta Ads, social media management, and e-commerce."
        canonicalPath="/services"
        breadcrumbs={[
          {
            name: 'Services',
            url: '/services',
          },
        ]}
      />

      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-60
          top-0
          h-[36rem]
          w-[36rem]
          rounded-full
          bg-blue-200/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-60
          top-[25%]
          h-[40rem]
          w-[40rem]
          rounded-full
          bg-violet-200/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          left-[30%]
          h-96
          w-96
          rounded-full
          bg-indigo-100/30
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">

        {/* =====================================================
            BREADCRUMBS
        ====================================================== */}

        <div className="mb-10">
          <Breadcrumbs
            items={[
              {
                name: 'Services & Pricing',
                url: '/services',
              },
            ]}
          />
        </div>

        {/* =====================================================
            HERO
        ====================================================== */}

        <div className="mb-16 max-w-4xl">

          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-100/80
              bg-blue-50/65
              px-4
              py-2
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.14em]
              text-blue-600
              shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(59,130,246,0.07),0_6px_15px_rgba(59,130,246,0.05)]
              backdrop-blur-xl
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-blue-500
                shadow-[0_0_8px_rgba(59,130,246,0.35)]
              "
            />

            Services &amp; Transparent Rates
          </div>

          <h1
            className="
              text-4xl
              font-extrabold
              leading-[1.05]
              tracking-[-0.045em]
              text-slate-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            Digital marketing services
            <br />

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
              with clear commercial outcomes.
            </span>
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-slate-500
              sm:text-lg
            "
          >
            Whether you need a standalone high-impact sprint or an
            end-to-end multi-channel growth partner, all services are
            priced transparently with defined deliverables.
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">

            <Link
              to="/growth-packages"
              className="
                inline-flex
                items-center
                gap-2
                rounded-[1rem]
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                px-5
                py-3.5
                text-sm
                font-extrabold
                text-white
                shadow-[0_12px_28px_rgba(37,99,235,0.20)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_35px_rgba(37,99,235,0.28)]
              "
            >
              View Monthly Growth Packages
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                gap-2
                rounded-[1rem]
                border
                border-white/80
                bg-white/50
                px-5
                py-3.5
                text-sm
                font-extrabold
                text-slate-700
                shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.07),0_10px_25px_rgba(100,116,139,0.06)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/75
                hover:text-blue-600
              "
            >
              Schedule Free Strategy Call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* =====================================================
            05 MAIN DISCIPLINES
        ====================================================== */}

        <section className="mb-16">

          {/* Section Header */}
          <div
            className="
              mb-8
              flex
              flex-wrap
              items-center
              justify-between
              gap-4
              rounded-[1.5rem]
              border
              border-white/80
              bg-white/40
              px-5
              py-4
              shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.06),0_12px_30px_rgba(100,116,139,0.06)]
              backdrop-blur-xl
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.13em]
                text-blue-600
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-blue-500
                  shadow-[0_0_8px_rgba(59,130,246,0.35)]
                "
              />

              Core Capabilities &amp; Pricing
            </div>

            <div
              className="
                rounded-full
                border
                border-white/70
                bg-white/45
                px-3
                py-1.5
                text-[10px]
                font-bold
                text-slate-400
                shadow-[inset_1px_1px_3px_rgba(255,255,255,0.95)]
              "
            >
              Hover to inspect deliverables
            </div>
          </div>

          <ServicesInteractiveList
            onSelectService={function (name, price) {
              openServiceModal(name, price, false);
            }}
          />
        </section>

        {/* =====================================================
            06 SPRINT SERVICES
        ====================================================== */}

        <section className="mb-16">

          <div
            className="
              mb-8
              flex
              flex-wrap
              items-center
              justify-between
              gap-4
              rounded-[1.5rem]
              border
              border-white/80
              bg-white/40
              px-5
              py-4
              shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.06),0_12px_30px_rgba(100,116,139,0.06)]
              backdrop-blur-xl
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.13em]
                text-blue-600
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-indigo-500
                  shadow-[0_0_8px_rgba(99,102,241,0.35)]
                "
              />

              Targeted Audits &amp; Sprints
            </div>

            <div
              className="
                rounded-full
                border
                border-white/70
                bg-white/45
                px-3
                py-1.5
                text-[10px]
                font-bold
                text-slate-400
                shadow-[inset_1px_1px_3px_rgba(255,255,255,0.95)]
              "
            >
              3–7 working day turnaround
            </div>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {ADDITIONAL_SERVICES.map(function (item, idx) {
              return (
                <div
                  key={item.id}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    justify-between
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-white/80
                    bg-white/45
                    p-6
                    shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.08),0_18px_40px_rgba(100,116,139,0.07)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/60
                    hover:shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.10),0_25px_50px_rgba(100,116,139,0.12)]
                  "
                >
                  {/* Top glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-blue-100/40
                      blur-2xl
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10">

                    <div className="mb-4 flex items-center justify-between gap-4">

                      <span
                        className="
                          rounded-full
                          bg-blue-50/70
                          px-3
                          py-1.5
                          text-[9px]
                          font-extrabold
                          uppercase
                          tracking-[0.08em]
                          text-blue-600
                          shadow-[inset_1px_1px_3px_rgba(255,255,255,0.95)]
                        "
                      >
                        Sprint 0{idx + 1}
                      </span>

                      <span
                        className="
                          rounded-full
                          border
                          border-white/80
                          bg-slate-50/70
                          px-3
                          py-1.5
                          font-mono
                          text-xs
                          font-extrabold
                          tabular-nums
                          text-slate-800
                          shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(148,163,184,0.06)]
                        "
                      >
                        ₹{item.startingPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <h3
                      className="
                        mb-2
                        text-lg
                        font-extrabold
                        tracking-[-0.02em]
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover:text-blue-600
                      "
                    >
                      {item.name}
                    </h3>

                    <p
                      className="
                        mb-6
                        text-xs
                        leading-relaxed
                        text-slate-500
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      justify-between
                      gap-4
                      border-t
                      border-white/80
                      pt-4
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.06em]
                        text-slate-400
                      "
                    >
                      {item.turnaround}
                    </span>

                    <button
                      type="button"
                      onClick={function () {
                        openServiceModal(
                          item.name,
                          item.startingPrice,
                          false
                        );
                      }}
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-blue-100/80
                        bg-blue-50/60
                        px-3.5
                        py-2
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.05em]
                        text-blue-600
                        shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(59,130,246,0.05)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-blue-100/70
                      "
                    >
                      Get Sprint
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            CUSTOM SCOPE CALCULATOR
        ====================================================== */}

        <section className="mb-16">

          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/80
              bg-white/45
              p-6
              shadow-[inset_3px_3px_9px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.10),0_24px_55px_rgba(100,116,139,0.10)]
              backdrop-blur-xl
              sm:p-10
            "
          >
            {/* Calculator glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-28
                -top-28
                h-72
                w-72
                rounded-full
                bg-blue-200/20
                blur-3xl
              "
            />

            {/* Calculator Header */}
            <div
              className="
                relative
                z-10
                mb-8
                flex
                flex-wrap
                items-center
                justify-between
                gap-5
                border-b
                border-white/80
                pb-6
              "
            >
              <div>

                <div
                  className="
                    mb-2
                    inline-flex
                    items-center
                    gap-2
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.12em]
                    text-blue-600
                  "
                >
                  <Calculator className="h-3.5 w-3.5" />
                  Custom Bundle Estimator
                </div>

                <h3
                  className="
                    text-2xl
                    font-extrabold
                    tracking-[-0.035em]
                    text-slate-900
                    sm:text-3xl
                  "
                >
                  Configure Your Growth Stack
                </h3>
              </div>

              {/* Billing Toggle */}
              <div
                className="
                  flex
                  items-center
                  rounded-[1rem]
                  border
                  border-white/80
                  bg-slate-100/60
                  p-1
                  shadow-[inset_2px_2px_5px_rgba(148,163,184,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.95)]
                "
              >
                <button
                  type="button"
                  onClick={function () {
                    setBillingCycle('monthly');
                  }}
                  className={`
                    rounded-[0.75rem]
                    px-3.5
                    py-2
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.04em]
                    transition-all
                    duration-300
                    ${
                      billingCycle === 'monthly'
                        ? `
                          bg-gradient-to-r
                          from-blue-600
                          to-indigo-600
                          text-white
                          shadow-[0_6px_15px_rgba(37,99,235,0.18)]
                        `
                        : `
                          text-slate-500
                          hover:text-slate-900
                        `
                    }
                  `}
                >
                  Monthly Retainer
                </button>

                <button
                  type="button"
                  onClick={function () {
                    setBillingCycle('one-time');
                  }}
                  className={`
                    rounded-[0.75rem]
                    px-3.5
                    py-2
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.04em]
                    transition-all
                    duration-300
                    ${
                      billingCycle === 'one-time'
                        ? `
                          bg-gradient-to-r
                          from-blue-600
                          to-indigo-600
                          text-white
                          shadow-[0_6px_15px_rgba(37,99,235,0.18)]
                        `
                        : `
                          text-slate-500
                          hover:text-slate-900
                        `
                    }
                  `}
                >
                  One-Time Sprint
                </button>
              </div>
            </div>

            {/* =================================================
                SERVICE SELECTOR
            ================================================== */}

            <div
              className="
                relative
                z-10
                mb-8
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
                md:grid-cols-3
              "
            >
              {allServicesList.map(function (service) {
                const isSelected = selectedServices.includes(
                  service.id
                );

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={function () {
                      toggleService(service.id);
                    }}
                    className={`
                      flex
                      items-center
                      justify-between
                      gap-3
                      rounded-[1rem]
                      border
                      p-3.5
                      text-left
                      transition-all
                      duration-300
                      ${
                        isSelected
                          ? `
                            border-blue-200/90
                            bg-blue-50/70
                            text-slate-900
                            shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(59,130,246,0.06),0_8px_18px_rgba(59,130,246,0.07)]
                          `
                          : `
                            border-white/80
                            bg-white/45
                            text-slate-600
                            shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.06)]
                            hover:-translate-y-0.5
                            hover:bg-white/70
                          `
                      }
                    `}
                  >
                    <span className="text-xs font-bold">
                      {service.name}
                    </span>

                    <span
                      className="
                        shrink-0
                        font-mono
                        text-xs
                        font-extrabold
                        tabular-nums
                        text-blue-600
                      "
                    >
                      ₹{service.price.toLocaleString('en-IN')}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* =================================================
                TOTAL SUMMARY
            ================================================== */}

            <div
              className="
                relative
                z-10
                flex
                flex-col
                items-center
                justify-between
                gap-6
                rounded-[1.5rem]
                border
                border-white/80
                bg-slate-50/60
                p-6
                shadow-[inset_3px_3px_7px_rgba(255,255,255,0.95),inset_-3px_-3px_7px_rgba(148,163,184,0.08)]
                sm:flex-row
              "
            >
              <div>

                <div
                  className="
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.1em]
                    text-slate-400
                  "
                >
                  Estimated Investment
                </div>

                <div
                  className="
                    mt-1
                    font-mono
                    text-3xl
                    font-extrabold
                    tracking-[-0.04em]
                    text-slate-900
                  "
                >
                  ₹{currentTotal.toLocaleString('en-IN')}

                  <span
                    className="
                      ml-1
                      font-sans
                      text-xs
                      font-medium
                      tracking-normal
                      text-slate-400
                    "
                  >
                    {billingCycle === 'monthly'
                      ? '/ month'
                      : ' one-time'}
                  </span>
                </div>

                {selectedServices.length >= 3 && (
                  <div
                    className="
                      mt-2
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-emerald-50/80
                      px-3
                      py-1.5
                      text-[10px]
                      font-extrabold
                      text-emerald-600
                      shadow-[inset_1px_1px_3px_rgba(255,255,255,0.95)]
                    "
                  >
                    <Check className="h-3 w-3" />
                    10% multi-service discount applied automatically
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={function () {
                  openServiceModal(
                    `Custom Growth Stack (${selectedServices.length} disciplines)`,
                    currentTotal,
                    true
                  );
                }}
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-[1rem]
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600
                  px-6
                  py-3.5
                  text-xs
                  font-extrabold
                  text-white
                  shadow-[0_12px_25px_rgba(37,99,235,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_35px_rgba(37,99,235,0.28)]
                  sm:w-auto
                "
              >
                Inquire With This Configuration
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            GLOBAL ACTION
        ====================================================== */}

        <ContactActionBlock
          title="Discuss Your Project With Amit"
          subtitle="Direct consultation with no account managers or agency bureaucracy."
          serviceContext="Services Inquiry"
        />
      </div>

      {/* =====================================================
          SERVICE ACTION MODAL
      ====================================================== */}

      <ServiceActionModal
        isOpen={modalState.isOpen}
        onClose={closeServiceModal}
        serviceName={modalState.serviceName}
        price={modalState.price}
        isPackage={modalState.isPackage}
      />
    </div>
  );
}