import { Plus, Sparkles, X } from "lucide-react";
import React, { useState } from "react";

const SkillsForm = ({data, onChange, accentColor = "#3B82F6"}) => {
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    if(newSkill.trim() && !data.includes(newSkill.trim())){
      onChange([...data, newSkill.trim()])
      setNewSkill("")
    }
  }
  const removeSkill = (indexToRemove)=>{
    onChange(data.filter((_, index)=> index !== indexToRemove))
  }
  const handleKeyPress = (e)=> {
    if(e.key === "Enter"){
      e.preventDefault();
      addSkill();
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h3 className="text-xl font-black text-gray-900 tracking-tight">Skills</h3>
        <p className="text-sm text-gray-500 mt-1 font-medium">Add your technical and soft skills.</p>
      </div>

      <div className="flex gap-3">
        <div className="flex-1 relative group">
          <input 
            type="text" 
            placeholder="e.g. React, UI Design, Problem Solving" 
            className="w-full h-12 px-5 bg-white border border-gray-100 rounded-2xl focus:border-transparent focus:ring-4 transition-all outline-none text-[13px] font-bold text-gray-900 shadow-sm" 
            style={{"--tw-ring-color": `${accentColor}15`, "borderColor": "rgba(229, 231, 235, 1)"}}
            onFocus={(e) => e.target.style.borderColor = accentColor}
            onBlur={(e) => e.target.style.borderColor = "rgba(229, 231, 235, 1)"}
            onChange={(e)=>setNewSkill(e.target.value)}
            value={newSkill}
            onKeyDown={handleKeyPress}
          />
        </div>
        <button 
          onClick={addSkill} 
          disabled={!newSkill.trim()} 
          className="h-12 flex items-center gap-2 px-6 bg-gray-900 text-white rounded-2xl hover:bg-brand-600 transition-all font-black text-[12px] uppercase tracking-wider shadow-lg shadow-gray-200 disabled:opacity-30 disabled:grayscale"
        >
          <Plus className="w-4 h-4" /> Add
        </button>
      </div>

      {data.length > 0 ? (
        <div className="flex flex-wrap gap-2.5">
          {data.map((skill, index)=>(
            <div 
              key={index} 
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl text-[12px] font-black text-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all animate-in zoom-in duration-300"
              style={{ borderLeft: `3px solid ${accentColor}` }}
            >
              {skill}
              <button 
                onClick={()=> removeSkill(index)} 
                className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-red-50 hover:text-red-500 transition-all"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className='bg-gray-50/50 border-2 border-dashed border-gray-100 rounded-[32px] py-12 text-center group transition-all'>
          <div className='w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center mx-auto mb-3'>
            <Sparkles className='w-6 h-6 text-gray-200 group-hover:text-brand-500 transition-colors' />
          </div>
          <p className='text-sm font-black text-gray-900'>No skills added</p>
          <p className='text-[11px] text-gray-400 mt-1 font-medium'>Add 8-12 relevant skills to stand out.</p>
        </div>
      )}

      <div className="p-4 bg-brand-50/30 rounded-2xl border border-brand-50">
        <p className="text-[11px] text-brand-700 font-medium leading-relaxed">
          <strong className="font-black uppercase tracking-wider mr-2">Pro Tip:</strong>
          Mix technical skills (Python, Figma) with soft skills (Leadership, Adaptability) for a balanced profile.
        </p>
      </div>
    </div>
  )
}

export default SkillsForm