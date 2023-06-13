import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { StyledResetPassword } from './resetPassword.styles';
import Form from '../form/form';
import Input from '../input/input';
import Button from '../button/button';
import H1 from '../h1/h1';

const ResetPassword = () => {
  return (
    <StyledResetPassword>
      <Form>
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
