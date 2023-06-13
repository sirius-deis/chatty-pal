import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import SignIn from '../../components/signIn/signIn';

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInPage = () => {
  const { user } = useSelector((store) => store.user);
  if (user) {
    return <Navigate to='/chat' />;
  }
  return (
    <StyledPage>
      <SignIn />
    </StyledPage>
  );
};

export default SignInPage;
