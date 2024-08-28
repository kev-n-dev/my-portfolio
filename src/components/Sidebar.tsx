 
// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaTools, FaBriefcase, FaEnvelope, FaBlog } from 'react-icons/fa';
import ProfilePhoto from './ProfilePic';
import SocialLinks from './Socials';
import { FaHouse } from 'react-icons/fa6';
const Sidebar: React.FC = () => {
  return (
    <div >
       <ProfilePhoto
        src="img/kevin.png" 
        alt="Kevin Christopher"
        size={100} 
      />
      <h2>Kevin Christopher</h2>
      <SocialLinks></SocialLinks>
      <nav className='navigation'>
        <ul>
        <li><Link to="/"> <FaHouse/>Home </Link></li>
          <li><Link to="/about"><FaUser /> About</Link></li>
          <li><Link to="/skills"><FaTools /> MySkills</Link></li>
          <li><Link to="/work"><FaBriefcase /> Resume</Link></li>
          <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
          <li><Link to="/blog"><FaBlog /> Blog</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

