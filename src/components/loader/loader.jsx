import styled from "styled-components";

const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000 10%, var(--warning)) content-box;
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      #000 1deg 20deg,
      #0000 21deg 36deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - 20px),
      #000 calc(100% - 8px)
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: s4 1s infinite steps(10);
  @keyframes s4 {
    to {
      transform: translate(-50%, -50%) rotate(1turn);
    }
  }
`;

const Loader = () => {
  return <StyledLoader />;
};

export default Loader;
