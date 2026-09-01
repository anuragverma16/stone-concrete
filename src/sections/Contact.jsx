import { HardHat, Phone, MessageCircle, MapPin } from 'lucide-react';

const PHONE_NUMBER = '+918954730063';
const WHATSAPP_NUMBER = '918954730063';
const MAP_ADDRESS = 'Lehra Road, Ravidas Market, Hathras';
const MAP_DIRECTIONS_URL = 'https://maps.app.goo.gl/hEc9MoCn2vpSykPX6';
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAP_ADDRESS)}&output=embed`;

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
            <div className="ch-item"><HardHat size={16} /> Premium quality assured</div>
            <div className="ch-item"><Phone size={16} /> Fast response time</div>
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
    </section>
  );
}
