import React from "react";
import { PieChart } from "react-minimal-pie-chart";

function Skills() {
  return (
    <>
      <PieChart style={{width:"60%", margin:" 0 auto"}}
        data={
          [
          { title: "HTML", value: 46, color: "#1e1e1e" },
          { title: "CSS", value: 46, color: "#7B66EE" },
          { title: "Javascript", value: 46, color: "#1e1e1e" },
          { title: "React", value: 46, color: "#7B66EE" },
        ]}
      />
    </>
  );
}

export default Skills;
