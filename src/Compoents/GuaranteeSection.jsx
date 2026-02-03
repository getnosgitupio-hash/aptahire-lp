import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import guaranteeBadge from "../assets/Money-back.png";
import ProgressLoad from "./ProgressLoad";
/* 🔢 Counter Hook */
const useCountUp = (end, duration = 1200) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

export default function GuaranteeSection({ variant = "light" }) {
  const hoursSaved = useCountUp(10);
  const isDark = variant === "dark";

  return (
    <section
      className={`relative py-14 sm:py-16 lg:py-20 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔖 Badge Overlay */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
            absolute -top-14 sm:-top-16
            left-[35%] sm:left-[44%] -translate-x-1/2
            z-10
          "
        >
          <img
            src={guaranteeBadge}
            alt="Money Back Guarantee"
            className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 object-contain"
          />
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className={`rounded-3xl border shadow-xl
            pt-20 sm:pt-24 pb-10 sm:pb-12
            px-5 sm:px-10 lg:px-14
            ${
              isDark
                ? "bg-slate-900 border-slate-800 text-slate-100"
                : "bg-white border-slate-200 text-slate-800"
            }`}
        >
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              A Simple, Honest Productivity Guarantee
            </h2>
            <p
              className={`mt-4 text-base sm:text-lg ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              If Aptahire doesn’t save your team real recruiter time, you don’t pay.
            </p>
          </div>

          {/* Content */}
          <div
            className={`max-w-4xl mx-auto space-y-5 sm:space-y-6
              text-base sm:text-lg leading-relaxed
              ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
          >
            <p>
              Aptahire is built for agencies and lean talent teams handling volume,
              urgency, and client pressure. It automates resume screening,
              first-round interviews, and scheduling without removing recruiter
              control.
            </p>

            <p>
              If, after implementing Aptahire on active roles, you’re not saving at
              least{" "}
              <span
                className={`font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {hoursSaved}+ recruiter hours per week
              </span>{" "}
              across screening and evaluations, we’ll{" "}
              <span
                className={`font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                refund your next month
              </span>
              .
            </p>

            <p className="text-sm opacity-80">
              No long-term contracts. No hidden conditions. Measured on real usage.
            </p>
          </div>

          {/* Divider */}
          <div
            className={`my-8 sm:my-10 h-px ${
              isDark ? "bg-slate-800" : "bg-slate-200"
            }`}
          />

               {/* CTA */}
        <div className="mt-14 flex flex-col items-center">
          <button
            className="inline-flex items-center justify-center
              rounded-xl
              px-7 sm:px-8 py-4
              text-base sm:text-3xl
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
              Try Aptahire Risk-Free
          </button>

          <p className="mt-3 text-indigo-600 font-semibold text-sm sm:text-base text-center">
              See the impact on your next high-volume role.
          </p>

          <ProgressLoad />

        </div>
        </motion.div>
      </div>
    </section>
  );
}
