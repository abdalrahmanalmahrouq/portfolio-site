/* Infinite marquee — two rows, opposite directions. */
import theme from '../theme'

const webSkills = [
  { label: 'React.js' }, { label: 'Laravel PHP' }, { label: 'JavaScript' },
  { label: 'SQL' }, { label: 'Docker' }, { label: 'GitHub' },
  { label: 'VS Code' }, { label: 'Ubuntu Linux' }, { label: 'REST APIs' },
  { label: 'Java' }, { label: 'C++' },
]

const aiSkills = [
  { label: 'Python' }, { label: 'TensorFlow' }, { label: 'Keras' },
  { label: 'Scikit-learn' }, { label: 'Pandas' }, { label: 'NumPy' },
  { label: 'Matplotlib' }, { label: 'Deep Learning' }, { label: 'CNN' },
  { label: 'ANN' }, { label: 'Data Science' },
]

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items]
  const pillClass = `inline-flex items-center whitespace-nowrap rounded-full border ${theme.cardBorder} ${theme.cardBg} px-6 py-3 text-sm font-medium tracking-wide ${theme.textSecondary} backdrop-blur-md transition-all duration-300 cursor-default hover:scale-105 ${theme.skillHover}`

  return (
    <div className="overflow-hidden" style={{
      maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
    }}>
      <div className={`flex gap-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ width: 'max-content' }}>
        {doubled.map((skill, i) => (
          <span key={`${skill.label}-${i}`} className={pillClass}>{skill.label}</span>
        ))}
      </div>
    </div>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="w-full py-24 overflow-hidden">
      <div className="mx-auto mb-12 max-w-7xl px-6 md:px-10" data-aos="fade-up">
        <span className={`inline-block rounded-full border ${theme.labelBorder} ${theme.labelBg} px-4 py-1 text-xs font-semibold uppercase tracking-widest ${theme.labelText}`}>
          Skills
        </span>
        <h2 className={`mt-4 bg-linear-to-r ${theme.headingFrom} ${theme.headingVia} ${theme.headingTo} bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl`}>
          Tools &amp; Technologies
        </h2>
        <p className={`mt-3 max-w-xl ${theme.textMuted}`}>
          A curated stack across full-stack web development and data science / AI engineering.
        </p>
      </div>

      <div className="mx-auto max-w-6xl space-y-6 px-4 md:px-8">
        <div>
          <p className={`mb-3 text-xs font-semibold uppercase tracking-widest ${theme.textMuted}`}>
            Web Dev &amp; Tools
          </p>
          <MarqueeRow items={webSkills} reverse={false} />
        </div>
        <div>
          <p className={`mb-3 text-xs font-semibold uppercase tracking-widest ${theme.textMuted}`}>
            Data Science &amp; AI
          </p>
          <MarqueeRow items={aiSkills} reverse={true} />
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
