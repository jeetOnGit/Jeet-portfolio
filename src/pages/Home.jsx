// import { Link } from 'react-router-dom'
import React, { useLayoutEffect } from 'react'
// import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Experience from "../Components/Experience";
// import Button from "../Components/Button";
import Terminal from '../Components/Terminal'

const Home = () => {
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App text-[#1e1e1e] bg-white">
      <header>
        <div className="container mx-auto max-[520px]:px-2">
          <nav className="flex justify-between items-center py-5">
            <div className="logo">
              <div className="logoCircle bg-[url('../public/images/pp.jpg')]"></div>
            </div>
            <div className="quickAction flex items-center gap-6">
              <h5 className="hover:text-[#7B66EE] hover:cursor-pointer">
                <a href="#projects" onClick={() =>
                  document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
                }>
                  Terminal
                </a>
              </h5>

              <h5 className="hover:text-[#7B66EE] hover:cursor-pointer">
                <a href="docs/Jeet-resume.pdf" target="_blank" download>
                  Resume
                </a>
              </h5>

              {/* <Button className="hover:bg-[#7B66EE] hover:text-white">
                <Link to="mailto:contactwithjeeet@gmail.com" >
                  Say Hii!
                </Link>
              </Button> */}

              <a
                href="https://www.linkedin.com/in/connectwithjeet/" className="hover:bg-[#7B66EE] hover:text-white py-2 px-6 border rounded-full" >
                Say Hii!
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="heroSecionWrapper py-9">
          <div className="container mx-auto max-[520px]:px-2">
            <div className="heroSection flex flex-col justify-between py-5  text-center">
              <div className="lightText">
                <p>Hey folks!</p>
              </div>

              <div className="heroText">
                <h2 className="text-[3.5rem] max-[520px]:text-[1.5rem] font-semibold my-[10%] max-[520px]:my-[4%]">
                  <span className="designer max-[1300px]:before:hidden max-[1300px]:after:hidden me-1">
                    Designer,
                  </span>
                  <span className="text-[#7B66EE] dev max-[1300px]:before:hidden max-[1300px]:after:hidden me-1">
                    Frontend Developer
                  </span>
                  &
                  <span className="explorer max-[1300px]:before:hidden max-[1300px]:after:hidden ms-1">
                    Explorer
                  </span>
                </h2>
              </div>

              <div className="lightText">
                <p>
                  I have bugs, but my code doesn’t, Let's
                  <a
                    href="https://www.linkedin.com/in/connectwithjeet/"
                    target="_blank"
                    rel='noreferrer'
                    className="text-[#7B66EE]">
                    connect
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="aboutSectionWrapper dark:bg-gray-900 py-9 relative">
          <div className="container mx-auto max-[698px]:px-2">
            <div className="aboutSection w-full grid grid-cols-2 items-center max-[698px]:grid-cols-1 max-[698px]:gap-5">
              <div className="aboutImg w-[300px] h-[400px] bg-[#fff] mx-auto rounded-lg max-[420px]:w-[150px] max-[420px]:h-[200px] bg-[url('../public/images/aboutImg.jpg')] imgBG object-cover transition-transform duration-500 hover:scale-105"></div>
              <div className=''>
                <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                  About Me
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Hi, I'm <span className="font-semibold text-indigo-500">Jeet</span>, a passionate
                  <span className="font-semibold"> Frontend Developer</span> with a focus on creating clean,
                  modern, and user-friendly web applications. I enjoy transforming ideas into
                  interactive digital experiences.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                 I’m constantly learning
                  new technologies and improving my design sense to deliver polished,
                  performant solutions.
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href="#projects"
                    className="px-5 py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition"
                    onClick={() =>
                      document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    onClick={() =>
                      document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                    }
                    className="px-5 py-2 rounded-xl border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section className="skillsWrapper py-9 relative">
          <div className="projectHeading text-center mb-12">
            <h2 className="text-[2rem] font-semibold">My Skills</h2>
          </div>
          <div className="container mx-auto max-[520px]:px-2">
            <div className="skillContent">
              <Skills />
            </div>
          </div>
        </section>

        <section id='projects' className="projectSectionWrapper relative">
          {/* <div className="PRbg"></div>  */}
          <div className="container mx-auto max-[520px]:px-2">
            <div className="projectHeading text-center">
              <h2 className="text-[2rem] font-semibold">Projects</h2>
            </div>

            <div className="porjects flex justify-between flex-wrap  gap-6 max-[678px]:justify-center max-[678px]:gap-3 max-[998px]:justify-center max-[420px]:gap-5">

              <Terminal />
            </div>
          </div>
        </section>

        <section className="timelineWrapper pt-12 pb-28">
          <Experience />
        </section>
      </main>

      <footer id="contact" className="dark:bg-gray-900 py-10 text-white relative">
        <div className="floatingDiv w-[60%] bg-[#7B66EE] px-6 absolute flex justify-around items-center py-7 rounded-lg left-1/2 -translate-x-1/2 top-[-20%] max-[998px]:w-[80%] max-[520px]:py-4 max-[520px]:top-[-14%]">
          <h3 className="text-[1.4rem] me-5 max-[998px]:text-[1.1rem] max-[520px]:text-[0.75rem]">
            Let's Build Together
          </h3>

          <a
            className="border py-2 px-5 rounded-full border-[#fff] hover:bg-[#1e1e1e] max-[520px]:px-2 max-[520px]:text-[0.75rem]"
            href="https://www.linkedin.com/in/connectwithjeet/"
            target="_blank" rel='noreferrer'>

            Connect

          </a>
        </div>
        <div className="footerContent pt-5">
          <h5 className="text-center">
            Thanks for visiting
            <i className="fa-solid fa-heart text-[red] ms-1" />
          </h5>
          <div className="socailIcons flex justify-center gap-5 py-9">
            <a
              href="https://www.instagram.com/jeet_o_comic?igsh=OXR1MDZ2dTNyeGgz"
              target="_blank"
              rel='noreferrer'
              className="text-[1.4rem] p-3 rounded-full hover:text-[#7B66EE]">
              <i className="fa-brands fa-instagram " />
            </a>
            <a
              href="https://www.linkedin.com/in/connectwithjeet/"
              target="_blank"
              rel='noreferrer'
              className="text-[1.4rem] p-3 rounded-full hover:text-[#7B66EE]">
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a
              href="https://github.com/jeetOnGit"
              target="_blank"
              rel='noreferrer'
              className="text-[1.4rem] p-3 rounded-full hover:text-[#7B66EE]">
              <i className="fa-brands fa-github " />
            </a>
          </div>
          <h5 className="text-center">
            Designed & Developed by <strong>@Jeet das</strong>
          </h5>
        </div>
      </footer>
    </div>
  )
}

export default Home