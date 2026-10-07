import { Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { GROWTH_PACKAGES } from '../data/portfolioData';

interface GrowthPackagesProps {
  onSelectPackage: (packageName: string, price: number) => void;
  onCustomPackageClick: () => void;
}

export default function GrowthPackages({
  onSelectPackage,
  onCustomPackageClick,
}: GrowthPackagesProps) {
  return (
    <section
      id="packages"
      className="
        relative overflow-hidden
        border-b border-white/70
        bg-gradient-to-br from-[#f8f9ff] via-[#f2f4fb] to-[#eef0f8]
        py-20 sm:py-28
      "
    >
      {/* Ambient Clay Glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[28rem] w-[28rem] rounded-full bg-violet-200/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between">

          <div className="max-w-2xl">

            {/* Section Label */}
            <div
              className="
                mb-5 inline-flex items-center gap-2
                rounded-full
                border border-white/80
                bg-white/55
                px-4 py-2
                text-[10px] font-bold uppercase
                tracking-[0.16em]
                text-blue-600
                shadow-[inset_1px_1px_4px_rgba(255,255,255,0.9),inset_-1px_-1px_4px_rgba(148,163,184,0.10),0_5px_15px_rgba(100,116,139,0.06)]
                backdrop-blur-xl
              "
            >
              <Sparkles className="h-3.5 w-3.5" />
              04. Integrated Retainers
            </div>

            <h2
              className="
                text-3xl font-extrabold
                leading-tight tracking-tight
                text-slate-900
                sm:text-5xl
              "
            >
              MONTHLY GROWTH PACKAGES.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Coordinated multi-channel systems designed to compound over 30,
              60, and 90 days. All retainers are customizable to your current
              capacity and targets.
            </p>
          </div>

          {/* No Lock-in Badge */}
          <div
            className="
              shrink-0 self-start
              rounded-full
              border border-white/80
              bg-white/50
              px-4 py-2.5
              text-xs font-medium text-slate-500
              shadow-[inset_2px_2px_5px_rgba(255,255,255,0.9),inset_-2px_-2px_5px_rgba(148,163,184,0.10),0_6px_15px_rgba(100,116,139,0.06)]
              backdrop-blur-xl
              md:self-auto
            "
          >
            Flexible month-to-month · No lock-in contracts
          </div>
        </div>

        {/* =====================================================
            PACKAGES GRID
        ====================================================== */}
        <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

          {GROWTH_PACKAGES.map(function (pkg) {
            const isFeatured = pkg.popular;

            return (
              <div
                key={pkg.id}
                className={`
                  group relative flex flex-col justify-between overflow-visible
                  rounded-[1.75rem]
                  border p-6
                  backdrop-blur-xl
                  transition-all duration-300
                  sm:p-7

                  ${
                    isFeatured
                      ? `
                        border-blue-200/80
                        bg-gradient-to-br from-blue-50/75 via-white/60 to-indigo-50/55
                        shadow-[inset_3px_3px_8px_rgba(255,255,255,0.98),inset_-4px_-4px_10px_rgba(99,102,241,0.10),0_18px_45px_rgba(59,130,246,0.13)]
                      `
                      : `
                        border-white/80
                        bg-white/50
                        shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.11),0_15px_35px_rgba(100,116,139,0.08)]
                      `
                  }

                  hover:-translate-y-1

                  ${
                    isFeatured
                      ? `
                        hover:shadow-[inset_3px_3px_9px_rgba(255,255,255,0.98),inset_-4px_-4px_11px_rgba(99,102,241,0.12),0_25px_55px_rgba(59,130,246,0.17)]
                      `
                      : `
                        hover:bg-white/65
                        hover:shadow-[inset_3px_3px_9px_rgba(255,255,255,0.98),inset_-4px_-4px_11px_rgba(148,163,184,0.13),0_22px_45px_rgba(100,116,139,0.10)]
                      `
                  }
                `}
              >
                {/* Card Glow */}
                <div
                  className={`
                    pointer-events-none absolute
                    -right-10 -top-10
                    h-28 w-28 rounded-full
                    blur-3xl
                    transition-transform duration-500
                    group-hover:scale-150
                    ${
                      isFeatured
                        ? 'bg-blue-200/35'
                        : 'bg-slate-200/30'
                    }
                  `}
                />

                {/* Most Selected */}
                {isFeatured && (
                  <div
                    className="
                      absolute -top-3 left-6
                      inline-flex items-center gap-1.5
                      rounded-full
                      border border-blue-200/80
                      bg-blue-600
                      px-3 py-1.5
                      text-[10px] font-bold uppercase
                      tracking-[0.12em]
                      text-white
                      shadow-[inset_1px_1px_3px_rgba(255,255,255,0.20),inset_-1px_-1px_3px_rgba(30,64,175,0.25),0_7px_18px_rgba(37,99,235,0.20)]
                    "
                  >
                    <Sparkles className="h-3 w-3" />
                    Most Selected
                  </div>
                )}

                <div className="relative flex h-full flex-col justify-between">

                  <div>

                    {/* Package Name */}
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <h3
                        className={`
                          text-lg font-extrabold tracking-tight
                          ${
                            isFeatured
                              ? 'text-blue-950'
                              : 'text-slate-900'
                          }
                        `}
                      >
                        {pkg.name}
                      </h3>
                    </div>

                    {/* Tagline */}
                    <p className="mb-5 min-h-[40px] text-xs leading-relaxed text-slate-500">
                      {pkg.tagline}
                    </p>

                    {/* Pricing */}
                    <div
                      className="
                        mb-6 border-b border-white/70
                        pb-6
                      "
                    >
                      <div className="flex items-baseline gap-1">

                        <span
                          className={`
                            text-3xl font-extrabold
                            tabular-nums tracking-tight
                            ${
                              isFeatured
                                ? 'text-blue-700'
                                : 'text-slate-900'
                            }
                          `}
                        >
                          ₹{pkg.price.toLocaleString('en-IN')}
                        </span>

                        <span className="text-xs font-medium text-slate-400">
                          /month
                        </span>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-8">

                      <div
                        className="
                          mb-3 text-[10px]
                          font-bold uppercase
                          tracking-[0.14em]
                          text-slate-400
                        "
                      >
                        Included Scope
                      </div>

                      <ul className="space-y-2.5">
                        {pkg.deliverables.map(function (item, idx) {
                          return (
                            <li
                              key={idx}
                              className="
                                flex items-start gap-2.5
                                text-xs leading-relaxed
                                text-slate-600
                              "
                            >
                              <span
                                className="
                                  mt-0.5 flex h-5 w-5 shrink-0
                                  items-center justify-center
                                  rounded-full
                                  bg-blue-50
                                  shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(59,130,246,0.10)]
                                "
                              >
                                <Check className="h-3 w-3 text-blue-600" />
                              </span>

                              <span>{item}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* Package CTA */}
                  <button
                    onClick={function () {
                      onSelectPackage(pkg.name, pkg.price);
                    }}
                    className={`
                      group/btn flex w-full items-center
                      justify-center gap-2
                      rounded-xl
                      px-4 py-3
                      text-xs font-bold
                      transition-all duration-300

                      ${
                        isFeatured
                          ? `
                            border border-blue-500/20
                            bg-gradient-to-r from-blue-600 to-indigo-600
                            text-white
                            shadow-[inset_2px_2px_5px_rgba(255,255,255,0.18),inset_-2px_-2px_5px_rgba(30,64,175,0.28),0_10px_22px_rgba(37,99,235,0.18)]
                            hover:-translate-y-0.5
                            hover:from-blue-500
                            hover:to-indigo-500
                          `
                          : `
                            border border-white/80
                            bg-white/60
                            text-slate-700
                            shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.10),0_7px_16px_rgba(100,116,139,0.06)]
                            hover:-translate-y-0.5
                            hover:bg-white/80
                            hover:text-blue-600
                          `
                      }

                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-500/40
                    `}
                  >
                    <span>Select {pkg.name}</span>

                    <span
                      className={`
                        flex h-6 w-6 items-center justify-center
                        rounded-full
                        transition-transform duration-300
                        group-hover/btn:translate-x-0.5
                        ${
                          isFeatured
                            ? 'bg-white/10'
                            : 'bg-blue-50'
                        }
                      `}
                    >
                      <ArrowUpRight
                        className={`
                          h-3.5 w-3.5
                          ${
                            isFeatured
                              ? 'text-white'
                              : 'text-blue-600'
                          }
                        `}
                      />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            CUSTOM PACKAGE CTA
        ====================================================== */}
        <div
          className="
            relative overflow-hidden
            flex flex-col items-center
            justify-between gap-6
            rounded-[2rem]
            border border-white/80
            bg-white/45
            p-6
            text-center
            shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.11),0_18px_45px_rgba(100,116,139,0.08)]
            backdrop-blur-2xl
            sm:p-8
            md:flex-row
            md:text-left
          "
        >
          {/* CTA Glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/30 blur-3xl" />

          <div className="relative">
            <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
              <Sparkles className="h-4 w-4 text-blue-600" />

              <h4 className="text-base font-extrabold text-slate-900 sm:text-lg">
                Need something specific or a tailored hybrid scope?
              </h4>
            </div>

            <p className="max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
              Every business has unique internal bandwidth. We can configure a
              custom sprint or monthly retainer.
            </p>
          </div>

          <button
            onClick={onCustomPackageClick}
            className="
              group relative inline-flex shrink-0
              items-center gap-2
              rounded-full
              border border-blue-200/80
              bg-blue-50/70
              px-5 py-3
              text-xs font-bold
              text-blue-600
              shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(59,130,246,0.10),0_8px_20px_rgba(59,130,246,0.08)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-blue-600
              hover:text-white
              hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,0.15),inset_-2px_-2px_5px_rgba(30,64,175,0.25),0_14px_28px_rgba(37,99,235,0.18)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500/40
            "
          >
            <span>Let&apos;s Build a Custom Package</span>

            <ArrowUpRight
              className="
                h-3.5 w-3.5
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
}