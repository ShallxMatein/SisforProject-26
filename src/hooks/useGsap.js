import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'

/**
 * Memory-leak-safe GSAP hook.
 *
 * Usage: const scope = useGsap((el) => { ... }, []) and attach it to the
 * root node with ref={scope}. Every tween, ScrollTrigger, and event listener
 * created inside the callback is scoped to a single gsap.context() that is
 * fully reverted (kills tweens, scrollTriggers, listeners) on unmount — so
 * nothing leaks, even under React StrictMode's double-mount.
 */
export function useGsap(setup, deps = []) {
  const scope = useRef(null)

  useLayoutEffect(() => {
    const el = scope.current

    // Guard: never run GSAP against a node that isn't mounted yet.
    if (!el) return undefined

    const ctx = gsap.context(() => {
      try {
        if (typeof setup === 'function') setup(el)
      } catch (err) {
        // Animation failure must never blank the page — log and keep content visible.
        if (typeof console !== 'undefined' && console.warn) {
          console.warn('[useGsap] animation setup skipped:', err)
        }
      }
    }, scope)

    // Recompute trigger start/end positions once the DOM settled.
    let raf = 0
    try {
      raf = requestAnimationFrame(() => {
        try {
          ScrollTrigger.refresh()
        } catch {
          /* ignore — triggers still work without manual refresh */
        }
      })
    } catch {
      raf = 0
    }

    return () => {
      if (raf) cancelAnimationFrame(raf)
      try {
        ctx.revert()
      } catch {
        /* already cleaned up */
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return scope
}

export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}