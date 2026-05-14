"use client";

import jsPDF from "jspdf";
import { toPng } from "html-to-image";
import { useRef } from "react";

export default function ProfessionalPreview({ data = {} }) {

    const resumeRef = useRef();

    const handleDownloadPDF = async () => {

        const input = resumeRef.current;

        if (!input) return;

        try {

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

            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "mm",
                format: "a4",
            });

            const pageWidth = 210;
            const pageHeight = 297;

            const imgWidth = pageWidth;

            const imgHeight =
                (img.height * imgWidth) / img.width;

            let heightLeft = imgHeight;

            let position = 0;

            // FIRST PAGE
            pdf.addImage(
                dataUrl,
                "PNG",
                0,
                position,
                imgWidth,
                imgHeight
            );

            heightLeft -= pageHeight;

            // EXTRA PAGES ONLY IF NEEDED
            while (heightLeft > 1) {

                position = heightLeft - imgHeight;

                pdf.addPage();

                pdf.addImage(
                    dataUrl,
                    "PNG",
                    0,
                    position,
                    imgWidth,
                    imgHeight
                );

                heightLeft -= pageHeight;
            }

            pdf.save(`${data?.name || "resume"}.pdf`);

        } catch (error) {

            console.error("PDF Error:", error);

        }

    };

    return (

        <main
            className="
                bg-gray-200
                min-h-screen
                flex
                flex-col
                items-center
                p-2
                overflow-x-auto
            "
        >

            {/* PREVIEW */}
            <div className="w-full flex justify-center items-start">

                <div
                    className="
                        origin-top

                        scale-[0.42]
                        sm:scale-[0.60]
                        md:scale-[0.80]
                        lg:scale-[1]

                        -mb-[520px]
                        sm:-mb-[320px]
                        md:-mb-[150px]
                        lg:mb-0
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
                    width: "794px",
                    zIndex: -1,
                }}
            >

                <div ref={resumeRef}>

                    <ResumeContent
                        data={data}
                        width={794}
                    />

                </div>

            </div>

            {/* DOWNLOAD BUTTON */}
            <div className="fixed bottom-4 right-30 z-50 md:static md:mb-6 md:mt-7">

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
                shadow-lg
                overflow-hidden
            "
            style={{
                width: `${width}px`,
                maxWidth: `${width}px`,
            }}
        >

            {/* Header */}
            <header
                className="
                    px-6
                    md:px-10
                    pt-8
                    pb-6
                    border-b
                    border-gray-300
                "
            >

                <h1
                    className="
                        text-3xl
                        md:text-4xl
                        font-bold
                        text-gray-900
                        uppercase
                        tracking-wide
                    "
                >
                    {data?.name || "Your Name"}
                </h1>

                <p
                    className="
                        mt-2
                        text-lg
                        text-gray-700
                        font-medium
                    "
                >
                    {data?.role || "Software Engineer"}
                </p>

                {/* Contact */}
                <div
                    className="
                        mt-4
                        flex
                        flex-wrap
                        gap-x-5
                        gap-y-2
                        text-sm
                        text-gray-600
                    "
                >

                    <p>
                        {data?.email || "example@gmail.com"}
                    </p>

                    <p>
                        {data?.phone || "+91 9876543210"}
                    </p>

                    <p>
                        {data?.location || "India"}
                    </p>

                </div>

            </header>

            {/* Body */}
            <div
                className="
                    px-6
                    md:px-10
                    py-8
                    space-y-8
                "
            >

                {/* Summary */}
                <section>

                    <h2
                        className="
                            text-lg
                            font-bold
                            uppercase
                            text-gray-900
                            border-b
                            border-gray-300
                            pb-2
                        "
                    >
                        Professional Summary
                    </h2>

                    <p
                        className="
                            mt-4
                            text-gray-700
                            leading-relaxed
                            text-sm
                            md:text-base
                        "
                    >

                        {data?.summary ||
                            "Write your professional summary here."}

                    </p>

                </section>

                {/* Experience */}
                <section>

                    <h2
                        className="
                            text-lg
                            font-bold
                            uppercase
                            text-gray-900
                            border-b
                            border-gray-300
                            pb-2
                        "
                    >
                        Experience
                    </h2>

                    <div className="mt-5">

                        <div
                            className="
                                flex
                                flex-col
                                md:flex-row
                                md:items-start
                                md:justify-between
                                gap-2
                            "
                        >

                            <div>

                                <h3
                                    className="
                                        text-base
                                        md:text-lg
                                        font-semibold
                                        text-gray-900
                                    "
                                >

                                    {data?.experience?.role ||
                                        "Job Role"}

                                </h3>

                                <p
                                    className="
                                        mt-1
                                        text-gray-700
                                        font-medium
                                    "
                                >

                                    {data?.experience?.company ||
                                        "Company Name"}

                                </p>

                            </div>

                            <span
                                className="
                                    text-sm
                                    text-gray-500
                                "
                            >

                                {data?.experience?.duration ||
                                    "Duration"}

                            </span>

                        </div>

                        <p
                            className="
                                mt-4
                                text-gray-700
                                leading-relaxed
                                text-sm
                                md:text-base
                            "
                        >

                            {data?.experience?.description ||
                                "Work description"}

                        </p>

                    </div>

                </section>

                {/* Projects */}
                <section>

                    <h2
                        className="
                            text-lg
                            font-bold
                            uppercase
                            text-gray-900
                            border-b
                            border-gray-300
                            pb-2
                        "
                    >
                        Projects
                    </h2>

                    <div className="mt-5 space-y-6">

                        {data?.projects?.map((project, index) => (

                            <div key={index}>

                                <h3
                                    className="
                                        text-base
                                        md:text-lg
                                        font-semibold
                                        text-gray-900
                                    "
                                >

                                    {project?.title ||
                                        "Project Title"}

                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-gray-700
                                        leading-relaxed
                                        text-sm
                                        md:text-base
                                    "
                                >

                                    {project?.description ||
                                        "Project Description"}

                                </p>

                                {/* LINKS */}
                                <div className="mt-3 flex flex-wrap gap-4 text-sm">

                                    {project?.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                text-blue-600
                                                underline
                                                break-all
                                                font-medium
                                            "
                                        >
                                            Live Demo
                                        </a>
                                    )}

                                    {project?.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                text-gray-700
                                                underline
                                                break-all
                                                font-medium
                                            "
                                        >
                                            GitHub
                                        </a>
                                    )}

                                </div>

                            </div>

                        ))}

                    </div>

                </section>

                {/* Skills */}
                <section>

                    <h2
                        className="
                            text-lg
                            font-bold
                            uppercase
                            text-gray-900
                            border-b
                            border-gray-300
                            pb-2
                        "
                    >
                        Skills
                    </h2>

                    <div
                        className="
                            mt-4
                            flex
                            flex-wrap
                            gap-2
                        "
                    >

                        {data?.skills?.map((skill, index) => (

                            <span
                                key={index}
                                className="
                                    border
                                    border-gray-400
                                    px-3
                                    py-1
                                    text-sm
                                    text-gray-700
                                "
                            >
                                {skill}
                            </span>

                        ))}

                    </div>

                </section>

                {/* Education */}
                <section>

                    <h2
                        className="
                            text-lg
                            font-bold
                            uppercase
                            text-gray-900
                            border-b
                            border-gray-300
                            pb-2
                        "
                    >
                        Education
                    </h2>

                    <div className="mt-5">

                        <h3
                            className="
                                text-base
                                md:text-lg
                                font-semibold
                                text-gray-900
                            "
                        >
                            {data?.education?.degree || "Degree"}
                        </h3>

                        <p className="mt-1 text-gray-700">
                            {data?.education?.college || "College"}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            {data?.education?.year || "2025"}
                        </p>

                    </div>

                </section>

            </div>

        </div>

    );
}