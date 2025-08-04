"use client";

import { Button } from "@/components/ui/button";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

type ResumeData = {
  // ... (keep all existing type definitions)
};

export function ResumePreview({ resumeData }: { resumeData: ResumeData }) {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "resume",
    removeAfterPrint: true
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={handlePrint}>Download PDF</Button>
      </div>
      
      <div ref={resumeRef} className="bg-white p-8 rounded shadow max-w-4xl mx-auto">
        {/* ... rest of the preview content ... */}
      </div>
    </div>
  );
}