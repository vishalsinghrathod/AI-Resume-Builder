"use client";

import { useRouter } from "next/navigation";

export default function CreateResume({
  selectedTemplate
}) {

  const router = useRouter();
  return (
    <section id="createResume" className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-[#5A4DE5] via-[#6B5CED] to-[#928CED] px-5 py-8 text-center shadow-xl sm:px-8 md:flex-row md:text-left">

        {/* Left Content */}
        <div className="max-w-2xl">
          <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
            Ready to Build Your Perfect Resume?
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-white/90 sm:text-base">
            Join thousands of job seekers who landed their dream jobs.
          </p>
        </div>

        {/* Button */}
        <div className="w-full md:w-auto">
          <button

            disabled={!selectedTemplate}

            onClick={() => router.push(`/form?template=${selectedTemplate}`)}

            className={`px-6 py-3 rounded-xl text-black font-bold transition-all duration-300

  ${selectedTemplate
                ? "bg-white hover:bg-gray-300"
                : "bg-gray-400 cursor-not-allowed"
              }`}

            >
            Create My Resume ➡️
          </button>
        </div>
      </div>
    </section>
  );
}