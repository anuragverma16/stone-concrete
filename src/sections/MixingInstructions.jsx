import { Droplets, Package, RefreshCw, Clock, Check, X } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    icon: Droplets,
    title: 'Add Water',
    text: 'Add 4.0–4.5 Ltr of clean water into a suitable mixing container.',
  },
  {
    num: '02',
    icon: Package,
    title: 'Add Stone Concrete',
    text: 'Gradually add STONE CONCRETE into the water while continuously mixing.',
  },
  {
    num: '03',
    icon: RefreshCw,
    title: 'Mix Thoroughly',
    text: 'Mix properly until a uniform, lump-free mix is obtained throughout.',
  },
  {
    num: '04',
    icon: Clock,
    title: 'Apply Within 60 Min',
    text: 'Use the mix within 60 minutes of preparation for best results.',
  },
];

const TOOLS = [
  'Clean Mixing Container / Drum',
  'Measuring Jug',
  'Mechanical Mixer (Recommended)',
  'Trowel & Float',
  'Safety Gloves & Eyewear',
];

const DOS = [
  'Measure water accurately before adding the mix.',
  'Mix mechanically wherever possible for uniform consistency.',
  'Apply and finish within the 60-minute workable window.',
  'Cure the finished surface as per standard practice.',
];

const DONTS = [
  'Do not add extra water once mixing has started.',
  'Do not use the mix after the workable time has elapsed.',
  'Do not prepare more material than can be applied in time.',
  'Do not apply over frozen, oily, or contaminated surfaces.',
];

export default function MixingInstructions() {
  return (
    <section className="mixing" id="mixing">
      <div className="mixing-inner">
        <div className="reveal">
          <div className="section-label">Mixing Instructions</div>
          <h2 className="display-heading">
            Simple Mixing.<br />Consistent Results.
          </h2>
          <div className="gold-line" />
        </div>

        <div className="mixing-steps" style={{ marginTop: 48 }}>
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`mix-step reveal reveal-delay-${i + 1}`}
              >
                <div className="ms-num">{step.num}</div>
                <div className="ms-icon">
                  <Icon size={20} />
                </div>
                <div className="ms-title">Step {step.num} — {step.title}</div>
                <div className="ms-text">{step.text}</div>
              </div>
            );
          })}
        </div>

        <div className="mixing-note reveal reveal-delay-3">
          <Clock size={18} />
          Important: Always use within 60 minutes of mixing. Do not re-temper with additional water.
        </div>

        <div className="mixing-tools reveal">
          <h3>Tools You'll Need</h3>
          <ul className="spec-chip-list">
            {TOOLS.map(tool => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>

        <div className="mixing-dos-donts">
          <div className="dd-card dd-do reveal reveal-delay-1">
            <h3><Check size={18} /> Do</h3>
            <ul>
              {DOS.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="dd-card dd-dont reveal reveal-delay-2">
            <h3><X size={18} /> Don't</h3>
            <ul>
              {DONTS.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
