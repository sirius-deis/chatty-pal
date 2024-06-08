import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import { StyledSignUp } from "./signUp.styles";
import Form from "../form/form";
import Input from "../input/input";
import Button from "../button/button";
import H1 from "../h1/h1";
import { signUp } from "../../store/user/user.actions";
import Modal from "../modal/modal";
import Loader from "../loader/loader";
import AnimateWrapper from "../animateWrapper/animateWrapper";
import Panel from "../panel/panel";

//TODO: add error checking
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { error, isLoading } = useSelector((state) => state.user);
  const [isSent, setIsSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(
      signUp({
        email,
        password,
        passwordConfirm,
      })
    );
    setIsSent(true);
  };

  useEffect(() => {
    if (error) {
      setIsModalOpen(true);
    }
    if (!error && !isLoading && isSent) {
      navigate("/login");
    }
  }, [error, isLoading, isSent]);

  const onChangeHandler = (fn) => (e) => {
    fn(e.target.value);
  };

  return (
    <StyledSignUp>
      {isLoading && <Loader />}
      {isSent && isModalOpen && error && (
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
      <form onSubmit={onSubmit}>
        <Panel>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <H1>Sign up</H1>
          <Input
            type="email"
            name="email"
            placeholder="Email *"
            onChange={onChangeHandler(setEmail)}
            value={email}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password *"
            onChange={onChangeHandler(setPassword)}
            value={password}
          />
          <Input
            type="password"
            name="passwordConfirm"
            placeholder="Password confirm *"
            onChange={onChangeHandler(setPasswordConfirm)}
            value={passwordConfirm}
          />
          <Button color="primary">Sign Up</Button>
          <div>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "var(--warning)" }}>
              Sign in
            </Link>
          </div>
        </Panel>
      </form>
    </StyledSignUp>
  );
};

export default SignUp;
