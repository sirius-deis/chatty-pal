import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';

import Row from '../row/row';
import Burger from '../burger/burger';
import Search from '../search/search';
import List from '../list/list';
import Conversation from '../conversation/conversation';
import Loader from '../loader/loader';

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

const Sidebar = ({ toggleMenuClickHandler, chatClickHandler }) => {
  const [conversations, isLoading, error] = useFetch('chats');
  return (
    <StyledSidebar>
      <Row style={{ gap: '2rem', padding: '0 1rem' }}>
        <Burger onClick={toggleMenuClickHandler} />
        <Search />
      </Row>
      <StyledScroll>
        {!isLoading ? (
          <List>
            {conversations &&
              conversations.chats.map((item) => (
                <Conversation onClickHandler={chatClickHandler} key={item.id} {...item} />
              ))}
          </List>
        ) : (
          <Loader />
        )}
      </StyledScroll>
    </StyledSidebar>
  );
};

export default Sidebar;
