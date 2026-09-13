import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registered once at module level — scroll-triggered tweens are always
// scoped inside gsap.context() (see useGsap hook) and killed via .revert().
gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }