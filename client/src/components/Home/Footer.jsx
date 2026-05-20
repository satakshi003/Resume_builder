import React from "react";
import { Link } from 'react-router-dom';
import { Github, Linkedin, Globe, FileText, Cpu, Database, Code2, Sparkles, Layers, MessageSquare, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const projectLinks = [
    { label: "Dashboard", href: "/app" },
    { label: "Templates", href: "#templates" },
    { label: "Features", href: "#features" },
  ];

  const connectLinks = [
    { label: "GitHub Repository", href: "https://github.com/satakshi003" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/satakshi-subhasmita-7a9886202" },
    { label: "Contact", href: "mailto:soumya3955@gmail.com" },
  ];

  const techStack = [
    { name: "React", icon: Code2 },
    { name: "Tailwind", icon: Layers },
    { name: "Node.js", icon: Cpu },
    { name: "MongoDB", icon: Database },
    { name: "OpenAI API", icon: Sparkles },
  ];

  const socials = [
    { label: "GitHub", href: "https://github.com/satakshi003", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/satakshi-subhasmita-7a9886202", icon: Linkedin },
    { label: "Portfolio", href: "https://react-portfolio-v2-eight.vercel.app", icon: Globe },
  ];

  return (
    <footer className="bg-white border-t border-gray-50 overflow-hidden relative selection:bg-brand-500/10">
      
      {/* Handcrafted Visual Detail: Subtle Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          
          {/* Brand & Identity */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
                <Link to="/" className="flex items-center gap-3 group">
                    <img src="/shield.png" alt="VeloraCV Shield" className="h-8 w-auto object-contain" />
                    <span className="text-xl font-black font-heading text-gray-900 tracking-tight">VeloraCV</span>
                </Link>
                <p className="text-base text-gray-500 font-medium leading-relaxed max-w-sm">
                    A modern resume builder focused on customization, simplicity, and practical AI assistance. Built for students and developers.
                </p>
            </div>

            {/* Built With Strip */}
            <div className="pt-8 border-t border-gray-50">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.25em] mb-4 block">Built With</span>
                <div className="flex flex-wrap gap-4">
                    {techStack.map((tech) => (
                        <div key={tech.name} className="flex items-center gap-2 group cursor-default">
                            <tech.icon className="w-3.5 h-3.5 text-gray-300 group-hover:text-brand-500 transition-colors" />
                            <span className="text-[10px] font-bold text-gray-400 group-hover:text-gray-900 transition-colors uppercase tracking-widest">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-8">
             <div className="space-y-6">
                <h4 className="text-xs font-black text-gray-900 uppercase tracking-[0.2em]">Product</h4>
                <ul className="space-y-4">
                    {projectLinks.map(link => (
                        <li key={link.label}>
                            <a href={link.href} className="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2 group">
                                {link.label}
                                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </a>
                        </li>
                    ))}
                </ul>
             </div>
             
             <div className="space-y-6">
                <h4 className="text-xs font-black text-gray-900 uppercase tracking-[0.2em]">Connect</h4>
                <ul className="space-y-4">
                    {connectLinks.map(link => (
                        <li key={link.label}>
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2 group">
                                {link.label}
                                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </a>
                        </li>
                    ))}
                </ul>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8 order-2 md:order-1">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-widest leading-none">
                    © {currentYear} VeloraCV
                </p>
               
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 order-1 md:order-2">
                {socials.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <social.icon className="w-4.5 h-4.5" />
                    </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
