import { X, MessageSquare, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ServiceActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  price?: number | string;
  isPackage?: boolean;
}

export default function ServiceActionModal({
  isOpen,
  onClose,
  serviceName,
  price,
  isPackage = false,
}: ServiceActionModalProps) {
  if (!isOpen) return null;

  const waText = isPackage
    ? `Hi Amit, I'm interested in the ${serviceName}. I'd like to discuss my requirements.`
    : `Hi Amit, I'm interested in your ${serviceName} service. I'd like to discuss my requirements.`;

  const waUrl = `https://wa.me/${PERSONAL_INFO.phoneClean}?text=${encodeURIComponent(
    waText
  )}`;

  const callUrl = `tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`;

  const emailSubject = `${serviceName} Inquiry - Amit Ola`;

  const emailUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(waText)}`;

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        overflow-y-auto
        bg-slate-950/55
        p-3
        backdrop-blur-md
        sm:p-6
      "
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${serviceName} contact options`}
    >
      <div
        className="
          relative w-full
          max-w-lg
          overflow-hidden
          rounded-[2rem]
          border border-white/75
          bg-white/65
          p-5
          backdrop-blur-2xl
          shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.12),0_30px_80px_rgba(15,23,42,0.25)]
          animate-in
          fade-in
          zoom-in-95
          duration-200
          sm:p-7
        "
        onClick={function (event) {
          event.stopPropagation();
        }}
      >
        {/* Decorative glass glow */}
        <div
          className="
            pointer-events-none
            absolute -right-20 -top-20
            h-48 w-48
            rounded-full
            bg-blue-300/20
            blur-3xl
          "
          aria-hidden="true"
        />

        <div
          className="
            pointer-events-none
            absolute -bottom-20 -left-20
            h-44 w-44
            rounded-full
            bg-purple-300/15
            blur-3xl
          "
          aria-hidden="true"
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="
            absolute right-4 top-4
            z-10
            flex h-9 w-9
            items-center justify-center
            rounded-xl
            border border-white/70
            bg-white/50
            text-slate-400
            shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),0_4px_10px_rgba(15,23,42,0.06)]
            transition-all duration-200
            hover:bg-white/75
            hover:text-slate-800
            hover:shadow-[0_6px_14px_rgba(15,23,42,0.1)]
            active:scale-95
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-slate-400/50
          "
          aria-label="Close dialog"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="relative mb-6 pr-10">
          <div
            className="
              mb-2
              inline-flex
              rounded-full
              border border-white/70
              bg-white/55
              px-3 py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-blue-600
              shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),0_3px_8px_rgba(15,23,42,0.05)]
            "
          >
            {isPackage
              ? 'Package Specification'
              : 'Service Specification'}
          </div>

          <h3
            className="
              text-xl
              font-extrabold
              leading-tight
              tracking-tight
              text-slate-900
              sm:text-2xl
            "
          >
            {serviceName}
          </h3>

          {price && (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500 sm:text-sm">
              <span>Starting Investment:</span>

              <span
                className="
                  rounded-xl
                  border border-blue-200/50
                  bg-blue-500/10
                  px-2.5 py-1
                  font-bold
                  text-blue-600
                  shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8)]
                "
              >
                {typeof price === 'number'
                  ? `₹${price.toLocaleString('en-IN')}`
                  : price}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <div
          className="
            relative
            mb-6
            rounded-2xl
            border border-white/60
            bg-white/35
            p-4
            shadow-[inset_2px_2px_5px_rgba(255,255,255,0.85),inset_-2px_-2px_5px_rgba(148,163,184,0.08)]
          "
        >
          <p className="text-sm leading-relaxed text-slate-600">
            Connect directly with Amit Ola. Your selected{' '}
            {isPackage ? 'package' : 'discipline'} will be pre-filled:
          </p>
        </div>

        {/* Direct Actions */}
        <div className="relative mb-6 space-y-3">
          {/* WhatsApp */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex w-full
              min-h-14
              items-center
              justify-between
              gap-3
              rounded-2xl
              border border-white/75
              bg-emerald-500/10
              px-4 py-3
              text-sm
              font-bold
              text-emerald-700
              backdrop-blur-xl
              shadow-[inset_2px_2px_5px_rgba(255,255,255,0.9),inset_-2px_-2px_5px_rgba(16,185,129,0.08),0_7px_18px_rgba(15,23,42,0.06)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-emerald-500/15
              hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),0_12px_25px_rgba(15,23,42,0.1)]
              active:translate-y-0
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-500/40
            "
          >
            <span className="flex min-w-0 items-center gap-3">
              <span
                className="
                  flex h-9 w-9
                  shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-emerald-500/15
                "
              >
                <MessageSquare className="h-4 w-4" />
              </span>

              <span className="truncate">
                Continue on WhatsApp
              </span>
            </span>

            <ArrowUpRight
              className="
                h-4 w-4
                shrink-0
                transition-transform duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>

          {/* Call */}
          <a
            href={callUrl}
            className="
              group
              flex w-full
              min-h-14
              items-center
              justify-between
              gap-3
              rounded-2xl
              border border-white/75
              bg-white/50
              px-4 py-3
              text-sm
              font-bold
              text-slate-800
              backdrop-blur-xl
              shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.10),0_7px_18px_rgba(15,23,42,0.06)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-white/70
              hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,1),0_12px_25px_rgba(15,23,42,0.1)]
              active:translate-y-0
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-slate-500/40
            "
          >
            <span className="flex min-w-0 items-center gap-3">
              <span
                className="
                  flex h-9 w-9
                  shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-slate-900/5
                "
              >
                <Phone className="h-4 w-4 text-slate-700" />
              </span>

              <span className="truncate">
                Call Direct (+91 96026 38026)
              </span>
            </span>

            <ArrowUpRight
              className="
                h-4 w-4
                shrink-0
                text-slate-400
                transition-transform duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>

          {/* Email */}
          <a
            href={emailUrl}
            className="
              group
              flex w-full
              min-h-14
              items-center
              justify-between
              gap-3
              rounded-2xl
              border border-white/75
              bg-white/50
              px-4 py-3
              text-sm
              font-bold
              text-slate-800
              backdrop-blur-xl
              shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.10),0_7px_18px_rgba(15,23,42,0.06)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-white/70
              hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,1),0_12px_25px_rgba(15,23,42,0.1)]
              active:translate-y-0
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500/40
            "
          >
            <span className="flex min-w-0 items-center gap-3">
              <span
                className="
                  flex h-9 w-9
                  shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-blue-500/10
                "
              >
                <Mail className="h-4 w-4 text-blue-600" />
              </span>

              <span className="truncate">
                Send Project Email
              </span>
            </span>

            <ArrowUpRight
              className="
                h-4 w-4
                shrink-0
                text-slate-400
                transition-transform duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </div>

        {/* Footer */}
        <div
          className="
            relative
            text-center
            text-[10px]
            font-medium
            tracking-wide
            text-slate-400
          "
        >
          Nawalgarh, Rajasthan · Amit Ola
        </div>
      </div>
    </div>
  );
}