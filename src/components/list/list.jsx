import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  list-style: none;
`;

export const StyledListItem = styled.li`
  width: 100%;
  cursor: pointer;
`;

const List = ({ children }) => {
  const renderList = React.Children.map(children, (child) => (
    <StyledListItem>{React.cloneElement(child)}</StyledListItem>
  ));
  return <StyledList>{renderList}</StyledList>;
};

export default List;
