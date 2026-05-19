import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ResumePreview from '../ResumePreview';
import { 
  Sparkles, 
  FileText, 
  Layout, 
  ArrowRight, 
  MousePointer2, 
  Cpu, 
  Database, 
  Code2, 
  Layers, 
  Search, 
  ShieldCheck, 
  Image, 
  Terminal,
  User,
  Briefcase,
  GraduationCap,
  Folder,
  Share2,
  DownloadCloud,
  ChevronLeft,
  ChevronRight,
  Eye,
  Mail,
  Phone,
  MapPin,
  CheckCircle2
} from 'lucide-react';

/* ─── High-Fidelity & Authentic Real UI Mockup ───────────────────────── */
const AppMockup = () => {
  const activeColor = "#8B5CF6"; // Elegant Purple active theme

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
    template: "classic",
    accent_color: "#8B5CF6"
  };


  const mockSections = [
    { id: "personal", name: "Personal Info", icon: User, active: true },
    { id: "summary", name: "Summary", icon: FileText, active: false },
    { id: "experience", name: "Experience", icon: Briefcase, active: false },
    { id: "education", name: "Education", icon: GraduationCap, active: false },
    { id: "projects", name: "Projects", icon: Folder, active: false },
    { id: "skills", name: "Skills", icon: Sparkles, active: false },
  ];

  return (
    <div className="relative w-full max-w-[1024px] h-[540px] rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.02)] overflow-hidden">
      
      {/* 1. Browser-style Top Bar */}
      <div className="h-12 border-b border-gray-100 flex items-center justify-between px-6 bg-gray-50/50 backdrop-blur-sm z-30 relative">
        <div className="flex items-center gap-6">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
          </div>
          <div className="h-4 w-px bg-gray-200" />
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-gray-100 w-64">
             <Search className="w-3 h-3 text-gray-400" />
             <span className="text-[10px] text-gray-400 font-bold tracking-tight">app.veloracv.com/builder/professional-resume</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Saved</span>
          </div>
        </div>
      </div>

      {/* 2. Authentic Builder Top Toolbar (Replicating real polished h-[64px] header) */}
      <div className="h-12 border-b border-gray-100 bg-white flex items-center justify-between px-6 z-20 relative">
        {/* Left section: Back and Title */}
        <div className="flex items-center">
          <div className="flex items-center gap-1.5 text-[10px] font-black text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </div>
          <div className="h-4 w-px bg-gray-100 mx-3" />
          <span className="text-xs font-black text-gray-950 tracking-tight">Professional Resume</span>
        </div>

        {/* Right actions: Share and Download */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-100 bg-violet-50/50 text-[9px] font-black text-violet-600 tracking-wide shadow-[0_0_10px_rgba(139,92,246,0.06)]">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            <span>Public</span>
          </div>
          <div className="p-1.5 rounded-lg border border-gray-100 hover:bg-gray-50 text-gray-400 hover:text-gray-900 cursor-pointer transition-colors">
            <Share2 className="w-3.5 h-3.5" />
          </div>
          <div className="flex items-center gap-1.5 px-4 py-2 bg-gray-950 hover:bg-brand-600 text-white rounded-xl text-[9px] font-black cursor-pointer shadow-md hover:shadow-lg hover:shadow-brand-500/10 transition-all duration-300">
            <DownloadCloud className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </div>
        </div>
      </div>

      {/* 3. Main Workspace Split (3-Column Layout) */}
      <div className="flex h-[calc(100%-48px-48px)] bg-white">
        
        {/* COLUMN 1: Editor Sidebar Steps */}
        <div className="w-[160px] border-r border-gray-50 flex flex-col justify-between p-4 bg-white select-none">
          <div className="space-y-4">
            <span className="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em] block mb-2">Editor Steps</span>
            <div className="space-y-1">
              {mockSections.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.id} 
                    className={`flex items-center justify-between px-2.5 py-2.5 rounded-lg transition-all duration-300 ${
                      item.active 
                        ? 'bg-violet-50/60 text-violet-600 font-black shadow-sm' 
                        : 'text-gray-400 font-bold hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-3.5 h-3.5" style={{ color: item.active ? activeColor : undefined }} />
                      <span className="text-[10px] tracking-tight">{item.name}</span>
                    </div>
                    {item.active && <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sync status */}
          <div className="flex items-center gap-1.5 text-[9px] font-black text-gray-400 uppercase tracking-widest pl-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Synced</span>
          </div>
        </div>

        {/* COLUMN 2: Form Inputs Area (Real spacing & styled inputs) */}
        <div className="w-[360px] border-r border-gray-50 p-6 bg-gray-50/20 flex flex-col gap-5 overflow-y-auto">
          
          {/* Form Header mimicking actual app Template/Color selector */}
          <div className="flex items-center justify-between pb-3.5 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="px-2.5 py-1 rounded-lg bg-white border border-gray-100 text-[9px] font-black text-gray-600 shadow-sm cursor-pointer hover:bg-gray-50 transition-all">Classic</div>
              <div className="flex items-center gap-1.5">
                {["#3B82F6", "#8B5CF6", "#10B981", "#EC4899"].map((c, i) => (
                  <div 
                    key={i} 
                    className="w-3 h-3 rounded-full border border-white cursor-pointer transition-transform hover:scale-110 shadow-sm" 
                    style={{ 
                      backgroundColor: c, 
                      ringWidth: c === activeColor ? "1.5px" : "0px",
                      ringColor: c === activeColor ? activeColor : undefined
                    }} 
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-7 h-7 rounded-lg bg-white border border-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all"><ChevronLeft className="w-3.5 h-3.5 text-gray-400" /></div>
              <div className="w-7 h-7 rounded-lg bg-white border border-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all"><ChevronRight className="w-3.5 h-3.5 text-gray-400" /></div>
            </div>
          </div>

          {/* Section indicator & Header */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
              <User className="w-4 h-4 text-violet-600" />
            </div>
            <div>
              <h2 className="text-xs font-black text-gray-950 uppercase tracking-tight">Personal Info</h2>
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Step 1 of 6</p>
            </div>
          </div>

          {/* Progress indicators matching real layout */}
          <div className="flex gap-1">
            {mockSections.map((sec, idx) => (
              <div 
                key={sec.id}
                className={`h-1 flex-1 rounded-full ${
                  idx === 0 ? 'bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.3)]' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-[9px] font-black text-gray-400 uppercase tracking-widest ml-0.5">
                <User className="w-3.5 h-3.5 text-violet-500" />
                Full Name
              </label>
              <div className="h-10 w-full bg-white border border-gray-100 rounded-xl px-4 flex items-center shadow-sm">
                <span className="text-[11px] text-gray-950 font-bold">Full Name</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-[9px] font-black text-gray-400 uppercase tracking-widest ml-0.5">
                <Briefcase className="w-3.5 h-3.5 text-violet-500" />
                Profession
              </label>
              <div className="h-10 w-full bg-white border border-gray-100 rounded-xl px-4 flex items-center shadow-sm">
                <span className="text-[11px] text-gray-950 font-bold">Position Title</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-[9px] font-black text-gray-400 uppercase tracking-widest ml-0.5">
                  <Mail className="w-3.5 h-3.5 text-violet-500" />
                  Email
                </label>
                <div className="h-10 w-full bg-white border border-gray-100 rounded-xl px-4 flex items-center shadow-sm overflow-hidden">
                  <span className="text-[11px] text-gray-950 font-bold truncate">email@example.com</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-[9px] font-black text-gray-400 uppercase tracking-widest ml-0.5">
                  <MapPin className="w-3.5 h-3.5 text-violet-500" />
                  Location
                </label>
                <div className="h-10 w-full bg-white border border-gray-100 rounded-xl px-4 flex items-center shadow-sm overflow-hidden">
                  <span className="text-[11px] text-gray-950 font-bold truncate">City, Country</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Enhance Button (Authentic Premium SaaS Accent) */}
          <div className="mt-1">
            <button className="w-full h-10 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl flex items-center justify-center gap-1.5 text-[11px] font-black shadow-md shadow-violet-500/10 hover:shadow-lg transition-all active:scale-[0.98]">
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
              <span>Improve Description with AI</span>
            </button>
          </div>
        </div>

        {/* COLUMN 3: Right Live Preview Pane (Enlarged and highly readable) */}
        <div className="flex-1 bg-gray-50/40 p-6 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_100%)]" />
          
          {/* Authentic Real A4 Template Vector-Scaled Container */}
          <div className="w-[305px] h-[431px] bg-white shadow-[0_16px_48px_rgba(15,23,42,0.08),0_0_0_1px_rgba(15,23,42,0.02)] rounded-lg overflow-hidden relative border border-gray-100/50">
            {/* Scaled down real ResumePreview component */}
            <div className="w-[800px] h-[1131px] origin-top-left scale-[0.38125] absolute top-0 left-0 bg-white select-none pointer-events-none">
              <ResumePreview data={mockResumeData} template="classic" accentColor="#8B5CF6" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export const Hero = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { user } = useSelector((state) => state.auth);

  const techStack = [
    { name: 'React', icon: Code2 },
    { name: 'Tailwind CSS', icon: Layers },
    { name: 'Node.js', icon: Cpu },
    { name: 'Express', icon: Terminal },
    { name: 'MongoDB', icon: Database },
    { name: 'OpenAI API', icon: Sparkles },
    { name: 'JWT Auth', icon: ShieldCheck },
    { name: 'ImageKit', icon: Image },
  ];

  return (
    <div id="hero" className="min-h-screen bg-white text-gray-900 overflow-hidden relative flex flex-col">
      
      {/* Section Background Detail */}
      <div className="absolute top-0 inset-x-0 h-[1000px] w-full pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA0MmMyLjItLjItNC0uMi02LS4ycy0zLjguMi02IC4ydi02aDEydjZ6IiBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS1vcGFjaXR5PSIwLjA0Ii8+PC9nPjwvc3ZnPg==')] opacity-40" />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between w-full py-5 px-6 md:px-12 lg:px-24 text-sm border-b border-gray-100 bg-white/70 backdrop-blur-md">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gray-900 flex items-center justify-center shadow-lg shadow-gray-200">
              <FileText className="w-5.5 h-5.5 text-white" />
          </div>
          <span className="font-bold text-xl font-heading tracking-tight text-gray-900">VeloraCV</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 font-bold text-gray-400 tracking-tight">
            <a href="#" className="hover:text-gray-900 transition-colors">Home</a>
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#templates" className="hover:text-gray-900 transition-colors">Templates</a>
        </div>

        <div className="flex gap-4">
            {!user ? (
              <>
                <Link to='/login' className="hidden md:flex items-center font-bold text-gray-900 hover:text-brand-600 transition-colors">Sign in</Link>
                <Link to='/login' className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-black transition-all shadow-xl shadow-gray-200">
                    Get Started
                </Link>
              </>
            ) : (
              <Link to='/app' className='hidden md:flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 text-white font-bold hover:bg-brand-700 transition-all shadow-xl shadow-brand-200'>
                Dashboard <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            <button onClick={() => setMenuOpen(true)} className="md:hidden p-2 text-gray-900">
                <Layout className="w-6 h-6" />
            </button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative pt-20 pb-24 md:pt-32 md:pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
          <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">Crafted for the next generation</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-[5.4rem] font-black font-heading text-gray-900 tracking-tight leading-[0.92] mb-10"
        >
          Build a professional <br className="hidden md:block"/>
          resume, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-violet-600">in minutes.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-500 max-w-2xl font-medium leading-relaxed mb-12"
        >
          A minimalist editor that handles the heavy lifting—from AI-powered content suggestions to pixel-perfect layouts. Built for modern careers.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center mb-28"
        >
          <Link to='/login' className="group flex items-center gap-4 px-9 py-4.5 rounded-2xl bg-gray-900 text-white font-bold hover:bg-black transition-all shadow-2xl shadow-gray-200">
            Start Building Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Grounded Product Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-5xl mx-auto"
        >
          <div className="absolute -inset-10 bg-brand-500/5 blur-[100px] -z-10 rounded-full" />
          <AppMockup />
        </motion.div>
      </main>

      {/* Modern Developer Tech Stack Strip */}
      <div className="relative z-10 w-full pt-20 pb-32 border-t border-gray-50 bg-[#fbfbfb]/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col items-center gap-12">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] block">The Engineering Stack</span>
              <p className="text-xs font-bold text-gray-400 italic">Built with technologies I genuinely enjoy working with</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl">
              {techStack.map((tech) => (
                <div 
                  key={tech.name} 
                  className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:border-brand-100 transition-all duration-300 group cursor-default"
                >
                  <tech.icon className="w-4 h-4 text-gray-300 group-hover:text-brand-500 transition-colors" />
                  <span className="text-[10px] font-black text-gray-400 group-hover:text-gray-900 transition-colors tracking-widest uppercase">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Subtle decorative bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      </div>
      
      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/5 backdrop-blur-sm z-[90] md:hidden" onClick={() => setMenuOpen(false)} />
      )}
    </div>
  );
};

export default Hero;