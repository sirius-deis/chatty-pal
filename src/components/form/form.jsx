import styled from 'styled-components';

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

const Form = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;
