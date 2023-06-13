import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { deleteTrain, updateTrain } from "../redux/slices/trains";

import { ITrain } from "../types";
import { formatTimeToDate, formatTimeToHHMM } from "../utils";
import { Button } from "./shared/Button";
import { Modal } from "./shared/Modal";
import TrainForm from "./TrainForm";

interface IScheduleItem {
  train: ITrain;
}

export const ScheduleItem: React.FC<IScheduleItem> = ({ train }) => {
  const {
    _id,
    trainName,
    departureStation,
    departureTime,
    arrivalStation,
    arrivalTime,
    distance,
  } = train;

  const [modalActive, setModalActive] = React.useState(false);
  const [trainForm, setTrainForm] = React.useState<ITrain>({
    _id: "",
    trainName: "",
    departureStation: "",
    departureTime: "",
    arrivalStation: "",
    arrivalTime: "",
    distance: 0,
  });

  const dispatch = useDispatch<AppDispatch>();

  const deleteHandler = () => {
    dispatch(deleteTrain(_id));
  };

  const updateHandler = () => {
    dispatch(updateTrain({ id: _id, data: trainForm }));
    setModalActive(false);
  };

  return (
    <ScheduleItemWrap>
      <Description>
        <TimeWrap>
          <p>
            {formatTimeToHHMM(departureTime)}{" "}
            <span>{formatTimeToDate(departureTime)}</span>
          </p>
          <p>
            {formatTimeToHHMM(arrivalTime)}{" "}
            <span>{formatTimeToDate(arrivalTime)}</span>
          </p>
        </TimeWrap>
        <StationWrap>
          <h5>{departureStation}</h5>
          <h5>{arrivalStation}</h5>
        </StationWrap>
      </Description>

      <Description>
        <TrainInfo>
          <h3>{trainName}</h3>
          <h4>{distance}km</h4>
        </TrainInfo>
        <TrainButtons>
          <Button typeBtn="tertiary" onClick={() => setModalActive(true)}>
            Update
          </Button>
          <Button typeBtn="secondary" onClick={deleteHandler}>
            Delete
          </Button>
        </TrainButtons>
      </Description>
      <Modal
        title={`Update train (${trainName})`}
        active={modalActive}
        setActive={setModalActive}
      >
        <TrainForm
          train={trainForm}
          setTrain={setTrainForm}
          submitHandle={() => updateHandler()}
        />
      </Modal>
    </ScheduleItemWrap>
  );
};

const ScheduleItemWrap = styled.li`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 35px;
  padding: 25px;
  background: #fff;
  border: 1px solid rgba(49, 49, 49, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 4px 0 hsla(0, 0%, 75.3%, 0.1);
  transition: box-shadow 0.2s ease;
`;

const Description = styled.div`
  flex-grow: 1;
  max-width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 60px;
`;

const TimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 32px;

    span {
      font-size: 12px;
      color: rgba(49, 49, 49, 0.4);
    }
  }
`;

const StationWrap = styled.div`
  display: flex;
  justify-content: space-between;

  h5 {
    color: #5cd2c6;
  }
`;

const TrainInfo = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    color: #5cd2c6;
  }
`;

const TrainButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
