import PropTypes from "prop-types";
import Button from "../button/button";
import Portal from "../portal/portal";
import {
  StyledBackdrop,
  StyledCloseButtonWrapper,
  StyledModal,
} from "./modal.styles";

const Modal = ({ children, clickHandler, withCloseBtn, closeBtnTitle }) => {
  const onBackdropClickHandler = (event) => {
    event.stopPropagation();
    clickHandler();
  };

  return (
    <Portal wrapperId="modal">
      <StyledBackdrop onClick={onBackdropClickHandler} />
      <StyledModal>
        {children}
        {withCloseBtn && (
          <StyledCloseButtonWrapper>
            {closeBtnTitle ? (
              <Button
                onClick={clickHandler}
                style={{ padding: "0.5rem" }}
                backgroundColor="warning"
              >
                {closeBtnTitle}
              </Button>
            ) : (
              <Button
                onClick={closeModal}
                style={{ padding: "0.5rem" }}
                backgroundColor="warning"
              >
                &#x2715;
              </Button>
            )}
          </StyledCloseButtonWrapper>
        )}
      </StyledModal>
    </Portal>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  clickHandler: PropTypes.func.isRequired,
  withCloseBtn: PropTypes.bool,
  closeBtnTitle: PropTypes.string,
};

export default Modal;
