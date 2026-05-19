import { Check, Layout, Sparkles } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const TemplateSelector = ({selectedTemplate, onChange}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview: "A clean, traditional resume format with clear sections and professional typography"
    },
    {
      id: "modern",
      name: "Modern",
      preview: "Sleek design with strategic use of color and modern font choices"
    },
    {
      id: "minimal-image",
      name: "Minimal Image",
      preview: "Minimal design with a single image and clear typography"
    },
    {
      id: "minimal",
      name: "Minimal",
      preview: "Ultra-clean design that puts your content front and center"
    },
  ]

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-black transition-all ${
          isOpen 
            ? 'bg-gray-900 text-white shadow-lg shadow-gray-200' 
            : 'bg-white border border-gray-100 text-gray-600 hover:border-brand-200 hover:text-brand-600 hover:shadow-sm'
        }`}
      >
        <Layout className="w-3.5 h-3.5" /> 
        <span>Template</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-[24px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="p-5 pb-3 border-b border-gray-50 flex items-center justify-between">
             <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Select Layout</h4>
             <Sparkles className="w-3 h-3 text-brand-400" />
          </div>

          <div className="max-h-[380px] overflow-y-auto p-3 space-y-2 custom-scrollbar relative">
            {templates.map((template) => {
              const isActive = selectedTemplate === template.id;
              return (
                <div 
                  key={template.id} 
                  onClick={() => {onChange(template.id); setIsOpen(false)}} 
                  className={`group relative p-3.5 rounded-[20px] border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "border-brand-500/30 bg-brand-50/40 shadow-[0_4px_15px_rgba(99,102,241,0.08)]" 
                      : "border-gray-50 hover:border-brand-100 hover:bg-gray-50/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h5 className={`text-[13px] font-black tracking-tight ${isActive ? "text-brand-600" : "text-gray-900"}`}>
                      {template.name}
                    </h5>
                    {isActive && (
                      <div className="w-5 h-5 bg-brand-500 rounded-full flex items-center justify-center shadow-sm shadow-brand-500/20 animate-in zoom-in duration-300">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                    {template.preview}
                  </p>
                </div>
              );
            })}
            
            {/* Scroll bottom fade */}
            <div className="sticky bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>

          <div className="p-4 bg-gray-50/50 flex justify-center">
             <p className="text-[10px] font-bold text-gray-400">Updates live instantly</p>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E5E7EB;
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
}

export default TemplateSelector