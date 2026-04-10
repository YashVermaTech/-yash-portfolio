import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const contactInfo = [
  { icon: '✉️', label: 'Email', value: 'yashverma25104@gmail.com', href: 'mailto:yashverma25104@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+49 176 70880371', href: 'tel:+4917670880371' },
  { icon: '📍', label: 'Location', value: 'Darmstadt, Germany', href: null },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:yashverma25104@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.open(mailto)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <SectionHeading label="// get in touch" title="Contact" />

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed">
              I am currently open to new opportunities in AI Engineering, Data Science, and ML roles.
              Available from <span className="text-accent font-semibold">15th March 2026</span> and open to relocation.
              Feel free to reach out for collaborations, opportunities, or just a conversation about AI.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="glass-card glow-border p-4 rounded-xl flex items-center gap-4 hover:border-primary/40 transition-all duration-300 group block"
                    >
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <div className="font-mono text-xs text-gray-500 uppercase">{info.label}</div>
                        <div className="text-white group-hover:text-primary transition-colors">{info.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="glass-card glow-border p-4 rounded-xl flex items-center gap-4">
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <div className="font-mono text-xs text-gray-500 uppercase">{info.label}</div>
                        <div className="text-white">{info.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 sm:p-8 rounded-2xl space-y-5"
          >
            <div>
              <label className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-2 block">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-dark-700 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-2 block">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-dark-700 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-2 block">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-dark-700 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-dark-900 font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              {submitted ? '✓ Opening email client...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
