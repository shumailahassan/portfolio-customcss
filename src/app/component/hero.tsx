import React from "react";
import Image from "next/image";
import Link from 'next/link';
import '../styles/hero.css';


const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight-text">My</span> name is
            <br />
            <span className="bold-text">Shumaila Hassan</span>
            <br />
            <span className="normal-text">and I'm a </span>
            <span className="highlight-text">Frontend Developer</span>
          </h1>
          <p className="hero-description">
            This is my official website to show all my work and details experience of front-end developer
          </p>
          <div className="hero-button">
            <Link href="#Contact">
              <button className="contact-button">Contact me</button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <Image
            className="rounded-image"
            alt="hero"
            src={"/pictures/pics/Untitled design.png"}
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};


export default Hero;