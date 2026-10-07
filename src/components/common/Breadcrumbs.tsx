import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 w-full">
      <div
        className="
          inline-flex max-w-full items-center
          rounded-2xl
          border border-white/70
          bg-white/45
          px-3 py-2
          shadow-[inset_2px_2px_5px_rgba(255,255,255,0.9),inset_-2px_-2px_6px_rgba(148,163,184,0.15),0_8px_25px_rgba(15,23,42,0.06)]
          backdrop-blur-xl
          supports-[backdrop-filter]:bg-white/35
        "
      >
        <ol className="flex min-w-0 max-w-full flex-wrap items-center gap-1.5 text-xs font-medium text-slate-500 sm:gap-2">
          {/* Home */}
          <li className="shrink-0">
            <Link
              to="/"
              className="
                inline-flex items-center rounded-xl
                px-2 py-1
                text-slate-600
                transition-all duration-200
                hover:bg-white/60
                hover:text-slate-950
                hover:shadow-[0_3px_10px_rgba(15,23,42,0.06)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-slate-400/50
              "
            >
              Home
            </Link>
          </li>

          {items.map(function (item, index) {
            var isLast = index === items.length - 1;

            return (
              <li
                key={item.url}
                className="flex min-w-0 max-w-full items-center gap-1.5 sm:gap-2"
              >
                {/* Separator */}
                <span
                  className="
                    flex h-5 w-5 shrink-0 items-center justify-center
                    rounded-full
                    border border-white/60
                    bg-white/40
                    shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),0_2px_5px_rgba(15,23,42,0.05)]
                  "
                >
                  <ChevronRight
                    className="h-3 w-3 text-slate-400"
                    aria-hidden="true"
                  />
                </span>

                {isLast ? (
                  <span
                    className="
                      min-w-0 max-w-[180px] truncate
                      rounded-xl
                      border border-white/50
                      bg-white/55
                      px-2.5 py-1
                      font-semibold
                      text-slate-900
                      shadow-[inset_1px_1px_3px_rgba(255,255,255,0.8),0_3px_8px_rgba(15,23,42,0.05)]
                      sm:max-w-[280px]
                    "
                    aria-current="page"
                    title={item.name}
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.url}
                    className="
                      min-w-0 max-w-[140px] truncate
                      rounded-xl
                      px-2 py-1
                      text-slate-500
                      transition-all duration-200
                      hover:bg-white/60
                      hover:text-slate-900
                      hover:shadow-[0_3px_10px_rgba(15,23,42,0.05)]
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-slate-400/50
                      sm:max-w-[220px]
                    "
                    title={item.name}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}