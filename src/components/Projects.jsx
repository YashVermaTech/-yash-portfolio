import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'DAL-Aware Agent for DO-178C Aerospace Compliance',
    date: 'Nov 2025',
    description: 'Developing a goal-based agentic RAG system to automate and error-proof DO-178C compliance. The agent establishes project-specific Development Assurance Level (DAL) and dynamically filters all RAG retrievals through this context, providing engineers with precise, DAL-specific answers for verification, traceability, and coverage.',
    impact: 'Automated compliance verification with DAL filtering',
    tools: ['LangChain', 'Phi-3-mini', 'ChromaDB', 'Sentence-Transformers', 'Hugging Face', 'PyPDF'],
  },
  {
    title: 'AI-Powered Medical Imaging: Cancer Detection & Segmentation',
    date: 'Jan 2025',
    description: 'Achieved a box mAP50 of 0.71 for medical image analysis by fine-tuning a YOLOv11-seg model for a custom breast cancer dataset (benign vs. malignant classification). Implemented a classic R-CNN object detection pipeline from the ground up using TensorFlow/Keras with a VGG16 backbone.',
    impact: '0.71 mAP50 on breast cancer detection',
    tools: ['PyTorch', 'TensorFlow', 'Keras', 'Ultralytics YOLO', 'OpenCV', 'Scikit-learn'],
  },
  {
    title: 'Robust AI Models for Tool-Wear Prediction during Stamping',
    date: 'Jul 2024',
    description: 'Engineered a robust AI model for tool-wear prediction by training and validating with time-series data (acceleration, acoustic emission, force signals). Pioneered a novel signal processing methodology for forming processes that spurred further research, leading to a new PhD position.',
    impact: 'Novel methodology → new PhD position created',
    tools: ['Python', 'Pandas', 'NumPy', 'tsfresh', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'SciPy', 'Plotly'],
  },
  {
    title: 'Anomaly Detection in Pneumatic Cylinder Production using ML',
    date: 'Feb 2024',
    description: 'Boosted manufacturing quality control and productivity by developing a machine-learning model to detect and classify anomalies in cylinder-bottom parts from CNC milling process data.',
    impact: 'Improved manufacturing QC',
    tools: ['Python', 'Pandas', 'NumPy', 'tsfresh', 'Scikit-learn', 'XGBoost', 'GitHub'],
  },
  {
    title: 'Machine Learning Model for Deep Drawing Process',
    date: 'Sep 2023',
    description: 'Improved quality assurance and prediction in deep drawing by co-developing an ML model that integrated the KDT-EA model with advanced feature extraction and selection. Implemented automated defect detection using OpenCV and ML regression algorithms.',
    impact: 'Automated defect detection in deep drawing',
    tools: ['Python', 'Scikit-learn', 'OpenCV'],
  },
  {
    title: 'Human-Robot Relationship and Obstacle Avoiding Robot',
    date: 'May 2021',
    description: 'Developed an embedded vision system on an Arduino Uno platform for autonomous obstacle avoidance, integrating vision and proximity sensors for ADAS applications. Investigated ethical and cognitive impacts of human-robot interaction.',
    impact: 'Autonomous obstacle avoidance system',
    tools: ['Arduino Uno', 'C++', 'Vision & Proximity Sensors'],
  },
  {
    title: 'Eco-Cart in National Electric Kart Championship, India',
    date: 'Feb 2020',
    description: 'Led the Braking Department as Head, overseeing overall construction, design, and E-drive. Managed a team of 5 members. Achieved 2nd Position in the Endurance Test.',
    impact: '2nd place — Endurance Test',
    tools: ['E-Drive Design', 'Braking Systems', 'Team Leadership'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <SectionHeading label="// portfolio" title="Projects" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl flex flex-col hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-heading text-lg font-bold text-white group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-gray-500 whitespace-nowrap bg-dark-700 px-2.5 py-1 rounded-full flex-shrink-0">
                  {project.date}
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Impact metric */}
              <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-accent/5 border border-accent/10">
                <span className="text-accent text-xs">⚡</span>
                <span className="text-accent text-xs font-mono">{project.impact}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tools.map(tool => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-primary/10 text-primary/70 border border-primary/10"
                  >
                    {tool}
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
