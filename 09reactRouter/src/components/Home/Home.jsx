import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaCode, FaProjectDiagram, FaUserCheck } from "react-icons/fa";

export default function Home() {
    return (
        <div className="text-white">
            
            {/* Hero Section */}
            <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12">
                <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed" 
                    style={{ backgroundImage: 'url("./Images/image1.jpg")' }}>
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>

                <div className="z-10">
                    <h2 className="text-4xl sm:text-6xl font-bold leading-tight animate-fadeIn">
                        Welcome to My Portfolio
                        <span className="block text-3xl sm:text-5xl mt-2 text-orange-400">I'M ISRA ILYAS</span>
                    </h2>
                    
                    <p className="text-lg sm:text-xl font-medium max-w-2xl mt-4 animate-fadeIn">
                        Passionate Frontend Developer | Python Enthusiast | SEO Expert
                    </p>

                    <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 mt-6 text-lg font-medium bg-orange-700 text-white rounded-lg shadow-lg hover:bg-orange-800 transition animate-fadeIn">
                        <IoLogoGooglePlaystore className="w-8 h-8 text-white" />
                        <span className='text-white'>View My Work</span>
                    </Link>
                </div>
            </div>

            {/* About Me Section */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-orange-400">About Me</h2>
                    <p className="text-lg text-gray-400 mt-4">
                        I'm a dedicated **frontend developer** with expertise in **JavaScript, React, and Tailwind CSS**.
                        I also have experience in **Python development** and **SEO optimization**.
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-gray-800">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-orange-400">What I Do</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                        <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition">
                            <FaCode className="text-5xl text-orange-400 mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">Frontend Development</h3>
                            <p className="text-gray-400 mt-2">Creating modern, responsive, and user-friendly interfaces.</p>
                        </div>
                        <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition">
                            <FaProjectDiagram className="text-5xl text-orange-400 mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">Project Development</h3>
                            <p className="text-gray-400 mt-2">Building web applications with JavaScript, React, and Python.</p>
                        </div>
                        <div className="p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition">
                            <FaUserCheck className="text-5xl text-orange-400 mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">SEO Optimization</h3>
                            <p className="text-gray-400 mt-2">Boosting online presence with advanced SEO strategies.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-orange-400">Featured Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {/* Replace with real projects */}
                        <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold text-orange-400">Netflix Clone</h3>
                            <p className="text-gray-400 mt-2">A fully responsive Netflix UI clone built with HTML, CSS, and Bootstrap.</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold text-orange-400">GitHub Card Fetcher</h3>
                            <p className="text-gray-400 mt-2">Displays GitHub user details using API integration.</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold text-orange-400">To-Do List App</h3>
                            <p className="text-gray-400 mt-2">A task management app with session storage and smooth UI.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-800">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-orange-400">What People Say</h2>
                    <div className="mt-8 space-y-6">
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <p className="text-gray-400">"Isra is an amazing developer! Her frontend skills are top-notch."</p>
                            <h3 className="mt-2 text-lg font-semibold text-orange-400">- John Doe, Client</h3>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <p className="text-gray-400">"Loved working with Isra! She built a great website for my business."</p>
                            <h3 className="mt-2 text-lg font-semibold text-orange-400">- Jane Smith, Freelancer</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-orange-400">Let's Work Together</h2>
                    <p className="text-gray-400 mt-4">Feel free to reach out for collaborations or project discussions.</p>
                    <Link to="/contact" className="mt-6 inline-block px-6 py-3 text-lg font-medium bg-orange-700 text-white rounded-lg shadow-lg hover:bg-orange-800 transition">
                        Contact Me
                    </Link>
                </div>
            </section>

        </div>
    );
}
