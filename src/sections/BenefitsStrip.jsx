const BENEFITS = [
  'For Internal & External Use',
  'Just Add Water',
  'Easy to Mix',
  'Superior Finish',
  'High Strength',
  'Long Lasting',
  'Eco Friendly',
  'Durable Performance',
];

export default function BenefitsStrip() {
  const doubled = [...BENEFITS, ...BENEFITS];

  return (
    <div className="benefits-strip" aria-hidden="true">
      <div className="benefits-track">
        {doubled.map((b, i) => (
          <div className="benefit-item" key={i}>
            <span>{b}</span>
            <span className="bi-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}
