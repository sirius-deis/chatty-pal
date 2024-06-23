import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const RootLayout = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/chat");
    }
  }, [user]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
