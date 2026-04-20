import React from "react";

const FAQ = () => {
  return (
    <section id="faq">
      <div className="container">

        {/* TITLE */}
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Can't find the answer? <a href="#contact">Chat with our team</a>.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">

            <div className="accordion faq-accordion" id="faqAcc">

              {/* ITEM 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                  >
                    Is there a free plan available?
                  </button>
                </h2>

                <div
                  id="faq1"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#faqAcc"
                >
                  <div className="accordion-body">
                    Yes! Our Starter plan is completely free forever — no credit
                    card required. You get up to 3 users, 5 GB of storage, and
                    access to core features.
                  </div>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                  >
                    Can I switch plans at any time?
                  </button>
                </h2>

                <div
                  id="faq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAcc"
                >
                  <div className="accordion-body">
                    Absolutely. You can upgrade or downgrade your plan anytime.
                  </div>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                  >
                    How does the 14-day free trial work?
                  </button>
                </h2>

                <div
                  id="faq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAcc"
                >
                  <div className="accordion-body">
                    You get full access for 14 days without a credit card. After
                    that, you can continue or revert to free plan.
                  </div>
                </div>
              </div>

              {/* ITEM 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq4"
                  >
                    Is my data secure?
                  </button>
                </h2>

                <div
                  id="faq4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAcc"
                >
                  <div className="accordion-body">
                    Yes. Data is encrypted, SOC 2 certified, and GDPR compliant.
                  </div>
                </div>
              </div>

              {/* ITEM 5 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq5"
                  >
                    What integrations do you support?
                  </button>
                </h2>

                <div
                  id="faq5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAcc"
                >
                  <div className="accordion-body">
                    We support 100+ tools like Slack, GitHub, Stripe, Notion,
                    and more.
                  </div>
                </div>
              </div>

              {/* ITEM 6 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq6"
                  >
                    Do you offer discounts?
                  </button>
                </h2>

                <div
                  id="faq6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAcc"
                >
                  <div className="accordion-body">
                    Yes! Discounts available for non-profits and startups.
                  </div>
                </div>
              </div>

              {/* ITEM 7 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq7"
                  >
                    What happens if I cancel?
                  </button>
                </h2>

                <div
                  id="faq7"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAcc"
                >
                  <div className="accordion-body">
                    You have 30 days to export your data before deletion.
                  </div>
                </div>
              </div>

              {/* ITEM 8 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq8"
                  >
                    Do you offer self-hosted option?
                  </button>
                </h2>

                <div
                  id="faq8"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAcc"
                >
                  <div className="accordion-body">
                    Yes, Enterprise users can opt for self-hosted deployment.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;