import React from "react";

function Skills() {
  
  return (
    <>
      <div className="flex flex-col justify-between gap-6 px-2">
        <div className="frontend">
          <h5>HTML, CSS, Javascript, SCSS Bootstrap & Tailwind</h5>
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
      </div>
    </>
  );
}

export default Skills;
