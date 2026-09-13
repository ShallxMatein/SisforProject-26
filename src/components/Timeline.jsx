import { gsap } from '../lib/gsap'
import { useGsap, prefersReducedMotion } from '../hooks/useGsap'

const EVENTS = [
  {
    when: 'September 2026',
    title: 'PKKMB & MOPEM 2026',
    desc: 'Pengenalan kehidupan kampus bagi seluruh mahasiswa baru Angkatan 26 — awal dari segalanya.',
  },
  {
    when: 'November 2026',
    title: 'Dies Natalis Angkatan',
    desc: 'Perayaan ulang tahun angkatan dan penguatan silaturahmi satu keluarga besar.',
  },
  {
    when: 'Maret 2027',
    title: 'Bakti Sosial',
    desc: 'Pengabdian dan aksi sosial bersama untuk masyarakat sekitar kampus.',
  },
  {
    when: 'Agustus 2027',
    title: 'Festival Kreativitas',
    desc: 'Menyalurkan bakat mahasiswa angkatan lewat kompetisi lintas fakultas.',
  },
]

function Timeline() {
  const scope = useGsap((scopeEl) => {
    if (prefersReducedMotion()) return

    // Section heading reveal (once).
    gsap.fromTo(
      scopeEl.querySelectorAll('[data-reveal]'),
      { y: 36, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.85,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: scopeEl, start: 'top 72%', once: true },
      },
    )

    // Draw the vertical line as the user scrolls through the section.
    const line = scopeEl.querySelector('.timeline-line')
    if (line) {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: scopeEl,
            start: 'top 70%',
            end: 'bottom 45%',
            scrub: 0.4,
          },
        },
      )
    }

    // Cards slide in from alternating sides (once each).
    scopeEl.querySelectorAll('.timeline-item').forEach((item) => {
      const fromX = item.classList.contains('right') ? 52 : -52
      gsap.fromTo(
        item,
        { x: fromX, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%', once: true },
        },
      )
    })
  }, [])

  return (
    <section ref={scope} className="section agenda" id="agenda">
      <div className="container">
        <header className="section-head">
          <p className="section-eyebrow" data-reveal>
            Agenda
          </p>
          <h2 className="section-title" data-reveal>
            Kegiatan <em>Sepanjang Perjalanan</em>
          </h2>
          <p className="section-sub" data-reveal>
            Rangkaian agenda besar yang menandai langkah Angkatan 26 dari hari
            pertama kampus hingga kelulusan.
          </p>
        </header>

        <div className="timeline-shell">
          <span className="timeline-line" aria-hidden="true" />
          <ol className="timeline">
            {EVENTS.map((ev, i) => (
              <li
                key={ev.title}
                className={`timeline-item ${i % 2 === 1 ? 'right' : ''}`}
              >
                <span className="timeline-dot" aria-hidden="true" />
                <div className="timeline-card">
                  <p className="timeline-meta">{ev.when}</p>
                  <h3>{ev.title}</h3>
                  <p>{ev.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Timeline