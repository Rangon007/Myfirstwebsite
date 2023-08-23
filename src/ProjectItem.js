import React from "react";

function ProjectItem(props) {
  return (
    <div className="projectitem">
      <h3>projectitem</h3>
      <h4>name: {props.name}</h4>
      <h4>dificulty: {props.dificulty}</h4>
      <h4>time: {props.time}</h4>
    </div>
  );
}

export default ProjectItem;
