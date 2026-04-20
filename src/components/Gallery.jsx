// import React, { useState, useEffect, useRef } from 'react';

// const SCREENS = [
//   { id: 1, title: "Welcome Screen", img: "https://bootstrapmade.com/content/demo/SoftLand/assets/img/app-gallery/app-gallery-1.png" },
//   { id: 2, title: "Login Screen", img: "https://bootstrapmade.com/content/demo/SoftLand/assets/img/app-gallery/app-gallery-2.png" },
//   { id: 3, title: "Main Menu", img: "https://bootstrapmade.com/content/demo/SoftLand/assets/img/app-gallery/app-gallery-3.png" },
//   { id: 4, title: "Doctor Profile", img: "https://bootstrapmade.com/content/demo/SoftLand/assets/img/app-gallery/app-gallery-5.png" },
//   { id: 5, title: "Appointment", img: "https://bootstrapmade.com/content/demo/SoftLand/assets/img/app-gallery/app-gallery-6.png" },
//   { id: 6, title: "Analytics", img: "https://bootstrapmade.com/content/demo/SoftLand/assets/img/app-gallery/app-gallery-8.png" },
//   { id: 7, title: "Settings", img: "https://bootstrapmade.com/content/demo/SoftLand/assets/img/app-gallery/app-gallery-11.png" },
// ];

// const AppGallery = () => {
//   const [active, setActive] = useState(0);
//   const [lightbox, setLightbox] = useState(null);
//   const total = SCREENS.length;
//   const timerRef = useRef(null);

//   const startTimer = () => {
//     stopTimer();
//     timerRef.current = setInterval(() => {
//       setActive((prev) => (prev + 1) % total);
//     }, 4000);
//   };

//   const stopTimer = () => { if (timerRef.current) clearInterval(timerRef.current); };

//   useEffect(() => {
//     startTimer();
//     return stopTimer;
//   }, []);

//   const handleNav = (index) => {
//     setActive(index);
//     startTimer();
//   };

//   const getVisibleSlots = () => {
//     const slots = [];
//     for (let i = -3; i <= 3; i++) {
//       slots.push({ offset: i, index: (active + i + total) % total });
//     }
//     return slots;
//   };

//   return (
//     <section id="gallery" className="gallery-section">
//       <div className="container">
        
//         <div className="row justify-content-center text-center mb-5">
//           <div className="col-lg-8">
//             <p className="about-label">Visual Tour</p>
//             <h2>App Screenshots & Gallery</h2>
//             <p className="text-muted">Check out how our interface looks in action.</p>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-12">
//             <div className="carousel-container">
//               <div className="carousel-stage">
//                 {getVisibleSlots().map(({ offset, index }) => (
//                   <div
//                     key={`${index}-${offset}`}
//                     className={`screen-slot ${offset === 0 ? 'active-slot' : ''}`}
//                     style={{
//                       '--offset': offset,
//                       '--abs-offset': Math.abs(offset),
//                     }}
//                     onClick={() => offset === 0 ? setLightbox(index) : handleNav(index)}
//                   >
//                     <div className="phone-frame">
//                       {/* STATUS BAR REMOVED FROM HERE */}
//                       <img src={SCREENS[index].img} alt={SCREENS[index].title} />
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="dots-container justify-content-center">
//                 {SCREENS.map((_, i) => (
//                   <button 
//                     key={i} 
//                     className={`dot ${i === active ? 'active' : ''}`} 
//                     onClick={() => handleNav(i)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {lightbox !== null && (
//           <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
//             <button className="close-btn">✕</button>
//             <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
//               <img src={SCREENS[lightbox].img} alt="Fullscreen" />
//               <h3 className="mt-3">{SCREENS[lightbox].title}</h3>
//             </div>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// };

// export default AppGallery;


import React, { useState, useEffect, useRef, useCallback } from 'react';
// import './Gallery.css'; // CSS file import lazmi karein

// --- Data Section (Images load na hon tw Unsplash wali reliable links use karein) ---
// const SCREENS = [
//   { id: 1, title: "Welcome Screen", img: "https://via.placeholder.com/300x600/4A90E2/ffffff?text=Screen+1" },
//   { id: 2, title: "Login Screen", img: "https://via.placeholder.com/300x600/50E3C2/ffffff?text=Screen+2" },
//   { id: 3, title: "Main Menu", img: "https://via.placeholder.com/300x600/F5A623/ffffff?text=Screen+3" },
//   { id: 4, title: "Doctor Profile", img: "https://via.placeholder.com/300x600/D0021B/ffffff?text=Screen+4" },
//   { id: 5, title: "Appointment", img: "https://via.placeholder.com/300x600/BD10E0/ffffff?text=Screen+5" },
//   { id: 6, title: "Analytics", img: "https://via.placeholder.com/300x600/417505/ffffff?text=Screen+6" },
//   { id: 7, title: "Settings", img: "https://via.placeholder.com/300x600/9013FE/ffffff?text=Screen+7" },
// ];


const SCREENS = [
  { id: 1, title: "Welcome Screen", img: "https://bootstrapmade.com/content/demo/SoftLand/assets/img/app-gallery/app-gallery-1.png" },
  { id: 2, title: "Login Screen", img: "https://bootstrapmade.com/content/demo/SoftLand/assets/img/app-gallery/app-gallery-2.png" },
  { id: 3, title: "Main Menu", img: "https://bootstrapmade.com/content/demo/SoftLand/assets/img/app-gallery/app-gallery-3.png" },
  { id: 4, title: "Doctor Profile", img: "https://bootstrapmade.com/content/demo/SoftLand/assets/img/app-gallery/app-gallery-5.png" },
  { id: 5, title: "Appointment", img: "https://bootstrapmade.com/content/demo/SoftLand/assets/img/app-gallery/app-gallery-6.png" },
  { id: 6, title: "Analytics", img: "https://bootstrapmade.com/content/demo/SoftLand/assets/img/app-gallery/app-gallery-8.png" },
  { id: 7, title: "Settings", img: "https://bootstrapmade.com/content/demo/SoftLand/assets/img/app-gallery/app-gallery-11.png" },
];

const AppGallery = () => {
  const [active, setActive] = useState(0); // Center screen index
  const [lightboxIndex, setLightboxIndex] = useState(null); // Fullscreen screen index
  const total = SCREENS.length;
  const timerRef = useRef(null);

  // --- Auto-slide Timer Functions ---
  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 4000);
  }, [total]);

  const stopTimer = () => { 
    if (timerRef.current) clearInterval(timerRef.current); 
  };

  useEffect(() => {
    startTimer();
    return stopTimer; // Cleanup on unmount
  }, [startTimer]);


  // --- Carousel Navigation ---
  const handleCarouselNav = (index) => {
    setActive(index);
    startTimer(); // Reset timer on manual nav
  };

  // Logic for infinite loop positioning (-3 to +3 visible)
  const getVisibleSlots = () => {
    const slots = [];
    for (let i = -3; i <= 3; i++) {
      slots.push({ offset: i, index: (active + i + total) % total });
    }
    return slots;
  };


  // --- Lightbox Navigation Functions ---
  const closeLightbox = () => setLightboxIndex(null);

  const lbNext = useCallback((e) => {
    if (e) e.stopPropagation(); // Prevents backdrop click
    setLightboxIndex((prev) => (prev + 1) % total);
  }, [total]);

  const lbPrev = useCallback((e) => {
    if (e) e.stopPropagation(); // Prevents backdrop click
    setLightboxIndex((prev) => (prev - 1 + total) % total);
  }, [total]);


  // --- Keyboard Controls for Lightbox (Esc, Left, Right) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return; // Only listen if lightbox is open
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') lbNext();
      if (e.key === 'ArrowLeft') lbPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown); // Cleanup
  }, [lightboxIndex, lbNext, lbPrev]);


  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        
        {/* Header (Optional, from image) */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <p className="about-label text-primary text-uppercase fw-bold" style={{fontSize: '14px', letterSpacing: '2px'}}>Visual Tour</p>
            <h2 className="fw-bold mb-3" style={{color: '#1e293b', fontSize: '36px'}}>App Screenshots & Gallery</h2>
            <p className="text-muted mx-auto" style={{maxWidth: '600px'}}>
              Check out how our interface looks in action. Designed for simplicity, scalability, and an amazing user experience.
            </p>
          </div>
        </div>

        {/* Carousel Row */}
        <div className="row">
          <div className="col-12">
            <div className="carousel-container">
              <div className="carousel-stage">
                {getVisibleSlots().map(({ offset, index }) => (
                  <div
                    key={`${index}-${offset}`}
                    className={`screen-slot ${offset === 0 ? 'active-slot' : ''}`}
                    style={{
                      '--offset': offset,
                      '--abs-offset': Math.abs(offset),
                    }}
                    // Click logic: center opens lightbox, sides navigate
                    onClick={() => offset === 0 ? setLightboxIndex(index) : handleCarouselNav(index)}
                  >
                    <div className="phone-frame">
                      {/* Status Bar removed as requested previously */}
                      <img src={SCREENS[index].img} alt={SCREENS[index].title} className="gallery-img" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="dots-container justify-content-center">
                {SCREENS.map((_, i) => (
                  <button 
                    key={i} 
                    className={`dot ${i === active ? 'active' : ''}`} 
                    onClick={() => handleCarouselNav(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Full Screen Lightbox (Updated with requirements) --- */}
        {lightboxIndex !== null && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            
            {/* 1. Cross Sign (Upper Right) */}
            <button className="close-btn" onClick={closeLightbox} aria-label="Close lightbox">✕</button>
            
            {/* 2. Navigation Arrows (Left/Right) */}
            <button className="lb-arrow lb-prev" onClick={lbPrev} aria-label="Previous image">‹</button>
            <button className="lb-arrow lb-next" onClick={lbNext} aria-label="Next image">›</button>

            {/* Content Container (stopPropagation prevents closing when clicking image) */}
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              
              {/* Image with normal height/width constraints */}
              <div className="lb-image-wrapper">
                <img 
                  src={SCREENS[lightboxIndex].img} 
                  alt={SCREENS[lightboxIndex].title} 
                  className="lb-main-image"
                />
              </div>

              {/* Optional Title */}
              <h3 className="lb-title mt-3">{SCREENS[lightboxIndex].title}</h3>
              
              {/* Optional Counter */}
              <div className="lb-counter text-muted">{lightboxIndex + 1} / {total}</div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default AppGallery;