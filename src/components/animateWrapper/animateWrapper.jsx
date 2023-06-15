import React from 'react';
import useDelayUnmount from '../../hooks/useDelayUnmount';

const AnimateWrapper = ({ children, isMounted, mountedStyle, unmountedStyle }) => {
  const shouldRender = useDelayUnmount(isMounted, 200);
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
