import {
  Compass,
  BarChart3,
  Share2,
  MessageSquareText,
} from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

export default function WhyWorkWithMe() {
  const icons = [Compass, BarChart3, Share2, MessageSquareText];

  return (
    <section
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

      <div className="pointer-events-none absolute -right-48 top-[30%] h-[34rem] w-[34rem] rounded-full bg-violet-200/25 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-[38%] h-72 w-72 rounded-full bg-indigo-100/20 blur-3xl" />

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
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.35)]" />
            <span>05. Work Principles &amp; Integrity</span>
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
            WHY BUSINESSES
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
              WORK WITH ME.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-relaxed
              text-slate-500
            "
          >
            A partnership grounded in operational discipline, objective
            commercial focus, and clear accountability.
          </p>
        </div>

        {/* =====================================================
            4 PILLARS BENTO GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-7">

          {WHY_WORK_WITH_ME.map(function (item, idx) {
            const Icon = icons[idx];

            return (
              <div
                key={idx}
                className="
                  group
                  relative
                  flex
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[1.75rem]
                  border border-white/80
                  bg-white/50
                  p-6
                  shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.10),0_16px_40px_rgba(100,116,139,0.08)]
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-white/65
                  hover:shadow-[inset_3px_3px_9px_rgba(255,255,255,0.95),inset_-4px_-4px_11px_rgba(148,163,184,0.11),0_24px_48px_rgba(100,116,139,0.12)]
                  sm:p-8
                  lg:p-10
                "
              >
                {/* Card Ambient Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-blue-200/20
                    blur-3xl
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10">

                  {/* Top Row */}
                  <div className="mb-8 flex items-center justify-between">

                    {/* Icon */}
                    <div
                      className="
                        flex h-12 w-12
                        items-center justify-center
                        rounded-2xl
                        border border-white/80
                        bg-slate-100/70
                        text-blue-600
                        shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.10),0_8px_18px_rgba(100,116,139,0.06)]
                        transition-all duration-300
                        group-hover:-translate-y-0.5
                        group-hover:bg-blue-50
                        group-hover:text-indigo-600
                      "
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Number */}
                    <span
                      className="
                        flex h-8 min-w-8
                        items-center justify-center
                        rounded-full
                        bg-slate-100/70
                        px-2
                        text-[10px]
                        font-extrabold
                        tabular-nums
                        text-slate-400
                        shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(148,163,184,0.06)]
                      "
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mb-3
                      text-xl
                      font-extrabold
                      tracking-[-0.025em]
                      text-slate-900
                      sm:text-2xl
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      max-w-xl
                      text-sm
                      leading-relaxed
                      text-slate-500
                      sm:text-base
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom Principle */}
                <div
                  className="
                    relative z-10
                    mt-7
                    border-t border-white/80
                    pt-5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-slate-400
                  "
                >
                  <span className="text-blue-500">
                    Principle {idx + 1}
                  </span>{' '}
                  of 4 · Amit Ola Standard
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            ANTI-AGENCY MANIFESTO
        ====================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-start
            justify-between
            gap-4
            rounded-[1.5rem]
            border border-white/80
            bg-white/45
            p-5
            shadow-[inset_3px_3px_7px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.09),0_12px_30px_rgba(100,116,139,0.07)]
            backdrop-blur-xl
            sm:flex-row
            sm:items-center
            sm:p-6
          "
        >
          {/* Direct Execution */}
          <div className="flex items-center gap-3">

            <span
              className="
                flex h-7 w-7
                items-center justify-center
                rounded-full
                bg-emerald-50
                shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(16,185,129,0.08)]
              "
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_7px_rgba(16,185,129,0.35)]" />
            </span>

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-slate-500
                sm:text-xs
              "
            >
              Direct execution by Amit Ola — never outsourced to junior
              interns
            </span>
          </div>

          {/* Location */}
          <span
            className="
              rounded-full
              border border-white/80
              bg-slate-50/60
              px-3 py-1.5
              text-[10px]
              font-semibold
              text-slate-400
              shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9)]
            "
          >
            Nawalgarh, Rajasthan · Worldwide Execution
          </span>
        </div>
      </div>
    </section>
  );
}