import { motion } from 'framer-motion'
import { Github, ExternalLink, Plane } from 'lucide-react'
import theme from '../theme'
import medicinaLogo from '../assets/medicina-logo.png'
import techNewsLogo from '../assets/technewslogo.svg'

/* ─── Project data ─────────────────────────────────────────────────── */
const projects = [
  {
    id: 'medicina',
    title: 'Medicina',
    subtitle: 'Multi-Clinic Medical Platform',
    description:
      'A multi-tenant web platform connecting clinics, doctors, and patients. Built a full React frontend with a modular Laravel PHP backend, containerised via Docker for seamless deployment across environments.',
    stack: ['React.js', 'Laravel PHP', 'Docker', 'REST APIs', 'MySQL'],
    github: 'https://github.com/abdalrahmanalmahrouq/graduation-project',
    demo: null,
    logo: medicinaLogo,
    span: 'md:col-span-8',
    featured: true,
  },
  {
    id: 'tech-news-agent',
    title: 'Technology News Agent',
    subtitle: 'Autonomous AI-Powered News Digest Pipeline',
    description: 'Built a production-grade multi-agent pipeline using LangGraph with 8 typed nodes — including a nested ReAct agent for article summarization, a web-search-powered claim verifier, and a conditional retry edge. Deployed on AWS EC2 behind Cloudflare with HTTPS via Caddy, containerized with Docker and automated through GitHub Actions CI/CD. Achieves ~4.5× speedup via asyncio.gather concurrency, with full observability via LangSmith tracing and loguru structured logging.',
    stack: ['LangGraph', 'LangChain', 'FastAPI', 'Python', 'Docker', 'AWS EC2', 'OpenRouter', 'LangSmith', 'Cloudflare'],
    github: 'github: https://github.com/abdalrahmanalmahrouq/tech-news-agent,',
    demo: 'https://technewsagent.indevs.in/',
    span: 'md:col-span-4',
    featured: false,
    medium: false,
    logo: techNewsLogo,
  },
  {
    id: 'flight-price-predictor',
    title: 'Flight Price Predictor',
    subtitle: 'End-to-End MLOps Pipeline',
    description: 'A production-grade ML system predicting Indian domestic flight ticket prices across 300,000+ flights. Conducted EDA on merged business and economy datasets, engineered features from raw strings, and applied target encoding with strict leakage prevention. Trained and tuned a LightGBM model via 50-trial Bayesian optimisation achieving MAE of 1,515 INR and R² of 0.9835, with SHAP explainability reports identifying is_business as the dominant pricing signal. Refactored into a modular src/ package with 46 unit tests, full MLflow experiment tracking, and a FastAPI REST API with Pydantic v2 validation. Containerised with Docker Compose, deployed to AWS EC2 with ECR, S3, and IAM role authentication, and automated via a GitHub Actions CI/CD pipeline. Monitored with Prometheus, Grafana, and Evidently AI drift detection, with a full champion/challenger retraining pipeline triggered on drift or MAE degradation.',
    stack: ['python', 'LightGBM', 'FastAPI', 'Docker', 'AWS EC2', 'MLflow', 'Prometheus', 'Grafana', 'Evidently', 'AI', 'CI/CD', 'Optuna', 'SHAP', 'Locust'],
    github: 'https://github.com/abdalrahmanalmahrouq/flight-price-predictor',
    demo: null,
    span: 'md:col-span-8',
    featured: false,
    medium: true,
    icon: Plane,
  },
  {
    id: 'cnn',
    title: 'CNN Classifier',
    subtitle: 'Binary Image Classification',
    description:
      'Built a Convolutional Neural Network with TensorFlow & Keras to classify images into binary classes with optimised training pipelines.',
    stack: ['Python', 'TensorFlow', 'Keras'],
    github: 'https://github.com/abdalrahmanalmahrouq/cnn_happy_unhappy',
    demo: null,
    span: 'md:col-span-4',
    featured: false,
  },
  {
    id: 'income',
    title: 'Income Predictor',
    subtitle: 'Predicting Income Levels',
    description:
      'Feature-engineered a Kaggle dataset and applied traditional ML alongside ANN deep learning to predict income brackets.',
    stack: ['Pandas', 'NumPy', 'TensorFlow Keras'],
    github: 'https://github.com/abdalrahmanalmahrouq/Income_dataSet',
    demo: null,
    span: 'md:col-span-4',
    featured: false,
    compact: true,
  },
  {
    id: 'student',
    title: 'Student Performance',
    subtitle: 'Regression Modelling',
    description:
      'Developed regression models on Kaggle data with end-to-end preprocessing, feature engineering, and Scikit-learn pipelines.',
    stack: ['Scikit-learn', 'Linear Regression', 'Random Forest'],
    github: 'https://github.com/abdalrahmanalmahrouq/Student-Dataset',
    demo: null,
    span: 'md:col-span-4',
    featured: false,
    compact: true,
  },
]

/* ─── Animation variants ───────────────────────────────────────────── */
const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const linksVariant = {
  rest: { opacity: 0, y: 14 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

/* ─── Featured card (Medicina) ─────────────────────────────────────── */
function FeaturedCard({ project }) {
  return (
    <motion.article
      variants={cardVariant}
      initial="rest"
      whileInView="show"
      whileHover="hover"
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-2xl border ${theme.cardBorder} ${theme.cardBg} p-8 backdrop-blur-md transition-all duration-500 ${theme.cardHoverBorder} ${theme.cardGlow} ${project.span}`}
      style={{ scale: 1 }}
    >

      <div className="relative z-10 grid h-full grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left — text */}
        <div className="flex flex-col justify-between gap-6">
          <div>
            <span className={`inline-block rounded-full border ${theme.stackPillBorder} ${theme.stackPillBg} px-3 py-1 text-xs font-semibold uppercase tracking-widest ${theme.textMuted}`}>
              Featured Project
            </span>
            <h3 className="mt-4 text-3xl font-extrabold leading-tight lg:text-4xl">
              <span className={`bg-linear-to-r ${theme.headingFrom} ${theme.headingVia} ${theme.headingTo} bg-clip-text text-transparent`}>
                {project.title}
              </span>
            </h3>
            <p className={`mt-1 text-base font-medium ${theme.textMuted}`}>{project.subtitle}</p>
            <p className={`mt-4 text-base leading-relaxed ${theme.textSecondary}`}>{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item}
                className={`rounded-full border ${theme.stackPillBorder} ${theme.stackPillBg} px-3 py-1 text-xs font-medium ${theme.stackPillText}`}
                style={{ fontFamily: '"JetBrains Mono", "Fira Code", monospace' }}>
                {item}
              </span>
            ))}
          </div>

          <motion.div  className="flex gap-3">
            <a href={project.github}
              className={`inline-flex items-center gap-2 rounded-full border ${theme.cardBorder} ${theme.cardBg} px-4 py-2 text-sm ${theme.textSecondary} transition hover:opacity-80`}>

              <Github size={14} /> GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                className={`inline-flex items-center gap-2 rounded-full border ${theme.labelBorder} ${theme.labelBg} px-4 py-2 text-sm ${theme.labelText} transition hover:opacity-80`}
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </motion.div>
        </div>

        {/* Right — decorative mesh panel */}
        <div className="hidden lg:flex items-center justify-center">
          <div className={`h-48 w-full rounded-2xl bg-linear-to-br ${theme.cardMesh} border ${theme.cardBorder} flex items-center justify-center`}>
            {project.logo ? (
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className="h-70 w-auto object-contain"
              />
            ) : (
              <span className={`bg-linear-to-r ${theme.headingFrom} ${theme.headingVia} ${theme.headingTo} bg-clip-text text-5xl font-black text-transparent opacity-30`}>
                {project.title[0]}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

/* ─── Small card ───────────────────────────────────────────────────── */
function SmallCard({ project }) {
  return (
    <motion.article
      variants={cardVariant}
      initial="rest"
      whileInView="show"
      whileHover="hover"
      viewport={{ once: true }}
      className={`group relative self-start overflow-hidden rounded-2xl border ${theme.cardBorder} ${theme.cardBg} ${project.compact ? 'p-4' : 'p-6'} backdrop-blur-md transition-all duration-500 ${theme.cardHoverBorder} ${theme.cardGlow} ${project.span}`}
    >

      <div className="relative z-10 flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-3">
            {project.logo && (
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className="h-8 w-auto object-contain shrink-0"
              />
            )}
            <h3 className="text-xl font-bold leading-tight">
              <span className={`bg-linear-to-r ${theme.headingFrom} ${theme.headingVia} ${theme.headingTo} bg-clip-text text-transparent`}>
                {project.title}
              </span>
            </h3>
          </div>
          <p className={`mt-0.5 text-xs font-medium ${theme.textMuted}`}>{project.subtitle}</p>
          <p className={`mt-3 text-sm leading-relaxed ${theme.textSecondary}`}>{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <span key={item}
              className={`rounded-full border ${theme.stackPillBorder} ${theme.stackPillBg} px-3 py-1 text-xs font-medium ${theme.stackPillText}`}
              style={{ fontFamily: '"JetBrains Mono", "Fira Code", monospace' }}>
              {item}
            </span>
          ))}
        </div>

        <motion.div  className="flex gap-2">
          {project.github && (
            <a href={project.github}
              className={`inline-flex items-center gap-1.5 rounded-full border ${theme.cardBorder} ${theme.cardBg} px-3 py-1.5 text-xs ${theme.textSecondary} transition hover:opacity-80`}>
              <Github size={12} /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              className={`inline-flex items-center gap-1.5 rounded-full border ${theme.labelBorder} ${theme.labelBg} px-3 py-1.5 text-xs ${theme.labelText} transition hover:opacity-80`}
            >
              <ExternalLink size={12} /> Demo
            </a>
          )}
        </motion.div>
      </div>
    </motion.article>
  )
}

/* ─── Medium card (between featured and small) ─────────────────────── */
function MediumCard({ project }) {
  return (
    <motion.article
      variants={cardVariant}
      initial="rest"
      whileInView="show"
      whileHover="hover"
      viewport={{ once: true }}
      className={`group relative self-start overflow-hidden rounded-2xl border ${theme.cardBorder} ${theme.cardBg} p-7 backdrop-blur-md transition-all duration-500 ${theme.cardHoverBorder} ${theme.cardGlow} ${project.span}`}
    >
      <div className="relative z-10 flex flex-col gap-5">
        <div>
          <div className="flex items-center gap-3">
            {project.icon && (
              <project.icon size={24} className={`shrink-0 ${theme.labelText}`} />
            )}
            <h3 className="text-2xl font-bold leading-tight">
              <span className={`bg-linear-to-r ${theme.headingFrom} ${theme.headingVia} ${theme.headingTo} bg-clip-text text-transparent`}>
                {project.title}
              </span>
            </h3>
          </div>
          <p className={`mt-1 text-sm font-medium ${theme.textMuted}`}>{project.subtitle}</p>
          <p className={`mt-3 text-sm leading-relaxed ${theme.textSecondary}`}>{project.description}</p>
        </div>

        {project.stack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item}
                className={`rounded-full border ${theme.stackPillBorder} ${theme.stackPillBg} px-3 py-1 text-xs font-medium ${theme.stackPillText}`}
                style={{ fontFamily: '"JetBrains Mono", "Fira Code", monospace' }}>
                {item}
              </span>
            ))}
          </div>
        )}

        <motion.div  className="flex gap-2">
          {project.github && (
            <a href={project.github}
              className={`inline-flex items-center gap-2 rounded-full border ${theme.cardBorder} ${theme.cardBg} px-4 py-2 text-sm ${theme.textSecondary} transition hover:opacity-80`}>
              <Github size={13} /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo}
              className={`inline-flex items-center gap-2 rounded-full border ${theme.labelBorder} ${theme.labelBg} px-4 py-2 text-sm ${theme.labelText} transition hover:opacity-80`}>
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
        </motion.div>
      </div>
    </motion.article>
  )
}

/* ─── Section ──────────────────────────────────────────────────────── */
function ProjectsSection() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
      {/* Heading */}
      <div className="mb-10" data-aos="fade-up">
        <span className={`inline-block rounded-full border ${theme.labelBorder} ${theme.labelBg} px-4 py-1 text-xs font-semibold uppercase tracking-widest ${theme.labelText}`}>
          Projects
        </span>
        <h2 className={`mt-4 bg-linear-to-r ${theme.headingFrom} ${theme.headingVia} ${theme.headingTo} bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl`}>
          Featured Work
        </h2>
        <p className={`mt-3 max-w-2xl ${theme.textMuted}`}>
          Full-stack platforms and AI/ML research projects — built end-to-end with production intent.
        </p>
      </div>

      {/* Bento grid */}
      <motion.div
        variants={gridContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 gap-6 md:grid-cols-12"
      >
        {/* Featured card */}
        <FeaturedCard project={featured} />

        {/* Rest in array order — medium flag picks the component */}
        {rest.map((project) =>
          project.medium
            ? <MediumCard key={project.id} project={project} />
            : <SmallCard key={project.id} project={project} />
        )}
      </motion.div>
    </section>
  )
}

export default ProjectsSection
