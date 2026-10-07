import { useState } from 'react';
import { Calendar, ChevronRight, CheckCircle2 } from 'lucide-react';

import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ContactActionBlock from '../components/common/ContactActionBlock';

import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export default function ExperiencePage() {
  const [activeId, setActiveId] = useState<string>(
    EXPERIENCE_ITEMS[0].id
  );

  const activeItem =
    EXPERIENCE_ITEMS.find(function (item) {
      return item.id === activeId;
    }) || EXPERIENCE_ITEMS[0];

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
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-56
          top-10
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-blue-200/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-56
          top-[25%]
          h-[36rem]
          w-[36rem]
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

      <SEOHead
        title="Professional Experience | Amit Ola – Digital Marketing Expert"
        description="Explore Amit Ola's professional career experience at Ubgot Academy, Brainosys, DTC Capital, and A2B Software LLC across SEO, social media, and digital marketing."
        canonicalPath="/experience"
        breadcrumbs={[
          {
            name: 'Experience',
            url: '/experience',
          },
        ]}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">

        {/* =====================================================
            BREADCRUMBS
        ====================================================== */}

        <div className="mb-10">
          <Breadcrumbs
            items={[
              {
                name: 'Career Experience',
                url: '/experience',
              },
            ]}
          />
        </div>

        {/* =====================================================
            HERO
        ====================================================== */}

        <div className="mb-14 max-w-4xl">

          {/* Eyebrow */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-blue-100/80
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
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.35)]" />
            Track Record &amp; Tenure
          </div>

          <h1
            className="
              text-4xl
              font-extrabold
              leading-[1.05]
              tracking-[-0.045em]
              text-slate-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            Where I&apos;ve
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
              delivered value.
            </span>
          </h1>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-relaxed
              text-slate-500
              sm:text-lg
            "
          >
            Real, verifiable industry tenure managing organic search
            architecture, performance marketing funnels, and social
            distribution across software, agency, and client accounts.
          </p>
        </div>

        {/* =====================================================
            INTERACTIVE EXPERIENCE
        ====================================================== */}

        <div
          className="
            mb-20
            grid
            grid-cols-1
            items-start
            gap-7
            lg:grid-cols-12
            lg:gap-10
          "
        >

          {/* ===================================================
              COMPANY LIST
          ==================================================== */}

          <div className="space-y-3 lg:col-span-5">

            {EXPERIENCE_ITEMS.map(function (item, index) {
              const isActive = item.id === activeId;

              return (
                <div
                  key={item.id}
                  onClick={function () {
                    setActiveId(item.id);
                  }}
                  className={`
                    group
                    relative
                    cursor-pointer
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    p-5
                    text-left
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    sm:p-6
                    ${
                      isActive
                        ? `
                          border-blue-200/80
                          bg-blue-50/65
                          shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(59,130,246,0.08),0_16px_35px_rgba(59,130,246,0.10)]
                          hover:-translate-y-0.5
                        `
                        : `
                          border-white/80
                          bg-white/45
                          shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.09),0_10px_25px_rgba(100,116,139,0.06)]
                          hover:-translate-y-0.5
                          hover:bg-white/65
                          hover:shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.10),0_18px_35px_rgba(100,116,139,0.10)]
                        `
                    }
                  `}
                  role="button"
                  tabIndex={0}
                  onKeyDown={function (e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveId(item.id);
                    }
                  }}
                  aria-pressed={isActive}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <div
                      className="
                        absolute
                        bottom-4
                        left-0
                        top-4
                        w-1
                        rounded-r-full
                        bg-gradient-to-b
                        from-blue-500
                        to-indigo-500
                      "
                    />
                  )}

                  <div className="relative z-10">

                    {/* Top Row */}
                    <div className="mb-3 flex items-center justify-between">

                      <div className="flex min-w-0 items-center gap-2.5">

                        <span
                          className={`
                            flex
                            h-8
                            min-w-8
                            items-center
                            justify-center
                            rounded-full
                            px-2
                            font-mono
                            text-[10px]
                            font-extrabold
                            shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(148,163,184,0.06)]
                            ${
                              isActive
                                ? 'bg-blue-100/80 text-blue-600'
                                : 'bg-slate-100/70 text-blue-500'
                            }
                          `}
                        >
                          0{index + 1}.
                        </span>

                        <h2
                          className={`
                            truncate
                            text-base
                            font-extrabold
                            tracking-[-0.015em]
                            transition-colors
                            duration-300
                            sm:text-lg
                            ${
                              isActive
                                ? 'text-blue-600'
                                : 'text-slate-900 group-hover:text-blue-600'
                            }
                          `}
                        >
                          {item.company}
                        </h2>
                      </div>

                      <span
                        className={`
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/80
                          shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(148,163,184,0.07)]
                          ${
                            isActive
                              ? 'bg-blue-50 text-blue-600'
                              : 'bg-white/60 text-slate-400'
                          }
                        `}
                      >
                        <ChevronRight
                          className={`
                            h-4
                            w-4
                            transition-transform
                            duration-300
                            ${
                              isActive
                                ? 'translate-x-0.5'
                                : 'group-hover:translate-x-0.5'
                            }
                          `}
                        />
                      </span>
                    </div>

                    {/* Role + Location */}
                    <div
                      className="
                        flex
                        flex-wrap
                        items-center
                        gap-2
                        pl-10
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.06em]
                        text-slate-400
                        sm:text-xs
                      "
                    >
                      <span>{item.role}</span>
                      <span className="text-slate-300">·</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ===================================================
              ACTIVE ROLE DETAIL
          ==================================================== */}

          <div
            className="
              relative
              flex
              min-h-[430px]
              flex-col
              justify-between
              overflow-hidden
              rounded-[2rem]
              border border-white/80
              bg-white/45
              p-6
              shadow-[inset_3px_3px_9px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.10),0_22px_50px_rgba(100,116,139,0.09)]
              backdrop-blur-xl
              sm:p-8
              lg:col-span-7
              lg:p-10
            "
          >
            {/* Detail Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-28
                -top-28
                h-72
                w-72
                rounded-full
                bg-blue-200/20
                blur-3xl
              "
            />

            <div className="relative z-10">

              {/* Header */}
              <div
                className="
                  mb-6
                  flex
                  flex-wrap
                  items-start
                  justify-between
                  gap-4
                  border-b
                  border-white/80
                  pb-6
                "
              >
                <div>

                  <div
                    className="
                      mb-2
                      inline-flex
                      items-center
                      rounded-full
                      bg-blue-50/70
                      px-3
                      py-1.5
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.12em]
                      text-blue-600
                      shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95)]
                    "
                  >
                    Engagement Profile
                  </div>

                  <h3
                    className="
                      text-2xl
                      font-extrabold
                      tracking-[-0.03em]
                      text-slate-900
                      sm:text-3xl
                    "
                  >
                    {activeItem.role}
                  </h3>

                  <div className="mt-1 text-sm font-medium text-slate-400">
                    {activeItem.company} · {activeItem.location}
                  </div>
                </div>

                {/* Tenure */}
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border border-white/80
                    bg-slate-50/70
                    px-3.5
                    py-2
                    text-[10px]
                    font-bold
                    text-slate-500
                    shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(148,163,184,0.06)]
                  "
                >
                  <Calendar className="h-3.5 w-3.5 text-blue-500" />
                  <span>{activeItem.tenure}</span>
                </div>
              </div>

              {/* Description */}
              <div
                className="
                  mb-8
                  rounded-[1.25rem]
                  border border-white/80
                  bg-slate-50/55
                  p-5
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.07)]
                "
              >
                <p
                  className="
                    text-sm
                    leading-relaxed
                    text-slate-500
                    sm:text-base
                  "
                >
                  {activeItem.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div>

                <div
                  className="
                    mb-4
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.12em]
                    text-slate-400
                  "
                >
                  Documented Responsibilities &amp; Execution
                </div>

                <ul className="space-y-3">

                  {activeItem.responsibilities.map(function (
                    resp,
                    idx
                  ) {
                    return (
                      <li
                        key={idx}
                        className="
                          flex
                          items-start
                          gap-3
                          rounded-[1rem]
                          border border-white/70
                          bg-white/45
                          p-3
                          text-sm
                          leading-relaxed
                          text-slate-600
                          shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(148,163,184,0.06)]
                        "
                      >
                        <span
                          className="
                            flex
                            h-6
                            w-6
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-emerald-50
                            text-emerald-600
                            shadow-[inset_1px_1px_3px_rgba(255,255,255,0.95),inset_-1px_-1px_3px_rgba(16,185,129,0.06)]
                          "
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </span>

                        <span>{resp}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div
              className="
                relative
                z-10
                mt-8
                flex
                flex-wrap
                items-center
                justify-between
                gap-3
                border-t
                border-white/80
                pt-5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-slate-400
              "
            >
              <span>
                Verified In-House &amp; Agency Roles
              </span>

              <span
                className="
                  rounded-full
                  bg-slate-100/70
                  px-3
                  py-1.5
                  text-slate-700
                  shadow-[inset_1px_1px_3px_rgba(255,255,255,0.95)]
                "
              >
                Amit Ola
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            GLOBAL ACTION
        ====================================================== */}

        <ContactActionBlock
          title="Looking to put this experience to work?"
          subtitle="Direct communication with Amit Ola for your digital campaigns and SEO initiatives."
        />
      </div>
    </div>
  );
}