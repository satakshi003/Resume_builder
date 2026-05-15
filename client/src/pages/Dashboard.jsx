import { FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon, XIcon, LayoutDashboardIcon, FileTextIcon, SettingsIcon, CreditCardIcon, BarChart3Icon, EyeIcon } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import pdfToText from 'react-pdftotext'
import api from '../configs/api'
import toast from 'react-hot-toast'

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
    <div className='max-w-[1400px] mx-auto px-4 md:px-8 py-8 flex gap-8 items-start min-h-[85vh]'>
      
      {/* SaaS Sidebar */}
      <aside className='hidden lg:flex flex-col w-64 shrink-0 sticky top-24'>
        <div className="glass-card rounded-2xl p-4 bg-white/60 border border-gray-200/60 shadow-sm flex flex-col gap-2">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-3 pt-2">Overview</p>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-brand-50 text-brand-600 font-medium transition-colors">
            <LayoutDashboardIcon className="w-5 h-5" />
            Dashboard
          </button>
          <button onClick={() => navigate('/templates')} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors">
            <FileTextIcon className="w-5 h-5" />
            Templates
          </button>
          
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-4 mb-2 px-3">Settings</p>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors">
            <CreditCardIcon className="w-5 h-5" />
            Billing
          </button>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors">
            <SettingsIcon className="w-5 h-5" />
            Preferences
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col gap-8 min-w-0">
        
        {/* Header & Greeting */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className='text-3xl font-bold font-heading text-gray-900 tracking-tight'>
              Welcome back, {user?.username?.split(' ')[0]}
            </h1>
            <p className="text-sm text-text-secondary mt-1">Here is what's happening with your resumes today.</p>
          </div>
          <button onClick={() => setShowCreateResume(true)} className="btn-primary shadow-[0_4px_14px_0_rgba(99,102,241,0.3)]">
            <PlusIcon className="w-4 h-4 mr-2" />
            New Resume
          </button>
        </div>

        {/* Analytics Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          <div className="glass-card bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-4 group hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 group-hover:scale-110 transition-transform">
              <FileTextIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-0.5">Total Resumes</p>
              <h3 className="text-2xl font-bold text-gray-900">{allResumes.length}</h3>
            </div>
          </div>
          
          <div className="glass-card bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-4 group hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
              <BarChart3Icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-0.5">Avg. ATS Score</p>
              <h3 className="text-2xl font-bold text-gray-900">85%</h3>
            </div>
          </div>

          <div className="glass-card bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm flex items-center gap-4 group hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
              <EyeIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-0.5">Profile Views</p>
              <h3 className="text-2xl font-bold text-gray-900">24</h3>
            </div>
          </div>
        </div>

        {/* Action Cards & Resumes Grid */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4 font-heading">Your Documents</h2>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            
            {/* Create New Card */}
            <button onClick={() => setShowCreateResume(true)} className='w-full bg-white h-60 flex flex-col items-center justify-center rounded-2xl gap-4 text-text-secondary border-2 border-dashed border-gray-200 group hover:border-brand-400 hover:shadow-lg transition-all duration-300 cursor-pointer outline-none'>
              <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <PlusIcon className='w-6 h-6 text-brand-600' />
              </div>
              <div className="text-center">
                <p className='text-sm font-semibold text-gray-900 group-hover:text-brand-600 transition-colors duration-300'>Start from Scratch</p>
                <p className="text-xs text-gray-500 mt-1">Create a blank resume</p>
              </div>
            </button>

            {/* Upload Existing Card */}
            <button onClick={() => setShowUploadResume(true)} className='w-full bg-white h-60 flex flex-col items-center justify-center rounded-2xl gap-4 text-text-secondary border-2 border-dashed border-gray-200 group hover:border-violet-400 hover:shadow-lg transition-all duration-300 cursor-pointer outline-none'>
              <div className="w-14 h-14 rounded-full bg-violet-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <UploadCloudIcon className='w-6 h-6 text-violet-600' />
              </div>
              <div className="text-center">
                <p className='text-sm font-semibold text-gray-900 group-hover:text-violet-600 transition-colors duration-300'>Import PDF</p>
                <p className="text-xs text-gray-500 mt-1">AI will extract your data</p>
              </div>
            </button>

            {/* User Resumes */}
            {allResumes.map((resume, index) => {
              const baseColor = colors[index % colors.length];
              return (
                <div key={index} onClick={() => navigate(`/app/builder/${resume._id}`)} className='relative w-full h-60 flex flex-col items-center justify-center rounded-2xl gap-3 border border-gray-200 bg-white group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden'>
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity" style={{background: `linear-gradient(135deg, ${baseColor}, transparent)`}} />
                  
                  {/* Decorative Document Header */}
                  <div className="absolute top-0 inset-x-0 h-1.5 opacity-80" style={{backgroundColor: baseColor}} />

                  <FilePenLineIcon className='w-10 h-10 group-hover:scale-110 transition-transform duration-300 z-10' style={{color: baseColor}} />
                  <p className='text-sm font-semibold px-4 text-center w-full z-10 text-gray-900 line-clamp-2 mt-2'>{resume.title}</p>
                  <p className='absolute bottom-4 text-xs font-medium text-gray-500 px-2 text-center z-10 bg-gray-50 py-1 rounded-md'>
                    Updated {new Date(resume.updatedAt).toLocaleDateString()}
                  </p>
                  
                  {/* Hover Actions Layer */}
                  <div className='absolute inset-0 bg-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20'>
                    <button 
                      onClick={(e) => { e.stopPropagation(); seteditResumeId(resume._id); setTitle(resume.title); }} 
                      className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-brand-600 hover:bg-brand-50 shadow-sm transition-colors'
                      title="Rename"
                    >
                      <PencilIcon className='w-4 h-4' />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); deleteResume(resume._id); }} 
                      className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-red-600 hover:bg-red-50 shadow-sm transition-colors'
                      title="Delete"
                    >
                      <TrashIcon className='w-4 h-4' />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </main>

      {/* Modals */}
      {showCreateResume && (
        <form onSubmit={createResume} onClick={() => setShowCreateResume(false)} className='fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4 transition-all duration-300'>
          <div onClick={e => e.stopPropagation()} className='relative bg-white border border-gray-100 shadow-2xl rounded-2xl w-full max-w-md p-8 animate-fade-in-up'>
            <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 mb-6">
              <PlusIcon className="w-6 h-6" />
            </div>
            <h2 className='text-2xl font-bold font-heading mb-2 text-gray-900'>Create New Resume</h2>
            <p className="text-sm text-gray-500 mb-6">Give your new document a name to get started.</p>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Resume Title</label>
              <input onChange={(e) => setTitle(e.target.value)} value={title} type='text' placeholder='e.g., Software Engineer - Google' className='w-full input-field' required autoFocus />
            </div>

            <button className='btn-primary w-full py-3 text-sm'>Create Document</button>
            <button type="button" className='absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors outline-none' onClick={() => {setShowCreateResume(false); setTitle('');}}>
              <XIcon className="w-5 h-5" />
            </button>
          </div>
        </form>
      )}

      {showUploadResume && (
         <form onSubmit={uploadResume} onClick={() => setShowUploadResume(false)} className='fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4 transition-all duration-300'>
          <div onClick={e => e.stopPropagation()} className='relative bg-white border border-gray-100 shadow-2xl rounded-2xl w-full max-w-md p-8 animate-fade-in-up'>
            <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 mb-6">
              <UploadCloudIcon className="w-6 h-6" />
            </div>
            <h2 className='text-2xl font-bold font-heading mb-2 text-gray-900'>Import Existing Resume</h2>
            <p className="text-sm text-gray-500 mb-6">Our AI will automatically extract your data from the PDF.</p>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Resume Title</label>
              <input onChange={(e) => setTitle(e.target.value)} value={title} type='text' placeholder='e.g., Imported Resume' className='w-full input-field' required />
            </div>

            <div className="mb-6">
              <label htmlFor='resume-input' className='block text-sm font-medium text-gray-700 mb-1.5'>
                Select PDF File
              </label>
              <label htmlFor='resume-input' className='flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-200 text-gray-500 rounded-xl p-8 hover:border-brand-500 hover:text-brand-600 hover:bg-brand-50/50 cursor-pointer transition-all duration-300'>
                {resume ? (
                  <>
                    <FileTextIcon className="w-8 h-8 text-brand-500" />
                    <p className='text-brand-600 font-medium text-sm text-center break-all'>{resume.name}</p>
                  </>
                ) : (
                  <>
                    <UploadCloudIcon className='w-8 h-8 text-gray-400' />
                    <p className="text-sm font-medium text-gray-600">Click to browse or drag and drop</p>
                    <p className="text-xs text-gray-400">PDF files up to 5MB</p>
                  </>
                )}
              </label>
              <input type='file' id='resume-input' accept='.pdf' hidden onChange={(e) => setResume(e.target.files[0])} />
            </div>

            <button disabled={isLoading} className='btn-primary w-full py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed'>
              {isLoading && <LoaderCircleIcon className='animate-spin w-4 h-4 text-white'/> }
              {isLoading ? 'Processing with AI...' : 'Import Resume'}
            </button>
            <button type="button" className='absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors outline-none' onClick={() => {setShowUploadResume(false); setTitle(''); setResume(null);}}>
              <XIcon className="w-5 h-5" />
            </button>
          </div>
        </form>
      )}

      {editResumeId && (
        <form onSubmit={editTitle} onClick={() => seteditResumeId('')} className='fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4 transition-all duration-300'>
          <div onClick={e => e.stopPropagation()} className='relative bg-white border border-gray-100 shadow-2xl rounded-2xl w-full max-w-md p-8 animate-fade-in-up'>
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mb-6">
              <PencilIcon className="w-6 h-6" />
            </div>
            <h2 className='text-2xl font-bold font-heading mb-2 text-gray-900'>Rename Document</h2>
            <p className="text-sm text-gray-500 mb-6">Update the title of your resume.</p>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">New Title</label>
              <input onChange={(e) => setTitle(e.target.value)} value={title} type='text' placeholder='Enter resume title' className='w-full input-field' required autoFocus />
            </div>

            <button className='btn-primary w-full py-3 text-sm'>Save Changes</button>
            <button type="button" className='absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors outline-none' onClick={() => {seteditResumeId(''); setTitle('');}}>
              <XIcon className="w-5 h-5" />
            </button>
          </div>
        </form>
      )}

    </div>
  )
}

export default Dashboard