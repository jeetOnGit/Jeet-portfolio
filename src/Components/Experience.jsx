import React from "react";

function Experience() {

  return (
    <div className="container mx-auto px-2">
      <div className="experienceHeading text-center mb-12">
        <h2 className="text-[2rem] font-semibold">Experience</h2>
      </div>
      <div className="timeline relative">
        <div className="timelineBar absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 w-[1px] bg-[#1e1e1e] h-full max-[520px]:left-0 before:absolute before:w-[1px] before:bg-[#7B66EE] before:h-full ">
  
        </div>
        <div className="timelineContent flex flex-col gap-6 w-full max-[520px]:ms-2">
          <div className="experienceBox w-[40%] max-[520px]:w-full">
            <h5 className="text-[1.25rem] font-semibold">Graphic Designer</h5>
            <p className="italic text-[0.75rem] py-2">
              Cherry Media | Jul 2023 – Jul 2024
            </p>
            <p className="">
              I developed portfolio websites using HTML, CSS, and React. Created
              and edited video content for YouTube, enhancing engagement.
              Designed social media graphics, improving brand presence.
            </p>
          </div>
          <div className="experienceBox w-[40%] text-right self-end max-[520px]:w-full max-[520px]:text-start">
            <h5 className="text-[1.25rem] font-semibold">Freelancer</h5>
            <p className="italic text-[0.75rem] py-2">Part-time</p>
            <p className="">
              I was a part time Graphic Designer and worked with multiple brands
              and individuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
