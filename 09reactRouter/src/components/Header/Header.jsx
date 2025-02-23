import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="backdrop-blur-lg bg-gray-900/80 shadow-md fixed w-full top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Brand Name (instead of Logo) */}
                <Link to="/" className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-orange-400">Isra</span> Ilyas
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-lg">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `transition-colors duration-300 ${
                                    isActive ? "text-orange-400" : "text-gray-300 hover:text-orange-400"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about-us"
                            className={({ isActive }) =>
                                `transition-colors duration-300 ${
                                    isActive ? "text-orange-400" : "text-gray-300 hover:text-orange-400"
                                }`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact-us"
                            className={({ isActive }) =>
                                `transition-colors duration-300 ${
                                    isActive ? "text-orange-400" : "text-gray-300 hover:text-orange-400"
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/github"
                            className={({ isActive }) =>
                                `transition-colors duration-300 ${
                                    isActive ? "text-orange-400" : "text-gray-300 hover:text-orange-400"
                                }`
                            }
                        >
                            GitHub
                        </NavLink>
                    </li>
                </ul>

                {/* Buttons */}
                <div className="hidden md:flex space-x-4">
                    {/* <Link
                        to="#"
                        className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-700 transition"
                    >
                        Log in
                    </Link> */}
                    <Link
                        to="contact-us"
                        className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                    >
                        Contact Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 py-4">
                    <ul className="text-center">
                        <li className="py-2">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block px-4 py-2 text-lg ${
                                        isActive ? "text-orange-400" : "text-gray-300 hover:text-orange-400"
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="py-2">
                            <NavLink
                                to="/about-us"
                                className={({ isActive }) =>
                                    `block px-4 py-2 text-lg ${
                                        isActive ? "text-orange-400" : "text-gray-300 hover:text-orange-400"
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="py-2">
                            <NavLink
                                to="/contact-us"
                                className={({ isActive }) =>
                                    `block px-4 py-2 text-lg ${
                                        isActive ? "text-orange-400" : "text-gray-300 hover:text-orange-400"
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Now
                            </NavLink>
                        </li>
                        <li className="py-2">
                            <NavLink
                                to="/github"
                                className={({ isActive }) =>
                                    `block px-4 py-2 text-lg ${
                                        isActive ? "text-orange-400" : "text-gray-300 hover:text-orange-400"
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                GitHub
                            </NavLink>
                        </li>
                        {/* <li className="py-2">
                            <Link
                                to="#"
                                className="block px-4 py-2 text-lg border border-gray-400 rounded-lg mx-6 text-center"
                            >
                                Log in
                            </Link>
                        </li> */}
                        <li className="py-2">
                            <Link
                                to="contact-us"
                                className="block px-4 py-2 bg-orange-600 text-white rounded-lg mx-6 text-center"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
