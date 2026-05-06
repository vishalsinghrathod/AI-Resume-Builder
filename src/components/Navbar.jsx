"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import SignUp from "./SignUp";

export default function Navbar() {
    const [showSignup, setShowSignup] = useState(false);
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <nav className="bg-amber-200 px-4 md:px-8 py-4 shadow-md sticky top-0 left-0 z-50 w-full ">
            <div className="flex justify-between items-center ">
                
                {/* Logo */}
                <h1 className="text-xl font-bold">
                    📝AI Resume Builder
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 font-medium">
                    <li className="cursor-pointer hover:text-blue-600">Home</li>
                    <li className="cursor-pointer hover:text-blue-600">Features</li>
                    <li className="cursor-pointer hover:text-blue-600">Templates</li>
                    <li className="cursor-pointer hover:text-blue-600">Pricing</li>
                    <li className="cursor-pointer hover:text-blue-600">Blog</li>
                </ul>

                {/* Desktop Auth */}
                <div className="hidden md:flex items-center gap-4">
                    {!user ? (
                        <button
                            onClick={() => setShowSignup(true)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Sign Up
                        </button>
                    ) : (
                        <>
                            <span className="font-semibold">
                                👋 {user.name}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4 bg-white p-4 rounded-lg shadow-lg">
                    
                    <ul className="flex flex-col gap-4 font-medium">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Features</li>
                        <li className="cursor-pointer">Templates</li>
                        <li className="cursor-pointer">Pricing</li>
                        <li className="cursor-pointer">Blog</li>
                    </ul>

                    <div className="border-t pt-4">
                        {!user ? (
                            <button
                                onClick={() => {
                                    setShowSignup(true);
                                    setMenuOpen(false);
                                }}
                                className="w-full bg-blue-500 text-white py-2 rounded"
                            >
                                Sign Up
                            </button>
                        ) : (
                            <div className="flex flex-col gap-2">
                                <span className="font-semibold">
                                    👋 {user.name}
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 text-white py-2 rounded"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Signup Modal */}
            {showSignup && (
                <SignUp
                    onClose={() => setShowSignup(false)}
                    setUser={setUser}
                />
            )}
        </nav>
    );
}

