import { Link } from 'react-router-dom'
import { Mail, MapPin, Globe, Linkedin, Twitter, Github } from 'lucide-react'
import { label } from 'framer-motion/client'


const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  // { label: 'Products', path: '/products' },
  {label: 'Library', path: '/library'},
  { label: 'News', path: '/news' },
  { label: 'Careers',   path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

const capabilities = [
  'Atmospheric Intelligence',
  'Geospatial Analytics',
  'Lightning Intelligence',
  'Climate Risk Analytics',
  'Remote Sensing',
  'AI/ML Forecasting',
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#020617] via-[#081120] to-[#0a2540] border-t border-white/5">
      {/* Main footer */}
      <div className="section-padding container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                   src="\Atmospatial_Analytics_Pvt_Ltd_logo.png"
                   alt="Atmospatial Logo"
                   className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
                />
              <div>
                <div className="text-sm font-bold text-white tracking-wide">ATMOSPATIAL</div>
                <div className="text-[9px] font-medium text-sky/60 tracking-widest uppercase">Analytics Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mt-4 mb-6">
              Transforming atmospheric data into actionable intelligence through AI-driven geospatial analytics.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg border border-white/10 text-white/40 hover:text-sky hover:border-sky/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg border border-white/10 text-white/40 hover:text-sky hover:border-sky/30 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg border border-white/10 text-white/40 hover:text-sky hover:border-sky/30 transition-all"
                aria-label="Website"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-s font-semibold tracking-[0.2em] uppercase text-gold/80 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-s text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-s font-semibold tracking-[0.2em] uppercase text-gold/80 mb-5">Capabilities</h4>
            <ul className="space-y-3">
              {capabilities.map((cap) => (
                <li key={cap} className="text-s text-white/50">{cap}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold/80 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-sky mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">
                  Visakhapatnam, Andhra Pradesh, India
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-sky mt-0.5 shrink-0" />
                <a
                  href="mailto:atmospatialanalyticsofficial@gmail.com"
                  className="text-sm text-white/50 hover:text-sky transition-colors"
                >
                  atmospatialanalyticsofficial@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Globe size={16} className="text-sky mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">atmospatial.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>


      {/* Bottom bar */}
     <div className="border-t border-white/5">
            <div className="section-padding container-max py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-white/30">
                © {new Date().getFullYear()} Atmospatial Analytics Private Limited. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  to="/privacy-policy"
                  className="text-xs text-white/25 hover:text-white/50 transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="text-white/15" aria-hidden="true">·</span>
                <Link
                  to="/terms-and-conditions"
                  className="text-xs text-white/25 hover:text-white/50 transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
                <span className="text-white/15 hidden sm:inline" aria-hidden="true">·</span>
                <p className="text-xs text-white/20 hidden sm:block">
                  CIN: Under Registration · Visakhapatnam, India
                </p>
              </div>
            </div>
          </div>
    </footer>
  )
}