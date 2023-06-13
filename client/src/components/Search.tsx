import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchTrains } from "../redux/slices/trains";
import { AppDispatch } from "../redux/store";

import { sortOptions } from "../utils";
import { useDebounce } from "../hooks/useDebounce";

export const Search: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const dispatch = useDispatch<AppDispatch>();

  const debouceSearch = useDebounce(searchValue, 300);

  React.useEffect(() => {
    if (debouceSearch || searchValue.length < 0) {
      dispatch(fetchTrains({ search: debouceSearch }));
    } else {
      dispatch(fetchTrains({}));
    }
  }, [debouceSearch]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortBy = e.target.value;

    dispatch(fetchTrains({ sort: sortBy }));
  };

  return (
    <SearchWrap>
      <input
        type="text"
        placeholder="Search trains"
        onChange={(e) => setSearchValue(e.target.value)}
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
