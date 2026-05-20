import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, FileUpIcon, LayoutIcon, ShieldCheckIcon, ArrowRightIcon, CheckIcon, LayersIcon, HardDriveIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── Workflow Connection Line ────────────────────────────────────── */
const WorkflowLine = ({ d, delay = 0 }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" fill="none">
    <motion.path
      d={d}
      stroke="url(#line-grad)"
      strokeWidth="2"
      strokeDasharray="8 8"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.2 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay, ease: "easeInOut" }}
    />
    <defs>
      <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
  </svg>
);

/* ─── AI Writer Visual: Animated Rewriting ─────────────────────────── */
const AIWriterVisual = () => {
  const [isRewriting, setIsRewriting] = React.useState(false);
  const [displayText, setDisplayText] = React.useState("I was in charge of the sales team and we made more money than last year.");
  
  const targetText = "Spearheaded a high-performing sales team of 12, driving a 24% increase in annual recurring revenue (ARR).";

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsRewriting(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 relative h-48 flex flex-col justify-center">
      <motion.div 
        animate={{ 
          opacity: isRewriting ? 0.3 : 1,
          scale: isRewriting ? 0.98 : 1,
          filter: isRewriting ? 'blur(1px)' : 'blur(0px)'
        }}
        className="relative p-4 rounded-xl bg-gray-50 border border-gray-100 transition-all duration-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
      >
        <span className="absolute -top-2.5 left-4 px-2 bg-white text-[9px] font-black text-gray-400 uppercase tracking-widest border border-gray-100 rounded-md">Draft Input</span>
        <p className="text-xs text-gray-500 italic leading-relaxed min-h-[3rem]">
          "{displayText}"
        </p>
      </motion.div>

      <div className="flex justify-center my-2 relative z-10">
        <motion.div 
          animate={{ 
            rotate: isRewriting ? 360 : 0,
            scale: isRewriting ? [1, 1.2, 1] : 1,
            backgroundColor: isRewriting ? '#eef2ff' : '#ffffff'
          }}
          transition={{ rotate: { duration: 1, ease: "linear", repeat: isRewriting ? Infinity : 0 } }}
          className="w-10 h-10 rounded-full bg-white border border-brand-100 flex items-center justify-center shadow-lg shadow-brand-500/10"
        >
          <SparklesIcon className={`w-5 h-5 ${isRewriting ? 'text-brand-500' : 'text-gray-300'}`} />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: isRewriting ? 1 : 0.3,
          y: isRewriting ? 0 : 5,
          scale: isRewriting ? 1.02 : 1
        }}
        className="relative p-4 rounded-xl bg-emerald-50/40 border border-emerald-100 transition-all duration-700 shadow-[0_4px_15px_rgba(16,185,129,0.05)]"
      >
        <span className="absolute -top-2.5 left-4 px-2 bg-white text-[9px] font-black text-emerald-500 uppercase tracking-widest border border-emerald-100 rounded-md">AI Polished</span>
        <p className="text-xs text-gray-700 leading-relaxed font-medium">
          {isRewriting ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              "Spearheaded a high-performing <span className="text-emerald-600 font-bold">sales team of 12</span>, driving a <span className="text-emerald-600 font-bold">24% increase</span> in revenue..."
            </motion.span>
          ) : (
            <span className="opacity-50">Generating optimized content...</span>
          )}
        </p>
      </motion.div>
    </div>
  );
};

/* ─── Uploader Visual: Handcrafted Dropzone ───────────────────────── */
const UploaderVisual = () => (
  <div className="mt-6 relative">
    <div className="p-6 rounded-2xl bg-brand-50/20 border-2 border-dashed border-brand-200/50 flex flex-col items-center text-center group-hover:border-brand-400 transition-colors duration-300">
      <motion.div 
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-[0_8px_20px_rgba(99,102,241,0.12)] mb-4"
      >
        <FileUpIcon className="w-7 h-7 text-brand-500" />
      </motion.div>
      <div className="space-y-1.5">
        <div className="h-2 w-28 bg-brand-200/40 rounded-full mx-auto" />
        <div className="h-1.5 w-16 bg-brand-100/30 rounded-full mx-auto" />
      </div>
      
      {/* Parsing simulation pills */}
      <div className="mt-5 flex gap-2 w-full justify-center">
        {[0, 0.1, 0.2].map((d, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5 + d }}
            className="h-7 w-7 rounded-lg bg-white border border-brand-50 shadow-sm flex items-center justify-center"
          >
            <div className="w-3 h-0.5 bg-brand-200 rounded-full" />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Builder Visual: Real App UI Mockup ──────────────────────────── */
const BuilderVisual = () => (
  <div className="mt-8 grid md:grid-cols-2 gap-4 h-full">
    {/* Editor Side */}
    <div className="rounded-2xl bg-gray-50/80 border border-gray-100 p-4 space-y-3 shadow-inner">
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-gray-200" />
          <div className="w-2 h-2 rounded-full bg-gray-200" />
        </div>
        <div className="h-1.5 w-12 bg-gray-200 rounded-full" />
      </div>
      
      {[
        { label: 'Experience', color: 'bg-brand-500' },
        { label: 'Education', color: 'bg-gray-200' },
        { label: 'Projects', color: 'bg-gray-200' },
      ].map((item, i) => (
        <div key={i} className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <div className={`w-1 h-3 rounded-full ${item.color}`} />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{item.label}</span>
          </div>
          {i === 0 && (
            <div className="pl-3 space-y-1.5 mt-1">
              <div className="h-5 w-full bg-white border border-gray-100 rounded-md" />
              <div className="h-10 w-full bg-white border border-gray-100 rounded-md" />
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Preview Side */}
    <div className="rounded-2xl bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col">
      <div className="h-12 bg-gradient-to-r from-brand-600 to-violet-600 p-3 flex flex-col justify-center">
        <div className="h-2 w-20 bg-white/40 rounded" />
        <div className="h-1 w-12 bg-white/20 rounded mt-1" />
      </div>
      <div className="p-4 space-y-2.5 flex-1 bg-white">
        <div className="h-1.5 w-full bg-gray-100 rounded" />
        <div className="h-1.5 w-5/6 bg-gray-100 rounded" />
        <div className="h-1.5 w-4/6 bg-gray-100 rounded" />
        <div className="h-px bg-gray-50 my-2" />
        <div className="h-1.5 w-3/4 bg-brand-100/50 rounded" />
        <div className="h-1.5 w-full bg-gray-50 rounded" />
      </div>
    </div>
  </div>
);

/* ─── Dashboard Visual: Handcrafted List ─────────────────────────── */
const DashboardVisual = () => (
  <div className="mt-6 space-y-3 relative">
    {[
      { name: 'Fullstack Developer', date: 'Active 2h ago', color: 'bg-brand-500' },
      { name: 'Data Analyst CV', date: 'Modified 1d ago', color: 'bg-violet-500' }
    ].map((item, i) => (
      <motion.div 
        key={i} 
        whileHover={{ x: 4 }}
        className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] group/item"
      >
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl ${item.color}/10 flex items-center justify-center transition-colors duration-300`}>
            <LayersIcon className={`w-4.5 h-4.5 text-brand-600`} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-900 leading-none mb-1.5">{item.name}</p>
            <p className="text-[10px] text-gray-400 font-medium">{item.date}</p>
          </div>
        </div>
        <div className="flex gap-1.5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
          <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
            <div className="w-2.5 h-2.5 rounded-full border-2 border-gray-300" />
          </div>
        </div>
      </motion.div>
    ))}
    
    {/* Floating storage pill */}
    <div className="absolute -bottom-2 right-4 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm flex items-center gap-2">
      <HardDriveIcon className="w-3 h-3 text-brand-400" />
      <div className="w-12 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full w-2/3 bg-brand-500 rounded-full" />
      </div>
      <span className="text-[9px] font-bold text-gray-400">2/5</span>
    </div>
  </div>
);

const Pricing = () => (
  <section id="features" className="py-28 bg-[#f8f9fd] relative overflow-hidden">
    
    {/* Refined Ambient Radial Glows */}
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#e0e7ff_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#f5f3ff_0%,transparent_40%)] opacity-40 pointer-events-none" />

    <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative">
      
      {/* Section Connection Lines (Workflow Flow) */}
      <div className="hidden md:block absolute inset-0 z-0">
        {/* Upload -> AI */}
        <WorkflowLine d="M 320 280 Q 400 280 400 350" delay={0.2} />
        {/* AI -> Builder */}
        <WorkflowLine d="M 600 600 Q 600 700 450 700" delay={0.8} />
        {/* Builder -> Management */}
        <WorkflowLine d="M 250 850 Q 250 900 320 900" delay={1.4} />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 rounded-full bg-white border border-brand-100 shadow-sm flex items-center gap-2 mb-6"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
          <span className="text-brand-700 text-[10px] font-black uppercase tracking-widest">Platform Core</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black font-heading text-gray-900 tracking-tight mb-5"
        >
          What's inside <span className="relative inline-block">
            VeloraCV
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-brand-200/60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-500 max-w-xl text-lg font-medium leading-relaxed"
        >
          A seamless end-to-end workflow designed to take you from a blank page to a recruiter-ready resume.
        </motion.p>
      </div>

      {/* Bento Grid: Workflow Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-auto relative z-10">
        
        {/* 1. Upload & Parse (Step 1) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] p-9 bg-white border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-10px_rgba(99,102,241,0.08)] transition-all duration-500 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 font-black text-xs">01</div>
            <h3 className="text-xl font-bold text-gray-900">Upload & Parse</h3>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-6 font-medium">
            Start by uploading your current resume. Our AI parser extracts your work history, skills, and education in seconds.
          </p>
          <div className="mt-auto pt-8">
            <Link to="/login" className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 hover:gap-3 transition-all">
              Upload Resume <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
          <UploaderVisual />
        </motion.div>

        {/* 2. AI Enhancement (Step 2) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="md:col-span-2 rounded-[2.5rem] p-9 bg-white border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-10px_rgba(139,92,246,0.08)] transition-all duration-500 flex flex-col md:flex-row gap-12 items-center group overflow-hidden"
        >
          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-violet-50 flex items-center justify-center text-violet-600 font-black text-xs">02</div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">AI Content Optimization</h3>
            </div>
            <p className="text-base text-gray-500 leading-relaxed mb-8 font-medium">
              Don't just list tasks—show results. Our AI suggests impactful bullet points that use the action-oriented language recruiters love.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { text: 'Bullet Point Polishing', color: 'text-brand-500' },
                { text: 'Professional Summaries', color: 'text-violet-500' },
                { text: 'ATS-Friendly Phrasing', color: 'text-emerald-500' },
                { text: 'Smart Skill Mapping', color: 'text-amber-500' },
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold text-gray-700">
                  <CheckIcon className={`w-4 h-4 ${f.color}`} />
                  {f.text}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/login" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 text-white text-xs font-bold hover:bg-violet-700 transition-all shadow-lg shadow-violet-200">
                Try AI Optimization <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[340px] shrink-0 relative z-10">
            <AIWriterVisual />
          </div>
          {/* Subtle background detail */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-50/50 rounded-full blur-[100px] pointer-events-none" />
        </motion.div>

        {/* 3. Live Builder (Step 3) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 rounded-[2.5rem] p-9 bg-white border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-10px_rgba(99,102,241,0.08)] transition-all duration-500 group overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 font-black text-xs">03</div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Interactive Editor</h3>
              </div>
              <p className="text-base text-gray-500 leading-relaxed mb-6 font-medium">
                Assemble your resume section by section. Every change you make in the forms is updated in the live preview instantly.
              </p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mt-8 mb-8">
                {['Real-time Rendering', 'Template Switching', 'Theme Customization', 'Section Reordering'].map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-300" />
                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-wider">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/login" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200">
                Open Builder <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="flex-1 relative">
              <BuilderVisual />
            </div>
          </div>
        </motion.div>

        {/* 4. Secure Management (Step 4) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="rounded-[2.5rem] p-9 bg-white border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.08)] transition-all duration-500 group"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-black text-xs">04</div>
            <h3 className="text-xl font-bold text-gray-900">Manage & Save</h3>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-6 font-medium">
            Keep multiple versions for different roles. Your data is secured with JWT encryption and saved to your private dashboard.
          </p>
          <div className="mt-auto pt-8">
            <Link to="/login" className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:gap-3 transition-all">
              Go to Dashboard <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
          <DashboardVisual />
        </motion.div>

      </div>



    </div>
  </section>
);

export default Pricing;
