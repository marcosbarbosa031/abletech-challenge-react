import { CodeSimple, LinkSimpleHorizontal, Star } from "@phosphor-icons/react";
import {
  RepoCard,
  RepoCardDescription,
  RepoCardInfoBox,
  RepoCardInfoBoxTitle,
  RepoCardTitleBox,
  RepoCardTitleLink,
  RepoListContainer,
} from "./RepoCard.style";
import { IRepoCardProps } from "./RepoCard.types";

const RepoList = ({ repos }: IRepoCardProps) => {
  return (
    <RepoListContainer>
      {repos.map((repo) => (
        <RepoCard>
          <RepoCardTitleBox>
            <LinkSimpleHorizontal size={20} color="#fff" />
            <RepoCardTitleLink href={repo.html_url} target="_blank">
              {repo.name}
            </RepoCardTitleLink>
          </RepoCardTitleBox>

          <RepoCardDescription>{repo.description}</RepoCardDescription>

          <RepoCardInfoBox>
            <Star size={20} color="#fff" />
            <RepoCardInfoBoxTitle>{repo.stargazers_count}</RepoCardInfoBoxTitle>
            {repo.language && (
              <>
                <CodeSimple size={20} color="#fff" />
                <RepoCardInfoBoxTitle>{repo.language}</RepoCardInfoBoxTitle>
              </>
            )}
          </RepoCardInfoBox>
        </RepoCard>
      ))}
    </RepoListContainer>
  );
};

export default RepoList;
