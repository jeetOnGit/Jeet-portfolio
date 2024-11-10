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
      bgImg: "images/demo.jpg",
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
      projectName: "Login Page",
      bgImg: "images/demo.jpg",
      gitLink: "https://github.com/jeetOnGit/sign-up-Page",
      liveLink: "https://architect-login.netlify.app/",
      usedTools: ["HTML", "CSS", "Javascript", "React"],
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
          className="project w-[350px] h-[200px] bg-[#1e1e1e] rounded-lg border bg-contain max-[520px]:bg-cover relative group bg-no-repeat"
          style={{
            backgroundImage: `url(${project.bgImg})`,
          }}
        >
          <div className="overlay absolute w-full h-full bg-black opacity-[0.9] rounded-lg hidden group-hover:block">
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
