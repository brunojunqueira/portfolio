'use client'

import { useCallback, useRef } from 'react'

export function useSpeech() {
  const warmedUp = useRef(false)

  const warmUp = useCallback(() => {
    if (warmedUp.current || typeof window === 'undefined') return
    if (!('speechSynthesis' in window)) return
    const utterance = new SpeechSynthesisUtterance('')
    window.speechSynthesis.speak(utterance)
    warmedUp.current = true
  }, [])

  const speak = useCallback(
    (text: string) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
      warmUp()
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.85
      utterance.pitch = 1
      window.speechSynthesis.speak(utterance)
    },
    [warmUp],
  )

  return { speak, warmUp }
}
