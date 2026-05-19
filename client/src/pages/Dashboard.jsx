import { FilePenLine, LoaderCircle, Pencil, Plus, Trash, UploadCloud, X, LayoutDashboard, FileText, Settings, CreditCard, BarChart3, Eye, Wand2, Sparkles, ChevronRight, Clock, Layers, MousePointer2 } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import pdfToText from 'react-pdftotext'
import api from '../configs/api'
import toast from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'

const Dashboard = () => {

  const {user, token} = useSelector(state => state.auth)

  const colors = ["#8b5cf6", "#f59e0b", "#ef4444", "#0ea5e9", "#10b981"]
  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [editResumeId, seteditResumeId] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const loadAllResumes = async () => {
    try{
      const {data} = await api.get('/api/users/resumes')
      setAllResumes(data.resumes)
    }catch(error){
       toast.error(error?.response?.data?.message || error.message)
    }
  }

  const createResume = async (event) => {
    try{
      event.preventDefault()
      const {data} = await api.post('/api/resumes/create', {title})
      setAllResumes([...allResumes, data.resume])
      setTitle('')
      setShowCreateResume(false)
      navigate(`/app/builder/${data.resume._id}`)
    }catch(error){
      toast.error(error?.response?.data?.message || error.message)
    }
  }

   const uploadResume = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    try{
      const resumeText = await pdfToText(resume)
      const {data} = await api.post('/api/ai/upload-resume', {title, resumeText})
      setTitle('')
      setResume(null)
      setShowUploadResume(false)
      navigate(`/app/builder/${data.resumeId}`)
    }catch(error){
       toast.error(error?.response?.data?.message || error.message)
    }
    setIsLoading(false)
  }

  const editTitle = async (event) => {
    try{
      event.preventDefault()
      const {data} = await api.put('/api/resumes/update', {resumeId: editResumeId, resumeData: JSON.stringify({title})})
      setAllResumes(allResumes.map(resume => resume._id === editResumeId ? {...resume, title} : resume))
      setTitle('')
      seteditResumeId('')
      toast.success(data.message)
    }catch(error){
       toast.error(error?.response?.data?.message || error.message)
    }
  }

  const deleteResume = async (resumeId) => {
    try{
      const confirm = window.confirm('Are you sure you want to delete this resume?')
    if(confirm){
      const {data} = await api.delete(`/api/resumes/delete/${resumeId}`)
      setAllResumes(allResumes.filter(resume => resume._id !== resumeId ))
      toast.success(data.message)
    }
    }catch(error){
       toast.error(error?.response?.data?.message || error.message)
    }
  }

  useEffect(() => {
    loadAllResumes()
  }, [])

  return (
    <div className='max-w-[1440px] mx-auto px-6 lg:px-12 py-10 lg:py-16 min-h-screen relative overflow-hidden bg-white/20'>
      {/* Subtle Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-violet-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Main Workspace Area */}
      <main className="max-w-6xl mx-auto flex flex-col gap-10 min-w-0 relative z-10">
        
        {/* Workspace Header - More Elegant with Subtle Accent */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2">
          <div className="relative">
            <div className="absolute -left-8 top-0 w-24 h-24 bg-brand-500/10 blur-[40px] rounded-full pointer-events-none" />
            <h1 className='text-4xl lg:text-5xl font-black font-heading text-gray-900 tracking-tight relative'>
              Welcome, <span className="bg-gradient-to-r from-brand-600 to-violet-600 bg-clip-text text-transparent">{user?.username?.split(' ')[0]}</span>
            </h1>
            <p className="text-gray-600 mt-2 font-medium text-base lg:text-lg flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              Continue building your professional identity.
            </p>
          </div>
          <button 
            onClick={() => setShowCreateResume(true)} 
            className="h-12 px-7 bg-gradient-to-br from-gray-900 to-brand-950 text-white rounded-2xl font-bold text-sm flex items-center gap-2.5 hover:shadow-[0_10px_30px_rgba(99,102,241,0.2)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
          >
            <Plus className="w-4.5 h-4.5 text-brand-400 group-hover:rotate-90 transition-transform duration-500" />
            Create Resume
          </button>
        </div>

        {/* Quick Actions Row - Tinted and Refined */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <motion.div 
             whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
             onClick={() => setShowCreateResume(true)}
             className="bg-brand-50/20 backdrop-blur-xl p-6 rounded-[32px] border border-brand-100/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group hover:border-brand-300/50 cursor-pointer transition-all flex items-center gap-5"
           >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-brand-500/30 transition-all duration-500 shrink-0">
                < Wand2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[15px] font-black text-gray-900 truncate">Build from Scratch</p>
                <p className="text-[11px] text-brand-500/80 font-black uppercase tracking-wider mt-1">AI Powered</p>
              </div>
           </motion.div>

           <motion.div 
             whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
             onClick={() => setShowUploadResume(true)}
             className="bg-violet-50/20 backdrop-blur-xl p-6 rounded-[32px] border border-violet-100/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group hover:border-violet-300/50 cursor-pointer transition-all flex items-center gap-5"
           >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white group-hover:shadow-violet-500/30 transition-all duration-500 shrink-0">
                <UploadCloud className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[15px] font-black text-gray-900 truncate">Import Existing PDF</p>
                <p className="text-[11px] text-violet-500/80 font-black uppercase tracking-wider mt-1">AI Extractor</p>
              </div>
           </motion.div>
     </div>

        {/* Saved Documents Grid - More Dimensional */}
        <div className="space-y-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
               <h2 className="text-3xl font-black text-gray-900 font-heading tracking-tight">Recent Projects</h2>
               <div className="px-3.5 py-1.5 rounded-full bg-gray-900/5 text-[11px] font-black text-gray-500 uppercase tracking-widest border border-gray-900/5">{allResumes.length} Documents</div>
            </div>
          </div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>
            {allResumes.map((resume, index) => {
              const baseColor = colors[index % colors.length];
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.5 }}
                  key={index} 
                  onClick={() => navigate(`/app/builder/${resume._id}`)} 
                  className='relative w-full h-[320px] flex flex-col rounded-[32px] border border-gray-100 bg-white group hover:shadow-[0_30px_70px_rgba(0,0,0,0.07)] hover:border-brand-200/50 hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden'
                >
                  {/* Premium Resume Preview Wrapper */}
                  <div className="flex-1 bg-gray-50/30 p-5 relative overflow-hidden group/preview">
                    {/* Simulated Document Sheet - Tighter Spacing and Depth */}
                    <div className="bg-white h-full w-full rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-white p-4.5 flex flex-col gap-4 relative z-10 overflow-hidden">
                       {/* Subtle inner glow */}
                       <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/30 pointer-events-none" />
                       
                       <div className="flex justify-between items-start relative z-10">
                          <div className="space-y-1.5 w-3/4">
                             <div className="h-2 w-full bg-gray-100 rounded-full" />
                             <div className="h-1.5 w-2/3 bg-gray-50 rounded-full" />
                          </div>
                          <div className="w-7 h-7 rounded-lg shadow-sm" style={{ backgroundColor: baseColor, opacity: 0.1 }} />
                       </div>
                       
                       <div className="space-y-2.5 relative z-10">
                          <div className="h-1.5 w-1/4 bg-gray-100/60 rounded-full" />
                          <div className="space-y-1.5">
                             <div className="h-1.5 w-full bg-gray-50 rounded-full" />
                             <div className="h-1.5 w-[92%] bg-gray-50 rounded-full" />
                          </div>
                       </div>

                       <div className="space-y-2.5 pt-1 relative z-10">
                          <div className="h-1.5 w-1/3 bg-gray-100/60 rounded-full" />
                          <div className="h-1.5 w-full bg-gray-50 rounded-full" />
                       </div>
                    </div>
                    
                    {/* Floating Hover Indicator - Elevated */}
                    <div className="absolute top-4 right-4 w-9 h-9 bg-white shadow-xl shadow-gray-200/40 rounded-xl border border-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center translate-y-3 group-hover:translate-y-0 z-20">
                       <Sparkles className="w-4 h-4" style={{ color: baseColor }} />
                    </div>

                    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-gray-50/80 to-transparent pointer-events-none z-10" />
                  </div>

                  {/* Document Footer Info - Compelling and Rich */}
                  <div className="px-6 py-5 flex flex-col gap-1.5 relative bg-white border-t border-gray-50/50">
                    <div className="flex items-center justify-between group/title">
                       <p className='text-base font-black text-gray-900 line-clamp-1 flex-1 tracking-tight group-hover:text-brand-600 transition-colors'>{resume.title}</p>
                       <div className="flex gap-1 ml-3 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                          <button 
                            onClick={(e) => { e.stopPropagation(); seteditResumeId(resume._id); setTitle(resume.title); }} 
                            className='w-8 h-8 rounded-xl flex items-center justify-center text-gray-400 hover:text-brand-600 hover:bg-brand-50 transition-all'
                          >
                            <Pencil className='w-3.5 h-3.5' />
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); deleteResume(resume._id); }} 
                            className='w-8 h-8 rounded-xl flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all'
                          >
                            <Trash className='w-3.5 h-3.5' />
                          </button>
                       </div>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full shadow-sm" style={{ backgroundColor: baseColor }} />
                       <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.15em]">
                         Modified {new Date(resume.updatedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                       </p>
                    </div>
                  </div>
                  
                  {/* Subtle Accent Line - Richer Presence */}
                  <div className="absolute inset-x-0 bottom-0 h-1 z-30 opacity-60" style={{ backgroundColor: baseColor }} />
                </motion.div>
              )
            })}
          </div>
        </div>

      </main>

      {/* Modals - Simplified */}
      <AnimatePresence>
        {showCreateResume && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className='fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4'
            onClick={() => setShowCreateResume(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={e => e.stopPropagation()} 
              className='relative bg-white shadow-2xl rounded-[40px] w-full max-w-md p-12'
            >
              <div className="w-16 h-16 rounded-[24px] bg-brand-50 flex items-center justify-center text-brand-600 mb-8">
                <Wand2 className="w-7 h-7" />
              </div>
              <h2 className='text-3xl font-black font-heading mb-3 text-gray-900 tracking-tight'>Name your project</h2>
              <p className="text-gray-500 mb-10 font-medium">What's the goal for this new resume?</p>
              
              <form onSubmit={createResume} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-300 uppercase tracking-[0.25em] ml-1">Resume Name</label>
                  <input 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title} 
                    type='text' 
                    placeholder='e.g., Senior Developer - Netflix' 
                    className='w-full h-14 px-6 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/5 transition-all outline-none font-bold text-gray-900' 
                    required 
                    autoFocus 
                  />
                </div>

                <button className='w-full h-15 bg-gray-900 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-brand-600 shadow-2xl shadow-gray-200 transition-all flex items-center justify-center gap-3 group'>
                  Create Resume
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <button className='absolute top-8 right-8 p-3 text-gray-300 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors' onClick={() => {setShowCreateResume(false); setTitle('');}}>
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}

        {showUploadResume && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className='fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4'
            onClick={() => setShowUploadResume(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={e => e.stopPropagation()} 
              className='relative bg-white shadow-2xl rounded-[40px] w-full max-w-md p-12'
            >
              <div className="w-16 h-16 rounded-[24px] bg-violet-50 flex items-center justify-center text-violet-600 mb-8">
                <UploadCloud className="w-7 h-7" />
              </div>
              <h2 className='text-3xl font-black font-heading mb-3 text-gray-900 tracking-tight'>Import Resume</h2>
              <p className="text-gray-500 mb-10 font-medium text-lg leading-relaxed">Our AI will automatically extract and structure your information.</p>
              
              <form onSubmit={uploadResume} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-300 uppercase tracking-[0.25em] ml-1">Document Title</label>
                  <input 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title} 
                    type='text' 
                    placeholder='e.g., Imported PDF' 
                    className='w-full h-14 px-6 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/5 transition-all outline-none font-bold text-gray-900' 
                    required 
                  />
                </div>

                <div className="space-y-3">
                  <label className='text-[10px] font-black text-gray-300 uppercase tracking-[0.25em] ml-1'>
                    Select PDF File
                  </label>
                  <label htmlFor='resume-input' className='flex flex-col items-center justify-center gap-4 border-2 border-dashed border-gray-100 text-gray-400 rounded-[28px] p-10 hover:border-brand-500 hover:bg-brand-50/50 cursor-pointer transition-all duration-500 group'>
                    {resume ? (
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center">
                           <FileText className="w-7 h-7 text-brand-500" />
                        </div>
                        <p className='text-brand-600 font-bold text-sm text-center max-w-[200px] truncate'>{resume.name}</p>
                      </div>
                    ) : (
                      <>
                        <UploadCloud className='w-10 h-10 text-gray-200 group-hover:text-brand-500 transition-colors' />
                        <div className="text-center">
                           <p className="text-sm font-bold text-gray-700">Click to browse</p>
                           <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">PDF Files only</p>
                        </div>
                      </>
                    )}
                  </label>
                  <input type='file' id='resume-input' accept='.pdf' hidden onChange={(e) => setResume(e.target.files[0])} />
                </div>

                <button disabled={isLoading} className='w-full h-15 bg-gray-900 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-brand-600 shadow-2xl shadow-gray-200 transition-all flex items-center justify-center gap-3 group disabled:opacity-70'>
                  {isLoading ? <LoaderCircle className='animate-spin w-5 h-5'/> : <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" /> }
                  {isLoading ? 'Extracting...' : 'Start Extraction'}
                </button>
              </form>

              <button className='absolute top-8 right-8 p-3 text-gray-300 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors' onClick={() => {setShowUploadResume(false); setTitle(''); setResume(null);}}>
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}

        {editResumeId && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className='fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4'
            onClick={() => seteditResumeId('')}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={e => e.stopPropagation()} 
              className='relative bg-white shadow-2xl rounded-[40px] w-full max-w-md p-12'
            >
              <div className="w-16 h-16 rounded-[24px] bg-gray-50 flex items-center justify-center text-gray-400 mb-8">
                <Pencil className="w-7 h-7" />
              </div>
              <h2 className='text-3xl font-black font-heading mb-3 text-gray-900 tracking-tight'>Rename</h2>
              <p className="text-gray-500 mb-10 font-medium">Update the title of your document.</p>
              
              <form onSubmit={editTitle} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-300 uppercase tracking-[0.25em] ml-1">New Title</label>
                  <input 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title} 
                    type='text' 
                    placeholder='Enter resume title' 
                    className='w-full h-14 px-6 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/5 transition-all outline-none font-bold text-gray-900' 
                    required 
                    autoFocus 
                  />
                </div>

                <button className='w-full h-15 bg-gray-900 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-brand-600 shadow-2xl shadow-gray-200 transition-all'>
                  Update Title
                </button>
              </form>

              <button className='absolute top-8 right-8 p-3 text-gray-300 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors' onClick={() => {seteditResumeId(''); setTitle('');}}>
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Dashboard
