import { Briefcase, Loader2, Plus, Sparkles, Trash2, Wand2 } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'

const ExperienceForm = ({ data, onChange, accentColor = "#3B82F6" }) => {

  const {token} = useSelector(state => state.auth)
  const [generatingIndex, setGeneratingIndex] = useState(-1)

  const addExperience = () => {
    const newExperience = {
      company: "",
      position: "",
      start_date: "",
      end_date: "",
      description: "",
      is_current: false
    };
    onChange([...data, newExperience])
  }

  const removeExperience = (index) => {
    const updated = data.filter((_, i)=> i !== index);
    onChange(updated)
  }

  const updateExperience = (index, field, value) => {
    const updated = [...data];
    updated[index] = {...updated[index], [field]: value}
    onChange(updated)
  }

  const generateDescription = async (index) => {
    setGeneratingIndex(index)
    const experience = data[index]
    const prompt = `enhance this job description ${experience.description} for the position of ${experience.position} at ${experience.company}.`

    try{
      const {data} = await api.post('api/ai/enhance-job-desc', {userContent: prompt})
      updateExperience(index, "description", data.enhancedContent)
    }catch(error){
      toast.error(error.message)
    }
    finally{
      setGeneratingIndex(-1)
    }
  }

  const inputClass = "w-full h-11 px-4 bg-gray-50/50 border border-gray-100 rounded-xl focus:bg-white focus:border-transparent focus:ring-4 transition-all outline-none text-[13px] font-bold text-gray-900";

  return (
    <div className='space-y-8 animate-in fade-in duration-500'>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-black text-gray-900 tracking-tight">Professional Experience</h3>
          <p className="text-sm text-gray-500 mt-1 font-medium">Add your job experience</p>
        </div>
        <button 
          onClick={addExperience} 
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-brand-600 transition-all font-black text-[12px] uppercase tracking-wider shadow-lg shadow-gray-200 hover:shadow-brand-500/20"
        >
          <Plus className="w-4 h-4" />
          Add Experience
        </button>
      </div>

    {data.length === 0 ? (
      <div className='bg-gray-50/50 border-2 border-dashed border-gray-100 rounded-[32px] py-16 text-center group hover:border-brand-200 transition-all cursor-pointer' onClick={addExperience}>
        <div className='w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform'>
          <Briefcase className='w-8 h-8 text-gray-300 group-hover:text-brand-500' />
        </div>
        <p className='text-sm font-black text-gray-900'>No experience added</p>
        <p className='text-[12px] text-gray-400 mt-1 font-medium'>Click to add your first job position.</p>
      </div>
    ) : (
      <div className='space-y-6'>
        {data.map((experience, index)=>(
          <div key={index} className='group/card bg-white border border-gray-100 rounded-[32px] p-6 space-y-5 shadow-sm hover:shadow-md transition-all relative overflow-hidden'>
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-500 opacity-0 group-hover/card:opacity-100 transition-opacity" style={{ backgroundColor: accentColor }} />
            
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-[11px] font-black text-gray-400'>
                  {index + 1}
                </div>
                <h4 className='text-sm font-black text-gray-900 tracking-tight'>Experience #{index + 1}</h4>
              </div>
              <button 
                onClick={() => removeExperience(index)} 
                className='w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all'
              >
                <Trash2 className='w-4 h-4'/>
              </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='space-y-1.5'>
                <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>Company Name</label>
                <input 
                  value={experience.company || ""} 
                  onChange={(e) => updateExperience(index, "company", e.target.value)}
                  type='text' 
                  className={inputClass} 
                  style={{"--tw-ring-color": `${accentColor}15`}}
                  onFocus={(e) => e.target.style.borderColor = accentColor}
                  onBlur={(e) => e.target.style.borderColor = "rgba(229, 231, 235, 1)"}
                  placeholder='e.g. Google' 
                />
              </div>

              <div className='space-y-1.5'>
                <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>Job Title</label>
                <input 
                  value={experience.position || ""} 
                  onChange={(e) => updateExperience(index, "position", e.target.value)}
                  type='text' 
                  className={inputClass} 
                  style={{"--tw-ring-color": `${accentColor}15`}}
                  onFocus={(e) => e.target.style.borderColor = accentColor}
                  onBlur={(e) => e.target.style.borderColor = "rgba(229, 231, 235, 1)"}
                  placeholder='e.g. Senior Developer' 
                />
              </div>

              <div className='space-y-1.5'>
                <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>Start Date</label>
                <input 
                  value={experience.start_date || ""} 
                  onChange={(e) => updateExperience(index, "start_date", e.target.value)}
                  type='month' 
                  className={inputClass} 
                  style={{"--tw-ring-color": `${accentColor}15`}}
                  onFocus={(e) => e.target.style.borderColor = accentColor}
                  onBlur={(e) => e.target.style.borderColor = "rgba(229, 231, 235, 1)"}
                />
              </div>

              <div className='space-y-1.5'>
                <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>End Date</label>
                <input 
                  value={experience.end_date || ""} 
                  onChange={(e) => updateExperience(index, "end_date", e.target.value)}
                  type='month'
                  disabled={experience.is_current}
                  className={`${inputClass} disabled:opacity-40 disabled:bg-gray-50`} 
                  style={{"--tw-ring-color": `${accentColor}15`}}
                  onFocus={(e) => !experience.is_current && (e.target.style.borderColor = accentColor)}
                  onBlur={(e) => !experience.is_current && (e.target.style.borderColor = "rgba(229, 231, 235, 1)")}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 py-1">
              <label className='relative inline-flex items-center cursor-pointer group/toggle'>
                <input 
                  type='checkbox' 
                  checked={experience.is_current || false} 
                  onChange={(e) => {updateExperience(index, "is_current", e.target.checked);}} 
                  className='sr-only peer'
                />
                <div className="w-9 h-5 bg-gray-100 rounded-full peer peer-checked:bg-brand-500 transition-colors after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:after:translate-x-4 shadow-inner" />
              </label>
              <span className='text-[11px] font-black text-gray-600 uppercase tracking-wider'>Currently working here</span>
            </div>

            <div className='space-y-3 pt-2 border-t border-gray-50'>
              <div className='flex items-center justify-between'>
                <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>Job Description</label>
                <button 
                  onClick={() => generateDescription(index)} 
                  disabled={generatingIndex === index || !experience.position || !experience.company} 
                  className='flex items-center gap-2 px-3 py-1.5 bg-brand-50 text-brand-600 rounded-lg hover:bg-brand-100 transition-all font-black text-[10px] uppercase tracking-wider disabled:opacity-30'
                >
                  {generatingIndex === index ? (
                    <Loader2 className='w-3 h-3 animate-spin' />
                  ) : (
                    <Wand2 className='w-3 h-3' />
                  )}
                  {generatingIndex === index ? "Refining..." : "AI Enhance"}
                </button>
              </div>
              <textarea 
                value={experience.description || ""} 
                onChange={(e) => updateExperience(index, "description", e.target.value)} 
                rows={4} 
                className="w-full p-4 bg-gray-50/30 border border-gray-100 rounded-2xl focus:bg-white focus:border-transparent focus:ring-4 transition-all outline-none text-[13px] font-bold text-gray-900 leading-relaxed resize-none" 
                style={{"--tw-ring-color": `${accentColor}15`}}
                onFocus={(e) => e.target.style.borderColor = accentColor}
                onBlur={(e) => e.target.style.borderColor = "rgba(229, 231, 235, 1)"}
                placeholder='Describe your key responsibilities and achievements...' 
              />
            </div>
          </div>
        ))}
      </div>
    )}
    </div>
  )
}

export default ExperienceForm
