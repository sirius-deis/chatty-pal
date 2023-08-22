import PropTypes from 'prop-types';
import { StyledPlainButton, StyledRoundedButton } from './button.styles';

const Button = ({ children, backgroundColor, color, kind, onClick = () => {}, styles }) => {
  switch (kind) {
    case 'rounded':
      return (
        <StyledRoundedButton
          backgroundColor={backgroundColor}
          color={color}
          onClick={onClick}
          style={styles}
        >
          {children}
        </StyledRoundedButton>
      );
    case 'plain':
    default:
      return (
        <StyledPlainButton
          backgroundColor={backgroundColor}
          color={color}
          onClick={onClick}
          style={styles}
        >
          {children}
        </StyledPlainButton>
      );
  }
};

Button.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  kind: PropTypes.string,
  onClick: PropTypes.func,
  styles: PropTypes.object,
};

export default Button;
