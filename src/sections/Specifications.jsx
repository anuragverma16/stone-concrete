const SPECS = [
  { property: 'Compressive Strength (28 Days)', value: '≥ 30 N/mm²' },
  { property: 'Flexural Strength (28 Days)', value: '≥ 4.0 N/mm²' },
  { property: 'Setting Time — Initial', value: '≥ 30 Min' },
  { property: 'Setting Time — Final', value: '≤ 600 Min' },
  { property: 'Water Demand', value: '16% ± 2%' },
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
      </div>
    </section>
  );
}
