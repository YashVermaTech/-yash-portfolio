import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const skillGroups = [
  {
    title: 'AI / ML',
    icon: '🧠',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'YOLOv11', 'GANs', 'LSTM', 'XGBoost', 'SAHI'],
  },
  {
    title: 'GenAI & LLMs',
    icon: '🤖',
    skills: ['GPT / Foundation Models', 'Phi-3', 'RAG Pipelines', 'LangChain', 'Hugging Face', 'Sentence-Transformers', 'ChromaDB'],
  },
  {
    title: 'Data Engineering',
    icon: '⚙️',
    skills: ['Palantir Foundry', 'Databricks', 'Apache Spark / PySpark', 'SQL', 'ETL Pipelines', 'tsfresh'],
  },
  {
    title: 'Cloud & MLOps',
    icon: '☁️',
    skills: ['Microsoft Azure', 'AWS (SageMaker)', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'Git / GitHub'],
  },
  {
    title: 'Programming',
    icon: '💻',
    skills: ['Python', 'JavaScript', 'C++', 'Kotlin', 'SQL', 'MATLAB'],
  },
  {
    title: 'CAD & Simulation',
    icon: '📐',
    skills: ['AutoCAD', 'CATIA', 'Fusion 360', 'SolidWorks', 'Ansys'],
  },
  {
    title: 'Visualization',
    icon: '📊',
    skills: ['Power BI', 'Tableau', 'Grafana', 'Plotly', 'Matplotlib', 'Vega-Lite'],
  },
  {
    title: 'Domain Expertise',
    icon: '✈️',
    skills: ['Aerospace Manufacturing', 'Aircraft Health Monitoring', 'Predictive Maintenance', 'Quality Assurance', 'DO-178C Compliance', 'Automotive'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <SectionHeading label="// tech stack" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass-card glow-border p-5 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 text-gray-300 border border-white/5 hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
