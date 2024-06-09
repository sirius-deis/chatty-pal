import { StyledCross, StyledSearch, StyledWrapper } from "./search.styles";
import PropTypes from "prop-types";

const Search = ({ onSearchTermChange, ...rest }) => {
  const onChangeHandler = (event) => {
    onSearchTermChange(event.target.value);
  };

  const onClearClickHandler = () => {
    onSearchTermChange("");
  };

  return (
    <StyledWrapper>
      <StyledSearch
        type="search"
        placeholder="Search"
        name="search"
        onChange={onChangeHandler}
        {...rest}
      />
      {rest.value?.length > 0 && (
        <StyledCross onClick={onClearClickHandler}>&#x2715;</StyledCross>
      )}
    </StyledWrapper>
  );
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired,
};

export default Search;
