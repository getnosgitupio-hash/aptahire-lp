import React from "react";
import ProgressLoad from "./ProgressLoad";

// Dashboard images
import searchDashboard from "../assets/dash-1.png";
import interviewDashboard from "../assets/dash-2.png";
import analysisDashboard from "../assets/dash-3.png";
import connectDashboard from "../assets/dash-4.png";

const steps = [
  {
    step: "01",
    title: "Scrreen ",
    subtitle: "Find the right candidates instantly",
    desc: "Resume screening with Aptahire AI validates every applicant against JD matching, skill validation, and cheat detection no manual CV sorting.",
    image: searchDashboard,
    icon: "fa-solid fa-magnifying-glass",
  },
  {
    step: "02",
    title: "Select",
    subtitle: "AI-led multi-round interviews",
    desc: "Phone screening auto-prioritises across customizable interview rounds with AI scoring + eligibility reports.",
    image: interviewDashboard,
    icon: "fa-solid fa-circle-check",
  },
  {
    step: "03",
    title: "Analyze",
    subtitle: "Objective candidate intelligence",
    desc: "Video screening transcripts, multi-language support, cheat signals, detailed reports in one dashboard.",
    image: analysisDashboard,
    icon: "fa-solid fa-chart-line",
  },
  {
    step: "04",
    title: "Connect",
    subtitle: "Move faster without coordination chaos",
    desc: "Auto-schedule interviews, multilingual updates, AI hiring recommendations.",
    image: connectDashboard,
    icon: "fa-solid fa-link",
  },
];

const HiringFlow = () => {
  return (
    <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4 sm:py-12">
      
      {/* HEADING */}
      <h2 className="
        text-center
        text-2xl sm:text-3xl md:text-[40px]
        font-extrabold
        text-slate-900
        mb-10 sm:mb-14
        capitalize
      ">
        From Applications to Client-Ready Shortlists In One Flow
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {steps.map((item, index) => (
          <div
            key={index}
            className="
              relative
              bg-white
              rounded-2xl
              p-5 sm:p-6
              shadow-md
              hover:shadow-xl
              transition
            "
          >
            {/* STEP NUMBER */}
            <span className="
              absolute
              top-3 sm:top-4
              right-4 sm:right-5
              text-3xl sm:text-4xl
              font-extrabold
              text-indigo-200
            ">
              {item.step}
            </span>

            {/* ICON + TITLE */}
            <div className="flex items-center gap-3">
              <div className="
                w-11 h-11 sm:w-12 sm:h-12
                rounded-xl
                bg-indigo-500
                flex items-center justify-center
              ">
                <i className={`${item.icon} text-white text-lg sm:text-xl`} />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {item.title}
              </h3>
            </div>

            {/* SUBTITLE */}
            <p className="mt-2 text-indigo-600 text-base sm:text-lg font-medium">
              {item.subtitle}
            </p>

            {/* DESCRIPTION */}
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              {item.desc}
            </p>

            {/* DASHBOARD IMAGE */}
   {/* DASHBOARD IMAGE — DESKTOP ONLY */}
<div className="hidden md:block mt-4 rounded-xl border border-slate-200 bg-slate-50 p-2">
  <img
    src={item.image}
    alt={item.title}
    className="
      w-full
      h-[240px] sm:h-[300px] lg:h-[360px]
      object-contain
    "
  />
</div>

          </div>
        ))}
      </div>

           {/* CTA */}
        <div className="mt-14 flex flex-col items-center">
          <button
            className="inline-flex items-center justify-center
              rounded-xl
              px-2 sm:px-8 py-4
              text-sm sm:text-3xl
              font-semibold text-white
              bg-gradient-to-r
              from-[rgb(50_94_235)]
              to-[rgb(140_54_234)]
              shadow-lg shadow-[rgb(50_94_235)/30]
              transition-all duration-300
              hover:scale-[1.04]
              hover:shadow-xl
              active:scale-[0.97]"
          >
            Transform Chaos Into Client-Ready Shortlists
          </button>

          <p className="mt-3 text-indigo-600 font-semibold text-sm sm:text-base text-center">
           Convert multi-round, multilingual interviews into confident hiring decisions faster.

          </p>

          <ProgressLoad />

        </div>
    </section>
  );
};

export default HiringFlow;
