import { StyledBackdrop } from './backdrop.styles'

const Backdrop = ({ onClickHandler }) => {
  return <StyledBackdrop onClick={onClickHandler} data-testid="backdrop" />;
};

export default Backdrop;
