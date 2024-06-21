import React from "react";
import PropTypes from "prop-types";
import { StyledList, StyledListItem } from "./list.styles";

const List = ({ children, dir = "column" }) => {
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
