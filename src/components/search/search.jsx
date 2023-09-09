import { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  flex-grow: 6;
  position: relative;
  padding: 0.4rem;
  border-radius: 5px;
  background-color: var(--bg-color);
`;

const StyledSearch = styled.input`
  width: 95%;
  padding: 0.5rem 1rem;
  caret-color: var(--main-color);
  border: 0;
  background-color: transparent;
  color: var(--text-color);
  &:focus {
    outline: none;
  }
  &:placeholder {
    color: var(--text-color);
  }
`;

const StyledCross = styled.button`
  position: absolute;
  top: 50%;
  right: 1rem;
  border: 0;
  background-color: transparent;
  color: var(--text-color);
  transform: translateY(-50%);
  cursor: pointer;
`;

const Search = ({ searchTerm = '', onSearchTermChange }) => {
  const onChangeHandler = (event) => {
    onSearchTermChange(event.target.value);
  };

  const onClearClickHandler = () => {
    onSearchTermChange('');
  };

  return (
    <StyledWrapper>
      <StyledSearch
        type='search'
        placeholder='Search'
        name='search'
        value={searchTerm}
        onChange={onChangeHandler}
      />
      {searchTerm.length > 0 && <StyledCross onClick={onClearClickHandler}>&#x2715;</StyledCross>}
    </StyledWrapper>
  );
};

export default Search;
