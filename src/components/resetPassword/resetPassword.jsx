import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Logo from '../../assets/images/logo.png';
import { StyledResetPassword } from './resetPassword.styles';
import Form from '../form/form';
import Input from '../input/input';
import Button from '../button/button';
import H1 from '../h1/h1';
import Loader from '../loader/loader';
import Modal from '../modal/modal';
import { resetPassword } from '../../store/user/user.actions';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [isSent, setIsSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoading, error } = useSelector((state) => state.user);
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
  }, [error]);

  return (
    <StyledResetPassword>
      {isSent && isLoading && <Loader />}
      {isSent && isModalOpen && error !== null && (
        <Modal closeModal={() => setIsModalOpen(false)}>{error.message}</Modal>
      )}
      <Form onSubmit={onSubmitHandler}>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>

        <H1>Reset password</H1>
        <Input type='email' name='email' placeholder='Email *' />
        <Button>Submit</Button>
        <div>Take a different action.</div>
        <div>
          <Link to='/register' style={{ color: 'var(--main-color)' }}>
            Sign up
          </Link>{' '}
          or{' '}
          <Link to='/register' style={{ color: 'var(--main-color)' }}>
            Sign in
          </Link>
        </div>
      </Form>
    </StyledResetPassword>
  );
};

export default ResetPassword;
