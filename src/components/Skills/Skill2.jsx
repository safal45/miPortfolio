import React from "react";
import ProgressComponent from './Skill3'

function Skill2() {
   console.log("Rendering Skill2");
  const progressData = [
    { name: "HTML", value: "w-11/12" },
    { name: "CSS", value: "w-11/12" },
    { name: "JAVASCRIPT", value: "w-4/5" },
    { name: "PYTHON", value: "w-5/6" },
    { name: "FLASK", value: "w-11/12" },
    { name: "MYSQL", value: "w-3/5" },
    { name: "REACT", value: "w-4/5" },
    { name: "C", value: "w-3/4" },
    { name: "C++", value: "w-11/12" },
    { name: "TAILWIND CSS", value: "w-11/12" },
    { name: "BOOTSTRAP", value: "w-11/12" },
    { name: "NODEJS", value: "w-3/5" },
    // Add more skills as needed
  ];

  return (
    <div className="text-white ">
      <ProgressComponent progresses={progressData} />
    </div>
  );
}

export default Skill2;
