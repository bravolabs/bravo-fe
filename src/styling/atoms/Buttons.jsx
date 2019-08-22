import React from 'react';
import styled from 'styled-components';

export const BaseButton = styled.button`
  border: none;
  text-decoration: none;
  background: none;
  font-size: ${props => (props.fontSize ? props.fontSize : '1.6rem')};
  color: ${props => (props.color ? props.color : 'black')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '300')};
  padding: 1em 1.25em;
  border-radius: ${props => (props.radius ? props.radius : '4px')};
  ${props => (props.shadow ? `box-shadow: ${props.shadow};` : null)};

  &:hover {
    ${props => (props.hoverBackground ? `background-color: ${props.hoverBackground};` : null)};
    ${props => (props.hoverColor ? `color: ${props.hoverColor};` : null)};
    ${props => (props.hoverShadow ? `box-shadow: ${props.hoverShadow};` : null)};
    ${props => (props.hoverBorder ? `border: ${props.hoverBorder};` : null)};
  }

  &:focus {
    outline: none;
    ${props => (props.focusBackground ? `background-color: ${props.focusBackground};` : null)};
    ${props => (props.focusColor ? `color: ${props.focusColor};` : null)};
    ${props => (props.focusShadow ? `box-shadow: ${props.focusShadow};` : null)};
    ${props => (props.focusBorder ? `border: ${props.focusBorder};` : null)};
    ${props => (props.focusOutline ? `outline: ${props.focusOutline};` : null)};
  }
`;

export const FillButton = styled(BaseButton)`
  background: ${props => (props.background ? props.background : 'white')};
  ${props =>
    props.disabled ? `background-color: ${props.disabledBackground || '#EBECF0'};` : null};
`;