import { motion } from 'framer-motion'
import theme from '../theme'

function AboutSection() {
  return (
    <section id="about" data-aos="fade-up"
      className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">

      <span className={`inline-block rounded-full border ${theme.labelBorder} ${theme.labelBg} px-4 py-1 text-xs font-semibold uppercase tracking-widest ${theme.labelText}`}>
        About Me
      </span>

      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`mt-6 grid grid-cols-1 gap-0 overflow-hidden rounded-3xl border ${theme.cardBorder} ${theme.sectionCardBg} shadow-xl shadow-black/10 ring-1 ring-black/5 backdrop-blur-sm md:grid-cols-12`}>

        {/* Left — headline */}
        <div className={`flex flex-col justify-center gap-4 border-b ${theme.cardBorder} p-8 md:col-span-4 md:border-b-0 md:border-r`}>
          <h2 className={`bg-linear-to-br ${theme.headingFrom} ${theme.headingVia} ${theme.headingTo} bg-clip-text text-2xl font-extrabold leading-tight text-transparent lg:text-3xl`}>
            Bridging intelligent data and dynamic web experiences.
          </h2>
          <div className={`flex flex-col gap-2 text-sm ${theme.textMuted}`}>
            <span className="flex items-center gap-2">
              <span className={`inline-block h-1.5 w-1.5 rounded-full ${theme.dot1}`} />
              Amman, Jordan
            </span>
            <span className="flex items-center gap-2">
              <span className={`inline-block h-1.5 w-1.5 rounded-full ${theme.dot2}`} />
              GPA 3.71 / 4.00
            </span>
            <span className="flex items-center gap-2">
              <span className={`inline-block h-1.5 w-1.5 rounded-full ${theme.dot3}`} />
              2022 – 2026 · CIS @ Hashemite University
            </span>
          </div>
        </div>

        {/* Right — bio */}
        <div className="flex flex-col justify-center p-8 md:col-span-8">
          <p className={`text-lg leading-relaxed ${theme.textSecondary}`}>
            I'm a <span className={`font-semibold ${theme.textPrimary}`}>Data Scientist and Full-Stack Developer</span> with
            hands-on experience building AI-driven solutions and production-ready web platforms.
            My work spans the full spectrum — from wrangling real-world datasets and training deep
            learning models with <span className={`font-medium ${theme.bioAccent}`}>TensorFlow & Scikit-learn</span>,
            to crafting responsive frontends with <span className={`font-medium ${theme.bioAccent}`}>React.js</span> and
            robust APIs with <span className={`font-medium ${theme.bioAccent}`}>Laravel PHP</span>.
          </p>
          <p className={`mt-5 text-lg leading-relaxed ${theme.textSecondary}`}>
            I thrive at the intersection of data and product — turning raw numbers into insights
            and translating designs into polished user experiences. Whether it's a CNN classifier
            or a multi-tenant clinic platform, I care about clean code, thoughtful architecture,
            and shipping things that actually work.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection
