import React from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon, ZapIcon, EyeIcon } from 'lucide-react'
import Title from './Title'

/* ─── Mini visuals ───────────────────────────────────────────────────────── */

const AIVisual = () => (
  <div className="mt-8 rounded-2xl bg-white/70 border border-gray-100 shadow-sm backdrop-blur-sm p-5 space-y-3">
    {/* before */}
    <div>
      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Before</p>
      <div className="rounded-lg bg-gray-50 border border-gray-100 px-3 py-2.5">
        <p className="text-xs text-gray-400 italic leading-relaxed">
          "Responsible for managing the sales team and hitting targets."
        </p>
      </div>
    </div>

    {/* divider with AI badge */}
    <div className="flex items-center gap-2">
      <div className="flex-1 h-px bg-gray-100" />
      <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-violet-500 to-brand-500 shadow-sm">
        <SparklesIcon className="w-3 h-3 text-white" />
        <span className="text-[10px] font-bold text-white">AI Enhanced</span>
      </div>
      <div className="flex-1 h-px bg-gray-100" />
    </div>

    {/* after */}
    <div>
      <p className="text-[10px] font-semibold text-emerald-500 uppercase tracking-widest mb-1.5">After</p>
      <div className="rounded-lg bg-emerald-50/60 border border-emerald-100 px-3 py-2.5">
        <p className="text-xs text-gray-700 leading-relaxed">
          "Led a 6-person sales team to exceed quarterly targets by{' '}
          <span className="font-semibold text-emerald-600">34%</span>, generating{' '}
          <span className="font-semibold text-emerald-600">$1.2M</span> in new revenue."
        </p>
      </div>
    </div>
  </div>
)

const ATSVisual = () => (
  <div className="mt-8 flex flex-col items-center gap-6">
    {/* Score ring */}
    <div className="relative w-28 h-28">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
        <path
          strokeDasharray="100,100"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          className="stroke-gray-100"
          strokeWidth="2.5"
          fill="none"
        />
        <motion.path
          initial={{ strokeDasharray: '0,100' }}
          whileInView={{ strokeDasharray: '93,100' }}
          transition={{ duration: 1.6, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          stroke="url(#scoreGrad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-black text-gray-900 leading-none"
        >
          93
        </motion.span>
        <span className="text-[10px] font-semibold text-gray-400 mt-0.5">ATS Score</span>
      </div>
    </div>

    {/* Metric bars */}
    <div className="w-full space-y-3">
      {[
        { label: 'Keyword Match', pct: '96%', w: 'w-[96%]', color: 'bg-emerald-400' },
        { label: 'Format Clarity', pct: '90%', w: 'w-[90%]', color: 'bg-brand-400' },
        { label: 'Readability',    pct: '94%', w: 'w-[94%]', color: 'bg-violet-400' },
      ].map(({ label, pct, w, color }) => (
        <div key={label}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-500">{label}</span>
            <span className="text-xs font-semibold text-gray-700">{pct}</span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: pct }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
              viewport={{ once: true }}
              className={`h-full rounded-full ${color}`}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
)

const LivePreviewVisual = () => (
  <div className="mt-8 grid md:grid-cols-2 gap-4">
    {/* Editor side */}
    <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 space-y-2.5">
      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Editor</p>
      {[['Work Experience', 'bg-brand-100'], ['Education', 'bg-gray-100'], ['Skills', 'bg-gray-100'], ['Summary', 'bg-gray-100']].map(([s, c]) => (
        <div key={s} className={`flex items-center gap-2 px-3 py-2 rounded-lg ${c}`}>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <span className="text-xs text-gray-600">{s}</span>
        </div>
      ))}
    </div>

    {/* Preview side */}
    <div className="rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-brand-600 to-violet-600 h-16 p-4 flex flex-col justify-center">
        <div className="h-2.5 w-24 bg-white/40 rounded mb-1.5" />
        <div className="h-1.5 w-16 bg-white/25 rounded" />
      </div>
      <div className="p-4 space-y-2">
        <div className="h-1.5 w-full bg-gray-100 rounded" />
        <div className="h-1.5 w-5/6 bg-gray-100 rounded" />
        <div className="h-1.5 w-4/6 bg-gray-100 rounded" />
        <div className="h-px bg-gray-50 my-2" />
        <div className="h-1.5 w-3/4 bg-brand-100 rounded" />
        <div className="h-1.5 w-full bg-gray-100 rounded" />
        <div className="h-1.5 w-5/6 bg-gray-100 rounded" />
      </div>
    </div>
  </div>
)

/* ─── Cards config ───────────────────────────────────────────────────────── */

const cards = [
  {
    icon: SparklesIcon,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-500',
    tag: 'AI-Powered',
    tagBg: 'bg-violet-50 text-violet-600 border-violet-100',
    title: 'AI Resume\nEnhancement',
    description: 'Transform weak bullet points into achievement-driven statements that hiring managers notice.',
    Visual: AIVisual,
    col: 'md:col-span-1',
    glow: 'from-violet-500/5 to-brand-500/5',
  },
  {
    icon: ZapIcon,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
    tag: 'ATS Ready',
    tagBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    title: 'ATS\nOptimization',
    description: 'Score your resume against any job description and close keyword gaps in seconds.',
    Visual: ATSVisual,
    col: 'md:col-span-1',
    glow: 'from-emerald-500/5 to-teal-500/5',
  },
  {
    icon: EyeIcon,
    iconBg: 'bg-brand-50',
    iconColor: 'text-brand-500',
    tag: 'Real-time',
    tagBg: 'bg-brand-50 text-brand-600 border-brand-100',
    title: 'Live Resume Preview',
    description: 'Edit on the left, see the formatted result on the right — instantly, as you type.',
    Visual: LivePreviewVisual,
    col: 'md:col-span-2',
    glow: 'from-brand-500/5 to-violet-500/5',
  },
]

/* ─── Section ────────────────────────────────────────────────────────────── */

const Testimonial = () => (
  <section id="testimonials" className="py-28 bg-white relative overflow-hidden">

    {/* Background ambient glows */}
    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-500/4 blur-[120px] pointer-events-none" />
    <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-500/4 blur-[120px] pointer-events-none" />

    <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-semibold mb-6 shadow-sm"
        >
          <SparklesIcon className="w-3.5 h-3.5" />
          <span>Product Showcase</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Title
            title="Why This Resume Builder Stands Out"
            description="Three core capabilities — built to get your resume past ATS filters and in front of human eyes."
          />
        </motion.div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map(({ icon: Icon, iconBg, iconColor, tag, tagBg, title, description, Visual, col, glow }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
            className={`group relative rounded-3xl p-8 bg-white border border-gray-100
              shadow-[0_2px_16px_rgba(0,0,0,0.04)]
              hover:shadow-[0_8px_40px_rgba(99,102,241,0.09)]
              hover:-translate-y-1.5 hover:border-gray-200
              transition-all duration-400 overflow-hidden flex flex-col
              ${col}`}
          >
            {/* Card ambient glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`} />

            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-gray-50/60 blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            {/* Top row */}
            <div className="flex items-start justify-between relative z-10">
              <div className={`w-11 h-11 rounded-2xl ${iconBg} flex items-center justify-center shadow-sm`}>
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>
              <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${tagBg}`}>
                {tag}
              </span>
            </div>

            {/* Title & description */}
            <div className="mt-6 relative z-10">
              <h3 className="text-xl font-bold text-gray-900 leading-snug whitespace-pre-line mb-3">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                {description}
              </p>
            </div>

            {/* Visual */}
            <div className="relative z-10 flex-1">
              <Visual />
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
)

export default Testimonial
