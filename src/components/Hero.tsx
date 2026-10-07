import {
  ArrowDown,
  ArrowUpRight,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onCtaClick: () => void;
  onWorkClick: () => void;
}

export default function Hero({ onCtaClick, onWorkClick }: HeroProps) {
  const waUrl = `https://wa.me/${PERSONAL_INFO.phoneClean}?text=${encodeURIComponent(
    "Hi Amit, I'd like to discuss a digital marketing / SEO project for my business.",
  )}`;

  const callUrl = `tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`;

  const emailUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    'Growth Consultation - Amit Ola',
  )}`;

  return (
    <section
      className="
        relative flex min-h-[90vh] flex-col justify-between
        overflow-hidden
        border-b border-white/70
        bg-gradient-to-br from-[#f8f9ff] via-[#f2f4fb] to-[#eef0f8]
        pt-24 pb-10
        sm:pt-28 sm:pb-14
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-blue-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-32 h-[32rem] w-[32rem] rounded-full bg-violet-200/30 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-100/20 blur-3xl" />

      {/* Subtle decorative circles */}
      <div
        className="
          pointer-events-none absolute
          right-[8%] top-[18%]
          h-24 w-24 rounded-full
          border border-white/50
          bg-white/10
          blur-[1px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          bottom-[20%] left-[6%]
          h-16 w-16 rounded-full
          border border-white/50
          bg-white/10
        "
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 sm:px-8">

        {/* =====================================================
            TOP STATUS BAR
        ====================================================== */}

        <div
          className="
            mb-10 flex flex-wrap items-center justify-between gap-4
            rounded-2xl
            border border-white/80
            bg-white/45
            px-5 py-3.5
            shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-3px_-3px_8px_rgba(148,163,184,0.10),0_10px_30px_rgba(100,116,139,0.07)]
            backdrop-blur-xl
            sm:mb-12
          "
        >
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-600">

            <span
              className="
                flex h-6 w-6 items-center justify-center
                rounded-full
                bg-emerald-50
                shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(16,185,129,0.10)]
              "
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.45)]" />
            </span>

            <span className="font-bold text-slate-900">
              Amit Ola
            </span>

            <span className="text-slate-300">|</span>

            <span>
              Freelance Digital Marketing &amp; SEO Specialist
            </span>
          </div>

          <div
            className="
              flex items-center gap-2
              rounded-full
              border border-white/70
              bg-white/45
              px-3.5 py-2
              text-xs text-slate-500
              shadow-[inset_1px_1px_3px_rgba(255,255,255,0.85),inset_-1px_-1px_3px_rgba(148,163,184,0.08)]
            "
          >
            <MapPin className="h-3.5 w-3.5 text-blue-600" />

            <span>
              Nawalgarh, Rajasthan · Available for new projects
            </span>
          </div>
        </div>

        {/* =====================================================
            MAIN HERO GRID
        ====================================================== */}

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">

          {/* =================================================
              LEFT — HEADLINE
          ================================================== */}

          <div className="lg:col-span-7">

            {/* Eyebrow */}
            <div
              className="
                mb-6 inline-flex items-center gap-2
                rounded-full
                border border-blue-100/80
                bg-blue-50/65
                px-4 py-2
                text-xs font-bold
                text-blue-700
                shadow-[inset_1px_1px_4px_rgba(255,255,255,0.9),inset_-1px_-1px_4px_rgba(59,130,246,0.08),0_5px_15px_rgba(59,130,246,0.06)]
                backdrop-blur-xl
              "
            >
              <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.35)]" />

              <span>Results-Driven Digital Marketing</span>
            </div>

            {/* Main Heading */}
            <h1
              className="
                max-w-4xl
                text-4xl font-extrabold
                leading-[1.05]
                tracking-[-0.035em]
                text-slate-900
                sm:text-5xl
                lg:text-[64px]
              "
            >
              Turning digital attention
              <br className="hidden sm:inline" />

              <span
                className="
                  mt-2 block
                  bg-gradient-to-r
                  from-blue-600
                  via-indigo-600
                  to-violet-600
                  bg-clip-text
                  text-transparent
                "
              >
                into real business revenue.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-7 max-w-xl
                text-base leading-relaxed
                text-slate-600
                sm:text-lg
              "
            >
              I help ambitious businesses get discovered on Google, acquire
              high-converting leads through targeted Meta ads, and scale
              online revenue with clear, transparent execution.
            </p>

            {/* =================================================
                PRIMARY CTAs
            ================================================== */}

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">

              {/* Primary CTA */}
              <button
                onClick={onCtaClick}
                className="
                  group inline-flex items-center gap-3
                  rounded-full
                  border border-blue-400/20
                  bg-gradient-to-r from-blue-600 to-indigo-600
                  px-6 py-3.5
                  text-sm font-bold text-white
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.18),inset_-3px_-3px_7px_rgba(30,64,175,0.30),0_12px_28px_rgba(37,99,235,0.20)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:from-blue-500
                  hover:to-indigo-500
                  hover:shadow-[inset_2px_2px_7px_rgba(255,255,255,0.20),inset_-3px_-3px_8px_rgba(30,64,175,0.30),0_18px_35px_rgba(37,99,235,0.24)]
                  active:translate-y-0
                  focus-visible:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-blue-500/20
                "
              >
                <span>Let&apos;s Grow Your Business</span>

                <span
                  className="
                    flex h-7 w-7 items-center justify-center
                    rounded-full
                    bg-white/10
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onWorkClick}
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-white/80
                  bg-white/60
                  px-6 py-3.5
                  text-sm font-bold text-slate-700
                  shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.11),0_8px_20px_rgba(100,116,139,0.07)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-white/80
                  hover:text-blue-600
                  hover:shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_7px_rgba(148,163,184,0.12),0_14px_28px_rgba(100,116,139,0.10)]
                  focus-visible:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-blue-500/10
                "
              >
                <span>View Case Studies</span>
              </button>
            </div>

            {/* =================================================
                DIRECT CONTACT CLAY BAR
            ================================================== */}

            <div
              className="
                mt-8 max-w-xl
                rounded-[1.5rem]
                border border-white/80
                bg-white/45
                p-4
                shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-3px_-3px_8px_rgba(148,163,184,0.10),0_12px_30px_rgba(100,116,139,0.07)]
                backdrop-blur-xl
              "
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div className="text-xs text-slate-500">
                  <span className="font-bold text-slate-900">
                    Direct Access:
                  </span>{' '}
                  Fast response within 2 hours
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs">

                  {/* WhatsApp */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-1.5
                      rounded-full
                      bg-emerald-50/70
                      px-3 py-1.5
                      font-bold text-emerald-600
                      shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(16,185,129,0.08)]
                      transition-all duration-200
                      hover:-translate-y-0.5
                      hover:bg-emerald-100/70
                    "
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <span className="text-slate-300">·</span>

                  {/* Phone */}
                  <a
                    href={callUrl}
                    className="
                      inline-flex items-center gap-1.5
                      font-medium text-slate-600
                      transition-colors
                      hover:text-blue-600
                    "
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </a>

                  <span className="text-slate-300">·</span>

                  {/* Email */}
                  <a
                    href={emailUrl}
                    className="
                      inline-flex items-center gap-1.5
                      font-medium text-slate-600
                      transition-colors
                      hover:text-blue-600
                    "
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — PORTRAIT
          ================================================== */}

          <div className="flex flex-col items-center lg:col-span-5 lg:items-end">

            <div
              className="
                relative w-full max-w-[400px]
                rounded-[2rem]
                border border-white/80
                bg-white/45
                p-3
                shadow-[inset_3px_3px_9px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.13),0_25px_60px_rgba(100,116,139,0.13)]
                backdrop-blur-2xl
                sm:max-w-[430px]
              "
            >

              {/* Floating Top Badge */}
              <div
                className="
                  absolute -right-3 top-6 z-20
                  hidden items-center gap-2
                  rounded-full
                  border border-white/80
                  bg-white/75
                  px-4 py-2
                  text-[10px] font-bold uppercase
                  tracking-[0.12em]
                  text-slate-600
                  shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.12),0_10px_25px_rgba(100,116,139,0.12)]
                  backdrop-blur-xl
                  sm:flex
                "
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.40)]" />
                Available
              </div>

              {/* =================================================
                  PHOTO FRAME
              ================================================== */}

              <div
                className="
                  relative
                  aspect-[3/4]
                  overflow-hidden
                  rounded-[1.5rem]
                  border border-white/70
                  bg-slate-100
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.75),inset_-3px_-3px_7px_rgba(100,116,139,0.12)]
                "
              >
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Amit Ola - Freelance Digital Marketing Expert and SEO Specialist"
                  className="
                    h-full w-full
                    object-cover object-top
                    transition-transform duration-700
                    hover:scale-[1.025]
                  "
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Soft Image Overlay */}
                <div
                  className="
                    absolute inset-x-0 bottom-0
                    bg-gradient-to-t
                    from-slate-950/90
                    via-slate-950/60
                    to-transparent
                    p-5 pt-20
                    text-white
                  "
                >
                  <div className="flex items-center justify-between gap-3">

                    <span className="text-base font-extrabold">
                      Amit Ola
                    </span>

                    <span
                      className="
                        rounded-full
                        border border-emerald-400/20
                        bg-emerald-950/60
                        px-3 py-1
                        text-[10px] font-bold
                        text-emerald-300
                        shadow-[inset_1px_1px_3px_rgba(255,255,255,0.08)]
                      "
                    >
                      2+ Years Exp
                    </span>
                  </div>

                  <div className="mt-1 text-xs text-slate-300">
                    Digital Marketing &amp; SEO Specialist · Nawalgarh, RJ
                  </div>

                  <div
                    className="
                      mt-3 border-t border-white/10
                      pt-3
                      text-[10px]
                      leading-relaxed
                      text-slate-400
                    "
                  >
                    Ubgot Academy · Brainosys · DTC Capital · A2B Software
                  </div>
                </div>
              </div>

              {/* =================================================
                  WHATSAPP BUTTON
              ================================================== */}

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group mt-3 flex w-full
                  items-center justify-between
                  rounded-2xl
                  border border-emerald-400/20
                  bg-emerald-500
                  px-4 py-3
                  text-xs font-bold text-white
                  shadow-[inset_2px_2px_5px_rgba(255,255,255,0.20),inset_-2px_-2px_5px_rgba(0,0,0,0.12),0_10px_24px_rgba(16,185,129,0.18)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-emerald-600
                  hover:shadow-[inset_2px_2px_6px_rgba(255,255,255,0.20),inset_-2px_-2px_6px_rgba(0,0,0,0.14),0_15px_30px_rgba(16,185,129,0.22)]
                "
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Chat directly on WhatsApp</span>
                </span>

                <span
                  className="
                    rounded-full
                    bg-white/15
                    px-2.5 py-1
                    text-[9px]
                    uppercase
                    tracking-[0.12em]
                    shadow-[inset_1px_1px_2px_rgba(255,255,255,0.10)]
                  "
                >
                  Online
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL CUE
      ====================================================== */}

      <div
        className="
          relative z-10 mx-auto mt-10 flex w-full
          max-w-7xl items-center justify-between
          px-6 text-xs text-slate-500
          sm:px-8
        "
      >
        <span className="font-medium">
          Explore Services &amp; Transparent Pricing Below
        </span>

        <div
          className="
            flex h-9 w-9 items-center justify-center
            rounded-full
            border border-white/80
            bg-white/50
            shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(148,163,184,0.10),0_6px_15px_rgba(100,116,139,0.06)]
          "
        >
          <ArrowDown className="h-4 w-4 animate-bounce text-blue-500" />
        </div>
      </div>
    </section>
  );
}