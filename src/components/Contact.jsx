import React, { useState } from "react";

const Contact = () => {
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 5000);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>
            Have a question, feedback, or want a demo? We'd love to hear from
            you.
          </p>
        </div>
        <div className="row g-5">
          {/* Info cards */}
          <div className="col-lg-4">
            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <h5>Our Office</h5>
                <p>
                  350 Fifth Avenue, Suite 4100
                  <br />
                  New York, NY 10118, USA
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div>
                <h5>Phone</h5>
                <p>
                  +1 (800) 555-0199
                  <br />
                  Mon–Fri 9am–6pm EST
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div>
                <h5>Email</h5>
                <p>
                  hello@softland.io
                  <br />
                  support@softland.io
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-8">
            <div className="contact-form-wrap">
              <h4 style={{ fontWeight: 800, marginBottom: "24px" }}>
                Send Us a Message
              </h4>

              {formSuccess && (
                <div className="form-success" id="formSuccess">
                  <i className="bi bi-check-circle-fill"></i> Message sent! We'll
                  get back to you within 24 hours.
                </div>
              )}

              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="cname">Full Name</label>
                    <input
                      type="text"
                      id="cname"
                      className="form-control"
                      placeholder="Jane Smith"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="cemail">Email Address</label>
                    <input
                      type="email"
                      id="cemail"
                      className="form-control"
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="csubject">Subject</label>
                    <input
                      type="text"
                      id="csubject"
                      className="form-control"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="cmessage">Message</label>
                    <textarea
                      id="cmessage"
                      className="form-control"
                      rows="6"
                      placeholder="Tell us about your project, question or idea..."
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn-submit">
                      <i className="bi bi-send-fill me-2"></i> Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
