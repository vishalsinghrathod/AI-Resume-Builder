"use client";

export default function Projects({
  formData,
  setFormData,
}) {

  // ADD NEW PROJECT
  const addProject = () => {

    setFormData({
      ...formData,

      projects: [
        ...formData.projects,

        {
          title: "",
          description: "",
          liveLink: "",
          github: "",
        },
      ],
    });
  };

  // HANDLE PROJECT CHANGE
  const handleProjectChange = (
    index,
    field,
    value
  ) => {

    const updatedProjects = [...formData.projects];

    updatedProjects[index][field] = value;

    setFormData({
      ...formData,
      projects: updatedProjects,
    });
  };

  return (
    <div>

      {/* Heading */}
      <div className="mb-6">

        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Projects
        </h2>

        <p className="text-sm md:text-base text-gray-500 mt-1">
          Add your projects, descriptions, and live links.
        </p>

      </div>

      {/* Projects */}
      <div className="space-y-6">

        {formData.projects.map((project, index) => (

          <div
            key={index}

            className="
              border
              border-gray-200
              rounded-2xl
              p-4
              md:p-6
              bg-gray-50
              space-y-4
            "
          >

            {/* Project Number */}
            <div className="flex items-center justify-between">

              <h3 className="text-base md:text-lg font-semibold text-gray-800">
                Project {index + 1}
              </h3>

            </div>

            {/* Project Title */}
            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Title
              </label>

              <input
                type="text"

                placeholder="AI Resume Builder"

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

                value={project.title}

                onChange={(e) =>
                  handleProjectChange(
                    index,
                    "title",
                    e.target.value
                  )
                }
              />

            </div>

            {/* Description */}
            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Description
              </label>

              <textarea
                rows={5}

                placeholder="Describe your project, technologies used, and features..."

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

                value={project.description}

                onChange={(e) =>
                  handleProjectChange(
                    index,
                    "description",
                    e.target.value
                  )
                }
              />

            </div>

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Live Link */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Live Demo Link
                </label>

                <input
                  type="text"

                  placeholder="https://yourproject.com"

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

                  value={project.liveLink}

                  onChange={(e) =>
                    handleProjectChange(
                      index,
                      "liveLink",
                      e.target.value
                    )
                  }
                />

              </div>

              {/* Github Link */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GitHub Link
                </label>

                <input
                  type="text"

                  placeholder="https://github.com/username/project"

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

                  value={project.github}

                  onChange={(e) =>
                    handleProjectChange(
                      index,
                      "github",
                      e.target.value
                    )
                  }
                />

              </div>

            </div>

          </div>

        ))}

        {/* Add Project Button */}
        <button
          onClick={addProject}

          className="
            w-full
            md:w-auto
            rounded-xl
            border
            border-purple-600
            px-5
            py-3
            text-sm
            md:text-base
            font-medium
            text-purple-600
            transition
            hover:bg-purple-50
          "
        >
          + Add More Project
        </button>

      </div>

    </div>
  );
}