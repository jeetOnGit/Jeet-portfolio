import React from "react";
import './skill.css'
function Skills() {
  const skillsArr = [
    "SCSS",
    "Bootstrap",
    "Tailwind",
    "React",
    "Jquery",
    "MySql",
    "MongoDB",
    "Express",
    "NodeJS",
    "Figma",
    "Wordpress",
    "NextJs",
    "Photoshop",
  ];
  return (
    <>
      {/* <div className="flex flex-col justify-between gap-6 px-2">
        <div className="frontend">
          <h5>HTML, CSS, Javascript, SCSS, Bootstrap & Tailwind</h5>
          <div className="bar bg-[#1e1e1e] w-100% h-[20px] mt-5 relative before:absolute before:h-full before:w-[95%] before:bg-[#7B66EE]"></div>
        </div>

        <div className="frontend">
        <h5>React & Jquery</h5>
        <div className="bar bg-[#1e1e1e] w-100% h-[20px] mt-5 relative before:absolute before:h-full before:w-[75%] before:bg-[#7B66EE]"></div>
        </div>

        <div className="frontend">
        <h5>Figma, Wordpress, Photoshop & Illustrator</h5>
        <div className="bar bg-[#1e1e1e] w-100% h-[20px] mt-5 relative before:absolute before:h-full before:w-[90%] before:bg-[#7B66EE]"></div>
        </div>
      </div> */}
      {/* 7B66EE */}
      <div className="overflow-hidden flex strip">
        <ul className="flex justify-between list">
          {skillsArr.map((skill, index) => (
            <li key={index} className="skill py-1 px-4 bg-[#7B66EE] text-[#fff] rounded">
              {skill}
            </li>
          ))}
        </ul>

        <ul className="flex justify-between list" aria-hidden='true'>
          {skillsArr.map((skill, index) => (
            <li key={index} className="skill py-1 px-4 bg-[#7B66EE] text-[#fff] rounded">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden flex strip mt-5">
        <ul className="flex justify-between backList">
          {skillsArr.map((skill, index) => (
            <li key={index} className="skill py-1 px-4 bg-[#7B66EE] text-[#fff] rounded">
              {skill}
            </li>
          ))}
        </ul>

        <ul className="flex justify-between backList" aria-hidden='true'>
          {skillsArr.map((skill, index) => (
            <li key={index} className="skill py-1 px-4 bg-[#7B66EE] text-[#fff] rounded">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      
    </>
  );
}

export default Skills;
