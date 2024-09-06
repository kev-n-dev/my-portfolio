import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  return (
       <a href={pdfUrl} download="kevin_christopher_resume.pdf">
        <button>Download Resume</button>
      </a>
   );
};

export default PdfViewer;
