import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Library', path: '/library' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0f1425] backdrop-blur-xl border-b border-blue-900/30'
    : 'bg-[#0f1425]'
        }`}
      >
        <div className="container-max section-padding">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                   src=".\Atmospatial_Analytics_Pvt_Ltd_logo.png"
                   alt="Atmospatial Logo"
                   className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
                />
              </motion.div>
              <div className="hidden sm:block">
                <div className="text-s font-bold text-blue-800 tracking-wide leading-none">ATMOSPATIAL</div>
                <div className="text-[9px] font-medium text-yellow-500 tracking-[0.15em] uppercase leading-none mt-0.5">Analytics Pvt. Ltd.</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 text-base font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-yellow-600'
                        : 'text-blue-400 hover:text-blue-600 hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              {/* <Link
                to="/contact"
                className="hidden lg:inline-flex btn-primary text-sm"
              >
                Log In
              </Link> */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-navy/80 backdrop-blur-xl"
              onClick={() => setMenuOpen(false)}
            />
            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-navy-mid border-l border-white/5 pt-20 px-6"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                        location.pathname === link.path
                          ? 'bg-primary/20 text-blue-900 border border-primary/30'
                          : 'text-blue-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                {/* <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6"
                >
                  <Link
                    to="/contact"
                    className="btn-primary w-full text-center block"
                  >
                    Get In Touch
                  </Link>
                </motion.div> */}
              </nav>

              <div className="mt-auto absolute bottom-8 left-6 right-6">
                <div className="text-xs text-white/30 text-center">
                  © 2025 Atmospatial Analytics Pvt. Ltd.
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}