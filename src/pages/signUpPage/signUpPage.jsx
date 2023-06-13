import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import SignUp from '../../components/signUp/signUp';

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpPage = () => {
  const { user } = useSelector((store) => store.user);
  if (user) {
    return <Navigate to='/chat' />;
  }
  return (
    <StyledPage>
      <SignUp />
    </StyledPage>
  );
};

export default SignUpPage;
