export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm font-mono">
          &copy; {new Date().getFullYear()} Yash Verma. Built with React + Tailwind + Framer Motion.
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:yashverma25104@gmail.com"
            className="text-gray-500 text-sm hover:text-primary transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/yashverma25104"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-sm hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yashverma25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-sm hover:text-primary transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
