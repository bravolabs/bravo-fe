import React from 'react';
import styled from 'styled-components';

export const FillButton = styled.button`
  border: none;
  text-decoration: none;
  background: none;
  background: ${props => (props.background ? props.background : 'white')};
  ${props => (props.disabled ? `background-color: ${props.disabledColor || '#EBECF0'};` : null)};
  font-size: ${props => (props.fontSize ? props.fontSize : '1.6rem')};
  color: ${props => (props.color ? props.color : 'black')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '300')};
  padding: 1em 1.25em;
  box-shadow: ${props => (props.shadow ? props.shadow : '0px 2px 2px rgba(0, 0, 0, 0.1)')};
  border-radius: ${props => (props.radius ? props.radius : '4px')};

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
