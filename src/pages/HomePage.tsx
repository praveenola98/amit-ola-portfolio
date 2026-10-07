import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';

import SEOHead from '../components/common/SEOHead';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import ServicesInteractiveList from '../components/ServicesInteractiveList';
import Work from '../components/Work';
import Process from '../components/Process';
import Contact from '../components/Contact';
import ServiceActionModal from '../components/common/ServiceActionModal';

import { GROWTH_PACKAGES } from '../data/portfolioData';

export default function HomePage() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    serviceName: string;
    price?: number | string;
    isPackage?: boolean;
  }>({
    isOpen: false,
    serviceName: '',
  });

  function handleOpenAction(
    serviceName: string,
    price?: number | string,
    isPackage = false
  ) {
    setModalState({
      isOpen: true,
      serviceName,
      price,
      isPackage,
    });
  }

  function handleCloseModal() {
    setModalState({
      ...modalState,
      isOpen: false,
    });
  }

  function handleHeroContact() {
    const element = document.getElementById('contact');

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  function handleHeroWork() {
    const element = document.getElementById('work');

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f3f5fb]
        text-slate-900
      "
    >
      <SEOHead
        title="Amit Ola | Freelance Digital Marketing Expert & SEO Specialist"
        description="Freelance digital marketing expert from Nawalgarh, Rajasthan helping businesses scale visibility, organic search rankings, and performance marketing."
        canonicalPath="/"
      />

      {/* =====================================================
          GLOBAL AMBIENT BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          -left-64
          top-20
          z-0
          h-[38rem]
          w-[38rem]
          rounded-full
          bg-blue-200/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          fixed
          -right-64
          top-[35%]
          z-0
          h-[40rem]
          w-[40rem]
          rounded-full
          bg-violet-200/20
          blur-3xl
        "
      />

      {/* =====================================================
          01. HERO
      ====================================================== */}

      <div className="relative z-10 pt-16">
        <Hero
          onCtaClick={handleHeroContact}
          onWorkClick={handleHeroWork}
        />
      </div>

      {/* =====================================================
          02. ABOUT
      ====================================================== */}

      <div className="relative z-10">
        <About />
      </div>

      {/* =====================================================
          03. CORE CAPABILITIES
      ====================================================== */}

      <section
        id="services"
        className="
          relative
          overflow-hidden
          border-b
          border-white/70
          bg-gradient-to-br
          from-[#f7f8fd]
          via-[#f1f3f9]
          to-[#eceff7]
          py-20
          sm:py-28
        "
      >
        {/* Section Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-10
            h-96
            w-96
            rounded-full
            bg-blue-200/20
            blur-3xl
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">

          {/* Section Header */}
          <div
            className="
              mb-12
              flex
              flex-wrap
              items-center
              justify-between
              gap-4
              rounded-[1.5rem]
              border
              border-white/80
              bg-white/40
              px-5
              py-4
              shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.06),0_12px_30px_rgba(100,116,139,0.06)]
              backdrop-blur-xl
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

              Services &amp; Transparent Rates
            </div>

            <Link
              to="/services"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/80
                bg-white/55
                px-4
                py-2.5
                text-xs
                font-bold
                text-blue-600
                shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(148,163,184,0.06)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white/80
              "
            >
              <span>
                Explore All 5 Disciplines &amp; Sprints
              </span>

              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Heading */}
          <div className="mb-12 max-w-3xl">

            <div
              className="
                mb-4
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.14em]
                text-slate-400
              "
            >
              Direct execution · No hidden layers
            </div>

            <h2
              className="
                text-3xl
                font-extrabold
                leading-[1.08]
                tracking-[-0.045em]
                text-slate-900
                sm:text-4xl
                lg:text-5xl
              "
            >
              Specialized capabilities
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
                with zero hidden fees.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-relaxed
                text-slate-500
                sm:text-base
              "
            >
              Hover over any capability to inspect scope deliverables,
              execution details, and starting investment tiers.
            </p>
          </div>

          {/* Interactive List */}
          <ServicesInteractiveList
            onSelectService={function (name, price) {
              handleOpenAction(name, price, false);
            }}
          />

          {/* Bottom Note */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              justify-between
              gap-4
              rounded-[1.25rem]
              border
              border-white/70
              bg-white/35
              px-5
              py-4
              text-[10px]
              font-bold
              uppercase
              tracking-[0.06em]
              text-slate-400
              shadow-[inset_1px_1px_5px_rgba(255,255,255,0.95),inset_-1px_-1px_5px_rgba(148,163,184,0.05)]
              backdrop-blur-xl
              sm:text-xs
            "
          >
            <span>
              Each capability includes direct technical execution by Amit Ola
            </span>

            <Link
              to="/services"
              className="
                font-extrabold
                text-blue-600
                transition-colors
                hover:text-indigo-600
              "
            >
              View all 5 disciplines + 6 sprint audits →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          04. CAREER EXPERIENCE
      ====================================================== */}

      <div className="relative z-10">
        <Experience />
      </div>

      {/* =====================================================
          05. GROWTH PACKAGES
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-white/70
          bg-gradient-to-br
          from-[#f8f9ff]
          via-[#f3f5fb]
          to-[#eef0f8]
          py-20
          sm:py-28
        "
      >
        {/* Ambient Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            bottom-10
            h-96
            w-96
            rounded-full
            bg-violet-200/20
            blur-3xl
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">

          {/* Header */}
          <div
            className="
              mb-12
              flex
              flex-wrap
              items-center
              justify-between
              gap-4
              rounded-[1.5rem]
              border
              border-white/80
              bg-white/40
              px-5
              py-4
              shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.06),0_12px_30px_rgba(100,116,139,0.06)]
              backdrop-blur-xl
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
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-indigo-500
                  shadow-[0_0_8px_rgba(99,102,241,0.35)]
                "
              />

              Monthly Retainers · End-to-End Growth
            </div>

            <Link
              to="/growth-packages"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/80
                bg-white/55
                px-4
                py-2.5
                text-xs
                font-bold
                text-blue-600
                shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(148,163,184,0.06)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white/80
              "
            >
              <span>Compare All Package Details</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Heading */}
          <div className="mb-12 max-w-3xl">

            <div
              className="
                mb-4
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.14em]
                text-slate-400
              "
            >
              Integrated acquisition systems
            </div>

            <h2
              className="
                text-3xl
                font-extrabold
                leading-[1.08]
                tracking-[-0.045em]
                text-slate-900
                sm:text-4xl
                lg:text-5xl
              "
            >
              All-in-one growth packages.
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
                Predictable monthly compounding.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-relaxed
                text-slate-500
                sm:text-base
              "
            >
              Multi-channel acquisition systems connecting search intent
              with performance advertising and conversion design.
            </p>

            <div
              className="
                mt-4
                inline-flex
                rounded-full
                border
                border-white/70
                bg-white/40
                px-3
                py-2
                text-[10px]
                font-semibold
                text-slate-400
                shadow-[inset_1px_1px_3px_rgba(255,255,255,0.95)]
              "
            >
              * Every package is customizable to your exact industry,
              margins, and target audience.
            </div>
          </div>

          {/* =================================================
              PACKAGE GRID
          ================================================== */}

          <div
            className="
              mb-12
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {GROWTH_PACKAGES.map(function (pkg, idx) {
              const isPopular = pkg.popular;

              return (
                <div
                  key={pkg.id}
                  className={`
                    group
                    relative
                    flex
                    flex-col
                    justify-between
                    overflow-hidden
                    rounded-[1.75rem]
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    sm:p-7
                    ${
                      isPopular
                        ? `
                          border
                          border-blue-200/90
                          bg-blue-50/60
                          shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(59,130,246,0.08),0_22px_45px_rgba(59,130,246,0.12)]
                        `
                        : `
                          border
                          border-white/80
                          bg-white/45
                          shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.08),0_18px_40px_rgba(100,116,139,0.08)]
                          hover:shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.10),0_25px_50px_rgba(100,116,139,0.12)]
                        `
                    }
                  `}
                >
                  {/* Popular Accent */}
                  {isPopular && (
                    <div
                      className="
                        absolute
                        left-0
                        right-0
                        top-0
                        h-1
                        bg-gradient-to-r
                        from-blue-500
                        via-indigo-500
                        to-violet-500
                      "
                    />
                  )}

                  <div>

                    {/* Package Label */}
                    <div className="mb-5 flex items-center justify-between gap-2">

                      <span
                        className="
                          rounded-full
                          bg-white/60
                          px-3
                          py-1.5
                          font-mono
                          text-[9px]
                          font-extrabold
                          uppercase
                          tracking-[0.08em]
                          text-slate-400
                          shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_3px_rgba(148,163,184,0.06)]
                        "
                      >
                        Package 0{idx + 1}
                      </span>

                      {isPopular && (
                        <span
                          className="
                            rounded-full
                            bg-gradient-to-r
                            from-blue-600
                            to-indigo-600
                            px-3
                            py-1.5
                            text-[9px]
                            font-extrabold
                            uppercase
                            tracking-[0.06em]
                            text-white
                            shadow-[0_7px_18px_rgba(37,99,235,0.20)]
                          "
                        >
                          Recommended
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <h3
                      className="
                        text-xl
                        font-extrabold
                        tracking-[-0.025em]
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover:text-blue-600
                      "
                    >
                      {pkg.name}
                    </h3>

                    {/* Tagline */}
                    <p
                      className="
                        mb-6
                        mt-1
                        min-h-[36px]
                        text-xs
                        font-medium
                        leading-relaxed
                        text-slate-500
                      "
                    >
                      {pkg.tagline}
                    </p>

                    {/* Price */}
                    <div
                      className="
                        mb-6
                        border-b
                        border-white/80
                        pb-6
                      "
                    >
                      <div
                        className="
                          rounded-[1rem]
                          bg-slate-50/60
                          px-4
                          py-3
                          shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.07)]
                        "
                      >
                        <div
                          className="
                            font-mono
                            text-3xl
                            font-extrabold
                            tabular-nums
                            tracking-[-0.04em]
                            text-slate-900
                          "
                        >
                          ₹{pkg.price.toLocaleString('en-IN')}
                        </div>

                        <div
                          className="
                            mt-0.5
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.08em]
                            text-slate-400
                          "
                        >
                          monthly retainer
                        </div>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <ul className="mb-8 space-y-2.5">

                      {pkg.deliverables.map(function (item, dIdx) {
                        return (
                          <li
                            key={dIdx}
                            className="
                              flex
                              items-start
                              gap-2.5
                              text-xs
                              font-medium
                              leading-relaxed
                              text-slate-600
                            "
                          >
                            <span
                              className="
                                mt-0.5
                                flex
                                h-5
                                w-5
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-emerald-50
                                text-emerald-600
                                shadow-[inset_1px_1px_3px_rgba(255,255,255,0.95),inset_-1px_-1px_3px_rgba(16,185,129,0.07)]
                              "
                            >
                              <Check className="h-3 w-3" />
                            </span>

                            <span>{item}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div
                    className="
                      mt-auto
                      border-t
                      border-white/80
                      pt-5
                    "
                  >
                    <button
                      type="button"
                      onClick={function () {
                        handleOpenAction(
                          pkg.name,
                          pkg.price,
                          true
                        );
                      }}
                      className={`
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-[1rem]
                        px-4
                        py-3
                        text-xs
                        font-extrabold
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        ${
                          isPopular
                            ? `
                              bg-gradient-to-r
                              from-blue-600
                              to-indigo-600
                              text-white
                              shadow-[0_10px_25px_rgba(37,99,235,0.20)]
                              hover:shadow-[0_15px_30px_rgba(37,99,235,0.28)]
                            `
                            : `
                              bg-slate-900
                              text-white
                              shadow-[inset_2px_2px_4px_rgba(255,255,255,0.08),inset_-2px_-2px_4px_rgba(0,0,0,0.25),0_8px_20px_rgba(15,23,42,0.12)]
                              hover:bg-blue-600
                            `
                        }
                      `}
                    >
                      Get This Package
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>

                    <Link
                      to={`/packages/${pkg.id}`}
                      className="
                        mt-2
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-1.5
                        rounded-[1rem]
                        border
                        border-white/70
                        bg-white/35
                        px-4
                        py-2.5
                        text-center
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.05em]
                        text-slate-500
                        shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(148,163,184,0.05)]
                        transition-all
                        duration-300
                        hover:bg-white/65
                        hover:text-blue-600
                      "
                    >
                      View Package Breakdown
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          06. SELECTED WORK
      ====================================================== */}

      <div className="relative z-10">
        <Work />
      </div>

      {/* =====================================================
          07. PROCESS
      ====================================================== */}

      <div className="relative z-10">
        <Process />
      </div>

      {/* =====================================================
          08. CONTACT
      ====================================================== */}

      <div className="relative z-10">
        <Contact />
      </div>

      {/* =====================================================
          SERVICE ACTION MODAL
      ====================================================== */}

      <ServiceActionModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        serviceName={modalState.serviceName}
        price={modalState.price}
        isPackage={modalState.isPackage}
      />
    </div>
  );
}