import React from 'react'
import { Mail, User2Icon, Lock, Sparkles } from 'lucide-react'
import { useDispatch } from 'react-redux'
import api from '../configs/api'
import { login } from '../app/features/authSlice'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

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
            toast(error?.response?.data?.message || error.message)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-background relative selection:bg-brand-500/30'>
        {/* Soft Background Gradients */}
        <div className="absolute top-0 inset-x-0 h-full w-full bg-background overflow-hidden -z-10">
          <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-500/5 blur-[120px] pointer-events-none" />
          <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />
        </div>

        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-all">
                <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg font-heading tracking-tight text-text-primary">ResumeAI</span>
        </Link>

        <form onSubmit={handleSubmit} className="w-full max-w-[400px] text-center p-8 bg-white border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl relative z-10">
            <h1 className="text-gray-900 text-3xl font-bold font-heading">{state === "login" ? "Welcome back" : "Create an account"}</h1>
            <p className="text-text-secondary text-sm mt-2 mb-8">Please {state} to continue building.</p>
            
            <div className="space-y-4">
                {state !== "login" && (
                    <div className="relative flex items-center w-full">
                        <User2Icon className="absolute left-4 w-4 h-4 text-gray-400" />
                        <input type="text" name="username" placeholder="Username" className="pl-11" value={formData.username} onChange={handleChange} required />
                    </div>
                )}
                <div className="relative flex items-center w-full">
                    <Mail className="absolute left-4 w-4 h-4 text-gray-400" />
                    <input type="email" name="email" placeholder="Email address" className="pl-11" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="relative flex items-center w-full">
                    <Lock className="absolute left-4 w-4 h-4 text-gray-400" />
                    <input type="password" name="password" placeholder="Password" className="pl-11" value={formData.password} onChange={handleChange} required />
                </div>
                {state !== "login" && (
                    <div className="relative flex items-center w-full">
                        <Lock className="absolute left-4 w-4 h-4 text-gray-400" />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="pl-11" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                )}
            </div>

            <div className="mt-4 flex justify-between items-center px-1">
                <div className="flex items-center gap-2">
                    {state === "login" && (
                        <>
                            <input type="checkbox" id="remember" className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-gray-300" />
                            <label htmlFor="remember" className="text-sm text-text-secondary cursor-pointer">Remember me</label>
                        </>
                    )}
                </div>
                <button type="button" className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
                    Forgot password?
                </button>
            </div>

            <button type="submit" className="btn-primary w-full h-12 mt-6 text-base shadow-[0_4px_14px_0_rgba(99,102,241,0.39)]">
                {state === "login" ? "Log In" : "Sign Up"}
            </button>
            
            <p className="text-text-secondary text-sm mt-6">
                {state === "login" ? "Don't have an account?" : "Already have an account?"}
                <button type="button" onClick={() => setState(prev => prev === "login" ? "register" : "login")} className="ml-1 text-brand-600 font-semibold hover:text-brand-700 transition-colors">
                    Click here
                </button>
            </p>
        </form>
    </div>
  )
}

export default Login