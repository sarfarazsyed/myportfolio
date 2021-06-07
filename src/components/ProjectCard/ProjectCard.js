import React from "react";
import styled from "styled-components";

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-wrap: anywhere;
  background-color: #202020;
  /* border: 1px solid #120136; */
  border-radius: 5px;
  padding: 20px;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  margin: 10px 0px 0px 10px;
  flex-grow: 1;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &: hover {
    transform: scale(1.001);
    box-shadow: 3px 3px 3px rgba(219, 120, 120, 0.2),
      3px 3px 3px rgba(219, 120, 120, 0.2);
  }

  & > p {
    margin: 2px;
    font-size: 1em;
  }
`;

const Link = styled.a`
  color: rgba(219, 120, 120, 0.6);
  text-decoration: none;

  &:hover {
    color: rgba(219, 120, 120, 0.8);
  }
`;

const ProjectHeaders = styled.b`
  font-variant: petite-caps;
`;

const ProjectName = styled.b`
  alignitems: center;
  font-variant: petite-caps;
`;

const Paragraph = styled.p`
  & > b {
    font-weight: 600;
    font-size: 1.2em;
  }
`;

export const ProjectCard = ({ project }) => {
  return (
    <ProjectCardContainer>
      <center>
        <Paragraph>
          <ProjectName>{project.name}</ProjectName>
        </Paragraph>
      </center>
      <Paragraph>
        <ProjectHeaders>Description:</ProjectHeaders> {project.description}
      </Paragraph>
      <Paragraph>
        <ProjectHeaders>Link:</ProjectHeaders>{" "}
        <Link href={project.link} target="blank">
          {project.link}
        </Link>{" "}
      </Paragraph>
    </ProjectCardContainer>
  );
};
