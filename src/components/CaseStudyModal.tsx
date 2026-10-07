import { X, ArrowUpRight, Check } from 'lucide-react';
import type { CaseStudy } from '../types/portfolio';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onConsultClick: (category: string) => void;
}

export default function CaseStudyModal({
  study,
  onClose,
  onConsultClick,
}: CaseStudyModalProps) {
  if (!study) return null;

  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-slate-950/45 p-4 backdrop-blur-md
        animate-in fade-in duration-200
        sm:p-6
      "
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Soft ambient glows */}
      <div className="pointer-events-none absolute left-[10%] top-[15%] h-64 w-64 rounded-full bg-blue-400/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[10%] right-[10%] h-72 w-72 rounded-full bg-violet-400/15 blur-3xl" />

      <div
        className="
          relative w-full max-w-3xl max-h-[90vh]
          overflow-y-auto
          rounded-[2rem]
          border border-white/80
          bg-gradient-to-br from-white/85 via-white/70 to-slate-100/65
          p-5 sm:p-8
          shadow-[inset_3px_3px_10px_rgba(255,255,255,0.95),inset_-5px_-5px_12px_rgba(100,116,139,0.12),0_30px_80px_rgba(15,23,42,0.28)]
          backdrop-blur-2xl
          animate-in zoom-in-95 duration-200
        "
        onClick={function (e) {
          e.stopPropagation();
        }}
      >
        {/* Decorative glow inside modal */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-violet-200/20 blur-3xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute right-4 top-4 z-10
            flex h-10 w-10 items-center justify-center
            rounded-full
            border border-white/80
            bg-white/65
            text-slate-500
            shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.12),0_6px_16px_rgba(100,116,139,0.10)]
            transition-all duration-200
            hover:-translate-y-0.5
            hover:bg-white/85
            hover:text-slate-900
            hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.14),0_10px_22px_rgba(100,116,139,0.14)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500/40
          "
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative">

          {/* Modal Header */}
          <div className="mb-7 pr-12">
            <div
              className="
                mb-3 inline-flex rounded-full
                border border-blue-100/80
                bg-blue-50/70
                px-3.5 py-1.5
                text-[10px] font-bold uppercase
                tracking-[0.16em] text-blue-600
                shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(59,130,246,0.08)]
              "
            >
              {study.category}
            </div>

            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              {study.title}
            </h2>
          </div>

          {/* Hero Visual */}
          <div
            className="
              relative mb-7
              aspect-video w-full overflow-hidden
              rounded-[1.5rem]
              border border-white/80
              bg-slate-100/60
              p-1.5
              shadow-[inset_3px_3px_7px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.12),0_15px_35px_rgba(100,116,139,0.12)]
            "
          >
            <div className="h-full w-full overflow-hidden rounded-[1.15rem]">
              <img
                src={study.image}
                alt={study.title}
                className="
                  h-full w-full object-cover
                  transition-transform duration-500
                  hover:scale-[1.02]
                "
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Strategic Analysis */}
          <div className="mb-8 space-y-6 text-sm text-slate-600">

            {/* Context */}
            <div>
              <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                Context &amp; Strategic Challenge
              </h3>

              <div
                className="
                  rounded-[1.25rem]
                  border border-white/80
                  border-l-4 border-l-blue-500
                  bg-gradient-to-br from-blue-50/65 via-white/45 to-white/30
                  p-5
                  text-sm leading-relaxed text-slate-700
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-2px_-2px_6px_rgba(148,163,184,0.08),0_8px_22px_rgba(100,116,139,0.06)]
                  backdrop-blur-xl
                  sm:text-base
                "
              >
                {study.problem}
              </div>
            </div>

            {/* Solution */}
            <div>
              <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                Solution &amp; Execution Framework
              </h3>

              <div
                className="
                  rounded-[1.25rem]
                  border border-white/70
                  bg-white/35
                  p-5
                  leading-relaxed text-slate-600
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.85),inset_-2px_-2px_6px_rgba(148,163,184,0.08)]
                "
              >
                {study.solution}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                Key Strategic Deliverables
              </h3>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {study.highlights.map(function (item, idx) {
                  return (
                    <div
                      key={idx}
                      className="
                        group flex items-start gap-3
                        rounded-xl
                        border border-white/80
                        bg-white/50
                        p-3.5
                        text-xs font-medium text-slate-700
                        shadow-[inset_2px_2px_5px_rgba(255,255,255,0.9),inset_-2px_-2px_5px_rgba(148,163,184,0.10),0_6px_15px_rgba(100,116,139,0.05)]
                        transition-all duration-200
                        hover:-translate-y-0.5
                        hover:bg-white/70
                      "
                    >
                      <span
                        className="
                          flex h-6 w-6 shrink-0 items-center justify-center
                          rounded-full
                          bg-blue-50
                          shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(59,130,246,0.10)]
                        "
                      >
                        <Check className="h-3.5 w-3.5 text-blue-600" />
                      </span>

                      <span className="pt-1">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div
            className="
              flex flex-col gap-4
              rounded-[1.5rem]
              border border-white/80
              bg-white/45
              p-4
              shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-3px_-3px_7px_rgba(148,163,184,0.10),0_10px_25px_rgba(100,116,139,0.06)]
              sm:flex-row sm:items-center sm:justify-between
              sm:p-5
            "
          >
            <div className="text-xs leading-relaxed text-slate-500">
              Discuss a similar growth implementation for your brand
            </div>

            <button
              onClick={function () {
                onConsultClick(study.title);
              }}
              className="
                group inline-flex items-center justify-center gap-2
                rounded-full
                border border-slate-700/20
                bg-slate-900
                px-5 py-3
                text-xs font-bold text-white
                shadow-[inset_2px_2px_4px_rgba(255,255,255,0.08),inset_-2px_-2px_5px_rgba(0,0,0,0.35),0_10px_22px_rgba(15,23,42,0.20)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-slate-800
                hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,0.10),inset_-2px_-2px_6px_rgba(0,0,0,0.35),0_14px_28px_rgba(15,23,42,0.25)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500/40
              "
            >
              <span>Request Strategy Blueprint</span>

              <span
                className="
                  flex h-6 w-6 items-center justify-center
                  rounded-full bg-white/10
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                "
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}