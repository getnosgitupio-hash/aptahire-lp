/**
 * FinalCTASection Component
 * Final call-to-action with strategy call form
 */

import { useState } from 'react';

export default function FinalCTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    bottleneck: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', bottleneck: '' });
    }, 5000);
  };

  return (
    <section id="final-cta" className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            We Welcome You to Transform
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Your Next Hire with Aptahire
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            For a free 30-minute strategy call on how to redesign your recruiter journey from "Apply" to final recommendation using AI phone calls, multilingual interviews, and built-in automation, share your details below, and the team will be in touch shortly.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
              <p className="text-slate-300 text-lg">
                Your strategy call request has been submitted. Our team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  placeholder="your.email@company.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  Company / Role *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  placeholder="Company name & your role"
                />
              </div>

              {/* Bottleneck Field */}
              <div>
                <label htmlFor="bottleneck" className="block text-sm font-semibold mb-2">
                  Biggest hiring bottleneck right now... *
                </label>
                <textarea
                  id="bottleneck"
                  name="bottleneck"
                  value={formData.bottleneck}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your biggest challenge (e.g., too many applications, slow screening, no-shows, etc.)"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-lg font-bold rounded-xl shadow-2xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center"
              >
                GET MY FREE STRATEGY CALL
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-slate-400 text-center">
                By submitting this form, you agree to receive communications from Aptahire. We respect your privacy and will never share your information.
              </p>
            </form>
          )}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <p className="text-3xl font-bold text-blue-400 mb-2">30 min</p>
            <p className="text-slate-300">Free Strategy Call</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <p className="text-3xl font-bold text-purple-400 mb-2">No Pitch</p>
            <p className="text-slate-300">Just Pure Value</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <p className="text-3xl font-bold text-pink-400 mb-2">500+</p>
            <p className="text-slate-300">Teams Trust Us</p>
          </div>
        </div>
      </div>
    </section>
  );
}
