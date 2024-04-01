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

//TODO: add error checking
const SignUp = () => {
  const { error, isLoading } = useSelector((state) => state.user);
  const [isSent, setIsSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    const { email, password, passwordConfirm } = event.target.elements;

    dispatch(
      signUp({
        email: email.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value,
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
  return (
    <StyledSignUp>
      {isLoading && <Loader />}
      {isSent && isModalOpen && error !== null && (
        <AnimateWrapper
          isMounted={isModalOpen}
          mountedStyle={{ animation: "fadeOut 3.2s linear 1 forwards" }}
          unmountedStyle={{ animation: "fadeIn 3.2s linear 1 forwards" }}
          delay={200}
        >
          <Modal closeModal={() => setIsModalOpen(false)}>
            {error.message}
          </Modal>
        </AnimateWrapper>
      )}
      <Form onSubmit={onSubmit}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <H1>Sign up</H1>
        <Input type="email" name="email" placeholder="Email *" />
        <Input type="password" name="password" placeholder="Password *" />
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="Password confirm *"
        />
        <Button>Sign Up</Button>
        <div>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "var(--main-color)" }}>
            Sign in
          </Link>
        </div>
      </Form>
    </StyledSignUp>
  );
};

export default SignUp;
