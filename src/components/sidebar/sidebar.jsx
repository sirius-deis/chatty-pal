import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats } from '../../store/chat/chat.actions';
import useFetch from '../../hooks/useFetch';

import Row from '../row/row';
import Burger from '../burger/burger';
import Search from '../search/search';
import List from '../list/list';
import Conversation from '../conversation/conversation';
import Loader from '../loader/loader';
import Error from '../error/error';

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 100vh;
  padding: 1.2rem 0 0;
  background-color: var(--bg-color-lighter);
`;

const StyledScroll = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  padding-top: 1.2rem;
  overflow-y: scroll;
`;

const Sidebar = ({ toggleMenuClickHandler, chatClickHandler }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [chats, isLoading, error] = useFetch('chats');
  const chatState = useSelector((state) => state.chat);
  const onSearchTermChange = (value) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    if (chats) {
      dispatch(fetchChats(chats));
    }
  }, [chats, dispatch]);

  const regexp = new RegExp(searchTerm);

  return (
    <StyledSidebar>
      <Row style={{ gap: '2rem', padding: '0 1rem' }}>
        <Burger onClick={toggleMenuClickHandler} />
        <Search searchTerm={searchTerm} onSearchTermChange={onSearchTermChange} />
      </Row>
      <StyledScroll>
        {isLoading && <Loader />}
        {!isLoading && error && <Error>Something went wrong. Please reload the page</Error>}
        {!isLoading && !error && (
          <List>
            {chatState &&
              chatState.chats &&
              chatState.chats
                .filter((item) => regexp.test(item.title))
                .sort((ch1, ch2) => Date.parse(ch1.time) - Date.parse(ch2.time))
                .map((item) => (
                  <Conversation onClickHandler={chatClickHandler} key={item.id} {...item} />
                ))}
          </List>
        )}
      </StyledScroll>
    </StyledSidebar>
  );
};

export default Sidebar;
