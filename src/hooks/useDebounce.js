/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef } from 'react'

export const useDebounce = (fn, delay, deps, type, CallFirstTime = false) => {
  const callback = useCallback(fn, [deps])
  const firstTimeRef = useRef(CallFirstTime)
  useEffect(() => {
    if (firstTimeRef.current === true) {
      firstTimeRef.current = false
      return
    }
    const handler = setTimeout(() => {
      callback()
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [callback])
}
