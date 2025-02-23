// // import React from 'react'

// // export default function About() {
// //   return (
// //       <div className="max-w-5xl py-16 bg-white mx-auto ">
// //           <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 flex flex-row justify-center items-center lg:h-[75vh]">
// //               <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
// //                   <div className="md:5/12 lg:w-5/12">
// //                       <img
// //                           src="./Images/developers-team.png"
// //                           alt="image"
// //                       />
// //                   </div>
// //                   <div className="md:7/12 lg:w-6/12 text-center">
// //                       <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
// //                           React development is carried out by passionate developers
// //                       </h2>
// //                       <p className="mt-6 text-gray-600">
// //                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
// //                           accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
// //                           aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
// //                       </p>
// //                       <p className="mt-4 text-gray-600">
// //                           Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
// //                           Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
// //                       </p>
// //                   </div>
// //               </div>
// //           </div>
// //       </div>
// //   );
// // }


// import React from 'react';

// export default function About() {
//   return (
//     <div className="max-w-6xl py-16 bg-white mx-auto">
//       {/* About Section */}
//       <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6 flex flex-col lg:flex-row items-center lg:h-[75vh]">
//         {/* Image Section */}
//         <div className="md:w-5/12 lg:w-5/12 mb-6 lg:mb-0">
//           <img src="./Images/developers-team.png" alt="Development Team" />
//         </div>
        
//         {/* Text Section */}
//         <div className="md:w-7/12 lg:w-6/12 text-center lg:text-left">
//           <h2 className="text-3xl text-gray-900 font-bold md:text-4xl">
//             About <span className="text-orange-600">Isra Ilyas</span>
//           </h2>
//           <p className="mt-6 text-gray-700">
//             I'm a passionate **frontend developer** currently working at **Agile Networking Consultants**.
//             I specialize in crafting interactive, responsive, and visually appealing user interfaces.
//           </p>
//           <p className="mt-4 text-gray-700">
//             With experience in modern frontend technologies, I aim to build seamless digital experiences. 
//             I enjoy turning creative ideas into real-world applications with clean and efficient code.
//           </p>
//         </div>
//       </div>

//       {/* Skills Section */}
//       <div className="mt-16 px-6">
//         <h3 className="text-2xl text-gray-900 font-bold text-center">Skills & Technologies</h3>
//         <div className="flex flex-wrap justify-center gap-4 mt-6">
//           <span className="px-4 py-2 bg-orange-600 text-white rounded-full">HTML</span>
//           <span className="px-4 py-2 bg-orange-600 text-white rounded-full">CSS</span>
//           <span className="px-4 py-2 bg-orange-600 text-white rounded-full">JavaScript</span>
//           <span className="px-4 py-2 bg-orange-600 text-white rounded-full">React.js</span>
//           <span className="px-4 py-2 bg-orange-600 text-white rounded-full">Bootstrap</span>
//           <span className="px-4 py-2 bg-orange-600 text-white rounded-full">Tailwind CSS</span>
//           <span className="px-4 py-2 bg-orange-600 text-white rounded-full">Git & GitHub</span>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="mt-16 px-6 text-center">
//         <h3 className="text-2xl text-gray-900 font-bold">Let's Connect!</h3>
//         <p className="mt-4 text-gray-700">
//           Whether you want to collaborate on a project or just chat about frontend development, feel free to reach out!
//         </p>
//         <a 
//           href="mailto:israilyas@example.com"
//           className="mt-6 inline-block bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-700 transition"
//         >
//           Contact Me
//         </a>
//       </div>
//     </div>
//   );
// }


import React from 'react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 text-gray-100 bg-gray-900">
      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center lg:h-[80vh] gap-12">
        {/* Image Section */}
        <div className="lg:w-5/12">
          <img 
            src="./Images/developers-team.png" 
            alt="Isra Ilyas" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        
        {/* Text Section */}
        <div className="lg:w-7/12 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-white">About <span className="text-orange-500">Isra Ilyas</span></h2>
          <p className="mt-6 text-gray-300 text-lg">
            I'm a passionate <strong>Frontend Developer</strong> with expertise in crafting modern, responsive, and visually stunning web applications. I have a deep understanding of UI/UX principles, and I love building seamless user experiences.
          </p>
          <p className="mt-4 text-gray-300 text-lg">
            My journey in **web development** started with a curiosity for how websites work, and today, I specialize in **React.js, Tailwind CSS, and JavaScript** to bring ideas to life.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <h3 className="text-3xl text-center font-bold text-white">Skills & Technologies</h3>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {["HTML", "CSS", "JavaScript", "React.js","Next.js", "Bootstrap", "Tailwind CSS", "Git & GitHub", "SEO Optimization", "Python"].map(skill => (
            <span key={skill} className="px-6 py-3 bg-orange-500 text-white rounded-full text-lg font-medium shadow-md">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-16">
        <h3 className="text-3xl text-center font-bold text-white">Experience</h3>
        <div className="mt-6 flex flex-col gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold text-orange-400">Freelance Web Developer</h4>
            <p className="text-gray-300">Building modern and responsive websites for clients worldwide.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold text-orange-400">SEO & Backlinks Specialist</h4>
            <p className="text-gray-300">Providing guest posting services and boosting search rankings.</p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-16">
        <h3 className="text-3xl text-center font-bold text-white">Education</h3>
        <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h4 className="text-2xl font-semibold text-orange-400">BS Computer Science</h4>
          <p className="text-gray-300">Federal Urdu University of Arts, Science, and Technology</p>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mt-16">
        <h3 className="text-3xl text-center font-bold text-white">Achievements</h3>
        <ul className="mt-6 text-lg text-gray-300 list-disc list-inside space-y-3">
          <li>Completed a **7-day bootcamp on React.js and ChatGPT Clone**.</li>
          <li>Developed multiple **personal projects including a Netflix Clone, OLX Clone, and To-Do List App**.</li>
          <li>Certified in **Python Development and Web Development Fundamentals**.</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold text-white">Let's Connect!</h3>
        <p className="mt-4 text-gray-300 text-lg">
          Whether you want to collaborate on a project or discuss tech trends, feel free to reach out.
        </p>
        <a 
          href="mailto:israilyas@example.com"
          className="mt-6 inline-block bg-orange-500 text-white px-8 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-orange-600 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
