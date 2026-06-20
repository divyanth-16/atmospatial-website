import { useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import {
  Zap, Cloud, Globe, BarChart3, Satellite, Activity, Shield, Wind,
  ArrowRight, ChevronDown, Layers, Cpu, Database, TrendingUp,
  Wheat, Building2, Plane, Anchor, FlaskConical, Sun
} from 'lucide-react'

/* ─── Tokens ─── */
// Primary Blue:  #153E8A
// Gold:          #C69214
// Light Blue bg: #EEF6FF
// Mid Blue:      #1E5BBD
// Text Dark:     #0F2557
// Text Body:     #374151



/* ─── Animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Data ─── */
const capabilities = [
  {
    icon: Cloud,
    label: 'Atmospheric Intelligence',
    desc: 'Real-time analysis of atmospheric dynamics, thermodynamics, and mesoscale convective systems.',
    num: '01',
  },
  {
    icon: Globe,
    label: 'Geospatial Analytics',
    desc: 'Multi-source satellite data fusion with GIS layers for precise spatial decision intelligence.',
    num: '02',
  },
  {
    icon: Satellite,
    label: 'Remote Sensing',
    desc: 'INSAT-3D, MODIS, Sentinel, and Landsat data processing for land-cover, vegetation, and flood mapping.',
    num: '03',
  },
  {
    icon: BarChart3,
    label: 'Climate Intelligence',
    desc: 'Long-range climate trend analysis, anomaly detection, and seasonal forecasting at district scale.',
    num: '04',
  },
  {
    icon: Cpu,
    label: 'AI/ML Forecasting',
    desc: 'Deep learning models for hyperlocal weather, monsoon variability, and cyclone track prediction.',
    num: '05',
  },
  {
    icon: Zap,
    label: 'Lightning Intelligence',
    desc: 'AI-powered lightning nowcasting with 30-min lead time and district-level fatality risk mapping.',
    num: '06',
  },
  {
    icon: Shield,
    label: 'Disaster Analytics',
    desc: 'Integrated early warning systems for floods, cyclones, and heatwaves with geospatial alert delivery.',
    num: '07',
  },
  {
    icon: Activity,
    label: 'Climate Risk Assessment',
    desc: 'Return-period analysis, exposure mapping, and climate risk scoring for insurance and planning.',
    num: '08',
  },
]

const capabilityGroups = {
  group1: capabilities.slice(0, 4),
  group2: capabilities.slice(4, 8),
}

const industries = [
  { icon: Wheat,       label: 'Agriculture',         desc: 'Crop stress alerts, monsoon advisory, irrigation scheduling.' },
  { icon: Shield,      label: 'Disaster Management', desc: 'Multi-hazard early warning and evacuation intelligence.' },
  { icon: Sun,         label: 'Renewable Energy',    desc: 'Solar irradiance and wind resource potential mapping.' },
  { icon: Building2,   label: 'Smart Cities',        desc: 'Urban heat islands, flood risk, and air quality monitoring.' },
  { icon: Plane,       label: 'Aviation',            desc: 'Turbulence forecasting and convective weather alerts.' },
  { icon: Anchor,      label: 'Maritime',            desc: 'Port weather windows, cyclone routing, sea-state forecasting.' },
  { icon: FlaskConical,label: 'Research',            desc: 'High-resolution WRF datasets and atmospheric reanalysis access.' },
  { icon: TrendingUp,  label: 'Insurance',           desc: 'Parametric product pricing and weather-indexed risk layers.' },
  { icon: Globe,       label: 'Government',          desc: 'Policy-grade climate intelligence and geospatial decision support.' },
]

const whyItems = [
  { icon: FlaskConical, title: 'Scientific Foundation',    desc: 'Built by atmospheric scientists and remote sensing researchers with decades of domain expertise.' },
  { icon: Cpu,          title: 'AI + Atmospheric Science', desc: 'We merge rigorous meteorological science with modern machine learning — not just algorithms on weather data.' },
  { icon: Database,     title: 'Research-to-Product',      desc: 'Every solution originates in peer-reviewed research and validated against observational ground truth.' },
  { icon: Layers,       title: 'India-Optimised',          desc: 'Models and datasets calibrated for Indian atmospheric systems — monsoon, Bay of Bengal, Eastern Ghats.' },
  { icon: TrendingUp,   title: 'Scalable Architecture',    desc: 'Cloud-native, API-first solutions deployable from a single district to national scale.' },
  { icon: Shield,       title: 'Affordable Intelligence',  desc: 'Enterprise-grade climate analytics accessible to state agencies, SMEs, and NGOs.' },
]

/* ─── Label component ─── */
function SectionLabel({ children }) {
  return (
    <p style={{ color: '#C69214', letterSpacing: '0.25em' }}
       className="text-xs font-bold uppercase tracking-widest mb-4">
      {children}
    </p>
  )
}

/* ─── Main export ─── */
export default function Home() {
  const heroRef = useRef(null)
  const [activeGroup, setActiveGroup] = useState('group1')
  const [activeCapability, setActiveCapability] = useState(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY       = useTransform(scrollYProgress, [0, 1], [0, 60])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <div className="overflow-x-hidden" style={{ background: '#000000', color: '#0F2557' }}>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Earth image */}
        <img
          src="/earth-nasa.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.92 }}
        />

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0" style={{ background: 'rgba(8,20,60,0.42)' }} />

        {/* Smooth gradient transition into the next light section */}

        {/* Hero content */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-32 pb-24"
        >
          {/* Pill label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-10"
            style={{
              border: '1px solid rgba(198,146,20,0.55)',
              background: 'rgba(198,146,20,0.10)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#C69214' }} />
            <span className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color: '#F2D97A' }}>
              CLIMATE • WEATHER • GEOSPATIAL
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="font-black leading-[1.06] tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: '#ffffff' }}
          >
            AI-Powered{' '}
            <span style={{ color: '#7EC8FF' }}>Atmospheric and Geospatial</span>
            <br />
            Intelligence
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-7 text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'rgba(200,225,255,0.88)' }}
          >
            Climate Intelligence, Geospatial Analytics, Remote Sensing,
            and Decision Support Systems for a Climate-Resilient Future.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm"
                style={{ background: '#153E8A', color: '#ffffff', border: '1px solid #1E5BBD' }}
              >
                Explore Solutions <ArrowRight size={15} />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 rounded-full font-bold text-sm"
                style={{
                  background: 'transparent',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.45)',
                }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-20 flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Scroll to explore
            </span>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
              <ChevronDown size={18} style={{ color: 'rgba(255,255,255,0.5)' }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>


      {/* ══════════════════════════════
          COMPANY OVERVIEW
          Split layout: headline left, body right
      ══════════════════════════════ */}
      <section
        className="pt-20  pb-18 px-6"
        style={{ background: 'linear-gradient(to bottom, #EEF6FF,#ffffff)' }}
      >
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="grid md:grid-cols-2 gap-14 items-center">

            {/* Left: heading block */}
            <motion.div variants={fadeUp}>
              <SectionLabel>Who We Are</SectionLabel>
              <h2
                className="font-black leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0F2557' }}
              >
                India's AI Atmospheric Intelligence Company
              </h2>
              {/* Gold rule */}
              <div className="w-16 h-1 rounded-full" style={{ background: '#C69214' }} />
            </motion.div>

            {/* Right: body copy */}
            <motion.div variants={fadeUp}>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#374151' }}>
                Atmospatial Analytics is an emerging deep-tech firm combining rigorous atmospheric science,
                remote sensing expertise, and AI/ML capabilities to build climate intelligence systems
                for governments, enterprises, agriculture, and disaster management authorities across India.
              </p>
              <p className="leading-relaxed" style={{ color: '#6B7280' }}>
                We translate raw satellite data and atmospheric models into decisions that matter — from
                early flood warnings to climate risk scoring for financial institutions.
              </p>
            </motion.div>

          </AnimatedSection>
        </div>
      </section>


      {/* ══════════════════════════════
          CORE CAPABILITIES
          Alternating left-right list, typography-driven
      ══════════════════════════════ */}
     <section className="pt-20 pb-20 px-6" style={{ background: '#ffffff' }}>
  <div className="max-w-7xl mx-auto">
{/* Header */}
<AnimatedSection className="mb-20 text-center">
  <motion.div variants={fadeUp}>
    <SectionLabel>What We Do</SectionLabel>

    <h2
      className="font-black"
      style={{
        fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
        color: '#0F2557'
      }}
    >
      Core Capabilities
    </h2>

    <p
      className="mt-4 max-w-2xl mx-auto text-lg"
      style={{ color: '#6B7280' }}
    >
      Integrating atmospheric science, geospatial intelligence,
      remote sensing, climate analytics and AI-driven forecasting
      into a unified decision-support ecosystem.
    </p>
  </motion.div>
</AnimatedSection>

{/* Main Content */}
<div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start">

  {/* LEFT SIDE */}
  <AnimatedSection>

    {/* GROUP TABS */}

    <div className="flex gap-3 mb-10">

      <button
        onClick={() => {
          setActiveGroup('group1')
          setActiveCapability(null)
        }}
        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
          activeGroup === 'group1'
            ? 'text-white'
            : 'text-blue-900'
        }`}
        style={{
          background:
            activeGroup === 'group1'
              ? '#153E8A'
              : '#EEF6FF'
        }}
      >
        Atmospheric & Geospatial
      </button>

      <button
        onClick={() => {
          setActiveGroup('group2')
          setActiveCapability(0)
        }}
        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
          activeGroup === 'group2'
            ? 'text-white'
            : 'text-blue-900'
        }`}
        style={{
          background:
            activeGroup === 'group2'
              ? '#153E8A'
              : '#EEF6FF'
        }}
      >
        Forecasting & Risk
      </button>

    </div>

    {(capabilityGroups[activeGroup]).map((cap, index) => (

      <motion.div
        key={cap.label}
        variants={fadeUp}
        className="border-b py-6 group cursor-pointer"
        style={{ borderColor: '#E5ECF8' }}
      >

        <button
          className="w-full text-left"
          onClick={() =>
  setActiveCapability(
    activeCapability === index ? null : index
  )
}
        >

       <div className="flex gap-5 group-hover:text-[#C69214]">

  <span
    className="text-5xl font-black shrink-0"
  >
    {cap.num}
  </span>

  <div className="flex-1">

    <div className="flex items-center justify-between">

      <h3
        className={`
          text-xl font-bold transition-colors duration-300
          group-hover:text-[#C69214]
          ${
            activeCapability === index
              ? 'text-blue-900'
              : 'text-blue-800'
          }
        `}
      >
        {cap.label}
      </h3>

      <ChevronDown
        size={20}
        className={`
          opacity-0 group-hover:opacity-100
          transition-all duration-300 shrink-0
          ${
            activeCapability === index
              ? 'rotate-180 text-[#C69214]'
              : 'rotate-0 text-blue-800'
          }
        `}
      />

    </div>

    {activeCapability === index && (
      <motion.p
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: 1,
          height: 'auto'
        }}
        className="mt-4 leading-relaxed"
        style={{ color: '#6B7280' }}
      >
        {cap.desc}
      </motion.p>
    )}

  </div>

</div>

        </button>

      </motion.div>

    ))}

  </AnimatedSection>

  {/* RIGHT SIDE */}

  <AnimatedSection>

    <motion.div
      className="sticky top-30 mt-20"
      animate={{
        y: [0, -8, 0]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >

      <motion.div
        whileHover={{
          scale: 1.02
        }}
        className="
          overflow-hidden
          rounded-xl
          border
          border-[#E5ECF8]
        "
        style={{
  boxShadow:
    '0 30px 80px rgba(15, 37, 87, 0.15), 0 10px 30px rgba(0,0,0,0.08)'
}}
      >

        <img
          src={
            activeGroup === 'group1'
              ? 'fourth.png'
              : 'third.png'
          }
          alt="Capability Visualization"
          className="w-full h-auto object-cover "
        />

      </motion.div>

    </motion.div>

  </AnimatedSection>

</div>

  </div>
</section>



      {/* ══════════════════════════════
          INDUSTRIES
          3-column grid, icon + label + desc, no heavy boxes
      ══════════════════════════════ */}
      <section
        className="py-16 px-6"
        style={{ background: 'linear-gradient(to bottom, #EEF6FF, #E6F0FB)' }}
      >
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>

            <motion.div variants={fadeUp} className="text-center mb-16">
              <SectionLabel>Who We Serve</SectionLabel>
              <h2
                className="font-black"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0F2557' }}
              >
                Industries We Enable
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              {industries.map((ind) => {
                const Icon = ind.icon
                return (
                  <motion.div
  key={ind.label}
  variants={fadeUp}
  whileHover={{ y: -4 }}
  className="
    flex gap-4 items-start group
    p-5 rounded-2xl
    transition-all duration-300
    border border-[#C69214]/30
  "
>
                    {/* Icon */}
                    <div
                      className="
  w-9 h-9 rounded-lg flex items-center justify-center
  shrink-0 mt-0.5 transition-all duration-300
  bg-blue-100 group-hover:bg-gold/50
"
                      
                    >
                      <Icon size={16} style={{ color: '#153E8A' }} />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-bold mb-1 text-lg text-#0F2557 group-hover:text-[#C69214]">
                        {ind.label}
                      </h3>
                      <p className="text-s leading-relaxed group-hover:text-[#C69214]">
                        {ind.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

          </AnimatedSection>
        </div>
      </section>


      {/* ══════════════════════════════
          WHY ATMOSPATIAL
          Timeline-style vertical layout
      ══════════════════════════════ */}
      <section className="py-16 px-6" style={{ background: '#ffffff' }}>
        <div className="max-w-5xl mx-auto">

          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-20">
              <SectionLabel>Our Advantage</SectionLabel>
              <h2
                className="font-black"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0F2557' }}
              >
                Why Atmospatial
              </h2>
            </motion.div>

            {/* Timeline rows */}
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                style={{ background: 'linear-gradient(to bottom, transparent, #C69214 20%, #C69214 80%, transparent)' }}
              />

              <div className="space-y-14">
                {whyItems.map((item, i) => {
                  const Icon = item.icon
                  const isLeft = i % 2 === 0
                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      className={`relative flex items-start gap-8 md:gap-0
                        ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
                        pl-12 md:pl-0
                      `}
                    >
                      {/* Dot on timeline */}
                      <div
                        className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 z-10"
                        style={{ background: '#ffffff', borderColor: '#C69214', top: '4px' }}
                      />

                      {/* Content side */}
                      <div className={`md:w-1/2 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                        <div
                          className={`inline-flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}
                        >
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                            style={{ background: 'rgba(21,62,138,0.08)' }}
                          >
                            <Icon size={16} style={{ color: '#153E8A' }} />
                          </div>
                          <h3 className="font-bold text-2xl" style={{ color: '#C69214' }}>
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-xl leading-relaxed" style={{ color: '#6B7280' }}>
                          {item.desc}
                        </p>
                      </div>

                      {/* Spacer on the other side */}
                      <div className="hidden md:block md:w-1/2" />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* ══════════════════════════════
          CTA BANNER
      ══════════════════════════════ */}
      <section
        className="py-28 px-6"
        style={{ background: 'linear-gradient(135deg, #0F2557 0%, #153E8A 60%, #1E5BBD 100%)' }}
      >
        <AnimatedSection>
          <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center">

            <SectionLabel>Ready to Begin</SectionLabel>

            <h2
              className="font-black mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', lineHeight: 1.15 }}
            >
              Build Climate-Resilient Decisions
              <br />
              <span style={{ color: '#F2D97A' }}>With Atmospheric Intelligence</span>
            </h2>

            <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(200,225,255,0.82)' }}>
              Whether you're a government agency, a research institution, or an enterprise —
              we're ready to collaborate and deliver intelligence that matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm"
                  style={{ background: '#C69214', color: '#0F2557', border: 'none' }}
                >
                  Get In Touch <ArrowRight size={15} />
                </motion.button>
              </Link>
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 rounded-full font-bold text-sm"
                  style={{
                    background: 'transparent',
                    color: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.4)',
                  }}
                >
                  View Products
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>

    </div>
  )
}