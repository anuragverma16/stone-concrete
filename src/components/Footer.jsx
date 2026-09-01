import { Link } from 'react-router-dom';
import stoneLogo from '../assets/stone-logo.png';

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Applications', to: '/applications' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Specifications', to: '/specifications' },
  { label: 'Mixing', to: '/mixing' },
  { label: 'Contact', to: '/contact' },
];

const PRODUCT = [
  { label: 'High Strength Concrete', to: '/about' },
  { label: 'Technical Specs', to: '/specifications' },
  { label: 'Mixing Instructions', to: '/mixing' },
  { label: 'Safety Data', to: '/specifications' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
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
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              {PRODUCT.map(link => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
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
