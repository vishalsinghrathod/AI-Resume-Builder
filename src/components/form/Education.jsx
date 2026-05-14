"use client";

export default function Education({
  formData,
  setFormData,
}) {

  return (
    <div>

      {/* Heading */}
      <div className="mb-6">

        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Education
        </h2>

        <p className="text-sm md:text-base text-gray-500 mt-1">
          Add your degree, college, and passing year details.
        </p>

      </div>

      {/* Form Fields */}
      <div className="space-y-5">

        {/* Degree */}
        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Degree
          </label>

          <input
            type="text"
            placeholder="Bachelor of Computer Applications"

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

            value={formData.education.degree}

            onChange={(e) =>
              setFormData({
                ...formData,

                education: {
                  ...formData.education,
                  degree: e.target.value,
                },
              })
            }
          />

        </div>

        {/* College */}
        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            College / University
          </label>

          <input
            type="text"
            placeholder="IGNOU University"

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

            value={formData.education.college}

            onChange={(e) =>
              setFormData({
                ...formData,

                education: {
                  ...formData.education,
                  college: e.target.value,
                },
              })
            }
          />

        </div>

        {/* Year */}
        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Passing Year
          </label>

          <input
            type="text"
            placeholder="2025 - 2027"

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

            value={formData.education.year}

            onChange={(e) =>
              setFormData({
                ...formData,

                education: {
                  ...formData.education,
                  year: e.target.value,
                },
              })
            }
          />

        </div>

      </div>

    </div>
  );
}