import { gsap } from '../lib/gsap'
import { useGsap, prefersReducedMotion } from '../hooks/useGsap'

const STATS = [
  { value: 1500, suffix: '+', label: 'Mahasiswa Baru' },
  { value: 14, suffix: '', label: 'Fakultas' },
  { value: 100, suffix: '+', label: 'Program Studi' },
  { value: 1, suffix: '', label: 'Keluarga Besar' },
]

function About() {
  const scope = useGsap((scopeEl) => {
    const finishCounters = () => {
      scopeEl.querySelectorAll('[data-counter]').forEach((el) => {
        el.textContent = Number(el.dataset.count).toLocaleString('id-ID')
      })
    }

    if (prefersReducedMotion()) {
      finishCounters()
      return
    }

    // Generic staggered reveal (once, then the trigger self-destructs).
    gsap.fromTo(
      scopeEl.querySelectorAll('[data-reveal]'),
      { y: 36, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: scopeEl, start: 'top 78%', once: true },
      },
    )

    // Number counters — each tween is scoped + reverted on unmount.
    scopeEl.querySelectorAll('[data-counter]').forEach((el) => {
      const target = Number(el.dataset.count)
      const state = { v: 0 }
      gsap.to(state, {
        v: target,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        onUpdate() {
          el.textContent = Math.round(state.v).toLocaleString('id-ID')
        },
      })
    })
  }, [])

  return (
    <section ref={scope} className="section about" id="tentang">
      <div className="container about-grid">
        <div className="about-text">
          <p className="section-eyebrow" data-reveal>
            Tentang Kami
          </p>
          <h2 className="section-title" data-reveal>
            Satu Keluarga Besar,
            <br />
            <em>Dari Seluruh Penjuru Indonesia</em>
          </h2>
          <p data-reveal>
            <strong>Angkatan 26</strong> adalah para mahasiswa baru Universitas
            Hasanuddin yang melangkah bersama sejak hari pertama. Berasal dari
            berbagai suku dan latar belakang, kami bersatu dalam semangat{' '}
            <strong>merah putih</strong> untuk menempuh perjalanan akademik dan
            organisasi yang membanggakan.
          </p>
          <p data-reveal>
            Dari Pusat Kegiatan Mahasiswa hingga fakultas-fakultas di seluruh
            kampus, kami berkomitmen menjunjung nilai{' '}
            <strong>Inovasi dan Tradisi</strong> kampus merah kuning Makassar.
          </p>
          <blockquote className="quote" data-reveal>
            “Satukan langkah, torehkan karya. Satu angkatan, satu perjuangan.”
          </blockquote>
        </div>

        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat-card" key={s.label} data-reveal>
              <p className="stat-value">
                <span data-counter data-count={s.value}>0</span>
                {s.suffix && <span className="suffix">{s.suffix}</span>}
              </p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About