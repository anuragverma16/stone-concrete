import { Phone, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '+918954730063';
const WHATSAPP_NUMBER = '918954730063';

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <a
        className="fc-btn fc-whatsapp"
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
      <a
        className="fc-btn fc-call"
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call us"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
