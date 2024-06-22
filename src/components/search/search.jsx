import Button from "../button/button";
import { StyledCross, StyledSearch, StyledWrapper } from "./search.styles";
import PropTypes from "prop-types";

const Search = ({ onChange, ...rest }) => {
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
        placeholder="Search"
        name="search"
        onChange={onChangeHandler}
        {...rest}
      />
      {rest.value?.length > 0 && (
        <StyledCross onClick={onClearClickHandler}>
          <Button
            type="empty"
            backgroundColor="transparent"
            style={{ fontSize: "1rem" }}
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
