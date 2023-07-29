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

export default Button;
