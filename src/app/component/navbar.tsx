import React from "react";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from "next/link";

const Navbar =() => {
return(
    <div className="bg-white z-50 sticky">
    <header className="wrapper text-black body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href={"/"} >
        <Image
        src={"/pictures/pics/images.png"}
         alt="Image Logo" 
         width={50}
         height={50} 
         />
        <span className="text-purple-800 text-2xl">Port</span>
        <span className="text-yellow-600 text-2xl">folio</span>
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href={"/"} className="mr-5 text-red-600 hover:text-blue-700">Home</Link>
        <Link href={"#about"} className="mr-5 text-red-600 hover:text-blue-700">About</Link>
        <Link href={"#skills"} className="mr-5 text-red-600 hover:text-blue-700">Skills</Link>
        <Link href={"#Contact"} className="mr-5 text-red-600 hover:text-blue-700">Contact</Link>
      </nav>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-teal-600 rounded text-base mt-4 md:mt-0">
        <a href="/cv/resume.pdf.pdf">
        Download CV 
        <FaCloudDownloadAlt className="text-2xl ml=2" />
        </a>
      </button>
    </div>
  </header>
  </div>
);
};

export default Navbar;