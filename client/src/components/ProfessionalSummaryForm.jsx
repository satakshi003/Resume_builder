import { Loader2, Sparkles, Wand2 } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import api from '../configs/api'
import toast from 'react-hot-toast'

const ProfessionalSummaryForm = ({data, onChange, setResumeData, accentColor = "#3B82F6"}) => {

  const {token} = useSelector(state => state.auth)
  const [isGenerating, setIsGenerating] = useState(false)

  const generateSummary = async () => {
    try{
      setIsGenerating(true)
      const prompt = `enhance my professional summary "${data}`;
      const response = await api.post('/api/ai/enhance-pro-sum', {userContent: prompt}, {headers: {Authorization: token}})
      setResumeData(prev => ({...prev, professional_summary: response.data.enhancedContent}))
    }catch(error){
      toast.error(error?.response?.data?.message || error.message)
    }
    finally{
      setIsGenerating(false)
    }
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-black text-gray-900 tracking-tight">Professional Summary</h3>
          <p className="text-sm text-gray-500 mt-1 font-medium">Add summary for your resume here</p>
        </div>
        
        <button 
          disabled={isGenerating || !data} 
          onClick={generateSummary} 
          className="flex items-center gap-2.5 px-5 py-2.5 bg-brand-50 text-brand-600 rounded-xl hover:bg-brand-100 transition-all font-black text-[12px] uppercase tracking-wider disabled:opacity-40 disabled:grayscale"
        >
          {isGenerating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Wand2 className="w-3.5 h-3.5 text-brand-500" />}
          {isGenerating ? "Refining..." : "AI Enhance"}
        </button>
      </div>

      <div className="relative group">
        <textarea 
          value={data || ""} 
          onChange={(e) => onChange(e.target.value)}  
          rows={8}  
          className="w-full p-5 bg-white border border-gray-100 rounded-[24px] focus:border-transparent focus:ring-4 transition-all outline-none text-[13px] font-bold text-gray-900 shadow-sm leading-relaxed resize-none" 
          style={{"--tw-ring-color": `${accentColor}15`, "borderColor": "rgba(229, 231, 235, 1)"}}
          onFocus={(e) => e.target.style.borderColor = accentColor}
          onBlur={(e) => e.target.style.borderColor = "rgba(229, 231, 235, 1)"}
          placeholder="e.g. Dedicated Software Engineer with 5+ years of experience in building scalable web applications..." 
        />
        
        <div className="mt-4 flex items-center gap-2.5 px-4 py-3 bg-gray-50/50 rounded-2xl border border-gray-50">
           <Sparkles className="w-3.5 h-3.5 text-brand-400 shrink-0" />
           <p className="text-[11px] font-medium text-gray-400 italic leading-snug">
             Tip: Focus on your 3 most relevant achievements. Keep it under 200 words for maximum impact.
           </p>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalSummaryForm