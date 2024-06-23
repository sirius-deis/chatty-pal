import styled from "styled-components";

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--shadow-color);
  z-index: 10;
`;

const Backdrop = ({ onClickHandler }) => {
  return <StyledBackdrop onClick={onClickHandler} />;
};

export default Backdrop;
