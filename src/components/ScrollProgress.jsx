import { gsap } from '../lib/gsap'
import { useGsap, prefersReducedMotion } from '../hooks/useGsap'

function ScrollProgress() {
  const scope = useGsap((el) => {
    if (prefersReducedMotion()) return

    // One scrubbed tween drives the whole bar — reverted on unmount.
    // Page-level trigger (no element dependency, so it can never miss).
    gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          start: 0,
          end: 'max',
          scrub: 0.3,
        },
      },
    )
  }, [])

  return <div ref={scope} className="scroll-progress" aria-hidden="true" />
}

export default ScrollProgress