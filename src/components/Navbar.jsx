import React from "react";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#hero">
          Soft<span>Land</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link active" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how">How It Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">Pricing</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="#gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-cta" href="#pricing">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;