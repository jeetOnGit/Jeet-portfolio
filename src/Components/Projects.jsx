import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  const projectDetails = [
    {
      projectName: "My Portfolio",
      bgImg: "images/jeet.PNG",
      gitLink: "https://github.com/jeetOnGit/Jeet-portfolio",
      liveLink: "https://jeetonweb.netlify.app/",
      usedTools: ["HTML", "CSS", "Javascript", "React"],
    },
    {
      projectName: "Airbnb clone",
      bgImg: "images/demo.PNG",
      gitLink: "https://github.com/jeetOnGit/Airbnb",
      liveLink: "https://airbnb-frontend-0en8.onrender.com/",
      usedTools: ["HTML", "CSS", "JS", "React", "Express", "NodeJs", "MongoDB"],
    },
    {
      projectName: "TravelGeo",
      bgImg: "images/travel.PNG",
      gitLink: "https://github.com/jeetOnGit/travel-Website",
      liveLink: "https://travelgeo.netlify.app/",
      usedTools: ["HTML", "CSS", "Javascript", "React"],
    },
    {
      projectName: "Url shortner",
      bgImg: "images/demo.PNG",
      gitLink: "https://github.com/jeetOnGit/short-url",
      liveLink: "https://short-url-frontend-6c0j.onrender.com/",
      usedTools: ["HTML", "CSS", "Javascript", "React", "Express", "NodeJs"],
    },
    {
      projectName: "Tips Calculator",
      bgImg: "images/tips.PNG",
      gitLink: "https://github.com/jeetOnGit/Tip-Calculator",
      liveLink: "https://mytipscalculator.netlify.app/",
      usedTools: ["HTML", "CSS", "Javascript", "React"],
    },
    {
      projectName: "Custom Password",
      bgImg: "images/password.PNG",
      gitLink: "https://github.com/jeetOnGit/Password-generator",
      liveLink: "https://make-own-password.netlify.app/",
      usedTools: ["HTML", "CSS", "Javascript", "React"],
    },
  ];

  return (
    <>
      {projectDetails.map((project, index) => (
        <div
          key={index}
          className="project w-[400px] h-[200px] overflow-hidden bg-[#1e1e1e] rounded-lg border bg-contain max-[520px]:bg-cover relative group bg-no-repeat"
          // style={{
          //   backgroundImage: `url(${project.bgImg})`,
          // }}
        >
          <iframe title="Website Preview" src={project.liveLink} className="w-[1400px] h-[1000px] scale-[0.3] transform origin-top-left pointer-events-none border-none" frameborder="0"></iframe>
          <div className="overlay absolute w-full h-full top-0 bg-black opacity-[0.9] hidden rounded-lg  group-hover:block">
            <div className="flex flex-col items-center justify-center h-full gap-2">
            <ul className="flex justify-center items-center gap-5">
              <li>
                <Link to={project.gitLink} target="_blank">
                  <i class="fa-brands fa-github text-white text-[1.5rem]" />
                </Link>
              </li>
              <li>
                <Link to={project.liveLink} target="_blank">
                  <i class="fa-solid fa-expand text-white text-[1.5rem]"></i>
                </Link>
              </li>
            </ul>
            <ul className="flex gap-1 flex-wrap mt-1 justify-center text-white">
              {project.usedTools.map((tool, index) => (
                <li className="border border-[#7B66EE] px-3 rounded-full" key={index}>{tool}</li>
              ))}
            </ul>
            </div>
            
          </div>
        </div>
      ))}
    </>
  );
}

export default Projects;
