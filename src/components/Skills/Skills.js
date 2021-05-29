import React from "react";
import styled from "styled-components";
import { Container } from "../shared/Style";

import { SkillCard } from "../Skills/SkillCard";

const Heading = styled.div`
  font-variant: petite-caps;
  font-weight: bold;
`;

export const Skills = ({ skills }) => {
  return (
    <>
      {Object.keys(skills.skillCategories).map((d) => {
        return (
          <Container key={d.toString()}>
            <Heading>{d}</Heading>
            <Container>
              {skills.skillCategories[d].map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </Container>
          </Container>
        );
      })}
    </>
  );
};
