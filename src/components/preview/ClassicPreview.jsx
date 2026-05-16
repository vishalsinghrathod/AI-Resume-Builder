"use client";


import { useRef } from "react";

export default function ClassicPreview({ data = {} }) {

    const resumeRef = useRef();

    const handleDownloadPDF = async () => {

        const input = resumeRef.current;

        if (!input) return;

        try {

            const { toPng } = await import("html-to-image");
            const { default: jsPDF } = await import("jspdf");

            // Capture HTML to Image
            const dataUrl = await toPng(input, {
                cacheBust: true,
                pixelRatio: 2,
                backgroundColor: "#ffffff",
            });

            const img = new Image();
            img.src = dataUrl;
            await new Promise((resolve) => {
                img.onload = resolve;
            });

            // Create PDF
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "mm",
                format: "a4",
            });

            const pageWidth = 210;
            const pageHeight = 297;
            const imgWidth = pageWidth;
            const imgHeight = (img.height * imgWidth) / img.width;

            // Force single page height
            const finalHeight = imgHeight > pageHeight ? pageHeight : imgHeight;

            // Add Image to PDF
            pdf.addImage(dataUrl, "PNG", 0, 0, imgWidth, finalHeight);

            // MAGIC TRICK: Find all links and overlay clickable zones in the PDF!
            const links = input.querySelectorAll("a");
            const containerRect = input.getBoundingClientRect();
            
            // Scale factor: PDF width in mm (210) / DOM width in px
            const scale = pageWidth / containerRect.width;

            links.forEach((link) => {
                const rect = link.getBoundingClientRect();
                
                // Calculate position relative to the container
                const x = rect.left - containerRect.left;
                const y = rect.top - containerRect.top;
                const w = rect.width;
                const h = rect.height;

                // Add transparent clickable link to PDF
                pdf.link(x * scale, y * scale, w * scale, h * scale, {
                    url: link.href,
                });
            });

            pdf.save(`${data?.name || "resume"}.pdf`);

        } catch (error) {
            console.error("PDF Error:", error);
        }

    };

    return (

        <main className="bg-gray-200 min-h-screen flex flex-col items-center p-2 overflow-x-auto">


            {/* PREVIEW */}
            <div className="w-full flex justify-center items-start">

                <div
                    className="
                        origin-top
                        scale-[0.35]
                        sm:scale-[0.60]
                        md:scale-[1]

                        -mb-[520px]
                        sm:-mb-[320px]
                        md:mb-0
                    "
                >

                    <ResumeContent data={data} />

                </div>

            </div>

            {/* HIDDEN PDF CONTENT */}
            <div
                style={{
                    position: "absolute",
                    top: "-9999px",
                    left: "-9999px",
                    width: "950px",
                    zIndex: -1,
                }}
            >

                <div ref={resumeRef}>

                    <ResumeContent
                        data={data}
                        width={950}
                    />

                </div>

            </div>

            {/* DOWNLOAD BUTTON */}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:static md:translate-x-0 md:mb-6 md:mt-7">

                <button
                    onClick={handleDownloadPDF}
                    className="
                        bg-green-600
                        hover:bg-green-700
                        text-white
                        px-6
                        py-3
                        rounded-xl
                        font-semibold
                        shadow-lg
                        transition
                    "
                >
                    Download PDF
                </button>

            </div>

        </main>

    );
}

function ResumeContent({
    data,
    width = 950,
}) {

    return (

        <div
            className="
                bg-white
                shadow-2xl
                overflow-hidden
                break-words
            "
            style={{
                width: `${width}px`,
                maxWidth: `${width}px`,
            }}
        >

            <div className="grid grid-cols-[30%_70%]">

                {/* SIDEBAR */}
                <aside className="bg-slate-900 text-white p-8">

                    {/* PROFILE */}
                    <div className="border-b border-slate-700 pb-4 text-center">

                        <h1 className="text-3xl font-bold leading-tight">
                            {data?.name || "Your Name"}
                        </h1>

                        <p className="mt-2 text-base text-slate-300">
                            {data?.role || "Your Role"}
                        </p>

                    </div>

                    {/* CONTACT */}
                    <div className="mt-8">

                        <h2 className="text-lg font-semibold border-b border-slate-700 pb-2">
                            Contact
                        </h2>

                        <div className="mt-4 space-y-3 text-sm text-slate-300">

                            <p>
                                📧 {data?.email || "example@gmail.com"}
                            </p>

                            <p>
                                📱 {data?.phone || "+91 9876543210"}
                            </p>

                            <p>
                                📍 {data?.location || "India"}
                            </p>

                        </div>

                    </div>

                    {/* SKILLS */}
                    <div className="mt-8">

                        <h2 className="text-lg font-semibold border-b border-slate-700 pb-2">
                            Skills
                        </h2>

                        <div className="mt-4 flex flex-wrap gap-2">

                            {data?.skills?.map((skill, index) => (

                                <span
                                    key={index}
                                    className="
                                        bg-slate-800
                                        px-3
                                        py-1
                                        rounded-full
                                        text-sm
                                    "
                                >
                                    {skill}
                                </span>

                            ))}

                        </div>

                    </div>

                    {/* EDUCATION */}
                    <div className="mt-8">

                        <h2 className="text-lg font-semibold border-b border-slate-700 pb-2">
                            Education
                        </h2>

                        <div className="mt-4 text-sm text-slate-300">

                            <h3 className="font-medium text-white text-base">
                                {data?.education?.degree || "Degree"}
                            </h3>

                            <p className="mt-1">
                                {data?.education?.college || "College"}
                            </p>

                            <p className="mt-1">
                                {data?.education?.year || "2025"}
                            </p>

                        </div>

                    </div>

                </aside>

                {/* MAIN CONTENT */}
                <section className="p-10">

                    {/* SUMMARY */}
                    <div>

                        <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2">
                            Professional Summary
                        </h2>

                        <p className="mt-4 text-gray-700 leading-relaxed text-base">

                            {data?.summary ||
                                "Write your professional summary here."}

                        </p>

                    </div>

                    {/* EXPERIENCE */}
                    <div className="mt-10">

                        <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2">
                            Experience
                        </h2>

                        <div className="mt-6">

                            <div className="flex items-center justify-between">

                                <h3 className="text-lg font-semibold text-slate-800">

                                    {data?.experience?.role ||
                                        "Job Role"}

                                </h3>

                                <span className="text-sm text-gray-500">

                                    {data?.experience?.duration ||
                                        "Duration"}

                                </span>

                            </div>

                            <p className="text-sm text-blue-600 mt-2">

                                {data?.experience?.company ||
                                    "Company Name"}

                            </p>

                            <p className="mt-4 text-gray-700 text-base leading-relaxed">

                                {data?.experience?.description ||
                                    "Work description"}

                            </p>

                        </div>

                    </div>

                    {/* PROJECTS */}
                    <div className="mt-10">

                        <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2">
                            Projects
                        </h2>

                        <div className="mt-6 space-y-6">

                            {data?.projects?.map((project, index) => (

                                <div key={index}>

                                    <h3 className="text-lg font-semibold text-slate-800">
                                        {project?.title || "Project Title"}
                                    </h3>

                                    <p className="mt-2 text-gray-700 leading-relaxed text-base">
                                        {project?.description || "Project Description"}
                                    </p>

                                    {/* LINKS */}
                                    <div className="mt-3 flex flex-wrap gap-4 text-sm">

                                        {project?.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 font-medium underline break-all"
                                            >
                                                Live Demo
                                            </a>
                                        )}

                                        {project?.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-700 font-medium underline break-all"
                                            >
                                                GitHub
                                            </a>
                                        )}

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>

            </div>

        </div>

    );
}