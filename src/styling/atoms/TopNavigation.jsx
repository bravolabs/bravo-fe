import styled from 'styled-components';

export const NavigationContainer = styled.div`
  box-sizing: border-box;
  width: ${props => (props.width ? props.width : 0)};
  border-bottom: ${props => (props.borderColor ? props.borderColor : 'white')};
  color: ${props => (props.color ? props.color : 'black')};
  padding-bottom: ${props => (props.bottomPadding ? props.bottomPadding : '16px')};
`;
