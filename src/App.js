import { Link } from "react-router-dom";
import Button from "./Components/Button";
import "./App.css";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
// import CircleInfographic from "./Components/Skills";

function App() {
  return (
    <div className="App text-[#1e1e1e]">
      <header>
        <div className="container mx-auto max-[520px]:px-2">
          <nav className="flex justify-between items-center py-5">
            <div className="logo">
              <div className="logoCircle bg-[url('../public/images/pp.jpg')]"></div>
            </div>
            <div className="quickAction flex items-center gap-6">
              <h5 className="hover:text-[#7B66EE] hover:cursor-pointer">
                <Link to="docs/jeet-resume.pdf" target="_blank" download>
                  Resume
                </Link>
              </h5>

              <Button className="hover:bg-[#7B66EE] hover:text-white">
                <Link to="mailto:jeetdas.in@gmail.com" target="_blank">
                  Say Hii!
                </Link>
              </Button>
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
                  <span className="designer max-[2000px]:before:hidden max-[2000px]:after:hidden">Designer,</span> <span className="text-[#7B66EE] dev max-[2000px]:before:hidden max-[2000px]:after:hidden">Frontend Developer</span> & <span className="explorer max-[2000px]:before:hidden max-[2000px]:after:hidden">Exploler</span>
                </h2>
                {/* <img src="images/hero.png" alt="" /> */}
              </div>

              <div className="lightText">
                <p>
                  For <span className="text-[#7B66EE]">Passionate</span> projects,
                  Let's{" "}
                  <Link
                    to="https://www.linkedin.com/in/connectwithjeet/"
                    target="_blank"
                    className="text-[#7B66EE]"
                  >
                    connect
                  </Link>
                  {/* <i class="fa-solid fa-right-long" /> */}
                </p>
              </div>
            </div>
          </div>
        </section>
        
          

        <section className="aboutSectionWrapper bg-[#1e1e1e] py-9">
          <div className="container mx-auto max-[520px]:px-2">
            <div className="aboutSection flex justify-between items-center max-[698px]:flex-col  max-[698px]:gap-5">
              <div className="aboutImg w-[300px] h-[400px] bg-[#fff] rounded-lg max-[420px]:w-[150px] max-[420px]:h-[200px] bg-[url('../public/images/aboutImg.jpg')]"></div>
              <div className="aboutDesc text-white w-[50%] text-end max-[698px]:text-center  max-[420px]:w-[80%]">
                <h5 className="font-semibold">Hi, this is Jeet Das</h5>
                <p className="my-5  max-[420px]:text-[0.75rem]">
                  Since beginning my journey as a freelance designer 12 years
                  ago, I've done remote work for agencies, consulted for
                  startups, and collaborated with talented people to create
                  digital products.
                </p>
                <Button className="bg-[#7B66EE] hover:bg-[#1e1e1e]">
                  <Link
                    to="https://www.linkedin.com/in/connectwithjeet/"
                    target="_blank"
                  >
                    Connect
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="skillsWrapper py-9 relative">
          <div className="projectHeading text-center mb-12">
            <h2 className="text-[2rem] font-semibold">Skills</h2>
          </div>
          <div className="container mx-auto max-[520px]:px-2">
            <Skills />

            {/* <div className="skills grid grid-cols-2 gap-x-[8.4rem] gap-y-[0.85rem] min-[1200px]:gap-x-[13.4rem] w-48 rotate-45 mx-auto absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 max-[1000px]:rotate-0 ">
              <div className="skillBox w-[200px] h-[200px] bg-[#7B66EE] rotate-anti-45 max-[1200px]:w-[150px] max-[1200px]:h-[150px] max-[678px]:w-[100px] max-[678px]:h-[100px] relative max-[1000px]:w-[10px]">
                <ul className="absolute rotate-[315deg] bottom-[125%] right-[30%] max-[1000px]:rotate-0 max-[1000px]:left-4 max-[1000px]:top-0">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>

              <div className="skillBox w-[200px] h-[200px] bg-[#1e1e1e] rotate-anti-45 max-[1200px]:w-[150px] max-[1200px]:h-[150px] max-[678px]:w-[100px] max-[678px]:h-[100px] relative max-[1000px]:w-[10px]">
                <ul className="absolute rotate-[315deg] bottom-[65%] right-[-87%] max-[1000px]:rotate-0 max-[1000px]:left-4 max-[1000px]:top-0">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>

              <div className="skillBox w-[200px] h-[200px] bg-[#1e1e1e] rotate-anti-45 max-[1200px]:w-[150px] max-[1200px]:h-[150px] max-[678px]:w-[100px] max-[678px]:h-[100px] relative max-[1000px]:w-[10px]">
                <ul className="absolute rotate-[315deg] top-[39%] right-[142%] max-[1000px]:rotate-0 max-[1000px]:left-4 max-[1000px]:top-0">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>

              <div className="skillBox w-[200px] h-[200px] bg-[#7B66EE] rotate-anti-45 max-[1200px]:w-[150px] max-[1200px]:h-[150px] max-[678px]:w-[100px] max-[678px]:h-[100px] relative max-[1000px]:w-[10px]">
                <ul className="absolute rotate-[315deg] bottom-[-138%] right-[77%] max-[1000px]:rotate-0 max-[1000px]:left-4 max-[1000px]:top-0">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
              </div>

            </div>  */}
          </div>
        </section>

        <section className="projectSectionWrapper py-9">
          <div className="container mx-auto max-[520px]:px-2">
            <div className="projectHeading text-center">
              <h2 className="text-[2rem] font-semibold">Projects</h2>
            </div>

            <div className="porjects flex justify-between flex-wrap py-9 gap-16 max-[678px]:justify-center">
              <Projects />
            </div>
          </div>
        </section>

        <section className="timelineWrapper pt-12 pb-28">
          <div className="container mx-auto max-[520px]:px-2">
            <div className="experienceHeading text-center mb-12">
              <h2 className="text-[2rem] font-semibold">Experience</h2>
            </div>
            <div className="timeline relative">
              <div className="timelineBar absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 w-[1px] bg-[#1e1e1e] h-full max-[520px]:left-0"></div>
              <div className="timelineContent flex flex-col gap-6 w-full max-[520px]:ms-2">
                <div className="experienceBox w-[40%] max-[520px]:w-full">
                  <h5 className="text-[1.25rem] font-semibold">
                    Graphic Designer
                  </h5>
                  <p className="italic text-[0.75rem] py-2">
                    Cherry Media | Jul 2023 – Jul 2024
                  </p>
                  <p className="">
                    I developed portfolio websites using HTML, CSS, and React.
                    Created and edited video content for YouTube, enhancing
                    engagement. Designed social media graphics, improving
                    brand presence.
                  </p>
                </div>
                <div className="experienceBox w-[40%] text-right self-end max-[520px]:w-full max-[520px]:text-start">
                  <h5 className="text-[1.25rem] font-semibold">
                    Demo Designation
                  </h5>
                  <p className="italic text-[0.75rem] py-2">
                    Company name | Time period
                  </p>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati cumque at quas nulla quasi, optio culpa vitae?
                    Corporis, laboriosam necessitatibus?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1e1e1e] py-10 text-white relative">
        <div className="floatingDiv w-[60%] bg-[#7B66EE] px-6 absolute flex justify-around items-center py-7 rounded-lg left-1/2 -translate-x-1/2 top-[-20%] max-[520px]:w-[80%] max-[520px]:py-4 max-[520px]:top-[-14%]">
          <h3 className="text-[1.4rem] me-5 max-[520px]:text-[0.75rem]">
            Want to discuss for next project?
          </h3>
          <Button className="border border-[#fff] hover:bg-[#1e1e1e] max-[520px]:px-2 max-[520px]:text-[0.75rem]">
            <Link
              to="https://www.linkedin.com/in/connectwithjeet/"
              target="_blank"
            >
              Connect
            </Link>
          </Button>
        </div>
        <div className="footerContent pt-5">
          <h5 className="text-center">
            Thanks for watching
            <i className="fa-solid fa-face-grin-hearts text-[#7B66EE]" />
          </h5>
          <div className="socailIcons flex justify-center gap-5 py-9">
            <Link
              to="https://www.instagram.com/jeetdas709/"
              target="_blank"
              className="text-[1.4rem] p-3 rounded-full hover:text-[#7B66EE]"
            >
              <i class="fa-brands fa-instagram " />
            </Link>
            <Link
              to="https://www.linkedin.com/in/connectwithjeet/"
              target="_blank"
              className="text-[1.4rem] p-3 rounded-full hover:text-[#7B66EE]"
            >
              <i class="fa-brands fa-linkedin-in" />
            </Link>
            <Link
              to="https://github.com/jeetOnGit"
              target="_blank"
              className="text-[1.4rem] p-3 rounded-full hover:text-[#7B66EE]"
            >
              <i class="fa-brands fa-github " />
            </Link>
          </div>
          <h5 className="text-center">Design & Developed by @Jeet das</h5>
        </div>
      </footer>
    </div>
  );
}

export default App;
