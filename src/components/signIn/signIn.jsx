import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/images/logo.png";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import Input from "../input/input";
import Button from "../button/button";
import Header from "../header/header";
import Row from "../row/row";
import LabelWithCheckbox from "../checkbox/checkbox";
import { signIn } from "../../store/user/user.actions";
import Modal from "../modal/modal";
import Loader from "../loader/loader";
import AnimateWrapper from "../animateWrapper/animateWrapper";
import Panel from "../panel/panel";

//TODO: add error checking
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading } = useSelector((state) => state.user);
  const [isSent, setIsSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    dispatch(signIn({ email: email.value, password: password.value }));
    setIsSent(true);
  };

  useEffect(() => {
    if (error) {
      setIsModalOpen(true);
    }
  }, [error]);

  const onChangeHandler = (fn) => (e) => {
    fn(e);
  };

  return (
    <>
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

          <Header>
            <h2>Sign in</h2>
          </Header>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChangeHandler(setEmail)}
            value={email}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChangeHandler(setPassword)}
            value={password}
          />
          <Row>
            <LabelWithCheckbox label="Remember me" />
            <Link to="/reset-password">Reset password</Link>
          </Row>
          <Button>Sign In</Button>
          <div>or</div>
          <div>Login with your social media account.</div>
          <Row style={{ justifyContent: "center", gap: "2rem" }}>
            <Button type="rounded">
              <FaGoogle />
            </Button>
            <Button type="rounded">
              <FaFacebookF />
            </Button>
            <Button type="rounded">
              <FaTwitter />
            </Button>
          </Row>
          <div>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "var(--main-color)" }}>
              Sign up
            </Link>
          </div>
        </Panel>
      </form>
    </>
  );
};

export default SignIn;
