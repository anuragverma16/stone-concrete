const FACTS = [
  { value: '50 KG', label: 'Net Weight' },
  { value: '≥30 N/mm²', label: 'Compressive Strength' },
  { value: '60 Min', label: 'Workable Time' },
  { value: '100%', label: 'All-Weather Ready' },
];

export default function QuickFacts() {
  return (
    <div className="quick-facts">
      <div className="quick-facts-inner">
        {FACTS.map(f => (
          <div className="qf-item" key={f.label}>
            <div className="qf-value">{f.value}</div>
            <div className="qf-label">{f.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
