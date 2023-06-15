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

  caret: var(--main-color);
  border: 0;
  background-color: transparent;
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

const Search = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const onChangeHandler = (event) => {
    if (event.target.value) {
      setIsEmpty(false);
    } else {
      if (!isEmpty) {
        setIsEmpty(true);
      }
    }
  };
  return (
    <StyledWrapper>
      <StyledSearch type='search' placeholder='Search' name='search' onChange={onChangeHandler} />
      {!isEmpty && <StyledCross>&#x2715;</StyledCross>}
    </StyledWrapper>
  );
};

export default Search;
