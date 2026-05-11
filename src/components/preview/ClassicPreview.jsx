"use client";

export default function ClassicPreview() {
    return (
        <main className=" bg-gray-200 flex justify-center py-2 overflow-hidden">

            {/* Resume Wrapper */}
            <div className=" flex justify-center">

                {/* A4 Resume */}
                <div
                    className="
                               bg-white
                                  w-[95vw]
                             max-w-[950px]
                                shadow-2xl
                           overflow-hidden
                           "
                >

                    <div className="grid h-full grid-cols-[30%_70%]">

                        {/* Sidebar */}
                        <aside className="bg-slate-900 text-white p-[2vw]">

                            {/* Profile Info */}
                            <div className="border-b border-slate-700 pb-[1vw] text-center">
                                <h1 className="text-[2vw] font-bold leading-tight">
                                    Vishal Raj Singh
                                </h1>

                                <p className="mt-[0.5vw] text-[1vw] text-slate-300">
                                    Frontend Developer
                                </p>
                            </div>

                            {/* Contact */}
                            <div className="mt-[2vw]">
                                <h2 className="text-[1.2vw] font-semibold border-b border-slate-700 pb-[0.5vw]">
                                    Contact
                                </h2>

                                <div className="mt-[1vw] space-y-[0.8vw] text-[0.95vw] text-slate-300">
                                    <p>📧 vishal@gmail.com</p>
                                    <p>📱 +91 9876543210</p>
                                    <p>📍 Siliguri, India</p>
                                    <p>🌐 github.com/vishal</p>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="mt-[2vw]">
                                <h2 className="text-[1.2vw] font-semibold border-b border-slate-700 pb-[0.5vw]">
                                    Skills
                                </h2>

                                <div className="mt-[1vw] flex flex-wrap gap-[0.5vw]">

                                    <span className="bg-slate-800 px-[0.8vw] py-[0.4vw] rounded-full text-[0.9vw]">
                                        Javascript
                                    </span>

                                    <span className="bg-slate-800 px-[0.8vw] py-[0.4vw] rounded-full text-[0.9vw]">
                                        React
                                    </span>

                                    <span className="bg-slate-800 px-[0.8vw] py-[0.4vw] rounded-full text-[0.9vw]">
                                        Next.js
                                    </span>

                                    <span className="bg-slate-800 px-[0.8vw] py-[0.4vw] rounded-full text-[0.9vw]">
                                        TypeScript
                                    </span>

                                    <span className="bg-slate-800 px-[0.8vw] py-[0.4vw] rounded-full text-[0.9vw]">
                                        Tailwind Css
                                    </span>

                                    <span className="bg-slate-800 px-[0.8vw] py-[0.4vw] rounded-full text-[0.9vw]">
                                        Postman
                                    </span>

                                </div>
                            </div>

                            {/* Education */}
                            <div className="mt-[2vw]">
                                <h2 className="text-[1.2vw] font-semibold border-b border-slate-700 pb-[0.5vw]">
                                    Education
                                </h2>

                                <div className="mt-[1vw] text-[0.95vw] text-slate-300 space-y-[1vw]">

                                    <div>
                                        <h3 className="font-medium text-white text-[1vw]">
                                            MCA
                                        </h3>

                                        <p>IGNOU University</p>
                                        <p>2025 - 2027</p>
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-white text-[1vw]">
                                            BCA
                                        </h3>

                                        <p>XYZ College</p>
                                        <p>2022 - 2025</p>
                                    </div>

                                </div>
                            </div>

                        </aside>

                        {/* Main Content */}
                        <section className="p-[2.5vw]">

                            {/* Summary */}
                            <div>
                                <h2 className="text-[1.8vw] font-bold text-slate-900 border-b-[0.15vw] border-slate-200 pb-[0.5vw]">
                                    Professional Summary
                                </h2>

                                <p className="mt-[1vw] text-gray-700 leading-relaxed text-[1vw]">
                                    Passionate Frontend Developer with experience building
                                    responsive and user-friendly web applications using React,
                                    Next.js, and Tailwind CSS. Strong understanding of modern
                                    UI/UX principles and performance optimization.
                                </p>
                            </div>

                            {/* Experience */}
                            <div className="mt-[2.5vw]">
                                <h2 className="text-[1.8vw] font-bold text-slate-900 border-b-[0.15vw] border-slate-200 pb-[0.5vw]">
                                    Experience
                                </h2>

                                <div className="mt-[1.5vw]">

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-[1.2vw] font-semibold text-slate-800">
                                                Frontend Developer Intern
                                            </h3>

                                            <span className="text-[0.9vw] text-gray-500">
                                                2025 - Present
                                            </span>
                                        </div>

                                        <p className="text-[0.95vw] text-blue-600 mt-[0.4vw]">
                                            ABC Tech Company
                                        </p>

                                        <ul className="mt-[1vw] list-disc list-inside text-gray-700 text-[0.95vw] space-y-[0.5vw]">
                                            <li>
                                                Developed responsive web interfaces using React and Tailwind CSS.
                                            </li>

                                            <li>
                                                Improved UI performance and optimized page loading speed.
                                            </li>

                                            <li>
                                                Collaborated with backend developers to integrate APIs.
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            {/* Projects */}
                            <div className="mt-[2.5vw]">
                                <h2 className="text-[1.8vw] font-bold text-slate-900 border-b-[0.15vw] border-slate-200 pb-[0.5vw]">
                                    Projects
                                </h2>

                                <div className="mt-[1.5vw] space-y-[1.5vw]">

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-[1.2vw] font-semibold text-slate-800">
                                                AI Resume Builder
                                            </h3>

                                            <span className="text-[0.9vw] text-gray-500">
                                                2026
                                            </span>
                                        </div>

                                        <p className="mt-[0.5vw] text-gray-700 leading-relaxed text-[0.95vw]">
                                            Built an AI-powered resume builder where users can create,
                                            preview, and download ATS-friendly resumes using multiple
                                            modern templates.
                                        </p>

                                        <div className="mt-[0.7vw] flex gap-[1vw]">

                                            <a
                                                href="https://your-live-demo.com"
                                                target="_blank"
                                                className="text-blue-600 underline text-[0.9vw]"
                                            >
                                                Live
                                            </a>

                                            <a
                                                href="https://github.com/yourusername/project"
                                                target="_blank"
                                                className="text-blue-600 underline text-[0.9vw]"
                                            >
                                                GitHub
                                            </a>

                                        </div>

                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-[1.2vw] font-semibold text-slate-800">
                                                Portfolio Website
                                            </h3>

                                            <span className="text-[0.9vw] text-gray-500">
                                                2025
                                            </span>
                                        </div>

                                        <p className="mt-[0.5vw] text-gray-700 leading-relaxed text-[0.95vw]">
                                            Created a fully responsive developer portfolio using
                                            Next.js and Tailwind CSS with smooth animations and
                                            modern UI.
                                        </p>
                                        <div className="mt-[0.7vw] flex gap-[1vw]">

                                            <a
                                                href="https://your-live-demo.com"
                                                target="_blank"
                                                className="text-blue-600 underline text-[0.9vw]"
                                            >
                                                Live
                                            </a>

                                            <a
                                                href="https://github.com/yourusername/project"
                                                target="_blank"
                                                className="text-blue-600 underline text-[0.9vw]"
                                            >
                                                GitHub
                                            </a>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </section>

                    </div>
                </div>
            </div>
        </main>
    );
}