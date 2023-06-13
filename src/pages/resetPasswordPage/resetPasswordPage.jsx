import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import ResetPassword from '../../components/resetPassword/resetPassword';

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResetPasswordPage = () => {
  const { user } = useSelector((store) => store.user);
  if (user) {
    return <Navigate to='/chat' />;
  }
  return (
    <StyledPage>
      <ResetPassword />
    </StyledPage>
  );
};

export default ResetPasswordPage;
