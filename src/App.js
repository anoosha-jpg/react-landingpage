// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Features from './components/Features';
// import Steps from './components/Steps';
// import Testimonials from './components/Testimonials'
// import Pricing from './components/Pricing';
// // import Faq from './components/Faq';
// import Faqs from './components/Faqs';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import './styles.css';

// function App() {
//   return (
//     // <div className="App">
//     <>
//     <div>
//       <Navbar />
//       <Hero />
//       <About/>
//       <Features />
//       <Steps/>
//       <Testimonials/>
//     <Pricing/>
//      <Faqs/>
//       <Contact />
//       <Footer />
//     </div>
//     </>
//   );
// }

// export default App;



// App.jsx
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import About from './components/About';
import Features from './components/Features';
import Steps from './components/Steps';
import Cards from './components/Cards';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

const App = () => {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    // ── Back to top & navbar scroll ──
    const navbar = document.getElementById("navbar");
    const backTop = document.getElementById("back-top");

    const handleScroll = () => {
      navbar?.classList.toggle("scrolled", window.scrollY > 60);
      if (backTop) setShowBackTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
  return (
    <div>
      <Navbar />
      <Hero />
        <About/>
      <Features />
      <Steps/>
      <Cards/>
    <Pricing/>
    <Gallery/>
    <Testimonials/>
     <Faqs/>
      <Contact />
      <Footer />
      {showBackTop && (
        <button
          id="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Back to top
        </button>
      )}
    </div>
  );
  
};

export default App;