import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SearchWrapper, TextWrapper } from './search.styles';
import { IoMdSearch } from 'react-icons/io';
import { searchTeam } from '../../actions/search';
import Fuse from 'fuse.js';

const Search = ({ searchArray, searchTeam }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    searchTeam(searchTerm, searchArray);
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

export default connect(
  null,
  { searchTeam }
)(Search);
