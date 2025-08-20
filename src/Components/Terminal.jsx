import React, { useState, useEffect, useRef } from 'react';
import { Github, FileText, Link, } from 'lucide-react';

const Terminal = () => {
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
        <p className="text-prompt-text">ls - Lists available details.</p>
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
    cat: (arg = "") => {
      if (arg === "resume.txt") {
        return (
          <>
            <p className="text-prompt-text">user@system:~$</p>
            <p className="text-slate-200 flex items-center space-x-2">
              <FileText /> Retrieving resume...
            </p>
            <p>
              <a
                href="/docs/Jeet-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-prompt-text"
              >
                Click here to view my resume.
              </a>
            </p>
          </>
        );
      }
      return (
        <span className="text-red-400">
          Usage: <span className="text-prompt-text">cat resume.txt</span>
        </span>
      );
    },
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
  // useEffect(() => {
  //  const heading = document.getElementById('typing-heading');
  // const originalText = heading.textContent;
  // heading.textContent = '';
  //   let i = 0;
  //   const typeSpeed = 50;
  //   function typeWriter() {
  //     if (i < originalText.length) {
  //       heading.textContent += originalText.charAt(i);
  //       i++;
  //       setTimeout(typeWriter, typeSpeed);
  //     }
  //   }
  //   typeWriter();
  // }, []);

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
    <div className="w-full text-primary-color font-fira-code overflow-x-hidden">
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

      <main className="pt-20">


        <section id="terminal" className="mx-auto p-4 md:p-12  border-2 border-primary-color bg-card-bg shadow-lg rounded-md terminal-glow max-w-5xl">
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

      </main>


    </div>
  );
};
export default Terminal;


