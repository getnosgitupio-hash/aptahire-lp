/**
 * ValueTable Component
 * Two-column comparison table showing features and their benefits
 */

export default function ValueTable() {
  const values = [
    {
      feature: 'Structured, Multi-Round Interviews',
      benefit: 'Screen deeper without adding recruiter hours'
    },
    {
      feature: 'Interview-Backed Reports After Every Round',
      benefit: 'Defend every shortlist with evidence'
    },
    {
      feature: '20+ Language Coverage',
      benefit: 'Hire confidently across regions and markets'
    },
    {
      feature: 'JD-to-Interview Alignment',
      benefit: 'Ensure questions actually match the role'
    },
    {
      feature: 'Recruiter-Defined Pass Criteria',
      benefit: 'Automation without losing control'
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Your Expectations, Exceeded
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            Built for teams where every vacancy hits revenue.
          </p>
        </div>

        {/* Value Table */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
            <div className="px-6 sm:px-8 py-4 font-bold text-lg border-b md:border-b-0 md:border-r border-white/20">
              What You Get
            </div>
            <div className="px-6 sm:px-8 py-4 font-bold text-lg">
              Why It Matters
            </div>
          </div>

          {/* Table Rows */}
          {values.map((item, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 ${index !== values.length - 1 ? 'border-b border-slate-200' : ''}`}
            >
              <div className="px-6 sm:px-8 py-6 font-semibold text-slate-900 border-b md:border-b-0 md:border-r border-slate-200">
                {item.feature}
              </div>
              <div className="px-6 sm:px-8 py-6 text-slate-700">
                {item.benefit}
              </div>
            </div>
          ))}
        </div>

        {/* Result Statement */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl px-8 py-6 border-2 border-blue-200">
            <p className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Result:
            </p>
            <p className="text-lg sm:text-xl text-slate-700">
              Faster submissions. Stronger shortlists. Zero "why did you send this?" feedback.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a 
            href="#final-cta"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold rounded-xl shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Upgrade Every Submission To 'Wow, Not Meh'
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-slate-600 mt-4 text-sm sm:text-base">
            Approve interview-backed, report-ready hires before competitors even react.
          </p>
        </div>
      </div>
    </section>
  );
}
