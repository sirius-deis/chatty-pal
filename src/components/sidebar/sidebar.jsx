import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats } from "../../store/chat/chat.actions";
import { signOut } from "../../store/user/user.actions";
import useFetch from "../../hooks/useFetch";

import Row from "../row/row";
import Burger from "../burger/burger";
import Search from "../search/search";
import List from "../list/list";
import Conversation from "../conversation/conversation";
import Loader from "../loader/loader";
import Error from "../error/error";

import { StyledScroll, StyledSidebar } from "./sidebar.styles";

const Sidebar = ({ toggleMenuClickHandler, chatClickHandler }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [chats, isLoading, error] = useFetch("chats");
  const chatState = useSelector((state) => state.chat);
  const onSearchTermChange = (value) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    if (error) {
      dispatch(signOut());
      return;
    }
    if (chats) {
      dispatch(fetchChats(chats));
    }
  }, [chats, dispatch]);

  const regexp = new RegExp(searchTerm);

  return (
    <StyledSidebar>
      <Row style={{ gap: "2rem", padding: "0 1rem" }}>
        <Burger onClick={toggleMenuClickHandler} />
        <Search value={searchTerm} onChange={onSearchTermChange} />
      </Row>
      <StyledScroll>
        {isLoading && <Loader />}
        {!isLoading && error && (
          <Error>Something went wrong. Please reload the page</Error>
        )}
        {!isLoading && !error && (
          <List>
            {chatState?.chats
              ?.filter((ch) => regexp.test(ch.title))
              .sort((ch1, ch2) => Date.parse(ch1.time) - Date.parse(ch2.time))
              .map((ch) => (
                <Conversation onClick={chatClickHandler} key={ch.id} {...ch} />
              ))}
          </List>
        )}
      </StyledScroll>
    </StyledSidebar>
  );
};

export default Sidebar;
