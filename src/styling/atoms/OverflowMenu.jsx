import styled from 'styled-components';

export const MenuContainer = styled.div`
  margin: 0;
  padding: 0;
  background: ${props => (props.background ? props.background : 'none')};
  box-shadow: ${props => (props.shadow ? props.shadow : '0px 10px 20px rgba(0, 0, 0, 0.15)')};
  position: absolute;
  left: ${props => (props.x ? props.x : 0)};
  top: ${props => (props.y ? props.y : 0)};
  ${props => (props.transform ? `tranform: ${props.transform};` : null)};
`;

export const MenuItem = styled.button`
  border: ${props => (props.border ? props.border : 'none')};;
  background: none;
  padding: 16px 12px;
  color: ${props => (props.color ? props.color : 'black')};
  background: ${props => (props.background ? props.background : 'white')};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;

  &:hover {
    ${props => (props.hoverColor ? `color: ${props.hoverColor};` : null)};
    ${props => (props.hoverBackground ? `background: ${props.hoverBackground};` : null)};
    ${props => (props.hoverBorderColor ? `border-color: ${props.hoverBorderColor};` : null)};
  }

  &:focus {
    outline: none;
    ${props => (props.focusColor ? `color: ${props.focusColor};` : null)};
    ${props => (props.focusBackground ? `background: ${props.focusBackground};` : null)};
    ${props => (props.focusBorderColor ? `border-color: ${props.focusBorderColor};` : null)};
  }

  & > * {
    margin-right: 8px;
  }

  *:last-child {
    margin-right: 0px;
  }
`;
