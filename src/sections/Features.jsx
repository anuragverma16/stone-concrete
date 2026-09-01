import { Shield, Layers, CheckCircle, Wrench, Cloud } from 'lucide-react';

const FEATURES = [
  {
    icon: Shield,
    title: 'High Compressive Strength',
    desc: 'Achieves ≥30 N/mm² at 28 days, delivering the structural integrity required for critical construction elements.',
  },
  {
    icon: Layers,
    title: 'Shrinkage Controlled',
    desc: 'Specially formulated to minimise cracking and dimensional change, ensuring long-term surface integrity.',
  },
  {
    icon: CheckCircle,
    title: 'Consistent Quality',
    desc: 'Factory-blended under strict quality control, every batch delivers the same reliable performance you can count on.',
  },
  {
    icon: Wrench,
    title: 'Workability & Reliability',
    desc: 'Easy to mix and place with a 60-minute workable window, giving you the time needed for quality application.',
  },
  {
    icon: Cloud,
    title: 'Suitable for All Weather',
    desc: 'Engineered to perform in varying climatic conditions — from intense heat to cold and wet environments.',
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-header reveal">
        <div className="section-label">Why Stone Concrete</div>
        <h2 className="display-heading">
          Engineered for<br />Better Performance
        </h2>
        <div className="gold-line" />
      </div>

      <div className="features-grid">
        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className={`feature-card reveal reveal-delay-${i + 1}`}
            >
              <div className="fc-icon">
                <Icon size={22} />
              </div>
              <div className="fc-title">{f.title}</div>
              <div className="fc-desc">{f.desc}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
