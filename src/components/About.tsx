import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const metrics = [
    { value: '2+', label: 'Years Experience', note: 'SEO & Performance Operations' },
    { value: '4', label: 'Companies & Agencies', note: 'Ubgot, Brainosys, DTC, A2B' },
    { value: '5+', label: 'Core Disciplines', note: 'Search, Ads, Web, Social, E-comm' },
    { value: '100%', label: 'Direct Execution', note: 'No account managers or junior handoffs' },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/70 bg-gradient-to-br from-[#f8f9ff] via-[#f2f4fb] to-[#eef0f8] py-20 sm:py-28"
    >
      {/* Soft background clay blobs */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">

        {/* Section Header */}
        <div
          className="
            mb-12 flex flex-wrap items-center justify-between gap-4
            rounded-2xl border border-white/80
            bg-white/45 px-5 py-4
            shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-3px_-3px_8px_rgba(148,163,184,0.12),0_10px_30px_rgba(100,116,139,0.08)]
            backdrop-blur-xl
            sm:mb-14
          "
        >
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            About Amit Ola · Professional Background
          </div>

          <div className="rounded-full border border-white/70 bg-white/50 px-4 py-2 text-xs text-slate-500 shadow-[inset_1px_1px_4px_rgba(255,255,255,0.8),0_3px_10px_rgba(100,116,139,0.06)]">
            Nawalgarh, Rajasthan · Worldwide Client Support
          </div>
        </div>

        {/* Main Clay Spread */}
        <div
          className="
            mb-16 grid grid-cols-1 items-start gap-10
            rounded-[2rem] border border-white/80
            bg-white/35 p-6
            shadow-[inset_3px_3px_8px_rgba(255,255,255,0.9),inset_-4px_-4px_10px_rgba(148,163,184,0.12),0_20px_50px_rgba(100,116,139,0.10)]
            backdrop-blur-2xl
            sm:p-8
            lg:grid-cols-12 lg:gap-14 lg:p-10
          "
        >

          {/* Left: Statement */}
          <div className="lg:col-span-6">
            <div
              className="
                rounded-[1.75rem] border border-white/80
                bg-gradient-to-br from-white/65 via-white/45 to-blue-50/35
                p-7 sm:p-9
                shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.10),0_15px_35px_rgba(100,116,139,0.08)]
                backdrop-blur-xl
              "
            >
              {/* Small clay badge */}
              <div
                className="
                  mb-7 inline-flex items-center gap-2 rounded-full
                  border border-white/80 bg-white/60 px-4 py-2
                  text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500
                  shadow-[inset_2px_2px_5px_rgba(255,255,255,0.9),inset_-2px_-2px_5px_rgba(148,163,184,0.10),0_5px_15px_rgba(100,116,139,0.06)]
                "
              >
                <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.45)]" />
                Professional Background
              </div>

              <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Marketing isn&apos;t about noise.
                <br />
                <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  It&apos;s about predictable business growth.
                </span>
              </h2>

              {/* Location Clay Pill */}
              <div
                className="
                  mt-8 flex items-start gap-3 rounded-2xl
                  border border-white/80 bg-white/50 px-4 py-4
                  text-xs leading-relaxed text-slate-600
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-2px_-2px_6px_rgba(148,163,184,0.10),0_8px_20px_rgba(100,116,139,0.06)]
                "
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />

                <span>
                  Headquartered in Nawalgarh, RJ · Working with businesses
                  across India &amp; globally
                </span>
              </div>
            </div>
          </div>

          {/* Right: Human Prose */}
          <div className="lg:col-span-6">
            <div
              className="
                rounded-[1.75rem] border border-white/80
                bg-white/45 p-7
                shadow-[inset_3px_3px_8px_rgba(255,255,255,0.9),inset_-4px_-4px_10px_rgba(148,163,184,0.10),0_15px_35px_rgba(100,116,139,0.07)]
                backdrop-blur-xl
                sm:p-8
              "
            >
              <div className="space-y-5 text-base leading-relaxed text-slate-600">

                <p>
                  I am a freelance digital marketer and SEO specialist. Over
                  the past 2+ years across four fast-paced companies and
                  marketing teams, I have seen first-hand why most marketing
                  campaigns fail: agencies sell fragmented tasks rather than
                  connected business results.
                </p>

                <p>
                  You don&apos;t need generic blog posts that rank for
                  keywords nobody buys from, or costly Meta ads leading to
                  unconvincing landing pages. My work connects high-intent
                  search visibility with focused performance advertising and
                  conversion-ready web design.
                </p>

                {/* Highlighted statement */}
                <div
                  className="
                    rounded-2xl border border-white/80
                    bg-gradient-to-br from-slate-50/80 to-white/40
                    p-5 text-sm text-slate-500
                    shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-2px_-2px_6px_rgba(148,163,184,0.10),0_8px_20px_rgba(100,116,139,0.05)]
                  "
                >
                  <div className="mb-2 flex items-center gap-2 font-semibold text-slate-700">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    Direct collaboration
                  </div>

                  When you partner with me, you work directly with Amit Ola.
                  No junior account managers, no automated weekly PDF dumps,
                  and no artificial promises.
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="
                      group inline-flex items-center gap-3 rounded-full
                      border border-white/80
                      bg-white/65 px-5 py-3
                      text-sm font-bold text-blue-600
                      shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.12),0_8px_20px_rgba(59,130,246,0.08)]
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-white/80
                      hover:text-blue-700
                      hover:shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_7px_rgba(148,163,184,0.12),0_12px_25px_rgba(59,130,246,0.12)]
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40
                    "
                  >
                    <span>Read Full Background &amp; Story</span>

                    <span
                      className="
                        flex h-7 w-7 items-center justify-center rounded-full
                        bg-blue-50
                        shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(59,130,246,0.12)]
                        transition-transform duration-300
                        group-hover:translate-x-0.5
                      "
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {metrics.map(function (m, idx) {
            return (
              <div
                key={idx}
                className="
                  group relative overflow-hidden
                  rounded-[1.5rem] border border-white/80
                  bg-gradient-to-br from-white/70 via-white/50 to-slate-100/40
                  p-5 sm:p-6
                  shadow-[inset_3px_3px_7px_rgba(255,255,255,0.95),inset_-4px_-4px_9px_rgba(148,163,184,0.12),0_12px_30px_rgba(100,116,139,0.09)]
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.14),0_20px_40px_rgba(59,130,246,0.10)]
                "
              >
                {/* Subtle shine */}
                <div
                  className="
                    pointer-events-none absolute -right-8 -top-8
                    h-20 w-20 rounded-full
                    bg-blue-100/30 blur-2xl
                    transition-transform duration-500
                    group-hover:scale-150
                  "
                />

                <div className="relative">
                  <div className="mb-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    {m.value}
                  </div>

                  <div className="mb-1 text-sm font-bold text-slate-800">
                    {m.label}
                  </div>

                  <div className="text-xs leading-relaxed text-slate-500">
                    {m.note}
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