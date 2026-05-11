"use client";

import { CheckCircle2 } from "lucide-react";

export default function Creative({ isSelected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl border bg-white transition-all duration-500 will-change-transform
      ${
        isSelected
          ? "border-pink-500 shadow-2xl shadow-pink-200/60 scale-[1.01] md:scale-[1.02]"
          : "border-gray-200 hover:-translate-y-1 hover:border-pink-300 hover:shadow-2xl hover:shadow-pink-100/70 hover:scale-[1.01]"
      }`}
    >
      {/* Animated Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Template Badge */}
      <div className="absolute left-2 top-2 z-20 sm:left-3 sm:top-3">
        <span className="rounded-full border border-pink-200 bg-pink-100/80 px-2 sm:px-3 py-1 text-[10px] sm:text-[11px] font-semibold tracking-wide text-pink-700 backdrop-blur-md">
          CREATIVE
        </span>
      </div>

      {/* Selected Badge */}
      {isSelected && (
        <div className="absolute right-2 top-2 z-20 flex items-center gap-1 rounded-full bg-pink-500 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-white shadow-lg">
          <CheckCircle2 size={12} className="sm:w-[14px] sm:h-[14px]" />
          Selected
        </div>
      )}

      {/* Main Preview Area */}
      <div className="relative bg-gradient-to-br from-pink-50 via-white to-indigo-50 p-3 sm:p-4 md:p-5">
        <div className="mx-auto h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden rounded-[16px] sm:rounded-[22px] border border-white/30 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 p-[1px] shadow-2xl">

          {/* Glass Card */}
          <div className="relative h-full overflow-hidden rounded-[15px] sm:rounded-[21px] bg-white/10 backdrop-blur-xl">

            {/* Decorative Blurs */}
            <div className="absolute -left-10 top-0 h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 rounded-full bg-pink-400/30 blur-2xl md:blur-3xl" />

            <div className="absolute bottom-0 right-0 h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 rounded-full bg-indigo-400/30 blur-2xl md:blur-3xl" />

            {/* Resume Layout */}
            <div className="relative z-10 flex h-full flex-col p-2 sm:p-4 md:p-5 text-white">

              {/* Top Header */}
              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-[11px] sm:text-sm md:text-lg font-bold tracking-wide">
                    John Doe
                  </h2>

                  <p className="mt-1 text-[7px] sm:text-[10px] md:text-xs text-white/70">
                    Creative Designer
                  </p>
                </div>

                <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14 rounded-lg sm:rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md" />
              </div>

              {/* Main Creative Blocks */}
              <div className="mt-3 sm:mt-5 md:mt-6 grid flex-1 grid-cols-2 gap-2 sm:gap-3">

                {/* Left Large Card */}
                <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/10 p-2 sm:p-3 md:p-4 backdrop-blur-lg">

                  <div className="mb-2 sm:mb-3 h-1.5 sm:h-2 w-12 sm:w-16 md:w-20 rounded-full bg-pink-200/90" />

                  <div className="space-y-1 sm:space-y-2">
                    <div className="h-1 sm:h-2 rounded-full bg-white/60" />
                    <div className="h-1 sm:h-2 w-11/12 rounded-full bg-white/40" />
                    <div className="h-1 sm:h-2 w-4/5 rounded-full bg-white/30" />
                  </div>

                  {/* Skill Pills */}
                  <div className="mt-3 sm:mt-4 md:mt-5 flex flex-wrap gap-1 sm:gap-2">
                    <div className="h-3 sm:h-4 md:h-5 w-8 sm:w-10 md:w-14 rounded-full bg-pink-300/30" />

                    <div className="h-3 sm:h-4 md:h-5 w-7 sm:w-10 md:w-12 rounded-full bg-indigo-300/30" />

                    <div className="h-3 sm:h-4 md:h-5 w-10 sm:w-12 md:w-16 rounded-full bg-white/20" />
                  </div>
                </div>

                {/* Right Small Cards */}
                <div className="flex flex-col gap-2 sm:gap-3">

                  <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/10 p-2 sm:p-3 md:p-4 backdrop-blur-lg">
                    <div className="mb-2 h-1.5 sm:h-2 w-10 sm:w-14 md:w-16 rounded-full bg-indigo-200/90" />

                    <div className="space-y-1 sm:space-y-2">
                      <div className="h-1 sm:h-2 rounded-full bg-white/50" />
                      <div className="h-1 sm:h-2 w-3/4 rounded-full bg-white/30" />
                    </div>
                  </div>

                  <div className="flex-1 rounded-xl sm:rounded-2xl border border-white/10 bg-white/10 p-2 sm:p-3 md:p-4 backdrop-blur-lg">
                    <div className="mb-2 h-1.5 sm:h-2 w-12 sm:w-16 md:w-20 rounded-full bg-pink-200/90" />

                    <div className="space-y-1 sm:space-y-2">
                      <div className="h-1 sm:h-2 rounded-full bg-white/50" />
                      <div className="h-1 sm:h-2 rounded-full bg-white/40" />
                      <div className="h-1 sm:h-2 w-4/5 rounded-full bg-white/30" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Creative Banner */}
              <div className="mt-2 sm:mt-3 md:mt-4 rounded-xl sm:rounded-2xl border border-white/10 bg-white/10 p-2 sm:p-3 backdrop-blur-lg">

                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-1.5 sm:h-2 w-12 sm:w-16 md:w-20 rounded-full bg-white/70" />

                    <div className="mt-2 h-1.5 sm:h-2 w-20 sm:w-24 md:w-32 rounded-full bg-white/30" />
                  </div>

                  <div className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-pink-400/40 to-indigo-400/40" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
          <button className="rounded-lg sm:rounded-xl bg-white px-3 sm:px-5 py-2 text-[10px] sm:text-sm font-semibold text-gray-900 shadow-2xl transition hover:scale-105">
            Use Creative Template
          </button>
        </div>

        {/* Animated Border Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 transition duration-700 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-pink-400/40 shadow-[0_0_50px_rgba(236,72,153,0.25)]" />
        </div>

        {/* Shine Effect */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition duration-700 group-hover:opacity-100">
          <div className="absolute left-[-60%] top-0 h-full w-[50%] rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_1.5s_linear]" />
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-120%) rotate(12deg);
          }
          100% {
            transform: translateX(320%) rotate(12deg);
          }
        }
      `}</style>
    </div>
  );
}