import { useState, useEffect } from 'react';
import { MessageSquare, Phone, Mail, X } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function FloatingContactBar() {
  const [minimized, setMinimized] = useState(false);
  const [pageContext, setPageContext] = useState('Digital Marketing');

  useEffect(function () {
    const path = window.location.pathname;

    if (path.includes('seo')) {
      setPageContext('SEO');
    } else if (path.includes('web-design')) {
      setPageContext('Web Design');
    } else if (path.includes('ecommerce')) {
      setPageContext('E-commerce');
    } else if (path.includes('meta-ads')) {
      setPageContext('Meta Ads');
    } else if (path.includes('social-media')) {
      setPageContext('Social Media');
    } else if (path.includes('package')) {
      setPageContext('Growth Packages');
    } else {
      setPageContext('Digital Marketing');
    }
  }, []);

  const waMessage = encodeURIComponent(
    `Hi Amit, I'm reaching out from your website regarding ${pageContext}. I would like to discuss my business requirements.`
  );

  const waUrl = `https://wa.me/${PERSONAL_INFO.phoneClean}?text=${waMessage}`;

  const callUrl = `tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`;

  const emailUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `${pageContext} Inquiry - Amit Ola`
  )}`;

  return (
    <>
      {/* =========================
          MOBILE CONTACT BAR
      ========================== */}
      <div
        className="
          fixed bottom-0 left-0 right-0 z-50
          flex items-center gap-2
          border-t border-white/70
          bg-white/60
          px-2.5 py-2
          backdrop-blur-2xl
          shadow-[0_-8px_30px_rgba(15,23,42,0.10),inset_0_1px_2px_rgba(255,255,255,0.9)]
          md:hidden
        "
      >
        {/* WhatsApp */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group flex min-w-0 flex-1
            items-center justify-center gap-1.5
            rounded-2xl
            border border-white/80
            bg-emerald-500/10
            px-2 py-2.5
            text-xs font-bold
            text-emerald-700
            shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(16,185,129,0.08),0_4px_12px_rgba(15,23,42,0.05)]
            transition-all duration-200
            active:scale-95
          "
        >
          <MessageSquare className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href={callUrl}
          className="
            group flex min-w-0 flex-1
            items-center justify-center gap-1.5
            rounded-2xl
            border border-white/80
            bg-blue-500/10
            px-2 py-2.5
            text-xs font-bold
            text-blue-700
            shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(59,130,246,0.08),0_4px_12px_rgba(15,23,42,0.05)]
            transition-all duration-200
            active:scale-95
          "
        >
          <Phone className="h-3.5 w-3.5 shrink-0" />
          <span>Call</span>
        </a>

        {/* Email */}
        <a
          href={emailUrl}
          className="
            group flex min-w-0 flex-1
            items-center justify-center gap-1.5
            rounded-2xl
            border border-white/80
            bg-white/60
            px-2 py-2.5
            text-xs font-bold
            text-slate-700
            shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(148,163,184,0.10),0_4px_12px_rgba(15,23,42,0.05)]
            transition-all duration-200
            active:scale-95
          "
        >
          <Mail className="h-3.5 w-3.5 shrink-0" />
          <span>Email</span>
        </a>
      </div>

      {/* =========================
          DESKTOP FLOATING WIDGET
      ========================== */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        {minimized ? (
          <button
            onClick={function () {
              setMinimized(false);
            }}
            className="
              group flex items-center gap-2.5
              rounded-full
              border border-white/80
              bg-white/55
              px-4 py-3
              text-xs font-bold
              text-slate-800
              backdrop-blur-2xl
              shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.12),0_12px_30px_rgba(15,23,42,0.12)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-white/70
              hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,1),0_18px_40px_rgba(15,23,42,0.15)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500/40
            "
            aria-label="Open direct contact"
          >
            <span
              className="
                relative flex h-7 w-7 items-center justify-center
                rounded-full
                bg-emerald-500/10
              "
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
            </span>

            <span>Chat with Amit</span>
          </button>
        ) : (
          <div
            className="
              relative w-[min(360px,calc(100vw-2rem))]
              overflow-hidden
              rounded-[1.75rem]
              border border-white/75
              bg-white/55
              p-4
              backdrop-blur-2xl
              shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.12),0_20px_50px_rgba(15,23,42,0.14)]
            "
          >
            {/* Decorative glass glow */}
            <div
              className="
                pointer-events-none
                absolute -right-12 -top-12
                h-28 w-28
                rounded-full
                bg-blue-200/20
                blur-3xl
              "
              aria-hidden="true"
            />

            <div
              className="
                relative mb-3 flex items-center
                justify-between
                border-b border-white/60
                pb-3
              "
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <span
                  className="
                    flex h-7 w-7 shrink-0
                    items-center justify-center
                    rounded-full
                    bg-emerald-500/10
                  "
                >
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                </span>

                <div className="min-w-0">
                  <p className="truncate text-xs font-bold text-slate-800">
                    Direct Consultant Access
                  </p>

                  <p className="mt-0.5 truncate text-[10px] font-medium text-slate-500">
                    Available for {pageContext}
                  </p>
                </div>
              </div>

              <button
                onClick={function () {
                  setMinimized(true);
                }}
                className="
                  ml-2 flex h-7 w-7 shrink-0
                  items-center justify-center
                  rounded-xl
                  border border-white/60
                  bg-white/45
                  text-slate-400
                  shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),0_3px_8px_rgba(15,23,42,0.05)]
                  transition-all duration-200
                  hover:bg-white/70
                  hover:text-slate-700
                  active:scale-95
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-slate-400/40
                "
                aria-label="Minimize"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Action buttons */}
            <div className="relative grid grid-cols-[1fr_1fr_auto] gap-2">
              {/* WhatsApp */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex min-h-10
                  items-center justify-center gap-1.5
                  rounded-xl
                  border border-white/70
                  bg-emerald-500/10
                  px-2.5
                  text-[11px] font-bold
                  text-emerald-700
                  shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),0_4px_10px_rgba(15,23,42,0.05)]
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-emerald-500/15
                  active:translate-y-0
                "
              >
                <MessageSquare className="h-3.5 w-3.5 shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* Call */}
              <a
                href={callUrl}
                className="
                  inline-flex min-h-10
                  items-center justify-center gap-1.5
                  rounded-xl
                  border border-white/70
                  bg-blue-500/10
                  px-2.5
                  text-[11px] font-bold
                  text-blue-700
                  shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),0_4px_10px_rgba(15,23,42,0.05)]
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-blue-500/15
                  active:translate-y-0
                "
              >
                <Phone className="h-3.5 w-3.5 shrink-0" />
                <span>Call</span>
              </a>

              {/* Email */}
              <a
                href={emailUrl}
                className="
                  inline-flex min-h-10 w-10
                  items-center justify-center
                  rounded-xl
                  border border-white/70
                  bg-white/55
                  text-slate-600
                  shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),0_4px_10px_rgba(15,23,42,0.05)]
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-white/75
                  hover:text-blue-600
                  active:translate-y-0
                "
                title="Send Email"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}