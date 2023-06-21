import styled from 'styled-components';

import Row from '../row/row';
import List from '../list/list';

const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: calc(100% - 15%);
  background-color: var(--bg-color-lighter);
  z-index: 100;
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const StyledStatus = styled.div``;

const Menu = ({ style }) => {
  return (
    <StyledMenu style={style}>
      <Row>
        <StyledInfo>
          <img src='https://source.unsplash.com/random/300×300/?face' alt='avatar' />
          <h5>Name</h5>
        </StyledInfo>
      </Row>
      <Row>
        <StyledStatus>Some status</StyledStatus>
      </Row>
      <hr />
    </StyledMenu>
  );
};

export default Menu;
