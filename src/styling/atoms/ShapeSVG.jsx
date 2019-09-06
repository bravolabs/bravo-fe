import styled from 'styled-components';

const ShapeSVG = styled.svg`
  ${props => (props.svgHeight ? `height: ${props.svgHeight};` : null)}
  ${props => (props.svgWidth ? `width: ${props.svgWidth};` : null)}
    g {
    fill: ${props => (props.color ? props.color : '#ffff')};
    stroke: ${props => (props.color ? props.color : '#ffff')};
    stroke-miterlimit: ${props => (props.mitter ? props.mitter : '10')};
    stroke-width: ${props => (props.strokeWidth ? props.strokeWidth : '0px')};
  }
`;

export default ShapeSVG;
