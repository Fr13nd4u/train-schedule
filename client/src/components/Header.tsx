import React from "react";
import styled from "styled-components";
import headerBg from "../assets/header.jpg";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Image src={headerBg} alt="Header image" />
      <Heading>Your Train Schedule</Heading>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 82px;
`;

const Image = styled.img`
  height: 50vh;
  width: 100%;
  filter: blur(2px);
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
