import stoneLogo from '../assets/stone-logo.png';

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Applications', href: '#applications' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specifications', href: '#specifications' },
  { label: 'Mixing', href: '#mixing' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={stoneLogo} alt="Stone Concrete" style={{ filter: 'brightness(0) invert(1)' }} />
            <div className="footer-brand-name">Stone Concrete</div>
            <div className="footer-brand-tagline">Build Strong. Build Better.</div>
            <p>
              Premium quality, factory-blended high strength concrete mix engineered
              for lasting performance across all construction applications.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {NAV.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="#about" onClick={e => { e.preventDefault(); scrollTo('#about'); }}>High Strength Concrete</a></li>
              <li><a href="#specifications" onClick={e => { e.preventDefault(); scrollTo('#specifications'); }}>Technical Specs</a></li>
              <li><a href="#mixing" onClick={e => { e.preventDefault(); scrollTo('#mixing'); }}>Mixing Instructions</a></li>
              <li><a href="#precautions" onClick={e => { e.preventDefault(); scrollTo('#precautions'); }}>Safety Data</a></li>
              <li><a href="#contact" onClick={e => { e.preventDefault(); scrollTo('#contact'); }}>Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} <span>Stone Concrete</span>. All rights reserved.</p>
          <p style={{ fontSize: 12, color: 'var(--concrete)' }}>
            High Strength Concrete · 50 KG · For Internal &amp; External Use
          </p>
        </div>
      </div>
    </footer>
  );
}
