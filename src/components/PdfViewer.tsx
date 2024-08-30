import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
      <a href={pdfUrl} download="document.pdf">
        <button>Download PDF</button>
      </a>
    </div>
  );
};

export default PdfViewer;
