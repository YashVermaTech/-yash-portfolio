import { motion } from 'framer-motion'

export default function SectionHeading({ label, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <span className="font-mono text-sm tracking-widest uppercase text-primary/70 mb-3 block">
        {label}
      </span>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
        {title}
      </h2>
      <div className="mt-4 mx-auto w-20 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
    </motion.div>
  )
}
