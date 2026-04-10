import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const education = [
  {
    degree: 'Master of Science — Aerospace Engineering',
    university: 'Technische Universität Darmstadt',
    location: 'Darmstadt, Germany',
    period: 'Oct 2022 – Mar 2026',
    grade: "Master's Thesis Score: 1.0 (Excellent)",
    highlights: [
      'Thesis: Deep Learning for Object Detection in Aircraft Manufacturing (at Airbus)',
      'Focus areas: AI/ML, Data Science, Computer Vision, Manufacturing Engineering',
    ],
  },
  {
    degree: 'Bachelor of Technology — Mechanical Engineering',
    university: 'Dr. Akhilesh Das Gupta Institute of Technology and Management (GGSIPU)',
    location: 'New Delhi, India',
    period: 'Aug 2017 – Jul 2021',
    grade: 'Equivalent Percentage: 86.5% · German GPA: 1.6',
    highlights: [
      '2 published research papers on Social Robotics/HRI and Soft Robotics',
      'Head of Braking Department — National Electric Kart Championship (2nd in Endurance)',
    ],
  },
]

const languages = [
  { lang: 'English', level: 'Advanced — IELTS C2', pct: 95 },
  { lang: 'German', level: 'Intermediate — B1', pct: 55 },
  { lang: 'Hindi', level: 'Native', pct: 100 },
  { lang: 'French', level: 'Elementary', pct: 20 },
]

export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="section-container">
        <SectionHeading label="// academics" title="Education" />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Degrees */}
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card p-6 sm:p-8 rounded-2xl hover:border-primary/20 transition-colors duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-primary/80 font-medium text-sm mt-1">
                      {edu.university}
                    </p>
                    <p className="text-gray-500 text-xs">{edu.location}</p>
                  </div>
                  <span className="font-mono text-xs text-gray-500 whitespace-nowrap bg-dark-700 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/15 mb-4">
                  <span className="text-accent text-sm">🎯</span>
                  <span className="text-accent text-sm font-mono font-bold">{edu.grade}</span>
                </div>

                <ul className="space-y-2">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-gray-300 text-sm">
                      <span className="text-accent mt-0.5 flex-shrink-0">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 rounded-2xl h-fit"
          >
            <h3 className="font-heading text-lg font-bold text-white mb-6">Languages</h3>
            <div className="space-y-5">
              {languages.map((l, i) => (
                <div key={l.lang}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-white">{l.lang}</span>
                    <span className="text-xs font-mono text-gray-400">{l.level}</span>
                  </div>
                  <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
