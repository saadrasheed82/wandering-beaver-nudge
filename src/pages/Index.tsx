"use client";

import { useState } from "react";
import { ResumeForm } from "@/components/resume-form";
import { ResumePreview } from "@/components/resume-preview";
import { MadeWithDyad } from "@/components/made-with-dyad";

export default function Index() {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    linkedIn: "",
    github: "",
    profileSummary: "",
    skills: [],
    workExperience: [{
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      description: ""
    }],
    education: [{
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      gpa: ""
    }],
    certifications: [],
    languages: []
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Resume Builder</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Resume Details</h2>
            <ResumeForm onFormChange={setResumeData} />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Resume Preview</h2>
            <ResumePreview resumeData={resumeData} />
          </div>
        </div>
        
        <MadeWithDyad />
      </div>
    </div>
  );
}