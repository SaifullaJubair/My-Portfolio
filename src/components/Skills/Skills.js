// Skills.js
// import "./Skills.css";

// const SkillBar = ({ skill, percentage }) => {
//   return (
//     <div className="skill-bar">
//       <span className="skill">{skill}</span>
//       <div className="bar">
//         <div className="progress" style={{ width: `${percentage}%` }}></div>
//       </div>
//       <span className="percentage">{percentage}%</span>
//     </div>
//   );
// };

// const Skills = () => {
//   return (
//     <div className="skills-container">
//       <h2>Skills</h2>
//       <SkillBar skill="HTML" percentage={90} />
//       <SkillBar skill="CSS" percentage={90} />
//       <SkillBar skill="JavaScript" percentage={70} />
//       <SkillBar skill="React" percentage={80} />
//       {/* Add more SkillBar components for other skills */}
//     </div>
//   );
// };

// export default Skills;

import React from "react";
import SkillBar from "react-skillbars";

const Skills = () => {
  const skills = [
    { type: "HTML", level: 100 },
    { type: "CSS", level: 90 },
    { type: "Javascript", level: 75 },
    { type: "React", level: 85 },
    { type: "NextJs", level: 70 },
    { type: "NodeJs", level: 60 },
    { type: "ExpressJs", level: 70 },
    { type: "MongoDB", level: 60 },
    { type: "TypeScript", level: 30 },
  ];
  const colors = {
    bar: "#90d9b8",
    title: {
      text: "#fff",
      background: "#55e6a5",
    },
  };

  return (
    <div className="bg-primary  p-8">
      <div className="max-w-[1320px] mb-10 mx-auto">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <p className="text-info text-3xl py-6 font-semibold tracking-wider">
            Why Choose Me
          </p>
          <h2 className="max-w-lg mb-16 font-sans text-3xl font-bold leading-none tracking-wide text-white sm:text-4xl md:mx-auto">
            My Experience Area
          </h2>
        </div>
        <SkillBar
          skills={skills}
          colors={colors}
          height={22}
          symbolColor={"#3498db"}
        />
      </div>
    </div>
  );
};

export default Skills;
