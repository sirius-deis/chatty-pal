import styled from 'styled-components';
import ListItem from '../listItem/listItem';
import Conversation from '../conversation/conversation';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  list-style: none;
`;

const List = ({ list = [] }) => {
  const renderList = list.map((item, i) => (
    <ListItem key={i}>
      <Conversation {...item} />
    </ListItem>
  ));
  return <StyledList>{renderList}</StyledList>;
};

export default List;
