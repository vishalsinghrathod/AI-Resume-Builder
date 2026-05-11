"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const feedbacks = [
    {
        id: 1,
        name: "Aarav Sharma",
        role: "Frontend Developer",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
        rating: 5,
        feedback:
            "This AI Resume Builder made my resume look professional within minutes. The UI is smooth and very easy to use.",
    },
    {
        id: 2,
        name: "Priya Verma",
        role: "UI/UX Designer",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
        rating: 5,
        feedback:
            "I loved the modern templates and ATS-friendly format. It helped me get shortlisted for multiple interviews.",
    },
    {
        id: 3,
        name: "Rohan Gupta",
        role: "MERN Stack Developer",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
        rating: 4,
        feedback:
            "The resume generation process is super fast and the design quality feels premium. Highly recommended.",
    },
    {
        id: 4,
        name: "Sneha Kapoor",
        role: "Software Engineer",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
        rating: 5,
        feedback:
            "I was confused about resume formatting before, but this platform handled everything perfectly with AI.",
    },
];

export default function Blog() {
    return (
        <section id="blog" className="bg-gradient-to-b from-slate-50 to-white py-16 px-4 sm:px-6 lg:px-12">

            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto">

                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                    What Our Users Say
                </h2>

                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                    Thousands of users trust our AI Resume Builder to create
                    professional resumes and land their dream jobs.
                </p>
            </div>

            {/* Feedback Cards */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {feedbacks.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-white border border-slate-200 rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                        {/* User */}
                        <div className="flex items-center gap-4">
                            <div className="relative w-14 h-14 overflow-hidden rounded-full ring-2 ring-blue-100">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-slate-900">
                                    {item.name}
                                </h3>

                                <p className="text-xs text-gray-500">
                                    {item.role}
                                </p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mt-4">
                            {[...Array(item.rating)].map((_, index) => (
                                <Star
                                    key={index}
                                    size={16}
                                    className="fill-yellow-400 text-yellow-400"
                                />
                            ))}
                        </div>

                        {/* Feedback */}
                        <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                            “{item.feedback}”
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}