import React, { useState, useEffect, useRef } from 'react';
// import './Testimonials.css';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Sara Wilsson",
    role: "Designer",
    image: "https://bootstrapmade.com/demo/templates/SoftLand/assets/img/testimonials/testimonials-1.jpg",
    stars: 5,
    text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
  },
  {
    id: 2,
    name: "Jena Karlis",
    role: "Store Owner",
    image: "https://bootstrapmade.com/demo/templates/SoftLand/assets/img/testimonials/testimonials-2.jpg",
    stars: 5,
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
  },
  {
    id: 3,
    name: "Matt Brandon",
    role: "Freelancer",
    image: "https://bootstrapmade.com/demo/templates/SoftLand/assets/img/testimonials/testimonials-3.jpg",
    stars: 4,
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."
  },
  {
    id: 4,
    name: "John Larson",
    role: "Entrepreneur",
    image: "https://bootstrapmade.com/demo/templates/SoftLand/assets/img/testimonials/testimonials-4.jpg",
    stars: 5,
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."
  }
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  // Auto-slide function
  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000); // 5 seconds par change hoga
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handleDotClick = (index) => {
    setActive(index);
    startTimer(); // Click karne par timer reset ho jayega
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="testimonial-header">
          <h2>Testimonials</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        {/* Carousel Content */}
        <div className="testimonial-carousel">
          {TESTIMONIALS_DATA.map((item, index) => (
            <div 
              key={item.id} 
              className={`testimonial-item ${index === active ? 'active' : ''}`}
            >
              <div className="profile-img">
                <img src={item.image} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <h4>{item.role}</h4>
              
              <div className="stars">
                {[...Array(item.stars)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <div className="quote-box">
                <p>
                  <span className="quote-icon left">“</span>
                  {item.text}
                  <span className="quote-icon right">”</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="testimonial-dots">
          {TESTIMONIALS_DATA.map((_, i) => (
            <button
              key={i}
              className={`t-dot ${i === active ? 'active' : ''}`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;