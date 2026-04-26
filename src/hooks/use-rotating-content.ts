'use client'

import { useState, useEffect } from 'react'

export function useRotatingContent<T>(items: T[], intervalMs = 8000): { current: T; index: number } {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (items.length <= 1) return
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % items.length)
    }, intervalMs)
    return () => clearInterval(timer)
  }, [items.length, intervalMs])

  return { current: items[index], index }
}
