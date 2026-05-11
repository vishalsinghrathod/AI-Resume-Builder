"use client";

import { CheckCircle2 } from "lucide-react";

export default function Modern({ isSelected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl border bg-white transition-all duration-500 will-change-transform
      ${
        isSelected
          ? "border-fuchsia-500 shadow-2xl shadow-fuchsia-200/60 scale-[1.01] md:scale-[1.02]"
          : "border-gray-200 hover:-translate-y-1 hover:border-fuchsia-300 hover:shadow-2xl hover:shadow-fuchsia-100/70 hover:scale-[1.01]"
      }`}
    >
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-purple-500/5 to-blue-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Template Badge */}
      <div className="absolute left-2 top-2 z-20 sm:left-3 sm:top-3">
        <span className="rounded-full border border-fuchsia-200 bg-fuchsia-100/80 px-2 sm:px-3 py-1 text-[10px] sm:text-[11px] font-semibold tracking-wide text-fuchsia-700 backdrop-blur-md">
          MODERN
        </span>
      </div>

      {/* Selected Badge */}
      {isSelected && (
        <div className="absolute right-2 top-2 z-20 flex items-center gap-1 rounded-full bg-fuchsia-600 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-white shadow-lg">
          <CheckCircle2 size={12} className="sm:w-[14px] sm:h-[14px]" />
          Selected
        </div>
      )}

      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-white via-fuchsia-50/20 to-blue-50/30 p-3 sm:p-4 md:p-5">
        <div className="mx-auto h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden rounded-lg sm:rounded-xl border border-gray-200 bg-white shadow-lg">

          {/* Resume Layout */}
          <div className="flex h-full">

            {/* Sidebar */}
            <div className="relative w-[32%] sm:w-[30%] overflow-hidden bg-gradient-to-b from-fuchsia-600 via-purple-600 to-blue-600 p-2 sm:p-3 md:p-4 text-white">

              {/* Decorative Glow */}
              <div className="absolute -top-10 -left-10 h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full bg-white/10 blur-2xl" />

              <div className="absolute bottom-0 right-0 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full bg-pink-400/20 blur-2xl" />

              {/* Profile */}
              <div className="relative z-10">
                <div className="mx-auto mb-2 sm:mb-3 h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14 rounded-full border border-white/30 bg-white/20 backdrop-blur-md" />

                <h2 className="text-center text-[10px] sm:text-xs md:text-sm font-semibold">
                  John Doe
                </h2>

                <p className="mt-1 text-center text-[7px] sm:text-[9px] md:text-[10px] text-white/70">
                  UI/UX Designer
                </p>
              </div>

              {/* Sidebar Sections */}
              <div className="relative z-10 mt-4 sm:mt-5 md:mt-6 space-y-3 sm:space-y-4 md:space-y-5">

                {/* Contact */}
                <div>
                  <div className="mb-2 h-1.5 sm:h-2 w-10 sm:w-12 md:w-14 rounded bg-white/90" />

                  <div className="space-y-1">
                    <div className="h-1 rounded bg-white/40" />
                    <div className="h-1 w-5/6 rounded bg-white/30" />
                    <div className="h-1 w-4/6 rounded bg-white/20" />
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <div className="mb-2 h-1.5 sm:h-2 w-10 sm:w-12 rounded bg-white/90" />

                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <div className="h-3 sm:h-4 md:h-5 w-8 sm:w-10 md:w-12 rounded-full bg-white/20 backdrop-blur-md" />

                    <div className="h-3 sm:h-4 md:h-5 w-10 sm:w-12 md:w-14 rounded-full bg-white/20 backdrop-blur-md" />

                    <div className="h-3 sm:h-4 md:h-5 w-7 sm:w-8 md:w-10 rounded-full bg-white/20 backdrop-blur-md" />
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <div className="mb-2 h-1.5 sm:h-2 w-12 sm:w-14 md:w-16 rounded bg-white/90" />

                  <div className="space-y-1 sm:space-y-2">
                    <div className="h-1 rounded bg-white/30" />
                    <div className="h-1 w-4/5 rounded bg-white/20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-2 sm:p-3 md:p-5">

              {/* Header */}
              <div className="border-b border-gray-200 pb-2 sm:pb-3">
                <div className="h-2 sm:h-3 w-16 sm:w-24 md:w-32 rounded bg-fuchsia-500" />

                <div className="mt-2 h-1.5 sm:h-2 w-12 sm:w-20 md:w-24 rounded bg-gray-300" />
              </div>

              {/* Content Sections */}
              <div className="mt-3 sm:mt-4 md:mt-5 space-y-3 sm:space-y-4 md:space-y-5">

                {/* Experience */}
                <div>
                  <div className="mb-2 h-1.5 sm:h-2 w-14 sm:w-20 md:w-24 rounded bg-gradient-to-r from-fuchsia-500 to-purple-500" />

                  <div className="space-y-1 sm:space-y-2">
                    <div className="h-1.5 sm:h-2 rounded bg-gray-200" />
                    <div className="h-1.5 sm:h-2 w-11/12 rounded bg-gray-100" />
                    <div className="h-1.5 sm:h-2 w-4/5 rounded bg-gray-100" />
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <div className="mb-2 h-1.5 sm:h-2 w-12 sm:w-16 md:w-20 rounded bg-gradient-to-r from-fuchsia-500 to-blue-500" />

                  <div className="grid grid-cols-2 gap-1 sm:gap-2">
                    <div className="rounded-md sm:rounded-lg border border-fuchsia-100 bg-fuchsia-50 p-1.5 sm:p-2">
                      <div className="h-1.5 sm:h-2 w-6 sm:w-8 md:w-10 rounded bg-fuchsia-300" />

                      <div className="mt-2 h-1 rounded bg-fuchsia-100" />
                    </div>

                    <div className="rounded-md sm:rounded-lg border border-blue-100 bg-blue-50 p-1.5 sm:p-2">
                      <div className="h-1.5 sm:h-2 w-6 sm:w-8 md:w-10 rounded bg-blue-300" />

                      <div className="mt-2 h-1 rounded bg-blue-100" />
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <div className="mb-2 h-1.5 sm:h-2 w-12 sm:w-16 md:w-20 rounded bg-gradient-to-r from-purple-500 to-blue-500" />

                  <div className="space-y-1 sm:space-y-2">
                    <div className="h-1.5 sm:h-2 rounded bg-gray-200" />
                    <div className="h-1.5 sm:h-2 w-3/4 rounded bg-gray-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
          <button className="rounded-lg sm:rounded-xl bg-white px-3 sm:px-5 py-2 text-[10px] sm:text-sm font-semibold text-gray-900 shadow-2xl transition hover:scale-105">
            Use Modern Template
          </button>
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