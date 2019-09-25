import React from 'react';
import { Container } from './paginationbar.styles';

const PaginationBar = ({ moveToPage, current, previous, next }) => (
  <Container>
    <button
      disabled={previous ? false : true}
      onClick={() => (previous ? moveToPage(previous) : null)}>
      Previous
    </button>
    <span>{current}</span>
    <button disabled={next ? false : true} onClick={() => (next ? moveToPage(next) : null)}>
      Next
    </button>
  </Container>
);

export default PaginationBar;
