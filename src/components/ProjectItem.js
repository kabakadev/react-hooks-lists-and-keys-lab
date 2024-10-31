import React from "react";

function ProjectItem({ name, about, technologies }) {
  const elemTech = technologies.map((element, index) => {
    return <span key={index}>{element}</span>;
  });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{elemTech}</div>
    </div>
  );
}

export default ProjectItem;
