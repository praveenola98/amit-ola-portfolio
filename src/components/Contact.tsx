import { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  prefilledService?: string;
  prefilledBudget?: string;
}

export default function Contact({
  prefilledService = '',
  prefilledBudget = '',
}: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: prefilledService || 'Search Engine Optimization (SEO)',
    budget: prefilledBudget || '₹10,000 - ₹25,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(
    function () {
      if (prefilledService) {
        setFormData(function (prev) {
          return {
            ...prev,
            service: prefilledService,
          };
        });
      }

      if (prefilledBudget) {
        setFormData(function (prev) {
          return {
            ...prev,
            budget: prefilledBudget,
          };
        });
      }
    },
    [prefilledService, prefilledBudget],
  );

  const handleSubmit = function (e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(function () {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Amit, I would like to discuss a digital marketing / SEO project for my business.
Name: ${formData.name || 'Prospect'}
Service: ${formData.service}
Budget: ${formData.budget}`,
  );

  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.phoneClean}?text=${whatsappMessage}`;

  const callUrl = `tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`;

  const emailUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    'Growth Project Brief - Amit Ola',
  )}`;

  const updateField = function (
    field: keyof typeof formData,
    value: string,
  ) {
    setFormData(function (prev) {
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        border-b border-white/70
        bg-gradient-to-br from-[#f8f9ff] via-[#f2f4fb] to-[#eef0f8]
        py-20 sm:py-28
      "
    >
      {/* Background Clay Glows */}
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-200/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-100/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">

        {/* Section Header */}
        <div
          className="
            mb-12 flex flex-wrap items-center justify-between gap-4
            rounded-2xl border border-white/80
            bg-white/45 px-5 py-4
            shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-3px_-3px_8px_rgba(148,163,184,0.12),0_10px_30px_rgba(100,116,139,0.08)]
            backdrop-blur-xl
            sm:mb-14
          "
        >
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            Get In Touch · Start a Project
          </div>

          <div
            className="
              rounded-full border border-white/70
              bg-white/50 px-4 py-2
              text-xs text-slate-500
              shadow-[inset_1px_1px_4px_rgba(255,255,255,0.8),0_3px_10px_rgba(100,116,139,0.06)]
            "
          >
            Direct Consultant Access · Fast Response Within 24h
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">

          {/* =========================================================
              LEFT COLUMN
          ========================================================== */}
          <div className="space-y-7 lg:col-span-5">

            {/* Intro Clay Card */}
            <div
              className="
                rounded-[2rem]
                border border-white/80
                bg-white/40
                p-7
                shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.12),0_18px_45px_rgba(100,116,139,0.09)]
                backdrop-blur-2xl
                sm:p-8
              "
            >
              <div
                className="
                  mb-6 inline-flex items-center gap-2
                  rounded-full border border-white/80
                  bg-white/60 px-4 py-2
                  text-[10px] font-bold uppercase tracking-[0.16em]
                  text-slate-500
                  shadow-[inset_1px_1px_4px_rgba(255,255,255,0.9),inset_-1px_-1px_4px_rgba(148,163,184,0.10)]
                "
              >
                <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.45)]" />
                Start a Conversation
              </div>

              <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Let&apos;s build
                <br />
                <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  something great together.
                </span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Tell me about your business, your current challenges, and what
                milestones you need to reach. Every inquiry goes straight to
                Amit Ola.
              </p>
            </div>

            {/* Contact Channels */}
            <div className="space-y-4">

              {/* Phone */}
              <div
                className="
                  group rounded-[1.4rem]
                  border border-white/80
                  bg-white/45 p-5
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-3px_-3px_7px_rgba(148,163,184,0.10),0_10px_25px_rgba(100,116,139,0.07)]
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-0.5
                "
              >
                <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(59,130,246,0.10)]">
                    <Phone className="h-3.5 w-3.5 text-blue-600" />
                  </span>
                  Direct Telephone / WhatsApp
                </div>

                <a
                  href={callUrl}
                  className="
                    block pl-9 text-lg font-bold text-slate-900
                    transition-colors hover:text-blue-600
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40
                  "
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div
                className="
                  group rounded-[1.4rem]
                  border border-white/80
                  bg-white/45 p-5
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-3px_-3px_7px_rgba(148,163,184,0.10),0_10px_25px_rgba(100,116,139,0.07)]
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-0.5
                "
              >
                <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(59,130,246,0.10)]">
                    <Mail className="h-3.5 w-3.5 text-blue-600" />
                  </span>
                  Official Email Inbox
                </div>

                <a
                  href={emailUrl}
                  className="
                    block break-all pl-9 text-base font-bold text-slate-900
                    transition-colors hover:text-blue-600
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40
                  "
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Location */}
              <div
                className="
                  rounded-[1.4rem]
                  border border-white/80
                  bg-white/45 p-5
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.9),inset_-3px_-3px_7px_rgba(148,163,184,0.10),0_10px_25px_rgba(100,116,139,0.07)]
                  backdrop-blur-xl
                "
              >
                <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(59,130,246,0.10)]">
                    <MapPin className="h-3.5 w-3.5 text-blue-600" />
                  </span>
                  Headquarters &amp; Availability
                </div>

                <div className="pl-9">
                  <div className="text-sm font-bold text-slate-900">
                    {PERSONAL_INFO.location}
                  </div>

                  <div className="mt-1 text-xs text-slate-500">
                    IST (UTC +5:30) · Active Remote Engagements
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center justify-center gap-2
                  rounded-full border border-white/70
                  bg-emerald-500
                  px-4 py-3
                  text-xs font-bold text-white
                  shadow-[inset_2px_2px_5px_rgba(255,255,255,0.20),inset_-2px_-2px_5px_rgba(0,0,0,0.12),0_10px_22px_rgba(16,185,129,0.18)]
                  transition-all duration-300
                  hover:-translate-y-1 hover:bg-emerald-600
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40
                "
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Call */}
              <a
                href={callUrl}
                className="
                  group inline-flex items-center justify-center gap-2
                  rounded-full border border-white/10
                  bg-slate-900
                  px-4 py-3
                  text-xs font-bold text-white
                  shadow-[inset_2px_2px_5px_rgba(255,255,255,0.08),inset_-2px_-2px_5px_rgba(0,0,0,0.35),0_10px_22px_rgba(15,23,42,0.18)]
                  transition-all duration-300
                  hover:-translate-y-1 hover:bg-slate-800
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40
                "
              >
                <Phone className="h-4 w-4" />
                <span>Call Amit</span>
              </a>

              {/* Email */}
              <a
                href={emailUrl}
                className="
                  group inline-flex items-center justify-center gap-2
                  rounded-full border border-white/80
                  bg-white/65
                  px-4 py-3
                  text-xs font-bold text-slate-800
                  shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.12),0_8px_20px_rgba(100,116,139,0.08)]
                  transition-all duration-300
                  hover:-translate-y-1 hover:bg-white/85
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40
                "
              >
                <Mail className="h-4 w-4 text-blue-600" />
                <span>Email Me</span>
              </a>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN — FORM
          ========================================================== */}
          <div className="lg:col-span-7">

            <div
              className="
                rounded-[2rem]
                border border-white/80
                bg-white/45
                p-5
                shadow-[inset_4px_4px_10px_rgba(255,255,255,0.95),inset_-5px_-5px_12px_rgba(148,163,184,0.12),0_25px_60px_rgba(100,116,139,0.11)]
                backdrop-blur-2xl
                sm:p-8
              "
            >
              {submitted ? (

                /* =====================================================
                   SUCCESS STATE
                ====================================================== */
                <div className="flex min-h-[500px] flex-col justify-center py-8">

                  <div
                    className="
                      mb-6 flex h-16 w-16 items-center justify-center
                      rounded-[1.25rem]
                      border border-emerald-100
                      bg-emerald-50
                      shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-3px_-3px_6px_rgba(16,185,129,0.10),0_10px_25px_rgba(16,185,129,0.10)]
                    "
                  >
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </div>

                  <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-600">
                    Submission Successful
                  </div>

                  <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                    Inquiry Received Successfully.
                  </h3>

                  <p className="mb-8 max-w-lg text-sm leading-relaxed text-slate-600">
                    Thank you,{' '}
                    <span className="font-semibold text-slate-900">
                      {formData.name}
                    </span>
                    . I have received your project details regarding{' '}
                    <span className="font-semibold text-blue-600">
                      {formData.service}
                    </span>{' '}
                    and will respond with an evaluation within 24 hours.
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex w-fit items-center gap-2
                      rounded-full
                      bg-emerald-500
                      px-6 py-3.5
                      text-xs font-bold text-white
                      shadow-[inset_2px_2px_5px_rgba(255,255,255,0.20),inset_-2px_-2px_5px_rgba(0,0,0,0.12),0_12px_25px_rgba(16,185,129,0.18)]
                      transition-all duration-300
                      hover:-translate-y-0.5 hover:bg-emerald-600
                    "
                  >
                    <span>Follow Up On WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

              ) : (

                /* =====================================================
                   FORM
                ====================================================== */
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Form Heading */}
                  <div className="mb-6">
                    <div
                      className="
                        mb-2 inline-flex rounded-full
                        border border-white/80
                        bg-white/60 px-3.5 py-1.5
                        text-[10px] font-bold uppercase tracking-[0.15em]
                        text-slate-500
                        shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),inset_-1px_-1px_3px_rgba(148,163,184,0.08)]
                      "
                    >
                      Project Inquiry &amp; Brief Form
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-500">
                      Share a few details and I&apos;ll understand the scope
                      before getting back to you.
                    </p>
                  </div>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-slate-700">
                        Full Name *
                      </label>

                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={function (e) {
                          updateField('name', e.target.value);
                        }}
                        placeholder="e.g. Rahul Sharma"
                        className="
                          w-full rounded-xl
                          border border-white/80
                          bg-white/60
                          px-4 py-3
                          text-sm text-slate-900
                          placeholder:text-slate-400
                          shadow-[inset_2px_2px_5px_rgba(148,163,184,0.10),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]
                          outline-none
                          transition-all duration-200
                          focus:border-blue-400/70
                          focus:bg-white/80
                          focus:ring-4 focus:ring-blue-500/10
                        "
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-slate-700">
                        Email Address *
                      </label>

                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={function (e) {
                          updateField('email', e.target.value);
                        }}
                        placeholder="e.g. rahul@company.com"
                        className="
                          w-full rounded-xl
                          border border-white/80
                          bg-white/60
                          px-4 py-3
                          text-sm text-slate-900
                          placeholder:text-slate-400
                          shadow-[inset_2px_2px_5px_rgba(148,163,184,0.10),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]
                          outline-none
                          transition-all duration-200
                          focus:border-blue-400/70
                          focus:bg-white/80
                          focus:ring-4 focus:ring-blue-500/10
                        "
                      />
                    </div>
                  </div>

                  {/* Phone + Company */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-slate-700">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={function (e) {
                          updateField('phone', e.target.value);
                        }}
                        placeholder="+91 98765 43210"
                        className="
                          w-full rounded-xl
                          border border-white/80
                          bg-white/60
                          px-4 py-3
                          text-sm text-slate-900
                          placeholder:text-slate-400
                          shadow-[inset_2px_2px_5px_rgba(148,163,184,0.10),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]
                          outline-none
                          transition-all duration-200
                          focus:border-blue-400/70
                          focus:bg-white/80
                          focus:ring-4 focus:ring-blue-500/10
                        "
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-slate-700">
                        Business / Brand Name
                      </label>

                      <input
                        type="text"
                        value={formData.company}
                        onChange={function (e) {
                          updateField('company', e.target.value);
                        }}
                        placeholder="e.g. Acme Retail"
                        className="
                          w-full rounded-xl
                          border border-white/80
                          bg-white/60
                          px-4 py-3
                          text-sm text-slate-900
                          placeholder:text-slate-400
                          shadow-[inset_2px_2px_5px_rgba(148,163,184,0.10),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]
                          outline-none
                          transition-all duration-200
                          focus:border-blue-400/70
                          focus:bg-white/80
                          focus:ring-4 focus:ring-blue-500/10
                        "
                      />
                    </div>
                  </div>

                  {/* Service + Budget */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-slate-700">
                        Primary Service *
                      </label>

                      <select
                        value={formData.service}
                        onChange={function (e) {
                          updateField('service', e.target.value);
                        }}
                        className="
                          w-full rounded-xl
                          border border-white/80
                          bg-white/60
                          px-4 py-3
                          text-sm text-slate-900
                          shadow-[inset_2px_2px_5px_rgba(148,163,184,0.10),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]
                          outline-none
                          transition-all duration-200
                          focus:border-blue-400/70
                          focus:bg-white/80
                          focus:ring-4 focus:ring-blue-500/10
                        "
                      >
                        <option value="Search Engine Optimization (SEO)">
                          Search Engine Optimization (SEO)
                        </option>
                        <option value="Web Design & CRO">
                          Web Design &amp; CRO
                        </option>
                        <option value="Meta Ads (Facebook & Instagram)">
                          Meta Ads (Facebook &amp; Instagram)
                        </option>
                        <option value="E-commerce Account Management">
                          E-commerce Account Management
                        </option>
                        <option value="Social Media Management">
                          Social Media Management
                        </option>
                        <option value="Starter Growth Package (₹14,000/mo)">
                          Starter Growth Package (₹14,000/mo)
                        </option>
                        <option value="Growth Package (₹22,000/mo)">
                          Growth Package (₹22,000/mo)
                        </option>
                        <option value="Business Growth Package (₹30,000/mo)">
                          Business Growth Package (₹30,000/mo)
                        </option>
                        <option value="Full Digital Package (₹40,000/mo)">
                          Full Digital Package (₹40,000/mo)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-slate-700">
                        Target Budget Range
                      </label>

                      <select
                        value={formData.budget}
                        onChange={function (e) {
                          updateField('budget', e.target.value);
                        }}
                        className="
                          w-full rounded-xl
                          border border-white/80
                          bg-white/60
                          px-4 py-3
                          text-sm text-slate-900
                          shadow-[inset_2px_2px_5px_rgba(148,163,184,0.10),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]
                          outline-none
                          transition-all duration-200
                          focus:border-blue-400/70
                          focus:bg-white/80
                          focus:ring-4 focus:ring-blue-500/10
                        "
                      >
                        <option value="₹5,000 - ₹10,000">
                          ₹5,000 - ₹10,000 (Sprint Audit)
                        </option>
                        <option value="₹10,000 - ₹20,000">
                          ₹10,000 - ₹20,000 / month
                        </option>
                        <option value="₹20,000 - ₹35,000">
                          ₹20,000 - ₹35,000 / month
                        </option>
                        <option value="₹35,000 - ₹50,000+">
                          ₹35,000 - ₹50,000+ / month
                        </option>
                        <option value="Custom Project Investment">
                          Custom Project Investment
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-700">
                      Message / Current Goals
                    </label>

                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={function (e) {
                        updateField('message', e.target.value);
                      }}
                      placeholder="Describe what your business sells, your monthly traffic or ad spend, and your 90-day targets..."
                      className="
                        w-full resize-none rounded-xl
                        border border-white/80
                        bg-white/60
                        px-4 py-3
                        text-sm leading-relaxed text-slate-900
                        placeholder:text-slate-400
                        shadow-[inset_2px_2px_5px_rgba(148,163,184,0.10),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]
                        outline-none
                        transition-all duration-200
                        focus:border-blue-400/70
                        focus:bg-white/80
                        focus:ring-4 focus:ring-blue-500/10
                      "
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="
                        group flex w-full items-center justify-center gap-2
                        rounded-2xl
                        border border-blue-400/20
                        bg-gradient-to-r from-blue-600 to-indigo-600
                        px-6 py-4
                        text-sm font-bold text-white
                        shadow-[inset_2px_2px_6px_rgba(255,255,255,0.18),inset_-3px_-3px_7px_rgba(30,64,175,0.30),0_12px_30px_rgba(37,99,235,0.20)]
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:from-blue-500
                        hover:to-indigo-500
                        hover:shadow-[inset_2px_2px_7px_rgba(255,255,255,0.20),inset_-3px_-3px_8px_rgba(30,64,175,0.30),0_16px_35px_rgba(37,99,235,0.25)]
                        active:translate-y-0
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                        focus-visible:outline-none
                        focus-visible:ring-4
                        focus-visible:ring-blue-500/20
                      "
                    >
                      <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

                      <span>
                        {isSubmitting
                          ? 'Transmitting Details...'
                          : 'Send Project Inquiry'}
                      </span>
                    </button>

                    <div className="mt-3 text-center text-[11px] text-slate-500">
                      Direct reply from Amit Ola within 24 hours · 100%
                      Confidential
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}