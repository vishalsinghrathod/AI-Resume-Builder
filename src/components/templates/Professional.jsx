"use client";

import { CheckCircle2 } from "lucide-react";

export default function Professional({ isSelected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl border bg-white transition-all duration-500
      ${
        isSelected
          ? "border-slate-700 shadow-2xl shadow-slate-300/60 scale-[1.01]"
          : "border-gray-200 hover:-translate-y-1 hover:border-slate-400 hover:shadow-2xl hover:shadow-slate-200/70"
      }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/[0.03] via-indigo-500/[0.03] to-slate-800/[0.03] opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Badge */}
      <div className="absolute left-2 top-2 z-20 sm:left-3 sm:top-3">
        <span className="rounded-full border border-slate-300 bg-slate-100/90 px-2 sm:px-3 py-1 text-[10px] sm:text-[11px] font-semibold tracking-wide text-slate-700 backdrop-blur-md">
          PROFESSIONAL
        </span>
      </div>

      {/* Selected */}
      {isSelected && (
        <div className="absolute right-2 top-2 z-20 flex items-center gap-1 rounded-full bg-slate-800 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-white shadow-lg">
          <CheckCircle2 size={12} className="sm:w-[14px] sm:h-[14px]" />
          Selected
        </div>
      )}

      {/* Card */}
      <div className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 p-3 sm:p-4 md:p-5">
        <div className="mx-auto h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden rounded-lg sm:rounded-xl border border-slate-200 bg-white shadow-xl">

          <div className="flex h-full">

            {/* Sidebar */}
            <div className="w-[30%] sm:w-[28%] shrink-0 border-r border-slate-200 bg-slate-900 p-2 sm:p-3 md:p-4 text-white">

              {/* Profile */}
              <div className="flex flex-col items-center border-b border-white/10 pb-2 sm:pb-3">

                <div className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 rounded-full border border-white/20 bg-slate-700" />

                <h2 className="mt-2 text-[8px] sm:text-xs md:text-sm font-semibold tracking-wide text-center leading-tight">
                  John Doe
                </h2>

                <p className="mt-1 text-[6px] sm:text-[8px] md:text-[10px] text-slate-400 text-center">
                  Senior Consultant
                </p>
              </div>

              {/* Sections */}
              <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">

                <div>
                  <div className="mb-2 h-1.5 sm:h-2 w-[65%] rounded bg-indigo-400" />

                  <div className="space-y-1">
                    <div className="h-1 w-full rounded bg-slate-600" />
                    <div className="h-1 w-5/6 rounded bg-slate-700" />
                    <div className="h-1 w-4/6 rounded bg-slate-700" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 h-1.5 sm:h-2 w-[55%] rounded bg-indigo-400" />

                  <div className="space-y-1">
                    <div className="h-1 w-full rounded bg-slate-600" />
                    <div className="h-1 w-4/5 rounded bg-slate-700" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 h-1.5 sm:h-2 w-[60%] rounded bg-indigo-400" />

                  <div className="space-y-1">
                    <div className="h-1 w-full rounded bg-slate-600" />
                    <div className="h-1 w-3/4 rounded bg-slate-700" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0 p-2 sm:p-3 md:p-5">

              {/* Summary */}
              <div className="border-b border-slate-200 pb-2 sm:pb-3">
                <h3 className="text-[10px] sm:text-sm md:text-lg font-bold tracking-wide text-slate-800">
                  Professional Summary
                </h3>

                <div className="mt-2 sm:mt-3 space-y-1">
                  <div className="h-1.5 sm:h-2 w-full rounded bg-slate-200" />
                  <div className="h-1.5 sm:h-2 w-11/12 rounded bg-slate-100" />
                  <div className="h-1.5 sm:h-2 w-4/5 rounded bg-slate-100" />
                </div>
              </div>

              {/* Sections */}
              <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">

                {/* Experience */}
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-1.5 sm:h-2 w-[35%] rounded bg-slate-800" />
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>

                  <div className="space-y-1">
                    <div className="h-1.5 sm:h-2 w-full rounded bg-slate-200" />
                    <div className="h-1.5 sm:h-2 w-11/12 rounded bg-slate-100" />
                    <div className="h-1.5 sm:h-2 w-5/6 rounded bg-slate-100" />
                  </div>
                </div>

                {/* Education */}
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-1.5 sm:h-2 w-[28%] rounded bg-slate-800" />
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>

                  <div className="space-y-1">
                    <div className="h-1.5 sm:h-2 w-full rounded bg-slate-200" />
                    <div className="h-1.5 sm:h-2 w-4/5 rounded bg-slate-100" />
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-1.5 sm:h-2 w-[42%] rounded bg-slate-800" />
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-md border border-slate-200 bg-slate-50 p-2">
                      <div className="h-1.5 sm:h-2 w-[60%] rounded bg-slate-300" />
                      <div className="mt-2 h-1 w-full rounded bg-slate-100" />
                    </div>

                    <div className="rounded-md border border-slate-200 bg-slate-50 p-2">
                      <div className="h-1.5 sm:h-2 w-[60%] rounded bg-slate-300" />
                      <div className="mt-2 h-1 w-full rounded bg-slate-100" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-3 sm:mt-4 border-t border-slate-200 pt-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="h-1.5 sm:h-2 w-[45%] rounded bg-slate-200" />
                  <div className="h-1.5 sm:h-2 w-[25%] rounded bg-indigo-200" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
          <button className="rounded-lg sm:rounded-xl bg-white px-3 sm:px-5 py-2 text-[10px] sm:text-sm font-semibold text-slate-900 shadow-2xl transition hover:scale-105">
            Use Professional Template
          </button>
        </div>

        {/* Shine */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition duration-700 group-hover:opacity-100">
          <div className="absolute left-[-60%] top-0 h-full w-[50%] rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_1.5s_linear]" />
        </div>
      </div>

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