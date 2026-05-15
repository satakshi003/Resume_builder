import React, { useRef } from 'react';
import Title from './Title';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const templates = [
  {
    id: 1,
    name: 'Executive Minimal',
    category: 'Professional',
    color: 'bg-slate-900',
    accent: 'bg-brand-500',
    popular: true
  },
  {
    id: 2,
    name: 'Creative Tech',
    category: 'Modern',
    color: 'bg-brand-600',
    accent: 'bg-sky-400',
    popular: false
  },
  {
    id: 3,
    name: 'Ivy League',
    category: 'Academic',
    color: 'bg-emerald-800',
    accent: 'bg-emerald-400',
    popular: false
  },
  {
    id: 4,
    name: 'Startup Agile',
    category: 'Modern',
    color: 'bg-violet-600',
    accent: 'bg-fuchsia-400',
    popular: true
  },
  {
    id: 5,
    name: 'Classic Corporate',
    category: 'Professional',
    color: 'bg-gray-800',
    accent: 'bg-amber-500',
    popular: false
  }
];

const TemplatesShowcase = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="templates" className="py-24 bg-brand-50/30 overflow-hidden relative border-y border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-700 text-xs font-semibold mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Premium Templates
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 tracking-tight mb-4">
            Designed to win.
          </h2>
          <p className="text-lg text-text-secondary font-light">
            Stand out from the pile with our meticulously crafted resume templates. Designed by top recruiters and optimized for ATS.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:text-brand-600 hover:border-brand-200 hover:bg-brand-50 transition-all shadow-sm active:scale-95 outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:text-brand-600 hover:border-brand-200 hover:bg-brand-50 transition-all shadow-sm active:scale-95 outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 lg:px-24 pb-16 pt-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {templates.map((template, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={template.id} 
            className="flex-none snap-center group cursor-pointer"
          >
            {/* Realistic Resume Preview Card */}
            <div className="relative w-[300px] h-[420px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-200/80 overflow-hidden transform-gpu transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)] group-hover:border-brand-200">
              
              {/* Header block based on template color */}
              <div className={`${template.color} h-[25%] p-4 text-white relative`}>
                <div className={`absolute left-0 top-0 w-2 h-full ${template.accent}`}></div>
                <div className="h-4 w-1/2 bg-white/20 rounded mb-2 mt-1"></div>
                <div className="h-2 w-1/3 bg-white/20 rounded mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-1.5 w-12 bg-white/20 rounded"></div>
                  <div className="h-1.5 w-12 bg-white/20 rounded"></div>
                </div>
              </div>

              {/* Body Content (Skeleton) */}
              <div className="p-5 flex flex-col gap-5">
                <div>
                  <div className={`h-2.5 w-1/4 ${template.color} opacity-80 rounded mb-2`}></div>
                  <div className="h-1.5 w-full bg-gray-100 rounded mb-1"></div>
                  <div className="h-1.5 w-5/6 bg-gray-100 rounded mb-1"></div>
                  <div className="h-1.5 w-4/6 bg-gray-100 rounded"></div>
                </div>
                
                <div>
                  <div className={`h-2.5 w-1/3 ${template.color} opacity-80 rounded mb-2`}></div>
                  <div className="flex justify-between items-end mb-1">
                    <div className="h-2 w-1/3 bg-gray-200 rounded"></div>
                    <div className="h-1.5 w-10 bg-gray-100 rounded"></div>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded mb-1"></div>
                  <div className="h-1.5 w-full bg-gray-100 rounded mb-1"></div>
                  <div className="h-1.5 w-11/12 bg-gray-100 rounded mb-1"></div>
                  <div className="h-1.5 w-4/5 bg-gray-100 rounded mb-3"></div>

                  <div className="flex justify-between items-end mb-1">
                    <div className="h-2 w-1/4 bg-gray-200 rounded"></div>
                    <div className="h-1.5 w-10 bg-gray-100 rounded"></div>
                  </div>
                  <div className="h-1.5 w-11/12 bg-gray-100 rounded mb-1"></div>
                  <div className="h-1.5 w-5/6 bg-gray-100 rounded"></div>
                </div>
              </div>

              {/* Hover Use Button Overlay */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="btn-primary px-6 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Use Template
                </div>
              </div>

              {template.popular && (
                <div className="absolute top-4 right-4 bg-white shadow-sm border border-gray-100 text-[10px] font-bold text-gray-900 px-2.5 py-1 rounded-full z-10">
                  Most Popular
                </div>
              )}
            </div>

            {/* Template Info */}
            <div className="mt-6 flex flex-col items-center text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{template.name}</h3>
              <p className="text-sm font-medium text-brand-600">{template.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TemplatesShowcase;
