import Button from "../button/button";
import { StyledCross, StyledSearch, StyledWrapper } from "./search.styles";
import PropTypes from "prop-types";

const Search = ({ onChange, value: searchText = '', ...rest }) => {
  const onChangeHandler = (event) => {
    onChange(event.target.value);
  };

  const onClearClickHandler = () => {
    onChange("");
  };

  return (
    <StyledWrapper>
      <StyledSearch
        type="search"
        placeholder="Search..."
        name="search"
        onChange={onChangeHandler}
        value={searchText}
        {...rest}
      />
      {searchText.length > 0 && (
        <StyledCross onClick={onClearClickHandler}>
          <Button
            type="empty"
            backgroundColor="transparent"
            style={{ fontSize: "1rem" }}
            data-testid="clear"
          >
            &#x2715;
          </Button>
        </StyledCross>
      )}
    </StyledWrapper>
  );
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
