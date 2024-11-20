import React from "react";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from "next/link";
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-bg">
      <header className="navbar-wrapper">
        <div className="navbar-container">
          <Link href={"/"}>
            <Image
              src={"/pictures/pics/images.png"}
              alt="Image Logo"
              width={50}
              height={50}
            />
            <span className="navbar-title">Port</span>
            <span className="navbar-subtitle">folio</span>
          </Link>
          <nav className="navbar-links">
            <Link href={"/"} className="navbar-link">Home</Link>
            <Link href={"#about"} className="navbar-link">About</Link>
            <Link href={"#skills"} className="navbar-link">Skills</Link>
            <Link href={"#Contact"} className="navbar-link">Contact</Link>
          </nav>
          <button className="download-btn">
            <a href="/cv/resume.pdf.pdf">
              Download CV
              <FaCloudDownloadAlt className="download-icon" />
            </a>
          </button>
        </div>
      </header>
    </div>
  );
};


export default Navbar;