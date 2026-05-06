"use client";
import { useState } from "react";

export default function SigUp({ onClose, setUser }) {
    const [form, setForm] = useState({
        name: "",
        age: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("user", JSON.stringify(form));
        setUser(form);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
            
            {/* Modal Box */}
            <div className="bg-white w-full max-w-md rounded-xl p-6 relative shadow-lg max-h-[90vh] overflow-y-auto">
                
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-lg hover:text-red-500"
                >
                    ✖
                </button>

                <h2 className="text-2xl font-bold mb-5 text-center">
                    Sign Up
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full border p-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        required
                    />

                    <input
                        type="number"
                        placeholder="Age"
                        className="w-full border p-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={(e) =>
                            setForm({ ...form, age: e.target.value })
                        }
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border p-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        required
                    />

                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-md transition">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}