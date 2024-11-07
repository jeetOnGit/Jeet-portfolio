import { Link } from "react-router-dom";
import "./App.css";
import Button from "./Components/Button";

function App() {
  return (
    <div className="App text-[#1e1e1e]">
      <header>
        <div className="container mx-auto">
          <nav className="flex justify-between items-center py-5">
            <div className="logo">
              <div className="logoCircle"></div>
            </div>
            <div className="quickAction flex items-center gap-6">
              <h5 className="hover:text-[#7B66EE] hover:cursor-pointer">
                Resume
              </h5>

              <Button className='hover:bg-[#7B66EE] hover:text-white'>Say Hii!</Button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <div className="container mx-auto">
          <section className="heroSection flex flex-col justify-between py-5 h-[480px] text-center">
            <div className="lightText">
              <p>Hey folks!</p>
            </div>

            <div className="heroText py-5">
              {/* <h2 className="text-[3.5rem] font-semibold">
                <span className="designer">Designer,</span> <span className="text-[#7B66EE] dev">Frontend Developer</span> & Exploler
              </h2> */}
              <img src="images/hero.png" alt="" />
            </div>

            <div className="lightText pt-6">
              <p>
                For <span className="text-[#7B66EE]">Passionate</span> projects,
                Let's <Link className="text-[#7B66EE]">connect</Link>
                <i class="fa-solid fa-right-long" />
              </p>
            </div>
          </section>
        </div>

        <section className="aboutSectionWrapper bg-[#1e1e1e] py-9">
          <div className="container mx-auto">
            <div className="aboutSection flex justify-between items-center max-[698px]:flex-col  max-[698px]:gap-5">
              <div className="aboutImg w-[300px] h-[400px] bg-[#fff] rounded-lg max-[420px]:w-[150px] max-[420px]:h-[200px]"></div>
                <div className="aboutDesc text-white w-[50%] text-end max-[698px]:text-center  max-[420px]:w-[80%]">
                  <h5 className="font-semibold">Hi, this is Jeet Das</h5>
                  <p className="my-5  max-[420px]:text-[0.75rem]">
                    Since beginning my journey as a freelance designer 12 years
                    ago, I've done remote work for agencies, consulted for
                    startups, and collaborated with talented people to create
                    digital products.
                  </p>
                  <Button className='bg-[#7B66EE] hover:bg-[#1e1e1e]'>Connect</Button>
                </div>
            </div>
          </div>
        </section>

        <section className="skillsWrapper py-12 relative">
          <div className="container mx-auto py-[20%]">
            <div className="skills grid grid-cols-2 gap-x-[13.4rem] gap-y-[0.85rem] w-48 rotate-45 mx-auto absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 max-[1000px]:rotate-0 ">
              <div className="skillBox w-[200px] h-[200px] bg-[#7B66EE] rotate-anti-45 max-[1000px]:w-[100px] max-[1000px]:h-[100px]"></div>
              <div className="skillBox w-[200px] h-[200px] bg-[#1e1e1e] rotate-anti-45 max-[1000px]:w-[100px] max-[1000px]:h-[100px]"></div>
              <div className="skillBox w-[200px] h-[200px] bg-[#1e1e1e] rotate-anti-45 max-[1000px]:w-[100px] max-[1000px]:h-[100px]"></div>
              <div className="skillBox w-[200px] h-[200px] bg-[#7B66EE] rotate-anti-45 max-[1000px]:w-[100px] max-[1000px]:h-[100px]"></div>
            </div> 
          </div>
        </section>


        <section className="projectSectionWrapper py-12">
          <div className="container mx-auto">
            <div className="projectHeading text-center">
              <h2>Projects</h2>
            </div>

            <div className="porjects flex justify-between">
              <div className="project w-[400px] h-[200px] bg-[#fcf6ad]"></div>
              <div className="project w-[400px] h-[200px] bg-[#fcf6ad]"></div>
            </div>
            <Button className="text-center">See More...</Button>
          </div>
        </section>



      </main>

      <footer></footer>
    </div>
  );
}

export default App;
