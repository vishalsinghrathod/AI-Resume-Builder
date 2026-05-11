"use client";



import { useState } from "react";
import Personal from "@/components/form/Personal";

export default function FormPage() {

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    location: "",
    summary: "",

    skills: [],

    education: {
      degree: "",
      college: "",
      year: "",
    },

    experience: {
      company: "",
      role: "",
      duration: "",
      description: "",
    },

    projects: [
      {
        title: "",
        description: "",
        liveLink: "",
        github: "",
      },
    ],
  });

  const sections = [
    "personal",
    "summary",
    "experience",
    "education",
    "skills",
    "projects",
  ];

  const [activeTab, setActiveTab] = useState("personal");

  const [projects, setProjects] = useState([
    {
      title: "",
      tech: "",
      description: "",
    },
  ]);

  // NEXT BUTTON
  const handleNext = () => {
    const currentIndex = sections.indexOf(activeTab);

    if (currentIndex < sections.length - 1) {
      setActiveTab(sections[currentIndex + 1]);
    }
  };

  // BACK BUTTON
  const handleBack = () => {
    const currentIndex = sections.indexOf(activeTab);

    if (currentIndex > 0) {
      setActiveTab(sections[currentIndex - 1]);
    }
  };

  // ADD MORE PROJECT
  const addProject = () => {
    setProjects([
      ...projects,
      {
        title: "",
        tech: "",
        description: "",
      },
    ]);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">

        {/* 🔹 Sidebar */}
        <aside className="w-full md:w-64 bg-gray-50 border-r p-4">
          <h2 className="text-lg font-bold mb-4">Resume Builder</h2>

          <ul className="space-y-2">
            {[
              { id: "personal", label: "Personal Info" },
              { id: "summary", label: "Summary" },
              { id: "experience", label: "Experience" },
              { id: "education", label: "Education" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
            ].map((item) => (
              <li
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`cursor-pointer px-3 py-2 rounded-lg text-sm transition
                ${activeTab === item.id
                    ? "bg-purple-100 text-purple-600 font-semibold"
                    : "hover:bg-gray-200"
                  }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </aside>

        {/* 🔹 Form Area */}
        <section className="flex-1 p-6 md:p-8">

          {/* PERSONAL INFO */}
          {activeTab === "personal" && (

            <Personal
              formData={formData}
              setFormData={setFormData}
            />

          )}

          {/* SUMMARY */}
          {activeTab === "summary" && (
            <div>
              <h2 className="text-xl font-bold mb-4">
                Professional Summary
              </h2>

              <textarea
                rows={6}
                className="input w-full"
                placeholder="Write a short summary about yourself..."
              />
            </div>
          )}

          {/* EXPERIENCE */}
          {activeTab === "experience" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Experience</h2>

              <div className="space-y-4">
                <input className="input" placeholder="Job Title" />
                <input className="input" placeholder="Company Name" />
                <input
                  className="input"
                  placeholder="Duration (e.g. Jan 2022 - Present)"
                />

                <textarea
                  rows={4}
                  className="input"
                  placeholder="Describe your work..."
                />
              </div>
            </div>
          )}

          {/* EDUCATION */}
          {activeTab === "education" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Education</h2>

              <div className="space-y-4">
                <input className="input" placeholder="Degree" />
                <input
                  className="input"
                  placeholder="University / College"
                />
                <input className="input" placeholder="Year" />
              </div>
            </div>
          )}

          {/* SKILLS */}
          {activeTab === "skills" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Skills</h2>

              <input
                className="input"
                placeholder="e.g. React, JavaScript, Node.js"
              />
            </div>
          )}

          {/* PROJECTS */}
          {activeTab === "projects" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Projects</h2>

              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="border rounded-xl p-4 space-y-4"
                  >
                    <input
                      className="input"
                      placeholder="Project Title"
                    />

                    <input
                      className="input"
                      placeholder="Tech Stack"
                    />

                    <textarea
                      rows={4}
                      className="input"
                      placeholder="Project Description"
                    />
                  </div>
                ))}

                {/* ADD MORE PROJECT BUTTON */}
                <button
                  onClick={addProject}
                  className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition"
                >
                  + Add More Project
                </button>
              </div>
            </div>
          )}

          {/* 🔘 Bottom Buttons */}
          <div className="flex items-center justify-between mt-8">

            {/* BACK BUTTON */}
            <button
              onClick={handleBack}
              disabled={activeTab === "personal"}
              className={`px-5 py-2 rounded-lg transition
              ${activeTab === "personal"
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-800 text-white hover:bg-black"
                }`}
            >
              Back
            </button>

            {/* CONDITIONAL BUTTON */}
            {activeTab !== "projects" ? (
              <button
                onClick={handleNext}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Save & Next
              </button>
            ) : (
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                Generate Resume
              </button>
            )}
          </div>
        </section>
      </div>

      {/* 🔹 Custom Input Style */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          outline: none;
          font-size: 14px;
        }

        .input:focus {
          border-color: #7c3aed;
          box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.2);
        }
      `}</style>
    </main>
  );
}