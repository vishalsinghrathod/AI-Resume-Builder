"use client"

import { useState } from "react";


import Blog from "@/components/Blog";
import CreateResume from "@/components/CreateResume";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Steps from "@/components/Steps";
import TemplateSection from "@/components/TemplateSection";
import ClassicPreview from "@/components/preview/ClassicPreview";


export default function Home() {

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div >
      <Navbar />
      <Hero />
      <Feature />
      <Steps />
      <TemplateSection
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />
      <CreateResume
        selectedTemplate={selectedTemplate}
      />
      <Blog />
      <Footer />
      <ClassicPreview />
    </div>
  );
}
