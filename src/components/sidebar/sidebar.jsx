import styled from 'styled-components';

import Row from '../row/row';
import Burger from '../burger/burger';
import Search from '../../search/search';

const StyledSidebar = styled.div`
  width: 15%;
  height: 100vh;
  padding: 1.2rem 0.5rem 0;

  background-color: var(--bg-color-lighter);
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Row style={{ gap: '2rem' }}>
        <Burger />
        <Search />
      </Row>
    </StyledSidebar>
  );
};

export default Sidebar;
