import heroPhoto from '../assets/photos/photo-1.jpg'
import { gsap } from '../lib/gsap'
import { useGsap, prefersReducedMotion } from '../hooks/useGsap'

const LINE_ONE = 'Satu Angkatan,'
const LINE_TWO = 'Satu Cerita.'

function TitleWords({ text }) {
  return text.split(' ').map((word, i) => (
    <span key={i} className="title-word">
      {word}
    </span>
  ))
}

function Hero() {
  const scope = useGsap((scopeEl) => {
    if (prefersReducedMotion()) return

    // Staggered word rise for the headline.
    gsap.fromTo(
      scopeEl.querySelectorAll('.title-word'),
      { y: 42, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.07,
        delay: 0.25,
      },
    )

    // Everything else (eyebrow, copy, CTA, facts, photo) fades in sequence.
    gsap.fromTo(
      scopeEl.querySelectorAll('[data-anim]'),
      { y: 36, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.95,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.2,
      },
    )

    // Subtle scroll parallax: hero image + decorative blobs drift slower
    // than the page. Pure transform tweens, scrubbed, context-scoped.
    // Each target is guarded so a missing node can never crash the page.
    const frameImg = scopeEl.querySelector('.hero-photo-frame img')
    const blob1 = scopeEl.querySelector('.hero-blob-1')
    const blob2 = scopeEl.querySelector('.hero-blob-2')

    if (frameImg) {
      gsap.set(frameImg, { scale: 1.14 })
      gsap.fromTo(
        frameImg,
        { yPercent: -9 },
        {
          yPercent: 9,
          ease: 'none',
          scrollTrigger: {
            trigger: scopeEl,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        },
      )
    }
    if (blob1) {
      gsap.fromTo(
        blob1,
        { yPercent: 14 },
        {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: scopeEl,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        },
      )
    }
    if (blob2) {
      gsap.fromTo(
        blob2,
        { yPercent: -10 },
        {
          yPercent: 14,
          ease: 'none',
          scrollTrigger: {
            trigger: scopeEl,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        },
      )
    }
  }, [])

  return (
    <section ref={scope} className="hero" id="beranda">
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow" data-anim>
            Universitas Hasanuddin — Makassar
          </p>
          <h1 className="hero-title">
            <span className="line">
              <TitleWords text={LINE_ONE} />
            </span>
            <span className="line accent">
              <TitleWords text={LINE_TWO} />
            </span>
          </h1>
          <p className="hero-sub" data-anim>
            Kami adalah <strong>Angkatan 26</strong> — darah muda Universitas
            Hasanuddin yang bersatu untuk belajar, berkarya, dan mengabdi
            untuk Indonesia.
          </p>
          <div className="hero-cta" data-anim>
            <a href="#galeri" className="btn btn-primary">
              Jelajahi Galeri
            </a>
            <a href="#tentang" className="btn btn-outline">
              Tentang Angkatan
            </a>
          </div>
          <ul className="hero-facts" data-anim>
            <li>Semangat</li>
            <li>Solidaritas</li>
            <li>Karya</li>
          </ul>
        </div>

        <div className="hero-photo-wrap" data-anim>
          <div className="hero-photo-back" aria-hidden="true" />
          <div className="hero-photo-frame">
            <img
              src={heroPhoto}
              alt="Foto keluarga besar Angkatan 26 Universitas Hasanuddin"
            />
          </div>
          <div className="hero-photo-badge">
            Angkatan
            <strong>26</strong>
          </div>
        </div>
      </div>

      <a href="#tentang" className="hero-scroll" aria-label="Gulir ke bawah">
        Scroll
      </a>
    </section>
  )
}

export default Hero