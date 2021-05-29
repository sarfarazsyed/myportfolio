import React from "react";
import styled from "styled-components";
import { MainQuote } from "../shared/Style";

const AboutContainer = styled.div`
  font-size: 17px;
  white-space: pre-wrap;
`;

export const About = ({ bio }) => {
  return (
    <AboutContainer>
      <p>{bio.data}</p>
      <MainQuote>{bio.quote}</MainQuote>
    </AboutContainer>
  );
};
