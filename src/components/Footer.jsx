import { gsap } from '../lib/gsap'
import { useGsap, prefersReducedMotion } from '../hooks/useGsap'

const QUICK_LINKS = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#tentang', label: 'Tentang' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#agenda', label: 'Agenda' },
]

const SOCIALS = ['Instagram', 'WhatsApp', 'X / Twitter', 'Line']

function Footer() {
  const scope = useGsap((scopeEl) => {
    if (prefersReducedMotion()) return
    gsap.fromTo(
      scopeEl.querySelectorAll('[data-reveal]'),
      { y: 28, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: scopeEl, start: 'top 85%', once: true },
      },
    )
  }, [])

  return (
    <footer ref={scope} className="footer" id="kontak">
      <div className="container footer-grid">
        <div data-reveal>
          <p className="footer-brand">
            UNHAS<span className="dot">•</span>26
          </p>
          <p className="footer-tagline">
            Satu angkatan, satu cerita. Ikuti keseruan dan perjalanan
            Angkatan 26 Universitas Hasanuddin di sini.
          </p>
        </div>

        <nav data-reveal>
          <h4>Tautan</h4>
          <ul className="footer-links">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div data-reveal>
          <h4>Media Sosial</h4>
          <ul className="footer-links">
            {SOCIALS.map((s) => (
              <li key={s}>
                <a href="#beranda" title="Segera hadir">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()}{' '}
          <strong>Sistem Informasi-Universitas Hasanuddin</strong>. Dibuat oleh Mahasiswa aktif Sistem Informasi Angkatan 26.
        </div>
      </div>
    </footer>
  )
}

export default Footer