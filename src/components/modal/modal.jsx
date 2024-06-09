import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../button/button";
import Portal from "../portal/portal";
import {
  StyledBackdrop,
  StyledCloseButtonWrapper,
  StyledModal,
} from "./modal.styles";

const Modal = ({
  children,
  closeModal,
  withCloseBtn,
  closeBtnTitle = "&#x2715;",
}) => {
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
            <Button
              onClick={closeModal}
              style={{ padding: "0.5rem" }}
              backgroundColor="warning"
            >
              {closeBtnTitle}
            </Button>
          </StyledCloseButtonWrapper>
        )}
      </StyledModal>
    </Portal>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  closeModal: PropTypes.func.isRequired,
  withCloseBtn: PropTypes.bool,
  closeBtnTitle: PropTypes.string,
};

export default Modal;
