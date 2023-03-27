import styled from "styled-components";

export const SearchRepoContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  background: #242424;
`;

export const SearchRepoHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 100px;
  background: #242424;
  box-shadow: rgb(0 0 0 / 20%) 0px 9px 14px -4px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 20px 30px 30px;
`;

export const SearchRepoTitle = styled.h1`
  max-width: 750px;
  width: 100%;
`;

export const SearchRepoListItemTitle = styled.span`
  color: #f4f4f4;
  font-size: 2.5rem;
  margin: 0 20px 0 0;
  line-height: normal;
  font-weight: bold;
`;

export const SearchRepoListItemButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SearchRepoListItemButtonIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const SearchRepoError = styled.span`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;

export const SearchRepoLoading = styled.span`
  color: #000;
  font-weight: bold;
  margin-top: 10px;
`;

export const SearchRepoEmpty = styled.span`
  color: #000;
  font-weight: bold;
  margin-top: 10px;
`;
