/**
 * DifferentiationSection Component
 * Explains the AI hiring partner value proposition and differentiation
 */

export default function DifferentiationSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The AI Hiring Partner Agencies Rely On
            <span className="block mt-2 text-blue-400">When Speed and Quality Matter</span>
          </h2>
        </div>

        {/* Problem Statement */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/20 mb-8">
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-6">
            High-volume hiring overwhelms lean HR teams and agencies, so they end up taking whoever is "on the market" instead of the best fits. The strongest talent stays buried in CV stacks while time-to-submit and cost-per-hire spiral.
          </p>
          
          {/* Solution */}
          <div className="border-t border-white/20 pt-6">
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              <span className="font-bold text-blue-400">Aptahire now mimics a real recruiter's journey</span> from the moment a candidate applies. The AI makes a natural-sounding phone call, verifies basics, runs a conversational screen, and sends next-step instructions plus a clear recommendation to HR. Your team focuses only on final interviews and offers while Aptahire quietly handles every earlier stage 24/7.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="#final-cta"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-lg font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Let An Always-On AI Recruiter Work For You
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-slate-300 mt-4 text-sm sm:text-base">
            Don't let faster competitors steal your best candidates
          </p>
        </div>
      </div>
    </section>
  );
}
