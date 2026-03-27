'use client'

import { useRef } from 'react'
import { useScroll, useTransform, type MotionValue } from 'framer-motion'

export function useSectionScroll() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  return { ref, scrollYProgress }
}

export function useFadeOut(
  scrollYProgress: MotionValue<number>,
  fadeEnd: number = 0.5,
): MotionValue<number> {
  return useTransform(scrollYProgress, [0, fadeEnd], [1, 0])
}

export function useSlideUp(
  scrollYProgress: MotionValue<number>,
  range: [string, string] = ['0%', '-20%'],
): MotionValue<string> {
  return useTransform(scrollYProgress, [0, 1], range)
}
