import { motion } from 'framer-motion'

const techs = [
  'Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'LangChain',
  'Hugging Face', 'PySpark', 'Palantir Foundry', 'Azure', 'AWS', 'Docker',
  'Kubernetes', 'SQL', 'GANs', 'YOLO', 'RAG', 'GPT', 'Power BI', 'Grafana',
  'MATLAB', 'JavaScript', 'C++', 'Kotlin', 'ChromaDB', 'Git',
]

export default function TechTicker() {
  const doubled = [...techs, ...techs]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-6 border-y border-white/5 overflow-hidden bg-dark-800/50"
    >
      <div className="ticker-animate flex gap-8 whitespace-nowrap">
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="text-sm font-mono text-gray-500 hover:text-primary transition-colors cursor-default flex items-center gap-2"
          >
            <span className="text-primary/30">◆</span>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
