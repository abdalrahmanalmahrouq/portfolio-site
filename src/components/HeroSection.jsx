import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Code2, BrainCircuit, Github, Linkedin, Mail, MapPin, Phone, Database, FlaskConical, Globe, Cpu } from 'lucide-react'
import personalImage from '../assets/personalpic.jpeg'
import theme from '../theme'

/* ─── Blur-reveal name animation ──────────────────────────────────── */
const nameContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
}
const nameWord = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  show: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

/* ─── Magnetic button wrapper ──────────────────────────────────────── */
function MagneticWrap({ children, className = '', strength = 12 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { type: 'spring', stiffness: 150, damping: 15 })
  const springY = useSpring(y, { type: 'spring', stiffness: 150, damping: 15 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set(((e.clientX - rect.left - rect.width  / 2) / rect.width)  * strength * 2)
    y.set(((e.clientY - rect.top  - rect.height / 2) / rect.height) * strength * 2)
  }
  const handleMouseLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div ref={ref} style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={className}>
      {children}
    </motion.div>
  )
}

/* ─── Contact data ─────────────────────────────────────────────────── */
const contactPills = [
  { icon: MapPin, label: 'Amman, Jordan',                 href: 'https://maps.google.com/?q=Amman,+Jordan', external: true  },
  { icon: Mail,   label: 'abdalrahmanadnan209@gmail.com', href: 'mailto:abdalrahmanadnan209@gmail.com',     external: false },
  { icon: Phone,  label: '+962-791044738',                href: 'tel:+962791044738',                        external: false },
]
const contactIcons = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-linkedin' },
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/your-github' },
  { icon: Mail,     label: 'Email',    href: 'mailto:abdalrahmanadnan209@gmail.com' },
]

/* ─── Component ────────────────────────────────────────────────────── */
function HeroSection() {
  const splineSceneUrl = import.meta.env.VITE_SPLINE_SCENE_URL

  const floatBadge = `absolute z-20 flex items-center gap-2 rounded-full border ${theme.badgeFloatBorder} ${theme.badgeFloatBg} px-3 py-2 text-xs font-semibold ${theme.badgeFloatText} shadow-lg backdrop-blur-md`

  return (
    <section id="home" className={`relative mx-auto min-h-screen w-full overflow-hidden ${theme.pageBg}`}>

      {/* ── Background image ── */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80")' }}
      />

      {/* ── Overlay ── */}
      <div className={`absolute inset-0 z-10 ${theme.heroOverlay} backdrop-blur-[2px]`} />

      {/* ── Spline (optional) ── */}
      {splineSceneUrl && (
        <div className="pointer-events-none absolute inset-0 z-10 opacity-30 mask-[radial-gradient(circle_at_center,black_40%,transparent_100%)]">
          <Spline scene={splineSceneUrl} />
        </div>
      )}

      {/* ── Ambient orbs ── */}
      <motion.div aria-hidden="true"
        className={`pointer-events-none absolute left-[-120px] top-[-80px] z-10 h-[500px] w-[500px] rounded-full ${theme.orb1} blur-[128px]`}
        animate={{ scale: [1, 1.08, 1], x: [0, 20, 0], y: [0, -14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div aria-hidden="true"
        className={`pointer-events-none absolute bottom-[-120px] right-[-80px] z-10 h-[500px] w-[500px] rounded-full ${theme.orb2} blur-[128px]`}
        animate={{ scale: [1, 1.06, 1], x: [0, -18, 0], y: [0, 16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Content ── */}
      <div className="relative z-20 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-6 pb-20 pt-32 md:grid-cols-2 md:px-10">

        {/* ══ LEFT ══ */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }} className="space-y-6">

          {/* Badge */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className={`inline-flex items-center rounded-full border ${theme.badgeBorder} ${theme.badgeBg} px-4 py-1 text-sm font-medium ${theme.badgeText}`}>
            Data Scientist &amp; Web Developer
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl font-extrabold leading-[1.1] sm:text-6xl lg:text-7xl xl:text-8xl">
            <motion.span variants={nameContainer} initial="hidden" animate="show" className="inline-block">
              {['Abdalrahman', 'AL-Mahrouq'].map((word) => (
                <motion.span key={word} variants={nameWord}
                  className="mr-[0.25em] inline-block whitespace-nowrap bg-clip-text text-transparent last:mr-0"
                  style={{ backgroundImage: theme.nameGradient, backgroundSize: '220% 220%' }}>
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          {/* Tagline */}
          <motion.p initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className={`max-w-xl text-base leading-relaxed sm:text-lg ${theme.textSecondary}`}>
            Building AI-driven systems and premium full-stack experiences with
            production-focused engineering.
          </motion.p>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}>
            <MagneticWrap className="inline-block" strength={14}>
              <a href="#projects"
                className={`inline-flex items-center rounded-xl border ${theme.ctaBorder} ${theme.ctaBg} px-6 py-3 text-sm ${theme.ctaText} shadow-md transition-shadow duration-300 ${theme.ctaGlow}`}>
                View Projects
              </a>
            </MagneticWrap>
          </motion.div>

          {/* Contact pills */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
            className="flex flex-wrap gap-3 pt-2">
            {contactPills.map(({ icon: Icon, label, href, external }) => (
              <a key={label} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className={`inline-flex items-center gap-2 rounded-full border ${theme.cardBorder} ${theme.cardBg} px-4 py-2 text-sm ${theme.textSecondary} backdrop-blur-md transition-all duration-300 hover:scale-105 ${theme.pillHover}`}>
                <Icon size={14} className={`shrink-0 ${theme.pillIcon}`} />
                <span className="max-w-[200px] truncate">{label}</span>
              </a>
            ))}
            {contactIcons.map(({ icon: Icon, label, href }) => (
              <MagneticWrap key={label} strength={10}>
                <a href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${theme.cardBorder} ${theme.cardBg} ${theme.textSecondary} backdrop-blur-md transition-all duration-300 hover:scale-105 ${theme.pillHover}`}>
                  <Icon size={16} className="shrink-0" />
                </a>
              </MagneticWrap>
            ))}
          </motion.div>
        </motion.div>

        {/* ══ RIGHT — 3D card + badges ══ */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative flex min-h-[460px] items-center justify-center justify-self-end perspective-[1000px] md:pl-10">

          {/* Ambient glow behind card */}
          <div className={`absolute h-72 w-72 rounded-full ${theme.profileAmbient} blur-3xl`} />

          {/* Badges */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
            className={`${floatBadge} left-2 top-10 sm:-left-6`}>
            <Code2 size={13} className={theme.pillIcon} /> React &amp; Laravel
          </motion.div>

          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            className={`${floatBadge} bottom-14 right-2 sm:-right-6`}>
            <Cpu size={13} className={theme.nodes[1]?.icon ?? theme.pillIcon} /> AI &amp; Data Science
          </motion.div>

          {/* 3D floating card */}
          <motion.div
            animate={{ y: [0, -15, 0], rotateX: [0, 5, 0, -5, 0], rotateY: [0, -10, 0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}>
            <div className={`rounded-3xl border ${theme.cardBorder} bg-white/8 p-4 ${theme.profileGlow} backdrop-blur-xl ring-1 ${theme.profileRing}`}>
              <img src={personalImage} alt="Abdalrahman AL-Mahrouq profile"
                className="h-[360px] w-[290px] rounded-2xl object-cover sm:h-[420px] sm:w-[330px]" />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default HeroSection
