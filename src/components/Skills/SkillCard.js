import React from "react";
import styled from "styled-components";

const SkillCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #202020;
  border: 1px solid #120136;
  border-radius: 5px;
  padding: 10px;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  margin: 10px;
  width: 150px;
  flex-grow: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    font-weight: 600;
  }
`;

export const SkillCard = ({ skill }) => {
  return <SkillCardContainer>{skill}</SkillCardContainer>;
};
