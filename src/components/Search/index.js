import React from 'react';
import { SearchWrapper, TextWrapper } from './search.styles';

const Search = () => {
    return (
        <React.Fragment>
            <SearchWrapper>
                <TextWrapper>
                    <input placeholder="Search"/>
                </TextWrapper>
            </SearchWrapper>
        </React.Fragment>
    )
}

export default Search;