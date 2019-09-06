import styled from 'styled-components';

export const PathSVG = styled.svg`
  ${props => (props.svgHeight ? `height: ${props.svgHeight};` : null)}
  ${props => (props.svgWidth ? `width: ${props.svgWidth};` : null)}
    .paths {
    fill: none;
    stroke: ${props => (props.color ? props.color : '#ffff')};
    stroke-miterlimit: ${props => (props.mitter ? props.mitter : '10')};
    stroke-width: ${props => (props.strokeWidth ? props.strokeWidth : '12px')};
  }
`;
