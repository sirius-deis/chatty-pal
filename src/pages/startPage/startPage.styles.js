import styled from 'styled-components';

const StyledStartPage = styled.div`
  height: 100vh;
`;

const StyledStartBanner = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 15rem;
  }
`;

const StyledStartContent = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export { StyledStartPage, StyledStartBanner, StyledStartContent };
