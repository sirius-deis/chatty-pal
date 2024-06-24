import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const RootLayout = () => {
  const { user } = useSelector((state) => state.user);
  const { chatIdParam } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate(
        `/chat${
          chatIdParam && Number.isInteger(+chatIdParam) ? `/${chatIdParam}` : ""
        }`
      );
    }
  }, [user]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
