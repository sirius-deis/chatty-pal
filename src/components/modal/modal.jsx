import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../button/button";

import Portal from "../portal/portal";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: var(--bg-color-lighter);
  box-shadow: var(--shadow);
  font-size: 1.5rem;
  z-index: 100;
`;

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--shadow-color);
  cursor: pointer;
`;

const StyledCloseButtonWrapper = styled.div`
  position: absolute;
  opacity: 0;
  top: 0.5rem;
  right: 0.5rem;
  transition: opacity 0.2s ease-out;
  &:hover {
    opacity: 1;
  }
`;

const Modal = ({ children, closeModal, withCloseBtn }) => {
  const onBackdropClickHandler = (event) => {
    event.stopPropagation();
    closeModal();
  };

  return (
    <Portal wrapperId="modal">
      <StyledBackdrop onClick={onBackdropClickHandler} />
      <StyledModal>
        {children}
        {withCloseBtn && (
          <StyledCloseButtonWrapper>
            <Button onClick={closeModal} styles={{ padding: "0.3rem" }}>
              &#x2715;
            </Button>
          </StyledCloseButtonWrapper>
        )}
      </StyledModal>
    </Portal>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  closeModal: PropTypes.func,
  withCloseBtn: PropTypes.bool,
};

export default Modal;
