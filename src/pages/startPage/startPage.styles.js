import styled from 'styled-components';

const StyledStartPage = styled.div`
  background-color: var(--bg-color-lighter);
  height: 100vh;
`;

const StyledStartBanner = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to left top, var(--bg-color-lighter) 50%, var(--main-color-lighter));
  img {
    width: 20rem;
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
  background-image: linear-gradient(to right bottom, var(--bg-color-lighter) 60%, var(--main-color-lighter));
`;

export { StyledStartPage, StyledStartBanner, StyledStartContent };
