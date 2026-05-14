"use client";

export default function Skills({
  formData,
  setFormData,
}) {

  return (
    <div>

      {/* Heading */}
      <div className="mb-6">

        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Skills
        </h2>

        <p className="text-sm md:text-base text-gray-500 mt-1">
          Add your technical and professional skills separated by commas.
        </p>

      </div>

      {/* Skills Input */}
      <div>

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Skills
        </label>

        <input
          type="text"

          placeholder="React, Next.js, Tailwind CSS, JavaScript"

          className="
            w-full
            rounded-xl
            border
            border-gray-300
            bg-white
            px-4
            py-3
            text-sm
            md:text-base
            outline-none
            transition
            focus:border-purple-500
            focus:ring-4
            focus:ring-purple-100
          "

          value={formData.skills.join(", ")}

          onChange={(e) =>
            setFormData({
              ...formData,

              skills: e.target.value
                .split(",")
                .map((skill) => skill.trim()),
            })
          }
        />

      </div>

      {/* Skills Preview */}
      <div className="mt-6 flex flex-wrap gap-3">

        {formData.skills
          .filter((skill) => skill !== "")
          .map((skill, index) => (

            <span
              key={index}

              className="
                rounded-full
                bg-purple-100
                text-purple-700
                px-4
                py-2
                text-xs
                md:text-sm
                font-medium
              "
            >
              {skill}
            </span>

          ))}

      </div>

    </div>
  );
}