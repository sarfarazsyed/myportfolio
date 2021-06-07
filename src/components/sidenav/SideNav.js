import React from "react";
import { about } from "./../../constants/About";
import { skills } from "./../../constants/Skills";
import { projects } from "./../../constants/Projects";
import { profile } from "../../constants/Profile";
import { experiences } from "./../../constants/Experiences";
import styled, { keyframes } from "styled-components";

import profileimage from "../../images/profile.svg";

const Content = styled.p`
  content: "";
  position: relative;
  text-align: center;
  text-justify: newspaper;
  text-rendering: optimizeSpeed;
`;
const AvatarSpin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
    `;

const Avatar = styled.div`
  display: inline-block;
  width: 140px;
  height: 140px;
  padding: 4px;
  background: linear-gradient(90deg, #000017, #19a6c3);
  color: #fdfacd;
  border-radius: 50%;
  justify-content: center;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${AvatarSpin} hover 10s linear;
  }
`;

const MyName = styled.h2`
  font-family: "Arima Madurai", fantasy, cursive;
  font-variant: petite-caps;
  margin: 0;
  margin-top: 10px;
  font-size: 28px;
`;

const SubTitle = styled.p`
  font-family: "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif, Times,
    "Times New Roman", serif;
  margin-top: 0;
  font-style: italic;
`;

const SectionList = styled.div`
  &:: after {
    display: inline-block;
    content: "";
    border-top: 1px solid #aaa8a9;
    width: 4rem;
    margin-top: 0;
    margin-bottom: -10px;
    transform: translateY(-1rem);
  }
  &:: before {
    display: inline-block;
    content: "";
    border-top: 1px solid #aaa8a9;
    width: 4rem;
    margin-top: 0;
    margin-bottom: -10px;
    transform: translateY(-1rem);
  }
`;

const Section = styled.p`
  font-family: "Arima Madurai", fantasy, cursive;
  font-size: 21px;
  margin: 8px;
  /* padding: 12px; */
  font-weight: 600;
  transition: color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &: hover {
    cursor: pointer;
    font-size: 21.5px;
    color: rgba(219, 130, 130, 0.906);
    text-shadow: 0 14px 28px rgba(219, 130, 130, 0.7);
  }
`;

const AvatarImage = styled.img`
  object-fit: contain;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-left: 10px;

  &: hover {
    transform: scale(1.07);
    box-shadow: 0px 0px 5px rgba(250, 250, 250, 0.7);
  }
`;
export const SideNav = ({ handleSectionClick }) => {
  return (
    <>
      {profile ? (
        <AvatarImage src={profileimage} alt="SSA" />
      ) : (
        <Avatar>{<Content>SSA</Content>}</Avatar>
      )}
      <MyName>Sarfaraz Ahammed</MyName>
      <SubTitle>"Programming Addict"</SubTitle>
      <SectionList>
        <Section onClick={() => handleSectionClick(about)}>About Me</Section>
        <Section onClick={() => handleSectionClick(skills)}>Skills</Section>
        <Section onClick={() => handleSectionClick(projects)}>Projects</Section>
        <Section onClick={() => handleSectionClick(experiences)}>
          Career History
        </Section>
        <Section onClick={() => handleSectionClick(profile)}>Profile</Section>
      </SectionList>
    </>
  );
};
