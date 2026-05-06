"use client";

export default function Hero() {
    return (
        <section className="px-6 py-16 bg-purple-100 from-white to-gray-100">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div>
                    {/* Badge */}
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                        ✨ AI Powered
                    </span>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                        Build Job-Winning <br />
                        Resumes <span className="text-purple-600">with AI</span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600 mt-4">
                        Create professional, ATS-friendly resumes in minutes.
                        Our AI writes impactful content that gets you noticed.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700">
                            Create My Resume →
                        </button>

                        <button className="border px-6 py-3 rounded-lg hover:bg-gray-100">
                            View Templates
                        </button>
                    </div>

                    {/* Users + Rating */}
                    <div className="flex items-center gap-4 mt-6">
                        <div className="flex -space-x-2">
                            <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full border" />
                            <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full border" />
                            <img src="https://i.pravatar.cc/40?img=3" className="w-8 h-8 rounded-full border" />
                            <img src="https://i.pravatar.cc/40?img=4" className="w-8 h-8 rounded-full border" />
                        </div>

                        <p className="text-sm text-gray-600">
                            ⭐⭐⭐⭐⭐ Loved by 1,000+ users
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE (Resume Preview) */}


                <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                    {/* LEFT SIDEBAR */}
                    <div className="bg-gradient-to-b from-blue-900 to-black text-white w-full md:w-1/3 p-6">

                        <h3 className="font-semibold text-sm mb-4 tracking-wide">
                            SKILLS
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                        </ul>

                        <div className="mt-8">
                            <h3 className="font-semibold text-sm mb-2 tracking-wide">
                                EDUCATION
                            </h3>
                            <p className="text-sm">B.Tech in CSE</p>
                            <p className="text-xs text-gray-300">2019 - 2023</p>
                        </div>

                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="w-full md:w-2/3 p-6 md:p-8">

                        <h2 className="text-2xl md:text-3xl font-bold">
                            VISHAL RAJ
                        </h2>
                        <p className="text-gray-500 mb-4">
                            Frontend Developer
                        </p>

                        {/* CONTACT */}
                        <div className="text-sm text-gray-600 space-y-1 mb-6">
                            <p>📧 rajsinghrathod95@gmail.com</p>
                            <p>📞 +91 9876543210</p>
                            <p>📍 India</p>
                        </div>

                        {/* ABOUT */}
                        <div className="mb-6">
                            <h3 className="font-semibold border-b pb-1 mb-2 text-sm tracking-wide">
                                ABOUT ME
                            </h3>
                            <p className="text-sm text-gray-600">
                                Passionate Frontend Developer with experience in building modern
                                web applications using React, Next.js and Tailwind CSS.
                            </p>
                        </div>

                        {/* EXPERIENCE */}
                        <div>
                            <h3 className="font-semibold border-b pb-1 mb-2 text-sm tracking-wide">
                                EXPERIENCE
                            </h3>

                            <p className="font-medium text-sm">
                                Frontend Developer
                            </p>
                            <p className="text-xs text-gray-500 mb-2">
                                XYZ Company
                            </p>

                            <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                                <li>Built responsive UI using React & Tailwind</li>
                                <li>Improved performance and UX</li>
                            </ul>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    );
}