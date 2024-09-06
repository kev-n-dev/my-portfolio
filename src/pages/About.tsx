// src/pages/About.tsx
 import Profile from '../components/profileCard';

const About: React.FC = () => {



  return (

    
    <div className='about'>
     
     {/* <!-- Section Title --> */}
      <div   data-aos="fade-up">
        <div className='aboutText'>
        <h2>About</h2>
        <p> Meet Kevin Christopher,<br/> a dedicated software developer with a passion for building innovative solutions and crafting user-friendly experiences.<br/> 
         His expertise spans a wide range of programming languages and frameworks, including React, JavaScript, Python, and more.<br/> 
          Kevin thrives on challenging projects that push him to grow professionally, always eager to learn and improve. <br/> 
      </p>
      </div>
      <div className='aboutProfile'>
      <Profile></Profile>

      </div>
      </div>
 

    </div>
  );
};

export default About;
