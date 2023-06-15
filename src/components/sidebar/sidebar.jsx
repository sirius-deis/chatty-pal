import styled from 'styled-components';

import Row from '../row/row';
import Burger from '../burger/burger';
import Search from '../search/search';
import List from '../list/list';

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 15%;
  height: 100vh;
  padding: 1.2rem 0 0;
  background-color: var(--bg-color-lighter);
`;

const StyledScroll = styled.div`
  width: 100%;
  overflow-y: scroll;
`;

const dummy = {
  image: 'https://source.unsplash.com/random/300×300/?face',
  name: 'John Snow',
  message:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  time: '2023-06-14',
  unreadAmount: 5,
  online: true,
};

const list = Array(20).fill(dummy);

const Sidebar = ({ toggleClickHandler }) => {
  return (
    <StyledSidebar>
      <Row style={{ gap: '2rem', padding: '0 1rem' }}>
        <Burger onClick={toggleClickHandler} />
        <Search />
      </Row>
      <StyledScroll>
        <List list={list} />
      </StyledScroll>
    </StyledSidebar>
  );
};

export default Sidebar;
