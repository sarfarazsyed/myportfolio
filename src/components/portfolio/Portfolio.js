import React from "react";

import { SideNav } from "./../sidenav/SideNav";
import { SectionContainer } from "./../sectioncontainer/SectionContainer";
import styled from "styled-components";

const PortfolioContainer = styled.div`
  position: relative;
  margin: 20px;
  margin-left: 15%;
  width: 70%;
  min-height: 500px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  align-items: center;
  font-family: "Gill Sans MT", "Lucida Grande", "Lucida Sans", Arial, sans-serif;

  &: hover {
    background-color: #000017;
    box-shadow: 0 14px 28px rgba(219, 120, 120, 0.3),
      0 10px 10px rgba(219, 120, 120, 0.3);
  }

  @media (max-width: 600px) {
    margin-left: 5%;
    width: 90%;
  }
`;

const SideNavContainer = styled.div`
  width: 260px;
  flex-grow: 1;
  height: auto;
  margin: 10px;
  border-radius: 10px 1px 1px 10px;
  /* overflow-y: scroll; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    border-radius: 0;
    padding-bottom: 32px;
  }
`;

const MainSectionContainer = styled.div`
  display: flex;
  width: 260px;
  flex-grow: 50;
  margin: 10px;
  height: 455px;
  margin: 10px;
  padding: 10px;
  border-radius: 1px 10px 10px 1px;
  box-shadow: 0 0 5px 0 #202020;
`;

export const Portfolio = ({
  handleSectionClick,
  selectedSection
}) => {
  return (
    <PortfolioContainer>
      <SideNavContainer>
        <SideNav handleSectionClick={handleSectionClick} />
      </SideNavContainer>
      <MainSectionContainer>
        <SectionContainer
          selectedSection={selectedSection}
        />
      </MainSectionContainer>
    </PortfolioContainer>
  );
};
