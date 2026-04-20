import React, { useState, useEffect } from "react";

const Footer = () => {
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());

  const handleSubscribe = () => {
    // Add subscription logic here
    setNewsletterSuccess(true);
  };

  return (
    <footer id="footer">
      <div className="container">
        <div className="row g-5">
          {/* Brand */}
          <div className="col-lg-4">
            <div className="footer-about">
              <span className="footer-brand">
                Soft<span>Land</span>
              </span>
              <p>
                The all-in-one platform that helps modern teams collaborate,
                automate, and ship faster. Trusted by 25,000+ businesses
                worldwide.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" aria-label="GitHub">
                  <i className="bi bi-github"></i>
                </a>
                <a href="#" aria-label="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Company links */}
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="footer-heading">Company</h6>
            <ul className="footer-links">
              <li>
                <a href="#about">
                  <i className="bi bi-chevron-right"></i> About Us
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right"></i> Careers
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right"></i> Blog
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right"></i> Press Kit
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right"></i> Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Product links */}
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="footer-heading">Product</h6>
            <ul className="footer-links">
              <li>
                <a href="#features">
                  <i className="bi bi-chevron-right"></i> Features
                </a>
              </li>
              <li>
                <a href="#pricing">
                  <i className="bi bi-chevron-right"></i> Pricing
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right"></i> Changelog
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right"></i> Roadmap
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right"></i> Status
                </a>
              </li>
            </ul>
          </div>

          {/* Support links */}
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="footer-heading">Support</h6>
            <ul className="footer-links">
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right"></i> Documentation
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right"></i> API Reference
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right"></i> Community
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="bi bi-chevron-right"></i> Contact Us
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right"></i> Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="footer-heading">Newsletter</h6>
            <p
              style={{
                color: "rgba(255,255,255,.55)",
                fontSize: ".88rem",
                marginBottom: "14px",
              }}
            >
              Get product updates straight to your inbox.
            </p>
            <div className="footer-newsletter" id="newsletterWrap">
              <input
                type="email"
                id="nlEmail"
                className="form-control mb-2"
                placeholder="your@email.com"
              />
              <button
                className="btn-sub"
                id="nlBtn"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
            {newsletterSuccess && (
              <p
                id="nlSuccess"
                style={{
                  color: "#5cb85c",
                  fontWeight: 700,
                  fontSize: ".9rem",
                }}
              >
                <i className="bi bi-check-circle-fill me-1"></i> You're
                subscribed!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
            <p>
              &copy; <span>{year}</span>{" "}
              <strong style={{ color: "#fff" }}>SoftLand</strong>. All rights
              reserved.
            </p>
            <p>
              Designed with{" "}
              <i
                className="bi bi-heart-fill"
                style={{ color: "#e83e8c", fontSize: ".8rem" }}
              ></i>{" "}
              using{" "}
              <a href="https://getbootstrap.com" target="_blank">
                Bootstrap 5
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


