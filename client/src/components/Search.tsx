import React from "react";
import styled from "styled-components";

export const Search: React.FC = () => {
  return <SearchWrap>Search</SearchWrap>;
};

const SearchWrap = styled.div`
  height: 100px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
