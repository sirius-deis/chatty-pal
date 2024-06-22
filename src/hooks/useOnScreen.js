import { useEffect, useState } from "react";

const useOnScreen = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIsIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
    return observer.disconnect();
  }, []);

  return [isIntersecting];
};

export default useOnScreen;
