import React from "react";

const Steps = () => {
  return (
    <section id="how">
      <div className="container">

        {/* TITLE */}
        <div className="section-title">
          <h2>How It Works</h2>
          <p>
            Get up and running in minutes — no complex setup, no IT department required.
          </p>
        </div>

        <div className="row align-items-center g-5">

          {/* LEFT STEPS */}
          <div className="col-lg-6 steps-col">

            <div className="step-item">
              <div className="step-num">01</div>
              <div className="step-content">
                <h4>Create Your Account</h4>
                <p>
                  Sign up in under 60 seconds — no credit card required. Choose a
                  workspace name and invite your first teammates.
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-num">02</div>
              <div className="step-content">
                <h4>Connect Your Tools</h4>
                <p>
                  Link your existing tools like Slack, GitHub, and Google Workspace
                  with one click. Migrate data instantly.
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-num">03</div>
              <div className="step-content">
                <h4>Collaborate &amp; Ship</h4>
                <p>
                  Work together in real time, automate your workflows, and ship
                  projects faster than ever before.
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-num">04</div>
              <div className="step-content">
                <h4>Track &amp; Optimise</h4>
                <p>
                  Use built-in analytics to spot bottlenecks, celebrate wins, and
                  continually improve your team's output.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SVG */}
          <div className="col-lg-6 text-center">

            <svg
              viewBox="0 0 340 540"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: "300px" }}
            >
              <rect x="20" y="10" width="300" height="520" rx="34" fill="#1e2436"/>
              <rect x="28" y="18" width="284" height="504" rx="28" fill="#f0f4ff"/>
              <rect x="120" y="18" width="100" height="26" rx="13" fill="#1e2436"/>

              <rect x="28" y="54" width="284" height="54" fill="#5777ba"/>
              <text x="170" y="86" textAnchor="middle" fontSize="13" fill="#fff">
                SoftLand Dashboard
              </text>

              <rect x="38" y="120" width="124" height="82" rx="12" fill="#5777ba" opacity=".15"/>
              <rect x="174" y="120" width="126" height="82" rx="12" fill="#f8a34a" opacity=".2"/>

              <text x="100" y="158" textAnchor="middle" fontSize="20" fill="#5777ba">$48K</text>
              <text x="100" y="174" textAnchor="middle" fontSize="9" fill="#666">Revenue</text>

              <text x="237" y="158" textAnchor="middle" fontSize="20" fill="#f8a34a">312</text>
              <text x="237" y="174" textAnchor="middle" fontSize="9" fill="#666">New Users</text>

              <rect x="38" y="216" width="262" height="130" rx="12" fill="#fff"/>
              <text x="54" y="236" fontSize="9" fontWeight="700" fill="#1e2436">
                Weekly Overview
              </text>

              <rect x="50" y="274" width="22" height="58" rx="3" fill="#5777ba" opacity=".28"/>
              <rect x="82" y="256" width="22" height="76" rx="3" fill="#5777ba" opacity=".45"/>
              <rect x="114" y="266" width="22" height="66" rx="3" fill="#5777ba" opacity=".28"/>
              <rect x="146" y="242" width="22" height="90" rx="3" fill="#5777ba" opacity=".8"/>

              <line x1="38" y1="346" x2="300" y2="346" stroke="#e0e7ff" strokeWidth="1"/>

              <rect x="38" y="358" width="262" height="150" rx="12" fill="#fff"/>
              <text x="54" y="378" fontSize="9" fontWeight="700" fill="#1e2436">
                Recent Activity
              </text>

              <circle cx="56" cy="396" r="7" fill="#5cb85c" opacity=".7"/>
              <text x="70" y="400" fontSize="9" fill="#333">New signup</text>

              <circle cx="56" cy="422" r="7" fill="#5777ba" opacity=".7"/>
              <text x="70" y="426" fontSize="9" fill="#333">Payment received</text>

              <circle cx="56" cy="448" r="7" fill="#f8a34a" opacity=".7"/>
              <text x="70" y="452" fontSize="9" fill="#333">Report generated</text>

              <circle cx="56" cy="474" r="7" fill="#5777ba" opacity=".7"/>
              <text x="70" y="478" fontSize="9" fill="#333">User upgraded</text>

              <rect x="28" y="488" width="284" height="34" fill="#fff"/>
              <rect x="62" y="494" width="24" height="22" rx="4" fill="#5777ba"/>
            </svg>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Steps;