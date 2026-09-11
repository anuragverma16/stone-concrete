import { useState } from 'react';
import { HardHat, Phone, MessageCircle, MapPin, Truck, BadgeCheck, ChevronDown } from 'lucide-react';

const PHONE_NUMBER = '+918954730063';
const WHATSAPP_NUMBER = '918954730063';

const DELIVERY_AGENT = { name: 'Delivery Agent', role: 'Delivery & Dispatch', phone: PHONE_NUMBER };
const MAP_ADDRESS = 'Lehra Road, Ravidas Market, Hathras';
const MAP_DIRECTIONS_URL = 'https://maps.app.goo.gl/hEc9MoCn2vpSykPX6';
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAP_ADDRESS)}&output=embed`;

const HIGHLIGHTS = [
  { icon: HardHat, text: 'Premium quality assured' },
  { icon: Phone, text: 'Fast response time' },
  { icon: Truck, text: 'Bulk order support' },
  { icon: BadgeCheck, text: 'Trusted by contractors' },
];

const FAQS = [
  {
    q: 'How much does one bag cover?',
    a: 'Each 50 KG bag yields approximately 0.028 m³ of mixed concrete — see the Specifications page for full packaging details.',
  },
  {
    q: 'How long can I use the mix after preparing it?',
    a: 'Use the mixed concrete within 60 minutes of preparation. Do not re-temper with additional water after this window.',
  },
  {
    q: 'What is the shelf life of the product?',
    a: '3 months from the date of packing when stored in a cool, dry place, off the ground and away from moisture.',
  },
  {
    q: 'Do you support bulk or contractor orders?',
    a: 'Yes — message us on WhatsApp or call directly with your project requirements and we\'ll get back with the right solution.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <ChevronDown size={18} className="faq-chevron" />
      </button>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
}

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-text reveal">
          <div className="section-label">Get in Touch</div>
          <h2 className="display-heading">
            Ready to Build<br />Stronger?
          </h2>
          <div className="gold-line" />
          <p style={{ marginTop: 24 }}>
            Reach out directly and our team will get back to you with the right
            Stone Concrete solution for your construction needs.
          </p>
          <div className="contact-highlights">
            {HIGHLIGHTS.map(h => {
              const Icon = h.icon;
              return (
                <div className="ch-item" key={h.text}>
                  <Icon size={16} /> {h.text}
                </div>
              );
            })}
          </div>
        </div>

        <div className="reveal reveal-delay-2 contact-actions">
          <a
            className="btn btn-primary"
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
          <a
            className="btn btn-outline"
            href={`tel:${PHONE_NUMBER}`}
          >
            <Phone size={18} /> Call {PHONE_NUMBER}
          </a>

          <div className="contact-actions-divider">
            <span>Connect With an Agent</span>
          </div>

          <div className="agent-card agent-card-animated agent-card-highlight" key={DELIVERY_AGENT.phone}>
            <div className="agent-card-badge">Priority Support</div>
            <div className="agent-avatar-wrap">
              <span className="agent-avatar-ping" />
              <div className="agent-avatar">
                <Truck size={20} />
              </div>
            </div>
            <div className="agent-name">{DELIVERY_AGENT.name}</div>
            <div className="agent-role">{DELIVERY_AGENT.role}</div>
            <div className="agent-status">
              <span className="agent-status-dot" /> Available Now
            </div>
            <div className="agent-actions">
              <a
                className="agent-btn agent-btn-whatsapp"
                href={`https://wa.me/${DELIVERY_AGENT.phone.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat with ${DELIVERY_AGENT.name} on WhatsApp`}
              >
                <MessageCircle size={16} />
              </a>
              <a
                className="agent-btn agent-btn-call"
                href={`tel:${DELIVERY_AGENT.phone}`}
                aria-label={`Call ${DELIVERY_AGENT.name}`}
              >
                <Phone size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-map reveal">
        <div className="contact-map-frame">
          <iframe
            title="Stone Concrete Location"
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <a
          className="contact-map-link"
          href={MAP_DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin size={16} /> {MAP_ADDRESS} · Get Directions
        </a>
      </div>

      <div className="contact-faq reveal">
        <div className="section-label">Frequently Asked</div>
        <h3 className="faq-heading">Common Questions</h3>
        <div className="faq-list">
          {FAQS.map(f => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
