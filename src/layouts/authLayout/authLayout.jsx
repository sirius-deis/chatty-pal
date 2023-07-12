import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthLayout = () => {
  const { user } = useSelector((store) => store.user);
  if (user) {
    return <Navigate to='/chat' />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
