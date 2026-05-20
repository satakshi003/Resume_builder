import React from "react";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ClassicTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    const cleanUrl = (url) => {
        if (!url) return "";
        return url
            .replace(/^(https?:\/\/)?(www\.)?/, "")
            .replace(/\/$/, "");
    };

    const SectionHeader = ({ title }) => (
        <h2 
            className="text-sm font-bold uppercase tracking-normal mt-4 mb-2 border-b pb-0.5"
            style={{ color: accentColor, borderColor: accentColor }}
        >
            {title}
        </h2>
    );

    const certs = data.certifications || data.certification;

    return (
        <div className="w-full mx-auto px-6 py-5 bg-white text-black font-sans leading-snug tracking-normal">
            {/* Header Section */}
            <header className="text-center mb-4">
                <h1 className="text-3xl font-bold mb-1 uppercase tracking-normal text-black">
                    {data.personal_info?.full_name || "Your Name"}
                </h1>
                {data.personal_info?.profession && (
                    <div 
                        className="text-base font-semibold tracking-normal mb-2"
                        style={{ color: accentColor }}
                    >
                        {data.personal_info.profession}
                    </div>
                )}

                {/* Inline Contact Row */}
                <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-xs text-black tracking-normal">
                    {data.personal_info?.phone && (
                        <span className="inline-flex items-center">
                            <Phone className="size-3 mr-1 shrink-0" style={{ color: accentColor }} />
                            <span>{data.personal_info.phone}</span>
                        </span>
                    )}
                    {data.personal_info?.phone && (data.personal_info?.location || data.personal_info?.email || data.personal_info?.linkedin || data.personal_info?.website) && <span className="text-black">|</span>}

                    {data.personal_info?.location && (
                        <span className="inline-flex items-center">
                            <MapPin className="size-3 mr-1 shrink-0" style={{ color: accentColor }} />
                            <span>{data.personal_info.location}</span>
                        </span>
                    )}
                    {data.personal_info?.location && (data.personal_info?.email || data.personal_info?.linkedin || data.personal_info?.website) && <span className="text-black">|</span>}

                    {data.personal_info?.email && (
                        <span className="inline-flex items-center">
                            <Mail className="size-3 mr-1 shrink-0" style={{ color: accentColor }} />
                            <span>{data.personal_info.email}</span>
                        </span>
                    )}
                    {data.personal_info?.email && (data.personal_info?.linkedin || data.personal_info?.website) && <span className="text-black">|</span>}

                    {data.personal_info?.linkedin && (
                        <span className="inline-flex items-center">
                            <Linkedin className="size-3 mr-1 shrink-0" style={{ color: accentColor }} />
                            <span>{cleanUrl(data.personal_info.linkedin)}</span>
                        </span>
                    )}
                    {data.personal_info?.linkedin && data.personal_info?.website && <span className="text-black">|</span>}

                    {data.personal_info?.website && (
                        <span className="inline-flex items-center">
                            <Globe className="size-3 mr-1 shrink-0" style={{ color: accentColor }} />
                            <span>{cleanUrl(data.personal_info.website)}</span>
                        </span>
                    )}
                </div>
            </header>

            {/* Professional Summary */}
            {data.professional_summary && (
                <section className="mb-3">
                    <SectionHeader title="Summary" />
                    <p className="text-sm leading-snug text-black whitespace-pre-line">
                        {data.professional_summary}
                    </p>
                </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
                <section className="mb-3">
                    <SectionHeader title="Skills" />
                    {data.skills.some(skill => skill.includes(':')) ? (
                        <div className="space-y-1 text-sm text-black leading-snug">
                            {data.skills.map((skill, index) => {
                                const colonIndex = skill.indexOf(':');
                                if (colonIndex !== -1) {
                                    const category = skill.substring(0, colonIndex).trim();
                                    const value = skill.substring(colonIndex + 1).trim();
                                    return (
                                        <div key={index}>
                                            <span className="font-bold">{category}:</span> {value}
                                        </div>
                                    );
                                }
                                return (
                                    <div key={index}>
                                        {skill}
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-sm text-black leading-snug">
                            {data.skills.join(" • ")}
                        </div>
                    )}
                </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
                <section className="mb-3">
                    <SectionHeader title="Experience" />
                    <div className="space-y-3">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="page-break-inside-avoid">
                                <div className="flex justify-between items-baseline text-sm text-black">
                                    <h3 className="font-bold">{exp.position}</h3>
                                    <span className="shrink-0 font-medium">
                                        {formatDate(exp.start_date)} – {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-baseline text-sm text-black italic mb-1">
                                    <span>{exp.company}</span>
                                    {exp.type && <span>{exp.type}</span>}
                                </div>
                                {exp.description && (
                                    <div className="text-sm leading-snug text-black whitespace-pre-line pl-1">
                                        {exp.description}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {data.project && data.project.length > 0 && (
                <section className="mb-3">
                    <SectionHeader title="Projects" />
                    <div className="space-y-3">
                        {data.project.map((proj, index) => (
                            <div key={index} className="page-break-inside-avoid">
                                <div className="flex justify-between items-baseline text-sm text-black mb-1">
                                    <div className="font-bold">
                                        {proj.name} {proj.type ? `| ${proj.type}` : ""}
                                    </div>
                                    <span className="shrink-0 font-medium text-black">GitHub</span>
                                </div>
                                {proj.description && (
                                    <div className="text-sm leading-snug text-black whitespace-pre-line pl-1">
                                        {proj.description}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Certifications */}
            {certs && certs.length > 0 && (
                <section className="mb-3">
                    <SectionHeader title="Certifications" />
                    <ul className="list-disc pl-4 space-y-0.5 text-sm text-black leading-snug">
                        {certs.map((cert, index) => (
                            <li key={index}>
                                {cert}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Education */}
            {data.education && data.education.length > 0 && (
                <section className="mb-3">
                    <SectionHeader title="Education" />
                    <div className="space-y-3">
                        {data.education.map((edu, index) => (
                            <div key={index} className="page-break-inside-avoid">
                                <div className="flex justify-between items-baseline text-sm text-black">
                                    <h3 className="font-bold">
                                        {edu.degree}{edu.field ? ` in ${edu.field}` : ""}
                                    </h3>
                                    <span className="shrink-0 font-medium">
                                        {formatDate(edu.graduation_date)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-baseline text-sm text-black italic">
                                    <span>{edu.institution}</span>
                                    {edu.gpa && <span className="font-medium shrink-0">CGPA: {edu.gpa}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default ClassicTemplate;