import styled from "styled-components";

export const SearchForm = styled.form`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: row;
`;

export const SearchInput = styled.input`
  width: 100%;
  margin-right: 5px;
  padding: 14px 10px;

  color: #e4e5e5;
  background-color: #15181b;
  border: 1px solid #666;
  border-radius: 10px;
  transition: all 0.5s;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    background-color: #202225;
    border: 1px solid #5168f4;
    border-radius: 10px;
  }
`;

export const SearchButton = styled.button`
  border-radius: 10px;
  background-color: #5168f4;
  color: #f4f4f4;
  border: none;
  padding: 10px 10px;
  transition: all 0.5s;
  outline: none;

  &:hover {
    background-color: #6676e0;
  }

  &__icon {
    background: url("/assets/icons/search.svg") center center no-repeat;
    width: 40px;
    height: 30px;
    display: block;
  }
`;
