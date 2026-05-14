"use client";

export default function Summary({
  formData,
  setFormData,
}) {

  return (
    <div>

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Professional Summary
        </h2>

        <p className="text-sm md:text-base text-gray-500 mt-1">
          Write a short introduction about yourself, your skills,
          and your experience.
        </p>
      </div>

      {/* Summary Box */}
      <div className="w-full">

        <textarea
          rows={10}

          placeholder="Example: Passionate Frontend Developer skilled in React, Next.js, and Tailwind CSS with experience building responsive and user-friendly web applications..."

          className="
            w-full
            rounded-xl
            border
            border-gray-300
            bg-white
            p-4
            text-sm
            md:text-base
            outline-none
            transition
            resize-none
            focus:border-purple-500
            focus:ring-4
            focus:ring-purple-100
          "

          value={formData.summary}

          onChange={(e) =>
            setFormData({
              ...formData,
              summary: e.target.value,
            })
          }
        />

      </div>

      {/* Character Hint */}
      <div className="mt-3 flex items-center justify-between">

        <p className="text-xs md:text-sm text-gray-500">
          Keep it short and professional.
        </p>

        <span className="text-xs md:text-sm text-purple-600 font-medium">
          {formData.summary.length} Characters
        </span>

      </div>

    </div>
  );
}