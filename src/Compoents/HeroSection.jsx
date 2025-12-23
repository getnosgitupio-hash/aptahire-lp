import { useEffect, useState } from "react";
import Hyperspeed from "./HyperSpeed";

export default function HeroSection() {
  const [showBg, setShowBg] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowBg(true), 300);
    const t2 = setTimeout(() => setAnimate(true), 350);

    let scrollTimeout;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        setIsScrolling(true);
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        ticking = false;
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden text-white">

      {/* Hyperspeed background (NEVER UNMOUNTS) */}
      {showBg && (
        <div className="absolute inset-0 z-0 bg-white/20">
          <Hyperspeed
            paused={isScrolling}   // 🔥 KEY FIX
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={0.8}
            rotationSpeed={3.5}
            glowAmount={0.003}
            pillarWidth={2.5}
            pillarHeight={0.35}
            noiseIntensity={0.4}
            pillarRotation={30}
            interactive={false}
            mixBlendMode="normal"
          />
        </div>
      )}

      {/* Orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-xl z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-xl z-10" />

      {/* Hero content */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center h-full text-center
        px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm sm:text-lg font-semibold bg-black/60 border border-purple-500">
            🚨 ATTENTION: Agencies and Lean HR Teams Drowning in Applications
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
          Close More Roles, Faster
          <span
            className="block mt-2 bg-clip-text text-transparent pb-4"
            style={{
              backgroundImage:
                "linear-gradient(90deg,#D8B4FE,#C084FC,#A855F7,#9333EA)",
              textShadow: "0 0 10px rgba(168,85,247,0.6)",
            }}
          >
            Without Burning Out Your Recruiters
          </span>
          <span className="block">Or Cutting Your Fees</span>
        </h1>

        <p className="text-lg lg:text-xl text-slate-100 mb-8 max-w-4xl leading-relaxed font-semibold">
          Aptahire helps ambitious recruitment founders and lean HR teams run end-to-end,
          AI-driven hiring from JD creation to final recommendations.
        </p>

        <a
          href="#final-cta"
          className="group px-8 py-5 bg-gradient-to-r from-blue-600 to-purple-600
          hover:from-blue-700 hover:to-purple-700 text-lg font-bold rounded-xl
          shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Fill Your Pipeline With Client-Ready Candidates Fast
        </a>

        <p className="text-slate-100 text-base sm:text-lg mt-4">
          Join high-volume teams using human-sounding AI to qualify fast.
        </p>
      </div>
    </section>
  );
}
