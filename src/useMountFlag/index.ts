import { useState, useEffect } from 'react'

function useMountFlag() {
  const [mounted, setMounted] = useState<Boolean>(false)
  useEffect(() => {
    setMounted(true)
    return () => {
      setMounted(false)
    }
  }, [])

  return mounted
}

export default useMountFlag
