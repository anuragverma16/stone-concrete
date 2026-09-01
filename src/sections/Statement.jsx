import { useEffect, useRef } from 'react'

export default function Statement() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const elements = section.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="statement-section" ref={sectionRef}>
      <div className="container">
        <h2 className="statement-heading reveal">
          The Foundation<br />
          of <span className="gold-word">Better</span><br />
          Building.
        </h2>

        <div
          className="reveal delay-2"
          style={{ width: '60px', height: '1px', background: 'var(--gold)', margin: '0 auto 32px', opacity: 0.6 }}
          aria-hidden="true"
        />

        <p className="statement-sub reveal delay-3">
          <strong>Stone Concrete</strong> — Build Strong. Build Better.
        </p>
      </div>
    </section>
  )
}
