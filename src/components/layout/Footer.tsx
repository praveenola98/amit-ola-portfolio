import { Link } from 'react-router-dom';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t border-white/70
        bg-white/45
        py-14
        text-slate-600
        backdrop-blur-2xl
        shadow-[inset_0_2px_8px_rgba(255,255,255,0.8)]
        sm:py-16
      "
    >
      {/* Background Glass Glow */}
      <div
        className="
          pointer-events-none
          absolute -left-32 -top-32
          h-72 w-72
          rounded-full
          bg-blue-200/20
          blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute -bottom-32 -right-32
          h-80 w-80
          rounded-full
          bg-purple-200/15
          blur-3xl
        "
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            pb-10
            md:grid-cols-2
            lg:grid-cols-12
            lg:gap-5
            lg:pb-12
          "
        >

          {/* =========================
              BRAND
          ========================== */}
          <div
            className="
              rounded-[1.75rem]
              border border-white/70
              bg-white/40
              p-6
              backdrop-blur-xl
              shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-2px_-2px_6px_rgba(148,163,184,0.08),0_10px_25px_rgba(15,23,42,0.05)]
              lg:col-span-5
            "
          >
            <Link
              to="/"
              className="
                inline-block
                text-2xl
                font-extrabold
                tracking-tight
                text-slate-900
                transition-colors
                hover:text-blue-600
              "
            >
              Amit Ola
            </Link>

            <div
              className="
                mt-2
                inline-flex
                rounded-full
                border border-blue-200/50
                bg-blue-500/10
                px-3 py-1.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-blue-600
              "
            >
              Freelance Digital Marketing & SEO Specialist
            </div>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-relaxed
                text-slate-600
              "
            >
              Helping businesses build search visibility, acquire
              high-converting leads, and grow through technical SEO,
              performance marketing, and conversion-focused web
              architecture.
            </p>

            <div
              className="
                mt-5
                text-xs
                font-medium
                text-slate-500
              "
            >
              Nawalgarh, Rajasthan, India · Remote & Worldwide Engagements
            </div>
          </div>

          {/* =========================
              NAVIGATION
          ========================== */}
          <div
            className="
              rounded-[1.75rem]
              border border-white/70
              bg-white/35
              p-6
              backdrop-blur-xl
              shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-2px_-2px_6px_rgba(148,163,184,0.08),0_10px_25px_rgba(15,23,42,0.04)]
              lg:col-span-2
            "
          >
            <div
              className="
                mb-4
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-slate-900
              "
            >
              Navigation
            </div>

            <ul className="space-y-1.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="
                    block rounded-xl px-2.5 py-2
                    transition-all duration-200
                    hover:bg-white/60
                    hover:text-blue-600
                  "
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="
                    block rounded-xl px-2.5 py-2
                    transition-all duration-200
                    hover:bg-white/60
                    hover:text-blue-600
                  "
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/work"
                  className="
                    block rounded-xl px-2.5 py-2
                    transition-all duration-200
                    hover:bg-white/60
                    hover:text-blue-600
                  "
                >
                  Case Studies
                </Link>
              </li>

              <li>
                <Link
                  to="/experience"
                  className="
                    block rounded-xl px-2.5 py-2
                    transition-all duration-200
                    hover:bg-white/60
                    hover:text-blue-600
                  "
                >
                  Experience
                </Link>
              </li>

              <li>
                <Link
                  to="/process"
                  className="
                    block rounded-xl px-2.5 py-2
                    transition-all duration-200
                    hover:bg-white/60
                    hover:text-blue-600
                  "
                >
                  Process
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="
                    block rounded-xl px-2.5 py-2
                    transition-all duration-200
                    hover:bg-white/60
                    hover:text-blue-600
                  "
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* =========================
              SERVICES
          ========================== */}
          <div
            className="
              rounded-[1.75rem]
              border border-white/70
              bg-white/35
              p-6
              backdrop-blur-xl
              shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-2px_-2px_6px_rgba(148,163,184,0.08),0_10px_25px_rgba(15,23,42,0.04)]
              lg:col-span-3
            "
          >
            <div
              className="
                mb-4
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-slate-900
              "
            >
              Services & Pricing
            </div>

            <ul className="space-y-1.5 text-sm">
              <li>
                <Link
                  to="/services/seo"
                  className="
                    block rounded-xl px-2.5 py-2
                    transition-all duration-200
                    hover:bg-white/60
                    hover:text-blue-600
                  "
                >
                  Search Engine Optimization (SEO)
                </Link>
              </li>

              <li>
                <Link
                  to="/services/web-design"
                  className="
                    block rounded-xl px-2.5 py-2
                    transition-all duration-200
                    hover:bg-white/60
                    hover:text-blue-600
                  "
                >
                  Web Design & CRO
                </Link>
              </li>

              <li>
                <Link
                  to="/services/ecommerce-management"
                  className="
                    block rounded-xl px-2.5 py-2
                    transition-all duration-200
                    hover:bg-white/60
                    hover:text-blue-600
                  "
                >
                  E-commerce Management
                </Link>
              </li>

              <li>
                <Link
                  to="/services/meta-ads"
                  className="
                    block rounded-xl px-2.5 py-2
                    transition-all duration-200
                    hover:bg-white/60
                    hover:text-blue-600
                  "
                >
                  Meta Ads Performance
                </Link>
              </li>

              <li>
                <Link
                  to="/services/social-media-management"
                  className="
                    block rounded-xl px-2.5 py-2
                    transition-all duration-200
                    hover:bg-white/60
                    hover:text-blue-600
                  "
                >
                  Social Media Management
                </Link>
              </li>

              <li className="pt-2">
                <Link
                  to="/growth-packages"
                  className="
                    inline-flex
                    items-center
                    rounded-xl
                    border border-blue-200/50
                    bg-blue-500/10
                    px-3 py-2
                    font-bold
                    text-blue-600
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:bg-blue-500/15
                  "
                >
                  Monthly Growth Packages →
                </Link>
              </li>
            </ul>
          </div>

          {/* =========================
              CONTACT
          ========================== */}
          <div
            className="
              rounded-[1.75rem]
              border border-white/70
              bg-white/35
              p-6
              backdrop-blur-xl
              shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-2px_-2px_6px_rgba(148,163,184,0.08),0_10px_25px_rgba(15,23,42,0.04)]
              lg:col-span-2
            "
          >
            <div
              className="
                mb-4
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-slate-900
              "
            >
              Direct Contact
            </div>

            <div className="space-y-3 text-sm">
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="
                  block
                  break-all
                  rounded-xl
                  px-2.5 py-2
                  font-semibold
                  text-slate-700
                  transition-all
                  hover:bg-white/60
                  hover:text-blue-600
                "
              >
                {PERSONAL_INFO.phone}
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="
                  block
                  break-all
                  rounded-xl
                  px-2.5 py-2
                  font-semibold
                  text-slate-700
                  transition-all
                  hover:bg-white/60
                  hover:text-blue-600
                "
              >
                {PERSONAL_INFO.email}
              </a>

              <a
                href={`https://wa.me/${PERSONAL_INFO.phoneClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center gap-2
                  rounded-xl
                  bg-emerald-500/10
                  px-3 py-2
                  font-bold
                  text-emerald-700
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-emerald-500/15
                "
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <div
                className="
                  flex items-center gap-2
                  rounded-xl
                  bg-emerald-500/5
                  px-2.5 py-2
                  text-xs
                  font-semibold
                  text-emerald-600
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>

                <span>Available for new projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Glass Bar */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            rounded-[1.5rem]
            border border-white/65
            bg-white/30
            px-5 py-4
            text-xs
            text-slate-500
            backdrop-blur-xl
            shadow-[inset_1px_1px_4px_rgba(255,255,255,0.8),0_6px_18px_rgba(15,23,42,0.04)]
            sm:flex-row
          "
        >
          <div className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Amit Ola. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="
              group
              inline-flex
              items-center gap-2
              rounded-xl
              border border-white/70
              bg-white/45
              px-3.5 py-2
              font-bold
              text-slate-600
              shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),0_4px_10px_rgba(15,23,42,0.05)]
              transition-all duration-200
              hover:-translate-y-0.5
              hover:bg-white/70
              hover:text-blue-600
              active:translate-y-0
            "
          >
            <span>Back to top</span>

            <ArrowUp
              className="
                h-3.5 w-3.5
                transition-transform duration-200
                group-hover:-translate-y-0.5
              "
            />
          </button>
        </div>
      </div>
    </footer>
  );
}