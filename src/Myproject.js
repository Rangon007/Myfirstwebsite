import React from "react";
import ProjectItem from "./ProjectItem";

function Myproject() {
  return (
    <div className="myprojectcontainer">
      <ProjectItem name="rangon" dificulty="20" time="30" />
      <ProjectItem name="romo" dificulty="10" time="20" />
      <ProjectItem name="rono" dificulty="12" time="10" />
    </div>
  );
}

export default Myproject;
