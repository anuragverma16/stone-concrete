const SPECS = [
  { property: 'Compressive Strength (28 Days)', value: '≥ 30 N/mm²' },
  { property: 'Flexural Strength (28 Days)', value: '≥ 4.0 N/mm²' },
  { property: 'Setting Time — Initial', value: '≥ 30 Min' },
  { property: 'Setting Time — Final', value: '≤ 600 Min' },
  { property: 'Water Demand', value: '16% ± 2%' },
  { property: 'Bulk Density', value: '1550 – 1650 kg/m³' },
  { property: 'Maximum Aggregate Size', value: '4.75 mm' },
  { property: 'Chloride Content', value: '< 0.1%' },
  { property: 'Air Content', value: '1 – 3%' },
  { property: 'Shelf Life', value: '3 Months' },
];

const COMPOSITION = [
  'Ordinary Portland Cement',
  'Graded Silica Sand',
  'Selected Fine Aggregates',
  'Performance-Enhancing Admixtures',
];

const PACKAGING = [
  { label: 'Bag Weight', value: '50 KG' },
  { label: 'Bag Type', value: 'Multi-layer, Moisture-Resistant' },
  { label: 'Coverage per Bag', value: '≈ 0.028 m³ (mixed yield)' },
  { label: 'Recommended Storage', value: 'Cool, Dry Place — Off the Ground' },
];

export default function Specifications() {
  return (
    <section className="specifications" id="specifications">
      <div className="spec-grid-bg" aria-hidden="true" />
      <div className="spec-inner">
        <div className="reveal">
          <div className="section-label">Typical Properties</div>
          <h2 className="display-heading">Performance,<br />Defined.</h2>
          <div className="gold-line" />
        </div>

        <div className="reveal reveal-delay-2" style={{ marginTop: 48 }}>
          <table className="spec-table">
            <thead>
              <tr>
                <th>Property</th>
                <th style={{ textAlign: 'right' }}>Value</th>
              </tr>
            </thead>
            <tbody>
              {SPECS.map(spec => (
                <tr key={spec.property}>
                  <td>{spec.property}</td>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p style={{
            marginTop: 20,
            fontSize: 12,
            color: 'var(--concrete)',
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            * Values reflect typical results under standard laboratory conditions at 28 days.
          </p>
        </div>

        <div className="spec-extra-grid">
          <div className="spec-extra-card reveal reveal-delay-1">
            <h3>Composition</h3>
            <ul className="spec-chip-list">
              {COMPOSITION.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="spec-extra-card reveal reveal-delay-2">
            <h3>Packaging &amp; Storage</h3>
            <ul className="spec-kv-list">
              {PACKAGING.map(item => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
