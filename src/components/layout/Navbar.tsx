import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(function () {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  useEffect(function () {
    function handleScroll() {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 20);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(function () {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const serviceSubmenu = [
    {
      label: 'Search Engine Optimization (SEO)',
      path: '/services/seo',
      price: '₹9,000',
    },
    {
      label: 'Web Design & CRO',
      path: '/services/web-design',
      price: '₹15,000',
    },
    {
      label: 'E-commerce Management',
      path: '/services/ecommerce-management',
      price: '₹15,000',
    },
    {
      label: 'Meta Ads (FB & IG)',
      path: '/services/meta-ads',
      price: '₹12,000',
    },
    {
      label: 'Social Media Management',
      path: '/services/social-media-management',
      price: '₹11,000',
    },
    {
      label: 'Growth Packages (Retainers)',
      path: '/growth-packages',
      price: 'From ₹14,000/mo',
    },
  ];

  function navLinkClass(isActive: boolean) {
    return `
      relative rounded-xl px-3 py-2
      transition-all duration-300
      ${
        isActive
          ? 'bg-white/60 text-blue-600 shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),0_4px_12px_rgba(15,23,42,0.05)]'
          : 'text-slate-600 hover:bg-white/45 hover:text-slate-950'
      }
    `;
  }

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="
          fixed left-0 top-0 z-[100]
          h-[3px]
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-purple-500
          transition-all duration-75
        "
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Header */}
      <header
        className={`
          fixed left-0 right-0 top-0 z-40
          transition-all duration-300
          ${
            scrolled
              ? `
                border-b border-white/70
                bg-white/60
                py-2.5
                backdrop-blur-2xl
                shadow-[0_8px_30px_rgba(15,23,42,0.08),inset_0_1px_2px_rgba(255,255,255,0.9)]
              `
              : `
                border-b border-white/50
                bg-white/45
                py-4
                backdrop-blur-xl
                sm:py-5
              `
          }
        `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            to="/"
            className="group flex shrink-0 flex-col"
            aria-label="Amit Ola Digital Growth Home"
          >
            <span
              className="
                text-lg font-extrabold
                leading-none tracking-tight
                text-slate-900
                transition-colors duration-200
                group-hover:text-blue-600
                sm:text-xl
              "
            >
              Amit Ola
            </span>

            <span
              className="
                mt-1
                text-[9px] font-semibold
                uppercase tracking-[0.13em]
                text-slate-500
                transition-colors
                group-hover:text-slate-700
                sm:text-[10px]
              "
            >
              Digital Marketing & SEO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 text-sm font-medium lg:flex">
            <NavLink
              to="/"
              className={function ({ isActive }) {
                return navLinkClass(isActive);
              }}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={function ({ isActive }) {
                return navLinkClass(isActive);
              }}
            >
              About
            </NavLink>

            {/* Services */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={function () {
                setServicesDropdownOpen(true);
              }}
            >
              <button
                type="button"
                onClick={function () {
                  setServicesDropdownOpen(!servicesDropdownOpen);
                }}
                className={`
                  flex items-center gap-1
                  rounded-xl px-3 py-2
                  transition-all duration-300
                  ${
                    location.pathname.startsWith('/services') ||
                    location.pathname === '/growth-packages'
                      ? 'bg-white/60 text-blue-600 shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),0_4px_12px_rgba(15,23,42,0.05)]'
                      : 'text-slate-600 hover:bg-white/45 hover:text-slate-950'
                  }
                `}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>

                <ChevronDown
                  className={`
                    h-4 w-4 text-slate-400
                    transition-transform duration-200
                    ${
                      servicesDropdownOpen
                        ? 'rotate-180'
                        : ''
                    }
                  `}
                />
              </button>

              {/* Desktop Dropdown */}
              {servicesDropdownOpen && (
                <div
                  onMouseLeave={function () {
                    setServicesDropdownOpen(false);
                  }}
                  className="
                    absolute left-0 top-full mt-3
                    w-[350px]
                    overflow-hidden
                    rounded-[1.5rem]
                    border border-white/75
                    bg-white/65
                    p-2.5
                    backdrop-blur-2xl
                    shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.10),0_20px_45px_rgba(15,23,42,0.13)]
                    animate-in
                    fade-in
                    slide-in-from-top-2
                    duration-200
                  "
                >
                  <div
                    className="
                      mb-1
                      border-b border-white/60
                      px-3 py-2.5
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-slate-400
                      "
                    >
                      Core Capabilities
                    </span>
                  </div>

                  {serviceSubmenu.map(function (item) {
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={function () {
                          setServicesDropdownOpen(false);
                        }}
                        className="
                          group flex items-center
                          justify-between gap-3
                          rounded-xl
                          px-3 py-2.5
                          transition-all duration-200
                          hover:bg-white/65
                          hover:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),0_4px_10px_rgba(15,23,42,0.04)]
                        "
                      >
                        <span
                          className="
                            min-w-0
                            truncate
                            text-xs font-semibold
                            text-slate-700
                            transition-colors
                            group-hover:text-blue-600
                          "
                        >
                          {item.label}
                        </span>

                        <span
                          className="
                            shrink-0
                            rounded-lg
                            bg-slate-900/5
                            px-2 py-1
                            font-mono
                            text-[10px]
                            text-slate-500
                          "
                        >
                          {item.price}
                        </span>
                      </Link>
                    );
                  })}

                  <div className="mt-1 border-t border-white/60 pt-1">
                    <Link
                      to="/services"
                      onClick={function () {
                        setServicesDropdownOpen(false);
                      }}
                      className="
                        block rounded-xl
                        px-3 py-2.5
                        text-xs font-bold
                        text-blue-600
                        transition-all
                        hover:bg-blue-500/10
                        hover:text-blue-700
                      "
                    >
                      View All Services & Sprints →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/growth-packages"
              className={function ({ isActive }) {
                return navLinkClass(isActive);
              }}
            >
              Packages
            </NavLink>

            <NavLink
              to="/work"
              className={function ({ isActive }) {
                return navLinkClass(isActive);
              }}
            >
              Work
            </NavLink>

            <NavLink
              to="/experience"
              className={function ({ isActive }) {
                return navLinkClass(isActive);
              }}
            >
              Experience
            </NavLink>

            <NavLink
              to="/process"
              className={function ({ isActive }) {
                return navLinkClass(isActive);
              }}
            >
              Process
            </NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center sm:flex">
            <Link
              to="/contact"
              className="
                group inline-flex
                items-center gap-2
                rounded-2xl
                border border-white/80
                bg-slate-900/95
                px-5 py-2.5
                text-sm font-bold
                text-white
                shadow-[inset_1px_1px_2px_rgba(255,255,255,0.12),0_8px_18px_rgba(15,23,42,0.15)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-blue-600
                hover:shadow-[0_12px_25px_rgba(37,99,235,0.22)]
                active:translate-y-0
              "
            >
              <span>Let's Talk</span>

              <ArrowUpRight
                className="
                  h-4 w-4
                  transition-transform duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/contact"
              className="
                rounded-xl
                border border-white/70
                bg-slate-900
                px-3 py-2
                text-xs font-bold
                text-white
                shadow-[0_5px_12px_rgba(15,23,42,0.12)]
              "
            >
              Talk
            </Link>

            <button
              type="button"
              onClick={function () {
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border border-white/70
                bg-white/55
                text-slate-700
                backdrop-blur-xl
                shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),0_5px_12px_rgba(15,23,42,0.06)]
                transition-all
                hover:bg-white/75
                active:scale-95
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="
              mx-3 mt-3
              max-h-[calc(100vh-90px)]
              overflow-y-auto
              rounded-[1.5rem]
              border border-white/75
              bg-white/70
              p-4
              backdrop-blur-2xl
              shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.10),0_20px_45px_rgba(15,23,42,0.12)]
              lg:hidden
            "
          >
            <nav className="flex flex-col gap-1.5 text-sm">
              <Link
                to="/"
                onClick={function () {
                  setMobileMenuOpen(false);
                }}
                className="
                  rounded-xl px-3 py-3
                  font-semibold text-slate-700
                  transition-all
                  hover:bg-white/65
                  hover:text-blue-600
                "
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={function () {
                  setMobileMenuOpen(false);
                }}
                className="
                  rounded-xl px-3 py-3
                  font-semibold text-slate-700
                  transition-all
                  hover:bg-white/65
                  hover:text-blue-600
                "
              >
                About Amit
              </Link>

              <Link
                to="/services"
                onClick={function () {
                  setMobileMenuOpen(false);
                }}
                className="
                  rounded-xl
                  bg-white/50
                  px-3 py-3
                  font-bold text-slate-900
                  shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9)]
                "
              >
                Services Overview
              </Link>

              {/* Mobile Services */}
              <div
                className="
                  ml-3
                  border-l-2 border-blue-400/50
                  pl-3
                "
              >
                {serviceSubmenu.map(function (sub) {
                  return (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={function () {
                        setMobileMenuOpen(false);
                      }}
                      className="
                        flex items-center
                        justify-between gap-3
                        rounded-lg
                        px-2 py-2
                        text-xs text-slate-600
                        transition-colors
                        hover:bg-white/50
                        hover:text-blue-600
                      "
                    >
                      <span className="min-w-0 truncate">
                        {sub.label}
                      </span>

                      <span
                        className="
                          shrink-0
                          font-mono
                          text-[9px]
                          text-slate-400
                        "
                      >
                        {sub.price}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <Link
                to="/growth-packages"
                onClick={function () {
                  setMobileMenuOpen(false);
                }}
                className="
                  rounded-xl px-3 py-3
                  font-semibold text-slate-700
                  transition-all
                  hover:bg-white/65
                  hover:text-blue-600
                "
              >
                Growth Packages
              </Link>

              <Link
                to="/work"
                onClick={function () {
                  setMobileMenuOpen(false);
                }}
                className="
                  rounded-xl px-3 py-3
                  font-semibold text-slate-700
                  transition-all
                  hover:bg-white/65
                  hover:text-blue-600
                "
              >
                Work / Case Studies
              </Link>

              <Link
                to="/experience"
                onClick={function () {
                  setMobileMenuOpen(false);
                }}
                className="
                  rounded-xl px-3 py-3
                  font-semibold text-slate-700
                  transition-all
                  hover:bg-white/65
                  hover:text-blue-600
                "
              >
                Experience Timeline
              </Link>

              <Link
                to="/process"
                onClick={function () {
                  setMobileMenuOpen(false);
                }}
                className="
                  rounded-xl px-3 py-3
                  font-semibold text-slate-700
                  transition-all
                  hover:bg-white/65
                  hover:text-blue-600
                "
              >
                Execution Process
              </Link>

              <Link
                to="/contact"
                onClick={function () {
                  setMobileMenuOpen(false);
                }}
                className="
                  rounded-xl px-3 py-3
                  font-bold text-blue-600
                  transition-all
                  hover:bg-blue-500/10
                "
              >
                Contact
              </Link>

              <div className="mt-2 border-t border-white/60 pt-3">
                <Link
                  to="/contact"
                  onClick={function () {
                    setMobileMenuOpen(false);
                  }}
                  className="
                    flex w-full
                    items-center justify-center
                    rounded-2xl
                    bg-slate-900
                    py-3
                    text-sm font-bold
                    text-white
                    shadow-[0_8px_18px_rgba(15,23,42,0.15)]
                    transition-all
                    hover:bg-blue-600
                    active:scale-[0.98]
                  "
                >
                  Let's Talk
                </Link>

                <div
                  className="
                    pt-3 text-center
                    text-[10px]
                    font-mono
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