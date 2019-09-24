import React, { useState } from 'react';
import { SearchWrapper, TextWrapper } from './search.styles';
import { IoMdSearch } from 'react-icons/io';
import Fuse from 'fuse.js';

const Search = ({ searchArray }) => {
  console.log(searchArray);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(searchTerm);
    setSearchTerm('');
  };
  return (
    <React.Fragment>
      <SearchWrapper>
        <TextWrapper>
          <IoMdSearch className="icon" />
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </form>
        </TextWrapper>
      </SearchWrapper>
    </React.Fragment>
  );
};

export default Search;
