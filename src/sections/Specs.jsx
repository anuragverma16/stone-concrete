import { useEffect, useRef } from 'react'

const SPECS = [
  { property: 'Compressive Strength (28 Days)', value: '≥ 30 N/mm²' },
  { property: 'Flexural Strength (28 Days)', value: '≥ 4.0 N/mm²' },
  { property: 'Initial Setting Time', value: '≥ 30 Min' },
  { property: 'Final Setting Time', value: '≤ 600 Min' },
  { property: 'Water Demand', value: '16% ± 2%' },
  { property: 'Net Weight', value: '50 KG' },
]

export default function Specs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const elements = section.querySelectorAll('.reveal, .specs-row-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="specs-section" id="specs" ref={sectionRef}>
      <div className="container">
        <div className="specs-header">
          <span className="eyebrow reveal">Technical Data Sheet</span>
          <div className="gold-line reveal delay-1" aria-hidden="true" />
          <h2 className="specs-heading reveal delay-2">
            Performance,<br />Defined.
          </h2>
        </div>

        <div className="reveal delay-3">
          <div style={{ overflowX: 'auto' }}>
            <table className="specs-table" aria-label="Stone Concrete technical specifications">
              <thead>
                <tr>
                  <th scope="col">Property</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                {SPECS.map((spec, i) => (
                  <tr
                    key={spec.property}
                    className="specs-row-reveal"
                    style={{
                      opacity: 0,
                      transform: 'translateY(16px)',
                      transition: `opacity 0.5s ease ${0.3 + i * 0.08}s, transform 0.5s ease ${0.3 + i * 0.08}s`,
                    }}
                  >
                    <td>{spec.property}</td>
                    <td>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="reveal delay-4" style={{ marginTop: '40px', display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <div style={{
            padding: '20px 28px',
            border: '1px solid rgba(201, 168, 76, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '11px', letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase' }}>
              Suitable For
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, color: 'var(--warm-white)', letterSpacing: '1px' }}>
              Internal & External Use
            </span>
          </div>

          <div style={{
            padding: '20px 28px',
            border: '1px solid rgba(201, 168, 76, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '11px', letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase' }}>
              Certification
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, color: 'var(--warm-white)', letterSpacing: '1px' }}>
              ISO 9001:2015 Certified
            </span>
          </div>

          <div style={{
            padding: '20px 28px',
            border: '1px solid rgba(201, 168, 76, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '11px', letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase' }}>
              Use Before
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, color: 'var(--warm-white)', letterSpacing: '1px' }}>
              3 Months from Packing
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
