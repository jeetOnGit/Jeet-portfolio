// import React from "react";
// import './skill.css'
// function Skills() {
//   const skillsArr = [
//     "SCSS",
//     "Bootstrap",
//     "Tailwind",
//     "React",
//     "Jquery",
//     "Git",
//     "Github",
//     "MySql",
//     "Prisma",
//     "MongoDB",
//     "Express",
//     "NodeJS",
//     "Figma",
//     "Wordpress",
//     "NextJs",
//     "Photoshop",
//   ];
//   return (
//     <>
    
//       <div className="overflow-hidden flex strip">
//         <ul className="flex justify-between list">
//           {skillsArr.map((skill, index) => (
//             <li key={index} className="skill py-1 px-4 bg-[#7B66EE] text-[#fff] rounded">
//               {skill}
//             </li>
//           ))}
//         </ul>

//         <ul className="flex justify-between list" aria-hidden='true'>
//           {skillsArr.map((skill, index) => (
//             <li key={index} className="skill py-1 px-4 bg-[#7B66EE] text-[#fff] rounded">
//               {skill}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="overflow-hidden flex strip mt-5">
//         <ul className="flex justify-between backList">
//           {skillsArr.map((skill, index) => (
//             <li key={index} className="skill py-1 px-4 bg-[#7B66EE] text-[#fff] rounded">
//               {skill}
//             </li>
//           ))}
//         </ul>

//         <ul className="flex justify-between backList" aria-hidden='true'>
//           {skillsArr.map((skill, index) => (
//             <li key={index} className="skill py-1 px-4 bg-[#7B66EE] text-[#fff] rounded">
//               {skill}
//             </li>
//           ))}
//         </ul>
//       </div>
      
//     </>
//   );
// }

// export default Skills;

import React from 'react';
import { motion } from 'framer-motion';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card loading
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 }, // Start 50px lower and transparent
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12, // Makes it slightly bouncy
    },
  },
};

export default function CreativeSkillsAnimated() {
  return (
    <section className="py-6 px-4 bg-white flex justify-center overflow-hidden">
      <div className="max-w-5xl w-full">
        
        {/* Header - Fade Down */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-6 text-center mx-auto"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            My Creative <span className="text-[#7B66EE]">Arsenal</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            A versatile stack ranging from modern React ecosystems to robust backend solutions.
          </p>
        </motion.div>

        {/* BENTO GRID LAYOUT - With Staggered Entrance */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of grid is visible
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 h-auto md:h-[600px]"
        >
          
          {/* CARD 1: FRONTEND (The Core) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02 }} // Smooth Framer hover scale
            className="group md:col-span-2 md:row-span-1 bg-gray-50/80 backdrop-blur-sm rounded-[2rem] p-8 border border-gray-100 hover:border-[#7B66EE]/50 transition-colors duration-300 relative overflow-hidden hover:shadow-xl hover:shadow-[#7B66EE]/10"
          >
            <div className="relative z-10">
              <motion.div 
                 whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                 className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-[#7B66EE]"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900">Frontend Engineering</h3>
              <p className="text-gray-500 mt-2 mb-6">Building responsive, modern interfaces.</p>
              
              <div className="flex flex-wrap gap-2">
                {/* Your Frontend Skills */}
                {["Next.js", "React", "Tailwind", "SCSS", "Bootstrap", "jQuery"].map((tech, index) => (
                  <motion.span 
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 + 0.5 }} // Stagger the tags appearing
                    className="bg-white px-4 py-1.5 rounded-full text-sm font-medium text-gray-600 shadow-sm border border-gray-100 group-hover:text-[#7B66EE] group-hover:border-[#7B66EE]/30 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Animated Code Background */}
            <div className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity">
               <pre className="text-xs leading-4 font-mono font-bold text-[#7B66EE]">
                 {`<Component \n  animate={{ \n    creative: true \n  }} \n/>`}
               </pre>
            </div>
          </motion.div>

          {/* CARD 2: DESIGN & CMS (Tall Vertical) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="group md:col-span-1 md:row-span-2 bg-white rounded-[2rem] p-8 border border-gray-200 hover:border-[#7B66EE]/50 transition-colors duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#7B66EE]/20"
          >
            <div>
              <div className="w-12 h-12 bg-[#7B66EE]/10 rounded-full flex items-center justify-center mb-6 text-[#7B66EE] group-hover:bg-[#7B66EE] group-hover:text-white transition-colors duration-300">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Design & CMS</h3>
              <p className="text-gray-500 mt-2">Visuals and content management.</p>
            </div>

            <div className="space-y-6 mt-8">
              {/* Visual representation with Animated Progress Bars */}
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                 <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-[#7B66EE]"></div>
                    <span className="text-sm font-bold text-gray-700">Figma</span>
                 </div>
                 <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    {/* Framer Motion animating width */}
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
                      className="h-full bg-[#7B66EE] rounded-full"
                    />
                 </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                 <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-bold text-gray-700">Photoshop</span>
                 </div>
                 <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                     <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                 </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
               <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Platform</p>
               <span className="inline-block bg-gray-100 px-3 py-1 rounded-md text-sm font-medium text-gray-700">Wordpress</span>
            </div>
          </motion.div>

          {/* CARD 3: VERSION CONTROL (Purple Box - "Eye Catchy") */}
          <motion.div 
             variants={cardVariants}
             whileHover={{ scale: 1.05 }}
             className="group md:col-span-1 md:row-span-1 bg-[#7B66EE] rounded-[2rem] p-8 text-white relative overflow-hidden shadow-lg shadow-[#7B66EE]/30"
          >
             <div className="relative z-10">
               <h3 className="text-xl font-bold">Version Control</h3>
               <p className="text-white/80 text-sm mt-1 mb-6">Code Management & Collab</p>
               <div className="flex gap-3">
                 <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold border border-white/10 transition-transform group-hover:-translate-y-1">Git</span>
                 <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold border border-white/10 transition-transform group-hover:-translate-y-1 delay-75">GitHub</span>
               </div>
             </div>
             
             {/* Continuously Animated Background Blob */}
             <motion.div 
               animate={{ 
                 scale: [1, 1.2, 1],
                 opacity: [0.3, 0.5, 0.3] 
               }}
               transition={{ 
                 duration: 4, 
                 repeat: Infinity, 
                 ease: "easeInOut" 
               }}
               className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/20 rounded-full blur-2xl"
             />
          </motion.div>

          {/* CARD 4: BACKEND */}
          <motion.div 
             variants={cardVariants}
             whileHover={{ scale: 1.02 }}
             className="group md:col-span-1 md:row-span-1 bg-white rounded-[2rem] p-8 border border-gray-200 hover:border-[#7B66EE]/50 transition-colors duration-300 hover:shadow-xl hover:shadow-[#7B66EE]/10"
          >
             <div className="flex justify-between items-start mb-6">
                <div>
                   <h3 className="text-xl font-bold text-gray-900">Backend</h3>
                   <p className="text-sm text-gray-500 mt-1">Server & Database</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl text-gray-400 group-hover:bg-[#7B66EE] group-hover:text-white transition-colors duration-300">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                </div>
             </div>
             
             <div className="flex flex-wrap gap-2">
                {/* Your Backend Skills */}
                {["NodeJS", "Express", "MongoDB", "MySQL", "Prisma"].map((skill) => (
                   <span key={skill} className="px-3 py-1 rounded-lg bg-gray-50 text-xs font-bold text-gray-600 border border-gray-100 group-hover:border-[#7B66EE]/30 group-hover:text-[#7B66EE] transition-colors">
                      {skill}
                   </span>
                ))}
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}