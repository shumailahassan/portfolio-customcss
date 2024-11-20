import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer-bg">
      <footer className="footer-wrapper">
        <div className="footer-container">
          <a className="footer-brand">
            <Image
              src={"/pictures/pics/images.png"}
              alt="Shumaila"
              width={100}
              height={100}
              className="footer-logo"
            />
            <span className="footer-title">Shumaila</span>
          </a>
          <p className="footer-text">
            © 2020 Shumaila
          </p>
          <div className="footer-links">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/shumaila-hassan-26406a2b5/"}
              className="footer-link"
            >
              <FaLinkedin className="footer-icon" />
            </Link>
            <Link
              target="_blank"
              href={"https://github.com/shumailahassan?tab=repositories"}
              className="footer-link"
            >
              <FaGithub className="footer-icon" />
            </Link>
            <Link
              target="_blank"
              href={"https://vercel.com/shumailahassans-projects"}
              className="footer-link"
            >
              <IoLogoVercel className="footer-icon" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Footer;