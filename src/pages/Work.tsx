// src/pages/Work.tsx
import React from 'react';
import PdfViewer from '../components/PdfViewer';

const MySkills: React.FC = () => {
  const pdfUrl = 'https://coding-corps.github.io/my-portfolio/files/Profile.pdf'; // Replace with your PDF URL


  return (
    <div className='resume'>
      <h1>Take a look at my resume here: 
      </h1>
      <PdfViewer pdfUrl={pdfUrl} />
    </div>
  );

};

export default MySkills;