// import React from "react";

// function Experience() {

//   return (
//     <div className="container mx-auto px-2">
//       <div className="experienceHeading text-center mb-12">
//         <h2 className="text-[2rem] font-semibold">Experience</h2>
//       </div>
//       <div className="timeline relative">
//         <div className="timelineBar absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 w-[1px] bg-[#1e1e1e] h-full max-[520px]:left-0 before:absolute before:w-[1px] before:bg-[#7B66EE] before:h-full ">
  
//         </div>
//         <div className="timelineContent flex flex-col gap-6 w-full max-[520px]:ms-2">
//           <div className="experienceBox w-[40%] text-right self-end max-[520px]:w-full max-[520px]:text-start">
//             <h5 className="text-[1.25rem] font-semibold">Freelance Developer</h5>
//             <p className="italic text-[0.75rem] py-2">Full-time | Present</p>
//             <p className="">
//               Built multiple websites for individuals and organisations. Last project was an event organising site.
//             </p>
//           </div>
//           <div className="experienceBox w-[40%] max-[520px]:w-full">
//             <h5 className="text-[1.25rem] font-semibold">Graphic Designer</h5>
//             <p className="italic text-[0.75rem] py-2">
//               Cherry Media | Jul 2023 – Jul 2024
//             </p>
//             <p className="">
//               I developed portfolio websites using HTML, CSS, and React with team. Edited video content for YouTube. Designed social media graphics, improving brand presence.
//             </p>
//           </div>
//           <div className="experienceBox w-[40%] text-right self-end max-[520px]:w-full max-[520px]:text-start">
//             <h5 className="text-[1.25rem] font-semibold">Freelance Designer</h5>
//             <p className="italic text-[0.75rem] py-2">Part-time</p>
//             <p className="">
//               I was a part time Graphic Designer and worked with multiple brands
//               and individuals.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;


import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  // 1. Structure the data cleanly so we can map over it
  const experiences = [
    {
      id: 1,
      role: "Freelance Developer",
      company: "Self Employed",
      period: "Present",
      description: "Built multiple websites for individuals and organisations. Last project was an event organising site.",
      tags: ["React", "Next.js", "Web Design"],
      isCurrent: true, // Adds a pulsing effect
    },
    {
      id: 2,
      role: "Graphic Designer",
      company: "Cherry Media",
      period: "Jul 2023 – Jul 2024",
      description: "Developed portfolio websites using HTML, CSS, and React with a team. Edited video content for YouTube and designed social media graphics.",
      tags: ["React", "Video Editing", "Branding"],
      isCurrent: false,
    },
    {
      id: 3,
      role: "Freelance Designer",
      company: "Part-time",
      period: "2023", 
      description: "Worked with multiple brands and individuals to create visual identities and marketing assets.",
      tags: ["Graphic Design", "Social Media"],
      isCurrent: false,
    },
  ];

  return (
    <section className="py-24 px-4 bg-white flex justify-center">
      <div className="max-w-4xl w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 pl-4 md:pl-0"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Professional <span className="text-[#7B66EE]">Journey</span>
          </h2>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          
          {/* THE VERTICAL LINE (The Track) */}
          <div className="absolute left-4 md:left-[120px] top-2 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-[#7B66EE]/50 to-gray-200"></div>

          {/* EXPERIENCE ITEMS */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} data={exp} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// Sub-component for individual items to keep code clean
const TimelineItem = ({ data, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative flex flex-col md:flex-row gap-8 md:gap-0"
    >
      
      {/* 1. DATE COLUMN (Desktop: Left side, Mobile: Hidden/Merged) */}
      <div className="hidden md:flex w-[120px] flex-col items-end pr-8 pt-2 text-right">
        <span className={`text-sm font-bold ${data.isCurrent ? 'text-[#7B66EE]' : 'text-gray-400'}`}>
          {data.period}
        </span>
        {data.isCurrent && (
          <span className="text-[10px] font-medium bg-[#7B66EE]/10 text-[#7B66EE] px-2 py-0.5 rounded-full mt-1 animate-pulse">
            Active
          </span>
        )}
      </div>

      {/* 2. THE NODE (The Dot on the line) */}
      <div className="absolute left-4 md:left-[120px] -translate-x-1/2 top-2 z-10">
        <div className={`w-4 h-4 rounded-full border-2 ${data.isCurrent ? 'bg-[#7B66EE] border-[#7B66EE] shadow-[0_0_0_4px_rgba(123,102,238,0.2)]' : 'bg-white border-gray-300'}`}></div>
      </div>

      {/* 3. THE CARD (Content) */}
      <motion.div 
        whileHover={{ x: 5 }}
        className="ml-12 md:ml-12 flex-1"
      >
        <div className="group bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-[#7B66EE]/10 hover:border-[#7B66EE]/30 transition-all duration-300">
          
          {/* Mobile Date (Visible only on small screens) */}
          <div className="md:hidden text-xs font-bold text-[#7B66EE] mb-2 uppercase tracking-wide">
            {data.period}
          </div>

          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#7B66EE] transition-colors">
                {data.role}
              </h3>
              <p className="text-sm font-medium text-gray-500">{data.company}</p>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {data.description}
          </p>

          {/* Tags/Skills used in this role */}
          <div className="flex flex-wrap gap-2">
            {data.tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                {tag}
              </span>
            ))}
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};
