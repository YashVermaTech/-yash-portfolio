import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const experiences = [
  {
    role: 'Master Thesis Student — Deep Learning for Object Detection in Aircraft Manufacturing',
    company: 'Airbus Aerostructures GmbH',
    location: 'Hamburg, Germany',
    period: 'May 2025 – Oct 2025',
    bullets: [
      'Developed an end-to-end CV pipeline for automated defect detection, classification, and reporting for Airbus Quality and Airbus Robotics.',
      'Built a detector (0.87 recall) that significantly outperformed the baseline.',
      'Designed a 98% accurate ensemble classifier to solve severe class imbalance in defect types.',
      'Solved data scarcity by training a GAN on background-agnostic displacement maps for synthetic, auto-labeled data generation. Advancing toward patent filing and/or academic publication.',
      'Generalized the model to CFRP material using transfer learning, achieving a 34.2% higher mAP than a model trained from scratch.',
      'System reduces inspection time by >90% and improves detection reliability over manual methods (87% vs. 80% recall).',
      'Selected to present thesis findings as an academic publication in collaboration with Airbus (in process).',
      'Mentored a team of 6 AI interns in their AI projects across Airbus.',
    ],
    tools: ['Python', 'PyTorch', 'TensorFlow', 'GANs', 'Scikit-learn', 'SAHI', 'AWS SageMaker', 'Linux', 'Git'],
  },
  {
    role: 'Aircraft Health Monitoring — Data Science Intern',
    company: 'Lilium GmbH',
    location: 'Gauting, Munich',
    period: 'Apr 2024 – Dec 2024',
    bullets: [
      'Improved aircraft health outcomes by developing a Condition-Based Monitoring (CBM) system, collaborating with IPTs to define critical KPIs and performance thresholds.',
      'Reduced Aircraft on Ground (AOG) events by architecting and deploying ETL pipelines in Palantir Foundry, using integrated health data for real-time monitoring and anomaly detection.',
      'Improved battery degradation prediction accuracy by 15% and cut unscheduled maintenance by a projected 10% through an LSTM-based monitoring system and signal processing for vibration analysis.',
      'Architected a scalable and API-driven backend for a user-facing CRM dashboard, enabling real-time performance tracking.',
      'Developed an API-driven, user-facing RAG-AI tool on Azure, leveraging GPT-3.5 for scalable semantic analysis of large-scale technical documentation.',
    ],
    tools: ['PySpark', 'SQL', 'Azure', 'Palantir Foundry', 'Microsoft Fabric', 'PyTorch', 'LLMs', 'MATLAB', 'Grafana', 'Docker'],
  },
  {
    role: 'Quality Engineer Trainee',
    company: 'Imperial Auto Industries Limited',
    location: 'Faridabad, India',
    period: 'Jul 2019 – Aug 2019',
    bullets: [
      'Strengthened the quality assurance lifecycle, reducing defect recurrence, by conducting root cause analysis and implementing process improvements with cross-functional teams.',
    ],
    tools: [],
  },
  {
    role: 'Power Plant Engineer Trainee',
    company: 'Pragati Power Corporation Limited',
    location: 'New Delhi, India',
    period: 'May 2019 – Jun 2019',
    bullets: [
      'Enhanced plant safety and operational efficiency by collaborating with engineering teams on critical maintenance, troubleshooting, and process optimization initiatives.',
    ],
    tools: [],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <SectionHeading label="// career path" title="Experience" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/30 ring-4 ring-dark-900" />

                <div className="glass-card p-5 sm:p-7 rounded-2xl hover:border-primary/20 transition-colors duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-primary/80 font-medium text-sm">
                        {exp.company} <span className="text-gray-500">· {exp.location}</span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-gray-500 whitespace-nowrap bg-dark-700 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                        <span className="text-accent mt-1.5 flex-shrink-0">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.tools.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map(tool => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-primary/10 text-primary/80 border border-primary/10"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
