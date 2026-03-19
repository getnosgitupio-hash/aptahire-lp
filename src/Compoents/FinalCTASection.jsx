import React, { useState } from "react";
// If you have an image, import it properly, e.g.:
// import redImage from "../assets/red.png";

// ==============================
// First Component: Free Audit Assessment
// ==============================
const FreeAuditAssessmentSection = () => {
  // === COMPLETE FORM STATE (including the select field) ===
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    bottleneck: "",
    spreadsheets: "", // 👈 was missing
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Option 1: application/x-www-form-urlencoded (as in original)
      const response = await fetch("https://getnos.io/Aptahire/Main.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      // Get response text first (in case it's not JSON)
      const responseText = await response.text();
      console.log("Raw server response:", responseText);

      // Try to parse JSON
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        throw new Error(`Server returned non-JSON. Status: ${response.status}. Response: ${responseText.substring(0, 200)}`);
      }

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}: ${result.message || response.statusText}`);
      }

      if (result.status === "success") {
        setSubmitMessage("Form submitted successfully! Redirecting...");

        // Reset all fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          bottleneck: "",
          spreadsheets: "",
        });

        if (result.redirect) {
          setTimeout(() => {
            window.location.href = result.redirect;
          }, 1500);
        }
      } else {
        setSubmitMessage(result.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitMessage(`Error: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };


};

// ==============================
// Second Component: Final CTA (with working form)
// ==============================
const FinalCTASection = () => {
  // State for the second form (if you want it to submit to the same API)
  const [ctaFormData, setCtaFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    bottleneck: "",
  });
  const [ctaSubmitting, setCtaSubmitting] = useState(false);
  const [ctaMessage, setCtaMessage] = useState("");

  const handleCtaChange = (e) => {
    const { name, value } = e.target;
    setCtaFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCtaSubmit = async (e) => {
    e.preventDefault();
    setCtaSubmitting(true);
    setCtaMessage("");

    try {
      // Use the same API endpoint or a different one as needed
      const response = await fetch("https://getnos.io/Aptahire/Main.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(ctaFormData),
      });

      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error("Server returned non-JSON");
      }

      if (result.status === "success") {
        setCtaMessage("Thank you! We'll contact you soon.");
        setCtaFormData({ name: "", email: "", phone: "", company: "", bottleneck: "" });
        if (result.redirect) setTimeout(() => window.location.href = result.redirect, 1500);
      } else {
        setCtaMessage(result.message || "Submission failed.");
      }
    } catch (err) {
      setCtaMessage(`Error: ${err.message}`);
    } finally {
      setCtaSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-[55px] font-bold text-slate-900 leading-tight">
              See How Aptahire Fits Your Hiring Flow
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 max-w-xl">
              Book a free 30-minute strategy call. We'll map your current hiring
              process and show exactly where Aptahire saves time, cost, and
              effort tailored to your roles and volume.
            </p>
            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-md text-slate-700">
              {[
                "Personalized workflow analysis",
                "ROI calculation for your team",
                "Custom integration guidance",
                "No sales pressure practical walkthrough only",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-3 w-3 text-green-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            {ctaMessage && (
              <div className={`mb-4 p-3 rounded-lg text-center font-medium ${
                ctaMessage.includes("Thank") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}>
                {ctaMessage}
              </div>
            )}
            <form onSubmit={handleCtaSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1 sm:mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={ctaFormData.name}
                  onChange={handleCtaChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1 sm:mb-2">Work Email *</label>
                <input
                  type="email"
                  name="email"
                  value={ctaFormData.email}
                  onChange={handleCtaChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1 sm:mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={ctaFormData.phone}
                  onChange={handleCtaChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1 sm:mb-2">Company / Role *</label>
                <input
                  type="text"
                  name="company"
                  value={ctaFormData.company}
                  onChange={handleCtaChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1 sm:mb-2">Biggest hiring bottleneck *</label>
                <select
                  name="bottleneck"
                  value={ctaFormData.bottleneck}
                  onChange={handleCtaChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm sm:text-base"
                >
                  <option value="">Select your main challenge...</option>
                  <option value="Resume screening volume">Resume screening volume</option>
                  <option value="Interview scheduling">Interview scheduling</option>
                  <option value="No-shows & drop-offs">No-shows & drop-offs</option>
                  <option value="Speed to shortlist">Speed to shortlist</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={ctaSubmitting}
                className="w-full inline-flex items-center justify-center rounded-xl px-10 sm:px-30 py-4 text-base sm:text-lg md:text-base font-semibold text-white bg-gradient-to-r from-[rgb(50_94_235)] to-[rgb(140_54_234)] shadow-lg shadow-[rgb(50_94_235)/30] transition-all duration-300 hover:scale-[1.04] hover:shadow-xl active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {ctaSubmitting ? "Submitting..." : "🚫 Grab your slot now — it won't last long."}
              </button>

              <p className="text-red-600 font-semibold tracking-wide text-center">
    🚨 HURRY! Only 7 slots left this week.
  </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==============================
// Main Export (if you need both)
// ==============================
export default function App() {
  return (
    <>
      <FreeAuditAssessmentSection />
      <FinalCTASection />
    </>
  );
}