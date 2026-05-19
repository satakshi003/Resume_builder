import { BriefcaseBusiness, Globe, Linkedin, Mail, MapPin, Phone, User, Camera, Trash2 } from "lucide-react";
import React from "react";

const PersonalInfoForm = ({data, onChange, removeBackground, setRemoveBackground, accentColor = "#3B82F6"}) => {
  const { processedImage, originalImage } = React.useMemo(() => {
      const image = data?.image;
      if (!image) return { processedImage: null, originalImage: null };
      
      let processed = null;
      let original = null;
      
      if (typeof image === 'string') {
          original = image.split('?')[0].replace(/\/tr:[^/]+\//, '/');
          if (removeBackground) {
              processed = original + "?tr=w-800,e-bgremove,w-300,h-300,fo-face,z-0.75,f-png,q-100";
          } else {
              processed = original + "?tr=w-300,h-300,fo-face,z-0.75,f-png,q-100";
          }
      } else {
          processed = URL.createObjectURL(image);
          original = processed;
      }
      
      console.log('originalImage:', original);
      console.log('processedImage:', processed);
      console.log('removeBackgroundResponse:', processed);
      
      return { processedImage: processed, originalImage: original };
  }, [data?.image, removeBackground]);

  const handleChange = (field, value ) => {
    onChange({...data, [field]: value})
  }

  const fields = [
    {key: "full_name", label: "Full Name", icon: User, type: "text", required:true},
    {key: "profession", label: "Profession", icon: BriefcaseBusiness, type: "text"},
    {key: "email", label: "Email Address", icon: Mail, type: "email", required:true},
    {key: "phone", label: "Phone Number", icon: Phone, type: "tel"},
    {key: "location", label: "Location", icon: MapPin, type: "text"},
    {key: "linkedin", label: "LinkedIn Profile", icon: Linkedin, type: "url"},
    {key: "website", label: "Personal Website", icon: Globe, type: "url"}
  ]

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h3 className="text-xl font-black text-gray-900 tracking-tight">Personal Details</h3>
        <p className="text-sm text-gray-500 mt-1 font-medium">Start by providing your basic information.</p>
      </div>

      {/* Modern Compact Photo Upload */}
      <div className="bg-gray-50/50 rounded-2xl p-5 border border-gray-100 flex items-center gap-6 group/upload">
        <div className="relative shrink-0">
          {processedImage ? (
            <div 
              className="w-20 h-20 rounded-full overflow-hidden shadow-md border-2 border-white ring-4 ring-gray-100/50 flex items-center justify-center"
              style={{ 
                  backgroundColor: accentColor,
                  isolation: 'isolate'
              }}
            >
              <img 
                src={processedImage || originalImage} 
                alt="Profile" 
                className="w-full h-full object-cover" 
                style={{ 
                    background: 'transparent',
                    mixBlendMode: 'normal',
                    display: 'block'
                }} 
                onError={(e) => {
                    if (e.currentTarget.src !== originalImage) {
                        console.log('Processed image failed, falling back to original');
                        e.currentTarget.src = originalImage;
                    } else {
                        console.log('Original image failed to load');
                        e.currentTarget.style.display = 'block';
                    }
                }}
              />
            </div>
          ) : (
            <div className="w-20 h-20 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-300 shadow-inner">
              <User className="w-10 h-10" />
            </div>
          )}
          <label className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg border border-gray-50 flex items-center justify-center cursor-pointer hover:bg-brand-50 hover:text-brand-600 transition-all active:scale-90">
             <Camera className="w-4 h-4" />
             <input type="file" accept="image/jpeg, image/png" className="hidden" onChange={(e) => handleChange("image", e.target.files[0])} />
          </label>
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex flex-col gap-1">
            <p className="text-[13px] font-black text-gray-900">Profile Photo</p>
            <p className="text-[11px] text-gray-400 font-medium">JPG or PNG. Max 2MB.</p>
          </div>
          
          {typeof data.image === 'object' && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2.5">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" onChange={() => setRemoveBackground(prev => !prev)} checked={removeBackground} />
                  <div className="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:bg-brand-500 transition-colors after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:after:translate-x-3.5"></div>
                </label>
                <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Remove BG</span>
              </div>
              <button 
                onClick={() => handleChange("image", null)}
                className="text-[11px] font-bold text-red-500 hover:text-red-600 flex items-center gap-1 transition-colors"
              >
                <Trash2 className="w-3 h-3" /> Remove
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        {fields.map((field) => {
          const Icon = field.icon;
          const isWide = field.key === "full_name" || field.key === "profession";
          return(
            <div key={field.key} className={`space-y-2 ${isWide ? 'md:col-span-2' : ''}`}>
              <label className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                <Icon className="w-3.5 h-3.5" style={{ color: accentColor }} />
                {field.label}
                {field.required && <span className="text-red-400">*</span>}
              </label>
              <div className="relative group">
                <input 
                  type={field.type} 
                  value={data[field.key] || ""} 
                  onChange={(e) => handleChange(field.key, e.target.value)} 
                  className="w-full h-12 px-5 bg-white border border-gray-100 rounded-xl focus:border-transparent focus:ring-4 transition-all outline-none text-[13px] font-bold text-gray-900 shadow-sm" 
                  style={{"--tw-ring-color": `${accentColor}15`, "borderColor": "rgba(229, 231, 235, 1)"}}
                  onFocus={(e) => e.target.style.borderColor = accentColor}
                  onBlur={(e) => e.target.style.borderColor = "rgba(229, 231, 235, 1)"}
                  placeholder={`e.g. ${field.label}`} 
                  required={field.required}  
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PersonalInfoForm
