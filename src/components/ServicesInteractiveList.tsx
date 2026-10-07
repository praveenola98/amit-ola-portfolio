import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import { MAIN_SERVICES } from '../data/portfolioData';

interface ServicesInteractiveListProps {
  onSelectService: (serviceName: string, price: number) => void;
}

export default function ServicesInteractiveList({
  onSelectService,
}: ServicesInteractiveListProps) {
  const [hoveredId, setHoveredId] = useState<string>(
    MAIN_SERVICES[0].id,
  );

  const slugMap: Record<string, string> = {
    seo: '/services/seo',
    'web-design': '/services/web-design',
    ecommerce: '/services/ecommerce-management',
    'meta-ads': '/services/meta-ads',
    'social-media': '/services/social-media-management',
  };

  return (
    <div
      className="
        overflow-hidden
        rounded-[1.75rem]
        border border-white/80
        bg-white/35
        p-2
        shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.10),0_18px_45px_rgba(100,116,139,0.09)]
        backdrop-blur-xl
      "
    >
      {MAIN_SERVICES.map(function (service, index) {
        const isHovered = hoveredId === service.id;
        const pageUrl = slugMap[service.id] || '/services';

        return (
          <div
            key={service.id}
            onMouseEnter={function () {
              setHoveredId(service.id);
            }}
            className={`
              relative
              cursor-pointer
              rounded-[1.35rem]
              border
              px-4 py-5
              transition-all duration-300
              sm:px-6 sm:py-7

              ${
                isHovered
                  ? `
                    border-white/90
                    bg-white/65
                    shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_7px_rgba(148,163,184,0.09),0_10px_25px_rgba(100,116,139,0.07)]
                  `
                  : `
                    border-transparent
                    bg-transparent
                    hover:bg-white/35
                  `
              }
            `}
          >
            {/* =================================================
                MAIN SERVICE ROW
            ================================================== */}

            <div
              className="
                flex flex-col
                justify-between
                gap-5
                lg:flex-row
                lg:items-center
              "
            >
              {/* Left Zone */}
              <div className="flex min-w-0 items-center gap-4 sm:gap-7">

                {/* Number */}
                <div
                  className={`
                    flex h-9 w-9
                    shrink-0
                    items-center justify-center
                    rounded-xl
                    text-[10px]
                    font-extrabold
                    tabular-nums
                    transition-all duration-300

                    ${
                      isHovered
                        ? `
                          bg-blue-50
                          text-blue-600
                          shadow-[inset_2px_2px_4px_rgba(255,255,255,0.95),inset_-2px_-2px_4px_rgba(59,130,246,0.08),0_5px_12px_rgba(59,130,246,0.07)]
                        `
                        : `
                          bg-slate-100/70
                          text-slate-400
                          shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(148,163,184,0.06)]
                        `
                    }
                  `}
                >
                  0{index + 1}
                </div>

                {/* Service Name */}
                <Link
                  to={pageUrl}
                  className={`
                    min-w-0
                    text-xl
                    font-extrabold
                    tracking-[-0.025em]
                    transition-all duration-200
                    sm:text-2xl
                    lg:text-3xl

                    ${
                      isHovered
                        ? 'text-blue-600'
                        : 'text-slate-900'
                    }
                  `}
                >
                  {service.name}
                </Link>
              </div>

              {/* =================================================
                  RIGHT ZONE
              ================================================== */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  pl-12
                  sm:gap-6
                  lg:justify-end
                  lg:pl-0
                "
              >
                {/* Pricing */}
                <div className="text-left lg:text-right">

                  <div
                    className="
                      mb-0.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.13em]
                      text-slate-400
                    "
                  >
                    Starting from
                  </div>

                  <div
                    className="
                      text-lg
                      font-extrabold
                      tabular-nums
                      text-slate-900
                      sm:text-xl
                    "
                  >
                    ₹{service.startingPrice.toLocaleString('en-IN')}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">

                  <button
                    type="button"
                    onClick={function (e) {
                      e.stopPropagation();

                      onSelectService(
                        service.name,
                        service.startingPrice,
                      );
                    }}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border border-blue-400/20
                      bg-gradient-to-r
                      from-blue-600
                      to-indigo-600
                      px-4 py-2.5
                      text-[10px]
                      font-bold
                      text-white
                      shadow-[inset_1px_1px_4px_rgba(255,255,255,0.18),inset_-2px_-2px_4px_rgba(30,64,175,0.22),0_7px_16px_rgba(37,99,235,0.14)]
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:from-blue-500
                      hover:to-indigo-500
                      sm:px-4
                      sm:text-xs
                    "
                  >
                    <span>Get This Service</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>

                  <Link
                    to={pageUrl}
                    className="
                      flex h-10 w-10
                      shrink-0
                      items-center justify-center
                      rounded-full
                      border border-white/80
                      bg-white/55
                      text-slate-600
                      shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-2px_-2px_4px_rgba(148,163,184,0.08),0_5px_12px_rgba(100,116,139,0.05)]
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:bg-white/80
                      hover:text-blue-600
                    "
                    aria-label={`View details for ${service.name}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* =================================================
                EXPANDED CONTEXT
            ================================================== */}

            {isHovered && (
              <div
                className="
                  mt-5
                  border-t border-white/80
                  pt-5
                  pl-12
                  animate-in
                  fade-in
                  duration-200
                  sm:pl-16
                "
              >
                <div
                  className="
                    grid
                    grid-cols-1
                    gap-5
                    lg:grid-cols-12
                  "
                >
                  {/* Description */}
                  <div className="lg:col-span-7">

                    <p
                      className="
                        mb-4
                        max-w-2xl
                        text-xs
                        leading-relaxed
                        text-slate-500
                        sm:text-sm
                      "
                    >
                      {service.description}
                    </p>

                    <Link
                      to={pageUrl}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.1em]
                        text-blue-600
                        transition-colors
                        hover:text-indigo-600
                        sm:text-xs
                      "
                    >
                      <span>
                        View Full {service.name} Scope &amp; Pricing
                      </span>

                      <ArrowRight
                        className="
                          h-3.5 w-3.5
                          transition-transform duration-200
                          group-hover:translate-x-1
                        "
                      />
                    </Link>
                  </div>

                  {/* Deliverables */}
                  <div
                    className="
                      rounded-[1.25rem]
                      border border-white/80
                      bg-slate-50/60
                      p-4
                      shadow-[inset_2px_2px_5px_rgba(148,163,184,0.06),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]
                      lg:col-span-5
                    "
                  >
                    <div
                      className="
                        mb-3
                        text-[9px]
                        font-extrabold
                        uppercase
                        tracking-[0.13em]
                        text-slate-400
                      "
                    >
                      Key Deliverables Included
                    </div>

                    <ul className="space-y-2">

                      {service.deliverables
                        .slice(0, 3)
                        .map(function (d, i) {
                          return (
                            <li
                              key={i}
                              className="
                                flex
                                items-center
                                gap-2.5
                                text-xs
                                font-medium
                                text-slate-600
                              "
                            >
                              <span
                                className="
                                  flex h-5 w-5
                                  shrink-0
                                  items-center justify-center
                                  rounded-full
                                  bg-emerald-50
                                  shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(16,185,129,0.08)]
                                "
                              >
                                <Check className="h-3 w-3 text-emerald-600" />
                              </span>

                              <span className="truncate">
                                {d}
                              </span>
                            </li>
                          );
                        })}

                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}