import React from "react";
import styled from "styled-components";

interface IButton {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typeBtn: "primary" | "secondary" | "tertiary";
  onClick?: any;
}

export const Button: React.FC<IButton> = ({ children, onClick, typeBtn }) => {
  return (
    <ButtonWrap onClick={onClick} typeBtn={typeBtn}>
      {children}
    </ButtonWrap>
  );
};
const ButtonWrap = styled.button<{
  typeBtn: "primary" | "secondary" | "tertiary";
}>`
  cursor: pointer;
  padding: 5px 10px;
  min-height: 55px;
  height: fit-content;
  border-radius: 6px;
  color: #fff;
  background: #5cd2c6;
  background-color: ${({ typeBtn }) => backgroundColors[typeBtn]};
  transition: 0.4s;

  &:hover,
  &:focus {
    background: #4cc2b6;
    background-color: ${({ typeBtn }) => hoverBgColors[typeBtn]};
    transition: 0.4s;
  }
`;

const backgroundColors = {
  primary: "#5cd2c6",
  secondary: "#E10D30",
  tertiary: "#007bff",
};

const hoverBgColors = {
  primary: "#4cc2b6",
  secondary: "#900B21",
  tertiary: "#006bef",
};
