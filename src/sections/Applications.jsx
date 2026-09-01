import { Triangle, Circle, Square, Minus, Grid, Layout } from 'lucide-react';

const APPS = [
  {
    num: '01',
    icon: Triangle,
    title: 'Foundations',
    desc: 'High load-bearing capacity for solid structural bases.',
  },
  {
    num: '02',
    icon: Circle,
    title: 'Columns',
    desc: 'Superior compressive strength for vertical load-bearing elements.',
  },
  {
    num: '03',
    icon: Minus,
    title: 'Beams',
    desc: 'Excellent flexural strength for horizontal spanning members.',
  },
  {
    num: '04',
    icon: Square,
    title: 'Slabs',
    desc: 'Even consistency and shrinkage control for flat structural decks.',
  },
  {
    num: '05',
    icon: Grid,
    title: 'Walls',
    desc: 'Durable and reliable for internal and external vertical structures.',
  },
  {
    num: '06',
    icon: Layout,
    title: 'Floors',
    desc: 'Superior finish and surface hardness for all flooring applications.',
  },
];

export default function Applications() {
  return (
    <section className="applications" id="applications">
      <div className="applications-header reveal">
        <div className="section-label">Ideal Applications</div>
        <h2 className="display-heading">
          Built for Every Stage<br />of Construction
        </h2>
        <div className="gold-line" />
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="app-grid reveal">
          {APPS.map(app => {
            const Icon = app.icon;
            return (
              <div className="app-card" key={app.title}>
                <div className="ac-num">{app.num}</div>
                <div className="ac-icon">
                  <Icon size={32} />
                </div>
                <div className="ac-title">{app.title}</div>
                <div className="ac-desc">{app.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
