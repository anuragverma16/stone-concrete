import { Link } from 'react-router-dom';
import { Info, Award, LayoutGrid, Image, FileText, Beaker, Phone, ArrowRight } from 'lucide-react';

const TEASERS = [
  { icon: Info, title: 'About the Product', desc: 'What makes Stone Concrete different.', to: '/about' },
  { icon: Award, title: 'Features', desc: 'Engineering behind the performance.', to: '/features' },
  { icon: LayoutGrid, title: 'Applications', desc: 'Where our mix performs best.', to: '/applications' },
  { icon: Image, title: 'Gallery', desc: 'Real construction use cases.', to: '/gallery' },
  { icon: FileText, title: 'Specifications', desc: 'Technical properties & packaging.', to: '/specifications' },
  { icon: Beaker, title: 'Mixing Instructions', desc: 'Step-by-step mixing guide.', to: '/mixing' },
  { icon: Phone, title: 'Contact Us', desc: 'Get in touch with our team.', to: '/contact' },
];

export default function ExploreTeaser() {
  return (
    <section className="explore-teaser">
      <div className="explore-teaser-inner">
        <div className="section-label" style={{ justifyContent: 'center' }}>Discover More</div>
        <h2 className="display-heading" style={{ textAlign: 'center' }}>
          Everything You Need to Know
        </h2>
        <div className="gold-line" style={{ margin: '20px auto 0' }} />

        <div className="et-grid">
          {TEASERS.map(t => {
            const Icon = t.icon;
            return (
              <Link to={t.to} className="et-card" key={t.title}>
                <div className="et-icon"><Icon size={24} /></div>
                <div className="et-title">{t.title}</div>
                <div className="et-desc">{t.desc}</div>
                <span className="et-arrow"><ArrowRight size={16} /></span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
