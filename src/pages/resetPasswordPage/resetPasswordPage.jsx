import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import FullPageWrapper from "../../components/fullPageWrapper/fullPageWrapper";
import ResetPassword from "../../components/resetPassword/resetPassword";

const ResetPasswordPage = () => {
  const { user } = useSelector((store) => store.user);
  if (user) {
    return <Navigate to="/chat" />;
  }
  return (
    <FullPageWrapper>
      <ResetPassword />
    </FullPageWrapper>
  );
};

export default ResetPasswordPage;
