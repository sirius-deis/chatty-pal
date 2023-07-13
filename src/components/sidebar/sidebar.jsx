import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';

import Row from '../row/row';
import Burger from '../burger/burger';
import Search from '../search/search';
import List from '../list/list';
import Conversation from '../conversation/conversation';

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 100vh;
  padding: 1.2rem 0 0;
  background-color: var(--bg-color-lighter);
`;

const StyledScroll = styled.div`
  width: 100%;
  padding-top: 1.2rem;
  overflow-y: scroll;
`;

const Sidebar = ({ toggleClickHandler }) => {
  const [conversations, isLoading, error] = useFetch('conversations');
  return (
    <StyledSidebar>
      <Row style={{ gap: '2rem', padding: '0 1rem' }}>
        <Burger onClick={toggleClickHandler} />
        <Search />
      </Row>
      <StyledScroll>
        <List>
          {conversations &&
            conversations.conversations.map((item, i) => <Conversation key={i} {...item} />)}
        </List>
      </StyledScroll>
    </StyledSidebar>
  );
};

export default Sidebar;
