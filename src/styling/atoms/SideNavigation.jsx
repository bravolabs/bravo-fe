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

export const Item = styled.button`
  width: ${props => (props.itemSize ? props.itemSize : '48px')};
  height: ${props => (props.itemSize ? props.itemSize : '48px')};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.itemBackground ? props.itemBackground : '48px')};
  border-radius: ${props => (props.radius ? props.radius : '4px')};
  ${props => (props.shadow ? `box-shadow: ${props.shadow};` : null)};

  &:hover {
    ${props => (props.hoverBackground ? `background-color: ${props.hoverBackground};` : null)};
    ${props => (props.hoverShadow ? `box-shadow: ${props.hoverShadow};` : null)};
    ${props => (props.hoverBorder ? `border: ${props.hoverBorder};` : null)};
  }

  &:focus {
    outline: none;
    ${props => (props.focusBackground ? `background-color: ${props.focusBackground};` : null)};
    ${props => (props.focusShadow ? `box-shadow: ${props.focusShadow};` : null)};
    ${props => (props.focusBorder ? `border: ${props.focusBorder};` : null)};
  }
`;
