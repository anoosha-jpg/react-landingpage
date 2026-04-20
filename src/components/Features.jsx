import React from "react";

const Features = () => {
  return (
    <section id="features">
      <div className="container">

        {/* TITLE */}
        <div className="section-title">
          <h2>Why Teams Choose SoftLand</h2>
          <p>
            Everything you need to run your business — beautifully designed and
            packed into one unified platform.
          </p>
        </div>

        {/* FEATURES */}
        <div className="row g-4">

          <div className="col-md-6 col-lg-4">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>
              <h4>Blazing Fast Performance</h4>
              <p>
                Sub-second response times powered by our globally distributed
                edge infrastructure — no matter where your users are.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-shield-lock-fill"></i>
              </div>
              <h4>Enterprise Security</h4>
              <p>
                End-to-end encryption, SSO, MFA, audit logs, and SOC 2 Type II
                certification keep your data safe at all times.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-people-fill"></i>
              </div>
              <h4>Real-Time Collaboration</h4>
              <p>
                Multiple team members can work simultaneously with live cursors,
                comments, and conflict-free merging.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-bar-chart-fill"></i>
              </div>
              <h4>Advanced Analytics</h4>
              <p>
                Beautiful dashboards and exportable reports give you insights
                that drive smarter business decisions.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-gear-fill"></i>
              </div>
              <h4>Powerful Automation</h4>
              <p>
                Build no-code workflows with our drag-and-drop builder. Automate
                repetitive tasks and save hundreds of hours.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-plug-fill"></i>
              </div>
              <h4>100+ Integrations</h4>
              <p>
                Connect Slack, GitHub, Salesforce, Stripe, Notion, Zapier and
                more — your stack, your way.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;