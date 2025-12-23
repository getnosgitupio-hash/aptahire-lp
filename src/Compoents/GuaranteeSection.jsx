/**
 * GuaranteeSection Component
 * Displays the productivity guarantee offer
 */

export default function GuaranteeSection() {
  return (
    <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center px-6 py-3 rounded-full text-sm sm:text-base font-bold bg-white/20 border-2 border-white/40">
            <span className="text-2xl mr-2">✓</span>
            RISK-FREE GUARANTEE
          </span>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Save 10+ Recruiter Hours Every Week
            <span className="block mt-2">Or Your Next Month Is On Us</span>
          </h2>
        </div>

        {/* Content Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border-2 border-white/30 mb-10">
          <p className="text-lg sm:text-xl text-white leading-relaxed mb-6">
            Aptahire is built by former recruiters and agency founders who know how exhausting manual screening, scheduling, and no-show chaos can be when every role demands speed and rigor. It's designed to strip out low-value admin so you protect clients, margins, and your best billers' time.
          </p>
          <p className="text-lg sm:text-xl text-white leading-relaxed">
            If, after fully implementing Aptahire on your open roles, you're not saving at least <span className="font-bold text-yellow-300">10 recruiter hours per week</span> across screening, setup, and first-round evaluations, <span className="font-bold text-yellow-300">your next month is free</span> (T&Cs apply). That's how strongly the team backs its impact on speed-to-submission and cost-per-hire.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="#final-cta"
            className="inline-flex items-center px-8 py-5 bg-white text-green-600 hover:bg-slate-50 text-lg font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Claim Your 10-Hour-Per-Week Productivity Guarantee
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-green-100 mt-4 text-sm sm:text-base">
            Put the Deep Screen System to the test on your next high-volume role.
          </p>
        </div>
      </div>
    </section>
  );
}
