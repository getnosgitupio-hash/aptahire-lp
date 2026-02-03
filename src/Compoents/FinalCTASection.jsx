import React from "react";

export default function FinalCTASection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-[55px] font-bold text-slate-900 leading-tight">
              See How Aptahire Fits Your
            Hiring Flow
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 max-w-xl">
              Book a free 30-minute strategy call. We'll map your current hiring
              process and show exactly where Aptahire saves time, cost, and
              effort tailored to your roles and volume.
            </p>

            {/* Checklist */}
            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-md text-slate-700">
              {[
                "Personalized workflow analysis",
                "ROI calculation for your team",
                "Custom integration guidance",
                "No sales pressure practical walkthrough only",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-3 w-3 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <form className="space-y-4 sm:space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm sm:text-base"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-300 px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm sm:text-base"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-slate-300 px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm sm:text-base"
                />
              </div>

              {/* Company / Role */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                  Company / Role *
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm sm:text-base"
                />
              </div>

              {/* Select */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                  Biggest hiring bottleneck *
                </label>
                <select className="w-full rounded-lg border border-slate-300 px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm sm:text-base">
                  <option>Select your main challenge...</option>
                  <option>Resume screening volume</option>
                  <option>Interview scheduling</option>
                  <option>No-shows & drop-offs</option>
                  <option>Speed to shortlist</option>
                </select>
              </div>

              {/* CTA */}
    <button
  type="submit"
  className="
   
              inline-flex items-center justify-center
              rounded-xl
              px-10 sm:px-32 py-4
              text-base sm:text-lg md:text-lg
              font-semibold text-white
              bg-gradient-to-r
              from-[rgb(50_94_235)]
              to-[rgb(140_54_234)]
              shadow-lg shadow-[rgb(50_94_235)/30]
              transition-all duration-300
              hover:scale-[1.04]
              hover:shadow-xl
              active:scale-[0.97]
            
  "
>
  Get My Free Strategy Call
</button>


              {/* Trust line */}
              <p className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 mt-2">
                <svg
                  className="h-3 w-3 sm:h-4 sm:w-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
                  <path d="M5.5 21h13a2.5 2.5 0 002.5-2.5V11l-9-4-9 4v7.5A2.5 2.5 0 005.5 21z" />
                </svg>
                No sales pressure. Practical walkthrough only.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
