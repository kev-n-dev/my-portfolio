import React from 'react';
import TypingEffect from '../components/TypingEffect'; // Ensure the path is correct

const Landing: React.FC = () => {
  const backgroundImageUrl = 'img/kcBg.png'; // Replace with your image path

  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImageUrl})`,
   };

  return (
    <div className='kevinBg' style={containerStyle}>
      <div >
        <h1>
          <span style={{ paddingLeft: '20px', paddingTop:"20px", fontSize: '90px' }}>Kevin Christopher</span> <br />
           <p style={{ paddingLeft: '20px' }} >... <TypingEffect /></p> 
        </h1>
      </div>
    </div>
  );
};

export default Landing;
