import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchTrains } from "../redux/slices/trains";

import styled from "styled-components";
import { ScheduleItem } from "./ScheduleItem";

interface IScheduleBoard {
  routes: number;
}

export const ScheduleBoard: React.FC<IScheduleBoard> = ({ routes }) => {
  const trains = useSelector((state: RootState) => state.trains);
  const dispatch = useDispatch<AppDispatch>();

  React.useLayoutEffect(() => {
    const getTrains = () => {
      dispatch(fetchTrains());
    };

    getTrains();
  }, []);

  console.log(trains);

  return (
    <ScheduleBoardWrap>
      <Title>Found {routes} routes</Title>
      <ScheduleList>
        <ScheduleItem />
      </ScheduleList>
    </ScheduleBoardWrap>
  );
};

const ScheduleBoardWrap = styled.div`
  width: 66%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const Title = styled.h2`
  margin-top: 30px;
`;

const ScheduleList = styled.ul`
  list-style: none;
`;
