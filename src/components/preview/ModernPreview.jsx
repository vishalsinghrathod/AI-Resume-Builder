"use client";


import { useRef } from "react";

export default function ModernPreview({ data = {} }) {

    const resumeRef = useRef();

    const handleDownloadPDF = async () => {

        const input = resumeRef.current;

        if (!input) return;

        try {

            const { toPng } = await import("html-to-image");
            const { default: jsPDF } = await import("jspdf");

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

            // EXTRA PAGES
            while (heightLeft > 15) {

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

            // MAGIC TRICK: Find all links and overlay clickable zones in the PDF!
            const links = input.querySelectorAll("a");
            const containerRect = input.getBoundingClientRect();

            // Scale factor: PDF width in mm (210) / DOM width in px
            const scale = pageWidth / containerRect.width;

            const totalPages = pdf.internal.getNumberOfPages();

            links.forEach((link) => {
                const rect = link.getBoundingClientRect();

                // Calculate position relative to the container
                const x = rect.left - containerRect.left;
                const y = rect.top - containerRect.top;
                const w = rect.width;
                const h = rect.height;

                const pdfX = x * scale;
                const pdfY = y * scale;
                const pdfW = w * scale;
                const pdfH = h * scale;

                // Determine which page the link is on
                const pageNumber = Math.floor(pdfY / pageHeight) + 1;
                const yOnPage = pdfY % pageHeight;

                if (pageNumber <= totalPages) {
                    pdf.setPage(pageNumber);
                    pdf.link(pdfX, yOnPage, pdfW, pdfH, {
                        url: link.href,
                    });
                }
            });

            pdf.save(`${data?.name || "resume"}.pdf`);

        } catch (error) {

            console.error("PDF Error:", error);

        }

    };

    return (

        <main
            className="
                min-h-screen
                bg-[#eef2f7]
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

            {/* Resume */}
            <div
                className="
                    bg-white
                    overflow-hidden
                "
            >

                {/* Top Section */}
                <div
                    className="
                        relative
                        bg-white
                        border-b
                        border-gray-200
                    "
                >

                    {/* Top Accent */}
                    <div
                        className="
                            h-2
                            bg-gradient-to-r
                            from-cyan-500
                            via-blue-600
                            to-slate-900
                        "
                    ></div>

                    <div
                        className="
                            px-6
                            md:px-10
                            py-8
                            flex
                            flex-col
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                            gap-8
                        "
                    >

                        {/* Left */}
                        <div>



                            <h1
                                className="
                                    mt-3
                                    text-4xl
                                    md:text-5xl
                                    font-black
                                    text-slate-900
                                    leading-tight
                                "
                            >
                                {data?.name || "Your Name"}
                            </h1>

                            <p
                                className="
                                    mt-4
                                    text-lg
                                    md:text-xl
                                    text-slate-600
                                    font-medium
                                "
                            >
                                {data?.role || "Frontend Developer"}
                            </p>

                        </div>

                        {/* Contact Card */}
                        <div
                            className="
                                bg-slate-900
                                text-white
                                rounded-2xl
                                p-6
                                min-w-full
                                sm:min-w-[320px]
                                shadow-lg
                            "
                        >

                            <h2
                                className="
                                    text-lg
                                    font-bold
                                    border-b
                                    border-slate-700
                                    pb-3
                                "
                            >
                                Contact
                            </h2>

                            <div className="mt-4 space-y-4 text-sm">

                                <p className="flex items-center gap-3 break-all">
                                    <span className="text-cyan-400">✉</span>
                                    {data?.email || "example@gmail.com"}
                                </p>

                                <p className="flex items-center gap-3">
                                    <span className="text-cyan-400">☎</span>
                                    {data?.phone || "+91 9876543210"}
                                </p>

                                <p className="flex items-center gap-3">
                                    <span className="text-cyan-400">⌂</span>
                                    {data?.location || "India"}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Main Layout */}
                <div
                    className="
                        grid
                        grid-cols-[28%_72%]
                    "
                >

                    {/* Left Sidebar */}
                    <aside
                        className="
                            bg-slate-50
                            border-r
                            border-gray-200
                            px-6
                            md:px-8
                            py-8
                        "
                    >

                        {/* Skills */}
                        <div>

                            <h2
                                className="
                                    text-xl
                                    font-bold
                                    text-slate-900
                                    flex
                                    items-center
                                    gap-3
                                "
                            >

                                <span
                                    className="
                                        w-1.5
                                        h-7
                                        rounded-full
                                        bg-cyan-500
                                    "
                                ></span>

                                Skills

                            </h2>

                            <div className="mt-6 space-y-5">

                                {data?.skills?.map((skill, index) => (

                                    <div key={index}>

                                        <div
                                            className="
                                                flex
                                                justify-between
                                                text-sm
                                                mb-2
                                            "
                                        >

                                            <span
                                                className="
                                                    font-semibold
                                                    text-slate-700
                                                "
                                            >
                                                {skill}
                                            </span>

                                            <span className="text-gray-400">
                                                Expert
                                            </span>

                                        </div>

                                        {/* Progress */}
                                        <div
                                            className="
                                                h-2
                                                bg-gray-200
                                                rounded-full
                                                overflow-hidden
                                            "
                                        >

                                            <div
                                                className="
                                                    h-full
                                                    w-[88%]
                                                    bg-gradient-to-r
                                                    from-cyan-500
                                                    to-blue-600
                                                "
                                            ></div>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* Education */}
                        <div className="mt-14">

                            <h2
                                className="
                                    text-xl
                                    font-bold
                                    text-slate-900
                                    flex
                                    items-center
                                    gap-3
                                "
                            >

                                <span
                                    className="
                                        w-1.5
                                        h-7
                                        rounded-full
                                        bg-cyan-500
                                    "
                                ></span>

                                Education

                            </h2>

                            <div
                                className="
                                    mt-6
                                    border
                                    border-gray-200
                                    rounded-2xl
                                    bg-white
                                    p-5
                                    shadow-sm
                                "
                            >

                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        text-slate-800
                                    "
                                >
                                    {data?.education?.degree || "Degree"}
                                </h3>

                                <p className="mt-2 text-gray-700">
                                    {data?.education?.college || "College"}
                                </p>

                                <p className="mt-1 text-gray-500 text-sm">
                                    {data?.education?.year || "2025"}
                                </p>

                            </div>

                        </div>

                    </aside>

                    {/* Main Content */}
                    <section
                        className="
                            px-6
                            md:px-10
                            py-8
                        "
                    >

                        {/* Summary */}
                        <div>

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    gap-4
                                "
                            >

                                <h2
                                    className="
                                        text-2xl
                                        md:text-3xl
                                        font-bold
                                        text-slate-900
                                    "
                                >
                                    Professional Summary
                                </h2>

                                <div
                                    className="
                                        hidden
                                        md:block
                                        h-[2px]
                                        flex-1
                                        bg-gradient-to-r
                                        from-cyan-500
                                        to-transparent
                                    "
                                ></div>

                            </div>

                            <p
                                className="
                                    mt-6
                                    text-gray-700
                                    leading-relaxed
                                    text-base
                                    md:text-lg
                                "
                            >

                                {data?.summary ||
                                    "Write your professional summary here."}

                            </p>

                        </div>

                        {/* Experience */}
                        <div className="mt-14">

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    gap-4
                                "
                            >

                                <h2
                                    className="
                                        text-2xl
                                        md:text-3xl
                                        font-bold
                                        text-slate-900
                                    "
                                >
                                    Experience
                                </h2>

                                <div
                                    className="
                                        hidden
                                        md:block
                                        h-[2px]
                                        flex-1
                                        bg-gradient-to-r
                                        from-cyan-500
                                        to-transparent
                                    "
                                ></div>

                            </div>

                            {/* Experience Card */}
                            <div
                                className="
                                    mt-7
                                    relative
                                    bg-white
                                    border
                                    border-gray-200
                                    rounded-3xl
                                    p-6
                                    md:p-8
                                    shadow-sm
                                "
                            >

                                {/* Accent Border */}
                                <div
                                    className="
                                        absolute
                                        left-0
                                        top-0
                                        h-full
                                        w-2
                                        rounded-l-3xl
                                        bg-gradient-to-b
                                        from-cyan-500
                                        to-blue-700
                                    "
                                ></div>

                                <div
                                    className="
                                        flex
                                        flex-col
                                        md:flex-row
                                        md:items-start
                                        md:justify-between
                                        gap-4
                                    "
                                >

                                    <div>

                                        <h3
                                            className="
                                                text-2xl
                                                font-bold
                                                text-slate-800
                                            "
                                        >

                                            {data?.experience?.role ||
                                                "Job Role"}

                                        </h3>

                                        <p
                                            className="
                                                mt-2
                                                text-blue-700
                                                font-semibold
                                                text-lg
                                            "
                                        >

                                            {data?.experience?.company ||
                                                "Company Name"}

                                        </p>

                                    </div>

                                    <span
                                        className="
                                            bg-slate-100
                                            text-slate-600
                                            text-sm
                                            font-medium
                                            px-4
                                            py-2
                                            rounded-full
                                            h-fit
                                        "
                                    >

                                        {data?.experience?.duration ||
                                            "Duration"}

                                    </span>

                                </div>

                                <p
                                    className="
                                        mt-6
                                        text-gray-700
                                        leading-relaxed
                                    "
                                >

                                    {data?.experience?.description ||
                                        "Work description"}

                                </p>

                            </div>

                        </div>

                        {/* Projects */}
                        <div className="mt-14">

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    gap-4
                                "
                            >

                                <h2
                                    className="
                                        text-2xl
                                        md:text-3xl
                                        font-bold
                                        text-slate-900
                                    "
                                >
                                    Projects
                                </h2>

                                <div
                                    className="
                                        hidden
                                        md:block
                                        h-[2px]
                                        flex-1
                                        bg-gradient-to-r
                                        from-cyan-500
                                        to-transparent
                                    "
                                ></div>

                            </div>

                            <div
                                className="
                                    mt-8
                                    grid
                                    grid-cols-1
                                    xl:grid-cols-2
                                    gap-6
                                "
                            >

                                {data?.projects?.map((project, index) => (

                                    <div
                                        key={index}
                                        className="
                                            group
                                            bg-slate-50
                                            border
                                            border-gray-200
                                            rounded-3xl
                                            p-6
                                            transition-all
                                            duration-300
                                        "
                                    >

                                        {/* Top Line */}
                                        <div
                                            className="
                                                w-14
                                                h-1.5
                                                rounded-full
                                                bg-gradient-to-r
                                                from-cyan-500
                                                to-blue-700
                                            "
                                        ></div>

                                        <h3
                                            className="
                                                mt-5
                                                text-xl
                                                font-bold
                                                text-slate-800
                                            "
                                        >

                                            {project?.title ||
                                                "Project Title"}

                                        </h3>

                                        <p
                                            className="
                                                mt-4
                                                text-gray-700
                                                leading-relaxed
                                            "
                                        >

                                            {project?.description ||
                                                "Project Description"}

                                        </p>

                                        {/* LINKS */}
                                        <div className="mt-4 flex flex-wrap gap-4 text-sm">

                                            {project?.liveLink && (
                                                <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-cyan-600 underline break-all font-medium"
                                                >
                                                    Live Demo
                                                </a>
                                            )}

                                            {project?.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-700 underline break-all font-medium"
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

        </div>

    );
}