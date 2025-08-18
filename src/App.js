// // import { Link } from "react-router-dom";
// // import Button from "./Components/Button";
// import "./App.css";
// import './script.js';
// // import Projects from "./Components/Projects";
// // import Skills from "./Components/Skills";
// // import Experience from "./Components/Experience";

// function App() {
//   return (
//     // <div className="App text-[#1e1e1e] bg-white">
//     //   <header>
//     //     <div className="container mx-auto max-[520px]:px-2">
//     //       <nav className="flex justify-between items-center py-5">
//     //         <div className="logo">
//     //           <div className="logoCircle bg-[url('../public/images/pp.jpg')]"></div>
//     //         </div>
//     //         <div className="quickAction flex items-center gap-6">
//     //           <h5 className="hover:text-[#7B66EE] hover:cursor-pointer">
//     //             <Link to="docs/jeet-resume.pdf" target="_blank" download>
//     //               Resume
//     //             </Link>
//     //           </h5>

//     //           <Button className="hover:bg-[#7B66EE] hover:text-white">
//     //             <Link href="mailto:contactwithjeeet@gmail.com" target="_blank">
//     //               Say Hii!
//     //             </Link>
//     //           </Button>
//     //         </div>
//     //       </nav>
//     //     </div>
//     //   </header>

//     //   <main>
//     //     <section className="heroSecionWrapper py-9">
//     //       <div className="container mx-auto max-[520px]:px-2">
//     //         <div className="heroSection flex flex-col justify-between py-5  text-center">
//     //           <div className="lightText">
//     //             <p>Hey folks!</p>
//     //           </div>

//     //           <div className="heroText">
//     //             <h2 className="text-[3.5rem] max-[520px]:text-[1.5rem] font-semibold my-[10%] max-[520px]:my-[4%]">
//     //               <span className="designer max-[1300px]:before:hidden max-[1300px]:after:hidden me-1">
//     //                 Designer,
//     //               </span>
//     //               <span className="text-[#7B66EE] dev max-[1300px]:before:hidden max-[1300px]:after:hidden me-1">
//     //                 Frontend Developer
//     //               </span>
//     //               &
//     //               <span className="explorer max-[1300px]:before:hidden max-[1300px]:after:hidden ms-1">
//     //                 Explorer
//     //               </span>
//     //             </h2>
//     //           </div>

//     //           <div className="lightText">
//     //             <p>
//     //               I have bugs, but my code doesn’t, Let's{" "}
//     //               <Link
//     //                 to="https://www.linkedin.com/in/connectwithjeet/"
//     //                 target="_blank"
//     //                 className="text-[#7B66EE]">
//     //                 connect
//     //               </Link>
//     //             </p>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </section>

//     //     <section className="aboutSectionWrapper bg-[#1e1e1e] py-9 relative">
//     //       <div className="container mx-auto max-[520px]:px-2">
//     //         <div className="aboutSection flex justify-center gap-5 items-center max-[698px]:flex-col max-[698px]:gap-5">
//     //           <div className="aboutImg w-[300px] h-[400px] bg-[#fff] rounded-lg max-[420px]:w-[150px] max-[420px]:h-[200px] bg-[url('../public/images/aboutImg.jpg')] imgBG"></div>
//     //           <div className="aboutDesc text-white w-[50%] text-end max-[698px]:text-center  max-[520px]:w-[100%]">
//     //             <h5 className="font-semibold text-3xl">Hi, this is Jeet Das</h5>
//     //             <p className="my-5  max-[420px]:text-[0.95rem]">
//     //               I'm 20 years old Frontent Developer. Currently Pursuing B.COM
//     //               from State university. I am curious about my field and
//     //               exploing the backend technologies like Express, NodeJS and
//     //               MongoDB.
//     //             </p>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </section>
//     //     <section className="skillsWrapper py-9 relative">
//     //       <div className="projectHeading text-center mb-12">
//     //         <h2 className="text-[2rem] font-semibold">My Skills</h2>
//     //       </div>
//     //       <div className="container mx-auto max-[520px]:px-2">
//     //         <div className="skillContent">
//     //           <Skills />
//     //         </div>
//     //       </div>
//     //     </section>

//     //     <section className="projectSectionWrapper py-9 relative">
//     //       <div className="PRbg"></div>
//     //       <div className="container mx-auto max-[520px]:px-2">
//     //         <div className="projectHeading text-center">
//     //           <h2 className="text-[2rem] font-semibold">Projects</h2>
//     //         </div>

//     //         <div className="porjects flex justify-between flex-wrap py-9 gap-6 max-[678px]:justify-center max-[678px]:gap-3 max-[998px]:justify-center max-[420px]:gap-5">
//     //           <Projects />
//     //         </div>
//     //       </div>
//     //     </section>

//     //     <section className="timelineWrapper pt-12 pb-28">
//     //       <Experience />
//     //     </section>
//     //   </main>

//     //   <footer className="bg-[#1e1e1e] py-10 text-white relative">
//     //     <div className="floatingDiv w-[60%] bg-[#7B66EE] px-6 absolute flex justify-around items-center py-7 rounded-lg left-1/2 -translate-x-1/2 top-[-20%] max-[998px]:w-[80%] max-[520px]:py-4 max-[520px]:top-[-14%]">
//     //       <h3 className="text-[1.4rem] me-5 max-[998px]:text-[1.1rem] max-[520px]:text-[0.75rem]">
//     //         Let's Build Together
//     //       </h3>

//     //       <Link
//     //         to="https://www.linkedin.com/in/connectwithjeet/"
//     //         target="_blank">
//     //         <Button className="border border-[#fff] hover:bg-[#1e1e1e] max-[520px]:px-2 max-[520px]:text-[0.75rem]">
//     //           Connect
//     //         </Button>
//     //       </Link>
//     //     </div>
//     //     <div className="footerContent pt-5">
//     //       <h5 className="text-center">
//     //         Thanks for visiting
//     //         <i className="fa-solid fa-heart text-[red] ms-1" />
//     //       </h5>
//     //       <div className="socailIcons flex justify-center gap-5 py-9">
//     //         <Link
//     //           to="https://www.instagram.com/jeet_o_comic?igsh=OXR1MDZ2dTNyeGgz"
//     //           target="_blank"
//     //           className="text-[1.4rem] p-3 rounded-full hover:text-[#7B66EE]">
//     //           <i class="fa-brands fa-instagram " />
//     //         </Link>
//     //         <Link
//     //           to="https://www.linkedin.com/in/connectwithjeet/"
//     //           target="_blank"
//     //           className="text-[1.4rem] p-3 rounded-full hover:text-[#7B66EE]">
//     //           <i class="fa-brands fa-linkedin-in" />
//     //         </Link>
//     //         <Link
//     //           to="https://github.com/jeetOnGit"
//     //           target="_blank"
//     //           className="text-[1.4rem] p-3 rounded-full hover:text-[#7B66EE]">
//     //           <i class="fa-brands fa-github " />
//     //         </Link>
//     //       </div>
//     //       <h5 className="text-center">
//     //         Designed & Developed by <strong>@Jeet das</strong>
//     //       </h5>
//     //     </div>
//     //   </footer>
//     // </div>
// <>
// </>
//   );
// }

// export default App;


import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, FileText, Link, } from 'lucide-react';

const App = () => {
  // --- State and Refs ---
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // --- Data and Commands ---
  const commands = {
    'help': () => (
      <>
        <p className="text-primary-color">Available commands:</p>
        <p className="text-prompt-text">whoami - Displays a short bio.</p>
        <p className="text-prompt-text">ls - Lists available commands.</p>
        <p className="text-prompt-text">tech-stack - Shows my key technologies and projects.</p>
        <p className="text-prompt-text">cat resume.txt - Opens my resume.</p>
        <p className="text-prompt-text">contact-info - Displays my contact details.</p>
        <p className="text-prompt-text">ping [social] - Opens a social media page (e.g., ping github).</p>
        <p className="text-prompt-text">echo [text] - Repeats your text back to you.</p>
        <p className="text-prompt-text">clear - Clears the terminal screen.</p>
        <p className="text-prompt-text">exit - Closes the terminal.</p>
      </>
    ),
    'whoami': () => (
      <>
        <p className="text-prompt-text">user@system:~$</p>
        <p className="text-slate-200">Frontend / MERN Stack Developer with hands-on experience in building responsive and scalable web applications. Skilled in React.js, JavaScript (ES6+), Node.js, Express.js, MongoDB, MySQL, HTML5, CSS3, SCSS, Tailwind, and jQuery. Experienced in delivering real-world projects, including event platforms, booking apps, and library management systems. Strong focus on clean code, UI/UX, and performance optimisation.</p>
      </>
    ),
    'ls': () => (
      <>
        <p className="text-primary-color">about.me</p>
        <p className="text-primary-color">projects/</p>
        <p className="text-primary-color">resume.txt</p>
        <p className="text-primary-color">contact.txt</p>
      </>
    ),
    'tech-stack': () => (
      <>
        <p className="text-prompt-text">user@system:~$</p>
        <p className="text-primary-color">Projects & Skills:</p>
        <br />
        <p><span className="text-prompt-text">Doctoro</span></p>
        <p className="text-slate-200">./exec Designed responsive UI for booking and doctor
          profiles using React.js and CSS3, ensuring seamless experience across devices</p>
        <p className="text-sm text-slate-400">Tech Stack: React, Express, NodeJs, MongoDB</p>
        <p className="flex items-center space-x-2">
          <Link className="text-prompt-text" /><a href="https://doctoro.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline text-prompt-text">Live Demo</a>
          <Github className="text-prompt-text" /><a href="https://github.com/jeetOnGit/doctoro" target="_blank" rel="noopener noreferrer" className="hover:underline text-prompt-text">GitHub</a>
        </p>
        <br />
        <p><span className="text-prompt-text">AI Chatbot</span></p>
        <p className="text-slate-200">./exec An AI powered chatbot with Gimini API</p>
        <p className="text-sm text-slate-400">Tech Stack: React, Gemini API</p>
        <p className="flex items-center space-x-2">
          <Link className="text-prompt-text" /><a href="https://chataithink.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline text-prompt-text">Live Demo</a>
          <Github className="text-prompt-text" /><a href="https://github.com/jeetOnGit/AI_chatbot" target="_blank" rel="noopener noreferrer" className="hover:underline text-prompt-text">GitHub</a>
        </p>
        <br />
        <p><span className="text-prompt-text">Custom Password</span></p>
        <p className="text-slate-200">./exec Built a customizable password generator with copy-toclipboard functionality.</p>
        <p className="text-sm text-slate-400">Tech Stack: React</p>
        <p className="flex items-center space-x-2">
          <Link className="text-prompt-text" /><a href="https://make-own-password.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline text-prompt-text">Live Demo</a>
          <Github className="text-prompt-text" /><a href="https://github.com/jeetOnGit/Password-generator" target="_blank" rel="noopener noreferrer" className="hover:underline text-prompt-text">GitHub</a>
        </p>
      </>
    ),
    'cat resume.txt': () => (
      <>
        <p className="text-prompt-text">user@system:~$</p>
        <p className="text-slate-200 flex items-center space-x-2"><FileText />Retrieving resume...</p>
        <p><a href="docs/jeet-resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline text-prompt-text">Click here to view my resume.</a></p>
      </>
    ),
    'contact-info': () => (
      <>
        <p className="text-prompt-text">user@system:~$</p>
        <p className="text-primary-color">Email: <a href="mailto:contactwithjeeet@gmail.com" className="hover:underline text-prompt-text">contactwithjeeet@gmail.com</a></p>
        <p className="text-primary-color">LinkedIn: <a href="https://www.linkedin.com/in/connectwithjeet/" target="_blank" rel="noopener noreferrer" className="hover:underline text-prompt-text">linkedin.com/in/connectwithjeet/</a></p>
        <p className="text-primary-color">GitHub: <a href="https://github.com/jeetOnGit" target="_blank" rel="noopener noreferrer" className="hover:underline text-prompt-text">github.com/jeetOnGit</a></p>
      </>
    ),
    'clear': () => {
      setHistory([]);
      return null;
    },
    'exit': () => (
      <p className="text-primary-color">Closing terminal... Goodbye!</p>
    ),
  };

  // --- Effects ---
  // Typing animation for hero heading
  useEffect(() => {
    const heading = document.getElementById('typing-heading');
    const originalText = heading.textContent;
    heading.textContent = '';
    let i = 0;
    const typeSpeed = 50;
    function typeWriter() {
      if (i < originalText.length) {
        heading.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, typeSpeed);
      }
    }
    typeWriter();
  }, []);

  // Scroll to bottom of terminal when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Handle command input
  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const fullCommand = input.trim().toLowerCase();
      const [command, ...args] = fullCommand.split(' ');
      const arg = args.join(' ');

      const newHistory = [...history, { type: 'input', value: fullCommand }];

      if (commands[command]) {
        if (command === 'clear') {
          commands[command](); // Call the clear function
        } else {
          const output = commands[command](arg);
          if (output) {
            newHistory.push({ type: 'output', value: output });
          }
          setHistory(newHistory);
        }
      } else if (command === 'ping') {
        const socials = {
          'linkedin': 'https://www.linkedin.com/in/connectwithjeet/',
          'github': 'https://github.com/jeetOnGit',
          'twitter': 'https://x.com/jeetdas709'
        };
        if (socials[arg]) {
          window.open(socials[arg], '_blank');
          newHistory.push({ type: 'output', value: <span className="text-primary-color">Pinging {arg}...</span> });
        } else {
          newHistory.push({ type: 'output', value: <span className="text-red-400">Error: Unknown social handle. Try 'linkedin', 'github', or 'twitter'.</span> });
        }
        setHistory(newHistory);
      } else if (command === 'echo') {
        newHistory.push({ type: 'output', value: <span className="text-prompt-text">{arg}</span> });
        setHistory(newHistory);
      } else {
        newHistory.push({
          type: 'output', value: (
            <>
              <span className="text-red-400">Error: Command not found.</span>
              <br />
              Type <span className="text-prompt-text">help</span> for a list of commands.
            </>
          )
        });
        setHistory(newHistory);
      }
      setInput('');
    }
  };

  // --- JSX Structure ---
  return (
    <div className="bg-bg-dark text-primary-color min-h-screen font-fira-code overflow-x-hidden">
      <style>
        {`
                .typing-effect::after {
                    content: '|';
                    display: inline-block;
                    animation: blink-caret 0.75s step-end infinite;
                }
                @keyframes blink-caret {
                    from, to { color: transparent; }
                    50% { color: #00ff00; }
                }
                .terminal-glow {
                    animation: terminal-glow 1.5s infinite alternate;
                }
                @keyframes terminal-glow {
                    from { box-shadow: 0 0 5px rgba(0, 255, 0, 0.2); }
                    to { box-shadow: 0 0 15px rgba(0, 255, 0, 0.5); }
                }
                .terminal-output::-webkit-scrollbar {
                    width: 8px;
                }
                .terminal-output::-webkit-scrollbar-track {
                    background: #1e293b;
                }
                .terminal-output::-webkit-scrollbar-thumb {
                    background-color: #00ff00;
                    border-radius: 4px;
                }
            `}
      </style>

      <header className="fixed top-0 z-50 w-full p-4 md:p-6 bg-bg-dark bg-opacity-80 backdrop-blur-sm shadow-lg">
        <nav className="container mx-auto flex justify-between items-center text-sm md:text-base">
          <span className="text-prompt-text font-bold"><span className="text-primary-color">&gt;</span> Jeet Das</span>
          <div className="space-x-4 md:space-x-8">
            <a href="#terminal" className="hover:text-primary-color transition-colors hover:scale-110">/terminal</a>
            <a href="#contact" className="hover:text-primary-color transition-colors hover:scale-110">/contact</a>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4">
          <div className="p-6 md:p-8 space-y-4">
            <h1 id="typing-heading" className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight typing-effect">
              <span className="text-primary-color">&gt;</span> Building the future, one line at a time.
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-slate-400 mt-4">
              <span className="text-prompt-text">&gt;</span> A passionate Frontend Developer working on a project always.
            </p>
            <a href="#terminal" className="inline-block px-6 py-2 text-sm md:text-base border border-primary-color text-primary-color hover:bg-primary-color hover:text-bg-dark transition-colors duration-300 rounded-md mt-6">
              <span className="text-prompt-text">$</span> start terminal
            </a>
          </div>
        </section>

        <section id="terminal" className="container mx-auto p-4 md:p-12 mb-20 border-2 border-primary-color bg-card-bg shadow-lg rounded-md terminal-glow max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            <span className="text-primary-color">&gt;</span> console.log("Hello, World!");
          </h2>
          <div ref={terminalRef} className="terminal-output min-h-[200px] max-h-[400px] overflow-y-auto border-b border-primary-color pb-4 mb-4">
            <p className="text-primary-color">Welcome to my interactive portfolio. Type <span className="text-prompt-text">help</span> to get started.</p>
            <br />
            {history.map((entry, index) => (
              <React.Fragment key={index}>
                {entry.type === 'input' ? (
                  <p><span className="text-primary-color font-bold">C:\Users\You&gt;</span> {entry.value}</p>
                ) : (
                  <p>{entry.value}</p>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="terminal-input-container">
            <span className="text-primary-color font-bold mr-2">C:\Users\You&gt;</span>
            <input
              ref={inputRef}
              type="text"
              id="terminal-input"
              className="terminal-input bg-transparent  focus:outline-none"
              placeholder="Type here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoFocus
            />
          </div>
        </section>

        <section id="contact" className="container mx-auto p-4 md:p-12 mb-20 border-2 border-primary-color bg-card-bg shadow-lg rounded-md terminal-glow max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            <span className="text-primary-color">&gt;</span> Jeet contact.txt
          </h2>
          <div className="space-y-4">
            <p className="text-slate-200">
              <span className="text-prompt-text">user@system:~$</span> Interested in a new project? Let's connect!
            </p>
            <p className="text-prompt-text text-lg md:text-xl">
              <span className="text-primary-color">&gt;</span> <a href="mailto:contactwithjeeet@gmail.com" className="hover:underline hover:text-primary-color">contactwithjeeet@gmail.com</a>
            </p>
            <div className="flex space-x-6 mt-6">
              <a href="https://www.linkedin.com/in/connectwithjeet/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:translate-y-[-5px] hover:scale-110">
                <Linkedin className="text-2xl" />
              </a>
              <a href="https://github.com/jeetOnGit" target="_blank" rel="noopener noreferrer" className="transition-transform hover:translate-y-[-5px] hover:scale-110">
                <Github className="text-2xl" />
              </a>
              <a href="https://x.com/jeetdas709" target="_blank" rel="noopener noreferrer" className="transition-transform hover:translate-y-[-5px] hover:scale-110">
                <Twitter className="text-2xl" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 border-t border-slate-700 text-slate-400 text-sm">
        <p><span className="text-primary-color">&gt;</span> System: Portfolio executed successfully. (c) {new Date().getFullYear()} Your Name. </p>
      </footer>
    </div>
  );
};

export default App;
