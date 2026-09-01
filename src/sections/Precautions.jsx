import { Thermometer, CalendarClock, ShieldAlert } from 'lucide-react';

const PRECAUTIONS = [
  {
    icon: Thermometer,
    text: 'Store in a cool & dry place away from moisture and direct sunlight.',
  },
  {
    icon: CalendarClock,
    text: 'Use before 3 months from the date of packing for optimal performance.',
  },
  {
    icon: ShieldAlert,
    text: 'Avoid contact with eyes and skin. Wear protective gloves and eyewear during use.',
  },
];

export default function Precautions() {
  return (
    <section className="precautions" id="precautions">
      <div className="precautions-inner">
        <div className="reveal">
          <div className="section-label">Safety Information</div>
          <h2 className="display-heading">
            Handle<br />With Care.
          </h2>
          <div className="gold-line" />
        </div>

        <div className="prec-list" style={{ marginTop: 48 }}>
          {PRECAUTIONS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className={`prec-item reveal reveal-delay-${i + 1}`}
              >
                <div className="prec-icon">
                  <Icon size={18} />
                </div>
                <div className="prec-text">{p.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
