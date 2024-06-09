import { StyledCross, StyledSearch, StyledWrapper } from "./search.styles";

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
      {searchTerm.length > 0 && (
        <StyledCross onClick={onClearClickHandler}>&#x2715;</StyledCross>
      )}
    </StyledWrapper>
  );
};

export default Search;
