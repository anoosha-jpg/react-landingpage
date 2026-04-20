import React from "react";

const Cards = () => {
  return (
    <section id="testimonials">
      <div className="container">

        {/* TITLE */}
        <div className="section-title">
          <h2>Loved by Teams Worldwide</h2>
          <p>
            Join over 25,000 businesses that trust SoftLand to power their
            operations every day.
          </p>
        </div>

        <div className="row g-4">

          {/* CARD 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="t-card">
              <div className="t-stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p className="t-text">
                "SoftLand completely transformed how our engineering team ships
                features. What used to take days now takes hours. The analytics
                alone paid for the subscription in week one."
              </p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: "#4a6fa5" }}>
                  AJ
                </div>
                <div>
                  <p className="t-name">Alexandra Johnson</p>
                  <p className="t-role">CTO, TechWave</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="t-card">
              <div className="t-stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p className="t-text">
                "We evaluated six platforms and SoftLand won on every dimension
                — speed, security, integrations, and support. The onboarding team
                made migration completely painless."
              </p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: "#c07a2f" }}>
                  MR
                </div>
                <div>
                  <p className="t-name">Marcus Rivera</p>
                  <p className="t-role">Head of Product, Launchify</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-md-6 col-lg-4">
            <div className="t-card">
              <div className="t-stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p className="t-text">
                "As a solo founder scaling to a team of 30, I needed something
                that grows with us. SoftLand's pricing is fair and the product
                keeps getting better every week."
              </p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: "#3a8a6e" }}>
                  SK
                </div>
                <div>
                  <p className="t-name">Sana Khan</p>
                  <p className="t-role">
                    Founder &amp; CEO, NovaMind
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="col-md-6 col-lg-4">
            <div className="t-card">
              <div className="t-stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p className="t-text">
                "The automation builder saved my team 15 hours a week. Setting
                it up took 20 minutes. I genuinely cannot imagine going back to
                our old stack ever again."
              </p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: "#7b5ea7" }}>
                  DL
                </div>
                <div>
                  <p className="t-name">David Lee</p>
                  <p className="t-role">VP Engineering, Gridline</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="col-md-6 col-lg-4">
            <div className="t-card">
              <div className="t-stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p className="t-text">
                "SoftLand's customer support is unlike anything I've experienced.
                Every issue resolved within minutes by an actual human who knows
                the product inside-out."
              </p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: "#9e4068" }}>
                  FO
                </div>
                <div>
                  <p className="t-name">Fatima Okonkwo</p>
                  <p className="t-role">Director of Ops, Clearpath</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="col-md-6 col-lg-4">
            <div className="t-card">
              <div className="t-stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
              <p className="t-text">
                "The GitHub and Slack integrations are seamless. Our standups,
                PR reviews, and deployments all flow through SoftLand now. It's
                the connective tissue of our stack."
              </p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: "#3d7ea6" }}>
                  TN
                </div>
                <div>
                  <p className="t-name">Thomas Nguyen</p>
                  <p className="t-role">Engineering Manager, Rocketship</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cards;


