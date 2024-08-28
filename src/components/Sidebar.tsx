 
// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaTools, FaBriefcase, FaEnvelope, FaBlog } from 'react-icons/fa';
import ProfilePhoto from './ProfilePic';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
       <ProfilePhoto
        src="public/img/kevin.png" 
        alt="Kevin Christopher"
        size={100} 
      />
      <h2>Portfolio</h2>
      <nav>
        <ul>
        <li><Link to="/">  Developer </Link></li>
          <li><Link to="/about"><FaUser /> About</Link></li>
          <li><Link to="/skills"><FaTools /> MySkills</Link></li>
          <li><Link to="/work"><FaBriefcase /> Work</Link></li>
          <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
          <li><Link to="/blog"><FaBlog /> Blog</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

