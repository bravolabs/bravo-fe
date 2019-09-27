import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SearchWrapper, TextWrapper } from './search.styles';
import { IoMdSearch } from 'react-icons/io';
import { searchTeam } from '../../actions/search';

const Search = ({ searchArray, searchTeam }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async value => {
    await setSearchTerm(value);
    if (value !== '') {
      await searchTeam(value, searchArray);
    } else {
      console.log(searchArray);
      searchTeam(null, searchArray);
    }
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
              onChange={e => {
                e.preventDefault();
                handleSubmit(e.target.value);
              }}
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
