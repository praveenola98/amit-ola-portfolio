import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Plus,
  Calculator,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import { MAIN_SERVICES, ADDITIONAL_SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectServiceForBooking: (
    serviceName: string,
    estimatedPrice?: number,
  ) => void;
}

export default function Services({
  onSelectServiceForBooking,
}: ServicesProps) {
  // Package builder state
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'seo',
    'meta-ads',
  ]);

  const [billingCycle, setBillingCycle] = useState<'monthly' | 'one-time'>(
    'monthly',
  );

  // Toggle service selection in package builder
  const toggleService = function (id: string) {
    setSelectedServices(function (prev) {
      return prev.includes(id)
        ? prev.filter(function (s) {
            return s !== id;
          })
        : [...prev, id];
    });
  };

  // Combine all services for package builder lookup
  const allServicesList = [
    ...MAIN_SERVICES.map(function (s) {
      return {
        id: s.id,
        name: s.name,
        price: s.startingPrice,
        isMain: true,
      };
    }),

    ...ADDITIONAL_SERVICES.map(function (s) {
      return {
        id: s.id,
        name: s.name,
        price: s.startingPrice,
        isMain: false,
      };
    }),
  ];

  // Calculate estimated price
  const calculateTotal = function () {
    const rawTotal = selectedServices.reduce(function (sum, id) {
      const match = allServicesList.find(function (s) {
        return s.id === id;
      });

      return sum + (match ? match.price : 0);
    }, 0);

    // Apply modest bundle incentive for 3+ services
    if (selectedServices.length >= 3) {
      return Math.round(rawTotal * 0.9);
    }

    return rawTotal;
  };

  const currentTotal = calculateTotal();

  const handleBookCustomPackage = function () {
    const names = selectedServices
      .map(function (id) {
        const match = allServicesList.find(function (s) {
          return s.id === id;
        });

        return match?.name;
      })
      .filter(Boolean)
      .join(', ');

    onSelectServiceForBooking(
      `Custom Package: ${names}`,
      currentTotal,
    );
  };

  return (
    <section
      id="services"
      className="
        relative overflow-hidden
        border-b border-white/70
        bg-gradient-to-br
        from-[#f8f9ff]
        via-[#f2f4fb]
        to-[#eef0f8]
        py-24
        sm:py-32
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-48 top-20 h-[30rem] w-[30rem] rounded-full bg-blue-200/25 blur-3xl" />

      <div className="pointer-events-none absolute -right-48 top-[35%] h-[32rem] w-[32rem] rounded-full bg-violet-200/25 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-[35%] h-80 w-80 rounded-full bg-indigo-100/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mb-14 max-w-3xl sm:mb-16">

          <div
            className="
              mb-5 inline-flex items-center gap-2
              rounded-full
              border border-blue-100/80
              bg-blue-50/65
              px-4 py-2
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.14em]
              text-blue-600
              shadow-[inset_1px_1px_4px_rgba(255,255,255,0.9),inset_-1px_-1px_4px_rgba(59,130,246,0.08),0_5px_15px_rgba(59,130,246,0.06)]
              backdrop-blur-xl
            "
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>03. Core Capabilities &amp; Pricing</span>
          </div>

          <h2
            className="
              text-3xl
              font-extrabold
              leading-[1.06]
              tracking-[-0.035em]
              text-slate-900
              sm:text-5xl
            "
          >
            TRANSPARENT VALUE.
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
              NO HIDDEN AGENCY RETAINS.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
            Clear starting pricing with defined deliverables. Every engagement
            is customized to your unit economics and growth phase.
          </p>
        </div>

        {/* =====================================================
            MAIN SERVICES
        ====================================================== */}

        <div className="mb-20 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {MAIN_SERVICES.map(function (service, idx) {
            const isFeatured = idx === 0 || idx === 3;

            return (
              <div
                key={service.id}
                className={`
                  group relative flex flex-col justify-between
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  p-6
                  transition-all duration-300
                  sm:p-7

                  ${
                    isFeatured
                      ? `
                        border-blue-200/70
                        bg-gradient-to-br
                        from-white/80
                        via-blue-50/55
                        to-indigo-50/55
                        shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.10),0_18px_45px_rgba(59,130,246,0.11)]
                      `
                      : `
                        border-white/80
                        bg-white/50
                        shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.10),0_14px_35px_rgba(100,116,139,0.07)]
                      `
                  }

                  hover:-translate-y-1
                  hover:shadow-[inset_3px_3px_9px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.11),0_22px_48px_rgba(100,116,139,0.12)]
                  backdrop-blur-xl
                `}
              >
                {/* Featured glow */}
                {isFeatured && (
                  <div
                    className="
                      pointer-events-none absolute
                      -right-16 -top-16
                      h-40 w-40
                      rounded-full
                      bg-blue-200/30
                      blur-3xl
                    "
                  />
                )}

                <div className="relative z-10">

                  {/* Card Top */}
                  <div className="mb-5 flex items-start justify-between gap-4">

                    <span
                      className="
                        flex h-9 w-9
                        items-center justify-center
                        rounded-xl
                        bg-slate-100/80
                        text-[10px]
                        font-extrabold
                        text-blue-600
                        shadow-[inset_2px_2px_4px_rgba(255,255,255,0.95),inset_-2px_-2px_4px_rgba(148,163,184,0.10)]
                      "
                    >
                      0{idx + 1}
                    </span>

                    <div className="text-right">

                      <div
                        className="
                          mb-1
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.13em]
                          text-slate-400
                        "
                      >
                        Starting from
                      </div>

                      <div
                        className="
                          text-lg
                          font-extrabold
                          tabular-nums
                          text-slate-900
                        "
                      >
                        ₹{service.startingPrice.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {isFeatured && (
                    <div
                      className="
                        mb-4 inline-flex items-center gap-1.5
                        rounded-full
                        border border-blue-100
                        bg-blue-50/70
                        px-2.5 py-1
                        text-[9px]
                        font-extrabold
                        uppercase
                        tracking-[0.12em]
                        text-blue-600
                        shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9)]
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      High Impact
                    </div>
                  )}

                  {/* Service Name */}
                  <h3
                    className="
                      mb-2.5
                      text-xl
                      font-extrabold
                      tracking-[-0.025em]
                      text-slate-900
                    "
                  >
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mb-6
                      text-xs
                      leading-relaxed
                      text-slate-500
                      sm:text-sm
                    "
                  >
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div
                    className="
                      mb-6
                      rounded-2xl
                      border border-white/80
                      bg-slate-50/55
                      p-4
                      shadow-[inset_2px_2px_5px_rgba(255,255,255,0.9),inset_-2px_-2px_5px_rgba(148,163,184,0.08)]
                    "
                  >
                    <div
                      className="
                        mb-3
                        text-[9px]
                        font-extrabold
                        uppercase
                        tracking-[0.13em]
                        text-slate-400
                      "
                    >
                      Included Deliverables
                    </div>

                    <ul className="space-y-2.5">

                      {service.deliverables.map(function (d, i) {
                        return (
                          <li
                            key={i}
                            className="
                              flex items-start gap-2.5
                              text-xs
                              font-medium
                              leading-relaxed
                              text-slate-600
                            "
                          >
                            <span
                              className="
                                mt-0.5
                                flex h-5 w-5
                                shrink-0
                                items-center justify-center
                                rounded-full
                                bg-emerald-50
                                shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(16,185,129,0.08)]
                              "
                            >
                              <Check className="h-3 w-3 text-emerald-600" />
                            </span>

                            <span>{d}</span>
                          </li>
                        );
                      })}

                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div
                  className="
                    relative z-10
                    flex items-center justify-between gap-3
                    border-t border-white/70
                    pt-4
                  "
                >
                  <span className="text-[10px] font-medium text-slate-400">
                    Custom scope available
                  </span>

                  <button
                    onClick={function () {
                      onSelectServiceForBooking(
                        service.name,
                        service.startingPrice,
                      );
                    }}
                    className="
                      inline-flex items-center gap-1.5
                      rounded-full
                      border border-white/80
                      bg-white/60
                      px-4 py-2
                      text-xs font-bold
                      text-slate-700
                      shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(148,163,184,0.08),0_5px_12px_rgba(100,116,139,0.05)]
                      transition-all duration-200
                      hover:-translate-y-0.5
                      hover:bg-blue-600
                      hover:text-white
                      hover:shadow-[0_8px_18px_rgba(37,99,235,0.18)]
                    "
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* =================================================
              QUICK CONSULTATION CARD
          ================================================== */}

          <div
            className="
              relative flex flex-col justify-between
              overflow-hidden
              rounded-[1.75rem]
              border border-white/80
              bg-gradient-to-br
              from-[#e9edff]
              via-[#f5f6ff]
              to-[#eef0fa]
              p-6
              shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.11),0_18px_40px_rgba(100,116,139,0.08)]
              sm:p-7
            "
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-blue-200/30 blur-3xl" />

            <div className="relative z-10">

              <div
                className="
                  mb-4 inline-flex items-center gap-2
                  rounded-full
                  bg-white/60
                  px-3 py-1.5
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.13em]
                  text-blue-600
                  shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(148,163,184,0.07)]
                "
              >
                <HelpCircle className="h-3 w-3" />
                Need Help Deciding?
              </div>

              <h3
                className="
                  mb-3
                  text-xl
                  font-extrabold
                  tracking-[-0.025em]
                  text-slate-900
                "
              >
                Unsure which channel moves the needle first?
              </h3>

              <p
                className="
                  mb-6
                  text-xs
                  leading-relaxed
                  text-slate-500
                  sm:text-sm
                "
              >
                Tell me about your current revenue bottlenecks and customer
                acquisition cost. I will review your website and recommend the
                highest-ROI entry point.
              </p>
            </div>

            <button
              onClick={function () {
                onSelectServiceForBooking('Growth Strategy Consultation');
              }}
              className="
                relative z-10
                w-full
                rounded-full
                border border-blue-400/20
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                px-4 py-3
                text-xs font-bold
                text-white
                shadow-[inset_2px_2px_5px_rgba(255,255,255,0.18),inset_-2px_-2px_5px_rgba(30,64,175,0.25),0_10px_22px_rgba(37,99,235,0.16)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:from-blue-500
                hover:to-indigo-500
              "
            >
              Request Free Initial Audit
            </button>
          </div>
        </div>

        {/* =====================================================
            SPECIALIZED SUPPORTING SERVICES
        ====================================================== */}

        <div className="mb-24">

          <div
            className="
              mb-8 flex flex-wrap
              items-end justify-between gap-4
              rounded-2xl
              border border-white/70
              bg-white/35
              px-5 py-4
              shadow-[inset_2px_2px_5px_rgba(255,255,255,0.9),inset_-2px_-2px_5px_rgba(148,163,184,0.07)]
              backdrop-blur-xl
            "
          >
            <div>

              <div
                className="
                  mb-1.5
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.14em]
                  text-blue-600
                "
              >
                Specialized Solutions
              </div>

              <h3
                className="
                  text-2xl
                  font-extrabold
                  tracking-[-0.025em]
                  text-slate-900
                "
              >
                Targeted Sprint Services
              </h3>
            </div>

            <div className="hidden text-xs font-medium text-slate-400 sm:block">
              Standalone 3–7 day turnarounds
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

            {ADDITIONAL_SERVICES.map(function (item) {
              return (
                <div
                  key={item.id}
                  className="
                    group flex flex-col justify-between
                    rounded-[1.5rem]
                    border border-white/80
                    bg-white/45
                    p-5
                    shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_7px_rgba(148,163,184,0.09),0_10px_25px_rgba(100,116,139,0.06)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-white/60
                    hover:shadow-[inset_2px_2px_7px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.10),0_18px_32px_rgba(100,116,139,0.09)]
                  "
                >
                  <div>

                    <div className="mb-2 flex items-start justify-between gap-3">

                      <h4
                        className="
                          text-sm
                          font-extrabold
                          text-slate-800
                        "
                      >
                        {item.name}
                      </h4>

                      <span
                        className="
                          shrink-0
                          rounded-full
                          bg-blue-50/80
                          px-2.5 py-1
                          text-xs
                          font-extrabold
                          tabular-nums
                          text-blue-600
                          shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(59,130,246,0.07)]
                        "
                      >
                        ₹{item.startingPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <p
                      className="
                        mb-4
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
                      flex items-center justify-between
                      border-t border-white/70
                      pt-3
                      text-[11px]
                    "
                  >
                    <span className="font-medium text-slate-400">
                      Turnaround: {item.turnaround}
                    </span>

                    <button
                      onClick={function () {
                        onSelectServiceForBooking(
                          item.name,
                          item.startingPrice,
                        );
                      }}
                      className="
                        inline-flex items-center gap-1
                        font-bold
                        text-blue-600
                        transition-all duration-200
                        hover:gap-1.5
                        hover:text-indigo-600
                      "
                    >
                      <span>Select</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            PACKAGE CALCULATOR
        ====================================================== */}

        <div
          className="
            relative overflow-hidden
            rounded-[2rem]
            border border-white/80
            bg-gradient-to-br
            from-white/65
            via-white/45
            to-blue-50/45
            p-5
            shadow-[inset_3px_3px_10px_rgba(255,255,255,0.95),inset_-4px_-4px_12px_rgba(148,163,184,0.11),0_25px_60px_rgba(100,116,139,0.11)]
            backdrop-blur-2xl
            sm:p-8
            lg:p-10
          "
        >

          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-5xl">

            {/* Calculator Header */}
            <div
              className="
                mb-7 flex flex-wrap
                items-center justify-between gap-5
                border-b border-white/80
                pb-6
              "
            >
              <div>

                <div
                  className="
                    mb-2 flex items-center gap-2
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.14em]
                    text-blue-600
                  "
                >
                  <Calculator className="h-3.5 w-3.5" />
                  <span>Interactive Package Estimator</span>
                </div>

                <h3
                  className="
                    text-2xl
                    font-extrabold
                    tracking-[-0.03em]
                    text-slate-900
                    sm:text-3xl
                  "
                >
                  Build Your Custom Growth Stack
                </h3>
              </div>

              {/* Billing Toggle */}
              <div
                className="
                  flex items-center
                  rounded-full
                  border border-white/80
                  bg-slate-100/65
                  p-1
                  shadow-[inset_2px_2px_5px_rgba(148,163,184,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]
                "
              >
                <button
                  type="button"
                  onClick={function () {
                    setBillingCycle('monthly');
                  }}
                  className={`
                    rounded-full
                    px-3.5 py-2
                    text-xs font-bold
                    transition-all duration-200

                    ${
                      billingCycle === 'monthly'
                        ? `
                          bg-white
                          text-blue-600
                          shadow-[inset_1px_1px_3px_rgba(255,255,255,0.95),inset_-1px_-1px_3px_rgba(148,163,184,0.08),0_4px_10px_rgba(100,116,139,0.07)]
                        `
                        : `
                          text-slate-400
                          hover:text-slate-700
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
                    rounded-full
                    px-3.5 py-2
                    text-xs font-bold
                    transition-all duration-200

                    ${
                      billingCycle === 'one-time'
                        ? `
                          bg-white
                          text-blue-600
                          shadow-[inset_1px_1px_3px_rgba(255,255,255,0.95),inset_-1px_-1px_3px_rgba(148,163,184,0.08),0_4px_10px_rgba(100,116,139,0.07)]
                        `
                        : `
                          text-slate-400
                          hover:text-slate-700
                        `
                    }
                  `}
                >
                  One-Time Project
                </button>
              </div>
            </div>

            {/* Calculator Description */}
            <p
              className="
                mb-6
                max-w-3xl
                text-xs
                leading-relaxed
                text-slate-500
                sm:text-sm
              "
            >
              Select the capabilities your business needs right now.
              Bundling 3 or more services automatically applies an integrated
              campaign discount.
            </p>

            {/* =================================================
                SERVICE SELECTOR
            ================================================== */}

            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">

              {allServicesList.map(function (service) {
                const isSelected = selectedServices.includes(service.id);

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={function () {
                      toggleService(service.id);
                    }}
                    className={`
                      flex items-center
                      justify-between
                      gap-3
                      rounded-2xl
                      border
                      p-3.5
                      text-left
                      transition-all duration-200

                      ${
                        isSelected
                          ? `
                            border-blue-200/80
                            bg-blue-50/75
                            text-slate-900
                            shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(59,130,246,0.08),0_7px_18px_rgba(59,130,246,0.08)]
                          `
                          : `
                            border-white/80
                            bg-white/40
                            text-slate-500
                            shadow-[inset_2px_2px_5px_rgba(255,255,255,0.9),inset_-2px_-2px_5px_rgba(148,163,184,0.07)]
                            hover:-translate-y-0.5
                            hover:bg-white/65
                          `
                      }
                    `}
                  >
                    <div className="mr-2 flex min-w-0 items-center gap-2.5">

                      <span
                        className={`
                          flex h-5 w-5
                          shrink-0
                          items-center justify-center
                          rounded-md
                          text-[10px]
                          ${
                            isSelected
                              ? `
                                bg-blue-600
                                text-white
                                shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2),0_3px_8px_rgba(37,99,235,0.16)]
                              `
                              : `
                                border border-slate-300
                                bg-white/60
                              `
                          }
                        `}
                      >
                        {isSelected && (
                          <Check className="h-3 w-3 stroke-[3]" />
                        )}
                      </span>

                      <span className="truncate text-xs font-semibold">
                        {service.name}
                      </span>
                    </div>

                    <span
                      className={`
                        shrink-0
                        text-xs
                        font-extrabold
                        tabular-nums
                        ${
                          isSelected
                            ? 'text-blue-600'
                            : 'text-slate-500'
                        }
                      `}
                    >
                      ₹{service.price.toLocaleString('en-IN')}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* =================================================
                CALCULATOR SUMMARY
            ================================================== */}

            <div
              className="
                rounded-[1.5rem]
                border border-white/80
                bg-slate-50/55
                p-5
                shadow-[inset_3px_3px_8px_rgba(148,163,184,0.07),inset_-2px_-2px_6px_rgba(255,255,255,0.9)]
                sm:p-6
              "
            >
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

                {/* Total */}
                <div>

                  <div
                    className="
                      mb-1
                      text-[9px]
                      font-extrabold
                      uppercase
                      tracking-[0.14em]
                      text-slate-400
                    "
                  >
                    Estimated Investment (
                    {billingCycle === 'monthly'
                      ? 'Monthly'
                      : 'One-Time Project'}
                    )
                  </div>

                  <div className="flex flex-wrap items-baseline gap-2">

                    <span
                      className="
                        text-3xl
                        font-extrabold
                        tabular-nums
                        tracking-[-0.03em]
                        text-slate-900
                        sm:text-4xl
                      "
                    >
                      ₹{currentTotal.toLocaleString('en-IN')}
                    </span>

                    {selectedServices.length >= 3 && (
                      <span
                        className="
                          rounded-full
                          bg-emerald-50
                          px-2.5 py-1
                          text-[9px]
                          font-bold
                          text-emerald-600
                          shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9)]
                        "
                      >
                        10% bundle saving
                      </span>
                    )}
                  </div>

                  <div className="mt-1 text-[10px] font-medium text-slate-400">
                    {selectedServices.length}{' '}
                    {selectedServices.length === 1
                      ? 'service'
                      : 'services'}{' '}
                    selected
                  </div>
                </div>

                {/* Actions */}
                <div className="flex w-full items-center gap-3 sm:w-auto">

                  <button
                    type="button"
                    onClick={function () {
                      setSelectedServices(['seo', 'meta-ads']);
                    }}
                    className="
                      rounded-full
                      px-4 py-2.5
                      text-xs
                      font-semibold
                      text-slate-400
                      transition-colors
                      hover:text-slate-700
                    "
                  >
                    Reset
                  </button>

                  <button
                    type="button"
                    onClick={handleBookCustomPackage}
                    disabled={selectedServices.length === 0}
                    className="
                      group
                      inline-flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border border-blue-400/20
                      bg-gradient-to-r
                      from-blue-600
                      to-indigo-600
                      px-6 py-3
                      text-xs
                      font-bold
                      text-white
                      shadow-[inset_2px_2px_5px_rgba(255,255,255,0.18),inset_-2px_-2px_5px_rgba(30,64,175,0.25),0_10px_22px_rgba(37,99,235,0.16)]
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:from-blue-500
                      hover:to-indigo-500
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                      sm:flex-initial
                    "
                  >
                    <span>Lock in This Package</span>

                    <ArrowUpRight
                      className="
                        h-3.5 w-3.5
                        transition-transform duration-200
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Small Trust Note */}
            <div className="mt-5 flex items-center justify-center gap-2 text-center text-[10px] font-medium text-slate-400">
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              Transparent pricing · Flexible scope · No hidden retainers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}