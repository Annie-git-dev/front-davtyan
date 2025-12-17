import { useEffect, useRef, useState } from 'react'

export default function useHideOnScroll(offset = 200) {
  const lastScroll = useRef(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY

      if (current <= offset) {
        setHidden(false)
        lastScroll.current = current
        return
      }

      if (current > lastScroll.current) {
        setHidden(true)
      } 
      else {
        setHidden(false)
      }

      lastScroll.current = current
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return hidden
}
