import React from "react";
import styled from "styled-components";
//import profile from "../../images/profile.svg";

const ProfileCard = styled.div`
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
`;

/*const ProfileImage = styled.img`
  object-fit: contain;
  width: 140px;
  height: 140px;
  align-self: center;
`;
const Paragraph = styled.p`
  & > b {
    font-weight: 600;
    font-size: 1em;
  }
  align-items: left;
`;*/

const Title = styled.h4`
  font-variant: petite-caps;
  align-self: center;
`;

const TableHeader = styled.th`
  font-variant: petite-caps;
`;

export const Profile = () => {
  return (
    <>
      <ProfileCard>
        {/*<ProfileImage src={profile} alt="SSA" />*/}
        <Title>Backend developer & Free Lancer</Title>
        <table>
          <tr>
            <TableHeader>Email:</TableHeader>
            <td>syedsarfarazahammed@outlook.com</td>
          </tr>
          <tr>
            <TableHeader>Phone:</TableHeader>
            <td>+91 XXX-XXX-XXXX</td>
          </tr>
          <tr>
            <TableHeader>Portfolio:</TableHeader>
            <td>https://sarfarazsyed.github.io/myportfolio/</td>
          </tr>
        </table>
      </ProfileCard>
    </>
  );
};
