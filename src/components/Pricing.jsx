import React from "react";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">

        {/* TITLE */}
        <div className="section-title">
          <h2>Simple, Transparent Pricing</h2>
          <p>No hidden fees. No surprises. Cancel anytime.</p>

          <div className="billing-toggle">
            <span id="monthlyLabel" className="active">Monthly</span>

            <div
              className="toggle-track"
              id="billingToggle"
              role="switch"
              aria-checked="false"
              tabIndex="0"
            >
              <div className="toggle-thumb"></div>
            </div>

            <span id="annualLabel">
              Annual <span className="save-badge">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="row g-4 justify-content-center align-items-stretch">

          {/* STARTER */}
          <div className="col-md-6 col-lg-4">
            <div className="p-card h-100">
              <p className="p-name">Starter</p>

              <div className="p-price">
                <span className="currency">$</span>
                <span className="amount" data-monthly="0" data-annual="0">0</span>
                <span className="period"> / month</span>
              </div>

              <p className="p-desc">
                Perfect for individuals and small projects.
              </p>

              <hr className="p-hr" />

              <ul className="p-features">
                <li><i className="bi bi-check-circle-fill"></i> Up to 3 users</li>
                <li><i className="bi bi-check-circle-fill"></i> 5 GB storage</li>
                <li><i className="bi bi-check-circle-fill"></i> Basic analytics</li>
                <li><i className="bi bi-check-circle-fill"></i> 10 integrations</li>
                <li><i className="bi bi-check-circle-fill"></i> Email support</li>
                <li className="off"><i className="bi bi-x-circle-fill"></i> Custom domain</li>
                <li className="off"><i className="bi bi-x-circle-fill"></i> Advanced automation</li>
                <li className="off"><i className="bi bi-x-circle-fill"></i> Priority support</li>
              </ul>

              <a href="#contact" className="btn-outline-sl d-block text-center">
                Get Started Free
              </a>
            </div>
          </div>

          {/* PRO */}
          <div className="col-md-6 col-lg-4">
            <div className="p-card featured h-100">
              <span className="p-badge">Most Popular</span>

              <p className="p-name">Pro</p>

              <div className="p-price">
                <span className="currency">$</span>
                <span className="amount" data-monthly="29" data-annual="23">29</span>
                <span className="period"> / month</span>
              </div>

              <p className="p-desc">
                The most popular plan for growing teams.
              </p>

              <hr className="p-hr" />

              <ul className="p-features">
                <li><i className="bi bi-check-circle-fill"></i> Up to 25 users</li>
                <li><i className="bi bi-check-circle-fill"></i> 50 GB storage</li>
                <li><i className="bi bi-check-circle-fill"></i> Advanced analytics</li>
                <li><i className="bi bi-check-circle-fill"></i> Unlimited integrations</li>
                <li><i className="bi bi-check-circle-fill"></i> Priority email &amp; chat</li>
                <li><i className="bi bi-check-circle-fill"></i> Custom domain</li>
                <li><i className="bi bi-check-circle-fill"></i> Advanced automation</li>
                <li className="off"><i className="bi bi-x-circle-fill"></i> Priority support</li>
              </ul>

              <a href="#contact" className="btn-primary-sl d-block text-center">
                Start Free Trial
              </a>
            </div>
          </div>

          {/* ENTERPRISE */}
          <div className="col-md-6 col-lg-4">
            <div className="p-card h-100">
              <p className="p-name">Enterprise</p>

              <div className="p-price">
                <span className="currency">$</span>
                <span className="amount" data-monthly="79" data-annual="63">79</span>
                <span className="period"> / month</span>
              </div>

              <p className="p-desc">
                For large teams that need maximum control.
              </p>

              <hr className="p-hr" />

              <ul className="p-features">
                <li><i className="bi bi-check-circle-fill"></i> Unlimited users</li>
                <li><i className="bi bi-check-circle-fill"></i> 500 GB storage</li>
                <li><i className="bi bi-check-circle-fill"></i> Custom analytics</li>
                <li><i className="bi bi-check-circle-fill"></i> Unlimited integrations</li>
                <li><i className="bi bi-check-circle-fill"></i> 24/7 phone support</li>
                <li><i className="bi bi-check-circle-fill"></i> Custom domain + SSL</li>
                <li><i className="bi bi-check-circle-fill"></i> Advanced automation</li>
                <li><i className="bi bi-check-circle-fill"></i> Dedicated CSM</li>
              </ul>

              <a href="#contact" className="btn-outline-sl d-block text-center">
                Contact Sales
              </a>
            </div>
          </div>

        </div>

        {/* FOOTER TEXT */}
        <p
          className="text-center mt-4"
          style={{ color: "var(--gray)", fontSize: ".92rem" }}
        >
          All plans include a <strong>14-day free trial</strong>. No credit card
          required. Need something custom? <a href="#contact">Talk to us</a>.
        </p>

      </div>
    </section>
  );
};

export default Pricing;