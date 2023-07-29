import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Logo from '../../assets/images/logo.png';
import { StyledSignUp } from './signUp.styles';
import Form from '../form/form';
import Input from '../input/input';
import Button from '../button/button';
import H1 from '../h1/h1';
import { signUp } from '../../store/user/user.actions';
import Modal from '../modal/modal';

//TODO: add error checking
const SignUp = () => {
  const { error } = useSelector((state) => state.user);
  const [isSent, setIsSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    const { email, password, passwordConfirm } = event.target.elements;

    dispatch(
      signUp({
        email: email.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value,
      }),
    );
    setIsSent(true);
  };

  useEffect(() => {
    if (error) {
      setIsModalOpen(true);
    }
  }, [error]);
  return (
    <StyledSignUp>
      <Form onSubmit={onSubmit}>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
        <H1>Sign up</H1>
        <Input type='email' name='email' placeholder='Email *' />
        <Input type='password' name='password' placeholder='Password *' />
        <Input type='password' name='passwordConfirm' placeholder='Password confirm *' />
        <Button>Sign Up</Button>
        <div>
          Already have an account?{' '}
          <Link to='/login' style={{ color: 'var(--main-color)' }}>
            Sign in
          </Link>
        </div>
      </Form>
      {isSent && isModalOpen && error !== null && (
        <Modal closeModal={() => setIsModalOpen(false)}>{error.message}</Modal>
      )}
    </StyledSignUp>
  );
};

export default SignUp;
