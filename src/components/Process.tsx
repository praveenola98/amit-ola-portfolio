import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      className="
        relative overflow-hidden
        border-b border-white/70
        bg-gradient-to-br from-[#f8f9ff] via-[#f2f4fb] to-[#eef0f8]
        py-20 sm:py-28
      "
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-violet-200/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div
          className="
            mb-12 flex flex-wrap items-center justify-between gap-4
            rounded-2xl
            border border-white/80
            bg-white/45
            px-5 py-3.5
            shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-3px_-3px_8px_rgba(148,163,184,0.10),0_10px_28px_rgba(100,116,139,0.07)]
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.35)]" />
            <span>Working Methodology · 5-Stage Sprint</span>
          </div>

          <div className="text-xs font-medium text-slate-500">
            Disciplined, Measurable Growth Execution
          </div>
        </div>

        {/* =====================================================
            HEADLINE
        ====================================================== */}

        <div className="mb-12 max-w-3xl sm:mb-14">

          <div
            className="
              mb-5 inline-flex items-center
              rounded-full
              border border-white/80
              bg-white/50
              px-3.5 py-1.5
              text-[10px] font-bold
              uppercase tracking-[0.14em]
              text-slate-500
              shadow-[inset_1px_1px_4px_rgba(255,255,255,0.9),inset_-1px_-1px_4px_rgba(148,163,184,0.08)]
            "
          >
            How I Work
          </div>

          <h2
            className="
              text-3xl font-extrabold
              leading-[1.08]
              tracking-[-0.035em]
              text-slate-900
              sm:text-4xl
              lg:text-5xl
            "
          >
            From scattered tactics
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
              to consistent revenue growth.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
            Every client engagement follows a structured 5-step methodology
            designed to eliminate wasted ad spend and compound organic search
            rankings.
          </p>
        </div>

        {/* =====================================================
            PROCESS TRACK
        ====================================================== */}

        <div
          className="
            mb-8
            overflow-hidden
            rounded-[1.75rem]
            border border-white/80
            bg-white/40
            p-2
            shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.10),0_18px_45px_rgba(100,116,139,0.09)]
            backdrop-blur-xl
          "
        >
          <div className="grid grid-cols-1 gap-2 md:grid-cols-5">

            {PROCESS_STEPS.map(function (step, idx) {
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={function () {
                    setActiveStep(idx);
                  }}
                  className={`
                    group relative cursor-pointer
                    rounded-[1.35rem]
                    p-5
                    transition-all duration-300
                    sm:p-6

                    ${
                      isActive
                        ? `
                          border border-white/90
                          bg-gradient-to-br from-blue-50/95 via-white/80 to-indigo-50/80
                          shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_7px_rgba(148,163,184,0.10),0_10px_24px_rgba(59,130,246,0.10)]
                          -translate-y-0.5
                        `
                        : `
                          border border-transparent
                          hover:border-white/70
                          hover:bg-white/45
                          hover:shadow-[inset_1px_1px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_5px_rgba(148,163,184,0.07),0_8px_20px_rgba(100,116,139,0.06)]
                        `
                    }
                  `}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <div
                      className="
                        absolute left-4 right-4 top-0
                        h-1
                        rounded-b-full
                        bg-gradient-to-r
                        from-blue-500
                        via-indigo-500
                        to-violet-500
                        shadow-[0_2px_8px_rgba(79,70,229,0.25)]
                      "
                    />
                  )}

                  {/* Step Header */}
                  <div className="mb-4 flex items-center justify-between">

                    <span
                      className={`
                        rounded-full
                        px-3 py-1
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.12em]
                        ${
                          isActive
                            ? 'bg-blue-100/80 text-blue-600 shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9)]'
                            : 'bg-slate-100/70 text-slate-400'
                        }
                      `}
                    >
                      Step 0{step.number}
                    </span>

                    {isActive && (
                      <span
                        className="
                          flex h-6 w-6 items-center justify-center
                          rounded-full
                          bg-blue-500
                          shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),0_4px_10px_rgba(59,130,246,0.20)]
                        "
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      </span>
                    )}
                  </div>

                  {/* Step Name */}
                  <h3
                    className={`
                      mb-1
                      text-lg font-extrabold
                      tracking-[-0.02em]
                      ${
                        isActive
                          ? 'text-slate-900'
                          : 'text-slate-800'
                      }
                    `}
                  >
                    {step.name}
                  </h3>

                  {/* Subtitle */}
                  <div
                    className={`
                      mb-3
                      text-xs font-bold
                      ${
                        isActive
                          ? 'text-blue-600'
                          : 'text-blue-600/70'
                      }
                    `}
                  >
                    {step.subtitle}
                  </div>

                  {/* Summary */}
                  <p className="text-xs leading-relaxed text-slate-500">
                    {step.summary}
                  </p>

                  {/* Active Arrow */}
                  {isActive && (
                    <div className="mt-5 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      <span>Selected</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            ACTIVE STEP DELIVERABLES
        ====================================================== */}

        <div
          className="
            rounded-[1.5rem]
            border border-white/80
            bg-white/50
            p-5
            shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.10),0_14px_35px_rgba(100,116,139,0.08)]
            backdrop-blur-xl
            sm:p-7
          "
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            {/* Deliverable Heading */}
            <div className="min-w-0">

              <div
                className="
                  mb-2 flex items-center gap-2
                  text-[10px] font-extrabold
                  uppercase tracking-[0.12em]
                  text-blue-600
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

                <span>
                  Active Deliverables: Step 0
                  {PROCESS_STEPS[activeStep].number}{' '}
                  ({PROCESS_STEPS[activeStep].name})
                </span>
              </div>

              <div className="text-sm font-semibold text-slate-700">
                Tangible assets provided during this phase:
              </div>
            </div>

            {/* Deliverables */}
            <div
              className="
                flex flex-wrap
                items-center
                gap-2
                md:justify-end
              "
            >
              {PROCESS_STEPS[activeStep].deliverables.map(function (
                item,
                dIdx,
              ) {
                return (
                  <span
                    key={dIdx}
                    className="
                      inline-flex items-center gap-2
                      rounded-full
                      border border-white/80
                      bg-slate-50/75
                      px-3 py-2
                      text-xs font-semibold
                      text-slate-600
                      shadow-[inset_1px_1px_4px_rgba(255,255,255,0.9),inset_-1px_-1px_4px_rgba(148,163,184,0.08)]
                      transition-all duration-200
                      hover:-translate-y-0.5
                      hover:bg-white/80
                    "
                  >
                    <span
                      className="
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

                    <span>{item}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}