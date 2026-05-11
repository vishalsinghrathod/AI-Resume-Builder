"use client";

export default function Personal({
  formData,
  setFormData,
}) {

  return (
    <div>

      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
        Personal Information
      </h2>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="input"

          value={formData.name}

          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        {/* Role */}
        <input
          type="text"
          placeholder="Your Role"
          className="input"

          value={formData.role}

          onChange={(e) =>
            setFormData({
              ...formData,
              role: e.target.value,
            })
          }
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="input"

          value={formData.email}

          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone Number"
          className="input"

          value={formData.phone}

          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Location"
          className="input md:col-span-2"

          value={formData.location}

          onChange={(e) =>
            setFormData({
              ...formData,
              location: e.target.value,
            })
          }
        />

      </div>

    </div>
  );
}