import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const certifications = [
  { name: 'Career Essentials in GitHub Professional Certificate', issuer: 'GitHub', platform: 'LinkedIn Learning' },
  { name: 'Career Essentials in Generative AI by Microsoft and LinkedIn', issuer: 'Microsoft', platform: 'LinkedIn Learning' },
  { name: 'Agentic AI: A Framework for Planning and Execution', issuer: 'LinkedIn Learning', platform: 'LinkedIn Learning' },
  { name: 'Docker Foundations Professional Certificate', issuer: 'Docker', platform: 'LinkedIn Learning' },
  { name: 'Computer Vision for Data Scientists', issuer: 'LinkedIn Learning', platform: 'LinkedIn Learning' },
  { name: 'PyTorch for Deep Learning Applications', issuer: 'LinkedIn Learning', platform: 'LinkedIn Learning' },
  { name: 'Foundry & AIP Builder Foundations', issuer: 'Palantir Technologies', platform: 'Palantir Learn' },
  { name: 'Foundry Foundations', issuer: 'Palantir Technologies', platform: 'Palantir Learn' },
  { name: 'Data Analysis in Palantir', issuer: 'Palantir Technologies', platform: 'Palantir Learn' },
  { name: 'Introduction to Palantir Foundry', issuer: 'Palantir Technologies', platform: 'Palantir Learn' },
  { name: 'Deep Learning: Model Optimization and Tuning', issuer: 'LinkedIn Learning', platform: 'LinkedIn Learning' },
  { name: 'Basic Image Classification with TensorFlow', issuer: 'Coursera', platform: 'Coursera' },
  { name: 'Medical Image Segmentation Workshop', issuer: 'Think(A.I)', platform: 'Think(A.I)' },
  { name: 'Robotics: Aerial Robotics', issuer: 'University of Pennsylvania', platform: 'Coursera' },
  { name: 'Data Science with Python', issuer: 'Coding Blocks', platform: 'Coding Blocks' },
  { name: 'Introduction to Kotlin', issuer: 'Coding Blocks', platform: 'Coding Blocks' },
  { name: 'ANSYS Training Program (80 Hours)', issuer: 'Excelencia Education', platform: 'Institutional' },
  { name: 'SolidWorks Training Program (30 Hours)', issuer: 'Excelencia Education', platform: 'Institutional' },
]

const socialLinks = [
  { name: 'Email', icon: '✉️', href: 'mailto:yashverma25104@gmail.com', label: 'yashverma25104@gmail.com' },
  { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/in/yashverma25104', label: 'linkedin.com/in/yashverma25104' },
  { name: 'GitHub', icon: '🔗', href: 'https://github.com/yashverma25', label: 'github.com/yashverma25' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative">
      <div className="section-container">
        <SectionHeading label="// credentials" title="Certifications & Network" />

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="glass-card glow-border px-5 py-3 rounded-xl flex items-center gap-3 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <span className="text-xl">{link.icon}</span>
              <div>
                <div className="font-mono text-xs text-gray-500">{link.name}</div>
                <div className="text-sm text-gray-300 group-hover:text-primary transition-colors">{link.label}</div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-4 rounded-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-mono mt-1">
                    {cert.issuer} · {cert.platform}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
