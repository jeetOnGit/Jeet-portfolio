document.addEventListener("DOMContentLoaded", () => {
  // Typing Effect for Hero Heading
  const heading = document.getElementById("typing-heading");
  const originalText = heading.textContent;
  heading.textContent = "";
  let i = 0;
  const typeSpeed = 50; // Speed in milliseconds
  function typeWriter() {
    if (i < originalText.length) {
      heading.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, typeSpeed);
    }
  }
  typeWriter();

  // Command-Line Interface Logic
  const terminalInput = document.getElementById("terminal-input");
  const terminalOutput = document.getElementById("terminal-output");
  const prompt =
    '<span class="text-primary-color font-bold">C:\\Users\\You></span>';

  const commands = {
    help: `
                    <span class="text-primary-color">Available commands:</span>
                    <span class="text-prompt-text">whoami</span> - Displays a short bio.
                    <span class="text-prompt-text">ls</span> - Lists all available commands.
                    <span class="text-prompt-text">tech-stack</span> - Shows my key technologies and projects.
                    <span class="text-prompt-text">cat resume.txt</span> - Opens my resume.
                    <span class="text-prompt-text">contact-info</span> - Displays my contact details.
                    <span class="text-prompt-text">ping [social]</span> - Opens a social media page (e.g., ping github).
                    <span class="text-prompt-text">echo [text]</span> - Repeats your text back to you.
                    <span class="text-prompt-text">clear</span> - Clears the terminal screen.
                    <span class="text-prompt-text">exit</span> - Closes the terminal.
                `,
    whoami: `
                    <p class="text-prompt-text">user@system:~$</p>
                    <p class="text-slate-200">I am a recent graduate of <span class="text-primary-color">[Your University]</span> with a focus on creating engaging and high-performance web applications. My passion lies in frontend development, but I have a strong foundation in full-stack principles and enjoy bringing projects to life from concept to deployment.</p>
                    <p class="text-slate-200">My primary tools are React, Node.js, and a solid understanding of data structures and algorithms. I am eager to apply my skills to real-world challenges and contribute to a forward-thinking team.</p>
                `,
    ls: `
                    <p class="text-primary-color">about.me</p>
                    <p class="text-primary-color">projects/</p>
                    <p class="text-primary-color">resume.txt</p>
                    <p class="text-primary-color">contact.txt</p>
                `,
    "tech-stack": `
                    <p class="text-prompt-text">user@system:~$</p>
                    <p class="text-primary-color">Projects & Skills:</p>
                    <br>
                    <p><span class="text-prompt-text">[Project 1 Title]</span></p>
                    <p class="text-slate-200">./exec [A powerful full-stack project description. Mention the problem it solves and the tech you used.]</p>
                    <p class="text-sm text-slate-400">Tech Stack: React, Node.js, MongoDB</p>
                    <p><a href="[Live Demo URL]" target="_blank" class="hover:underline text-prompt-text">Live Demo</a> | <a href="[GitHub Repo URL]" target="_blank" class="hover:underline text-prompt-text">GitHub</a></p>
                    <br>
                    <p><span class="text-prompt-text">[Project 2 Title]</span></p>
                    <p class="text-slate-200">./exec [A description of your second full-stack project.]</p>
                    <p class="text-sm text-slate-400">Tech Stack: Vue, Express, PostgreSQL</p>
                    <p><a href="[Live Demo URL]" target="_blank" class="hover:underline text-prompt-text">Live Demo</a> | <a href="[GitHub Repo URL]" target="_blank" class="hover:underline text-prompt-text">GitHub</a></p>
                    <br>
                    <p><span class="text-prompt-text">[Project 3 Title]</span></p>
                    <p class="text-slate-200">./exec [A description of your third full-stack project.]</p>
                    <p class="text-sm text-slate-400">Tech Stack: Next.js, Tailwind CSS, AWS Amplify</p>
                    <p><a href="[Live Demo URL]" target="_blank" class="hover:underline text-prompt-text">Live Demo</a> | <a href="[GitHub Repo URL]" target="_blank" class="hover:underline text-prompt-text">GitHub</a></p>
                `,
    "cat resume.txt": `
                    <p class="text-prompt-text">user@system:~$</p>
                    <p class="text-slate-200">Retrieving resume...</p>
                    <p><a href="[Link to your resume PDF]" target="_blank" class="hover:underline text-prompt-text">Click here to view my resume.</a></p>
                `,
    "contact-info": `
                    <p class="text-prompt-text">user@system:~$</p>
                    <p class="text-primary-color">Email: <a href="mailto:[your_email@example.com]" class="hover:underline text-prompt-text">[your_email@example.com]</a></p>
                    <p class="text-primary-color">LinkedIn: <a href="[LinkedIn URL]" target="_blank" class="hover:underline text-prompt-text">linkedin.com/in/[your-profile]</a></p>
                    <p class="text-primary-color">GitHub: <a href="[GitHub URL]" target="_blank" class="hover:underline text-prompt-text">github.com/[your-profile]</a></p>
                `,
    clear: "",
    exit: `
                    <p class="text-primary-color">Closing terminal... Goodbye!</p>
                `,
  };

  // Add a dynamic command for 'ping'
  commands["ping"] = (arg) => {
    const socials = {
      linkedin: "[LinkedIn URL]",
      github: "[GitHub URL]",
      twitter: "[Twitter URL]",
    };
    if (socials[arg]) {
      window.open(socials[arg], "_blank");
      return `<span class="text-primary-color">Pinging ${arg}...</span>`;
    } else {
      return `<span class="text-red-400">Error: Unknown social handle. Try 'linkedin', 'github', or 'twitter'.</span>`;
    }
  };

  // Add a dynamic command for 'echo'
  commands["echo"] = (arg) => {
    return `<span class="text-prompt-text">${arg}</span>`;
  };

  function printToTerminal(text) {
    terminalOutput.innerHTML += text;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const fullCommand = terminalInput.value.trim().toLowerCase();
      const [command, ...args] = fullCommand.split(" ");
      const arg = args.join(" ");

      printToTerminal(`
                        ${prompt} ${fullCommand}
                    `);
      terminalInput.value = "";

      let commandOutput;
      if (command === "clear") {
        terminalOutput.textContent = "";
        return;
      } else if (commands[command] && typeof commands[command] === "function") {
        commandOutput = commands[command](arg);
      } else if (commands[command]) {
        commandOutput = commands[command];
      } else {
        commandOutput = `<span class="text-red-400">Error: Command not found.</span>
                        <br>
                        Type <span class="text-prompt-text">help</span> for a list of commands.`;
      }

      printToTerminal(`
                        ${commandOutput}
                        <br>
                    `);
    }
  });

  // Set current year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});
