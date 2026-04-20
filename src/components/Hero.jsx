import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT */}
          <div className="col-lg-6 hero-text">
            <span className="hero-pill">🚀 New — Version 2.0 is here</span>

            <h1>
              Powerful Software <br />
              For <span>Modern Teams</span>
            </h1>

            <p>
              SoftLand helps your team collaborate, automate, and ship faster.
              From startup to enterprise — one platform, unlimited possibilities.
            </p>

            <div className="hero-btns">
              <a href="#pricing" className="btn-primary-sl">
                Start Free Trial
              </a>
              <a href="#how" className="btn-outline-sl">
                <i className="bi bi-play-circle me-1"></i> How It Works
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <strong>25K+</strong>
                <span>Active Users</span>
              </div>
              <div className="hero-stat">
                <strong>4.9★</strong>
                <span>App Rating</span>
              </div>
              <div className="hero-stat">
                <strong>99.9%</strong>
                <span>Uptime SLA</span>
              </div>
            </div>
          </div>

          {/* RIGHT
          <div className="col-lg-6">
            <div className="hero-img-wrap">

              <svg
                viewBox="0 0 520 420"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", maxWidth: "520px" }}
              >
                <rect x="40" y="20" width="440" height="310" rx="18" fill="#5777ba" opacity=".10"/>
                <rect x="40" y="20" width="440" height="310" rx="18" fill="none" stroke="#5777ba" strokeWidth="1.5" opacity=".35"/>
                <rect x="40" y="20" width="440" height="40" rx="18" fill="#5777ba" opacity=".22"/>
              </svg>

              <div className="hero-badge b1">
                <i className="bi bi-graph-up-arrow"></i>
                <div>
                  <div style={{ fontSize: ".7rem", opacity: ".6", zIndex: "10px" }}>Revenue</div>
                  <strong>+42% Growth</strong>
                </div>
              </div>

              <div className="hero-badge b2">
                <i className="bi bi-people-fill"></i>
                <div>
                  <div style={{ fontSize: ".7rem", opacity: ".6" }}>Team</div>
                  <strong>250 Members</strong>
                </div>
              </div>

            </div>
          </div> */}


          <div className="col-lg-6">
  <div className="hero-img-wrap">

    {/* MAIN DASHBOARD CARD */}
    <div className="dashboard-card">

      <div className="dashboard-header">
        <span>Revenue Overview</span>
        <span className="dot"></span>
      </div>

      {/* FAKE CHART BARS */}
      <div className="chart-bars">
        <div className="bar" style={{ height: "40%" }}></div>
        <div className="bar" style={{ height: "60%" }}></div>
        <div className="bar active" style={{ height: "85%" }}></div>
        <div className="bar" style={{ height: "55%" }}></div>
        <div className="bar" style={{ height: "70%" }}></div>
      </div>

      {/* STATS */}
                    <div className="hero-badge b1">
                <i className="bi bi-graph-up-arrow"></i>
                <div>
                  <div style={{ fontSize: ".7rem", opacity: ".6", zIndex: "10px" }}>Revenue</div>
                  <strong>+42% Growth</strong>
                </div>
              </div>
      <div className="chart-info">
        <h3>+42%</h3>
        <p>Growth this month</p>
      </div>


              <div className="hero-badge b2">
                <i className="bi bi-people-fill"></i>
                <div>
                  <div style={{ fontSize: ".7rem", opacity: ".6" }}>Team</div>
                  <strong>250 Members</strong>
                </div>
              </div>
              
    </div>

  </div>
</div>

        </div>

        {/* ✅ CLIENTS ADDED HERE */}
        <div id="clients" className="text-center mt-5">
          <p>Trusted by teams at</p>
          <div className="clients-logos">
            <span className="client-logo">Dropbox</span>
            <span className="client-logo">Spotify</span>
            <span className="client-logo">Airbnb</span>
            <span className="client-logo">HubSpot</span>
            <span className="client-logo">Notion</span>
            <span className="client-logo">Figma</span>
            <span className="client-logo">Stripe</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;



