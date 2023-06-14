import { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledSearch = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  caret: var(--main-color);
  &:focus {
    outline: none;
    box-shadow: var(--shadow);
  }
`;

const StyledCross = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
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
      {isEmpty && <StyledCross>&#x2715;</StyledCross>}
    </StyledWrapper>
  );
};

export default Search;
