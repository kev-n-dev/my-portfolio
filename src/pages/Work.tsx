// src/pages/Work.tsx
import React from 'react';
import PdfViewer from '../components/PdfViewer';

const MySkills: React.FC = () => {
  const pdfUrl = 'https://coding-corps.github.io/my-portfolio/files/Profile.pdf'; // Replace with your PDF URL


  return (

    <div className='workContent'>
      <div className='resume'>
        <h4>Take a look at my resume here: <span><PdfViewer pdfUrl={pdfUrl} /></span>
        </h4>
      </div>
      <hr></hr>

      <div className='overview'>
        <h1>Overview</h1>
        <p>
          My name is Kevin Christopher, and I am a dedicated software developer with nearly five years of professional experience.
          I hold a Bachelor of Science degree with a double major in Information Technology and Environmental Science from the University of the West Indies.
          Since September 2019, I have been deeply involved in the software development field, honing my skills in Agile methodologies, Scrum, Go, Python, Vue, and Terraform.
        </p>
        <p>
          One of my key strengths is my ability to quickly learn and adapt to new programming languages and technologies, which has allowed me to contribute significantly
          to diverse projects and stay abreast of industry trends. Recently, I have been expanding my expertise by learning React and successfully built a blog from scratch
          to document and share my learning process.
        </p>
        <p>
          In my role as a Software Developer Level 2, I have led small teams through the entire software development lifecycle—from planning and execution to deployment and maintenance.
          This role has enhanced my understanding of complex projects and technologies and refined my leadership skills.
        </p>
        <p>
          Throughout my career, I have collaborated with cross-functional teams, leveraging Agile methodologies to drive successful outcomes.
          My adaptability, problem-solving skills, and commitment to continuous learning make me a valuable asset to any development team.
        </p>
      </div>
      <hr></hr>

      <div className='education'>
        <section>
          <h1>Education</h1>

          <article>
            <h2>Bachelor of Science (BSc), Double Major in Information Technology & Environmental Science</h2>
            <p><strong>Institution:</strong> University of the West Indies, St. Augustine Campus</p>
            <p><strong>Dates:</strong> September 2015 - September 2019</p>
            <p><strong>Grade:</strong> 2nd Class Honors</p>
          </article>
        </section>
      </div>
      <hr></hr>

      <div className='experience'>
        <section>
          <h1>Work Experience</h1>

          {/* <!-- Software Developer II --> */}
          <article>
            <h2>Software Developer II at Wepala Ltd</h2>
            <p><strong>Location:</strong> IT, St. Augustine/Valsayn</p>
            <p><strong>Dates:</strong> October 2021 - Present</p>
            <p>
              As a Software Developer II at Wepala Ltd, I expanded my technical skills and took on leadership responsibilities.
              I gained experience with AWS, using the CLI and AWS Lambda for cloud-based application management. My database expertise grew with MySQL, PostgreSQL, Amazon DynamoDB, and Redis,
              allowing me to design efficient data storage solutions.
            </p>
            <p>
              I developed server-side applications using Python and Flask and worked with Vue.js and React.js for front-end development.
              My skills in TypeScript and JavaScript were essential for creating cross-browser-compatible applications, and I used Terraform to automate infrastructure.
              I actively participated in Agile methodologies, contributing to project planning, product road mapping, and refinement sessions.
            </p>
            <p>
              I led code reviews, guided the team, and enhanced my problem-solving and troubleshooting abilities. Effective communication was key,
              as I coordinated with stakeholders and improved customer service. I utilized Jira for project management and Git for version control.
            </p>
            <p>
              Additionally, I gained experience with Flutter, HTML5, CSS, Kibana, SQL, PHP, and MongoDB, rounding out my technical expertise.
              In this role, I led by example, focusing on delivering high-quality software and driving continuous improvement in our development processes.
              My work involved guiding the team through best practices, ensuring effective communication, and leveraging a wide range of technologies to meet project goals.
            </p>
          </article>

          {/* <!-- Software Developer I --> */}
          <article>
            <h2>Software Developer I at Wepala Ltd</h2>
            <p><strong>Location:</strong> IT, St. Augustine/Valsayn</p>
            <p><strong>Dates:</strong> May 2020 - October 2021</p>
            <p>
              In my role as a Software Developer I at Wepala Ltd, I continued to build on my foundation by taking on more complex tasks and responsibilities.
              I became proficient in implementing Representational State Transfer (REST) APIs, which allowed me to develop scalable and efficient server-side applications.
              My problem-solving skills were further honed as I worked on troubleshooting issues and ensuring cross-browser compatibility for web applications.
            </p>
            <p>
              I gained hands-on experience with Vue.js, where I contributed to developing dynamic front-end features, and I also delved into the Go programming language,
              which enhanced my ability to build high-performance backend services. My work was closely aligned with Agile methodologies, and I regularly participated
              in code reviews to maintain code quality and consistency across the team.
            </p>
            <p>
              In addition to technical skills, I improved my oral communication by effectively discussing project requirements and progress with team members and stakeholders.
              My ability to troubleshoot complex issues became a key strength, enabling me to quickly identify and resolve bugs or performance bottlenecks.
              I also explored Swift, which expanded my knowledge into mobile development, and I consistently applied best practices to ensure robust and maintainable code.
            </p>
          </article>

          {/* <!-- Junior Developer --> */}
          <article>
            <h2>Junior Software Developer at Wepala Ltd</h2>
            <p><strong>Location:</strong> IT, St. Augustine/Valsayn</p>
            <p><strong>Dates:</strong> October 2019 - April 2020</p>
            <p>
              During my time as a Junior Software Developer at Wepala Ltd, I had the opportunity to be mentored by senior developers,
              which helped me understand the internal structure and microservices within the organization.
              I collaborated with my team on features that allowed me to put theoretical concepts and methodologies into practice.
            </p>
            <p>
              I gained hands-on experience with the Scrum/Agile framework, Domain-Driven Design (DDD), and Test-Driven Design (TDD).
              My responsibilities included creating and maintaining technical documentation, designing and refining solutions, and developing new features for ongoing projects.
            </p>
            <p>
              I was also involved in identifying and debugging issues, which helped me strengthen my problem-solving skills.
              Additionally, I conducted demonstrations and feature presentations for internal stakeholders and my team.
              I created Unit, End-to-End, Behavior-Driven Development (BDD), and Postman tests to ensure the quality of the software.
            </p>
            <p>
              Throughout my work, I used Bitbucket (git) for version control, which allowed me to manage and track project changes effectively.
            </p>
          </article>
        </section>
      </div>
      <hr></hr>

      <div className='keySkills'>
        <section>
          <h1>Key Skills</h1>
          <ul>
            <li><strong>Agile Methodologies:</strong> Expertise in Agile practices, including Scrum, for managing and delivering projects efficiently and iteratively.</li>
            <li><strong>Python:</strong> Proficient in Python for developing robust server-side applications and scripting.</li>
            <li><strong>Go (Golang):</strong> Skilled in Go for building high-performance and scalable backend services.</li>
            <li><strong>JavaScript:</strong> Experienced in JavaScript for dynamic web development and client-side scripting.</li>
            <li><strong>TypeScript:</strong> Knowledgeable in TypeScript for building reliable and maintainable JavaScript applications with type safety.</li>
            <li><strong>React.js:</strong> Familiar with React.js for creating interactive and responsive user interfaces.</li>
            <li><strong>Vue.js:</strong> Experienced in Vue.js for developing modern and efficient front-end applications.</li>
            <li><strong>Terraform:</strong> Proficient in Terraform for infrastructure as code, enabling automated and consistent cloud resource management.</li>
            <li><strong>AWS:</strong> Practical experience with AWS services, including Lambda, for cloud-based application deployment and management.</li>
            <li><strong>MySQL & PostgreSQL:</strong> Skilled in relational databases such as MySQL and PostgreSQL for designing and managing data storage solutions.</li>
            <li><strong>Amazon DynamoDB & Redis:</strong> Knowledgeable in NoSQL databases like DynamoDB and Redis for handling high-performance data operations.</li>
            <li><strong>Flask:</strong> Experienced with Flask for developing lightweight and flexible web applications in Python.</li>
            <li><strong>HTML5 & CSS:</strong> Proficient in HTML5 and CSS for creating well-structured and visually appealing web pages.</li>
            <li><strong>Jira:</strong> Experienced with Jira for project management, issue tracking, and agile workflows.</li>
            <li><strong>Git:</strong> Proficient in Git for version control, enabling collaborative development and code management.</li>
            <li><strong>Flutter:</strong> Basic knowledge of Flutter for building cross-platform mobile applications.</li>
            <li><strong>Kibana:</strong> Familiar with Kibana for visualizing and analyzing log data to gain insights into application performance.</li>
            <li><strong>Cross-Browser Compatibility:</strong> Skilled in ensuring web applications function consistently across different web browsers.</li>
            <li><strong>Problem Solving & Troubleshooting:</strong> Strong analytical skills for identifying and resolving technical issues efficiently.</li>
            <li><strong>Team Leadership:</strong> Experience in leading small teams, guiding development processes, and ensuring high-quality deliverables.</li>
          </ul>
        </section>
      </div>
<hr></hr>
<div className='resume'>

      <PdfViewer pdfUrl={pdfUrl} />
</div>

    </div>

  );

};

export default MySkills;