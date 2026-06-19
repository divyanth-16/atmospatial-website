import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import {
  FlaskConical, Cpu, Database, Layers, TrendingUp, Shield,
  Satellite, Cloud, Globe, ArrowRight, ChevronDown,
  Target, Eye, Database as DatabaseIcon, ShieldCheck,
  Lightbulb, Award, Users, Leaf, ArrowDown
} from 'lucide-react'

/* ─── Tokens (matches Home.jsx) ─── */
// Primary Blue:  #153E8A
// Mid Blue:      #1E5BBD
// Gold:          #C69214
// Light bg:      #EEF6FF
// Dark Text:     #0F2557
// Body Text:     #374151

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

function SectionLabel({ children, align = 'left' }) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.25em] mb-4 ${align === 'center' ? 'text-center' : ''}`}
      style={{ color: '#C69214' }}
    >
      {children}
    </p>
  )
}

/* ─── Data ─── */
const differentiators = [
  { icon: FlaskConical, title: 'Scientific Expertise', desc: 'Grounded in atmospheric and space science research, not just software engineering.' },
  { icon: Cloud, title: 'Atmospheric Intelligence', desc: 'Deep modelling of convection, thermodynamics, and mesoscale weather systems.' },
  { icon: Cpu, title: 'AI + Climate Analytics', desc: 'Machine learning layered on physics-based models for sharper, more reliable forecasts.' },
  { icon: Satellite, title: 'Remote Sensing & GIS', desc: 'Satellite and geospatial data fused into a single decision-ready intelligence layer.' },
  { icon: Database, title: 'Research-to-Impact Approach', desc: 'Every product begins as validated science before it becomes a deployable tool.' },
  { icon: Globe, title: 'India-Focused Solutions', desc: 'Models calibrated for Indian atmospheric systems — monsoon, coastal, and orographic dynamics.' },
]

const workflow = [
  { label: 'Data Collection', desc: 'Satellite, radar, and ground sensor streams ingested in real time.' },
  { label: 'Atmospheric Analysis', desc: 'Physical modelling of atmospheric state and evolution.' },
  { label: 'AI Modelling', desc: 'Deep learning layered on physics-based forecasts for precision.' },
  { label: 'Geospatial Intelligence', desc: 'Outputs mapped to exact locations, assets, and administrative units.' },
  { label: 'Decision Support', desc: 'Intelligence delivered as clear, actionable guidance.' },
  { label: 'Climate Resilience', desc: 'Better decisions compound into long-term resilience.' },
]

const values = [
  { icon: Award, title: 'Scientific Integrity', desc: 'We publish, validate, and stand behind the science underneath every product we ship.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We pursue the harder, more rigorous approach when it produces a better answer.' },
  { icon: ShieldCheck, title: 'Reliability', desc: 'Systems that governments and enterprises depend on must work when it matters most.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Our mission is climate resilience — our own practices aim for the same standard.' },
  { icon: Users, title: 'Collaboration', desc: 'We build with disaster managers, farmers, and planners — not just for them.' },
]

export default function About() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <div className="overflow-x-hidden" style={{ background: '#ffffff', color: '#0F2557' }}>

      {/* ══════════════════════════════
          1 — HERO
      ══════════════════════════════ */}
    <section
  className="relative min-h-[80vh] flex items-center justify-center bg-white pt-40 pb-10 px-6 overflow-hidden"
>
  {/* Left Satellite */}
  <motion.img
    src="/satellite1.png"
    alt=""
    aria-hidden="true"
    className="
      hidden lg:block
      absolute
      left-[-120px]
      top-[30%]
      w-[220px]
xl:w-[280px]
2xl:w-[380px]
      -rotate-[20deg]
      pointer-events-none
      select-none
    "
    animate={{
      y: [0, -15, 0],
      rotate: [-20, -17, -20],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Right Satellite */}
  <motion.img
    src="/satellite2.png"
    alt=""
    aria-hidden="true"
    className="
      hidden lg:block
      absolute
      right-[-120px]
      bottom-[25%]
     w-[220px]
xl:w-[280px]
2xl:w-[380px]
      rotate-[20deg]
      pointer-events-none
      select-none
    "
    animate={{
      y: [0, 15, 0],
      rotate: [20, 23, 20],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto text-center relative z-10"
  >
    {/* Label */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="text-sm font-semibold uppercase tracking-[0.25em] mb-8"
      style={{ color: '#C69214' }}
    >
      Company
    </motion.p>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="font-black tracking-tight mb-10"
      style={{
        fontSize: 'clamp(4rem,10vw,7rem)',
        color: '#0F2557',
        lineHeight: 1,
      }}
    >
      About
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mx-auto leading-relaxed"
      style={{
        maxWidth: '850px',
        fontSize: 'clamp(1.15rem,2vw,1.6rem)',
        color: '#374151',
      }}
    >
      Atmospatial Analytics is an atmospheric intelligence company
      focused on climate resilience through artificial intelligence,
      remote sensing, geospatial analytics, and scientific weather
      intelligence. We transform complex environmental data into
      actionable insights for governments, industries, and communities.
    </motion.p>
  </motion.div>
</section>


      {/* ══════════════════════════════
          2 — OUR STORY
          Asymmetrical: big type left, animated gold line, story right
      ══════════════════════════════ */}
      <section className="py-28 px-6" style={{ background: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="grid md:grid-cols-[1fr_auto_1.3fr] gap-10 md:gap-14">

            {/* Big typography left */}
            <motion.div variants={fadeUp}>
              <SectionLabel>How We Began</SectionLabel>
              <h2
                className="font-black leading-[1.1] text-#0F2557 text-6xl"
              >
                Science First.
                <br />
                Impact Driven.
              </h2>
            </motion.div>

            {/* Animated gold vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="hidden md:block w-px"
              style={{ background: 'linear-gradient(to bottom, transparent, #C69214, transparent)', transformOrigin: 'top' }}
            />

            {/* Story content right */}
            <motion.div variants={fadeUp} className="space-y-5">
              <p className="text-xl leading-relaxed" style={{ color: '#374151' }}>
                Atmospatial Analytics was founded with a clear vision: that climate resilience
                begins with intelligence, not guesswork.
              </p>
              <p className="leading-relaxed" style={{ color: '#6B7280' }}>
                We exist to bridge the gap between rigorous atmospheric research and the
                real-world decisions that governments, enterprises, and communities make every day.
                Raw satellite data and climate models are valuable only when they translate into
                clarity at the moment a decision is needed.
              </p>
              <p className="leading-relaxed" style={{ color: '#6B7280' }}>
                Our focus remains India-specific — building for the monsoon variability, coastal
                exposure,lightning risk and natural disasters that define the country's climate challenges, rather
                than adapting generic global models after the fact.
              </p>
            </motion.div>

          </AnimatedSection>
        </div>
      </section>


      {/* ══════════════════════════════
          3 — MISSION & VISION
          Interactive split, hover glow + expanding gold line
      ══════════════════════════════ */}
      <section className=" px-6" style={{ background: 'linear-gradient(to bottom, #EEF6FF, #ffffff)' }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="grid md:grid-cols-2">

            {/* Mission */}
            <motion.div
              variants={fadeUp}
              whileHover="hover"
              className="relative p-10 md:p-14 group cursor-default"
            >
              {/* Hover glow */}
              <motion.div
                variants={{ hover: { opacity: 1 } }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 30% 30%, rgba(21,62,138,0.25), transparent 75%)'}}
              />
              <div className="relative z-10">
                <Target size={26} style={{ color: '#153E8A' }} className="mb-6" />
                <h3 className="text-4xl font-bold mb-4" style={{ color: '#0F2557' }}>Mission</h3>
                <p className="leading-relaxed text-xl text-black">
                  Deliver AI-powered atmospheric and geospatial intelligence that enables
                  proactive climate decisions.
                </p>
                {/* Expanding gold line */}
                <motion.div
                  variants={{ hover: { width: '144px' } }}
                  initial={{ width: '24px' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="h-0.5 rounded-full mt-7"
                  style={{ background: '#C69214' }}
                />
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeUp}
              whileHover="hover"
              className="relative p-10 md:p-14 group cursor-default md:border-l"
              style={{ borderColor: '#E5ECF8' }}
            >
              <motion.div
                variants={{ hover: { opacity: 1 } }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 pointer-events-none"
                style={{ background:  'radial-gradient(circle at 70% 30%, rgba(198,146,20,0.18), transparent 75%)' }}
              />
              <div className="relative z-10">
                <Eye size={26} style={{ color: '#C69214' }} className="mb-6" />
                <h3 className="text-4xl font-bold mb-4" style={{ color: '#0F2557' }}>Vision</h3>
                <p className="leading-relaxed text-xl">
                  Become India's leading climate intelligence company — supporting resilient
                  communities, industries, and governments.
                </p>
                <motion.div
                  variants={{ hover: { width: '144px' } }}
                  initial={{ width: '24px' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="h-0.5 rounded-full mt-7"
                  style={{ background: '#C69214' }}
                />
              </div>
            </motion.div>

          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════
          5 — WHAT MAKES US DIFFERENT
          Vertical timeline, gold spine, scroll reveal
      ══════════════════════════════ */}
     <section
  className="py-16 overflow-hidden"
  style={{
    background: "linear-gradient(to bottom, #EEF6FF, #E6F0FB)",
  }}
>
  <div className="text-center mb-16 px-6">
    <SectionLabel align="center">
      What Makes Us Different
    </SectionLabel>

    <h2
      className="font-black"
      style={{
        fontSize: "clamp(2rem,4vw,3.2rem)",
        color: "#0F2557",
      }}
    >
      A Different Kind of Climate Company
    </h2>
  </div>

  {/* Moving Cards */}
  <div className="relative">

    {/* Left Fade */}
    <div
      className="absolute left-0 top-0 bottom-0 w-32 z-20"
      style={{
        background:
          "linear-gradient(to right,#EEF6FF,transparent)",
      }}
    />

    {/* Right Fade */}
    <div
      className="absolute right-0 top-0 bottom-0 w-32 z-20"
      style={{
        background:
          "linear-gradient(to left,#E6F0FB,transparent)",
      }}
    />

    <motion.div
      className="flex gap-8 w-max"
      animate={{
        x: ["0%", "-50%"],
      }}
      transition={{
  x: {
    repeat: Infinity,
    repeatType: "loop",
    duration: 40,
    ease: "linear",
  },
}}
    >
      {[...differentiators, ...differentiators].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
              shrink-0
              w-[340px]
              h-[460px]
              rounded-[28px]
              p-8
              relative
              overflow-hidden
              border
            "
            style={{
              background: "#ffffff",
              borderColor: "rgba(21,62,138,0.08)",
              boxShadow:
                "0 25px 60px rgba(15,37,87,0.08)",
            }}
          >
            {/* Blue glow */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, rgba(21,62,138,0.10), transparent 65%)",
              }}
            />

            {/* Gold glow */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 80% 20%, rgba(198,146,20,0.08), transparent 70%)",
              }}
            />

            <div className="relative z-10 h-full flex flex-col">
              
              <div
                className="text-7xl font-black mb-8"
                style={{
                  color: "#153E8A",
                  opacity: 0.12,
                }}
              >
                0{(index % 6) + 1}
              </div>

              <h3
                className="font-bold text-2xl mb-6"
                style={{ color: "#0F2557" }}
              >
                {item.title}
              </h3>

              <p
                className="text-lg leading-relaxed"
                style={{ color: "#6B7280" }}
              >
                {item.desc}
              </p>

              <div className="mt-auto pt-8">
                <div
                  className="h-1 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg,#153E8A,#C69214)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        )
      )}
    </motion.div>
  </div>
</section>


      {/* ══════════════════════════════
          6 — OUR APPROACH
          Circular / connected workflow
      ══════════════════════════════ */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <AnimatedSection className="text-center mb-4">
      <motion.div variants={fadeUp}>
        <SectionLabel align="center">
          Our Approach
        </SectionLabel>

        <h2
          className="font-black"
          style={{
            fontSize: 'clamp(2rem,4vw,3.2rem)',
            color: '#0F2557'
          }}
        >
          From Raw Data to Resilience
        </h2>
      </motion.div>
    </AnimatedSection>

    {/* Process Map */}
    <AnimatedSection>

      {/* Top Row */}
      <div className="grid md:grid-cols-3 gap-8 items-center">

        {workflow.slice(0, 3).map((step, i) => (
          <motion.div
            key={step.label}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="
              bg-white
              border
              rounded-2xl
              p-6
              text-center
              relative
            "
            style={{
              borderColor: 'rgba(21,62,138,0.10)',
              boxShadow: '0 10px 30px rgba(15,37,87,0.06)'
            }}
          >
            <div
              className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
              style={{
                background: 'rgba(21,62,138,0.08)'
              }}
            >
              <span
                className="font-bold"
                style={{ color: '#153E8A' }}
              >
                0{i + 1}
              </span>
            </div>

            <h3
              className="font-bold mb-3 text-xl"
              style={{ color: '#0F2557' }}
            >
              {step.label}
            </h3>

            <p
              className="text-sm leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Arrow Down */}
      <div className="flex justify-center py-10">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(198,146,20,0.12)'
          }}
        >
          <ArrowDown
            size={20}
            style={{ color: '#C69214' }}
          />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid md:grid-cols-3 gap-8 items-center">

        {workflow.slice(3, 6).map((step, i) => (
          <motion.div
            key={step.label}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="
              bg-white
              border
              rounded-2xl
              p-6
              text-center
            "
            style={{
              borderColor: 'rgba(21,62,138,0.10)',
              boxShadow: '0 10px 30px rgba(15,37,87,0.06)'
            }}
          >
            <div
              className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
              style={{
                background: 'rgba(21,62,138,0.08)'
              }}
            >
              <span
                className="font-bold"
                style={{ color: '#153E8A' }}
              >
                0{i + 4}
              </span>
            </div>

            <h3
              className="font-bold mb-3 text-xl"
              style={{ color: '#0F2557' }}
            >
              {step.label}
            </h3>

            <p
              className="text-sm leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </AnimatedSection>

  </div>
</section>



      {/* ══════════════════════════════
          7 — VALUES
          Horizontal, expand on hover
      ══════════════════════════════ */}
      {/* <section className="py-16 px-6" style={{ background: 'linear-gradient(to bottom, #ffffff, #EEF6FF)' }}>
        <div className="max-w-6xl mx-auto">

          <AnimatedSection className="text-center mb-4">
            <motion.div variants={fadeUp}>
              <SectionLabel align="center">What Guides Us</SectionLabel>
              <h2 className="font-black" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0F2557' }}>
                Our Values
              </h2>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="divide-y md:divide-y-0 md:flex" style={{ borderColor: '#E5ECF8' }}>
            {values.map((val) => {
              const Icon = val.icon
              return (
                <motion.div
                  key={val.title}
                  variants={fadeUp}
                  whileHover="hover"
                  className="relative flex-1 py-8 md:py-10 px-4 text-center cursor-default md:border-r last:border-r-0"
                  style={{ borderColor: '#E5ECF8' }}
                >
                  <motion.div
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 50% 0%, rgba(198,146,20,0.08), transparent 70%)' }}
                  />
                  <div className="relative z-10">
                    <Icon size={22} style={{ color: '#153E8A' }} className="mx-auto mb-4" />
                    <h3 className="font-bold text-xl mb-3" style={{ color: '#0F2557' }}>{val.title}</h3>

                    <motion.div
                      variants={{ hover: { height: 'auto', opacity: 1 } }}
                      initial={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-s leading-relaxed pt-1 text-black">{val.desc}</p>
                    </motion.div>

                    <motion.div
                      variants={{ hover: { width: '40px' } }}
                      initial={{ width: '16px' }}
                      transition={{ duration: 0.35 }}
                      className="h-0.5 rounded-full mx-auto mt-4"
                      style={{ background: '#C69214' }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </AnimatedSection>
        </div>
      </section> */}


      {/* ══════════════════════════════
          8 — CTA
      ══════════════════════════════ */}
      <section className="py-28 px-6" style={{ background: 'linear-gradient(135deg, #0F2557 0%, #153E8A 60%, #1E5BBD 100%)' }}>
        <AnimatedSection>
          <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center">

            <SectionLabel align="center">Ready to Begin</SectionLabel>

            <h2
              className="font-black mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', lineHeight: 1.15 }}
            >
              Building a Climate-Resilient Future
              <br />
              <span style={{ color: '#F2D97A' }}>Through Intelligence</span>
            </h2>

            <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(200,225,255,0.82)' }}>
              Partner with us to transform atmospheric and geospatial data into meaningful action.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm"
                  style={{ background: '#C69214', color: '#0F2557', border: 'none' }}
                >
                  Contact Us <ArrowRight size={15} />
                </motion.button>
              </Link>
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 rounded-full font-bold text-sm"
                  style={{ background: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.4)' }}
                >
                  Explore Solutions
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>

    </div>
  )
}