import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';
import type { CaseStudy } from '../types/portfolio';
import CaseStudyModal from './CaseStudyModal';
import ServiceActionModal from './common/ServiceActionModal';

export default function Work() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [targetServiceName, setTargetServiceName] = useState('');

  return (
    <section
      id="work"
      className="
        relative
        overflow-hidden
        border-b border-white/70
        bg-gradient-to-br
        from-[#f8f9ff]
        via-[#f3f5fb]
        to-[#eef0f8]
        py-20
        sm:py-28
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND GLOWS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          top-20
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-blue-200/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-52
          top-[35%]
          h-[34rem]
          w-[34rem]
          rounded-full
          bg-violet-200/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[35%]
          h-72
          w-72
          rounded-full
          bg-indigo-100/25
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div
          className="
            mb-12
            flex
            flex-wrap
            items-center
            justify-between
            gap-5
            rounded-[1.5rem]
            border border-white/80
            bg-white/45
            px-5
            py-4
            shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.08),0_10px_28px_rgba(100,116,139,0.06)]
            backdrop-blur-xl
            sm:px-6
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.13em]
              text-blue-600
              sm:text-xs
            "
          >
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.35)]" />
            <span>Selected Client Work &amp; Case Studies</span>
          </div>

          <Link
            to="/work"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-white/80
              bg-white/65
              px-4
              py-2.5
              text-xs
              font-bold
              text-slate-600
              shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.08),0_6px_14px_rgba(100,116,139,0.06)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-50
              hover:text-blue-600
              hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(59,130,246,0.08),0_10px_20px_rgba(59,130,246,0.10)]
            "
          >
            <span>View All Case Studies</span>

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>

        {/* =====================================================
            CASE STUDIES
        ====================================================== */}

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">

          {CASE_STUDIES.slice(0, 3).map(function (study, idx) {
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={study.id}
                onClick={function () {
                  setSelectedCase(study);
                }}
                className="
                  group
                  relative
                  grid
                  cursor-pointer
                  grid-cols-1
                  items-center
                  gap-7
                  overflow-hidden
                  rounded-[1.9rem]
                  border border-white/80
                  bg-white/45
                  p-4
                  shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.10),0_18px_45px_rgba(100,116,139,0.08)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/55
                  hover:shadow-[inset_3px_3px_9px_rgba(255,255,255,0.95),inset_-4px_-4px_11px_rgba(148,163,184,0.10),0_25px_55px_rgba(100,116,139,0.12)]
                  sm:p-6
                  lg:grid-cols-12
                  lg:gap-10
                  lg:p-7
                "
              >

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div
                  className={`
                    relative
                    overflow-hidden
                    rounded-[1.4rem]
                    border border-white/80
                    bg-slate-100/70
                    shadow-[inset_2px_2px_7px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.10),0_10px_25px_rgba(100,116,139,0.07)]
                    lg:col-span-7
                    ${isReversed ? 'lg:order-2' : 'lg:order-1'}
                  `}
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-[1.15rem]">

                    <img
                      src={study.image}
                      alt={study.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        ease-out
                        group-hover:scale-[1.035]
                      "
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                  </div>

                  {/* Image Overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-slate-900/10
                      via-transparent
                      to-white/10
                      opacity-70
                    "
                  />

                  {/* Category */}
                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      rounded-full
                      border border-white/80
                      bg-white/80
                      px-3
                      py-1.5
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.08em]
                      text-slate-700
                      shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(148,163,184,0.08),0_6px_14px_rgba(15,23,42,0.08)]
                      backdrop-blur-xl
                    "
                  >
                    {study.category}
                  </div>

                  {/* Case Number */}
                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      flex
                      h-9
                      min-w-9
                      items-center
                      justify-center
                      rounded-full
                      border border-white/70
                      bg-slate-900/65
                      px-2
                      text-[10px]
                      font-bold
                      text-white
                      shadow-lg
                      backdrop-blur-xl
                    "
                  >
                    0{idx + 1}
                  </div>
                </div>

                {/* =================================================
                    CASE INFORMATION
                ================================================== */}

                <div
                  className={`
                    lg:col-span-5
                    ${isReversed ? 'lg:order-1' : 'lg:order-2'}
                  `}
                >
                  {/* Label */}
                  <div
                    className="
                      mb-3
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-blue-50/70
                      px-3
                      py-1.5
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.12em]
                      text-blue-600
                      shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(59,130,246,0.06)]
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    Case Study 0{idx + 1}
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mb-4
                      text-2xl
                      font-extrabold
                      leading-tight
                      tracking-[-0.035em]
                      text-slate-900
                      transition-colors
                      duration-300
                      group-hover:text-blue-600
                      sm:text-3xl
                    "
                  >
                    {study.title}
                  </h3>

                  {/* Problem */}
                  <p
                    className="
                      mb-6
                      text-sm
                      leading-relaxed
                      text-slate-500
                      sm:text-base
                    "
                  >
                    {study.problem}
                  </p>

                  {/* Disciplines */}
                  <div
                    className="
                      mb-6
                      rounded-[1.25rem]
                      border border-white/80
                      bg-slate-50/65
                      p-4
                      shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.07)]
                    "
                  >
                    <div
                      className="
                        mb-3
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.12em]
                        text-slate-400
                      "
                    >
                      Disciplines Applied
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.servicesProvided.map(function (service, sIdx) {
                        return (
                          <span
                            key={sIdx}
                            className="
                              rounded-full
                              border border-white/80
                              bg-white/75
                              px-3
                              py-1.5
                              text-[10px]
                              font-bold
                              text-slate-600
                              shadow-[inset_1px_1px_3px_rgba(255,255,255,0.95),inset_-1px_-1px_3px_rgba(148,163,184,0.06)]
                            "
                          >
                            {service}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Read Breakdown */}
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border border-white/80
                      bg-white/60
                      px-4
                      py-2.5
                      text-xs
                      font-extrabold
                      text-blue-600
                      shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.08),0_7px_15px_rgba(59,130,246,0.06)]
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:bg-blue-50
                    "
                  >
                    <span>Read Full Breakdown</span>

                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          CASE STUDY MODAL
      ====================================================== */}

      <CaseStudyModal
        study={selectedCase}
        onClose={function () {
          setSelectedCase(null);
        }}
        onConsultClick={function (title) {
          setSelectedCase(null);
          setTargetServiceName(`Case Study Inquiry: ${title}`);
          setActionModalOpen(true);
        }}
      />

      {/* =====================================================
          SERVICE ACTION MODAL
      ====================================================== */}

      <ServiceActionModal
        isOpen={actionModalOpen}
        onClose={function () {
          setActionModalOpen(false);
        }}
        serviceName={targetServiceName}
      />
    </section>
  );
}