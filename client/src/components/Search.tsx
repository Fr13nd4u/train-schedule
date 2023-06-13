import React from "react";
import styled from "styled-components";
import { sortOptions } from "../utils";
import { useDispatch } from "react-redux";
import { fetchTrains } from "../redux/slices/trains";
import { AppDispatch } from "../redux/store";

export const Search: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchKeyword = e.target.value;
    if (searchKeyword !== "") {
      dispatch(fetchTrains({ search: searchKeyword }));
    } else {
      dispatch(fetchTrains({}));
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortBy = e.target.value;

    dispatch(fetchTrains({ sort: sortBy }));
  };

  return (
    <SearchWrap>
      <input
        type="text"
        placeholder="Search trains"
        onChange={handleSearchChange}
      />
      <select onChange={handleSortChange}>
        <option value="">All</option>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </SearchWrap>
  );
};

const SearchWrap = styled.div`
  height: 100px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  input,
  option {
    background: #dfe3ee;
    padding: 5px 10px;
  }
`;
