// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebook } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa6";


// function Footer() {
//   return (
//     <footer className="bg-white w-full border-t px-4 lg:px-8">
//       <div className="mx-auto max-w-screen-xl py-6 lg:py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Logo Section */}
//           <div className="flex justify-center md:justify-start">
//             <Link to="/" className="flex items-center">
//               <img
//                 src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
//                 className="h-16"
//                 alt="Logo"
//               />
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 text-center md:text-left">
//             <div>
//               <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
//                 Resources
//               </h2>
//               <ul className="text-gray-500 font-medium">
//                 <li className="mb-2">
//                   <Link to="/" className="hover:underline">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/about-us" className="hover:underline">
//                     About
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
//                 Follow us
//               </h2>
//               <ul className="text-gray-500 font-medium">
//                 <li className="mb-2">
//                   <a
//                     href="https://github.com/hiteshchoudhary"
//                     className="hover:underline"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Github
//                   </a>
//                 </li>
//                 <li>
//                   <Link to="/" className="hover:underline">
//                     Discord
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
//                 Legal
//               </h2>
//               <ul className="text-gray-500 font-medium">
//                 <li className="mb-2">
//                   <Link to="#" className="hover:underline">
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:underline">
//                     Terms & Conditions
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <hr className="my-6 border-gray-200 sm:mx-auto" />

//         {/* Bottom Section */}
//         <div className="flex flex-col text-center sm:flex-row gap-2 justify-between items-center text-gray-500 text-sm">
//           <span>
//             © 2023{" "}
//             <a href="https://hiteshchoudhary.com/" className="hover:underline">
//               hiteshchoudhary
//             </a>
//             . All Rights Reserved.
//           </span>

//           {/* Social Icons */}
//           <div className="flex flex-row gap-2">
//             <Link to="#" className=" hover:text-gray-900">
//             <FaFacebook className="text-blue-600 hover:text-blue-700 w-7 h-7"/>
//             </Link>
//             <Link to="#" className="text-gray-500 hover:text-gray-900">
//             <FaSquareXTwitter className="text-gray-800 hover:text-gray-900 w-7 h-7"/>
//             </Link>
//             <Link to="#" className="text-gray-500 hover:text-gray-900">
//             <FaGithub className="text-gray-800 hover:text-gray-900 w-7 h-7"/>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="backdrop-blur-lg bg-gray-900/80 shadow-md w-full px-6 lg:px-12 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          
          {/* Brand Name (Replaces Image Logo) */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-2xl font-bold text-white">
              <span className="text-orange-400">Isra</span> Ilyas
            </Link>
            <p className="text-gray-400 text-sm mt-1">
              Crafting digital experiences with code.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-10 text-sm">
            <div>
              <h2 className="mb-2 text-white font-semibold uppercase">Resources</h2>
              <ul className="text-gray-400 space-y-1">
                <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
                <li><Link to="/about-us" className="hover:text-orange-400">About</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-white font-semibold uppercase">Follow Me</h2>
              <ul className="text-gray-400 space-y-1">
                <li>
                  <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
                    GitHub
                  </a>
                </li>
                <li><Link to="#" className="hover:text-orange-400">Twitter</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-white font-semibold uppercase">Legal</h2>
              <ul className="text-gray-400 space-y-1">
                <li><Link to="#" className="hover:text-orange-400">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:text-orange-400">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end space-x-4">
            <Link to="#" className="text-gray-400 hover:text-blue-500">
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-gray-300">
              <FaSquareXTwitter className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <FaGithub className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-orange-400">Isra Ilyas</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
