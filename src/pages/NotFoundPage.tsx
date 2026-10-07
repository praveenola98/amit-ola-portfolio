import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

import SEOHead from '../components/common/SEOHead';

export default function NotFoundPage() {
  return (
    <div
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-gradient-to-br
        from-[#f8f9ff]
        via-[#f3f5fb]
        to-[#eef0f8]
        px-6
        pb-20
        pt-28
        text-slate-900
      "
    >
      <SEOHead
        title="404 - Page Not Found | Amit Ola"
        description="The page you are looking for does not exist or has been moved."
      />

      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-80
          w-80
          rounded-full
          bg-blue-200/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-violet-200/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-100/30
          blur-3xl
        "
      />

      {/* =====================================================
          404 CARD
      ====================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-xl
          overflow-hidden
          rounded-[2rem]
          border
          border-white/80
          bg-white/45
          p-8
          text-center
          shadow-[inset_3px_3px_9px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.10),0_30px_70px_rgba(100,116,139,0.12)]
          backdrop-blur-2xl
          sm:p-12
        "
      >
        {/* Top Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -top-24
            left-1/2
            h-48
            w-48
            -translate-x-1/2
            rounded-full
            bg-blue-200/25
            blur-3xl
          "
        />

        <div className="relative z-10">

          {/* Small Label */}
          <div
            className="
              mb-6
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
              shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95),inset_-1px_-1px_4px_rgba(59,130,246,0.06)]
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

            Navigation Error
          </div>

          {/* 404 */}
          <div
            className="
              mb-5
              font-mono
              text-7xl
              font-extrabold
              leading-none
              tracking-[-0.07em]
              text-slate-200
              drop-shadow-[2px_2px_3px_rgba(255,255,255,0.9)]
              sm:text-9xl
            "
          >
            404
          </div>

          {/* Heading */}
          <h1
            className="
              text-2xl
              font-extrabold
              tracking-[-0.035em]
              text-slate-900
              sm:text-4xl
            "
          >
            Page not found
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-md
              text-sm
              leading-relaxed
              text-slate-500
              sm:text-base
            "
          >
            The requested URL could not be located. Explore the available
            services or return to the main homepage.
          </p>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          {/* CTA */}
          <Link
            to="/"
            className="
              inline-flex
              items-center
              justify-center
              gap-2.5
              rounded-[1rem]
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              px-6
              py-3.5
              text-sm
              font-extrabold
              text-white
              shadow-[0_12px_28px_rgba(37,99,235,0.20)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_18px_35px_rgba(37,99,235,0.28)]
              focus:outline-none
              focus:ring-2
              focus:ring-blue-400/50
              focus:ring-offset-2
              focus:ring-offset-[#f3f5fb]
            "
          >
            <Home className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          {/* Secondary hint */}
          <div
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/70
              bg-white/40
              px-4
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.08em]
              text-slate-400
              shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95)]
            "
          >
            <ArrowLeft className="h-3 w-3" />
            Return to a safe page
          </div>
        </div>
      </div>
    </div>
  );
}