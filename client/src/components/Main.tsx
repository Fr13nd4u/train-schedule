import React from "react";
import styled from "styled-components";
import { Search } from "./Search";
import { ScheduleBoard } from "./ScheduleBoard";

export const Main: React.FC = () => {
  return (
    <MainWrap>
      <Search />
      <ScheduleBoard routes={23} />
    </MainWrap>
  );
};

const MainWrap = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
