import { useEffect, useRef } from 'react'

const CARDS = [
  {
    num: '01',
    title: 'High Strength',
    desc: 'Achieves compressive strength of ≥ 30 N/mm² at 28 days — engineered to carry the weight of modern infrastructure.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Durability',
    desc: 'Long-lasting performance designed to withstand harsh conditions, climate variation, and the demands of heavy-use construction.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Easy to Mix',
    desc: 'Just add water. Consistent quality and workability in every bag — designed for efficiency on site without specialist equipment.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.56 2.9A7 7 0 0 1 19 9v4" />
        <path d="M19 13H5a4 4 0 0 0-2 7.5" />
        <path d="M12 20v2" /><path d="M9 17H5" />
        <path d="M3 17h2" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Superior Finish',
    desc: 'Delivers a smooth, consistent surface every time — suitable for both internal and external applications with a premium aesthetic result.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
]

export default function Why() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const elements = section.querySelectorAll('.reveal, .reveal-left, .why-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="why-section" id="why" ref={sectionRef}>
      <div className="container">
        <div className="why-header">
          <span className="eyebrow reveal">Why Stone Concrete</span>
          <div className="gold-line" style={{ margin: '0 auto 24px' }} aria-hidden="true" />
          <h2 className="why-heading reveal delay-1">
            Strength You<br />Can Build On.
          </h2>
        </div>

        <div className="why-cards">
          {CARDS.map((card, i) => (
            <article
              key={card.num}
              className="why-card reveal"
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <span className="card-number" aria-hidden="true">{card.num}</span>
              <div className="card-icon" aria-hidden="true">
                {card.icon}
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
