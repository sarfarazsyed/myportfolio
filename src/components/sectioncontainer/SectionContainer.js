import React from "react";

import { About } from "./../About/About";
import { Skills } from "./../Skills/Skills";
import { Projects } from "./../Projects/Projects";
import { Profile } from "../Profile/Profile";
import { MainQuote, MainHeading } from "../shared/Style";
import { Experience } from "./../Experience/Experience";
import styled from "styled-components";

const Container = styled.div`
  text-align: left;
  padding-right: 20px;
  overflow-y: auto;
  -moz-overflow-y: hidden;
  -ms-overflow-y: hidden;
  scrollbar-width: none;
`;

const SectionHeading = styled.div`
  &:: after {
    display: inline-block;
    content: "";
    margin-top: 0;
    margin-bottom: 5px;
    transform: translateY(-1rem);
  }
`;

const SectionComponent = styled.div`
  &:: -webkit-scrollbar {
    display: none;
  }
`;

export const SectionContainer = ({ selectedSection }) => {
  return (
    <Container>
      <SectionHeading>
        <MainHeading>{selectedSection.heading}</MainHeading>
        <MainQuote>{selectedSection.quote}</MainQuote>
      </SectionHeading>
      <SectionComponent>
        {
          {
            "About Me": <About bio={selectedSection.bio} />,
            Skills: <Skills skills={selectedSection} />,
            Projects: <Projects projects={selectedSection} />,
            "Career History": <Experience career={selectedSection} />,
            Profile: <Profile />,
          }[selectedSection.heading]
        }
      </SectionComponent>
    </Container>
  );
};
