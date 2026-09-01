import { useState, useEffect } from 'react';
import stoneLogo from '../assets/stone-logo.png';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Applications', href: '#applications' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specifications', href: '#specifications' },
  { label: 'Mixing', href: '#mixing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <img src={stoneLogo} alt="Stone Concrete Logo" />
        </div>
        <div className="nav-links">
          {LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          role="button"
          aria-label="Toggle menu"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <a
          className="btn btn-primary"
          href="#contact"
          onClick={e => { e.preventDefault(); handleNavClick('#contact'); }}
          style={{ marginTop: 12 }}
        >
          Enquire Now
        </a>
      </div>
    </>
  );
}
