import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = function () {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 30);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
  ];

  return (
    <>
      {/* =====================================================
          SCROLL PROGRESS
      ====================================================== */}

      <div
        className="
          fixed left-0 top-0 z-[60]
          h-[3px]
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-violet-500
          shadow-[0_0_10px_rgba(79,70,229,0.35)]
          transition-all duration-75
        "
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className={`
          fixed left-0 right-0 top-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? `
                px-3 pt-3
                sm:px-5
                lg:px-6
              `
              : `
                px-3 pt-3
                sm:px-5
                lg:px-6
              `
          }
        `}
      >
        <div
          className={`
            mx-auto flex max-w-7xl items-center justify-between
            border
            transition-all duration-300
            ${
              scrolled
                ? `
                  rounded-[1.35rem]
                  border-white/80
                  bg-white/65
                  px-4 py-2.5
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_7px_rgba(148,163,184,0.10),0_14px_35px_rgba(100,116,139,0.12)]
                  backdrop-blur-2xl
                  sm:px-5
                `
                : `
                  rounded-[1.35rem]
                  border-white/60
                  bg-white/35
                  px-4 py-3
                  shadow-[inset_2px_2px_5px_rgba(255,255,255,0.80),inset_-2px_-2px_5px_rgba(148,163,184,0.06),0_8px_25px_rgba(100,116,139,0.05)]
                  backdrop-blur-xl
                  sm:px-5
                `
            }
          `}
        >

          {/* =================================================
              BRAND
          ================================================== */}

          <a
            href="#"
            className="
              group flex items-center gap-2.5
              whitespace-nowrap
              text-lg font-extrabold
              tracking-[-0.03em]
              text-slate-900
              transition-all duration-200
              sm:text-xl
            "
          >
            <span
              className="
                flex h-8 w-8 items-center justify-center
                rounded-xl
                bg-gradient-to-br
                from-blue-500
                to-indigo-600
                text-[10px]
                font-black
                text-white
                shadow-[inset_2px_2px_4px_rgba(255,255,255,0.25),inset_-2px_-2px_4px_rgba(30,64,175,0.25),0_6px_14px_rgba(37,99,235,0.18)]
                transition-transform duration-300
                group-hover:scale-105
              "
            >
              AO
            </span>

            <span>AMIT OLA</span>
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            className="
              hidden items-center
              gap-1
              md:flex
            "
          >
            {navLinks.map(function (link) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    relative
                    rounded-full
                    px-3.5 py-2
                    text-xs font-semibold
                    text-slate-600
                    transition-all duration-200
                    hover:bg-white/70
                    hover:text-slate-900
                    hover:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(148,163,184,0.08)]
                    lg:px-4
                    lg:text-sm
                  "
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* =================================================
              DESKTOP CTA
          ================================================== */}

          <div className="hidden items-center md:flex">
            <button
              onClick={onContactClick}
              className="
                group inline-flex items-center gap-2
                rounded-full
                border border-blue-400/20
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                px-5 py-2.5
                text-xs font-bold
                text-white
                shadow-[inset_2px_2px_5px_rgba(255,255,255,0.18),inset_-2px_-2px_5px_rgba(30,64,175,0.25),0_8px_20px_rgba(37,99,235,0.16)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:from-blue-500
                hover:to-indigo-500
                hover:shadow-[inset_2px_2px_6px_rgba(255,255,255,0.20),inset_-2px_-2px_6px_rgba(30,64,175,0.28),0_12px_25px_rgba(37,99,235,0.20)]
                active:translate-y-0
                focus-visible:outline-none
                focus-visible:ring-4
                focus-visible:ring-blue-500/15
                sm:text-sm
              "
            >
              <span>Let&apos;s Talk</span>

              <span
                className="
                  flex h-6 w-6 items-center justify-center
                  rounded-full
                  bg-white/10
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </button>
          </div>

          {/* =================================================
              MOBILE CONTROLS
          ================================================== */}

          <div className="flex items-center gap-2 md:hidden">

            <button
              onClick={onContactClick}
              className="
                rounded-full
                border border-blue-400/20
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                px-4 py-2
                text-xs font-bold
                text-white
                shadow-[inset_1px_1px_4px_rgba(255,255,255,0.18),inset_-2px_-2px_4px_rgba(30,64,175,0.25),0_6px_15px_rgba(37,99,235,0.14)]
                transition-all duration-200
                active:scale-95
              "
            >
              Talk
            </button>

            <button
              onClick={function () {
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                border border-white/80
                bg-white/60
                text-slate-700
                shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-2px_-2px_4px_rgba(148,163,184,0.10),0_5px_12px_rgba(100,116,139,0.07)]
                transition-all duration-200
                hover:bg-white/80
                hover:text-blue-600
                focus-visible:outline-none
                focus-visible:ring-4
                focus-visible:ring-blue-500/10
              "
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}

        {mobileMenuOpen && (
          <div
            className="
              mx-auto mt-2
              max-w-7xl
              overflow-hidden
              rounded-[1.5rem]
              border border-white/80
              bg-white/75
              px-4 py-5
              shadow-[inset_2px_2px_7px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.10),0_18px_40px_rgba(100,116,139,0.13)]
              backdrop-blur-2xl
              md:hidden
            "
          >
            <nav className="flex flex-col gap-1">

              {navLinks.map(function (link) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={function () {
                      setMobileMenuOpen(false);
                    }}
                    className="
                      rounded-2xl
                      border border-transparent
                      px-4 py-3
                      text-sm font-semibold
                      text-slate-600
                      transition-all duration-200
                      hover:border-white/80
                      hover:bg-white/65
                      hover:text-blue-600
                      hover:shadow-[inset_1px_1px_4px_rgba(255,255,255,0.9),inset_-1px_-1px_4px_rgba(148,163,184,0.08)]
                    "
                  >
                    {link.label}
                  </a>
                );
              })}

              {/* Mobile CTA Area */}
              <div
                className="
                  mt-3
                  rounded-[1.25rem]
                  border border-white/80
                  bg-slate-50/70
                  p-3
                  shadow-[inset_2px_2px_5px_rgba(255,255,255,0.9),inset_-2px_-2px_5px_rgba(148,163,184,0.08)]
                "
              >
                <button
                  onClick={function () {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="
                    w-full
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    py-3.5
                    text-sm font-bold
                    text-white
                    shadow-[inset_2px_2px_5px_rgba(255,255,255,0.18),inset_-2px_-2px_5px_rgba(30,64,175,0.25),0_8px_18px_rgba(37,99,235,0.16)]
                    transition-all duration-200
                    active:scale-[0.98]
                  "
                >
                  Start a Project
                </button>

                <div
                  className="
                    mt-3
                    text-center
                    text-[10px]
                    font-medium
                    tracking-wide
                    text-slate-400
                  "
                >
                  +91 96026 38026 · nexloomdigital@gmail.com
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}