import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children, wrapperId }) => {
  return createPortal(children, document.getElementById(wrapperId));
};

Portal.propTypes = {
  children: PropTypes.node,
  wrapperId: PropTypes.string,
};

export default Portal;
