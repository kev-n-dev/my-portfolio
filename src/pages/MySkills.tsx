import React from 'react';
import SkillList from '../components/SkillList';

const skills = [
  { name: 'JavaScript', proficiency: 95 },
  { name: 'TypeScript', proficiency: 60 },
  { name: 'React', proficiency: 80 },
  { name: 'SCSS', proficiency: 60 },
  { name: 'CSS', proficiency: 90 },
  { name: 'Golang', proficiency: 90 },
  { name: 'Python', proficiency: 90 },
  { name: 'DynamoDb', proficiency: 50 },
  { name: 'PostgreSQL', proficiency: 90 },
  { name: 'MySQL', proficiency: 90 },
  { name: 'Agile Methodologies', proficiency: 88 },
  { name: 'Representational State Transfer (REST)', proficiency: 99 },
  { name: 'Vue.js', proficiency: 90 },
  { name: 'Terraform', proficiency: 40 },
  { name: 'Amazon Web Services (AWS)', proficiency: 50 },
  { name: 'Git', proficiency: 80 },
  { name: 'HTML5', proficiency: 90 },
  { name: 'Jira', proficiency: 60 },
  { name: 'Team Leadership', proficiency: 70 },
  { name: 'Project Planning', proficiency: 50 },
  { name: 'PHP', proficiency: 30 },
];

const MySkills: React.FC = () => {
  return (
    <div className='skillsContain'>
      <div className='skillHeader'>
      <h1>My Skills: A Journey of Continuous Learning</h1>

      <p >
      In the ever-evolving world of technology, I'm committed to constantly expanding my expertise and mastering new tools.<br/>
       My skill set reflects a blend of seasoned experience and a relentless drive to learn and grow. <br/>
       Dive in to explore the areas I'm passionate about and see how I'm continuously enhancing my craft.
      </p>
      </div>
           <div className='skillSection'>
        <SkillList skills={skills} />
      </div>
     </div>
  );
};

export default MySkills;
