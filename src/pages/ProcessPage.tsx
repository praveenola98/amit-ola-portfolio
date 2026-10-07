import { useState } from 'react';
import { CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';

import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ContactActionBlock from '../components/common/ContactActionBlock';

import { PROCESS_STEPS } from '../data/portfolioData';

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0);

  const activeProcessStep = PROCESS_STEPS[activeStep];

  function handlePrevious() {
    setActiveStep(function (prev) {
      return Math.max(0, prev - 1);
    });
  }

  function handleNext() {
    setActiveStep(function (prev) {
      return Math.min(PROCESS_STEPS.length - 1, prev + 1);
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
        title="Execution Process | Amit Ola – Digital Marketing Methodology"
        description="Discover Amit Ola's 5-step digital growth methodology: Discover, Audit, Strategy, Execute, and Optimize. A disciplined, transparent framework."
        canonicalPath="/process"
        breadcrumbs={[
          {
            name: 'Process',
            url: '/process',
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
          -left-56
          top-0
          h-[34rem]
          w-[34rem]
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
          top-[28%]
          h-[38rem]
          w-[38rem]
          rounded-full
          bg-violet-200/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[30%]
          h-80
          w-80
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
                name: 'Execution Process',
                url: '/process',
              },
            ]}
          />
        </div>

        {/* =====================================================
            HERO
        ====================================================== */}

        <div className="mb-14 max-w-4xl">

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

            Execution Methodology
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
            A disciplined 5-step
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
              growth cycle.
            </span>
          </h1>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-relaxed
              text-slate-500
              sm:text-lg
            "
          >
            Success in digital marketing isn&apos;t achieved by guessing.
            Every engagement follows an iterative, data-informed cycle
            designed to eliminate wasted spend and compound what works.
          </p>
        </div>

        {/* =====================================================
            PROCESS INTERACTIVE AREA
        ====================================================== */}

        <div
          className="
            mb-20
            grid
            grid-cols-1
            items-start
            gap-7
            lg:grid-cols-12
            lg:gap-10
          "
        >

          {/* ===================================================
              STEP SELECTOR
          ==================================================== */}

          <div className="space-y-3 lg:col-span-5">

            {PROCESS_STEPS.map(function (step, idx) {
              const isActive = activeStep === idx;

              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={function () {
                    setActiveStep(idx);
                  }}
                  className={`
                    group
                    relative
                    flex
                    w-full
                    items-center
                    justify-between
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    p-5
                    text-left
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    sm:p-6
                    ${
                      isActive
                        ? `
                          border-blue-200/90
                          bg-blue-50/65
                          shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(59,130,246,0.08),0_18px_35px_rgba(59,130,246,0.10)]
                        `
                        : `
                          border-white/80
                          bg-white/45
                          shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.08),0_12px_28px_rgba(100,116,139,0.07)]
                          hover:bg-white/65
                          hover:shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.10),0_18px_35px_rgba(100,116,139,0.11)]
                        `
                    }
                  `}
                >
                  {/* Active rail */}
                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-4
                        left-0
                        top-4
                        w-1
                        rounded-r-full
                        bg-gradient-to-b
                        from-blue-500
                        to-indigo-500
                      "
                    />
                  )}

                  <div className="relative z-10 flex min-w-0 items-center gap-3.5">

                    {/* Step Number */}
                    <span
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        font-mono
                        text-[10px]
                        font-extrabold
                        shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.06)]
                        ${
                          isActive
                            ? 'bg-blue-100/80 text-blue-600'
                            : 'bg-slate-100/70 text-slate-400'
                        }
                      `}
                    >
                      0{step.number}
                    </span>

                    <div className="min-w-0">

                      <div
                        className={`
                          text-base
                          font-extrabold
                          tracking-[-0.015em]
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? 'text-blue-600'
                              : 'text-slate-800 group-hover:text-blue-600'
                          }
                        `}
                      >
                        {step.name}
                      </div>

                      <div
                        className="
                          mt-0.5
                          truncate
                          text-xs
                          font-medium
                          text-slate-400
                        "
                      >
                        {step.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <span
                    className={`
                      relative
                      z-10
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/80
                      shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(148,163,184,0.06)]
                      ${
                        isActive
                          ? 'bg-blue-50 text-blue-600'
                          : 'bg-white/55 text-slate-400'
                      }
                    `}
                  >
                    <ChevronRight
                      className={`
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        ${
                          isActive
                            ? 'translate-x-0.5'
                            : 'group-hover:translate-x-0.5'
                        }
                      `}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          {/* ===================================================
              ACTIVE STEP DETAIL
          ==================================================== */}

          <div
            className="
              relative
              flex
              min-h-[440px]
              flex-col
              justify-between
              overflow-hidden
              rounded-[2rem]
              border border-white/80
              bg-white/45
              p-6
              shadow-[inset_3px_3px_9px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.10),0_24px_55px_rgba(100,116,139,0.10)]
              backdrop-blur-xl
              sm:p-8
              lg:col-span-7
              lg:p-10
            "
          >
            {/* Ambient panel glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-blue-200/20
                blur-3xl
              "
            />

            <div className="relative z-10">

              {/* Detail Header */}
              <div
                className="
                  mb-6
                  flex
                  items-start
                  justify-between
                  gap-4
                  border-b
                  border-white/80
                  pb-6
                "
              >
                <div className="min-w-0">

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
                    Phase 0{activeProcessStep.number} of 05
                  </div>

                  <h2
                    className="
                      max-w-xl
                      text-2xl
                      font-extrabold
                      leading-tight
                      tracking-[-0.035em]
                      text-slate-900
                      sm:text-3xl
                    "
                  >
                    {activeProcessStep.name}:{' '}
                    {activeProcessStep.subtitle}
                  </h2>
                </div>

                {/* Large Number */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-[1rem]
                    border
                    border-blue-100/80
                    bg-blue-50/70
                    font-mono
                    text-sm
                    font-extrabold
                    text-blue-600
                    shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(59,130,246,0.06)]
                    sm:h-14
                    sm:w-14
                    sm:text-lg
                  "
                >
                  0{activeProcessStep.number}
                </div>
              </div>

              {/* Summary */}
              <div
                className="
                  mb-8
                  rounded-[1.25rem]
                  border
                  border-white/80
                  bg-slate-50/55
                  p-5
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.07)]
                "
              >
                <p
                  className="
                    text-sm
                    leading-relaxed
                    text-slate-500
                    sm:text-base
                  "
                >
                  {activeProcessStep.summary}
                </p>
              </div>

              {/* Deliverables */}
              <div>

                <div
                  className="
                    mb-4
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.12em]
                    text-slate-400
                  "
                >
                  Documented Deliverables for this Phase
                </div>

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-3
                    sm:grid-cols-2
                  "
                >
                  {activeProcessStep.deliverables.map(function (
                    item,
                    i
                  ) {
                    return (
                      <div
                        key={i}
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-[1rem]
                          border
                          border-white/80
                          bg-white/45
                          p-3.5
                          text-xs
                          font-medium
                          text-slate-600
                          shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.06)]
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:bg-white/65
                        "
                      >
                        <span
                          className="
                            flex
                            h-6
                            w-6
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-emerald-50
                            text-emerald-600
                            shadow-[inset_1px_1px_3px_rgba(255,255,255,0.95),inset_-1px_-1px_3px_rgba(16,185,129,0.06)]
                          "
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </span>

                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* =================================================
                NAVIGATION FOOTER
            ================================================== */}

            <div
              className="
                relative
                z-10
                mt-8
                flex
                flex-wrap
                items-center
                justify-between
                gap-4
                border-t
                border-white/80
                pt-6
              "
            >
              {/* Previous */}
              <button
                type="button"
                onClick={handlePrevious}
                disabled={activeStep === 0}
                className="
                  rounded-full
                  border
                  border-white/80
                  bg-white/45
                  px-4
                  py-2.5
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.06em]
                  text-slate-500
                  shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(148,163,184,0.06)]
                  transition-all
                  duration-300
                  hover:bg-white/70
                  hover:text-blue-600
                  disabled:pointer-events-none
                  disabled:opacity-30
                "
              >
                ← Previous Phase
              </button>

              {/* Phase Indicators */}
              <div className="flex items-center gap-1.5">
                {PROCESS_STEPS.map(function (_, i) {
                  const isActive = activeStep === i;

                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={function () {
                        setActiveStep(i);
                      }}
                      className={`
                        h-2
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? 'w-7 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.25)]'
                            : 'w-2 bg-slate-200 hover:bg-blue-200'
                        }
                      `}
                      aria-label={`Go to phase ${i + 1}`}
                    />
                  );
                })}
              </div>

              {/* Next */}
              <button
                type="button"
                onClick={handleNext}
                disabled={
                  activeStep === PROCESS_STEPS.length - 1
                }
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-white/80
                  bg-white/45
                  px-4
                  py-2.5
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.06em]
                  text-slate-500
                  shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(148,163,184,0.06)]
                  transition-all
                  duration-300
                  hover:bg-white/70
                  hover:text-blue-600
                  disabled:pointer-events-none
                  disabled:opacity-30
                "
              >
                Next Phase
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            GLOBAL ACTION
        ====================================================== */}

        <ContactActionBlock
          title="Ready to begin with Phase 1 Discovery?"
          subtitle="Direct consultation with Amit Ola via WhatsApp, phone call, or email."
        />
      </div>
    </div>
  );
}