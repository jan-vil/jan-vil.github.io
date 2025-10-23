import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
        <h2>Frontend Developer & Designer</h2>
        <p>I create beautiful and functional web experiences</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Get In Touch</a>
        </div>
      </div>
      <div className="hero-image">
        {/* Add your photo or illustration here */}
      </div>
    </section>
  );
};

export default Hero;