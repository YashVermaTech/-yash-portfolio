import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const codeLines = [
  { text: 'import torch', color: 'text-primary' },
  { text: 'from transformers import pipeline', color: 'text-primary' },
  { text: '', color: '' },
  { text: 'class AeroDefectDetector:', color: 'text-accent' },
  { text: '    """90% inspection time reduction"""', color: 'text-green-400' },
  { text: '    model = torch.hub.load("yolov11x")', color: 'text-gray-300' },
  { text: '    recall = 0.87  # vs 0.80 manual', color: 'text-yellow-400' },
  { text: '', color: '' },
  { text: 'class HealthMonitor:', color: 'text-accent' },
  { text: '    """500GB+ flight data pipeline"""', color: 'text-green-400' },
  { text: '    engine = PalantirFoundry()', color: 'text-gray-300' },
  { text: '    engines_tracked = 30', color: 'text-yellow-400' },
]

function TypingCode() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= codeLines.length) return prev
        return prev + 1
      })
    }, 250)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass-card glow-blue p-4 sm:p-6 rounded-2xl font-mono text-xs sm:text-sm leading-relaxed overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-gray-500 text-xs">portfolio.py</span>
      </div>
      <div className="space-y-1">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex"
          >
            <span className="text-gray-600 w-6 text-right mr-4 select-none">{i + 1}</span>
            <span className={line.color}>{line.text}</span>
          </motion.div>
        ))}
        {visibleLines < codeLines.length && (
          <div className="flex">
            <span className="text-gray-600 w-6 text-right mr-4 select-none">{visibleLines + 1}</span>
            <span className="cursor-blink text-primary">|</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />

      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6 pulse-badge"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-accent">Open to opportunities</span>
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
              <span className="text-white">Yash</span>{' '}
              <span className="gradient-text">Verma</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
              AI Engineer &amp; Data Scientist &middot; M.Sc. Aerospace Engineering &middot; Specializing in Aerospace, Automotive, Manufacturing &amp; open to all AI, Automation and Digitalization domains
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-dark-900 font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="https://github.com/YashVermaTech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-white/10 text-gray-300 font-semibold text-sm hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right — Code block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <TypingCode />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
