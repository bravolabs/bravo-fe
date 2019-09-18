import React from 'react';
import { Container } from './paginationbar.styles';

const PaginationBar = ({ fnPrevious, fnNext, currentPage }) => (
  <Container>
    <button onClick={fnPrevious}>Previous</button>
    <span>{currentPage}</span>
    <button onClick={fnNext}>Next</button>
  </Container>
);

export default PaginationBar;
