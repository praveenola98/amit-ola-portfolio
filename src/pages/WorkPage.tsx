import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ContactActionBlock from '../components/common/ContactActionBlock';
import CaseStudyModal from '../components/CaseStudyModal';
import ServiceActionModal from '../components/common/ServiceActionModal';

import { CASE_STUDIES } from '../data/portfolioData';
import type { CaseStudy } from '../types/portfolio';

export default function WorkPage() {
  const [selectedCase, setSelectedCase] =
    useState<CaseStudy | null>(null);

  const [activeCategory, setActiveCategory] =
    useState<string>('all');

  const [actionModalOpen, setActionModalOpen] =
    useState(false);

  const [targetServiceName, setTargetServiceName] =
    useState('');

  const categories = [
    {
      id: 'all',
      label: 'All Frameworks',
    },
    {
      id: 'seo',
      label: 'SEO & Search',
    },
    {
      id: 'performance',
      label: 'Meta Ads',
    },
    {
      id: 'ecommerce',
      label: 'E-commerce',
    },
    {
      id: 'web',
      label: 'Web Design',
    },
  ];

  const filteredCases = CASE_STUDIES.filter(function (item) {
    if (activeCategory === 'all') {
      return true;
    }

    if (activeCategory === 'seo') {
      return item.id === 'case-seo';
    }

    if (activeCategory === 'performance') {
      return item.id === 'case-meta';
    }

    if (activeCategory === 'ecommerce') {
      return item.id === 'case-ecommerce';
    }

    if (activeCategory === 'web') {
      return item.id === 'case-web';
    }

    return true;
  });

  function handleCaseSelect(study: CaseStudy) {
    setSelectedCase(study);
  }

  function handleCaseClose() {
    setSelectedCase(null);
  }

  function handleConsultClick(title: string) {
    setSelectedCase(null);
    setTargetServiceName(
      `Case Study Consultation: ${title}`
    );
    setActionModalOpen(true);
  }

  function handleActionModalClose() {
    setActionModalOpen(false);
  }

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-[#f8f9ff]
        via-[#f3f5fb]
        to-[#eef0f8]
        pb-20
        pt-24
        text-slate-900
      "
    >
      <SEOHead
        title="Case Studies & Work | Amit Ola – Digital Marketing Portfolio"
        description="Explore Amit Ola's digital marketing and SEO execution case studies covering organic search architecture, Meta Ads acquisition, e-commerce catalog growth, and CRO."
        canonicalPath="/work"
        breadcrumbs={[
          {
            name: 'Work & Case Studies',
            url: '/work',
          },
        ]}
      />

      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-60
          top-0
          h-[36rem]
          w-[36rem]
          rounded-full
          bg-blue-200/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-60
          top-[22%]
          h-[40rem]
          w-[40rem]
          rounded-full
          bg-violet-200/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[5%]
          left-[35%]
          h-80
          w-80
          rounded-full
          bg-indigo-100/30
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">

        {/* =====================================================
            BREADCRUMBS
        ====================================================== */}

        <div className="mb-10">
          <Breadcrumbs
            items={[
              {
                name: 'Work / Case Studies',
                url: '/work',
              },
            ]}
          />
        </div>

        {/* =====================================================
            HERO
        ====================================================== */}

        <div
          className="
            mb-14
            flex
            flex-col
            gap-7
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div className="max-w-3xl">

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-100/80
                bg-blue-50/65
                px-4
                py-2
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.14em]
                text-blue-600
                shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(59,130,246,0.07),0_6px_15px_rgba(59,130,246,0.05)]
                backdrop-blur-xl
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-blue-500
                  shadow-[0_0_8px_rgba(59,130,246,0.35)]
                "
              />

              Case Studies &amp; Documented Wins
            </div>

            <h1
              className="
                text-3xl
                font-extrabold
                leading-[1.06]
                tracking-[-0.045em]
                text-slate-900
                sm:text-5xl
                lg:text-6xl
              "
            >
              Selected client work
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
                &amp; growth frameworks.
              </span>
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-relaxed
                text-slate-500
              "
            >
              Documented campaign interventions, problem-solving
              methodologies, and technical search optimizations.
            </p>
          </div>

          {/* =================================================
              FILTER TABS
          ================================================== */}

          <div
            className="
              flex
              max-w-full
              items-center
              gap-1.5
              overflow-x-auto
              rounded-[1.25rem]
              border
              border-white/80
              bg-white/45
              p-1.5
              shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.07),0_10px_25px_rgba(100,116,139,0.06)]
              backdrop-blur-xl
            "
          >
            {categories.map(function (cat) {
              const isActive =
                activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={function () {
                    setActiveCategory(cat.id);
                  }}
                  className={`
                    whitespace-nowrap
                    rounded-[0.85rem]
                    px-3.5
                    py-2
                    text-[10px]
                    font-extrabold
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? `
                          bg-gradient-to-r
                          from-blue-600
                          to-indigo-600
                          text-white
                          shadow-[0_7px_16px_rgba(37,99,235,0.18)]
                        `
                        : `
                          text-slate-500
                          hover:bg-white/70
                          hover:text-slate-900
                        `
                    }
                  `}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CASE STUDIES GRID
        ====================================================== */}

        <div
          className="
            mb-20
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
          "
        >
          {filteredCases.map(function (study) {
            return (
              <article
                key={study.id}
                onClick={function () {
                  handleCaseSelect(study);
                }}
                className="
                  group
                  flex
                  cursor-pointer
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-white/80
                  bg-white/45
                  shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.08),0_20px_45px_rgba(100,116,139,0.08)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-200/80
                  hover:bg-white/55
                  hover:shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.10),0_28px_55px_rgba(59,130,246,0.12)]
                "
              >
                <div>

                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <div
                    className="
                      relative
                      aspect-[16/9]
                      overflow-hidden
                      rounded-t-[1.75rem]
                      border-b
                      border-white/80
                      bg-slate-100
                    "
                  >
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

                    {/* Image overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-slate-900/15
                        via-transparent
                        to-transparent
                      "
                    />

                    {/* Category */}
                    <div
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        border
                        border-white/80
                        bg-white/75
                        px-3
                        py-1.5
                        text-[9px]
                        font-extrabold
                        uppercase
                        tracking-[0.06em]
                        text-slate-700
                        shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),0_8px_18px_rgba(15,23,42,0.08)]
                        backdrop-blur-xl
                      "
                    >
                      {study.category}
                    </div>

                    {/* Open icon */}
                    <div
                      className="
                        absolute
                        right-4
                        top-4
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/80
                        bg-white/70
                        text-slate-600
                        opacity-0
                        shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),0_8px_18px_rgba(15,23,42,0.08)]
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        group-hover:opacity-100
                      "
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="p-6 sm:p-8">

                    <h2
                      className="
                        mb-4
                        text-xl
                        font-extrabold
                        leading-snug
                        tracking-[-0.025em]
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover:text-blue-600
                        sm:text-2xl
                      "
                    >
                      {study.title}
                    </h2>

                    <div className="mb-6 space-y-4">

                      {/* Challenge */}
                      <div
                        className="
                          rounded-[1rem]
                          border
                          border-white/70
                          bg-slate-50/55
                          p-4
                          shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.06)]
                        "
                      >
                        <span
                          className="
                            mb-1.5
                            block
                            text-[9px]
                            font-extrabold
                            uppercase
                            tracking-[0.1em]
                            text-slate-400
                          "
                        >
                          Challenge
                        </span>

                        <p
                          className="
                            text-xs
                            leading-relaxed
                            text-slate-500
                            sm:text-sm
                          "
                        >
                          {study.problem}
                        </p>
                      </div>

                      {/* Approach */}
                      <div
                        className="
                          rounded-[1rem]
                          border
                          border-blue-100/70
                          bg-blue-50/45
                          p-4
                          shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(59,130,246,0.05)]
                        "
                      >
                        <span
                          className="
                            mb-1.5
                            block
                            text-[9px]
                            font-extrabold
                            uppercase
                            tracking-[0.1em]
                            text-blue-600
                          "
                        >
                          Approach &amp; Execution
                        </span>

                        <p
                          className="
                            text-xs
                            leading-relaxed
                            text-slate-500
                            sm:text-sm
                          "
                        >
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Disciplines */}
                    <div
                      className="
                        border-t
                        border-white/80
                        pt-5
                      "
                    >
                      <div
                        className="
                          mb-3
                          text-[9px]
                          font-extrabold
                          uppercase
                          tracking-[0.1em]
                          text-slate-400
                        "
                      >
                        Disciplines Applied
                      </div>

                      <div className="flex flex-wrap gap-2">

                        {study.servicesProvided.map(function (
                          service,
                          sIdx
                        ) {
                          return (
                            <span
                              key={sIdx}
                              className="
                                rounded-full
                                border
                                border-white/80
                                bg-white/55
                                px-3
                                py-1.5
                                text-[10px]
                                font-bold
                                text-slate-600
                                shadow-[inset_1px_1px_3px_rgba(255,255,255,0.95),inset_-1px_-1px_3px_rgba(148,163,184,0.05)]
                              "
                            >
                              {service}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    CARD FOOTER
                ================================================== */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    border-t
                    border-white/80
                    bg-white/35
                    px-6
                    py-4
                    sm:px-8
                  "
                >
                  <div
                    className="
                      min-w-0
                      truncate
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.05em]
                      text-blue-600
                    "
                  >
                    Focus: {study.keyOutcomeFocus}
                  </div>

                  <div
                    className="
                      inline-flex
                      shrink-0
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-white/80
                      bg-white/55
                      px-3
                      py-2
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.04em]
                      text-slate-500
                      shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(148,163,184,0.05)]
                      transition-all
                      duration-300
                      group-hover:bg-blue-50/70
                      group-hover:text-blue-600
                    "
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            EMPTY STATE
        ====================================================== */}

        {filteredCases.length === 0 && (
          <div
            className="
              mb-20
              rounded-[1.75rem]
              border
              border-white/80
              bg-white/45
              p-12
              text-center
              shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.08),0_20px_45px_rgba(100,116,139,0.07)]
              backdrop-blur-xl
            "
          >
            <div className="text-sm font-bold text-slate-600">
              No case studies found for this framework.
            </div>

            <button
              type="button"
              onClick={function () {
                setActiveCategory('all');
              }}
              className="
                mt-4
                rounded-full
                bg-blue-50
                px-4
                py-2
                text-xs
                font-extrabold
                text-blue-600
              "
            >
              View All Frameworks
            </button>
          </div>
        )}

        {/* =====================================================
            GLOBAL ACTION
        ====================================================== */}

        <ContactActionBlock
          title="Ready to implement a proven execution framework?"
          subtitle="Tell me about your current revenue bottlenecks and customer acquisition cost. I will propose an actionable roadmap."
        />
      </div>

      {/* =====================================================
          CASE STUDY MODAL
      ====================================================== */}

      <CaseStudyModal
        study={selectedCase}
        onClose={handleCaseClose}
        onConsultClick={handleConsultClick}
      />

      {/* =====================================================
          SERVICE ACTION MODAL
      ====================================================== */}

      <ServiceActionModal
        isOpen={actionModalOpen}
        onClose={handleActionModalClose}
        serviceName={targetServiceName}
      />
    </div>
  );
}