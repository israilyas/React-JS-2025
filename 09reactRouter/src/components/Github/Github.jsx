import React, { useEffect, useState } from "react";

function Github() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("https://api.github.com/users/israilyas")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
            <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg mt-16">
                {/* Profile Header */}
                <div className="w-full flex flex-col md:flex-row md:items-start items-center gap-6">
                    {/* Profile Image */}
                    <div className="basis-[30%] w-40 h-40 rounded-full overflow-hidden border-4 border-gray-600">
                        <img
                            src={data.avatar_url}
                            alt="GitHub Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Profile Info */}
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold">{data.name}</h1>
                        <p className="text-gray-400 text-md mt-2">{data.bio || "No bio available"}</p>

                        {/* GitHub Stats */}
                        <div className="my-2">
                            <p>📂 Public Repos: <span className="font-semibold">{data.public_repos}</span></p>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-4 text-gray-300">
                            {data.location && <p>📍 {data.location}</p>}
                            {data.company && <p>🏢 {data.company}</p>}
                            {data.blog && (
                                <p>🔗 <a href={data.blog} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{data.blog}</a></p>
                            )}
                        </div>

                        {/* GitHub Profile Button */}
                        <a
                            href={data.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-block px-5 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg text-white text-lg font-semibold transition"
                        >
                            View GitHub Profile
                        </a>
                    </div>
                </div>

                {/* Recent Repositories Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold border-b pb-2 mb-4">📌 Recent Repositories</h2>
                    <div className="text-gray-300 grid md:grid-cols-3 grid-cols-2">
                        <p>🔹 OLX Clone</p>
                        <p>🔹 Netflix Clone</p>
                        <p>🔹 To-Do list App</p>
                        <p>🔹 GitHub Profile Card</p>
                        <p>🔹 BMI Calculator</p>
                        <p>🔹 Food Website Using REACT</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Github;
