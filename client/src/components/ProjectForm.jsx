import { Plus, Trash2, Rocket } from "lucide-react";
import React from "react";

const ProjectForm = ({data, onChange, accentColor = "#3B82F6"}) => {

  const addProject = () => {
    const newProject = {
      name: "",
      type: "",
      description: "",
    };
    onChange([...data, newProject])
  }

  const removeProject = (index) => {
    const updated = data.filter((_, i)=> i !== index);
    onChange(updated)
  }

  const updateProject = (index, field, value) => {
    const updated = [...data];
    updated[index] = {...updated[index], [field]: value}
    onChange(updated)
  }

  const inputClass = "w-full h-11 px-4 bg-gray-50/50 border border-gray-100 rounded-xl focus:bg-white focus:border-transparent focus:ring-4 transition-all outline-none text-[13px] font-bold text-gray-900";

  return (
    <div className='space-y-8 animate-in fade-in duration-500'>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-black text-gray-900 tracking-tight">Projects</h3>
          <p className="text-sm text-gray-500 mt-1 font-medium">Add your projects</p>
        </div>
        <button 
          onClick={addProject} 
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-brand-600 transition-all font-black text-[12px] uppercase tracking-wider shadow-lg shadow-gray-200 hover:shadow-brand-500/20"
        >
          <Plus className="w-4 h-4" />
          Add Projects
        </button>
      </div>

    {data.length === 0 ? (
      <div className='bg-gray-50/50 border-2 border-dashed border-gray-100 rounded-[32px] py-16 text-center group hover:border-brand-200 transition-all cursor-pointer' onClick={addProject}>
        <div className='w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform'>
          <Rocket className='w-8 h-8 text-gray-300 group-hover:text-brand-500' />
        </div>
        <p className='text-sm font-black text-gray-900'>No projects added</p>
        <p className='text-[12px] text-gray-400 mt-1 font-medium'>Click to showcase your innovative work.</p>
      </div>
    ) : (
      <div className='space-y-6'>
        {data.map((project, index)=>(
          <div key={index} className='group/card bg-white border border-gray-100 rounded-[32px] p-6 space-y-5 shadow-sm hover:shadow-md transition-all relative overflow-hidden'>
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-500 opacity-0 group-hover/card:opacity-100 transition-opacity" style={{ backgroundColor: accentColor }} />

            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-[11px] font-black text-gray-400'>
                  {index + 1}
                </div>
                <h4 className='text-sm font-black text-gray-900 tracking-tight'>Projects #{index + 1}</h4>
              </div>
              <button 
                onClick={() => removeProject(index)} 
                className='w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all'
              >
                <Trash2 className='w-4 h-4'/>
              </button>
            </div>

            <div className='grid grid-cols-1 gap-4'>
              <div className='space-y-1.5'>
                <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>Project Name</label>
                <input 
                  value={project.name || ""} 
                  onChange={(e) => updateProject(index, "name", e.target.value)}
                  type='text' 
                  className={inputClass} 
                  style={{"--tw-ring-color": `${accentColor}15`}}
                  onFocus={(e) => e.target.style.borderColor = accentColor}
                  onBlur={(e) => e.target.style.borderColor = "rgba(229, 231, 235, 1)"}
                  placeholder='e.g. Portfolio Website' 
                />
              </div>

              <div className='space-y-1.5'>
                <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>Technologies Used</label>
                <input 
                  value={project.type || ""} 
                  onChange={(e) => updateProject(index, "type", e.target.value)}
                  type='text' 
                  className={inputClass} 
                  style={{"--tw-ring-color": `${accentColor}15`}}
                  onFocus={(e) => e.target.style.borderColor = accentColor}
                  onBlur={(e) => e.target.style.borderColor = "rgba(229, 231, 235, 1)"}
                  placeholder='e.g. React, Tailwind CSS, Node.js' 
                />
              </div>

              <div className='space-y-1.5'>
                <label className='text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1'>Description</label>
                <textarea 
                  value={project.description || ""} 
                  onChange={(e) => updateProject(index, "description", e.target.value)} 
                  rows={4} 
                  className="w-full p-4 bg-gray-50/30 border border-gray-100 rounded-2xl focus:bg-white focus:border-transparent focus:ring-4 transition-all outline-none text-[13px] font-bold text-gray-900 leading-relaxed resize-none" 
                  style={{"--tw-ring-color": `${accentColor}15`}}
                  onFocus={(e) => e.target.style.borderColor = accentColor}
                  onBlur={(e) => e.target.style.borderColor = "rgba(229, 231, 235, 1)"}
                  placeholder='Describe the project goals and your contributions...' 
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

export default ProjectForm
