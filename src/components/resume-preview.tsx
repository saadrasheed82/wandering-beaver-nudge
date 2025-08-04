"use client";

import { Button } from "@/components/ui/button";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

type ResumeData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  linkedIn: string;
  github: string;
  profileSummary: string;
  skills: string[];
  workExperience: {
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    school: string;
    degree: string;
    startDate: string;
    endDate: string;
    gpa: string;
  }[];
  certifications: string[];
  languages: string[];
};

export function ResumePreview({ resumeData }: { resumeData: ResumeData }) {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={handlePrint}>Download PDF</Button>
      </div>
      
      <div ref={resumeRef} className="bg-white p-8 rounded shadow max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">{resumeData.fullName || "Your Name"}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
            {resumeData.email && <span>{resumeData.email}</span>}
            {resumeData.phone && <span>{resumeData.phone}</span>}
            {resumeData.address && <span>{resumeData.address}</span>}
            {resumeData.linkedIn && <span>{resumeData.linkedIn}</span>}
            {resumeData.github && <span>{resumeData.github}</span>}
          </div>
        </div>

        {/* Profile Summary */}
        {resumeData.profileSummary && (
          <div className="mb-6">
            <h2 className="text-xl font-bold border-b pb-1 mb-2">Profile Summary</h2>
            <p className="text-gray-700">{resumeData.profileSummary}</p>
          </div>
        )}

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold border-b pb-1 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Work Experience */}
        {resumeData.workExperience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold border-b pb-1 mb-2">Work Experience</h2>
            {resumeData.workExperience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-bold">{exp.company || "Company"}</h3>
                  <div className="text-gray-600">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </div>
                </div>
                <div className="text-gray-700 font-medium mb-1">{exp.title || "Job Title"}</div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold border-b pb-1 mb-2">Education</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-bold">{edu.school || "School"}</h3>
                  <div className="text-gray-600">
                    {edu.startDate} - {edu.endDate || "Present"}
                  </div>
                </div>
                <div className="text-gray-700 font-medium mb-1">
                  {edu.degree || "Degree"}
                  {edu.gpa && `, GPA: ${edu.gpa}`}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {resumeData.certifications.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold border-b pb-1 mb-2">Certifications</h2>
            <ul className="list-disc pl-5">
              {resumeData.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Languages */}
        {resumeData.languages.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold border-b pb-1 mb-2">Languages</h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.languages.map((lang, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}