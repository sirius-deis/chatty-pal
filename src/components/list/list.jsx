import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledList = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: flex-start;
  justify-content: center;
  list-style: none;
`;

export const StyledListItem = styled.li`
  width: 100%;
  cursor: pointer;
`;

const List = ({ children, dir }) => {
  const renderList = React.Children.map(children, (child) => (
    <StyledListItem>{child}</StyledListItem>
  ));
  return <StyledList direction={dir}>{renderList}</StyledList>;
};

List.propTypes = {
  children: PropTypes.node,
  dir: PropTypes.oneOf("column", "row"),
};

export default List;
