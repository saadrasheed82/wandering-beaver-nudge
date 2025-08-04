"use client";

import { Button } from "@/components/ui/button";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

export function ResumePreview({ resumeData }: { resumeData: any }) {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    pageStyle: `
      @page { size: A4; margin: 1cm; }
      @media print {
        body { -webkit-print-color-adjust: exact; }
      }
    `
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={handlePrint}>Download PDF</Button>
      </div>
      <div ref={resumeRef}>
        {/* Preview content */}
      </div>
    </div>
  );
}