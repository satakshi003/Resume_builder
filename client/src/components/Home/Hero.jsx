import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { user } = useSelector((state) => state.auth);

    const companiesLogo = [
        {
          logo: (
            <div className="flex items-center gap-2.5">
              <svg className="h-6 w-6 text-[#90A1B9]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51c-.11.29-.22.58-.29.87.wonder.29.29.58.47.87l.11-.23zM12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M8.19 9.5l-.73-.23a8.86 8.86 0 0 0-.41 1.94c.29.18.61.34.94.49l.1-.22c-.27-.6-.5-1.3-.8-1.98h.9zm7.62 0c-.3.68-.53 1.38-.8 1.98l.1.22c.33-.15.65-.31.94-.49a8.86 8.86 0 0 0-.41-1.94l-.73.23zM12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2M9.16 14.45c-.34-.48-.64-1-.91-1.54l-.07-.14c-.28.58-.44 1.2-.44 1.85 0 1.27.52 2.43 1.34 3.27a8.07 8.07 0 0 0 .08-3.44m5.68 0a8.07 8.07 0 0 0 .08 3.44 4.97 4.97 0 0 0 1.34-3.27c0-.65-.16-1.27-.44-1.85l-.07.14c-.27.54-.57 1.06-.91 1.54M12 4c-1.34 0-2.58.44-3.59 1.17.42.7.93 1.44 1.52 2.14.64-.1 1.36-.16 2.07-.16.71 0 1.43.06 2.07.16.59-.7 1.1-1.44 1.52-2.14A7.95 7.95 0 0 0 12 4z"/></svg>
              <span className="text-[#90A1B9] font-semibold text-sm tracking-wide">React 18</span>
            </div>
          ),
        },
        {
          logo: (
            <div className="flex items-center gap-2.5">
              <svg className="h-6 w-6 text-[#90A1B9]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.12-.22V7.71c0-.09.04-.17.12-.21l7.44-4.29c.07-.04.16-.04.23 0l7.44 4.29c.08.04.12.12.12.21v8.57c0 .08-.04.16-.12.21l-7.44 4.29c-.07.04-.16.04-.22 0L9.85 19.6c-.08-.04-.17-.05-.24-.01-.68.38-.8.43-1.43.65-.16.06-.39.15.09.42l2.23 1.32c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36L12.78 2.05c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39 0 1.61 1.26 2.08 3.3 2.28 2.43.24 2.62.6 2.62 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47a.226.226 0 0 0-.22-.18h-.96c-.12 0-.21.09-.21.22 0 1.24.68 2.74 3.94 2.74 2.35 0 3.7-.93 3.7-2.55 0-1.61-1.08-2.03-3.37-2.34-2.31-.3-2.54-.46-2.54-1 0-.45.2-1.05 1.89-1.05 1.52 0 2.08.33 2.31 1.36.02.1.11.17.21.17h.97c.06 0 .12-.02.16-.07.05-.04.07-.1.07-.16C17.26 8.87 16.29 8 14 8z"/></svg>
              <span className="text-[#90A1B9] font-semibold text-sm tracking-wide">Node.js</span>
            </div>
          ),
        },
        {
          logo: (
            <div className="flex items-center gap-2.5">
              <svg className="h-6 w-6 text-[#90A1B9]" viewBox="0 0 24 24" fill="currentColor"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>
              <span className="text-[#90A1B9] font-semibold text-sm tracking-wide">OpenAI GPT</span>
            </div>
          ),
        },
        {
          logo: (
            <div className="flex items-center gap-2.5">
              <svg className="h-6 w-6 text-[#90A1B9]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>
              <span className="text-[#90A1B9] font-semibold text-sm tracking-wide">MongoDB</span>
            </div>
          ),
        },
        {
          logo: (
            <div className="flex items-center gap-2.5">
              <svg className="h-6 w-6 text-[#90A1B9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/></svg>
              <span className="text-[#90A1B9] font-semibold text-sm tracking-wide">ATS Optimized</span>
            </div>
          ),
        },
        {
          logo: (
            <div className="flex items-center gap-2.5">
              <svg className="h-6 w-6 text-[#90A1B9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              <span className="text-[#90A1B9] font-semibold text-sm tracking-wide">PDF Export</span>
            </div>
          ),
        },
    ];
  return (
    <>
      <div className="min-h-screen bg-background text-text-primary overflow-hidden relative selection:bg-brand-500/30">
        
        {/* Soft Background Gradients */}
        <div className="absolute top-0 inset-x-0 h-full w-full bg-background overflow-hidden -z-10">
          <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-500/5 blur-[120px] pointer-events-none" />
          <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA0MmMyLjItLjItNC0uMi02LS4ycy0zLjguMi02IC4ydi02aDEydjZ6IiBzdHJva2U9IiMxMTE4MjciIHN0cm9rZS1vcGFjaXR5PSIwLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_80%)]" />
        </div>

        {/* Navbar */}
        <nav className="relative z-50 flex items-center justify-between w-full py-4 px-6 md:px-12 lg:px-24 text-sm border-b border-gray-200/50 bg-white/50 backdrop-blur-md">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <span className="font-semibold text-lg font-heading tracking-tight text-gray-900">ResumeAI</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-medium text-text-secondary">
              <a href="#" className="hover:text-brand-600 transition-colors">Home</a>
              <a href="#features" className="hover:text-brand-600 transition-colors">Features</a>
              <a href="#testimonials" className="hover:text-brand-600 transition-colors">Testimonials</a>
              <a href="#cta" className="hover:text-brand-600 transition-colors">Contact</a>
          </div>

          <div className="flex gap-3">
              {!user ? (
                <>
                  <Link to='/app?state=login' className="hidden md:flex btn-secondary h-10 px-5">
                      Log in
                  </Link>
                  <Link to='/app?state=register' className="hidden md:flex btn-primary h-10 px-5">
                      Get Started
                  </Link>
                </>
              ) : (
                <Link to='/app' className='hidden md:flex btn-primary h-10 px-5'>
                  Dashboard
                </Link>
              )}
          </div>

          <button onClick={() => setMenuOpen(true)} className="md:hidden text-text-primary hover:text-brand-600 transition-colors" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16M4 6h16M4 18h16"/></svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-all duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} >
            <a href="#" className="text-text-primary font-medium" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#Features" className="text-text-primary font-medium" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#Testimonials" className="text-text-primary font-medium" onClick={() => setMenuOpen(false)}>Testimonials</a>
            <a href="#Contact" className="text-text-primary font-medium" onClick={() => setMenuOpen(false)}>Contact</a>
            {!user ? (
              <div className="flex flex-col gap-4 mt-4 w-48">
                <Link to='/app?state=login' className="btn-secondary w-full" onClick={() => setMenuOpen(false)}>Log in</Link>
                <Link to='/app?state=register' className="btn-primary w-full" onClick={() => setMenuOpen(false)}>Get Started</Link>
              </div>
            ) : (
              <Link to='/app' className="btn-primary w-48 mt-4" onClick={() => setMenuOpen(false)}>Dashboard</Link>
            )}
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-text-primary p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
        </div>

        {/* Hero Content - Split Screen */}
        <main className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Copy & CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col items-start text-left max-w-2xl"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-semibold mb-6 shadow-sm"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                ResumeAI 2.0 is live
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-text-primary leading-[1.1] mb-6 font-heading">
                Land your dream job with <br className="hidden lg:block"/>
                <span className="text-gradient">AI-powered</span> resumes.
              </h1>

              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-lg font-light">
                Create, edit, and download professional ATS-friendly resumes in minutes with intelligent AI-powered assistance.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link to='/app' className="btn-primary h-12 px-8 text-base shadow-[0_8px_20px_rgba(99,102,241,0.25)]">
                  Start building for free
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
                <button className="btn-secondary h-12 px-8 text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4Z"/></svg>
                  See how it works
                </button>
              </div>


            </motion.div>

            {/* Right Column: Visuals & Mockups */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:block h-[550px] w-full"
            >
              {/* Floating Dashboard Card (Top Right) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -right-4 top-10 z-20 glass-card rounded-2xl p-4 shadow-xl border border-white/60 bg-white/80 w-48"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                  </div>
                  <span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-md">AI Fix</span>
                </div>
                <p className="text-xs font-semibold text-gray-900 mb-1">Impact Optimized</p>
                <p className="text-[10px] text-gray-500 leading-tight">Replaced "did marketing" with "Spearheaded digital campaigns increasing ROI by 40%".</p>
              </motion.div>

              {/* Center: Floating Resume Preview (A4 Paper Style) */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[460px] bg-white rounded-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden z-10"
              >
                {/* Resume Header */}
                <div className="bg-brand-600 h-24 p-5 text-white">
                  <div className="h-5 w-32 bg-white/20 rounded mb-2"></div>
                  <div className="h-3 w-24 bg-white/20 rounded"></div>
                  <div className="flex gap-2 mt-4">
                    <div className="h-2 w-16 bg-white/20 rounded"></div>
                    <div className="h-2 w-16 bg-white/20 rounded"></div>
                  </div>
                </div>
                {/* Resume Body */}
                <div className="p-5 flex flex-col gap-4">
                  <div>
                    <div className="h-3 w-20 bg-brand-100 rounded mb-2"></div>
                    <div className="h-2 w-full bg-gray-100 rounded mb-1.5"></div>
                    <div className="h-2 w-5/6 bg-gray-100 rounded mb-1.5"></div>
                    <div className="h-2 w-4/6 bg-gray-100 rounded"></div>
                  </div>
                  <div>
                    <div className="h-3 w-24 bg-brand-100 rounded mb-2"></div>
                    <div className="flex justify-between items-end mb-1">
                      <div className="h-2.5 w-32 bg-gray-200 rounded"></div>
                      <div className="h-2 w-12 bg-gray-100 rounded"></div>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded mb-1.5"></div>
                    <div className="h-2 w-11/12 bg-gray-100 rounded mb-1.5"></div>
                    <div className="h-2 w-full bg-gray-100 rounded mb-1.5"></div>
                    
                    <div className="flex justify-between items-end mt-3 mb-1">
                      <div className="h-2.5 w-28 bg-gray-200 rounded"></div>
                      <div className="h-2 w-12 bg-gray-100 rounded"></div>
                    </div>
                    <div className="h-2 w-11/12 bg-gray-100 rounded mb-1.5"></div>
                    <div className="h-2 w-4/5 bg-gray-100 rounded"></div>
                  </div>
                </div>
                
                {/* Scan Highlight Animation overlay */}
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-brand-400/10 to-brand-500/20 pointer-events-none border-b border-brand-500/30"
                ></motion.div>
              </motion.div>

              {/* Floating ATS Score Card (Bottom Left) */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, delay: 1, ease: "easeInOut" }}
                className="absolute -left-4 bottom-16 z-20 glass border border-white/80 p-4 rounded-2xl shadow-xl flex items-center gap-4 bg-white/90 w-56"
              >
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" className="stroke-gray-100" strokeWidth="3" fill="none" />
                    <motion.path 
                      initial={{ strokeDasharray: "0, 100" }}
                      animate={{ strokeDasharray: "95, 100" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" className="stroke-green-500" strokeWidth="3" fill="none" 
                    />
                  </svg>
                  <span className="absolute text-xs font-bold text-gray-900">95</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900 mb-0.5">ATS Score</p>
                  <p className="text-[10px] text-green-600 font-medium">Top 5% match</p>
                </div>
              </motion.div>

            </motion.div>

          </div>
        </main>

        {/* Logos Section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-20">
            <p className="text-sm font-medium text-text-muted text-center mb-8 uppercase tracking-wider">Built with modern technologies</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {companiesLogo.map((company, index) => (
                    <div key={index} className="flex items-center justify-center transition-transform hover:scale-105">
                        {company.logo}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero;