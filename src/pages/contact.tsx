import React, { useState } from 'react';
import SocialLinks from '../components/Socials';
 
// Define a TypeScript interface for the contact info
interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

const Contact: React.FC = () => {
  // Example contact info
  const [contactInfo] = useState<ContactInfo>({
    email: 'kevin.christopher.93@outlook.com',
    phone: '+1-868-794-9433',
    address: 'Lp #113 Vega De Oropouche, Toco Main Road, Sangre Grande, Trinidad and Tobago'
  });

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className='contactSocials'>
      <SocialLinks></SocialLinks>
      </div>
      <div className="invitation-message">  <p >
        If you’re a recruiter or someone interested in working with<br></br>
         a dedicated and experienced software developer, feel free to reach out. <br></br>
        I’m always open to new opportunities and collaborations. <br></br>
        Let’s connect!
      </p></div>
    
      <div className="contact-details">
        <p><strong>Email:</strong> <a href="mailto:kevin.christopher.93@outlook.com"> {contactInfo.email}</a></p>
        <p><strong>Phone:</strong> {contactInfo.phone}</p>
        <p><strong>Address:</strong> {contactInfo.address}</p>
      </div>


      

    </div>

  );
};

export default Contact;
