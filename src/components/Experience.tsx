import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MapPin } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative overflow-hidden
        border-b border-white/70
        bg-gradient-to-br from-[#f8f9ff] via-[#f2f4fb] to-[#eef0f8]
        py-20 sm:py-28
      "
    >
      {/* Ambient Clay Glows */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-violet-200/25 blur-3xl" />

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
            Work Experience &amp; In-House Roles
          </div>

          <div
            className="
              rounded-full border border-white/70
              bg-white/50 px-4 py-2
              text-xs text-slate-500
              shadow-[inset_1px_1px_4px_rgba(255,255,255,0.8),0_3px_10px_rgba(100,116,139,0.06)]
            "
          >
            2+ Years Documented Marketing Leadership
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">

          {/* =====================================================
              LEFT COLUMN
          ====================================================== */}
          <div className="lg:col-span-4">

            <div
              className="
                rounded-[2rem]
                border border-white/80
                bg-white/40
                p-7
                shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.12),0_18px_45px_rgba(100,116,139,0.09)]
                backdrop-blur-2xl
                sm:p-8
              "
            >
              {/* Small Label */}
              <div
                className="
                  mb-6 inline-flex items-center gap-2
                  rounded-full border border-white/80
                  bg-white/60 px-4 py-2
                  text-[10px] font-bold uppercase tracking-[0.16em]
                  text-slate-500
                  shadow-[inset_1px_1px_4px_rgba(255,255,255,0.9),inset_-1px_-1px_4px_rgba(148,163,184,0.10)]
                "
              >
                <Briefcase className="h-3.5 w-3.5 text-blue-600" />
                Career Journey
              </div>

              <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Proven career
                <br />
                <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  experience.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                Before taking on select freelance clients, I led digital
                marketing, SEO, and social operations across four high-pace
                organizations.
              </p>

              {/* Experience Summary */}
              <div
                className="
                  mt-7 rounded-2xl
                  border border-white/80
                  bg-white/50 p-4
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-2px_-2px_6px_rgba(148,163,184,0.10),0_8px_20px_rgba(100,116,139,0.06)]
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-xl
                      bg-blue-50
                      shadow-[inset_2px_2px_5px_rgba(255,255,255,0.9),inset_-2px_-2px_5px_rgba(59,130,246,0.10)]
                    "
                  >
                    <Briefcase className="h-4 w-4 text-blue-600" />
                  </div>

                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      4 Organizations
                    </div>

                    <div className="text-xs text-slate-500">
                      Cross-functional marketing exposure
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/experience"
                className="
                  group mt-7 inline-flex items-center gap-3
                  rounded-full
                  border border-white/80
                  bg-white/65
                  px-5 py-3
                  text-sm font-bold text-blue-600
                  shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.12),0_8px_20px_rgba(59,130,246,0.08)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-white/85
                  hover:text-blue-700
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500/40
                "
              >
                <span>Explore Detailed Roles &amp; Wins</span>

                <span
                  className="
                    flex h-7 w-7 items-center justify-center
                    rounded-full
                    bg-blue-50
                    shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(59,130,246,0.10)]
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* =====================================================
              RIGHT COLUMN — TIMELINE
          ====================================================== */}
          <div className="lg:col-span-8">

            <div
              className="
                rounded-[2rem]
                border border-white/80
                bg-white/30
                p-5
                shadow-[inset_3px_3px_8px_rgba(255,255,255,0.9),inset_-4px_-4px_10px_rgba(148,163,184,0.10),0_18px_45px_rgba(100,116,139,0.07)]
                backdrop-blur-xl
                sm:p-8
              "
            >

              {/* Timeline */}
              <div className="relative space-y-7 sm:space-y-9">

                {/* Timeline Rail */}
                <div
                  className="
                    absolute bottom-4 left-[15px] top-4 w-[3px]
                    rounded-full
                    bg-gradient-to-b from-blue-300 via-indigo-200 to-violet-200
                    shadow-[inset_1px_0_2px_rgba(255,255,255,0.8),0_0_8px_rgba(59,130,246,0.10)]
                  "
                />

                {EXPERIENCE_ITEMS.map(function (item) {
                  return (
                    <div
                      key={item.id}
                      className="group relative pl-10 sm:pl-12"
                    >

                      {/* Timeline Node */}
                      <div
                        className="
                          absolute left-0 top-6 z-10
                          flex h-8 w-8 items-center justify-center
                          rounded-full
                          border border-white/90
                          bg-white/75
                          shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.14),0_6px_16px_rgba(100,116,139,0.12)]
                          transition-all duration-300
                          group-hover:scale-110
                          group-hover:bg-blue-50
                        "
                      >
                        <span
                          className="
                            h-2.5 w-2.5 rounded-full
                            bg-blue-500
                            shadow-[0_0_10px_rgba(59,130,246,0.35)]
                            transition-all duration-300
                            group-hover:scale-125
                          "
                        />
                      </div>

                      {/* Experience Card */}
                      <div
                        className="
                          rounded-[1.5rem]
                          border border-white/80
                          bg-white/55
                          p-5
                          shadow-[inset_3px_3px_7px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.11),0_12px_30px_rgba(100,116,139,0.08)]
                          backdrop-blur-xl
                          transition-all duration-300
                          hover:-translate-y-1
                          hover:bg-white/70
                          hover:shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_9px_rgba(148,163,184,0.13),0_20px_40px_rgba(59,130,246,0.09)]
                          sm:p-6
                        "
                      >

                        {/* Company + Role */}
                        <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                          <div>
                            <h3
                              className="
                                text-xl font-extrabold tracking-tight
                                text-slate-900
                                transition-colors duration-200
                                group-hover:text-blue-600
                              "
                            >
                              {item.company}
                            </h3>

                            {/* Role */}
                            <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                              <span>{item.role}</span>
                              <span className="text-slate-300">·</span>
                              <span className="inline-flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {item.location}
                              </span>
                            </div>
                          </div>

                          {/* Small Active/Experience Pill */}
                          <div
                            className="
                              w-fit shrink-0
                              rounded-full
                              border border-white/80
                              bg-white/55
                              px-3 py-1.5
                              text-[10px] font-bold uppercase tracking-wider
                              text-slate-500
                              shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(148,163,184,0.08)]
                            "
                          >
                            Experience
                          </div>
                        </div>

                        {/* Description */}
                        <p className="mb-4 text-sm leading-relaxed text-slate-600">
                          {item.description}
                        </p>

                        {/* Responsibilities */}
                        <div
                          className="
                            rounded-xl
                            border border-white/70
                            bg-slate-50/45
                            p-4
                            shadow-[inset_2px_2px_5px_rgba(255,255,255,0.85),inset_-2px_-2px_5px_rgba(148,163,184,0.07)]
                          "
                        >
                          <ul className="space-y-2 text-xs font-medium text-slate-700">
                            {item.responsibilities
                              .slice(0, 2)
                              .map(function (resp, rIdx) {
                                return (
                                  <li
                                    key={rIdx}
                                    className="flex items-start gap-2.5"
                                  >
                                    <span
                                      className="
                                        mt-1.5 h-1.5 w-1.5 shrink-0
                                        rounded-full
                                        bg-blue-500
                                        shadow-[0_0_6px_rgba(59,130,246,0.30)]
                                      "
                                    />

                                    <span className="leading-relaxed">
                                      {resp}
                                    </span>
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}