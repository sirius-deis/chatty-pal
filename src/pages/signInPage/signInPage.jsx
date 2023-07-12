import styled from 'styled-components';
import SignIn from '../../components/signIn/signIn';

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInPage = () => {
  return (
    <StyledPage>
      <SignIn />
    </StyledPage>
  );
};

export default SignInPage;
