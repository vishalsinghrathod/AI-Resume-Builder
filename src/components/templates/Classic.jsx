"use client";

import { CheckCircle2 } from "lucide-react";

export default function Classic({ isSelected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl border bg-white transition-all duration-500 will-change-transform
      ${
        isSelected
          ? "border-violet-500 shadow-2xl shadow-violet-200/60 scale-[1.01] md:scale-[1.02]"
          : "border-gray-200 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-100/70 hover:-translate-y-1 hover:scale-[1.01]"
      }`}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Top Badge */}
      <div className="absolute left-2 top-2 z-20 sm:left-3 sm:top-3">
        <span className="rounded-full border border-violet-200 bg-violet-100/80 px-2 sm:px-3 py-1 text-[10px] sm:text-[11px] font-semibold tracking-wide text-violet-700 backdrop-blur-md">
          CLASSIC
        </span>
      </div>

      {/* Selected Badge */}
      {isSelected && (
        <div className="absolute right-2 top-2 z-20 flex items-center gap-1 rounded-full bg-violet-600 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-white shadow-lg">
          <CheckCircle2 size={12} className="sm:w-[14px] sm:h-[14px]" />
          Selected
        </div>
      )}

      {/* Resume Preview */}
      <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 p-3 sm:p-4 md:p-5">
        <div className="mx-auto h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden rounded-lg sm:rounded-xl border border-gray-200 bg-white shadow-md">
          
          {/* Resume Layout */}
          <div className="flex h-full w-full overflow-hidden">

            {/* Sidebar */}
            <div className="w-[32%] sm:w-[30%] shrink-0 bg-gray-900 p-2 sm:p-3 md:p-4 text-white overflow-hidden">

              {/* Profile */}
              <div className="mb-3 sm:mb-4 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-gray-700" />

              {/* Name Blocks */}
              <div className="space-y-1 sm:space-y-2">
                <div className="h-1.5 sm:h-2 w-10 sm:w-14 md:w-16 rounded bg-gray-500" />
                <div className="h-1.5 sm:h-2 w-12 sm:w-16 md:w-20 rounded bg-gray-700" />
              </div>

              {/* Sidebar Sections */}
              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">

                <div>
                  <div className="mb-2 h-1.5 sm:h-2 w-10 sm:w-12 md:w-14 rounded bg-violet-400" />

                  <div className="space-y-1">
                    <div className="h-1 rounded bg-gray-600" />
                    <div className="h-1 w-5/6 rounded bg-gray-700" />
                    <div className="h-1 w-4/6 rounded bg-gray-700" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 h-1.5 sm:h-2 w-10 sm:w-12 md:w-14 rounded bg-violet-400" />

                  <div className="space-y-1">
                    <div className="h-1 rounded bg-gray-600" />
                    <div className="h-1 w-4/6 rounded bg-gray-700" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-0 flex-1 overflow-hidden p-2 sm:p-3 md:p-4">

              {/* Header */}
              <div className="overflow-hidden border-b border-gray-200 pb-2 sm:pb-3">
                <h2 className="truncate text-[11px] sm:text-sm md:text-lg font-bold text-gray-800">
                  John Doe
                </h2>

                <p className="truncate text-[8px] sm:text-[10px] md:text-xs text-gray-500">
                  Senior Software Engineer
                </p>
              </div>

              {/* Sections */}
              <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 overflow-hidden">

                {/* Experience */}
                <div className="overflow-hidden">
                  <div className="mb-2 h-1.5 sm:h-2 w-[55%] rounded bg-violet-500" />

                  <div className="space-y-1 sm:space-y-2 overflow-hidden">
                    <div className="h-1.5 sm:h-2 w-full rounded bg-gray-200" />
                    <div className="h-1.5 sm:h-2 w-[90%] rounded bg-gray-100" />
                    <div className="h-1.5 sm:h-2 w-[75%] rounded bg-gray-100" />
                  </div>
                </div>

                {/* Education */}
                <div className="overflow-hidden">
                  <div className="mb-2 h-1.5 sm:h-2 w-[45%] rounded bg-violet-500" />

                  <div className="space-y-1 sm:space-y-2 overflow-hidden">
                    <div className="h-1.5 sm:h-2 w-full rounded bg-gray-200" />
                    <div className="h-1.5 sm:h-2 w-[80%] rounded bg-gray-100" />
                  </div>
                </div>

                {/* Skills */}
                <div className="overflow-hidden">
                  <div className="mb-2 h-1.5 sm:h-2 w-[35%] rounded bg-violet-500" />

                  <div className="flex flex-wrap gap-1 sm:gap-2 overflow-hidden">
                    <div className="h-3 sm:h-4 md:h-5 w-8 sm:w-12 md:w-14 rounded-full bg-violet-100" />
                    <div className="h-3 sm:h-4 md:h-5 w-10 sm:w-14 md:w-16 rounded-full bg-blue-100" />
                    <div className="h-3 sm:h-4 md:h-5 w-7 sm:w-10 md:w-12 rounded-full bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
          <button className="rounded-lg sm:rounded-xl bg-white px-3 sm:px-5 py-2 text-[10px] sm:text-sm font-semibold text-gray-900 shadow-xl transition hover:scale-105">
            Use Classic Template
          </button>
        </div>

        {/* Shine Effect */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition duration-700 group-hover:opacity-100">
          <div className="absolute left-[-60%] top-0 h-full w-[50%] rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_1.4s_linear]" />
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