import React from "react";
import ClassicTemplate from './templates/ClassicTemplate'
import ModernTemplate from './templates/ModernTemplate'
import MinimalTemplate from './templates/MinimalTemplate'
import MinimalImageTemplate from './templates/MinimalImageTemplate'

const ResumePreview = ({data, template, accentColor, classes = "", removeBackground}) => {

  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor} />;
      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentColor} />;
      case "minimal-image":
        return <MinimalImageTemplate data={data} accentColor={accentColor} removeBackground={removeBackground} />;
        
        default:
          return  <ClassicTemplate data={data} accentColor={accentColor} />;
    }
  }


  return (
    <div className="w-full">
      <div id="resume-preview" className={"print:shadow-none print:border-none " + classes}>
        {renderTemplate()}
      </div>


    </div>
  )
}

export default ResumePreview