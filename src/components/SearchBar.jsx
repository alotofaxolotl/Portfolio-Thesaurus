import React, { useRef } from 'react';
import styled from 'styled-components';

import Button from './Button';

const SearchContainer = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin: 3rem auto;
`;

const SearchInput = styled.input`
  border: 1px solid black;
  border-radius: 12px;
  padding: 1rem;
  font: inherit;
  font-size: large;
  margin-right: 1rem;
  flex-grow: 3;
`;

const SearchBar = (props) => {
  const searchRef = useRef();
  const formRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const searchTerm = searchRef.current.value.trim();
    if (searchTerm.length === 0) {
      return;
    }
    props.onSearch(searchTerm);
    formRef.current.reset();
  };

  return (
    <form
      onSubmit={submitHandler}
      ref={formRef}
    >
      <SearchContainer>
        <SearchInput
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
          ref={searchRef}
        />
        <Button type="submit">Search</Button>
      </SearchContainer>
    </form>
  );
};

export default SearchBar;
