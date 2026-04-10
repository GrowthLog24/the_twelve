'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('on')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    )
    document.querySelectorAll('.rv,.rv-l,.rv-r,.rv-p,.rv-f').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return null
}
