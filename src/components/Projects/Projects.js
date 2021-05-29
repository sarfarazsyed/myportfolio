import React from "react";
import { Container } from "../shared/Style";

import { ProjectCard } from "./../ProjectCard/ProjectCard";

export const Projects = ({ projects }) => {
  return (
    <Container>
      {projects.projectList.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </Container>
  );
};
