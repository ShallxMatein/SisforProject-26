import photo1 from '../assets/photos/photo-1.jpg'
import photo2 from '../assets/photos/photo-2.jpg'
import photo3 from '../assets/photos/photo-3.jpg'
import { gsap } from '../lib/gsap'
import { useGsap, prefersReducedMotion } from '../hooks/useGsap'

const PHOTOS = [
  {
    src: photo1,
    alt: 'Keluarga besar Angkatan 26 Universitas Hasanuddin',
    title: 'Keluarga Besar',
    caption: 'Kebersamaan yang menyatukan semuanya.',
  },
  {
    src: photo2,
    alt: 'Momen kebersamaan mahasiswa Angkatan 26',
    title: 'Momen Kebersamaan',
    caption: 'Tawa, canda, dan cerita tanpa henti.',
  },
  {
    src: photo3,
    alt: 'Kegiatan mahasiswa Angkatan 26 Universitas Hasanuddin',
    title: 'Semangat Karya',
    caption: 'Melangkah bersama menuju mimpi.',
  },
]

function Gallery() {
  const scope = useGsap((scopeEl) => {
    if (prefersReducedMotion()) return
    gsap.fromTo(
      scopeEl.querySelectorAll('[data-reveal]'),
      { y: 44, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.14,
        scrollTrigger: { trigger: scopeEl, start: 'top 75%', once: true },
      },
    )
  }, [])

  return (
    <section ref={scope} className="section gallery" id="galeri">
      <div className="container">
        <header className="section-head">
          <p className="section-eyebrow" data-reveal>
            Galeri
          </p>
          <h2 className="section-title" data-reveal>
            Potret <em>Perjalanan Kita</em>
          </h2>
          <p className="section-sub" data-reveal>
            Setiap foto adalah kisah. Ini beberapa momen terbaik dari
            perjalanan Angkatan 26 sejauh ini.
          </p>
        </header>

        <div className="gallery-grid">
          {PHOTOS.map((p) => (
            <figure className="gallery-card" key={p.title} data-reveal>
              <img src={p.src} alt={p.alt} loading="lazy" />
              <figcaption className="gallery-caption">
                {p.title}
                <span>{p.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery