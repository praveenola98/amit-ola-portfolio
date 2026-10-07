import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO, MAIN_SERVICES } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      className="
        relative overflow-hidden
        border-t border-white/80
        bg-gradient-to-br from-[#eef0f8] via-[#f3f5fb] to-[#f8f9ff]
        py-16 sm:py-20
        text-slate-600
      "
    >
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-violet-200/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">

        {/* =====================================================
            MAIN FOOTER GRID
        ====================================================== */}
        <div className="grid grid-cols-1 gap-5 pb-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">

          {/* =================================================
              BRAND
          ================================================== */}
          <div className="lg:col-span-5">
            <div
              className="
                h-full rounded-[2rem]
                border border-white/80
                bg-white/45
                p-7
                shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.12),0_18px_45px_rgba(100,116,139,0.09)]
                backdrop-blur-2xl
                sm:p-8
              "
            >
              {/* Logo */}
              <a
                href="#"
                className="
                  inline-flex items-center
                  rounded-2xl
                  border border-white/80
                  bg-white/65
                  px-5 py-3
                  text-xl font-extrabold
                  tracking-tight text-slate-900
                  shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.12),0_8px_20px_rgba(100,116,139,0.07)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:text-blue-600
                "
              >
                AMIT OLA
              </a>

              {/* Tagline */}
              <div
                className="
                  mt-5 inline-flex rounded-full
                  border border-blue-100/80
                  bg-blue-50/65
                  px-3.5 py-1.5
                  text-[10px] font-bold uppercase
                  tracking-[0.14em] text-blue-600
                  shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(59,130,246,0.08)]
                "
              >
                Freelance Digital Marketing Expert &amp; SEO Specialist
              </div>

              <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-600">
                Helping businesses build visibility, generate qualified leads
                and grow through SEO, performance marketing, and
                conversion-focused web architecture.
              </p>

              {/* Location */}
              <div
                className="
                  mt-6 inline-flex items-center gap-2
                  rounded-xl
                  border border-white/80
                  bg-white/50
                  px-4 py-3
                  text-xs font-medium text-slate-500
                  shadow-[inset_2px_2px_5px_rgba(255,255,255,0.9),inset_-2px_-2px_5px_rgba(148,163,184,0.08)]
                "
              >
                <MapPin className="h-3.5 w-3.5 text-blue-600" />
                <span>Nawalgarh, Rajasthan, India</span>
              </div>
            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================== */}
          <div className="lg:col-span-2">
            <div
              className="
                h-full rounded-[1.75rem]
                border border-white/80
                bg-white/40
                p-6
                shadow-[inset_3px_3px_7px_rgba(255,255,255,0.9),inset_-3px_-3px_8px_rgba(148,163,184,0.10),0_15px_35px_rgba(100,116,139,0.07)]
                backdrop-blur-xl
              "
            >
              <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                Navigation
              </div>

              <ul className="space-y-2">
                {[
                  ['About', '#about'],
                  ['Experience', '#experience'],
                  ['Services & Pricing', '#services'],
                  ['Growth Packages', '#packages'],
                  ['Case Studies', '#work'],
                  ['5-Step Process', '#process'],
                  ['Contact', '#contact'],
                ].map(function (item) {
                  return (
                    <li key={item[0]}>
                      <a
                        href={item[1]}
                        className="
                          group flex items-center gap-2
                          rounded-lg
                          px-3 py-2
                          text-xs sm:text-sm
                          text-slate-600
                          transition-all duration-200
                          hover:bg-white/60
                          hover:text-blue-600
                          hover:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(148,163,184,0.08)]
                        "
                      >
                        <span
                          className="
                            h-1.5 w-1.5 rounded-full
                            bg-slate-300
                            transition-colors
                            group-hover:bg-blue-500
                          "
                        />
                        {item[0]}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* =================================================
              SPECIALIZATIONS
          ================================================== */}
          <div className="lg:col-span-3">
            <div
              className="
                h-full rounded-[1.75rem]
                border border-white/80
                bg-white/40
                p-6
                shadow-[inset_3px_3px_7px_rgba(255,255,255,0.9),inset_-3px_-3px_8px_rgba(148,163,184,0.10),0_15px_35px_rgba(100,116,139,0.07)]
                backdrop-blur-xl
              "
            >
              <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                Specializations
              </div>

              <ul className="space-y-2">
                {MAIN_SERVICES.map(function (service) {
                  return (
                    <li key={service.id}>
                      <a
                        href="#services"
                        className="
                          group flex items-center gap-2
                          rounded-lg
                          px-3 py-2
                          text-xs sm:text-sm
                          text-slate-600
                          transition-all duration-200
                          hover:bg-white/60
                          hover:text-blue-600
                          hover:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(148,163,184,0.08)]
                        "
                      >
                        <span
                          className="
                            h-1.5 w-1.5 shrink-0 rounded-full
                            bg-blue-300
                            transition-all duration-200
                            group-hover:bg-blue-500
                            group-hover:scale-125
                          "
                        />

                        <span className="truncate">
                          {service.name}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}
          <div className="lg:col-span-2">
            <div
              className="
                h-full rounded-[1.75rem]
                border border-white/80
                bg-white/40
                p-6
                shadow-[inset_3px_3px_7px_rgba(255,255,255,0.9),inset_-3px_-3px_8px_rgba(148,163,184,0.10),0_15px_35px_rgba(100,116,139,0.07)]
                backdrop-blur-xl
              "
            >
              <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                Direct Contact
              </div>

              <div className="space-y-3">

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="
                    flex items-start gap-2
                    rounded-xl
                    border border-white/70
                    bg-white/45
                    p-3
                    text-xs font-semibold text-slate-700
                    shadow-[inset_1px_1px_4px_rgba(255,255,255,0.85),inset_-1px_-1px_4px_rgba(148,163,184,0.08)]
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:bg-white/70
                    hover:text-blue-600
                  "
                >
                  <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />

                  <span className="break-all">
                    {PERSONAL_INFO.phone}
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="
                    flex items-start gap-2
                    rounded-xl
                    border border-white/70
                    bg-white/45
                    p-3
                    text-xs font-semibold text-slate-700
                    shadow-[inset_1px_1px_4px_rgba(255,255,255,0.85),inset_-1px_-1px_4px_rgba(148,163,184,0.08)]
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:bg-white/70
                    hover:text-blue-600
                  "
                >
                  <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />

                  <span className="break-all">
                    {PERSONAL_INFO.email}
                  </span>
                </a>

                {/* Availability */}
                <div
                  className="
                    flex items-center gap-2
                    rounded-full
                    border border-emerald-100/80
                    bg-emerald-50/60
                    px-3 py-2
                    text-[10px] font-bold
                    text-emerald-600
                    shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(16,185,129,0.08)]
                  "
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  <span>Taking new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div
          className="
            flex flex-col items-center justify-between gap-4
            rounded-[1.5rem]
            border border-white/80
            bg-white/40
            p-4
            text-xs
            shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-3px_-3px_7px_rgba(148,163,184,0.10),0_10px_25px_rgba(100,116,139,0.07)]
            backdrop-blur-xl
            sm:flex-row
            sm:px-5
          "
        >

          <div className="text-center text-slate-500 sm:text-left">
            © {new Date().getFullYear()} Amit Ola. All rights reserved.
          </div>

          <div className="text-center italic text-slate-500">
            &ldquo;Built for growth. Designed with intent.&rdquo;
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="
              group inline-flex items-center gap-2
              rounded-full
              border border-white/80
              bg-white/60
              px-4 py-2.5
              font-semibold text-slate-600
              shadow-[inset_2px_2px_4px_rgba(255,255,255,0.95),inset_-2px_-2px_4px_rgba(148,163,184,0.10),0_6px_15px_rgba(100,116,139,0.07)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-white/80
              hover:text-blue-600
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500/40
            "
            aria-label="Back to top"
          >
            <span>Top</span>

            <span
              className="
                flex h-6 w-6 items-center justify-center
                rounded-full
                bg-blue-50
                shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(59,130,246,0.10)]
                transition-transform duration-300
                group-hover:-translate-y-0.5
              "
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}