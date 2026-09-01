import { useEffect, useRef } from 'react'

export function useReveal(options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -60px 0px' } = options
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Check if this element itself has reveal class
    const elements = []

    if (container.classList.contains('reveal') ||
        container.classList.contains('reveal-left') ||
        container.classList.contains('reveal-right')) {
      elements.push(container)
    }

    // Also get children with reveal classes
    const children = container.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    children.forEach(el => elements.push(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return containerRef
}

export function RevealSection({ children, className = '', ...props }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
}
