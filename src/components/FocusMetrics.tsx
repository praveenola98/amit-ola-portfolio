import {
  Eye,
  Users,
  UserCheck,
  RefreshCw,
  Award,
  Zap,
} from 'lucide-react';
import { FOCUS_METRICS } from '../data/portfolioData';

export default function FocusMetrics() {
  const icons = [Eye, Users, UserCheck, Zap, Award, RefreshCw];

  return (
    <section
      className="
        relative overflow-hidden
        border-b border-white/70
        bg-gradient-to-br from-[#f8f9ff] via-[#f2f4fb] to-[#eef0f8]
        py-20 sm:py-28
      "
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-violet-200/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mb-12 max-w-3xl sm:mb-16">

          {/* Section Number */}
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
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.35)]" />
            08. Measurement Principles
          </div>

          <h2
            className="
              text-3xl font-extrabold
              leading-tight tracking-tight
              text-slate-900
              sm:text-5xl
            "
          >
            WHAT I FOCUS ON.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600">
            No vanity metrics. Every campaign is calibrated against clear
            commercial leverage points that directly impact your balance sheet.
          </p>
        </div>

        {/* =====================================================
            FOCUS AREAS
        ====================================================== */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {FOCUS_METRICS.map(function (item, idx) {
            const Icon = icons[idx];

            return (
              <div
                key={idx}
                className="
                  group relative overflow-hidden
                  rounded-[1.75rem]
                  border border-white/80
                  bg-white/50
                  p-6
                  shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.11),0_15px_35px_rgba(100,116,139,0.08)]
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-white/65
                  hover:shadow-[inset_3px_3px_9px_rgba(255,255,255,0.95),inset_-4px_-4px_11px_rgba(148,163,184,0.13),0_22px_45px_rgba(59,130,246,0.10)]
                  sm:p-7
                "
              >
                {/* Card glow */}
                <div
                  className="
                    pointer-events-none absolute
                    -right-12 -top-12
                    h-32 w-32
                    rounded-full
                    bg-blue-100/30
                    blur-3xl
                    transition-transform duration-500
                    group-hover:scale-150
                  "
                />

                <div className="relative flex h-full flex-col justify-between">

                  {/* Top */}
                  <div>

                    <div className="mb-6 flex items-center justify-between">

                      {/* Icon Clay */}
                      <div
                        className="
                          flex h-12 w-12 items-center justify-center
                          rounded-2xl
                          border border-white/80
                          bg-white/65
                          text-blue-600
                          shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.12),0_8px_18px_rgba(100,116,139,0.08)]
                          transition-all duration-300
                          group-hover:-translate-y-0.5
                          group-hover:bg-blue-50
                        "
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Pillar */}
                      <span
                        className="
                          rounded-full
                          border border-white/70
                          bg-white/45
                          px-3 py-1.5
                          font-mono text-[10px]
                          font-medium uppercase
                          tracking-wider text-slate-400
                          shadow-[inset_1px_1px_3px_rgba(255,255,255,0.85),inset_-1px_-1px_3px_rgba(148,163,184,0.08)]
                        "
                      >
                        Pillar 0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mb-2 text-xl font-extrabold
                        tracking-tight text-slate-900
                        transition-colors duration-300
                        group-hover:text-blue-600
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Subtitle */}
                    <div
                      className="
                        mb-4 text-xs font-bold
                        uppercase tracking-wider
                        text-blue-600/80
                      "
                    >
                      {item.subtitle}
                    </div>

                    {/* Description */}
                    <p className="mb-7 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* =================================================
                      KPI AREA
                  ================================================== */}
                  <div
                    className="
                      rounded-2xl
                      border border-white/75
                      bg-slate-50/45
                      p-4
                      shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-2px_-2px_6px_rgba(148,163,184,0.08)]
                    "
                  >
                    <div
                      className="
                        mb-3 text-[10px]
                        font-bold uppercase
                        tracking-[0.14em]
                        text-slate-400
                      "
                    >
                      Monitored Metrics
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {item.kpis.map(function (kpi, kIdx) {
                        return (
                          <span
                            key={kIdx}
                            className="
                              rounded-lg
                              border border-white/80
                              bg-white/60
                              px-2.5 py-1.5
                              font-mono text-[10px]
                              font-medium text-slate-600
                              shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(148,163,184,0.08),0_3px_8px_rgba(100,116,139,0.04)]
                              transition-all duration-200
                              group-hover:bg-white/75
                            "
                          >
                            {kpi}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}