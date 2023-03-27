import styled from "styled-components";

export const RepoListContainer = styled.ul`
  width: 100%;
  max-width: 600px;
  margin: 120px auto;
  list-style: none;
  height: calc(100% - 120px);
`;

export const RepoCard = styled.li`
  width: 100%;
  padding: 15px;
  margin-bottom: 25px;
  background-color: #30343a;
  border-radius: 10px;

  -webkit-box-shadow: 14px 17px 10px -4px rgba(0, 0, 0, 0.74);
  -moz-box-shadow: 14px 17px 10px -4px rgba(0, 0, 0, 0.74);
  box-shadow: 14px 17px 10px -4px rgba(0, 0, 0, 0.74);
`;

export const RepoCardTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  gap: 10px;
`;

export const RepoCardTitleLink = styled.a`
  word-break: break-all;
  color: #f4f4f4;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
  line-height: normal;
`;

export const RepoCardDescription = styled.p`
  text-align: left;
  font-size: 1rem;
  color: #d9d9d9;
  margin-bottom: 15px;
`;

export const RepoCardInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const RepoCardInfoBoxTitle = styled.p`
  margin: 0 10px 0 0;
  color: #d9d9d9;
`;
