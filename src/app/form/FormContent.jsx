"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";

import Personal from "@/components/form/Personal";
import Summary from "@/components/form/Summary";
import Experience from "@/components/form/Experience";
import Education from "@/components/form/Education";
import Skills from "@/components/form/Skills";
import Projects from "@/components/form/Projects";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function FormPage() {

  const router = useRouter();

  // GET TEMPLATE FROM URL
  const searchParams = useSearchParams();

  const selectedTemplate =
    searchParams.get("template") || "classic";

  // FORM DATA
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

  // FORM SECTIONS
  const sections = [
    "personal",
    "summary",
    "experience",
    "education",
    "skills",
    "projects",
  ];

  const [activeTab, setActiveTab] =
    useState("personal");

  // NEXT BUTTON
  const handleNext = () => {

    const currentIndex =
      sections.indexOf(activeTab);

    if (currentIndex < sections.length - 1) {

      setActiveTab(
        sections[currentIndex + 1]
      );

    }
  };

  // BACK BUTTON
  const handleBack = () => {

    const currentIndex =
      sections.indexOf(activeTab);

    if (currentIndex > 0) {

      setActiveTab(
        sections[currentIndex - 1]
      );

    }
  };

  // GENERATE RESUME
  const handleGenerate = () => {

    // SAVE FORM DATA
    localStorage.setItem(
      "resumeData",
      JSON.stringify(formData)
    );

    // SAVE TEMPLATE
    localStorage.setItem(
      "selectedTemplate",
      selectedTemplate
    );

    // OPEN PREVIEW PAGE
    router.push("/resume-preview");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-8">

      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">

        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-gray-50 border-r p-4">

          <h2 className="text-lg font-bold mb-4">
            Resume Builder
          </h2>

          <ul className="space-y-2">

            {[
              {
                id: "personal",
                label: "Personal Info",
              },

              {
                id: "summary",
                label: "Summary",
              },

              {
                id: "experience",
                label: "Experience",
              },

              {
                id: "education",
                label: "Education",
              },

              {
                id: "skills",
                label: "Skills",
              },

              {
                id: "projects",
                label: "Projects",
              },

            ].map((item) => (

              <li
                key={item.id}
                onClick={() =>
                  setActiveTab(item.id)
                }

                className={`
                  cursor-pointer
                  px-3
                  py-2
                  rounded-lg
                  text-sm
                  transition

                  ${activeTab === item.id
                    ? "bg-purple-100 text-purple-600 font-semibold"
                    : "hover:bg-gray-200"
                  }
                `}
              >
                {item.label}
              </li>

            ))}

          </ul>

        </aside>

        {/* Form Area */}
        <section className="flex-1 p-6 md:p-8">

          {/* PERSONAL */}
          {activeTab === "personal" && (

            <Personal
              formData={formData}
              setFormData={setFormData}
            />

          )}

          {/* SUMMARY */}
          {activeTab === "summary" && (

            <Summary
              formData={formData}
              setFormData={setFormData}
            />

          )}

          {/* EXPERIENCE */}
          {activeTab === "experience" && (

            <Experience
              formData={formData}
              setFormData={setFormData}
            />

          )}

          {/* EDUCATION */}
          {activeTab === "education" && (

            <Education
              formData={formData}
              setFormData={setFormData}
            />

          )}

          {/* SKILLS */}
          {activeTab === "skills" && (

            <Skills
              formData={formData}
              setFormData={setFormData}
            />

          )}

          {/* PROJECTS */}
          {activeTab === "projects" && (

            <Projects
              formData={formData}
              setFormData={setFormData}
            />

          )}

          {/* Bottom Buttons */}
          <div className="flex items-center justify-between mt-8">

            {/* BACK */}
            <button
              onClick={handleBack}

              disabled={
                activeTab === "personal"
              }

              className={`
                px-5
                py-2
                rounded-lg
                transition

                ${activeTab === "personal"
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-800 text-white hover:bg-black"
                }
              `}
            >
              Back
            </button>

            {/* NEXT / GENERATE */}
            {activeTab !== "projects" ? (

              <button
                onClick={handleNext}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Save & Next
              </button>

            ) : (

              <button
                onClick={handleGenerate}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Generate Resume
              </button>

            )}

          </div>

        </section>

      </div>

      {/* Input Style */}
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