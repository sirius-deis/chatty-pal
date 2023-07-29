import styled from 'styled-components';
import { useState } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [conversations, isLoading, error] = useFetch('chats');

  const onSearchTermChange = (value) => {
    setSearchTerm(value);
  };

  const chats = conversations?.chats;

  const regexp = new RegExp(searchTerm);

  return (
    <StyledSidebar>
      <Row style={{ gap: '2rem', padding: '0 1rem' }}>
        <Burger onClick={toggleMenuClickHandler} />
        <Search searchTerm={searchTerm} onSearchTermChange={onSearchTermChange} />
      </Row>
      <StyledScroll>
        {!isLoading ? (
          <List>
            {chats &&
              chats
                .filter((item) => regexp.test(item.title))
                .map((item) => (
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
