import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ArrowUpRight } from 'lucide-react';

import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ContactActionBlock from '../components/common/ContactActionBlock';
import ServiceActionModal from '../components/common/ServiceActionModal';

import { GROWTH_PACKAGES } from '../data/portfolioData';

export default function GrowthPackagesPage() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    packageName: string;
    price: number;
  }>({
    isOpen: false,
    packageName: '',
    price: 0,
  });

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
          -left-60
          top-0
          h-[34rem]
          w-[34rem]
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
          top-[20%]
          h-[38rem]
          w-[38rem]
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
          left-[30%]
          h-96
          w-96
          rounded-full
          bg-indigo-100/30
          blur-3xl
        "
      />

      <SEOHead
        title="Digital Marketing Growth Packages | Amit Ola"
        description="Predictable monthly digital marketing growth retainers by Amit Ola starting from ₹14,000/month. SEO, social media, Meta Ads, and web strategy in cohesive bundles."
        canonicalPath="/growth-packages"
        breadcrumbs={[
          {
            name: 'Growth Packages',
            url: '/growth-packages',
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
                name: 'Growth Packages',
                url: '/growth-packages',
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
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-blue-500
                shadow-[0_0_8px_rgba(59,130,246,0.35)]
              "
            />

            Integrated Monthly Retainers
          </div>

          {/* Heading */}
          <h1
            className="
              text-4xl
              font-extrabold
              leading-[1.06]
              tracking-[-0.045em]
              text-slate-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            Monthly growth packages.
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
              Predictable multi-channel compounding.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-slate-500
              sm:text-lg
            "
          >
            Isolated marketing tactics create fragile outcomes. My monthly
            retainers align search visibility, performance advertising, and
            social authority into a unified commercial engine.
          </p>

          {/* Customization Notice */}
          <div
            className="
              mt-7
              flex
              max-w-2xl
              items-start
              gap-3
              rounded-[1.25rem]
              border border-white/80
              bg-white/45
              p-4
              text-xs
              font-medium
              leading-relaxed
              text-slate-500
              shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.07),0_10px_25px_rgba(100,116,139,0.06)]
              backdrop-blur-xl
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
                bg-blue-50
                text-[10px]
                font-extrabold
                text-blue-600
                shadow-[inset_1px_1px_3px_rgba(255,255,255,0.95)]
              "
            >
              *
            </span>

            <span>
              Packages can be fully customized according to your business
              requirements, margins, and target growth velocity.
            </span>
          </div>
        </div>

        {/* =====================================================
            PACKAGES GRID
        ====================================================== */}

        <div
          className="
            mb-20
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {GROWTH_PACKAGES.map(function (pkg, idx) {
            const isPopular = pkg.popular;
            const detailUrl = `/packages/${pkg.id}`;

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
                {/* Popular top accent */}
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

                  {/* Package Number + Popular */}
                  <div className="mb-5 flex items-center justify-between gap-3">

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

                  {/* Package Name */}
                  <h2
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
                  </h2>

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
                        per month
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

                {/* =================================================
                    CARD ACTIONS
                ================================================== */}

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
                      setModalState({
                        isOpen: true,
                        packageName: pkg.name,
                        price: pkg.price,
                      });
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
                            border
                            border-white/80
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
                    to={detailUrl}
                    className="
                      mt-2
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-1.5
                      rounded-[1rem]
                      border border-white/70
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
                    View Package Details
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            GLOBAL ACTION
        ====================================================== */}

        <ContactActionBlock
          title="Need a bespoke retainer combination?"
          subtitle="Tell me your internal requirements. We can configure an exact mix of SEO, paid media, and web optimization."
        />
      </div>

      {/* =======================================================
          SERVICE ACTION MODAL
      ======================================================== */}

      <ServiceActionModal
        isOpen={modalState.isOpen}
        onClose={function () {
          setModalState({
            ...modalState,
            isOpen: false,
          });
        }}
        serviceName={modalState.packageName}
        price={modalState.price}
        isPackage={true}
      />
    </div>
  );
}