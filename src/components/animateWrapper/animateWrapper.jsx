import React from 'react';
import useDelayUnmount from '../../hooks/useDelayUnmount';

const AnimateWrapper = ({ children, isMounted, mountedStyle, unmountedStyle, delay }) => {
  const shouldRender = useDelayUnmount(isMounted, delay);
  return (
    <>
      {shouldRender &&
        React.Children.map(children, (child) =>
          React.cloneElement(child, { style: isMounted ? mountedStyle : unmountedStyle }),
        )}
    </>
  );
};

export default AnimateWrapper;
