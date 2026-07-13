// src/components/LibraryHero.jsx

import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function LibraryHero() {
  return (
    <section className="pt-36 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="show" variants={fadeIn}>
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] mb-5"
            style={{ color: '#D4A017' }}
          >
            Research Resources
          </p>
          <h1
            className="font-black leading-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', color: '#0F2557' }}
          >
            Library
          </h1>
          <div className="w-14 h-1 rounded-full mb-6" style={{ background: '#153E8A' }} />
         
        </motion.div>
      </div>
    </section>
  )
}
