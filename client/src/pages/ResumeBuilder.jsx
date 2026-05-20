import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets'
import { ArrowLeftIcon, Briefcase, ChevronLeft, ChevronRight, DownloadCloud, EyeIcon, EyeOffIcon, FileText, FolderIcon, GraduationCap, Share2Icon, Sparkle, User } from 'lucide-react'
import PersonalInfoForm from '../components/PersonalInfoForm'
import ResumePreview from '../components/ResumePreview'
import TemplateSelector from '../components/TemplateSelector'
import ColorPicker from '../components/ColorPicker'
import ProfessionalSummaryForm from '../components/ProfessionalSummaryForm'
import ExperienceForm from '../components/ExperienceForm'
import EducationForm from '../components/EducationForm'
import ProjectForm from '../components/ProjectForm'
import SkillsForm from '../components/SkillsForm'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'

const ResumeBuilder = () => {

  const {resumeId} = useParams()
  const {token} = useSelector(state => state.auth)

  const [resumeData, setResumeData] = useState({
    _id: '',
    title: '',
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
  })

  const loadExistingResume = async () => {
    try{
      const {data} = await api.get('/api/resumes/get/' + resumeId)
      if(data.resume){
        const mappedResume = {
          ...data.resume,
          accent_color: data.resume.accent_color || data.resume.theme_color || "#3B82F6"
        };
        setResumeData(mappedResume);
        const hasBgRemoved = typeof data.resume.personal_info?.image === 'string' && 
                             data.resume.personal_info.image.includes('e-bgremove');
        setRemoveBackground(hasBgRemoved);
        document.title = data.resume.title;
      }
    }catch(error){
      console.log(error.message)
    }
  } 
  useEffect(() => {
  loadExistingResume()
}, [resumeId])

  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const [removeBackground, setRemoveBackground] = useState(false);

  const sections = [
    {id: "personal", name: "Personal Info", icon: User },
    {id: "summary", name: "Summary", icon: FileText },
    {id: "experience", name: "Experience", icon: Briefcase },
    {id: "education", name: "Education", icon: GraduationCap },
    {id: "projects", name: "Projects", icon: FolderIcon },
    {id: "skills", name: "Skills", icon: Sparkle },

  ]

  const activeSection = sections[activeSectionIndex]


  const changeResumeVisibility = async () => {
   try{
    const formData = new FormData()
    formData.append("resumeId", resumeId)
    formData.append("resumeData", JSON.stringify({public: !resumeData.public}))

    const {data} = await api.put('/api/resumes/update', formData)
    setResumeData({...resumeData, public: !resumeData.public})
    toast.success(data.message)
   }catch(error){
    console.error("Error saving resume:", error)
   }
  }

  const handleShare = () => {
    const frontendUrl = window.location.href.split('/app/')[0];
    const resumeUrl = frontendUrl + '/view/' + resumeId;

    if(navigator.share){
      navigator.share({url: resumeUrl, text: "My Resume", })
    }else{
      alert('Share not supported on this browser.')
    }
  }

  const downloadResume = ()=>{
    window.print();
  }

  const saveResume =  async () => {
    try{
      let updatedResumeData = structuredClone(resumeData)

      //remove image from updatedResumeData
      if(typeof (resumeData.personal_info.image) === 'object'){
        delete updatedResumeData.personal_info.image
      }
      const formData = new FormData();
      formData.append("resumeId", resumeId)
      formData.append('resumeData', JSON.stringify(updatedResumeData))
      removeBackground && formData.append("removeBackground", "yes");
      typeof resumeData.personal_info.image === 'object' && formData.append("image", resumeData.personal_info.image)

      const {data} = await api.put('/api/resumes/update', formData)

      if (data.resume) {
        const mappedResume = {
          ...data.resume,
          accent_color: data.resume.accent_color || data.resume.theme_color || "#3B82F6"
        };
        setResumeData(mappedResume);
      }
      toast.success(data.message)
    }catch(error){
      console.error("Error saving resume:", error)
       console.error("Error saving resume:", error.response?.data) 
    }
  }

  return (
    <div className='min-h-screen bg-[#F8F9FB] relative overflow-hidden'>
      {/* Ambient background glows to match dashboard */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-violet-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className='max-w-[1600px] mx-auto h-screen flex flex-col relative z-10'>
        
        {/* Top Header - Professional Editor Toolbar */}
        <header className='h-[56px] shrink-0 flex items-center justify-between px-6 bg-white border-b border-gray-200 no-print sticky top-0 z-40'>
          {/* Left Section: Navigation & Title */}
          <div className='flex items-center gap-4 w-1/3'>
            <Link 
              to={'/app'} 
              className='flex items-center gap-1.5 text-gray-400 hover:text-gray-900 font-medium text-[13px] transition-colors group'
            >
              <ArrowLeftIcon className='w-4 h-4 group-hover:-translate-x-0.5 transition-transform' /> 
              Back
            </Link>
            <div className='h-4 w-px bg-gray-200' />
            <h1 className='text-[14px] font-semibold text-gray-900 tracking-tight truncate'>
              {resumeData.title || 'Untitled Resume'}
            </h1>
          </div>

          {/* Center Section */}
          <div className='flex items-center justify-center w-1/3'>
            {/* Kept empty to maintain balanced 3-column layout */}
          </div>

          {/* Right Section: Workspace Actions */}
          <div className='flex items-center justify-end gap-3 w-1/3'>
            {/* Action Group: Sharing & Visibility */}
            <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-lg border border-gray-200/60">
               <button 
                 onClick={changeResumeVisibility}
                 className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-medium transition-all ${
                   resumeData.public 
                     ? 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-900/5' 
                     : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'
                 }`}
               >
                 {resumeData.public ? <EyeIcon className='w-3.5 h-3.5 text-brand-600' /> : <EyeOffIcon className='w-3.5 h-3.5' />}
                 {resumeData.public ? 'Public' : 'Private'}
               </button>
               {resumeData.public && (
                 <>
                   <div className='w-px h-4 bg-gray-200 mx-0.5' />
                   <button onClick={handleShare} className='flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 transition-colors'>
                     <Share2Icon className='w-3.5 h-3.5' /> Share
                   </button>
                 </>
               )}
            </div>

            {/* Primary Action: Export */}
            <button 
              onClick={downloadResume}
              className='flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-[13px] font-medium hover:bg-gray-800 transition-colors shadow-sm active:scale-95'
            >
              <DownloadCloud className='w-4 h-4' /> Download PDF
            </button>
          </div>
        </header>

        {/* Main Workspace Split */}
        <div className='flex-1 flex overflow-hidden'>
          
          {/* Left Panel - Sticky Editor */}
          <div className='w-[420px] shrink-0 bg-white border-r border-gray-100 flex flex-col shadow-2xl shadow-gray-200/50 relative z-20 no-print'>
            
            {/* Form Section Navigation - Sticky Header */}
            <div className='px-6 pt-6 pb-4 border-b border-gray-100 bg-white sticky top-0 z-30'>
              <div className='flex items-center justify-between mb-5'>
                 <div className='flex items-center gap-2'>
                    <TemplateSelector selectedTemplate={resumeData.template} onChange={(template) => setResumeData(prev => ({...prev, template}))} />
                    <ColorPicker selectedColor={resumeData.accent_color} onChange={(color) => setResumeData(prev => ({...prev, accent_color: color}))} />
                 </div>
                 
                 <div className='flex items-center gap-2'>
                    <button 
                      onClick={() => setActiveSectionIndex(prev => Math.max(prev - 1, 0))}
                      disabled={activeSectionIndex === 0}
                      className='w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gray-50 border border-transparent hover:border-gray-100 disabled:opacity-20 transition-all'
                    >
                      <ChevronLeft className='w-5 h-5' />
                    </button>
                    <button 
                      onClick={() => setActiveSectionIndex(prev => Math.min(prev + 1, sections.length - 1))}
                      disabled={activeSectionIndex === sections.length - 1}
                      className='h-10 px-4 rounded-xl flex items-center gap-2 bg-gray-900 text-white text-[11px] font-black uppercase tracking-wider hover:bg-brand-600 disabled:opacity-20 transition-all shadow-sm shadow-gray-200'
                    >
                      <span>Next</span>
                      <ChevronRight className='w-4 h-4' />
                    </button>
                 </div>
              </div>

              {/* Section Indicator */}
              <div className='flex items-center gap-3 mb-4'>
                 <div className='w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center'>
                    {React.createElement(activeSection.icon, { className: 'w-4 h-4 text-brand-600' })}
                 </div>
                 <div>
                    <h2 className='text-[13px] font-black text-gray-900 uppercase tracking-tight'>{activeSection.name}</h2>
                    <p className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Step {activeSectionIndex + 1} of {sections.length}</p>
                 </div>
              </div>

              {/* Step Progress Pills */}
              <div className='flex gap-1.5'>
                {sections.map((sec, idx) => (
                  <div 
                    key={sec.id}
                    onClick={() => setActiveSectionIndex(idx)}
                    className={`h-1.5 flex-1 rounded-full cursor-pointer transition-all duration-500 ${
                      idx <= activeSectionIndex ? 'bg-brand-500 shadow-[0_0_10px_rgba(99,102,241,0.2)]' : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Scrollable Form Content */}
            <div className='flex-1 overflow-y-auto px-8 py-10 custom-scrollbar bg-white'>
              <div className='min-h-full flex flex-col'>
                <div className='flex-1'>
                  {activeSection.id === 'personal' && (
                    <PersonalInfoForm 
                      data={resumeData.personal_info} 
                      onChange={(data) => setResumeData(prev => ({...prev, personal_info: data}))} 
                      removeBackground={removeBackground} 
                      setRemoveBackground={setRemoveBackground} 
                      accentColor={resumeData.accent_color} 
                    />
                  )}
                  {activeSection.id === 'summary' && (
                    <ProfessionalSummaryForm 
                      data={resumeData.professional_summary} 
                      onChange={(data) => setResumeData(prev => ({...prev, professional_summary: data}))} 
                      setResumeData={setResumeData} 
                      accentColor={resumeData.accent_color} 
                    />
                  )}
                  {activeSection.id === 'experience' && (
                    <ExperienceForm 
                      data={resumeData.experience} 
                      onChange={(data) => setResumeData(prev => ({...prev, experience: data}))} 
                      accentColor={resumeData.accent_color} 
                    />
                  )}
                  {activeSection.id === 'education' && (
                    <EducationForm 
                      data={resumeData.education} 
                      onChange={(data) => setResumeData(prev => ({...prev, education: data}))} 
                      accentColor={resumeData.accent_color} 
                    />
                  )}
                  {activeSection.id === 'projects' && (
                    <ProjectForm 
                      data={resumeData.project} 
                      onChange={(data) => setResumeData(prev => ({...prev, project: data}))} 
                      accentColor={resumeData.accent_color} 
                    />
                  )}
                  {activeSection.id === 'skills' && (
                    <SkillsForm 
                      data={resumeData.skills} 
                      onChange={(data) => setResumeData(prev => ({...prev, skills: data}))} 
                      accentColor={resumeData.accent_color} 
                    />
                  )}
                </div>

                <div className='pt-16 pb-6'>
                  <button 
                    onClick={() => {toast.promise(saveResume(), {loading: 'Saving Changes...'})}}
                    className='w-full py-4 bg-white border border-gray-100 text-gray-900 rounded-2xl font-black text-[13px] shadow-sm hover:shadow-md hover:border-brand-200 hover:text-brand-600 transition-all active:scale-[0.98] flex items-center justify-center gap-2'
                  >
                    <DownloadCloud className='w-4 h-4' />
                    Sync Progress
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Preview Canvas */}
          <div className='flex-1 bg-[#F1F3F6] overflow-y-auto flex flex-col items-center py-12 px-6 lg:px-12 custom-scrollbar relative'>
             {/* Subtle Radial Workspace Gradient */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none" />
             
             {/* Preview Container - A4 Constraints with High Fidelity Shadow */}
             <div className='w-full max-w-[820px] resume-print-wrapper a4-container transition-all duration-500 relative z-10 mb-20'>
                <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} removeBackground={removeBackground} />
             </div>

          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E5E7EB;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #D1D5DB;
        }
      `}</style>
    </div>
  )
}

export default ResumeBuilder