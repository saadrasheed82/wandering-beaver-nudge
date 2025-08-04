"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type FormData = {
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

export function ResumeForm({ onFormChange }: { onFormChange: (data: FormData) => void }) {
  const { register, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
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
    }
  });

  const [currentSkill, setCurrentSkill] = useState("");
  const [currentCertification, setCurrentCertification] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("");

  const formData = watch();
  onFormChange(formData);

  const addSkill = () => {
    if (currentSkill.trim()) {
      formData.skills.push(currentSkill.trim());
      setCurrentSkill("");
    }
  };

  const addCertification = () => {
    if (currentCertification.trim()) {
      formData.certifications.push(currentCertification.trim());
      setCurrentCertification("");
    }
  };

  const addLanguage = () => {
    if (currentLanguage.trim()) {
      formData.languages.push(currentLanguage.trim());
      setCurrentLanguage("");
    }
  };

  const addWorkExperience = () => {
    formData.workExperience.push({
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      description: ""
    });
  };

  const addEducation = () => {
    formData.education.push({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      gpa: ""
    });
  };

  return (
    <form className="space-y-6 p-4">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Full Name</Label>
            <Input {...register("fullName")} placeholder="John Doe" />
          </div>
          <div>
            <Label>Email</Label>
            <Input {...register("email")} type="email" placeholder="john@example.com" />
          </div>
          <div>
            <Label>Phone</Label>
            <Input {...register("phone")} placeholder="+1 (123) 456-7890" />
          </div>
          <div>
            <Label>Address</Label>
            <Input {...register("address")} placeholder="123 Main St, City" />
          </div>
          <div>
            <Label>LinkedIn</Label>
            <Input {...register("linkedIn")} placeholder="linkedin.com/in/username" />
          </div>
          <div>
            <Label>GitHub</Label>
            <Input {...register("github")} placeholder="github.com/username" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Profile Summary</Label>
        <Textarea 
          {...register("profileSummary")} 
          placeholder="Brief summary about yourself (max 500 characters)" 
          maxLength={500}
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label>Skills</Label>
        <div className="flex gap-2">
          <Input 
            value={currentSkill}
            onChange={(e) => setCurrentSkill(e.target.value)}
            placeholder="Add a skill"
          />
          <Button type="button" onClick={addSkill}>Add</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.skills.map((skill, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Work Experience</h2>
        {formData.workExperience.map((_, index) => (
          <div key={index} className="border p-4 rounded space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Company</Label>
                <Input {...register(`workExperience.${index}.company`)} />
              </div>
              <div>
                <Label>Title</Label>
                <Input {...register(`workExperience.${index}.title`)} />
              </div>
              <div>
                <Label>Start Date</Label>
                <Input {...register(`workExperience.${index}.startDate`)} type="date" />
              </div>
              <div>
                <Label>End Date</Label>
                <Input {...register(`workExperience.${index}.endDate`)} type="date" />
              </div>
            </div>
            <div>
              <Label>Description</Label>
              <Textarea {...register(`workExperience.${index}.description`)} rows={3} />
            </div>
          </div>
        ))}
        <Button type="button" onClick={addWorkExperience}>Add Work Experience</Button>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Education</h2>
        {formData.education.map((_, index) => (
          <div key={index} className="border p-4 rounded space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>School</Label>
                <Input {...register(`education.${index}.school`)} />
              </div>
              <div>
                <Label>Degree</Label>
                <Input {...register(`education.${index}.degree`)} />
              </div>
              <div>
                <Label>Start Date</Label>
                <Input {...register(`education.${index}.startDate`)} type="date" />
              </div>
              <div>
                <Label>End Date</Label>
                <Input {...register(`education.${index}.endDate`)} type="date" />
              </div>
              <div>
                <Label>GPA</Label>
                <Input {...register(`education.${index}.gpa`)} />
              </div>
            </div>
          </div>
        ))}
        <Button type="button" onClick={addEducation}>Add Education</Button>
      </div>

      <div className="space-y-2">
        <Label>Certifications</Label>
        <div className="flex gap-2">
          <Input 
            value={currentCertification}
            onChange={(e) => setCurrentCertification(e.target.value)}
            placeholder="Add a certification"
          />
          <Button type="button" onClick={addCertification}>Add</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.certifications.map((cert, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded">
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Languages</Label>
        <div className="flex gap-2">
          <Input 
            value={currentLanguage}
            onChange={(e) => setCurrentLanguage(e.target.value)}
            placeholder="Add a language"
          />
          <Button type="button" onClick={addLanguage}>Add</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.languages.map((lang, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded">
              {lang}
            </span>
          ))}
        </div>
      </div>
    </form>
  );
}