import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Palette, MousePointer2, Check, LayoutGrid, Type, Maximize2, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResumePreview from '../ResumePreview';

/* ─── High-Fidelity & Authentic Real Resume Previews ──────────────── */

const mockResumeData = {
  personal_info: {
    full_name: "Full Name",
    profession: "Position Title",
    email: "email@example.com",
    phone: "+1 (555) 012-3456",
    location: "City, Country",
    linkedin: "linkedin.com/in/username",
    website: "portfolio.com"
  },
  professional_summary: "A highly accomplished professional summary demonstrating specialized expertise, technical background, and significant career achievements. Tailored to outline key accomplishments and individual impact in 2-3 concise, high-impact sentences.",
  experience: [
    {
      position: "Job Title",
      company: "Company Name",
      start_date: "2024-01",
      end_date: "",
      is_current: true,
      description: "• Describe your core responsibilities, key achievements, and impact on projects.\n• Highlight specific technical challenges solved, systems designed or optimized, and positive team or business outcomes."
    }
  ],
  education: [
    {
      degree: "Degree",
      field: "Field of Study",
      institution: "University / Institution Name",
      graduation_date: "2024-05",
      gpa: "3.9 / 4.0"
    }
  ],
  project: [
    {
      name: "Project Name",
      description: "A summary of the project goals, tech stack utilized, and your key contributions. Detail exact metrics, design improvements, or optimization solutions implemented."
    }
  ],
  skills: ["Skill One", "Skill Two", "Skill Three", "Skill Four", "Skill Five", "Skill Six"],
  accent_color: "#8B5CF6"
};

const templates = [
  { id: 'classic', name: 'Classic', label: 'Executive Heritage' },
  { id: 'modern', name: 'Modern', label: 'Contemporary Edge' },
  { id: 'minimal-image', name: 'Minimal Image', label: 'Branded Identity' },
  { id: 'minimal', name: 'Minimal', label: 'Clean Precision' },
];

const accentColors = ['#4f46e5', '#7c3aed', '#ec4899', '#10b981', '#f59e0b', '#000000'];

const TemplatesShowcase = () => {
  const [activeColor, setActiveColor] = useState(accentColors[0]);

  return (
    <section id="templates" className="py-32 bg-white overflow-hidden relative selection:bg-brand-500/10">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50/30 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mb-24">
            <div className="max-w-2xl">
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 mb-8"
                >
                    <Palette className="w-3.5 h-3.5 text-brand-600" />
                    <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">Official Layouts</span>
                </motion.div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black font-heading text-gray-900 tracking-tight leading-[0.9] mb-8"
                >
                    Personalize your <br />
                    professional <span className="text-brand-600">identity.</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-gray-500 font-medium leading-relaxed max-w-xl"
                >
                    Explore our suite of professionally engineered templates. Built for clarity, impact, and seamless customization across any career path.
                </motion.p>
            </div>

            <div className="flex flex-col gap-6">
                <div className="p-6 rounded-[2rem] bg-gray-50 border border-gray-100 flex flex-col gap-4">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Global Accent Color</span>
                    <div className="flex gap-3 justify-center">
                        {accentColors.map(color => (
                            <button
                                key={color}
                                onClick={() => setActiveColor(color)}
                                className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${activeColor === color ? 'border-gray-900 scale-110 shadow-lg' : 'border-transparent hover:scale-110'}`}
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                </div>
                <Link to="/login" className="group flex items-center justify-center gap-4 px-8 py-4 rounded-2xl bg-gray-900 text-white font-bold hover:bg-black transition-all shadow-2xl shadow-gray-100">
                    Explore All Designs
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>

        {/* Immersive Template Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {templates.map((template, index) => (
                <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                >
                    <div className="relative aspect-[1/1.35] w-full rounded-[2.5rem] bg-gray-50 border border-gray-100 overflow-hidden shadow-sm group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] group-hover:shadow-brand-500/5 group-hover:-translate-y-3 transition-all duration-700 flex items-center justify-center p-3 sm:p-4">
                        
                        {/* High-Fidelity Preview Container */}
                        <div className="w-[270px] h-[382px] lg:w-[190px] lg:h-[269px] xl:w-[220px] xl:h-[311px] rounded-lg overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/60 transform group-hover:scale-[1.02] transition-transform duration-700 relative shrink-0">
                            <div className="w-[800px] h-[1131px] origin-top-left scale-[0.3375] lg:scale-[0.2375] xl:scale-[0.275] absolute top-0 left-0 bg-white select-none pointer-events-none">
                                <ResumePreview data={mockResumeData} template={template.id} accentColor={activeColor} />
                            </div>
                        </div>

                        {/* Hover Overlay Detail */}
                        <div className="absolute inset-0 bg-gray-900/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center z-10">
                             
                        </div>
                        
                        {/* Style Badge (Bottom) */}
                        <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/80 backdrop-blur border border-white shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 z-20">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">{template.name}</span>
                                <Check className="w-3.5 h-3.5 text-emerald-500" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Metadata below card */}
                    <div className="mt-8 space-y-2 px-2">
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-3 rounded-full transition-colors duration-500" style={{ backgroundColor: activeColor }} />
                            <h3 className="text-xl font-bold text-gray-900">{template.name}</h3>
                        </div>
                        <p className="text-sm font-medium text-gray-400">{template.label}</p>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-32 grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-gray-50 pt-20">
            {[
                { icon: Type, title: 'Typography Diversity', desc: 'Serif, sans-serif, and monospaced options for every industry.' },
                { icon: LayoutGrid, title: 'Adaptive Layouts', desc: 'Single column, multi-column, and sidebar structures available.' },
                { icon: Palette, title: 'Dynamic Coloring', desc: 'Change the entire brand palette of your resume in one click.' }
            ].map((feature, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="space-y-4"
                >
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
                        <feature.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
                </motion.div>
            ))}
        </div>

      </div>

      {/* Decorative Interaction Indicator */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 opacity-10 hidden xl:block"
      >
        <MousePointer2 className="w-12 h-12 text-gray-900 fill-white" />
      </motion.div>
    </section>
  );
};

export default TemplatesShowcase;
