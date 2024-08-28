import React from 'react';
import TypingEffect from '../components/TypingEffect'; // Ensure the path is correct

const Landing: React.FC = () => {
  return (
    <>

      <div className='kevinBg'>
        <div className='landingText'>
          <h1>
            <span style={{ fontSize: '90px' }}>Kevin Christopher</span> <br />
            ... <TypingEffect />
          </h1>
        </div>


      </div>
    </>
  );
};

export default Landing;
