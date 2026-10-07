import {
  MessageSquare,
  Phone,
  Mail,
  ArrowUpRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ContactActionBlockProps {
  title?: string;
  subtitle?: string;
  serviceContext?: string;
  whatsappMessage?: string;
  emailSubject?: string;
  compact?: boolean;
}

export default function ContactActionBlock({
  title = "Let's discuss your project",
  subtitle = 'Direct consultation with Amit Ola via WhatsApp, direct phone call, or email.',
  serviceContext,
  whatsappMessage,
  emailSubject,
  compact = false,
}: ContactActionBlockProps) {
  const defaultWaText = serviceContext
    ? `Hi Amit, I'm interested in your ${serviceContext} service. I'd like to discuss my requirements.`
    : `Hi Amit, I want to discuss a digital marketing project for my business.`;

  const waUrl = `https://wa.me/${PERSONAL_INFO.phoneClean}?text=${encodeURIComponent(
    whatsappMessage || defaultWaText
  )}`;

  const defaultSubject = serviceContext
    ? `${serviceContext} Enquiry - Amit Ola`
    : `Digital Growth Consultation - Amit Ola`;

  const emailUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    emailSubject || defaultSubject
  )}`;

  const callUrl = `tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`;

  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-3 pt-2">
        {/* WhatsApp */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group inline-flex items-center justify-center gap-2
            rounded-2xl
            border border-white/70
            bg-white/50
            px-4 py-2.5
            text-xs font-semibold text-slate-800
            backdrop-blur-xl
            shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.12),0_6px_16px_rgba(15,23,42,0.07)]
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-white/70
            hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,1),inset_-2px_-2px_6px_rgba(148,163,184,0.15),0_10px_24px_rgba(15,23,42,0.1)]
            active:translate-y-0
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-emerald-500/40
          "
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
            <MessageSquare className="h-3.5 w-3.5" />
          </span>

          <span>WhatsApp</span>

          <ArrowUpRight
            className="
              h-3.5 w-3.5 text-slate-400
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
            group inline-flex items-center justify-center gap-2
            rounded-2xl
            border border-white/70
            bg-white/50
            px-4 py-2.5
            text-xs font-semibold text-slate-800
            backdrop-blur-xl
            shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.12),0_6px_16px_rgba(15,23,42,0.07)]
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-white/70
            hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,1),inset_-2px_-2px_6px_rgba(148,163,184,0.15),0_10px_24px_rgba(15,23,42,0.1)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-slate-500/40
          "
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-slate-900/5 text-slate-700">
            <Phone className="h-3.5 w-3.5" />
          </span>

          <span>Call Now</span>
        </a>

        {/* Email */}
        <a
          href={emailUrl}
          className="
            group inline-flex items-center justify-center gap-2
            rounded-2xl
            border border-white/70
            bg-white/50
            px-4 py-2.5
            text-xs font-semibold text-slate-800
            backdrop-blur-xl
            shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.12),0_6px_16px_rgba(15,23,42,0.07)]
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-white/70
            hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,1),inset_-2px_-2px_6px_rgba(148,163,184,0.15),0_10px_24px_rgba(15,23,42,0.1)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500/40
          "
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
            <Mail className="h-3.5 w-3.5" />
          </span>

          <span>Email Me</span>
        </a>
      </div>
    );
  }

  return (
    <div
      className="
        relative my-12 overflow-hidden
        rounded-[2rem]
        border border-white/70
        bg-white/45
        p-6
        backdrop-blur-2xl
        shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.12),0_20px_50px_rgba(15,23,42,0.08)]
        sm:p-8
        lg:p-10
      "
    >
      {/* Soft glass highlight */}
      <div
        className="
          pointer-events-none absolute -right-20 -top-20
          h-48 w-48 rounded-full
          bg-blue-200/20
          blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none absolute -bottom-24 -left-20
          h-48 w-48 rounded-full
          bg-purple-200/20
          blur-3xl
        "
        aria-hidden="true"
      />

      <div className="relative max-w-2xl">
        {/* Label */}
        <div
          className="
            mb-3 inline-flex items-center
            rounded-full
            border border-white/70
            bg-white/55
            px-3 py-1.5
            text-[10px] font-bold uppercase
            tracking-[0.16em]
            text-blue-600
            shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),0_4px_10px_rgba(15,23,42,0.05)]
          "
        >
          Direct Engagement
        </div>

        {/* Heading */}
        <h3
          className="
            mb-3
            text-2xl font-extrabold
            leading-tight tracking-tight
            text-slate-900
            sm:text-3xl
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mb-7
            max-w-xl
            text-sm font-normal
            leading-relaxed
            text-slate-600
            sm:text-base
          "
        >
          {subtitle}
        </p>

        {/* Actions */}
        <div
          className="
            grid grid-cols-1 gap-3
            sm:flex sm:flex-row sm:flex-wrap
          "
        >
          {/* WhatsApp */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group inline-flex min-h-12
              items-center justify-center gap-2
              rounded-2xl
              border border-white/80
              bg-emerald-500/10
              px-5 py-3
              text-xs font-bold
              text-emerald-700
              backdrop-blur-xl
              shadow-[inset_2px_2px_5px_rgba(255,255,255,0.9),inset_-2px_-2px_5px_rgba(16,185,129,0.08),0_8px_20px_rgba(15,23,42,0.06)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-emerald-500/15
              hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),0_14px_28px_rgba(15,23,42,0.1)]
              active:translate-y-0
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-500/40
              sm:flex-1
            "
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15">
              <MessageSquare className="h-4 w-4" />
            </span>

            <span className="truncate">
              WhatsApp (+91 96026 38026)
            </span>

            <ArrowUpRight
              className="
                h-3.5 w-3.5 shrink-0
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
              group inline-flex min-h-12
              items-center justify-center gap-2
              rounded-2xl
              border border-white/70
              bg-white/55
              px-5 py-3
              text-xs font-bold
              text-slate-800
              backdrop-blur-xl
              shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.12),0_8px_20px_rgba(15,23,42,0.06)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-white/75
              hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,1),0_14px_28px_rgba(15,23,42,0.1)]
              active:translate-y-0
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-slate-500/40
              sm:flex-1
            "
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-900/5">
              <Phone className="h-4 w-4" />
            </span>

            <span className="truncate">
              Call (+91 96026 38026)
            </span>
          </a>

          {/* Email */}
          <a
            href={emailUrl}
            className="
              group inline-flex min-h-12
              items-center justify-center gap-2
              rounded-2xl
              border border-white/70
              bg-white/55
              px-5 py-3
              text-xs font-bold
              text-slate-800
              backdrop-blur-xl
              shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.12),0_8px_20px_rgba(15,23,42,0.06)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-white/75
              hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,1),0_14px_28px_rgba(15,23,42,0.1)]
              active:translate-y-0
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500/40
              sm:flex-1
            "
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
              <Mail className="h-4 w-4 text-blue-600" />
            </span>

            <span>Email Me</span>
          </a>
        </div>
      </div>
    </div>
  );
}