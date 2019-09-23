import React from 'react';
import { SearchWrapper, TextWrapper } from './search.styles';
import { IoMdSearch } from "react-icons/io";

const Search = () => {
    return (
        <React.Fragment>
            <SearchWrapper>
                <TextWrapper>
                    <IoMdSearch className="icon"/>
                    <input placeholder="Search"/>
                </TextWrapper>
            </SearchWrapper>
        </React.Fragment>
    )
}

export default Search;