// src/components/MainContent.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import MySkills from '../pages/MySkills';
import Work from '../pages/Work';
import Contact from '../pages/contact';
import Blog from '../pages/blog';
import Landing from '../pages/Landing';

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<MySkills />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Landing />} />
        </Routes>
     </div>
  );
};

export default MainContent;
