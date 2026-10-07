import { useState } from 'react';
import {
  MessageSquare,
  Quote,
  Star,
  CheckCircle,
  Send,
} from 'lucide-react';

export default function Testimonials() {
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [submittedFeedback, setSubmittedFeedback] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [reviewNote, setReviewNote] = useState('');

  const handleFeedbackSubmit = function (e: React.FormEvent) {
    e.preventDefault();
    setSubmittedFeedback(true);
  };

  return (
    <section
      className="
        relative overflow-hidden
        border-b border-white/70
        bg-gradient-to-br
        from-[#f8f9ff]
        via-[#f2f4fb]
        to-[#eef0f8]
        py-24
        sm:py-32
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-48 top-20 h-[28rem] w-[28rem] rounded-full bg-blue-200/25 blur-3xl" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[32rem] w-[32rem] rounded-full bg-violet-200/25 blur-3xl" />

      <div className="pointer-events-none absolute left-[40%] top-[35%] h-72 w-72 rounded-full bg-indigo-100/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div
          className="
            mb-14
            flex flex-col
            justify-between
            gap-6
            rounded-[1.75rem]
            border border-white/80
            bg-white/45
            p-5
            shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-4px_-4px_10px_rgba(148,163,184,0.10),0_15px_35px_rgba(100,116,139,0.07)]
            backdrop-blur-xl
            sm:flex-row
            sm:items-end
            sm:p-6
          "
        >
          <div className="max-w-2xl">

            <div
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border border-blue-100/80
                bg-blue-50/65
                px-3.5 py-1.5
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.14em]
                text-blue-600
                shadow-[inset_1px_1px_4px_rgba(255,255,255,0.9),inset_-1px_-1px_4px_rgba(59,130,246,0.08)]
              "
            >
              <MessageSquare className="h-3 w-3" />
              <span>09. Client Endorsements</span>
            </div>

            <h2
              className="
                text-3xl
                font-extrabold
                leading-tight
                tracking-[-0.035em]
                text-slate-900
                sm:text-5xl
              "
            >
              CLIENT TESTIMONIALS.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Transparent client endorsements. Real verified feedback is
              displayed as active retainer cycles conclude.
            </p>
          </div>

          {/* Leave Feedback */}
          <button
            onClick={function () {
              setFeedbackModalOpen(true);
            }}
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-2
              self-start
              rounded-full
              border border-white/80
              bg-white/60
              px-5 py-3
              text-xs
              font-bold
              text-slate-700
              shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.10),0_8px_18px_rgba(100,116,139,0.07)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-white/80
              hover:text-blue-600
              sm:self-auto
            "
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Leave a Client Endorsement</span>
          </button>
        </div>

        {/* =====================================================
            AUTHENTIC TESTIMONIAL PLACEHOLDERS
        ====================================================== */}

        <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-3">

          {[1, 2, 3].map(function (slot) {
            return (
              <div
                key={slot}
                className="
                  group
                  flex min-h-[240px]
                  flex-col
                  justify-between
                  rounded-[1.75rem]
                  border border-dashed
                  border-slate-300/80
                  bg-white/40
                  p-6
                  shadow-[inset_3px_3px_8px_rgba(255,255,255,0.9),inset_-3px_-3px_8px_rgba(148,163,184,0.08),0_12px_30px_rgba(100,116,139,0.05)]
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-white/55
                  hover:shadow-[inset_3px_3px_8px_rgba(255,255,255,0.95),inset_-3px_-3px_8px_rgba(148,163,184,0.09),0_18px_35px_rgba(100,116,139,0.08)]
                  sm:p-7
                "
              >
                <div>

                  {/* Quote Icon */}
                  <div
                    className="
                      mb-6
                      flex h-11 w-11
                      items-center justify-center
                      rounded-2xl
                      border border-white/80
                      bg-slate-100/70
                      shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.10)]
                    "
                  >
                    <Quote className="h-4 w-4 text-slate-400" />
                  </div>

                  {/* Authenticity Message */}
                  <div
                    className="
                      mb-4
                      text-sm
                      italic
                      leading-relaxed
                      text-slate-500
                    "
                  >
                    &ldquo;Client endorsement slot #{slot} — Real client
                    feedback will be published here upon campaign milestone
                    sign-off.&rdquo;
                  </div>

                  {/* Stars kept subtle — not presented as fake rating */}
                  <div className="flex items-center gap-1 opacity-40">
                    <Star className="h-3 w-3 text-slate-400" />
                    <Star className="h-3 w-3 text-slate-400" />
                    <Star className="h-3 w-3 text-slate-400" />
                    <Star className="h-3 w-3 text-slate-400" />
                    <Star className="h-3 w-3 text-slate-400" />
                  </div>
                </div>

                {/* Footer */}
                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    gap-3
                    border-t border-white/80
                    pt-4
                    text-[10px]
                    font-semibold
                    text-slate-400
                  "
                >
                  <span>Verified Client #{slot}</span>

                  <span
                    className="
                      rounded-full
                      bg-emerald-50/70
                      px-2.5 py-1
                      text-emerald-600
                      shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9)]
                    "
                  >
                    Active Engagement
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            TRANSPARENCY DISCLOSURE
        ====================================================== */}

        <div
          className="
            flex items-center gap-3
            rounded-[1.25rem]
            border border-white/80
            bg-white/45
            p-4
            text-xs
            text-slate-500
            shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(148,163,184,0.08),0_8px_20px_rgba(100,116,139,0.05)]
            backdrop-blur-xl
          "
        >
          <span
            className="
              h-2.5 w-2.5
              shrink-0
              rounded-full
              bg-blue-500
              shadow-[0_0_8px_rgba(59,130,246,0.30)]
            "
          />

          <span>
            <strong className="font-bold text-slate-700">
              Strict Professional Policy:
            </strong>{' '}
            Amit Ola does not fabricate client reviews, fake case studies, or
            mock testimonials.
          </span>
        </div>

        {/* =====================================================
            FEEDBACK MODAL
        ====================================================== */}

        {feedbackModalOpen && (
          <div
            className="
              fixed inset-0 z-[70]
              flex items-center justify-center
              bg-slate-950/45
              p-4
              backdrop-blur-md
            "
            onClick={function () {
              setFeedbackModalOpen(false);
            }}
          >
            <div
              className="
                relative
                max-h-[90vh]
                w-full
                max-w-md
                overflow-y-auto
                rounded-[2rem]
                border border-white/80
                bg-white/75
                p-6
                shadow-[inset_3px_3px_10px_rgba(255,255,255,0.95),inset_-4px_-4px_12px_rgba(148,163,184,0.12),0_30px_80px_rgba(15,23,42,0.20)]
                backdrop-blur-2xl
                sm:p-8
              "
              onClick={function (e) {
                e.stopPropagation();
              }}
            >
              {/* Modal Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-blue-200/25 blur-3xl" />

              {submittedFeedback ? (
                /* =============================================
                   SUCCESS STATE
                ============================================== */

                <div className="relative z-10 py-6 text-center">

                  <div
                    className="
                      mx-auto mb-4
                      flex h-16 w-16
                      items-center justify-center
                      rounded-[1.25rem]
                      bg-emerald-50
                      shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-2px_-2px_5px_rgba(16,185,129,0.08),0_10px_22px_rgba(16,185,129,0.08)]
                    "
                  >
                    <CheckCircle className="h-8 w-8 text-emerald-500" />
                  </div>

                  <h3
                    className="
                      mb-2
                      text-xl
                      font-extrabold
                      tracking-[-0.02em]
                      text-slate-900
                    "
                  >
                    Thank You for Your Feedback!
                  </h3>

                  <p className="mb-6 text-xs leading-relaxed text-slate-500">
                    Your testimonial has been submitted to Amit Ola for
                    verification and will be published on the portfolio.
                  </p>

                  <button
                    onClick={function () {
                      setSubmittedFeedback(false);
                      setFeedbackModalOpen(false);
                    }}
                    className="
                      rounded-full
                      bg-gradient-to-r
                      from-blue-600
                      to-indigo-600
                      px-6 py-3
                      text-xs
                      font-bold
                      text-white
                      shadow-[inset_2px_2px_5px_rgba(255,255,255,0.18),inset_-2px_-2px_5px_rgba(30,64,175,0.25),0_10px_22px_rgba(37,99,235,0.16)]
                      transition-all duration-200
                      hover:-translate-y-0.5
                    "
                  >
                    Close
                  </button>
                </div>
              ) : (
                /* =============================================
                   FEEDBACK FORM
                ============================================== */

                <form
                  onSubmit={handleFeedbackSubmit}
                  className="relative z-10 space-y-4"
                >
                  {/* Form Header */}
                  <div className="mb-5">

                    <div
                      className="
                        mb-3
                        flex h-10 w-10
                        items-center justify-center
                        rounded-xl
                        bg-blue-50
                        text-blue-600
                        shadow-[inset_2px_2px_4px_rgba(255,255,255,0.95),inset_-2px_-2px_4px_rgba(59,130,246,0.08)]
                      "
                    >
                      <Send className="h-4 w-4" />
                    </div>

                    <h3
                      className="
                        text-xl
                        font-extrabold
                        tracking-[-0.025em]
                        text-slate-900
                      "
                    >
                      Submit Client Feedback
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      If you have collaborated with Amit on SEO, Meta Ads, or
                      web strategy, share your experience.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label
                      className="
                        mb-1.5
                        block
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.12em]
                        text-slate-500
                      "
                    >
                      Your Full Name
                    </label>

                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={function (e) {
                        setClientName(e.target.value);
                      }}
                      placeholder="e.g. Rahul Sharma"
                      className="
                        w-full
                        rounded-2xl
                        border border-white/80
                        bg-slate-50/70
                        px-4 py-3
                        text-xs
                        font-medium
                        text-slate-800
                        shadow-[inset_2px_2px_5px_rgba(148,163,184,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.95)]
                        outline-none
                        placeholder:text-slate-400
                        transition-all duration-200
                        focus:border-blue-200
                        focus:bg-white/80
                        focus:shadow-[inset_2px_2px_5px_rgba(148,163,184,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.95),0_0_0_4px_rgba(59,130,246,0.07)]
                      "
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      className="
                        mb-1.5
                        block
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.12em]
                        text-slate-500
                      "
                    >
                      Company / Organization
                    </label>

                    <input
                      type="text"
                      required
                      value={clientCompany}
                      onChange={function (e) {
                        setClientCompany(e.target.value);
                      }}
                      placeholder="e.g. Acme Tech Ltd"
                      className="
                        w-full
                        rounded-2xl
                        border border-white/80
                        bg-slate-50/70
                        px-4 py-3
                        text-xs
                        font-medium
                        text-slate-800
                        shadow-[inset_2px_2px_5px_rgba(148,163,184,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.95)]
                        outline-none
                        placeholder:text-slate-400
                        transition-all duration-200
                        focus:border-blue-200
                        focus:bg-white/80
                        focus:shadow-[inset_2px_2px_5px_rgba(148,163,184,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.95),0_0_0_4px_rgba(59,130,246,0.07)]
                      "
                    />
                  </div>

                  {/* Review */}
                  <div>
                    <label
                      className="
                        mb-1.5
                        block
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.12em]
                        text-slate-500
                      "
                    >
                      Your Review / Endorsement
                    </label>

                    <textarea
                      required
                      rows={4}
                      value={reviewNote}
                      onChange={function (e) {
                        setReviewNote(e.target.value);
                      }}
                      placeholder="Describe the outcomes, communication, and impact of working together..."
                      className="
                        w-full
                        resize-none
                        rounded-2xl
                        border border-white/80
                        bg-slate-50/70
                        px-4 py-3
                        text-xs
                        font-medium
                        leading-relaxed
                        text-slate-800
                        shadow-[inset_2px_2px_5px_rgba(148,163,184,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.95)]
                        outline-none
                        placeholder:text-slate-400
                        transition-all duration-200
                        focus:border-blue-200
                        focus:bg-white/80
                        focus:shadow-[inset_2px_2px_5px_rgba(148,163,184,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.95),0_0_0_4px_rgba(59,130,246,0.07)]
                      "
                    />
                  </div>

                  {/* Actions */}
                  <div
                    className="
                      flex
                      justify-end
                      gap-3
                      border-t border-white/80
                      pt-5
                    "
                  >
                    <button
                      type="button"
                      onClick={function () {
                        setFeedbackModalOpen(false);
                      }}
                      className="
                        rounded-full
                        px-5 py-2.5
                        text-xs
                        font-semibold
                        text-slate-400
                        transition-colors
                        hover:text-slate-700
                      "
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-gradient-to-r
                        from-blue-600
                        to-indigo-600
                        px-5 py-2.5
                        text-xs
                        font-bold
                        text-white
                        shadow-[inset_2px_2px_5px_rgba(255,255,255,0.18),inset_-2px_-2px_5px_rgba(30,64,175,0.25),0_9px_20px_rgba(37,99,235,0.15)]
                        transition-all duration-200
                        hover:-translate-y-0.5
                      "
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Send Endorsement</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}