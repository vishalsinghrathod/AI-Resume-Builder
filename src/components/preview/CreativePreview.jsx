"use client";


import { useRef } from "react";

export default function CreativePreview({ data = {} }) {

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
                bg-gradient-to-br
                from-purple-100
                via-pink-50
                to-cyan-100
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
                        scale-[0.28]
                        sm:scale-[0.48]
                        md:scale-[0.70]
                        lg:scale-[0.85]
                        xl:scale-[1]

                        -mb-[650px]
                         sm:-mb-[450px]
                         md:-mb-[220px]
                         lg:-mb-[120px]
                          xl:mb-0
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
                    width: "1200px",
                    zIndex: -1,
                }}
            >

                <div ref={resumeRef}>

                    <ResumeContent
                        data={data}
                        width={1200}
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
    width = 1200,
}) {

    return (

        <div
            style={{
                width: `${width}px`,
                maxWidth: `${width}px`,
            }}
            className="
                bg-white/90
                backdrop-blur-lg
                rounded-3xl
                overflow-hidden
                shadow-2xl
                border
                border-white/40
            "
        >

            {/* Top Banner */}
            <div
                className="
                    relative
                    overflow-hidden
                    bg-gradient-to-r
                    from-purple-700
                    via-pink-600
                    to-cyan-500
                    px-6
                    md:px-10
                    py-10
                    text-white
                "
            >

                {/* Decorative Circles */}
                <div
                    className="
                        absolute
                        -top-10
                        -right-10
                        w-40
                        h-40
                        bg-white/10
                        rounded-full
                    "
                ></div>

                <div
                    className="
                        absolute
                        bottom-0
                        left-0
                        w-32
                        h-32
                        bg-white/10
                        rounded-full
                        translate-y-1/2
                        -translate-x-1/3
                    "
                ></div>

                <div
                    className="
                        relative
                        z-10
                        flex
                        flex-col
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        gap-6
                    "
                >

                    {/* Left */}
                    <div>

                        <h1
                            className="
                                text-4xl
                                md:text-6xl
                                font-black
                                tracking-wide
                            "
                        >
                            {data?.name || "Your Name"}
                        </h1>

                        <p
                            className="
                                mt-3
                                text-lg
                                md:text-2xl
                                text-pink-100
                                font-medium
                            "
                        >
                            {data?.role || "Creative Designer"}
                        </p>

                    </div>

                    {/* Contact */}
                    <div
                        className="
                            bg-white/10
                            backdrop-blur-md
                            rounded-2xl
                            p-5
                            space-y-3
                            text-sm
                            md:text-base
                            border
                            border-white/20
                        "
                    >

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

            </div>

            {/* Body */}
            <div
                className="
                    grid
                    grid-cols-[32%_68%]
                "
            >

                {/* Sidebar */}
                <aside
                    className="
                        bg-gradient-to-b
                        from-slate-900
                        to-slate-800
                        text-white
                        p-8
                    "
                >

                    {/* Skills */}
                    <div>

                        <h2
                            className="
                                text-2xl
                                font-bold
                                mb-6
                            "
                        >
                            Skills
                        </h2>

                        <div className="flex flex-wrap gap-3">

                            {data?.skills?.map((skill, index) => (

                                <span
                                    key={index}
                                    className="
                                        px-4
                                        py-2
                                        rounded-full
                                        bg-gradient-to-r
                                        from-pink-500
                                        to-purple-500
                                        text-sm
                                        font-medium
                                        shadow-lg
                                    "
                                >
                                    {skill}
                                </span>

                            ))}

                        </div>

                    </div>

                    {/* Education */}
                    <div className="mt-12">

                        <h2
                            className="
                                text-2xl
                                font-bold
                                mb-6
                            "
                        >
                            Education
                        </h2>

                        <div
                            className="
                                bg-white/10
                                border
                                border-white/10
                                rounded-2xl
                                p-5
                                backdrop-blur-md
                            "
                        >

                            <h3
                                className="
                                    text-lg
                                    font-semibold
                                "
                            >
                                {data?.education?.degree || "Degree"}
                            </h3>

                            <p className="mt-2 text-slate-300">
                                {data?.education?.college || "College"}
                            </p>

                            <p className="mt-1 text-slate-400">
                                {data?.education?.year || "2025"}
                            </p>

                        </div>

                    </div>

                </aside>

                {/* Main Content */}
                <section className="p-10">

                    {/* Summary */}
                    <div>

                        <div className="flex items-center gap-4">

                            <div
                                className="
                                    w-4
                                    h-4
                                    rounded-full
                                    bg-gradient-to-r
                                    from-pink-500
                                    to-purple-600
                                "
                            ></div>

                            <h2
                                className="
                                    text-3xl
                                    font-bold
                                    text-slate-800
                                "
                            >
                                About Me
                            </h2>

                        </div>

                        <p
                            className="
                                mt-6
                                text-gray-700
                                leading-relaxed
                                text-lg
                            "
                        >

                            {data?.summary ||
                                "Write your professional summary here."}

                        </p>

                    </div>

                    {/* Experience */}
                    <div className="mt-14">

                        <div className="flex items-center gap-4">

                            <div
                                className="
                                    w-4
                                    h-4
                                    rounded-full
                                    bg-gradient-to-r
                                    from-cyan-500
                                    to-blue-600
                                "
                            ></div>

                            <h2
                                className="
                                    text-3xl
                                    font-bold
                                    text-slate-800
                                "
                            >
                                Experience
                            </h2>

                        </div>

                        <div
                            className="
                                mt-7
                                relative
                                border-l-4
                                border-pink-500
                                pl-6
                            "
                        >

                            <div
                                className="
                                    absolute
                                    -left-[11px]
                                    top-1
                                    w-5
                                    h-5
                                    rounded-full
                                    bg-pink-500
                                "
                            ></div>

                            <div
                                className="
                                    bg-gradient-to-br
                                    from-pink-50
                                    to-cyan-50
                                    border
                                    border-pink-100
                                    rounded-2xl
                                    p-6
                                    shadow-md
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        gap-2
                                    "
                                >

                                    <h3
                                        className="
                                            text-xl
                                            font-bold
                                            text-slate-800
                                        "
                                    >

                                        {data?.experience?.role ||
                                            "Job Role"}

                                    </h3>

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
                                        mt-2
                                        text-purple-700
                                        font-semibold
                                    "
                                >

                                    {data?.experience?.company ||
                                        "Company Name"}

                                </p>

                                <p
                                    className="
                                        mt-4
                                        text-gray-700
                                        leading-relaxed
                                    "
                                >

                                    {data?.experience?.description ||
                                        "Work description"}

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Projects */}
                    <div className="mt-14">

                        <div className="flex items-center gap-4">

                            <div
                                className="
                                    w-4
                                    h-4
                                    rounded-full
                                    bg-gradient-to-r
                                    from-yellow-400
                                    to-orange-500
                                "
                            ></div>

                            <h2
                                className="
                                    text-3xl
                                    font-bold
                                    text-slate-800
                                "
                            >
                                Projects
                            </h2>

                        </div>

                        <div
                            className="
                                mt-8
                                grid
                                grid-cols-2
                                gap-6
                            "
                        >

                            {data?.projects?.map((project, index) => (

                                <div
                                    key={index}
                                    className="
                                        relative
                                        overflow-hidden
                                        rounded-3xl
                                        bg-white
                                        border
                                        border-gray-200
                                        shadow-lg
                                        transition-all
                                        duration-300
                                        p-6
                                    "
                                >

                                    {/* Top Gradient Bar */}
                                    <div
                                        className="
                                            absolute
                                            top-0
                                            left-0
                                            w-full
                                            h-2
                                            bg-gradient-to-r
                                            from-pink-500
                                            via-purple-500
                                            to-cyan-500
                                        "
                                    ></div>

                                    <h3
                                        className="
                                            text-xl
                                            font-bold
                                            text-slate-800
                                            mt-3
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
                                                className="
                text-pink-600
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
                                                 text-slate-700
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

                    </div>

                </section>

            </div>

        </div>

    );
}