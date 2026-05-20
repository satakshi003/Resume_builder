import React from 'react'
import { Mail, User2Icon, Lock, Sparkles, ChevronRight, CheckCircle2, Layout, Zap, Wand2, Palette, Clock } from 'lucide-react'
import { useDispatch } from 'react-redux'
import api from '../configs/api'
import { login } from '../app/features/authSlice.js'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const query = new URLSearchParams(window.location.search)
    const urlState = query.get('state')
    const [state, setState] = React.useState(urlState || "login")

    const [formData, setFormData] = React.useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '' 
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const {data} = await api.post(`/api/users/${state}`, formData)
            const accessToken = data.data.accessToken
            dispatch(login({ token: accessToken, user: data.data.user }))
            localStorage.setItem('token', accessToken)
            toast.success(data.message)
            navigate('/')
        }catch(error){
            toast.error(error?.response?.data?.message || error.message)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

  return (
    <div className='flex min-h-screen bg-[#fafafa] selection:bg-brand-500/10'>
        {/* Left Side: Product Identity Showcase */}
        <div className="hidden lg:flex flex-1 relative bg-white overflow-hidden border-r border-gray-100">
            {/* Ambient Brand Details */}
            <div className="absolute top-0 right-0 w-[80%] h-full bg-[radial-gradient(circle_at_100%_0%,rgba(99,102,241,0.08)_0%,transparent_50%)]" />
            <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-gray-50 to-transparent" />
            
            <div className="relative z-10 w-full flex flex-col justify-center px-16 xl:px-24">
                <Link to="/" className="flex items-center gap-2.5 mb-14 group w-fit">
                    <img src="/shield.png" alt="VeloraCV Shield" className="h-14 w-auto object-contain" />
                    <span className="font-bold text-xl font-heading tracking-tight text-gray-900">VeloraCV</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-lg"
                >
                    <h2 className="text-4xl xl:text-5xl font-black font-heading text-gray-900 leading-[1.1] mb-6">
                        Build your next <br />
                        big move with <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-violet-600">Intelligence.</span>
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed mb-12 max-w-sm">
                        Create high-impact resumes in minutes with AI-assisted writing and premium templates.
                    </p>
                </motion.div>

                {/* Mini Workspace Preview */}
                <div className="relative mt-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full bg-white rounded-2xl border border-gray-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden flex h-[400px]"
                    >
                        {/* Fake Sidebar */}
                        <div className="w-16 border-r border-gray-100 bg-gray-50/50 flex flex-col items-center py-6 gap-6">
                            <div className="w-8 h-8 rounded-lg bg-gray-200/50" />
                            <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500">
                                <Layout className="w-4 h-4" />
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-gray-200/50" />
                            <div className="mt-auto w-8 h-8 rounded-lg bg-gray-200/50" />
                        </div>

                        {/* Fake Editor Main */}
                        <div className="flex-1 flex flex-col">
                            <div className="h-12 border-b border-gray-100 px-6 flex items-center justify-between">
                                <div className="flex gap-2">
                                    {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-gray-200" />)}
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        {['#6366f1', '#ec4899', '#10b981'].map(c => (
                                            <div key={c} className="w-3 h-3 rounded-full border border-gray-100" style={{ backgroundColor: c }} />
                                        ))}
                                    </div>
                                    <div className="h-6 w-px bg-gray-100 mx-1" />
                                    <div className="h-7 px-3 rounded-full bg-gray-900 text-[10px] font-bold text-white flex items-center gap-1.5 cursor-pointer hover:bg-brand-600 transition-colors">
                                        <Wand2 className="w-3 h-3" />
                                        Improve
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex-1 p-8 overflow-hidden bg-gray-50/30">
                                <div className="bg-white rounded-lg border border-gray-100 shadow-sm h-full p-6 relative">
                                    {/* Resume Content Placeholder */}
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="space-y-2 flex-1">
                                            <div className="h-4 w-1/3 bg-gray-100 rounded-md" />
                                            <div className="h-2 w-1/4 bg-gray-50 rounded-full" />
                                        </div>
                                        <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-3 w-1/4 bg-gray-100 rounded-sm" />
                                        <div className="space-y-2">
                                            <div className="h-2 w-full bg-gray-50 rounded-full" />
                                            <div className="h-2 w-full bg-gray-50 rounded-full" />
                                            <div className="h-2 w-3/4 bg-gray-50 rounded-full" />
                                        </div>
                                    </div>

                                    {/* AI Suggestion Chip */}
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-1/2 right-4 translate-y-[-50%] bg-white rounded-xl border border-brand-100 shadow-xl p-3 flex items-start gap-3 max-w-[200px]"
                                    >
                                        <div className="w-6 h-6 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                                            <Zap className="w-3.5 h-3.5 text-brand-500" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-1">AI Suggestion</p>
                                            <p className="text-[11px] font-medium text-gray-600 leading-snug">"Try using action verbs like 'Architected' or 'Spearheaded'..."</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative Background Glows */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-500/5 blur-[100px] pointer-events-none" />
                </div>
            </div>
        </div>

        {/* Right Side: Branded Auth Form */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-12 relative">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-brand-500/5 to-transparent pointer-events-none" />
            
            <Link to="/" className="lg:hidden absolute top-8 left-8 flex items-center gap-2 group">
                <img  src="/shield.png" alt="VeloraCV Shield" className="h-9 w-9 object-contain" />
                <span className="font-bold text-lg font-heading tracking-tight text-gray-900">VeloraCV</span>
            </Link>

            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-[400px] relative z-10"
            >
                <div className="mb-12">
                    <h1 className="text-3xl font-black font-heading text-gray-900 mb-3 tracking-tight">
                        {state === "login" ? "Welcome back" : "Get Started"}
                    </h1>
                    <p className="text-gray-500 font-medium">
                        {state === "login" ? "Continue building your professional story." : "Build a resume that stands out in minutes."}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={state}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-5"
                        >
                            {state !== "login" && (
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Username</label>
                                    <div className="relative group">
                                        <User2Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
                                        <input 
                                            type="text" 
                                            name="username" 
                                            placeholder="johndoe" 
                                            className="w-full h-13 pl-11 pr-4 bg-white border border-gray-200 rounded-2xl focus:border-brand-500 focus:ring-4 focus:ring-brand-500/5 transition-all outline-none font-medium placeholder:text-gray-300" 
                                            value={formData.username} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>
                            )}
                            
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="name@email.com" 
                                        className="w-full h-13 pl-11 pr-4 bg-white border border-gray-200 rounded-2xl focus:border-brand-500 focus:ring-4 focus:ring-brand-500/5 transition-all outline-none font-medium placeholder:text-gray-300" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
                                    <input 
                                        type="password" 
                                        name="password" 
                                        placeholder="••••••••" 
                                        className="w-full h-13 pl-11 pr-4 bg-white border border-gray-200 rounded-2xl focus:border-brand-500 focus:ring-4 focus:ring-brand-500/5 transition-all outline-none font-medium placeholder:text-gray-300" 
                                        value={formData.password} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>

                            {state !== "login" && (
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Confirm Password</label>
                                    <div className="relative group">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
                                        <input 
                                            type="password" 
                                            name="confirmPassword" 
                                            placeholder="••••••••" 
                                            className="w-full h-13 pl-11 pr-4 bg-white border border-gray-200 rounded-2xl focus:border-brand-500 focus:ring-4 focus:ring-brand-500/5 transition-all outline-none font-medium placeholder:text-gray-300" 
                                            value={formData.confirmPassword} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-between items-center py-1">
                        {state === "login" && (
                            <label className="flex items-center gap-2.5 group cursor-pointer">
                                <div className="relative flex items-center justify-center">
                                    <input type="checkbox" id="remember" className="peer appearance-none w-5 h-5 rounded-md border border-gray-200 checked:bg-brand-500 checked:border-brand-500 transition-all cursor-pointer" />
                                    <CheckCircle2 className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                                </div>
                                <span className="text-sm font-semibold text-gray-500 group-hover:text-gray-900 transition-colors">Remember me</span>
                            </label>
                        )}
                    </div>

                    <button type="submit" className="w-full h-14 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl font-bold flex items-center justify-center gap-2.5 hover:from-brand-600 hover:to-violet-600 active:scale-[0.98] transition-all shadow-xl shadow-gray-200 group">
                        {state === "login" ? "Sign In" : "Create Account"}
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-12">
                    {state === "login" ? "New to VeloraCV?" : "Existing user?"}
                    <button 
                        type="button" 
                        onClick={() => setState(prev => prev === "login" ? "register" : "login")} 
                        className="ml-2 font-black text-brand-600 hover:text-brand-700 transition-colors"
                    >
                        {state === "login" ? "Join for free" : "Sign in here"}
                    </button>
                </p>
            </motion.div>
        </div>
    </div>
  );
};

export default Login;