import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { StyledSignUp, StyledForm } from './signUp.styles';
import Input from '../input/input';
import Button from '../button/button';
import H1 from '../h1/h1';

const SignUp = () => {
  return (
    <StyledSignUp>
      <StyledForm>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        <H1>Sign up</H1>
        <Input type='text' name='firstName' placeholder='First name *' />
        <Input type='text' name='lastName' placeholder='Lat name *' />
        <Input type='email' name='email' placeholder='Email *' />
        <Input type='password' name='password' placeholder='Password *' />
        <Button>Sign Up</Button>
        <div>
          Already have an account?{' '}
          <Link to='/login' style={{ color: 'var(--main-color)' }}>
            Sign in
          </Link>
        </div>
      </StyledForm>
    </StyledSignUp>
  );
};

export default SignUp;
