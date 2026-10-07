import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';

import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ContactActionBlock from '../components/common/ContactActionBlock';
import ServiceActionModal from '../components/common/ServiceActionModal';

import { PERSONAL_INFO, EXPERIENCE_ITEMS } from '../data/portfolioData';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

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
          -left-52
          top-20
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
          -right-52
          top-[22%]
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
          bottom-[10%]
          left-[32%]
          h-80
          w-80
          rounded-full
          bg-indigo-100/30
          blur-3xl
        "
      />

      <SEOHead
        title="About Amit Ola | Freelance Digital Marketing Expert & SEO Specialist"
        description="Learn about Amit Ola, a freelance digital marketing consultant and SEO specialist based in Nawalgarh, Rajasthan with 2+ years of hands-on agency and brand experience."
        canonicalPath="/about"
        breadcrumbs={[
          {
            name: 'About',
            url: '/about',
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
                name: 'About Amit Ola',
                url: '/about',
              },
            ]}
          />
        </div>

        {/* =====================================================
            HERO / PROFILE
        ====================================================== */}

        <div className="mb-20 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">

          {/* ===================================================
              LEFT NARRATIVE
          ==================================================== */}

          <div className="lg:col-span-7">

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

              <span>
                Consultant Profile · Professional Biography
              </span>
            </div>

            {/* Heading */}
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
              Amit Ola.
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
                Growth consultant &amp;
                <br className="hidden sm:block" />
                SEO specialist.
              </span>
            </h1>

            {/* Narrative */}
            <div
              className="
                mt-7
                space-y-5
                text-base
                leading-relaxed
                text-slate-500
              "
            >
              <p>
                I am Amit Ola, a freelance digital marketing expert and SEO
                specialist based in Nawalgarh, Rajasthan. Over the past 2+
                years across four companies and agencies, I have operated at
                the intersection of technical search intent, performance
                advertising, and conversion-centered web architecture.
              </p>

              <p>
                Having served as Digital Marketing &amp; Meta Ads Expert at
                Ubgot Academy, SEO Executive &amp; Meta Ads Specialist at
                Brainosys, Social Media Manager at DTC Capital, and Digital
                Marketing Manager at A2B Software LLC, I bring verified,
                hands-on operational discipline to every campaign.
              </p>

              <div
                className="
                  rounded-[1.35rem]
                  border border-white/80
                  bg-white/45
                  p-5
                  text-sm
                  leading-relaxed
                  text-slate-500
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.08),0_10px_24px_rgba(100,116,139,0.05)]
                  backdrop-blur-xl
                "
              >
                I do not operate as an agency with junior hand-offs. I partner
                directly with founders and marketing heads who value
                transparent communication, realistic projections, and
                data-backed execution.
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mb-8 mt-8 flex flex-wrap items-center gap-3">

              <button
                onClick={function () {
                  setModalOpen(true);
                }}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-[1.1rem]
                  border border-blue-400/20
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600
                  px-6
                  py-3.5
                  text-sm
                  font-extrabold
                  text-white
                  shadow-[inset_2px_2px_5px_rgba(255,255,255,0.20),inset_-2px_-2px_5px_rgba(30,64,175,0.30),0_12px_25px_rgba(59,130,246,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:from-blue-500
                  hover:to-indigo-500
                "
              >
                <span>Work With Amit</span>

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
              </button>

              <Link
                to="/work"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-[1.1rem]
                  border border-white/80
                  bg-white/60
                  px-6
                  py-3.5
                  text-sm
                  font-extrabold
                  text-slate-700
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.08),0_8px_18px_rgba(100,116,139,0.06)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-white/80
                  hover:text-blue-600
                "
              >
                <span>View Case Studies</span>

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

            {/* Direct Contact */}
            <ContactActionBlock
              compact
              serviceContext="Direct Consultation"
              whatsappMessage="Hi Amit, I'd like to discuss working together on marketing for my business."
              emailSubject="Work With Amit - Marketing Inquiry"
            />
          </div>

          {/* ===================================================
              RIGHT PORTRAIT
          ==================================================== */}

          <div className="lg:col-span-5 lg:flex lg:justify-end">

            <div
              className="
                w-full
                max-w-[420px]
                rounded-[2rem]
                border border-white/80
                bg-white/45
                p-3
                shadow-[inset_3px_3px_9px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.10),0_22px_50px_rgba(100,116,139,0.10)]
                backdrop-blur-xl
              "
            >
              {/* Portrait */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border border-white/80
                  bg-slate-100/70
                  shadow-[inset_2px_2px_7px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.10)]
                "
              >
                <div className="aspect-[3/4] overflow-hidden">

                  <img
                    src={PERSONAL_INFO.portraitImage}
                    alt="Amit Ola - Digital Marketing & SEO Professional"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-top
                    "
                    loading="eager"
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
                    from-slate-900/15
                    via-transparent
                    to-white/10
                  "
                />

                {/* Availability Badge */}
                <div
                  className="
                    absolute
                    left-4
                    top-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border border-white/80
                    bg-white/80
                    px-3
                    py-2
                    text-[10px]
                    font-extrabold
                    text-slate-700
                    shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),0_7px_16px_rgba(15,23,42,0.08)]
                    backdrop-blur-xl
                  "
                >
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Available for Projects
                </div>
              </div>

              {/* Profile Metadata */}
              <div
                className="
                  mt-3
                  space-y-2
                  rounded-[1.25rem]
                  border border-white/80
                  bg-white/50
                  p-4
                  text-xs
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.07)]
                "
              >

                {/* Headquarters */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    border-b
                    border-white/80
                    pb-2
                  "
                >
                  <span className="font-medium text-slate-400">
                    Headquarters
                  </span>

                  <span className="text-right font-bold text-slate-800">
                    Nawalgarh, Rajasthan, India
                  </span>
                </div>

                {/* Experience */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    border-b
                    border-white/80
                    pb-2
                  "
                >
                  <span className="font-medium text-slate-400">
                    Experience
                  </span>

                  <span className="font-bold text-slate-800">
                    2+ Years (2024–2026)
                  </span>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between gap-4">

                  <span className="font-medium text-slate-400">
                    Status
                  </span>

                  <span
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-right
                      font-bold
                      text-emerald-600
                    "
                  >
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Accepting New Projects
                  </span>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CAREER TIMELINE
        ====================================================== */}

        <section className="mb-14">

          {/* Timeline Header */}
          <div
            className="
              mb-10
              flex
              flex-wrap
              items-center
              justify-between
              gap-4
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
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Documented Tenure &amp; Experience
            </div>

            <div
              className="
                rounded-full
                bg-slate-100/70
                px-3
                py-1.5
                text-[10px]
                font-bold
                text-slate-400
                shadow-[inset_1px_1px_3px_rgba(255,255,255,0.95)]
              "
            >
              4 Verified Roles
            </div>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {EXPERIENCE_ITEMS.map(function (item, idx) {
              return (
                <div
                  key={item.id}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.6rem]
                    border border-white/80
                    bg-white/45
                    p-6
                    shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.09),0_15px_35px_rgba(100,116,139,0.07)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/60
                    hover:shadow-[inset_3px_3px_9px_rgba(255,255,255,0.95),inset_-3px_-3px_9px_rgba(148,163,184,0.10),0_22px_45px_rgba(100,116,139,0.11)]
                    sm:p-7
                  "
                >
                  {/* Card Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-blue-200/20
                      blur-3xl
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10">

                    {/* Number */}
                    <div
                      className="
                        mb-3
                        inline-flex
                        h-8
                        min-w-8
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-50/80
                        px-2
                        text-[10px]
                        font-extrabold
                        text-blue-600
                        shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(59,130,246,0.06)]
                      "
                    >
                      0{idx + 1}
                    </div>

                    {/* Company */}
                    <h3
                      className="
                        text-lg
                        font-extrabold
                        tracking-[-0.02em]
                        text-slate-900
                        transition-colors
                        group-hover:text-blue-600
                      "
                    >
                      {item.company}
                    </h3>

                    {/* Role */}
                    <div
                      className="
                        mb-4
                        mt-1
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.08em]
                        text-slate-400
                      "
                    >
                      {item.role} · {item.location}
                    </div>

                    {/* Description */}
                    <div
                      className="
                        rounded-[1.1rem]
                        border border-white/70
                        bg-slate-50/55
                        p-4
                        shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.06)]
                      "
                    >
                      <p
                        className="
                          text-sm
                          leading-relaxed
                          text-slate-500
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            GLOBAL CONTACT
        ====================================================== */}

        <ContactActionBlock
          title="Work Directly With Amit Ola"
          subtitle="Direct consultation with no account managers or agency bureaucracy."
          serviceContext="Direct Consultation"
          whatsappMessage="Hi Amit, I'd like to discuss working together on marketing for my business."
          emailSubject="Work With Amit - Marketing Inquiry"
        />
      </div>

      {/* =====================================================
          CONSULTATION MODAL
      ====================================================== */}

      <ServiceActionModal
        isOpen={modalOpen}
        onClose={function () {
          setModalOpen(false);
        }}
        serviceName="Consultation with Amit Ola"
      />
    </div>
  );
}