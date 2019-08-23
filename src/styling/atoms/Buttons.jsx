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
  ${props => (props.disabled ? `color: ${props.disabledColor || '#B0B7C3'};` : null)};

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
  ${props => (props.disabled ? `background: ${props.disabledBackground || '#EBECF0'};` : null)};
`;

export const OutlineButton = styled(BaseButton)`
  border-width: ${props => (props.borderWidth ? props.borderWidth : '1px')};
  border-color: ${props => (props.borderColor ? props.borderColor : 'black')};
  border-style: ${props => (props.borderStyle ? props.borderStyle : 'solid')};
  ${props => (props.disabled ? `border-color: ${props.disabledBorderColor || '#EBECF0'};` : null)};
  ${props => (props.disabled ? `border-width: ${props.disabledBorderWidth || '1px'};` : null)};

  &:hover {
    ${props => (props.hoverBorderColor ? `border-color: ${props.hoverBorderColor};` : null)};
    ${props => (props.hoverBorderWidth ? `border-width: ${props.hoverBorderWidth};` : null)};
  }

  &:focus {
    ${props => (props.focusBorderColor ? `border-color: ${props.focusBorderColor};` : null)};
    ${props => (props.focusBorderWidth ? `border-width: ${props.focusBorderWidth};` : null)};
  }
`;

export const GhostButton = styled(BaseButton);
