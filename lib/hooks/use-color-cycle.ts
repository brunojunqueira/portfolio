'use client'

import { useState, useEffect } from 'react'

interface ColorPair {
  bg: string
  text: string
  label: string
}

const COLOR_PAIRS: ColorPair[] = [
  { bg: '#ffffff', text: '#000000', label: 'High contrast' },
  { bg: '#1e3a5f', text: '#ffffff', label: 'Navy blue' },
  { bg: '#000000', text: '#ffdd00', label: 'Yellow on black' },
]

export function useColorCycle(intervalMs: number = 2200) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % COLOR_PAIRS.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  return COLOR_PAIRS[index]
}
