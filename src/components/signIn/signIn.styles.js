import styled from 'styled-components';

export const StyledSignIn = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 4rem 3rem;
  box-shadow: var(--shadow);
  border-radius: 5px;
  img {
    width: 15rem;
  }
`;
