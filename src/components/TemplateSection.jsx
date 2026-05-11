"use client"


import Classic from "./templates/Classic"
import Creative from "./templates/Creative"
import Modern from "./templates/Modern"
import Professional from "./templates/Professional"

export default function TemplateSection({
  selectedTemplate,
  setSelectedTemplate,
}) {


  return (
    <section id="template" className="w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10">

      {/* Heading */}
      <div className="mx-auto mb-8 max-w-4xl text-center">
        <h1 className="break-words text-2xl font-bold leading-snug text-gray-900 sm:text-3xl md:text-4xl">
          Choose from Professional Templates
        </h1>

        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          Pick a modern resume design that matches your style.
        </p>
      </div>

      {/* Templates Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <Classic
          isSelected={selectedTemplate === "classic"}
          onSelect={() => setSelectedTemplate("classic")}
        />

        <Modern
          isSelected={selectedTemplate === "modern"}
          onSelect={() => setSelectedTemplate("modern")}
        />

        <Creative
          isSelected={selectedTemplate === "Creative"}
          onSelect={() => setSelectedTemplate("Creative")}
        />

        <Professional
          isSelected={selectedTemplate === "Professional"}
          onSelect={() => setSelectedTemplate("Professional")}
        />

      </div>
    </section>
  );
}


