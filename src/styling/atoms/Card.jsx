import styled from 'styled-components';

export const Card = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : '1.6rem')};
  color: ${props => (props.color ? props.color : 'black')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '300')};
  padding: 24px;
  border-radius: ${props => (props.radius ? props.radius : '4px')};
  ${props => (props.shadow ? `box-shadow: ${props.shadow};` : null)};
  background-color: white;
`;
