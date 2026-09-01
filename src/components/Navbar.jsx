import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import stoneLogo from '../assets/stone-logo.png';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Features', to: '/features' },
  { label: 'Applications', to: '/applications' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Specifications', to: '/specifications' },
  { label: 'Mixing', to: '/mixing' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <img src={stoneLogo} alt="Stone Concrete Logo" />
        </div>
        <div className="nav-links">
          {LINKS.map(link => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {link.label}
            </NavLink>
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
          <NavLink
            key={link.label}
            to={link.to}
            end={link.to === '/'}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink
          className="btn btn-primary"
          to="/contact"
          onClick={() => setMenuOpen(false)}
          style={{ marginTop: 12 }}
        >
          Enquire Now
        </NavLink>
      </div>
    </>
  );
}
