import React, { useState } from 'react';
import { SearchWrapper, TextWrapper } from './search.styles';
import { IoMdSearch } from 'react-icons/io';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  return (
    <React.Fragment>
      <SearchWrapper>
        <TextWrapper>
          <IoMdSearch className="icon" />
          <input placeholder="Search" />
        </TextWrapper>
      </SearchWrapper>
    </React.Fragment>
  );
};

export default Search;
