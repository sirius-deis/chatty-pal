import React from 'react';
import styled from 'styled-components';
import ListItem from '../listItem/listItem';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  list-style: none;
`;

const List = ({ children }) => {
  const renderList = React.Children.map(children, (child) => <ListItem>{React.cloneElement(child)}</ListItem>);
  return <StyledList>{renderList}</StyledList>;
};

export default List;
