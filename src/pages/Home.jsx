// import { Link } from 'react-router-dom'
import React, { useLayoutEffect } from 'react'
import { motion } from 'framer-motion';
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
                    FullStack Developer
                  </span>
                  &
                  <span className="explorer max-[1300px]:before:hidden max-[1300px]:after:hidden ms-1">
                    Learner
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
                    className="text-[#7B66EE] ps-1">
                    connect
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>


    <section id="about" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-[0.03] pointer-events-none">
         <svg width="400" height="400" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" fill="#7B66EE" />
         </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto lg:mx-0 w-full max-w-[400px] lg:max-w-none"
          >
            {/* Purple Offset Background */}
            <div className="absolute top-4 left-4 w-full h-full rounded-2xl bg-[#7B66EE] z-0 hidden md:block"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 w-full h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
               <div 
                 className="w-full h-full bg-gray-200  bg-cover bg-center transition-transform duration-700 hover:scale-105"
                 role="img" 
                 style={{ backgroundImage: "url('/images/aboutImg.jpg')" }}
                 aria-label="Jeet portrait"
               ></div>
            </div>

            {/* Floating Experience Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block"
            >
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#7B66EE]/10 rounded-full flex items-center justify-center text-[#7B66EE]">
                    {/* Code Icon */}
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase">Focus</p>
                    <p className="text-lg font-bold text-gray-900">Development</p>
                  </div>
               </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-[#7B66EE] uppercase mb-3">
              About Me
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
             I'm <span className="text-[#7B66EE]">Jeet</span>. I bridge the gap between <br className="hidden md:block"/> robust logic and beautiful design.
            </h3>
            
            {/* Description: Fullstack Focus */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I am a <span className="font-semibold text-gray-900">Fullstack Developer</span> who believes that a great application looks good <i>and</i> scales well. My expertise spans the entire development lifecycle—from architecting database schemas to crafting pixel-perfect user interfaces.
            </p>
            
            <p className="text-gray-600 mb-8">
              Whether I'm optimizing backend API performance or refining frontend animations, I focus on delivering seamless, high-performance digital experiences that solve real problems.
            </p>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-2 gap-6 mb-8 border-t border-gray-100 pt-8">
              <div>
                  {/* Counts your Portfolio, Linktree clone, etc. */}
                  <h4 className="text-2xl font-bold text-gray-900">5+</h4> 
                  <p className="text-sm text-gray-500">Major Projects</p>
               </div>
               <div>
                  {/* Counts React, Node, SQL, Tailwind, Git, Figma, etc. */}
                  <h4 className="text-2xl font-bold text-gray-900">15+</h4> 
                  <p className="text-sm text-gray-500">Technologies Known</p>
               </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-7 py-3 rounded-full bg-[#7B66EE] text-white font-medium hover:bg-[#6854d9] hover:shadow-lg hover:shadow-[#7B66EE]/30 transition-all transform hover:-translate-y-0.5"
              >
                View Projects
              </a>
              
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-7 py-3 rounded-full border border-gray-200 text-gray-700 font-medium hover:border-[#7B66EE] hover:text-[#7B66EE] hover:bg-gray-50 transition-all"
              >
                Contact Me
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>



        <section className="skillsWrapper py-9 relative">
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