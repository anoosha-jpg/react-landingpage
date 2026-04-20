import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT (SVG) */}
          <div className="col-lg-6">
            <div className="about-img-wrap">

              <svg
                viewBox="0 0 480 380"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%" }}
              >
                <rect x="40" y="40" width="400" height="300" rx="16" fill="#eef1fa"/>
                <rect x="40" y="40" width="400" height="300" rx="16" fill="none" stroke="#5777ba" strokeWidth="1.5" opacity=".3"/>

                <rect x="65" y="70" width="110" height="72" rx="10" fill="#5777ba" opacity=".15"/>
                <rect x="193" y="70" width="110" height="72" rx="10" fill="#f8a34a" opacity=".2"/>
                <rect x="321" y="70" width="110" height="72" rx="10" fill="#5777ba" opacity=".12"/>

                <text x="120" y="112" textAnchor="middle" fontSize="22" fill="#5777ba">98%</text>
                <text x="248" y="112" textAnchor="middle" fontSize="22" fill="#f8a34a">4.9</text>
                <text x="376" y="112" textAnchor="middle" fontSize="22" fill="#5777ba">25K</text>

                <text x="120" y="128" textAnchor="middle" fontSize="9" fill="#666">Satisfaction</text>
                <text x="248" y="128" textAnchor="middle" fontSize="9" fill="#666">App Rating</text>
                <text x="376" y="128" textAnchor="middle" fontSize="9" fill="#666">Users</text>

                <text x="65" y="170" fontSize="10" fill="#666" fontWeight="600">Performance</text>
                <rect x="65" y="176" width="350" height="10" rx="5" fill="#e0e7ff"/>
                <rect x="65" y="176" width="290" height="10" rx="5" fill="#5777ba" opacity=".8"/>

                <text x="65" y="202" fontSize="10" fill="#666" fontWeight="600">Customer Support</text>
                <rect x="65" y="208" width="350" height="10" rx="5" fill="#e0e7ff"/>
                <rect x="65" y="208" width="320" height="10" rx="5" fill="#5777ba" opacity=".6"/>

                <text x="65" y="234" fontSize="10" fill="#666" fontWeight="600">Security</text>
                <rect x="65" y="240" width="350" height="10" rx="5" fill="#e0e7ff"/>
                <rect x="65" y="240" width="344" height="10" rx="5" fill="#f8a34a" opacity=".8"/>

                <text x="65" y="282" fontSize="10" fill="#666" fontWeight="600">Team</text>
                <circle cx="90" cy="304" r="16" fill="#5777ba" opacity=".3"/>
                <circle cx="118" cy="304" r="16" fill="#5777ba" opacity=".5"/>
                <circle cx="146" cy="304" r="16" fill="#5777ba" opacity=".4"/>
                <circle cx="174" cy="304" r="16" fill="#f8a34a" opacity=".6"/>
                <circle cx="202" cy="304" r="16" fill="#5777ba" opacity=".3"/>

                <rect x="222" y="292" width="54" height="24" rx="12" fill="#5777ba" opacity=".15"/>
                <text x="249" y="308" textAnchor="middle" fontSize="9" fill="#5777ba" fontWeight="700">
                  +120
                </text>
              </svg>

              <div className="about-exp-badge">
                <strong>10+</strong>
                <span>
                  Years of <br /> Experience
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT (CONTENT) */}
          <div className="col-lg-6 about-content">
            <p className="about-label">About SoftLand</p>

            <h2>We Build Software That Scales With You</h2>

            <p>
              Founded in 2014, SoftLand has grown from a two-person startup into a
              globally trusted platform used by over 25,000 businesses. We believe
              that great software should be simple, reliable, and beautiful.
            </p>

            <p>
              Our mission is to give every team — regardless of size — access to
              enterprise-grade tools that were once available only to the biggest
              players in the industry.
            </p>

            <ul className="about-list">
              <li>
                <i className="bi bi-check-circle-fill"></i> Trusted by teams at Fortune 500 companies
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i> SOC 2 Type II certified — enterprise grade security
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i> 24/7 support with median response under 2 minutes
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i> Seamless integrations with 100+ tools
              </li>
            </ul>

            <a href="#features" className="btn-primary-sl">
              Explore Features
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;