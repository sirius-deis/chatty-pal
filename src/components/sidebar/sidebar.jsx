import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa6";
import { fetchChats } from "../../store/chat/chat.actions";
import useFetch from "../../hooks/useFetch";

import Row from "../row/row";
import Burger from "../burger/burger";
import Search from "../search/search";
import List from "../list/list";
import ChatBox from "../chatBox/chatBox";
import Loader from "../loader/loader";
import Error from "../error/error";
import Button from "../button/button";

import { StyledScroll, StyledSidebar } from "./sidebar.styles";

const Sidebar = ({ toggleMenuClickHandler }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [chats, isLoading, error] = useFetch("chats");
  const chatState = useSelector((state) => state.chat);
  const [isSearchStarted, setIsSearchStarted] = useState(false);
  const onSearchTermChange = (value) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    if (chats) {
      dispatch(fetchChats(chats));
    }
  }, [chats, dispatch]);

  const regexp = new RegExp(searchTerm);

  const resetSearchTerm = () => {
    setSearchTerm("");
    setIsSearchStarted(false);
  }

  return (
    <StyledSidebar>
      <Row style={{ gap: "2rem", padding: "0 1rem" }}>
        {isSearchStarted && searchTerm ? (
          <Button
            type="empty"
            backgroundColor="transparent"
            style={{ width: "2.5rem" }}
          >
            <FaArrowLeft onClick={resetSearchTerm} />
          </Button>
        ) : (
          <Burger onClick={toggleMenuClickHandler} />
        )}
        <Search
          value={searchTerm}
          onChange={onSearchTermChange}
          onFocus={() => setIsSearchStarted(true)}
        />
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
                <ChatBox key={ch.id} {...ch} />
              ))}
          </List>
        )}
      </StyledScroll>
    </StyledSidebar>
  );
};

export default Sidebar;
