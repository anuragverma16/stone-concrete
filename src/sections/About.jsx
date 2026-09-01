import { useEffect, useRef, useState } from 'react';
import stoneLogo from '../assets/stone-logo.png';

function useCounter(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return count;
}

const STATS = [
  { num: 50, suffix: ' KG', label: 'Net Weight' },
  { num: 30, prefix: '≥', suffix: ' N/mm²', label: 'Compressive Strength' },
  { num: 60, suffix: ' Min', label: 'Workable Time' },
  { num: 100, suffix: '%', label: 'All-Weather Ready' },
];

export default function About() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const counts = [
    useCounter(50, 1200, active),
    useCounter(30, 1500, active),
    useCounter(60, 1400, active),
    useCounter(100, 1600, active),
  ];

  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-text reveal">
          <div className="section-label">About the Product</div>
          <h2 className="display-heading">
            Premium Quality.<br />Built for Strength.
          </h2>
          <div className="gold-line" />
          <p className="about-desc" style={{ marginTop: 28 }}>
            STONE CONCRETE is a premium quality, factory blended concrete mix designed
            to provide high strength, durability &amp; long lasting performance for all
            types of construction work.
          </p>
          <p className="about-desc" style={{ marginTop: 16 }}>
            Engineered for internal and external applications, our high-compressive mix
            delivers consistent quality, superior workability, and lasting performance
            in every pour — across all weather conditions.
          </p>

          <div className="about-stats" ref={ref}>
            {STATS.map((s, i) => (
              <div className="stat-item" key={s.label}>
                <div className="stat-num">
                  {s.prefix || ''}{counts[i]}{s.suffix}
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual reveal reveal-delay-2">
          <div className="about-bag">
            <img src={stoneLogo} alt="Stone Concrete" />
            <div className="ab-name">Stone<br />Concrete</div>
            <div className="ab-sub">High Strength</div>
            <div className="about-badge">
              <div className="ab-num">50</div>
              <div className="ab-lbl">KG Net Weight</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
