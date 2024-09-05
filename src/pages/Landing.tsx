import React from 'react';
import TypingEffect from '../components/TypingEffect'; // Ensure the path is correct

const Landing: React.FC = () => {
  return (
    <div className='kevinBg' >
      <div >
        <h1 >
          <span className='landingName'  >Kevin Christopher</span> <br />
           <p className="typing" style={{ paddingLeft: '20px' }} >... <TypingEffect /></p> 
        </h1>
      </div>
    </div>
  );
};
 export default Landing;
