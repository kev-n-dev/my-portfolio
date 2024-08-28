import React, { useState, useEffect } from 'react';

const Profile: React.FC = () => {


  const [currentAge, setCurrentAge] = useState(0);

  useEffect(() => {
    const calculateAge = (birthDate: string) => {
      const today = new Date();
      const birthDateObj = new Date(birthDate);
      let age = today.getFullYear() - birthDateObj.getFullYear();
      const monthDifference = today.getMonth() - birthDateObj.getMonth();

      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
      }

      return age;
    };

    // Replace with the actual birthdate
    const birthDate = '1993-05-02';
    const age = calculateAge(birthDate);
    setCurrentAge(age);
  }, []);



  return (
    <div className="row gy-4 justify-content-center">
      <div className="col-lg-4">
        <img className="proPicImage"src="img/kevin2.png" alt="Kevin" />
      </div>
      <div className="cardInfo col-lg-8 content">
        <h2>UI/UX Designer &amp; Web Developer.</h2>
        <p className="fst-italic py-3">
        I am a dedicated Senior Software Developer with 5 years of experience in designing and implementing innovative solutions for various industries.<br/>
         My expertise spans across frontend and backend development, with a strong focus on creating intuitive user interfaces and enhancing user experience. <br/>
         I thrive in collaborative environments, working closely with cross-functional teams to deliver high-quality, scalable software solutions.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>5 February 1993</span>
              </li>
       
              <li>
                <i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+1-868-794-9433</span>
              </li>
              <li >
                <i className="bi bi-chevron-right" ></i> <strong>Email:</strong> <span> <a href="mailto:kevin.christopher.93@outlook.com">kevin.christopher.93@outlook.com</a></span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Sangre Grande, Trinidad</span>
              </li>
              <li>
              <i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{currentAge}</span>
              </li>
              
              <li>
                <i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BSc: Double Major Information Technology and Environmental Science </span>
              </li>
            
              <li>
                <i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i> <strong>Blog:</strong> <span><a href='https://coding-corps.github.io/CodingCompass'>https://coding-corps.github.io/CodingCompass/</a></span>
              </li>
            </ul>
          </div>
        </div>
        <p className="py-3">
            <br></br>
        With a passion for continuous learning, I stay updated with the latest technologies and trends in the software development world.<br/>
         My goal is to build software that not only meets the needs of today but also paves the way for the future.
         </p>
      </div>
    </div>
  );
};

export default Profile;
