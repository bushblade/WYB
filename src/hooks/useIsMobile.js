import { useState, useEffect } from 'react'

const isMobile = (width) => {
  if (typeof window !== 'undefined') return window.innerWidth < width
}

const useIsMobile = (width = 1400) => {
  const [mobile, setMobile] = useState(isMobile(width))

  useEffect(() => {
    const checkWindowSize = () => setMobile(isMobile(width))
    if (window) {
      checkWindowSize()
      window.addEventListener('resize', checkWindowSize)
      return () => window.removeEventListener('resize', checkWindowSize)
    }
  }, [])
  return mobile
}

export default useIsMobile
