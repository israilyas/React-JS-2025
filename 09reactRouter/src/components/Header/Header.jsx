// import React from 'react'
// import {Link,NavLink} from 'react-router-dom'

// function Header() {

   

//   return (
//     <header className="shadow sticky z-50 top-0">
//     <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//             <Link to="/" className="flex items-center">
//                 <img
//                     src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
//                     className="mr-3 h-12"
//                     alt="Logo"
//                 />
//             </Link>
//             <div className="flex items-center lg:order-2">
//                 <Link
//                     to="#"
//                     className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                 >
//                     Log in
//                 </Link>
//                 <Link
//                     to="#"
//                     className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                 >
//                     Get started
//                 </Link>
//             </div>
//             <div
//                 className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//                 id="mobile-menu-2"
//             >
//                 <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                     <li>
//                         <NavLink to="/"
//                             className={({isActive}) =>
//                                 `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ?"text-orange-700" :"text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                             }
//                         >
//                             Home
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/about-us"
//                             className={({isActive}) =>
//                                 `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ?"text-orange-700" :"text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                             }
//                         >
//                             About
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/contact-us"
//                             className={({isActive}) =>
//                                 `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ?"text-orange-700" :"text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                             }
//                         >
//                            Contact
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/github"
//                             className={({isActive}) =>
//                                 `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ?"text-orange-700" :"text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                             }
//                         >
//                            Github
//                         </NavLink>
//                     </li>
                    
                    
//                 </ul>
//             </div>
//         </div>
//     </nav>
// </header>
//   )
// }

// export default Header

// // Link =>use in place of a tag
// // a tag reload complete page whie link dont
// // 

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
                    <Link
                        to="#"
                        className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-700 transition"
                    >
                        Log in
                    </Link>
                    <Link
                        to="#"
                        className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                    >
                        Get Started
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
                                Contact
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
                        <li className="py-2">
                            <Link
                                to="#"
                                className="block px-4 py-2 text-lg border border-gray-400 rounded-lg mx-6 text-center"
                            >
                                Log in
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link
                                to="#"
                                className="block px-4 py-2 bg-orange-600 text-white rounded-lg mx-6 text-center"
                            >
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
