import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const publications = [
  {
    title: 'Research on the Field of Social Robotics and HRI',
    authors: 'Yash Verma, Anirudh V.',
    journal: 'Trends in Electrical Engineering — STM Journals',
    details: 'ISSN: 2249-4774 (Online), ISSN: 2321-4260 (Print) · Volume 11, Issue 1, 2021',
    doi: 'DOI: 10.37591/TEE',
    abstract: 'A comprehensive overview of social robots architecture, human-robot interaction, supervisory control, teleoperations, and future scope of HRI.',
    status: 'Published',
  },
  {
    title: 'Challenges in the Field of Soft Robotics',
    authors: 'Anirudh V., Yash Verma',
    journal: 'Trends in Electrical Engineering — STM Journals',
    details: 'ISSN: 2249-4774 (Online), ISSN: 2321-4260 (Print) · Volume 10, Issue 3, 2020',
    doi: '',
    abstract: 'Explores challenges in autonomous morphing, multimodal sensors, stretchable conductive materials, modelling techniques, and fabrication for soft robotic components.',
    status: 'Published',
  },
  {
    title: 'AI-Powered Defect Detection for Aerospace Manufacturing using GANs and Deep Learning',
    authors: 'Yash Verma et al. (in collaboration with Airbus)',
    journal: 'In Process — Academic Publication',
    details: 'Selected for publication based on Master\'s Thesis findings at Airbus Aerostructures GmbH',
    doi: '',
    abstract: 'End-to-end CV pipeline for automated defect detection and classification with a novel GAN-on-Displacement-Maps approach for synthetic data generation. Advancing toward patent filing.',
    status: 'Upcoming',
  },
]

export default function Publications() {
  return (
    <section id="publications" className="relative">
      <div className="section-container">
        <SectionHeading label="// research" title="Publications" />

        <div className="space-y-6 max-w-4xl mx-auto">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 sm:p-8 rounded-2xl hover:border-primary/20 transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                <span
                  className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-mono ${
                    pub.status === 'Published'
                      ? 'bg-accent/15 text-accent border border-accent/20'
                      : 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/20'
                  }`}
                >
                  {pub.status}
                </span>
              </div>

              <p className="text-primary/80 text-sm font-medium mb-1">{pub.authors}</p>
              <p className="text-gray-400 text-sm mb-1">{pub.journal}</p>
              <p className="text-gray-500 text-xs font-mono mb-3">{pub.details}</p>
              {pub.doi && (
                <p className="text-primary/60 text-xs font-mono mb-3">{pub.doi}</p>
              )}
              <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                {pub.abstract}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
