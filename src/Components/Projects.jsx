import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Projects() {
  const projectDetails = [
    {
      projectName: "My Portfolio",
      bgImg: "images/avatar.jpg",
      gitLink: "https://github.com/jeetOnGit/Jeet-portfolio",
      liveLink: "https://jeetonweb.netlify.app/",
      usedTools: ["HTML", "CSS", "Javascript", "React"],
    },
    {
      projectName: "AI Chatbot",
      bgImg: "images/ai.webp",
      gitLink: "https://github.com/jeetOnGit/AI_chatbot",
      liveLink: "https://chataithink.netlify.app/",
      usedTools: ["HTML", "CSS", "JS", "React"],
    },
    {
      projectName: "TravelGeo",
      bgImg: "images/demoImg.jpg",
      gitLink: "https://github.com/jeetOnGit/travel-Website",
      liveLink: "https://travelgeo.netlify.app/",
      usedTools: ["HTML", "CSS", "Javascript", "React"],
    },
    {
      projectName: "Url shortner",
      bgImg: "images/url.png",
      gitLink: "https://github.com/jeetOnGit/short-url",
      liveLink: "https://short-url-frontend-6c0j.onrender.com/",
      usedTools: ["HTML", "CSS", "Javascript", "React", "Express", "NodeJs"],
    },
    {
      projectName: "Tips Calculator",
      bgImg: "images/calc.jpg",
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
          className="project relative bg-[#F5EFFF] text-[#1e1e1e] z-10 p-2 border border-[#7B66EE] w-[400px] rounded-lg flex flex-col gap-2"
        >
          <div>
            <img className="w-[400px] h-[200px] rounded-lg" src={project.bgImg} alt="" />
          </div>

          <div>
            <h3 className="font-bold text-[1.3rem]">{project.projectName}</h3>
            <p className="text-[0.9rem]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At iusto
              voluptatem qui doloremque, aspernatur quia. Dolorum ad totam
              dolore architecto?
            </p>
          </div>

          <ul className="flex gap-1 flex-wrap ">
            {project.usedTools.map((tool, index) => (
              <li
                className="border border-[#7B66EE] px-3 rounded-sm hover:bg-[#7B66EE] hover:text-white"
                key={index}
              >
                {tool}
              </li>
            ))}
          </ul>

          <div className="icons">
            <ul className="flex flex-col absolute right-2 bottom-1 gap-1">
              <li>
                <Link to={project.gitLink} target="_blank">
                  <i class="fa-brands fa-github  text-[1.5rem]" />
                </Link>
              </li>
              <li>
                <Link to={project.liveLink} target="_blank">
                  <i class="fa-regular fa-face-rolling-eyes  text-[1.5rem]"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

export default Projects;

