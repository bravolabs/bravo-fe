import styled from 'styled-components';

export const TooltipWrapper = styled.div`
  position: relative;

  &:hover > span:last-child {
    visibility: visible;
    opacity: 1;
  }
`;

export const Tooltip = styled.span`
  visibility: hidden;
  color: ${props => (props.color ? props.color : 'black')};
  background: ${props => (props.background ? props.background : 'white')};
  text-align: center;
  padding: 8px;
  border-radius: ${props => (props.radius ? props.radius : '2px')};

  position: absolute;
  z-index: 1;
  left: ${props => (props.x ? props.x : 0)};
  top: ${props => (props.y ? props.y : 0)};
  transform: ${props => (props.transform ? props.transform : 'none')};
  opacity: 0;
  transition: opacity ${props => (props.transistionLength ? props.transistionLength : '0.3s')};

  /* Tooltip arrow */
  &::after {
    content: '';
    position: absolute;
    left: ${props => (props.arrowX ? props.arrowX : 0)};
    top: ${props => (props.arrowY ? props.arrowY : 0)};
    transform: ${props => (props.arrowTransform ? props.arrowTransform : 'none')};
    border-width: ${props => (props.arrowWidth ? props.arrowWidth : '5px')};
    border-style: solid;
    border-color: ${props => (props.borderColor ? props.borderColor : 'white')};
  }
`;
