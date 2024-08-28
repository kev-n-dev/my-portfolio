import React from 'react';
 
interface Skill {
  name: string;
  proficiency: number;
}

interface SkillListProps {
  skills: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-name">{skill.name}</div>
          <div className="skill-progress">
            <div
              className="skill-progress-bar"
              style={{ width: `${skill.proficiency}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
