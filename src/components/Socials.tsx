import React from 'react';
import styled from 'styled-components';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SocialLinksWrapper = styled.div`
  display: flex;
justify-content: center;
  align-items: center;
  gap: 10px; /* Adjusts spacing between icons */
  padding: 1px 
`;

const SocialLink = styled.a`
  color: white; /* Sets icon color to white */
  font-size: 24px; /* Adjusts the icon size */
  transition: color 0.3s ease;

  &:hover {
    color: #007bff; /* Changes color on hover */
  }
`;

const SocialLinks: React.FC = () => {
  return (
    <SocialLinksWrapper>
      <SocialLink href="https://www.facebook.com/kevin.christopher.737448" className="facebook">
        <i className="bi bi-facebook"></i>
      </SocialLink>
      <SocialLink href="https://github.com/kev-n-dev" className="github">
        <i className="bi bi-github"></i>
      </SocialLink>
      <SocialLink href="mailto:kevin.christopher.93@outlook.com" className="email">
        <i className="bi bi-envelope"></i>
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/kevin-christopher-7537007a/" className="linkedin">
        <i className="bi bi-linkedin"></i>
      </SocialLink>
    </SocialLinksWrapper>
  );
};

export default SocialLinks;
