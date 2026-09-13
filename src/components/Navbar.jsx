import { useEffect, useState } from 'react'
import { gsap } from '../lib/gsap'
import { useGsap } from '../hooks/useGsap'

const LINKS = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#tentang', label: 'Tentang' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#agenda', label: 'Agenda' },
  { href: '#kontak', label: 'Kontak' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll state (native listener, removed on unmount).
  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY ?? window.pageYOffset ?? 0) > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Single drop-in animation, scoped + reverted by useGsap.
  const scope = useGsap((scopeEl) => {
    const inner = scopeEl.querySelector('.navbar-inner')
    if (!inner) return
    gsap.fromTo(
      inner,
      { y: -26, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out' },
    )
  }, [])

  const close = () => setOpen(false)

  return (
    <header ref={scope} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#beranda" className="brand" onClick={close} aria-label="UNHAS 26 - Beranda">
          <span className="brand-badge">26</span>
          <span className="brand-text">
            UNHAS<span className="brand-dot">•</span>26
          </span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`hamburger ${open ? 'open' : ''}`}
          aria-label="Buka menu navigasi"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar