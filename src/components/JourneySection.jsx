import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, ExternalLink, Award } from 'lucide-react'
import theme from '../theme'

/* ─── Timeline data ────────────────────────────────────────────────── */
const timelineItems = [
  {
    type: 'work',
    icon: Briefcase,
    nodeIdx: 1,
    role: 'Academic Member',
    org: 'ITZONE PLUS Volunteer Team',
    period: '2023 – 2024',
    bullets: [
      'Assisted students with educational resources across multiple technical subjects.',
      'Organised study sessions to support collaborative and self-directed learning.',
    ],
    tags: ['Mentoring', 'Education', 'Volunteering'],
  },
  {
    type: 'education',
    icon: GraduationCap,
    nodeIdx: 2,
    role: 'B.Sc. Computer Information Systems',
    org: 'Hashemite University',
    period: '2022 – 2026',
    bullets: [
      'Specialising in software engineering, data science, and AI.',
      'GPA: 3.71 / 4.00',
    ],
    tags: ['GPA 3.71', 'CIS', 'Hashemite University'],
  },
]

/* ─── Certifications data ──────────────────────────────────────────── */
const certs = [
  {
    title: 'Artificial Intelligence Course',
    issuer: 'Samsung Innovation Campus',
    year: '2025',
    logo: 'https://csr.samsung.com/favicon.ico',
    link: '#',
  },
  {
    title: 'React.js A-Z With Laravel',
    issuer: 'Udemy',
    year: '2025',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png',
    link: '#',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera',
    year: '2025',
    logo: 'https://www.deeplearning.ai/favicon.ico',
    link: '#',
  },
  {
    title: 'Data Science Track',
    issuer: 'SHAI for AI',
    year: '2024',
    logo: 'https://shaiforai.com/wp-content/uploads/2022/10/shai-logo.png',
    link: '#',
  },
]

/* ─── Logo with Award fallback ─────────────────────────────────────── */
function CertLogo({ logo, issuer }) {
  if (!logo) {
    return (
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br ${theme.cardMesh} border ${theme.cardBorder} p-2`}>
        <Award size={16} className={theme.pillIcon} />
      </div>
    )
  }
  return (
    <div className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border ${theme.cardBorder} bg-white p-1.5`}>
      <img
        src={logo}
        alt={issuer}
        className="h-full w-full object-contain"
        onError={(e) => {
          const parent = e.currentTarget.parentElement
          parent.className = `flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${theme.labelBg} ${theme.labelBorder} border p-2`
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
          svg.setAttribute('width', '16'); svg.setAttribute('height', '16')
          svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('fill', 'none')
          svg.setAttribute('stroke', 'currentColor'); svg.setAttribute('stroke-width', '2')
          svg.setAttribute('stroke-linecap', 'round'); svg.setAttribute('stroke-linejoin', 'round')
          svg.innerHTML = '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>'
          svg.style.color = 'currentColor'
          e.currentTarget.replaceWith(svg)
        }}
      />
    </div>
  )
}

/* ─── Variants ─────────────────────────────────────────────────────── */
const cardReveal = (delay = 0) => ({
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
})

/* ─── Component ────────────────────────────────────────────────────── */
function JourneySection() {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10"
    >
      {/* ── Section header ── */}
      <div data-aos="fade-up" className="mb-14">
        <span className={`inline-block rounded-full border ${theme.labelBorder} ${theme.labelBg} px-4 py-1 text-xs font-semibold uppercase tracking-widest ${theme.labelText}`}>
          Journey
        </span>
        <h2 className={`mt-4 bg-linear-to-r ${theme.headingFrom} ${theme.headingVia} ${theme.headingTo} bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl`}>
          Experience &amp; Education
        </h2>
      </div>

      {/* ══════════ Timeline ══════════ */}
      <div className="relative ml-3 md:ml-6">
        {/* Vertical line */}
        <div className={`absolute left-0 top-0 h-full w-[2px] ${theme.timelineLine}`} />

        <div className="space-y-12">
          {timelineItems.map((item, i) => {
            const Icon = item.icon
            const node = theme.nodes[item.nodeIdx] ?? theme.nodes[0]
            return (
              <div key={i} className="relative flex gap-8">
                {/* Node */}
                <div className="relative z-10 -ml-[21px] shrink-0">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border ${theme.nodeBg} ${node.border} ${node.glow}`}
                  >
                    <Icon size={16} className={node.icon} />
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  {...cardReveal(i * 0.12)}
                  className={`flex-1 overflow-hidden rounded-2xl border ${theme.cardBorder} ${theme.sectionCardBg} p-6 backdrop-blur-md transition-all duration-300 ${theme.cardHoverBorder}`}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className={`text-lg font-bold ${theme.textPrimary}`}>{item.role}</h3>
                      <p className={`text-sm font-medium ${theme.textMuted}`}>{item.org}</p>
                    </div>
                    <span className={`rounded-full border ${theme.stackPillBorder} ${theme.stackPillBg} px-3 py-1 text-xs ${theme.textMuted}`}>
                      {item.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="mt-4 space-y-1.5">
                    {item.bullets.map((b, bi) => (
                      <li key={bi} className={`flex items-start gap-2 text-sm ${theme.textSecondary}`}>
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${node.icon.replace('text-', 'bg-')}`} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag}
                        className={`rounded-full border ${theme.stackPillBorder} ${theme.stackPillBg} px-3 py-1 text-xs ${theme.textMuted}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ══════════ Certifications ══════════ */}
      <div className="mt-24">
        <div data-aos="fade-up" className="mb-8">
          <span className={`inline-block rounded-full border ${theme.labelBorder} ${theme.labelBg} px-4 py-1 text-xs font-semibold uppercase tracking-widest ${theme.labelText}`}>
            Certifications
          </span>
          <h2 className={`mt-4 bg-linear-to-r ${theme.headingFrom} ${theme.headingVia} ${theme.headingTo} bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl`}>
            Courses &amp; Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {certs.map((cert, i) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border ${theme.cardBorder} ${theme.cardBg} p-5 backdrop-blur-md transition-all duration-300 ${theme.cardHoverBorder} ${theme.cardGlow}`}
            >

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <CertLogo logo={cert.logo} issuer={cert.issuer} />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${theme.textPrimary}`}>{cert.title}</h3>
                    <p className={`mt-0.5 text-sm ${theme.textMuted}`}>
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${cert.title} certificate`}
                  className={`mt-0.5 shrink-0 ${theme.textMuted} transition hover:${theme.textSecondary}`}
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JourneySection
