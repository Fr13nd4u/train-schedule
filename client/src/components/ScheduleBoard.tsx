import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { createTrain, fetchTrains } from "../redux/slices/trains";

import styled from "styled-components";
import { ScheduleItem } from "./ScheduleItem";
import { Button } from "./shared/Button";
import { Modal } from "./shared/Modal";
import TrainForm from "./TrainForm";
import { ITrain } from "../types";

export const ScheduleBoard: React.FC = () => {
  const [modalActive, setModalActive] = React.useState(false);
  const [train, setTrain] = React.useState<ITrain>({
    _id: "",
    trainName: "",
    departureStation: "",
    departureTime: "",
    arrivalStation: "",
    arrivalTime: "",
    distance: 0,
  });

  const { trains, loading, error } = useSelector(
    (state: RootState) => state.trains
  );
  const dispatch = useDispatch<AppDispatch>();

  const getTrains = () => {
    dispatch(fetchTrains({}));
  };

  React.useLayoutEffect(() => {
    getTrains();
  }, []);

  const addTrain = () => {
    dispatch(createTrain({ ...train }));
    setModalActive(false);
    getTrains();
  };

  if (loading) {
    return <h2 style={{ marginTop: 120 }}>Loading...</h2>;
  }

  if (error) {
    return <h2 style={{ marginTop: 120 }}>Something went wrong!</h2>;
  }

  return (
    <ScheduleBoardWrap>
      <ScheduleHead>
        <Title>Found {trains.length} routes</Title>
        <Button typeBtn="primary" onClick={() => setModalActive(true)}>
          Create New
        </Button>
      </ScheduleHead>
      <ScheduleList>
        {trains.map((train) => (
          <ScheduleItem key={train._id} train={train} />
        ))}
      </ScheduleList>

      <Modal
        title="Create new train"
        active={modalActive}
        setActive={setModalActive}
      >
        <TrainForm train={train} setTrain={setTrain} submitHandle={addTrain} />
      </Modal>
    </ScheduleBoardWrap>
  );
};

const ScheduleBoardWrap = styled.div`
  width: 66%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding-bottom: 120px;
`;

const ScheduleHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  margin-top: 30px;
`;

const ScheduleList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
