"use client";

export default function Experience({
  formData,
  setFormData,
}) {

  return (
    <div>

      {/* Heading */}
      <div className="mb-6">

        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Work Experience
        </h2>

        <p className="text-sm md:text-base text-gray-500 mt-1">
          Add your job role, company details, and work responsibilities.
        </p>

      </div>

      {/* Form Fields */}
      <div className="space-y-5">

        {/* Job Role */}
        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Title
          </label>

          <input
            type="text"
            placeholder="Frontend Developer"

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

            value={formData.experience.role}

            onChange={(e) =>
              setFormData({
                ...formData,

                experience: {
                  ...formData.experience,
                  role: e.target.value,
                },
              })
            }
          />

        </div>

        {/* Company Name */}
        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>

          <input
            type="text"
            placeholder="ABC Tech Company"

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

            value={formData.experience.company}

            onChange={(e) =>
              setFormData({
                ...formData,

                experience: {
                  ...formData.experience,
                  company: e.target.value,
                },
              })
            }
          />

        </div>

        {/* Duration */}
        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duration
          </label>

          <input
            type="text"
            placeholder="Jan 2024 - Present"

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

            value={formData.experience.duration}

            onChange={(e) =>
              setFormData({
                ...formData,

                experience: {
                  ...formData.experience,
                  duration: e.target.value,
                },
              })
            }
          />

        </div>

        {/* Description */}
        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Work Description
          </label>

          <textarea
            rows={6}

            placeholder="Describe your responsibilities, achievements, technologies used, etc."

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
              resize-none
              transition
              focus:border-purple-500
              focus:ring-4
              focus:ring-purple-100
            "

            value={formData.experience.description}

            onChange={(e) =>
              setFormData({
                ...formData,

                experience: {
                  ...formData.experience,
                  description: e.target.value,
                },
              })
            }
          />

        </div>

      </div>

    </div>
  );
}