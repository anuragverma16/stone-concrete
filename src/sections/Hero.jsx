import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import stoneLogo from '../assets/stone-logo.png';

export default function Hero() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (!wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      wrapRef.current.style.transform = `rotate(${dx * 2.5}deg) rotateX(${-dy * 2.5}deg)`;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true" />

      {/* LEFT */}
      <div className="hero-left">
        <div className="hero-product-label">High Strength Concrete</div>

        <h1 className="hero-heading">
          Build Strong.<br />
          <span>Build Better.</span>
        </h1>

        <p className="hero-subtext">
          Premium quality concrete engineered for stronger, more durable
          and reliable construction.
        </p>

        <div className="hero-buttons">
          <Link className="btn btn-primary" to="/about">
            Explore Product
          </Link>
          <Link className="btn btn-outline" to="/specifications">
            View Specifications
          </Link>
        </div>
      </div>

      {/* RIGHT – product bag */}
      <div className="hero-right">
        <div className="hero-product-wrap" ref={wrapRef} style={{ perspective: '800px' }}>
          <div className="hero-product-float">
            <div className="hero-glow" />

            {/* Floating labels */}
            <div className="floating-label fl-1">50 KG</div>
            <div className="floating-label fl-2">Premium Quality</div>

            {/* Glass card */}
            <div className="hero-glass-outer">
              <div className="hero-glass-card">
                <div className="glass-shine" aria-hidden="true" />

                <div className="glass-top">
                  <div className="glass-badge">
                    <img src={stoneLogo} alt="Stone Concrete Logo" />
                  </div>
                  <span className="glass-tag">High Strength</span>
                </div>

                <div className="glass-title">
                  <div className="glass-name-stone">Stone</div>
                  <div className="glass-name-concrete">Concrete</div>
                </div>

                <div className="glass-divider" />

                <div className="glass-stats">
                  <div className="glass-stat">
                    <span className="gs-num">50</span>
                    <span className="gs-label">KG Bag</span>
                  </div>
                  <div className="glass-stat">
                    <span className="gs-num">M40</span>
                    <span className="gs-label">Grade</span>
                  </div>
                  <div className="glass-stat">
                    <span className="gs-num">100%</span>
                    <span className="gs-label">Reliable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
