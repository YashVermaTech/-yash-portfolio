import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const stats = [
  { value: '1.0', label: 'Thesis Score', icon: '🎓' },
  { value: '90%', label: 'Inspection Reduction', icon: '⚡' },
  { value: '500GB+', label: 'Data Processed', icon: '📊' },
  { value: '2+', label: 'Publications', icon: '📄' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <SectionHeading label="// about me" title="About" />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-4 text-gray-300 leading-relaxed">
              <p>
                I am an <span className="text-white font-semibold">AI Consultant</span> with hands-on experience building and shipping production-grade ML and LLM-powered solutions for mid-sized companies, startups, and <span className="text-primary font-semibold">Airbus</span>.
              </p>
              <p>
                During my Master&apos;s Thesis at <span className="text-primary font-semibold">Airbus Aerostructures</span>, I developed an end-to-end computer vision pipeline for automated defect detection in aircraft manufacturing — achieving <span className="text-accent font-semibold">87% recall</span> (outperforming manual inspection at 80%), a <span className="text-accent font-semibold">98% accurate</span> ensemble classifier, and a novel GAN pipeline for synthetic data generation advancing toward patent filing.
              </p>
              <p>
                At <span className="text-primary font-semibold">Lilium GmbH</span>, I built condition-based monitoring systems processing <span className="text-accent font-semibold">500GB+ datasets</span> via Palantir Foundry, developed LSTM-based predictive maintenance models, and deployed RAG-AI tools on Azure for scalable technical documentation analysis.
              </p>
              <p>
                I hold an <span className="text-white font-semibold">M.Sc. in Aerospace Engineering</span> from TU Darmstadt (Thesis: 1.0) and a B.Tech in Mechanical Engineering (GPA: 1.6 German scale). I bring deep expertise across the full ML lifecycle — from data engineering and model development to deployment and business impact quantification.
              </p>
            </div>
          </motion.div>

          {/* Stat cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card glow-border p-5 rounded-2xl text-center group hover:border-primary/40 transition-colors duration-300"
              >
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <div className="font-heading text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
