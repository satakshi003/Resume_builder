import { GraduationCap, Plus, Trash2 } from "lucide-react";
import React from "react";

const EducationForm = ({data, onChange, accentColor = "#3B82F6"}) => {
  const addEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      field: "",
      graduation_date: "",
      gpa: "",
    };
    onChange([...data, newEducation])
  }

  const removeEducation = (index) => {
    const updated = data.filter((_, i)=> i !== index);
    onChange(updated)
  }

  const updateEducation = (index, field, value) => {
    const updated = [...data];
    updated[index] = {...updated[index], [field]: value}
    onChange(updated)
  }

  const inputClass = "w-full h-11 px-4 bg-gray-50/50 border border-gray-100 rounded-xl focus:bg-white focus:border-transparent focus:ring-4 transition-all outline-none text-[13px] font-bold text-gray-900";

  return (
    <div className='space-y-8 animate-in fade-in duration-500'>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-black text-gray-900 tracking-tight">Education</h3>
          <p className="text-sm text-gray-500 mt-1 font-medium">Add your education details</p>
        </div>
        <button 
          onClick={addEducation} 
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-brand-600 transition-all font-black text-[12px] uppercase tracking-wider shadow-lg shadow-gray-200 hover:shadow-brand-500/20"
        >
          <Plus className="w-4 h-4" />
          Add Education
        </button>
      </div>

    {data.length === 0 ? (
      <div className='bg-gray-50/50 border-2 border-dashed border-gray-100 rounded-[32px] py-16 text-center group hover:border-brand-200 transition-all cursor-pointer' onClick={addEducation}>
        <div className='w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform'>
          <GraduationCap className='w-8 h-8 text-gray-300 group-hover:text-brand-500' />
        </div>
        <p className='text-sm font-black text-gray-900'>No education added</p>
        <p className='text-[12px] text-gray-400 mt-1 font-medium'>Click to add your academic details.</p>
      </div>
    ) : (
      <div className='space-y-6'>
        {data.map((education, index)=>(
          <div key={index} className='group/card bg-white border border-gray-100 rounded-[32px] p-6 space-y-5 shadow-sm hover:shadow-md transition-all relative overflow-hidden'>
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-500 opacity-0 group-hover/card:opacity-100 transition-opacity" style={{ backgroundColor: accentColor }} />

            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-[11px] font-black text-gray-400'>
                  {index + 1}
                </div>
                <h4 className='text-sm font-black text-gray-900 tracking-tight'>Education #{index + 1}</h4>
              </div>
              <button 
                onClick={() => removeEducation(index)} 
                className='w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all'
              >
                <Trash2 className='w-4 h-4'/>
              </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='space-y-1.5 md:col-span-2'>
                <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>Institution Name</label>
                <input 
                  value={education.institution || ""} 
                  onChange={(e) => updateEducation(index, "institution", e.target.value)}
                  type='text' 
                  className={inputClass} 
                  style={{"--tw-ring-color": `${accentColor}15`}}
                  onFocus={(e) => e.target.style.borderColor = accentColor}
                  onBlur={(e) => e.target.style.borderColor = "rgba(229, 231, 235, 1)"}
                  placeholder='e.g. Stanford University' 
                />
              </div>

              <div className='space-y-1.5'>
                <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>Degree</label>
                <input 
                  value={education.degree || ""} 
                  onChange={(e) => updateEducation(index, "degree", e.target.value)}
                  type='text' 
                  className={inputClass} 
                  style={{"--tw-ring-color": `${accentColor}15`}}
                  onFocus={(e) => e.target.style.borderColor = accentColor}
                  onBlur={(e) => e.target.style.borderColor = "rgba(229, 231, 235, 1)"}
                  placeholder="e.g. Bachelor's" 
                />
              </div>

              <div className='space-y-1.5'>
                <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>Field of Study</label>
                <input 
                  value={education.field || ""} 
                  onChange={(e) => updateEducation(index, "field", e.target.value)}
                  type='text' 
                  className={inputClass} 
                  style={{"--tw-ring-color": `${accentColor}15`}}
                  onFocus={(e) => e.target.style.borderColor = accentColor}
                  onBlur={(e) => e.target.style.borderColor = "rgba(229, 231, 235, 1)"}
                  placeholder="e.g. Computer Science" 
                />
              </div>

              <div className='space-y-1.5'>
                <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>Graduation Date</label>
                <input 
                  value={education.graduation_date || ""} 
                  onChange={(e) => updateEducation(index, "graduation_date", e.target.value)}
                  type='month' 
                  className={inputClass} 
                  style={{"--tw-ring-color": `${accentColor}15`}}
                  onFocus={(e) => e.target.style.borderColor = accentColor}
                  onBlur={(e) => e.target.style.borderColor = "rgba(229, 231, 235, 1)"}
                />
              </div>

              <div className='space-y-1.5'>
                <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>GPA / Grade</label>
                <input 
                  value={education.gpa || ""} 
                  onChange={(e) => updateEducation(index, "gpa", e.target.value)}
                  type='text' 
                  className={inputClass} 
                  style={{"--tw-ring-color": `${accentColor}15`}}
                  onFocus={(e) => e.target.style.borderColor = accentColor}
                  onBlur={(e) => e.target.style.borderColor = "rgba(229, 231, 235, 1)"}
                  placeholder="e.g. 3.9/4.0" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
    </div>
  )
}

export default EducationForm
