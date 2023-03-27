import React, { useState } from "react";
import RepoList from "../../components/RepoCard/RepoCard";
import Search from "../../components/Search/Search";
import {
  SearchRepoContainer,
  SearchRepoListItemTitle,
  SearchRepoHeader,
} from "./SearchRepo.style";
import { IRepos } from "./SearchRepo.types";

const SearchRepo: React.FC = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState<IRepos[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data));
  };

  return (
    <SearchRepoContainer>
      <SearchRepoHeader>
        <SearchRepoListItemTitle>Github</SearchRepoListItemTitle>
        <Search
          inputOnChange={(event) => setUsername(event.target.value)}
          inputValue={username}
          onSubmit={handleSubmit}
        />
      </SearchRepoHeader>

      <RepoList repos={repos} />
    </SearchRepoContainer>
  );
};

export default SearchRepo;
