import React from 'react'
import { Sparkles, FileCheck, Eye, Wand2, LayoutTemplate } from 'lucide-react';
import Title from './Title';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <div id='features' className='flex flex-col items-center py-24 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 scroll-mt-20'>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Powerful Features</span>
        </div>

        <Title 
            title="Everything you need to land the job" 
            description="Our intelligent builder equips you with cutting-edge tools to create a standout, professional resume in minutes." 
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-16">
            
            {/* Feature 1: AI Assistant (Large Card) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:col-span-2 md:row-span-2 glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden group cursor-default border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.1)] transition-all duration-500 bg-white"
            >
                {/* Background Gradient */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-brand-500/20 transition-colors duration-500"></div>

                <div className="relative z-10 w-full md:w-3/5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-6 text-brand-600 shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <Wand2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3">AI-Powered Writing</h3>
                    <p className="text-text-secondary leading-relaxed">
                        Struggling to find the right words? Our fine-tuned AI instantly generates highly-effective summaries and action-driven bullet points tailored to your industry.
                    </p>
                </div>

                {/* Layered UI Preview */}
                <div className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-10 w-[300px] h-[240px] perspective-[1000px] z-10 pointer-events-none hidden sm:block">
                    <div className="relative w-full h-full transform-gpu rotate-y-[-10deg] rotate-x-[5deg] group-hover:rotate-y-[0deg] group-hover:rotate-x-[0deg] group-hover:-translate-y-4 transition-all duration-700 ease-out">
                        {/* Editor Mockup */}
                        <div className="absolute inset-0 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                            <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4">
                                <div className="h-2 w-16 bg-gray-200 rounded"></div>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="h-2 w-full bg-gray-100 rounded"></div>
                                <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                                <div className="h-2 w-4/6 bg-brand-50 rounded"></div>
                            </div>
                        </div>
                        {/* AI Popup Overlay */}
                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-[0_10px_40px_-10px_rgba(99,102,241,0.3)] border border-brand-100 p-3 w-[220px] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                                <span className="text-[10px] font-bold text-brand-600">AI Suggestion</span>
                            </div>
                            <p className="text-[10px] text-gray-600 leading-tight">Led a cross-functional team of 10 to deploy scalable web architectures...</p>
                            <div className="mt-2 h-6 w-full bg-brand-50 rounded flex items-center justify-center text-[10px] text-brand-600 font-medium">Apply Suggestion</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Feature 2: ATS Optimized (Top Right) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card rounded-[2rem] p-8 relative overflow-hidden group cursor-default border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)] transition-all duration-500 bg-white flex flex-col justify-between min-h-[300px]"
            >
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-violet-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-violet-500/20 transition-colors duration-500"></div>
                
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-6 text-violet-600 shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <FileCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">ATS Optimized</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                        Tested against top Applicant Tracking Systems to ensure your resume gets parsed perfectly every time.
                    </p>
                </div>

                {/* ATS Visual */}
                <div className="relative mt-8 h-16 w-full flex items-center justify-end">
                    <div className="flex items-center gap-3 bg-white shadow-lg border border-gray-100 rounded-full px-4 py-2 translate-x-4 group-hover:translate-x-0 transition-transform duration-500 ease-out">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-sm font-bold text-gray-900 pr-2">100% Match</span>
                    </div>
                </div>
            </motion.div>

            {/* Feature 3: Live Preview (Bottom Right) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card rounded-[2rem] p-8 relative overflow-hidden group cursor-default border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(56,189,248,0.1)] transition-all duration-500 bg-white flex flex-col justify-between min-h-[300px]"
            >
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-sky-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-sky-500/20 transition-colors duration-500"></div>

                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 text-sky-600 shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <Eye className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">Live Preview</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                        Watch your resume come to life as you type. Real-time rendering ensures no surprises upon export.
                    </p>
                </div>

                {/* Preview Visual */}
                <div className="relative mt-8 h-20 w-full">
                    <div className="absolute right-0 bottom-0 w-[120px] h-[100px] bg-white shadow-xl border border-gray-200 rounded-t-xl overflow-hidden translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="bg-sky-600 h-6 w-full"></div>
                        <div className="p-2 space-y-1.5">
                            <div className="h-1.5 w-full bg-gray-100 rounded"></div>
                            <div className="h-1.5 w-4/5 bg-gray-100 rounded"></div>
                            <div className="h-1.5 w-full bg-gray-100 rounded"></div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    </div>
  )
}

export default Features;


