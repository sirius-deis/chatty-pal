import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import { StyledResetPassword } from "./resetPassword.styles";
import Input from "../input/input";
import Button from "../button/button";
import H1 from "../h1/h1";
import Loader from "../loader/loader";
import Modal from "../modal/modal";
import { resetPassword } from "../../store/user/user.actions";
import AnimateWrapper from "../animateWrapper/animateWrapper";
import Panel from "../panel/panel";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [isSent, setIsSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const { email } = event.target.elements;

    setIsSent(true);
    dispatch(resetPassword(email.value));
  };

  useEffect(() => {
    if (error) {
      setIsModalOpen(true);
    }
    if (!error && !isLoading && isSent) {
      navigate("/login");
    }
  }, [error]);

  return (
    <StyledResetPassword>
      {isSent && isLoading && <Loader />}
      {isSent && isModalOpen && error !== null && (
        <AnimateWrapper
          isMounted={isModalOpen}
          mountedStyle={{ animation: "fadeOut 3.2s linear 1 forwards" }}
          unmountedStyle={{ animation: "fadeIn 3.2s linear 1 forwards" }}
          delay={200}
        >
          <Modal closeModal={() => setIsModalOpen(false)} withCloseBtn>
            <Panel padding={6}>{error.message}</Panel>
          </Modal>
        </AnimateWrapper>
      )}
      <form onSubmit={onSubmitHandler}>
        <Panel>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>

          <H1>Reset password</H1>
          <Input type="email" name="email" placeholder="Email *" />
          <Button>Submit</Button>
          <div>Take a different action.</div>
          <div>
            <Link to="/register" style={{ color: "var(--main-color)" }}>
              Sign up
            </Link>{" "}
            or{" "}
            <Link to="/login" style={{ color: "var(--main-color)" }}>
              Sign in
            </Link>
          </div>
        </Panel>
      </form>
    </StyledResetPassword>
  );
};

export default ResetPassword;
