import { useState } from 'react';
import {
  Phone,
  Mail,
  Send,
  CheckCircle2,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';

import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Search Engine Optimization (SEO)',
    budget: '₹10,000 - ₹25,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(function () {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  }

  function updateField(
    field: keyof typeof formData,
    value: string
  ) {
    setFormData(function (previous) {
      return {
        ...previous,
        [field]: value,
      };
    });
  }

  const whatsappMessage = encodeURIComponent(
    `Hi Amit, I would like to discuss a project.
Name: ${formData.name || 'Prospect'}
Company: ${formData.company || 'N/A'}
Service: ${formData.service}
Budget: ${formData.budget}`
  );

  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.phoneClean}?text=${whatsappMessage}`;

  const callUrl = `tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`;

  const emailUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    'Growth Project Inquiry - Amit Ola'
  )}`;

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
          -left-56
          top-10
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-blue-200/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-56
          top-[25%]
          h-[36rem]
          w-[36rem]
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
          h-80
          w-80
          rounded-full
          bg-indigo-100/25
          blur-3xl
        "
      />

      <SEOHead
        title="Contact Amit Ola | Digital Marketing & SEO Consultation"
        description="Get in touch with Amit Ola for freelance digital marketing and SEO services. Call +91 96026 38026, email nexloomdigital@gmail.com, or message on WhatsApp."
        canonicalPath="/contact"
        breadcrumbs={[
          {
            name: 'Contact',
            url: '/contact',
          },
        ]}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">

        {/* =====================================================
            BREADCRUMB
        ====================================================== */}

        <div className="mb-10">
          <Breadcrumbs
            items={[
              {
                name: 'Contact Amit Ola',
                url: '/contact',
              },
            ]}
          />
        </div>

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div
          className="
            mb-12
            flex
            flex-wrap
            items-center
            justify-between
            gap-4
            rounded-[1.5rem]
            border border-white/80
            bg-white/45
            px-5
            py-4
            shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.08),0_10px_28px_rgba(100,116,139,0.06)]
            backdrop-blur-xl
            sm:px-6
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.13em]
              text-blue-600
              sm:text-xs
            "
          >
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.35)]" />
            Communication Channels · Start a Project
          </div>

          <div
            className="
              rounded-full
              bg-slate-100/70
              px-3
              py-1.5
              text-[10px]
              font-bold
              text-slate-400
              shadow-[inset_1px_1px_3px_rgba(255,255,255,0.95)]
            "
          >
            Nawalgarh, Rajasthan · IST (UTC +5:30)
          </div>
        </div>

        {/* =====================================================
            MAIN CONTACT GRID
        ====================================================== */}

        <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">

          {/* ===================================================
              LEFT — DIRECT CONTACT
          ==================================================== */}

          <div className="space-y-7 lg:col-span-5">

            {/* Heading */}
            <div>
              <div
                className="
                  mb-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border border-blue-100/80
                  bg-blue-50/65
                  px-3
                  py-1.5
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.12em]
                  text-blue-600
                  shadow-[inset_1px_1px_4px_rgba(255,255,255,0.95)]
                "
              >
                Direct Communication
              </div>

              <h1
                className="
                  text-4xl
                  font-extrabold
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-slate-900
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Let&apos;s work
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
                  together.
                </span>
              </h1>

              <p
                className="
                  mt-5
                  max-w-md
                  text-base
                  leading-relaxed
                  text-slate-500
                "
              >
                Tell me what you&apos;re building, where you&apos;re stuck,
                and what you want to achieve. All communications are handled
                directly by Amit Ola without agency intermediaries.
              </p>
            </div>

            {/* =================================================
                DIRECT INFORMATION CARDS
            ================================================== */}

            <div className="space-y-4">

              {/* Phone */}
              <a
                href={callUrl}
                className="
                  group
                  block
                  rounded-[1.35rem]
                  border border-white/80
                  bg-white/45
                  p-5
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.08),0_10px_25px_rgba(100,116,139,0.06)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-white/65
                "
              >
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className="
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.12em]
                      text-slate-400
                    "
                  >
                    Direct Telephone / WhatsApp
                  </span>

                  <Phone className="h-4 w-4 text-blue-500" />
                </div>

                <div
                  className="
                    text-lg
                    font-extrabold
                    text-slate-900
                    transition-colors
                    group-hover:text-blue-600
                  "
                >
                  {PERSONAL_INFO.phone}
                </div>
              </a>

              {/* Email */}
              <a
                href={emailUrl}
                className="
                  group
                  block
                  rounded-[1.35rem]
                  border border-white/80
                  bg-white/45
                  p-5
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.08),0_10px_25px_rgba(100,116,139,0.06)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-white/65
                "
              >
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className="
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.12em]
                      text-slate-400
                    "
                  >
                    Official Email Inbox
                  </span>

                  <Mail className="h-4 w-4 text-blue-500" />
                </div>

                <div
                  className="
                    break-all
                    text-base
                    font-extrabold
                    text-slate-900
                    transition-colors
                    group-hover:text-blue-600
                  "
                >
                  {PERSONAL_INFO.email}
                </div>
              </a>

              {/* Location */}
              <div
                className="
                  rounded-[1.35rem]
                  border border-white/80
                  bg-white/45
                  p-5
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.08),0_10px_25px_rgba(100,116,139,0.06)]
                  backdrop-blur-xl
                "
              >
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className="
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.12em]
                      text-slate-400
                    "
                  >
                    Office Location
                  </span>

                  <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_7px_rgba(16,185,129,0.30)]" />
                </div>

                <div className="text-sm font-extrabold text-slate-900">
                  {PERSONAL_INFO.location}
                </div>

                <div className="mt-1 text-xs text-slate-400">
                  Available for client engagements worldwide
                </div>
              </div>
            </div>

            {/* =================================================
                ACTION BUTTONS
            ================================================== */}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-[1.1rem]
                  border border-emerald-400/20
                  bg-gradient-to-br
                  from-emerald-500
                  to-emerald-600
                  px-4
                  py-3.5
                  text-xs
                  font-extrabold
                  text-white
                  shadow-[inset_2px_2px_5px_rgba(255,255,255,0.20),inset_-2px_-2px_5px_rgba(5,150,105,0.25),0_10px_22px_rgba(16,185,129,0.14)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                "
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              {/* Call */}
              <a
                href={callUrl}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-[1.1rem]
                  border border-slate-700/20
                  bg-gradient-to-br
                  from-slate-800
                  to-slate-950
                  px-4
                  py-3.5
                  text-xs
                  font-extrabold
                  text-white
                  shadow-[inset_2px_2px_5px_rgba(255,255,255,0.10),inset_-2px_-2px_5px_rgba(0,0,0,0.25),0_10px_22px_rgba(15,23,42,0.14)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:from-blue-600
                  hover:to-indigo-600
                "
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>

              {/* Email */}
              <a
                href={emailUrl}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-[1.1rem]
                  border border-white/80
                  bg-white/65
                  px-4
                  py-3.5
                  text-xs
                  font-extrabold
                  text-slate-700
                  shadow-[inset_2px_2px_6px_rgba(255,255,255,0.95),inset_-2px_-2px_6px_rgba(148,163,184,0.08),0_8px_18px_rgba(100,116,139,0.06)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-white/85
                  hover:text-blue-600
                "
              >
                <Mail className="h-4 w-4" />
                <span>Email Me</span>
              </a>
            </div>
          </div>

          {/* ===================================================
              RIGHT — FORM
          ==================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border border-white/80
              bg-white/45
              p-5
              shadow-[inset_3px_3px_9px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.10),0_22px_55px_rgba(100,116,139,0.09)]
              backdrop-blur-xl
              sm:p-8
              lg:col-span-7
            "
          >

            {/* Form Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-blue-200/20
                blur-3xl
              "
            />

            <div className="relative z-10">

              {/* =================================================
                  SUCCESS STATE
              ================================================== */}

              {submitted ? (
                <div className="py-10 sm:py-14">

                  <div
                    className="
                      mb-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-[1.25rem]
                      bg-emerald-50
                      text-emerald-600
                      shadow-[inset_3px_3px_7px_rgba(255,255,255,0.95),inset_-3px_-3px_7px_rgba(16,185,129,0.08),0_10px_22px_rgba(16,185,129,0.08)]
                    "
                  >
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <h2
                    className="
                      mb-3
                      text-2xl
                      font-extrabold
                      tracking-[-0.025em]
                      text-slate-900
                      sm:text-3xl
                    "
                  >
                    Inquiry Sent Successfully
                  </h2>

                  <p
                    className="
                      mb-7
                      max-w-lg
                      text-sm
                      leading-relaxed
                      text-slate-500
                    "
                  >
                    Thank you,{' '}
                    <span className="font-bold text-slate-900">
                      {formData.name}
                    </span>
                    . I have received your message regarding{' '}
                    <span className="font-bold text-blue-600">
                      {formData.service}
                    </span>{' '}
                    and will reply within 24 hours.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-[1.1rem]
                        bg-gradient-to-r
                        from-emerald-500
                        to-emerald-600
                        px-5
                        py-3
                        text-xs
                        font-extrabold
                        text-white
                        shadow-[inset_2px_2px_5px_rgba(255,255,255,0.20),inset_-2px_-2px_5px_rgba(5,150,105,0.25),0_10px_20px_rgba(16,185,129,0.14)]
                        transition-all
                        hover:-translate-y-0.5
                      "
                    >
                      <span>Chat on WhatsApp</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={function () {
                        setSubmitted(false);
                      }}
                      className="
                        rounded-[1.1rem]
                        border border-white/80
                        bg-white/65
                        px-5
                        py-3
                        text-xs
                        font-extrabold
                        text-slate-700
                        shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.08),0_7px_16px_rgba(100,116,139,0.06)]
                        transition-all
                        hover:-translate-y-0.5
                        hover:bg-white/85
                      "
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (

                /* =================================================
                   FORM
                ================================================== */

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  <div className="mb-2">

                    <div
                      className="
                        mb-2
                        inline-flex
                        rounded-full
                        bg-blue-50/70
                        px-3
                        py-1.5
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.12em]
                        text-blue-600
                      "
                    >
                      Start a Conversation
                    </div>

                    <h2
                      className="
                        text-xl
                        font-extrabold
                        tracking-[-0.025em]
                        text-slate-900
                        sm:text-2xl
                      "
                    >
                      Project Inquiry Form
                    </h2>

                    <p className="mt-1 text-xs text-slate-400">
                      Fill out the details below and I&apos;ll get back to you
                      within 24 hours.
                    </p>
                  </div>

                  {/* =================================================
                      NAME + EMAIL
                  ================================================== */}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <div>
                      <label
                        className="
                          mb-1.5
                          block
                          text-xs
                          font-bold
                          text-slate-700
                        "
                      >
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
                          w-full
                          rounded-[1rem]
                          border border-white/90
                          bg-slate-50/70
                          px-4
                          py-3
                          text-sm
                          text-slate-900
                          shadow-[inset_3px_3px_7px_rgba(148,163,184,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.95)]
                          outline-none
                          placeholder:text-slate-400
                          transition-all
                          focus:border-blue-300
                          focus:bg-white/80
                          focus:ring-4
                          focus:ring-blue-500/10
                        "
                      />
                    </div>

                    <div>
                      <label
                        className="
                          mb-1.5
                          block
                          text-xs
                          font-bold
                          text-slate-700
                        "
                      >
                        Email Address *
                      </label>

                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={function (e) {
                          updateField('email', e.target.value);
                        }}
                        placeholder="you@company.com"
                        className="
                          w-full
                          rounded-[1rem]
                          border border-white/90
                          bg-slate-50/70
                          px-4
                          py-3
                          text-sm
                          text-slate-900
                          shadow-[inset_3px_3px_7px_rgba(148,163,184,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.95)]
                          outline-none
                          placeholder:text-slate-400
                          transition-all
                          focus:border-blue-300
                          focus:bg-white/80
                          focus:ring-4
                          focus:ring-blue-500/10
                        "
                      />
                    </div>
                  </div>

                  {/* =================================================
                      PHONE + COMPANY
                  ================================================== */}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <div>
                      <label
                        className="
                          mb-1.5
                          block
                          text-xs
                          font-bold
                          text-slate-700
                        "
                      >
                        Phone / WhatsApp Number *
                      </label>

                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={function (e) {
                          updateField('phone', e.target.value);
                        }}
                        placeholder="+91 98765 43210"
                        className="
                          w-full
                          rounded-[1rem]
                          border border-white/90
                          bg-slate-50/70
                          px-4
                          py-3
                          text-sm
                          text-slate-900
                          shadow-[inset_3px_3px_7px_rgba(148,163,184,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.95)]
                          outline-none
                          placeholder:text-slate-400
                          transition-all
                          focus:border-blue-300
                          focus:bg-white/80
                          focus:ring-4
                          focus:ring-blue-500/10
                        "
                      />
                    </div>

                    <div>
                      <label
                        className="
                          mb-1.5
                          block
                          text-xs
                          font-bold
                          text-slate-700
                        "
                      >
                        Company / Website URL
                      </label>

                      <input
                        type="text"
                        value={formData.company}
                        onChange={function (e) {
                          updateField('company', e.target.value);
                        }}
                        placeholder="https://yourwebsite.com"
                        className="
                          w-full
                          rounded-[1rem]
                          border border-white/90
                          bg-slate-50/70
                          px-4
                          py-3
                          text-sm
                          text-slate-900
                          shadow-[inset_3px_3px_7px_rgba(148,163,184,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.95)]
                          outline-none
                          placeholder:text-slate-400
                          transition-all
                          focus:border-blue-300
                          focus:bg-white/80
                          focus:ring-4
                          focus:ring-blue-500/10
                        "
                      />
                    </div>
                  </div>

                  {/* =================================================
                      SERVICE + BUDGET
                  ================================================== */}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <div>
                      <label
                        className="
                          mb-1.5
                          block
                          text-xs
                          font-bold
                          text-slate-700
                        "
                      >
                        Service Required
                      </label>

                      <select
                        value={formData.service}
                        onChange={function (e) {
                          updateField('service', e.target.value);
                        }}
                        className="
                          w-full
                          appearance-none
                          rounded-[1rem]
                          border border-white/90
                          bg-slate-50/70
                          px-4
                          py-3
                          text-sm
                          text-slate-900
                          shadow-[inset_3px_3px_7px_rgba(148,163,184,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.95)]
                          outline-none
                          transition-all
                          focus:border-blue-300
                          focus:bg-white/80
                          focus:ring-4
                          focus:ring-blue-500/10
                        "
                      >
                        <option value="Search Engine Optimization (SEO)">
                          Search Engine Optimization (SEO)
                        </option>

                        <option value="Web Design & CRO">
                          Web Design &amp; CRO
                        </option>

                        <option value="E-commerce Account Management">
                          E-commerce Account Management
                        </option>

                        <option value="Meta Ads Management">
                          Meta Ads Management
                        </option>

                        <option value="Social Media Management">
                          Social Media Management
                        </option>

                        <option value="Monthly Growth Package">
                          Monthly Growth Package
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        className="
                          mb-1.5
                          block
                          text-xs
                          font-bold
                          text-slate-700
                        "
                      >
                        Estimated Budget
                      </label>

                      <select
                        value={formData.budget}
                        onChange={function (e) {
                          updateField('budget', e.target.value);
                        }}
                        className="
                          w-full
                          appearance-none
                          rounded-[1rem]
                          border border-white/90
                          bg-slate-50/70
                          px-4
                          py-3
                          text-sm
                          text-slate-900
                          shadow-[inset_3px_3px_7px_rgba(148,163,184,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.95)]
                          outline-none
                          transition-all
                          focus:border-blue-300
                          focus:bg-white/80
                          focus:ring-4
                          focus:ring-blue-500/10
                        "
                      >
                        <option value="₹9,000 - ₹15,000">
                          ₹9,000 – ₹15,000
                        </option>

                        <option value="₹15,000 - ₹30,000">
                          ₹15,000 – ₹30,000
                        </option>

                        <option value="₹30,000 - ₹50,000">
                          ₹30,000 – ₹50,000
                        </option>

                        <option value="₹50,000+">
                          ₹50,000+
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* =================================================
                      MESSAGE
                  ================================================== */}

                  <div>
                    <label
                      className="
                        mb-1.5
                        block
                        text-xs
                        font-bold
                        text-slate-700
                      "
                    >
                      Project Details &amp; Goals *
                    </label>

                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={function (e) {
                        updateField('message', e.target.value);
                      }}
                      placeholder="Tell me about your business, target audience, and current marketing goals..."
                      className="
                        w-full
                        resize-none
                        rounded-[1rem]
                        border border-white/90
                        bg-slate-50/70
                        px-4
                        py-3
                        text-sm
                        leading-relaxed
                        text-slate-900
                        shadow-[inset_3px_3px_7px_rgba(148,163,184,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.95)]
                        outline-none
                        placeholder:text-slate-400
                        transition-all
                        focus:border-blue-300
                        focus:bg-white/80
                        focus:ring-4
                        focus:ring-blue-500/10
                      "
                    />
                  </div>

                  {/* =================================================
                      SUBMIT
                  ================================================== */}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-[1.15rem]
                      border border-blue-400/20
                      bg-gradient-to-r
                      from-blue-600
                      to-indigo-600
                      px-6
                      py-4
                      text-sm
                      font-extrabold
                      text-white
                      shadow-[inset_2px_2px_6px_rgba(255,255,255,0.20),inset_-2px_-2px_6px_rgba(30,64,175,0.30),0_14px_28px_rgba(59,130,246,0.18)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:from-blue-500
                      hover:to-indigo-500
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    <Send
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />

                    <span>
                      {isSubmitting
                        ? 'Sending Inquiry...'
                        : 'Send Project Inquiry'}
                    </span>
                  </button>

                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}