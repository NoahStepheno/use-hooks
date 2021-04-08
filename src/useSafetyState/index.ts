import { useCallback, useState } from 'react'
import useMountFlag from '../useMountFlag'

function useSafetyState(params) {
  const mounted = useMountFlag()
  console.log(123)
  const [state, _setState] = useState(params)
  const setState = useCallback(
    (params) => {
      if (mounted) {
        _setState(params)
      }
    },
    [mounted]
  )
  return [state, setState]
}

export default useSafetyState
