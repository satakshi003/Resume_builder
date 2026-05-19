import { Check, Palette, Sparkles } from "lucide-react";
import React, { useState, useRef, useEffect }  from "react";

const ColorPicker = ({selectedColor, onChange}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const colors = [
    {name: "Blue", value: "#3B82F6"},
    {name: "Indigo", value: "#6366F1"},
    {name: "Purple", value: "#8B5CF6"},
    {name: "Green", value: "#10B981"},
    {name: "Red", value: "#EF4444"},
    {name: "Orange", value: "#F97316"},
    {name: "Teal", value: "#14B8A6"},
    {name: "Pink", value: "#EC4899"},
    {name: "Slate", value: "#475569"},
    {name: "Coal", value: "#1F2937"},
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
            : 'bg-white border border-gray-100 text-gray-600 hover:border-violet-200 hover:text-violet-600 hover:shadow-sm'
        }`}
      >
        <Palette className="w-3.5 h-3.5" /> 
        <span>Accent</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-[24px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="p-5 pb-3 border-b border-gray-50 flex items-center justify-between">
             <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Accent Color</h4>
             <Sparkles className="w-3 h-3 text-violet-400" />
          </div>

          <div className="p-4 grid grid-cols-5 gap-3">
            {colors.map((color) => {
              const isActive = selectedColor === color.value;
              return (
                <div 
                  key={color.value} 
                  className="flex flex-col items-center gap-1.5 group cursor-pointer"
                  onClick={() => {onChange(color.value); setIsOpen(false)}}
                >
                  <div 
                    className={`w-9 h-9 rounded-full border-2 transition-all duration-300 flex items-center justify-center relative ${
                      isActive 
                        ? 'border-gray-900 shadow-[0_0_15px_rgba(0,0,0,0.1)] scale-110' 
                        : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.value }}
                  >
                    {isActive && <Check className="w-4 h-4 text-white drop-shadow-md" />}
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-wider ${isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                    {color.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-gray-50/50 flex justify-center border-t border-gray-50">
             <p className="text-[10px] font-bold text-gray-400 italic">Sets primary brand tone</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ColorPicker