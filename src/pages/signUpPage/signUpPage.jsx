import styled from 'styled-components';
import SignUp from '../../components/signUp/signUp';

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpPage = () => {
  return (
    <StyledPage>
      <SignUp />
    </StyledPage>
  );
};

export default SignUpPage;
