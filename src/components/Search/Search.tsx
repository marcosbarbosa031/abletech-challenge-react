import { SearchForm, SearchInput, SearchButton } from "./Search.style";
import { ISearchProps } from "./Search.types";

const Search = ({ onSubmit, inputValue, inputOnChange }: ISearchProps) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchInput
        type="text"
        placeholder="Github username"
        value={inputValue}
        onChange={inputOnChange}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};

export default Search;
