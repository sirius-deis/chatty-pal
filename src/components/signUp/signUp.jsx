import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logo from '../../assets/images/logo.png';
import { StyledSignUp } from './signUp.styles';
import Form from '../form/form';
import Input from '../input/input';
import Button from '../button/button';
import H1 from '../h1/h1';
import { signUp } from '../../store/user/user.actions';

const SignUp = () => {
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
  };
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
    </StyledSignUp>
  );
};

export default SignUp;
