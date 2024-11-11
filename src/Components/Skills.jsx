import React from "react";
// import { PieChart } from "react-minimal-pie-chart";

function Skills() {
  
  return (
    <>
      {/* <PieChart style={{width:"60%", margin:" 0 auto"}}
        data={
          [
          { title: "HTML", value: 46, color: "#1e1e1e" },
          { title: "CSS", value: 46, color: "#7B66EE" },
          { title: "Javascript", value: 46, color: "#1e1e1e" },
          { title: "React", value: 10, color: "#7B66EE" },
        ]}
      /> */}
      {/* <div className="flex justify-between flex-wrap mx-auto max-[678px]:justify-center">
          <div className="card relative frontend w-[300px] h-[600px] bg-[url('../public/images/card.png')] bg-contain bg-no-repeat hover:bg-[#1e1e1e] hover:bg-none">
            <div className="overlay absolute w-full h-[50%]">
              <ul>
                  <li>HTML, CSS & Javascript</li>


              </ul>
            </div>
          </div>
          <div className="card relative frameworks w-[300px] h-[600px] bg-[url('../public/images/card.png')] bg-contain bg-no-repeat hover:bg-[#1e1e1e] hover:bg-none"></div>
          <div className="card relative others w-[300px] h-[600px] bg-[url('../public/images/card.png')] bg-contain bg-no-repeat hover:bg-[#1e1e1e] hover:bg-none"></div>
      </div> */}

      <div className="flex flex-col justify-between gap-6 px-2">
        <div className="frontend">
          <h5>HTML, CSS, Javascript, Bootstrap & Tailwind</h5>
          <div className="bar bg-[#1e1e1e] w-100% h-[20px] mt-5 relative before:absolute before:h-full before:w-[95%] before:bg-[#7B66EE]"></div>
        </div>

        <div className="frontend">
        <h5>React</h5>
        <div className="bar bg-[#1e1e1e] w-100% h-[20px] mt-5 relative before:absolute before:h-full before:w-[75%] before:bg-[#7B66EE]"></div>
        </div>

        <div className="frontend">
        <h5>Figma, Photoshop & Illustrator</h5>
        <div className="bar bg-[#1e1e1e] w-100% h-[20px] mt-5 relative before:absolute before:h-full before:w-[90%] before:bg-[#7B66EE]"></div>
        </div>
      </div>
    </>
  );
}

export default Skills;
