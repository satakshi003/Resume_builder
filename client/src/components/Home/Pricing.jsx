import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, BrainCircuitIcon, DownloadIcon, HeartIcon, ZapIcon, CheckIcon, ArrowRightIcon, FileTextIcon, ScanSearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── Floating sparkle dots for the AI card ───────────────────────── */
const Dot = ({ style }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-violet-300/60"
    animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
    style={style}
  />
);

/* ─── Mini AI prompt UI ───────────────────────────────────────────── */
const AIChat = () => (
  <div className="mt-6 space-y-2.5">
    {/* prompt bubble */}
    <div className="flex justify-end">
      <div className="bg-white/10 border border-white/15 text-white/70 text-xs px-3 py-2 rounded-2xl rounded-br-sm max-w-[80%] leading-relaxed">
        Rewrite this bullet point to be more impactful…
      </div>
    </div>
    {/* AI response bubble */}
    <div className="flex gap-2 items-end">
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-brand-400 flex items-center justify-center shrink-0">
        <SparklesIcon className="w-3 h-3 text-white" />
      </div>
      <div className="bg-white/15 border border-white/20 text-white/90 text-xs px-3 py-2.5 rounded-2xl rounded-bl-sm max-w-[82%] leading-relaxed">
        <span className="text-emerald-300 font-semibold">"Led cross-functional team of 8, </span>
        <span>delivering a product that grew revenue by </span>
        <span className="text-emerald-300 font-semibold">34%</span>
        <span> in Q3."</span>
      </div>
    </div>
    {/* typing indicator */}
    <div className="flex items-center gap-1.5 pl-8">
      <div className="flex gap-1">
        {[0, 0.2, 0.4].map((d, i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-violet-300/50"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: d }}
          />
        ))}
      </div>
      <span className="text-[10px] text-white/40">AI is thinking…</span>
    </div>
  </div>
);

/* ─── Mini resume mockup for builder card ─────────────────────────── */
const ResumePreview = () => (
  <div className="mt-5 rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden">
    <div className="h-10 bg-gradient-to-r from-brand-500 to-violet-500 px-4 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-white/50" />
      <div className="h-1.5 w-20 bg-white/30 rounded" />
    </div>
    <div className="p-3 space-y-2">
      <div className="h-2 w-3/4 bg-gray-100 rounded" />
      <div className="h-2 w-full bg-gray-100 rounded" />
      <div className="h-2 w-5/6 bg-gray-100 rounded" />
      <div className="h-px bg-gray-50 my-2" />
      <div className="h-2 w-1/2 bg-brand-100 rounded" />
      <div className="h-2 w-full bg-gray-100 rounded" />
      <div className="h-2 w-4/5 bg-gray-100 rounded" />
    </div>
  </div>
);

/* ─── ATS score ring ──────────────────────────────────────────────── */
const ATSRing = () => (
  <div className="flex items-center gap-4 mt-5">
    <div className="relative w-16 h-16 shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
        <path strokeDasharray="100,100"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          stroke="#e0e7ff" strokeWidth="3" fill="none" />
        <motion.path
          initial={{ strokeDasharray: '0,100' }}
          whileInView={{ strokeDasharray: '93,100' }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.5 }}
          viewport={{ once: true }}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          stroke="url(#atsGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <defs>
          <linearGradient id="atsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-black text-gray-900 leading-none">93</span>
        <span className="text-[8px] text-gray-400 font-medium">ATS</span>
      </div>
    </div>
    <div className="flex-1 space-y-2">
      {[['Keywords', '96%'], ['Format', '90%'], ['Clarity', '94%']].map(([l, v]) => (
        <div key={l}>
          <div className="flex justify-between text-[10px] text-gray-500 mb-0.5">
            <span>{l}</span><span className="font-semibold text-gray-700">{v}</span>
          </div>
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-400 to-violet-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: v }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ─── Stats pills ─────────────────────────────────────────────────── */
const stats = [
  { icon: ZapIcon,         label: 'AI Powered',        color: 'text-violet-600 bg-violet-50 border-violet-100' },
  { icon: ScanSearchIcon,  label: 'ATS Optimized',     color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
  { icon: DownloadIcon,    label: 'PDF & DOCX Export', color: 'text-brand-600 bg-brand-50 border-brand-100' },
  { icon: FileTextIcon,    label: 'Modern Templates',  color: 'text-pink-600 bg-pink-50 border-pink-100' },
  { icon: HeartIcon,       label: 'Free to Start',     color: 'text-rose-600 bg-rose-50 border-rose-100' },
];

/* ─── Section ─────────────────────────────────────────────────────── */
const Pricing = () => (
  <section id="pricing" className="py-28 bg-[#f7f8fc] relative overflow-hidden">

    {/* Ambient blobs */}
    <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-brand-300/10 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-violet-300/10 blur-[120px] pointer-events-none" />

    {/* Subtle grid texture */}
    <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
      style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

    <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative">

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-100 text-brand-600 text-xs font-semibold mb-5 shadow-sm"
        >
          <SparklesIcon className="w-3.5 h-3.5" />
          <span>Project Features</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-4xl md:text-5xl font-black font-heading text-gray-900 tracking-tight mb-4"
        >
          What's inside{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-violet-500">
            ResumeAI
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="text-base text-gray-500 max-w-md"
        >
          A full-stack AI resume platform — built to get you past ATS filters and in front of hiring managers.
        </motion.p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">

        {/* ── Card 1: AI Hero (large, dark) ── col-span-2 */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="md:col-span-2 relative rounded-3xl p-8 overflow-hidden group
            bg-gradient-to-br from-[#1e1b4b] via-[#2d2880] to-[#3730a3]
            border border-white/10
            shadow-[0_20px_60px_-10px_rgba(99,102,241,0.35)]
            hover:shadow-[0_24px_80px_-10px_rgba(99,102,241,0.45)]
            hover:-translate-y-1.5 transition-all duration-400"
        >
          {/* Floating dots */}
          {[[12,8],[80,20],[55,55],[25,70],[70,40],[90,65],[40,30]].map(([l,t],i)=>(
            <Dot key={i} style={{ left:`${l}%`, top:`${t}%` }} />
          ))}
          {/* Glow orb */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/20 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none group-hover:bg-violet-500/30 transition-colors duration-500" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-violet-200 text-xs font-semibold mb-6">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <BrainCircuitIcon className="w-3.5 h-3.5" />
              </motion.div>
              GPT-4 Powered
            </div>

            <h3 className="text-3xl font-black font-heading text-white leading-tight mb-2">
              AI Resume<br />Assistant
            </h3>
            <p className="text-sm text-white/55 leading-relaxed max-w-sm mb-4">
              Paste a weak bullet — get back a powerful, quantified achievement. GPT-4 rewrites your resume in the language recruiters respond to.
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['ATS Keyword Analysis', 'Smart Bullet Rewriter', 'Cover Letter Builder', 'Job Match Score'].map(f => (
                <div key={f} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white/70">
                  <CheckIcon className="w-3 h-3 text-emerald-400 shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            <AIChat />

            <Link
              to="/app"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-brand-700 text-sm font-semibold
                hover:bg-brand-50 hover:gap-3 transition-all duration-200 shadow-md"
            >
              Try AI Features <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* ── Card 2: Smart Builder ── col-span-1 */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          className="relative rounded-3xl p-7 bg-white border border-gray-100
            shadow-[0_4px_24px_rgba(0,0,0,0.04)]
            hover:shadow-[0_8px_40px_rgba(99,102,241,0.1)]
            hover:-translate-y-1.5 hover:border-brand-200
            transition-all duration-300 overflow-hidden group flex flex-col"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-50 rounded-full blur-2xl opacity-60 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 flex-1">
            <div className="w-10 h-10 rounded-2xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors duration-300">
              <FileTextIcon className="w-5 h-5 text-brand-500" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-400 mb-2 block">Builder</span>
            <h3 className="text-xl font-bold font-heading text-gray-900 leading-snug mb-2">Smart Resume<br />Builder</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              A distraction-free, section-by-section editor with live formatting — drag, drop, and preview as you go.
            </p>

            <ResumePreview />

            <div className="mt-4 space-y-1.5">
              {['Drag-and-drop sections', 'Live preview panel', 'Auto-save & history'].map(f => (
                <div key={f} className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckIcon className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/app"
            className="mt-6 block text-center w-full py-2.5 rounded-xl bg-brand-50 text-brand-600 text-sm font-semibold
              hover:bg-brand-100 transition-colors duration-200 relative z-10"
          >
            Explore Builder
          </Link>
        </motion.div>

        {/* ── Card 3: ATS Optimization ── col-span-1 */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
          className="relative rounded-3xl p-7 bg-white border border-gray-100
            shadow-[0_4px_24px_rgba(0,0,0,0.04)]
            hover:shadow-[0_8px_40px_rgba(16,185,129,0.08)]
            hover:-translate-y-1.5 hover:border-emerald-200
            transition-all duration-300 overflow-hidden group flex flex-col"
        >
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-50 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 flex-1">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors duration-300">
              <ScanSearchIcon className="w-5 h-5 text-emerald-500" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-500 mb-2 block">ATS Ready</span>
            <h3 className="text-xl font-bold font-heading text-gray-900 leading-snug mb-2">ATS Score &<br />Keyword Check</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Instantly score your resume against any job description. Close keyword gaps before you apply.
            </p>
            <ATSRing />
          </div>

          <Link
            to="/app"
            className="mt-6 block text-center w-full py-2.5 rounded-xl bg-emerald-50 text-emerald-600 text-sm font-semibold
              hover:bg-emerald-100 transition-colors duration-200 relative z-10"
          >
            Check ATS Score
          </Link>
        </motion.div>

        {/* ── Card 4: Export ── col-span-1 */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.24, ease: 'easeOut' }}
          className="relative rounded-3xl p-7 bg-white border border-gray-100
            shadow-[0_4px_24px_rgba(0,0,0,0.04)]
            hover:shadow-[0_8px_40px_rgba(239,68,68,0.07)]
            hover:-translate-y-1.5 hover:border-red-200
            transition-all duration-300 overflow-hidden group flex flex-col"
        >
          <div className="absolute top-0 left-0 w-48 h-48 bg-red-50 rounded-full blur-3xl opacity-60 -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 flex-1">
            <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors duration-300">
              <DownloadIcon className="w-5 h-5 text-red-400" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-red-400 mb-2 block">Export</span>
            <h3 className="text-xl font-bold font-heading text-gray-900 leading-snug mb-2">One-click<br />PDF & DOCX</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Download pixel-perfect, ATS-safe resumes in the format every employer accepts.
            </p>

            <div className="flex gap-3">
              {[
                { fmt: 'PDF', bg: 'bg-red-50 border-red-100 text-red-600', icon: '↓' },
                { fmt: 'DOCX', bg: 'bg-blue-50 border-blue-100 text-blue-600', icon: '↓' },
              ].map(({ fmt, bg, icon }) => (
                <motion.div
                  key={fmt}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className={`flex-1 flex flex-col items-center gap-1 py-3.5 rounded-2xl border cursor-pointer ${bg} transition-all duration-200`}
                >
                  <span className="text-lg font-black">{icon}</span>
                  <span className="text-xs font-bold">{fmt}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <Link
            to="/app"
            className="mt-6 block text-center w-full py-2.5 rounded-xl bg-red-50 text-red-500 text-sm font-semibold
              hover:bg-red-100 transition-colors duration-200 relative z-10"
          >
            Export Resume
          </Link>
        </motion.div>

        {/* ── Card 5: Personal Note (full width strip) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
          className="md:col-span-3 relative rounded-3xl px-10 py-8 overflow-hidden
            bg-gradient-to-r from-brand-50 via-white to-violet-50
            border border-brand-100/60
            shadow-[0_4px_24px_rgba(99,102,241,0.06)]
            hover:shadow-[0_8px_40px_rgba(99,102,241,0.10)]
            hover:-translate-y-1 transition-all duration-300 group"
        >
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 bg-violet-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center shadow-lg shrink-0"
              >
                <HeartIcon className="w-6 h-6 text-white fill-white" />
              </motion.div>
              <div>
                <p className="text-lg font-bold font-heading text-gray-900">
                  Built to make job hunting less stressful.
                </p>
                <p className="text-sm text-gray-500 mt-0.5">
                  A personal project for students & developers — free to use, no paywalls, just tools that work.
                </p>
              </div>
            </div>

            {/* Stats pills */}
            <div className="flex flex-wrap gap-2 shrink-0">
              {stats.map(({ icon: Icon, label, color }) => (
                <div key={label} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold ${color}`}>
                  <Icon className="w-3 h-3 shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Pricing;
