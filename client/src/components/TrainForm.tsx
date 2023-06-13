import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ITrain } from "../types";

interface ITrainForm {
  train: ITrain;
  setTrain: React.Dispatch<React.SetStateAction<ITrain>>;
  submitHandle: () => void;
}

const TrainForm: React.FC<ITrainForm> = ({ train, setTrain, submitHandle }) => {
  const handleDateChange = (date: Date | null, fieldName: string) => {
    setTrain((prevState) => ({
      ...prevState,
      [fieldName]: date,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTrain((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitHandle();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <RowInputs>
        <label htmlFor="trainName">Train Name:</label>
        <input
          type="text"
          id="trainName"
          name="trainName"
          value={train.trainName}
          onChange={handleChange}
          required
        />
      </RowInputs>

      <RowInputs>
        <ColInput>
          <label htmlFor="departureStation">Departure Station:</label>
          <input
            type="text"
            id="departureStation"
            name="departureStation"
            value={train.departureStation}
            onChange={handleChange}
            required
          />
        </ColInput>

        <ColInput>
          <label htmlFor="departureTime">Departure Time:</label>
          <DatePicker
            id="departureTime"
            name="departureTime"
            selected={train.departureTime}
            onChange={(date) => handleDateChange(date, "departureTime")}
            dateFormat="yyyy-MM-dd"
            required
          />
        </ColInput>
      </RowInputs>

      <RowInputs>
        <ColInput>
          <label htmlFor="arrivalStation">Arrival Station:</label>
          <input
            type="text"
            id="arrivalStation"
            name="arrivalStation"
            value={train.arrivalStation}
            onChange={handleChange}
            required
          />
        </ColInput>

        <ColInput>
          <label htmlFor="arrivalTime">Arrival Time:</label>
          <DatePicker
            id="arrivalTime"
            name="arrivalTime"
            selected={train.arrivalTime}
            onChange={(date) => handleDateChange(date, "arrivalTime")}
            dateFormat="yyyy-MM-dd"
            required
          />
        </ColInput>
      </RowInputs>

      <RowInputs>
        <label htmlFor="distance">Distance (in km):</label>
        <input
          type="number"
          id="distance"
          name="distance"
          value={train.distance}
          onChange={handleChange}
          required
        />
      </RowInputs>

      <button type="submit">Submit</button>
    </Form>
  );
};

// Define the styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;

  label {
    font-weight: bold;
  }

  input {
    background: #dfe3ee;
    padding: 5px 10px;
  }

  input[type="number"] {
    width: 80px;
    background: #dfe3ee;
  }

  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const RowInputs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
`;

const ColInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default TrainForm;
