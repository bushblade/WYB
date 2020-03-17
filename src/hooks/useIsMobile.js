import { useState, useEffect } from 'react'

const useIsMobile = () => {
  const isMobile = () => {
    if (typeof window !== 'undefined') return window.innerWidth < 1000
  }
  const [mobile, setMobile] = useState(isMobile())

  useEffect(() => {
    console.log(mobile)
    const checkWindowSize = () => setMobile(isMobile())
    if (window) {
      checkWindowSize()
      window.addEventListener('resize', checkWindowSize)
      return () => window.removeEventListener('resize', checkWindowSize)
    }
  }, [mobile])
  return mobile
}

export default useIsMobile
