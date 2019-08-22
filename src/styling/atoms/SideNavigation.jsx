import React from 'react';
import styled from 'styled-components';

export const ItemContainer = styled.div`
  box-sizing: border-box;
  width: ${props => (props.width ? props.width : '100%')};
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    border-left-width: ${props => (props.borderWidth ? props.borderWidth : '4px')};
    border-left-color: ${props => (props.borderColor ? props.borderColor : 'white')};
  }
`;
